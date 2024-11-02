import { TProj, TLanguages, TGithubProj } from 'lib/types';
import React, { useEffect, useState } from 'react'
import { portoRepo } from '~/templates/ProjectRepoList';

const Projects = () => {
  const [project, setProjects] = useState<TGithubProj[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const allRepos: TProj[] = []
        let page: number = 1
        let moreRepos: boolean = true

        while (moreRepos) {
          const response = await fetch(`https://api.github.com/user/repos?page=${page}&per_page=100`, {
            method: 'GET',
            headers: {
              'Authorization': `token ${process.env.GITHUB_TOKEN}`
            }
          });
    
          const repos = await response.json();
    
          if (repos.length === 0) {
           moreRepos = false;
          } else {
            allRepos.push(...repos);
            page++;
          }
        }
      
      const filterRepos = allRepos.filter(repo => portoRepo.includes(repo.name));
        
      const langPromises = filterRepos.map(async (repo) => {
        const langResponse = await fetch(repo.languages_url, {
          headers: {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
          }
        });
        const languages: TLanguages = await langResponse.json();
        return { repo, languages }; 
      });

      const languagesData = await Promise.all(langPromises);
      setProjects(languagesData)
      console.log(languagesData)
    } catch (error) {
      console.error(error)
    }
  }
  
    fetchProjects();
  }, []);

  return (
    <section>
      <div>
        <p className='panel-title'>Projects</p>
      </div>
      <div>
      <h1>Filtered Repositories with Languages</h1>
      <ul>
        {project.map(({ repo, languages }) => (
          <li key={repo.id}>
            <a href={`https://github.com/${repo.name}`} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <div>
              <strong>Description:</strong> {repo.description || 'No description available.'}
            </div>
            <div>
              <strong>Languages:</strong> {Object.keys(languages).join(', ')}
            </div>
          </li>
        ))}
      </ul>
    </div>
    </section>
  )
}

export default Projects