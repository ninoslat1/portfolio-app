import { TGithubProj, TLanguages } from 'lib/types';
import React, { useEffect, useState } from 'react'
import { portoRepo } from '~/templates/ProjectRepoList';

const Projects = () => {
  const [repos, setRepos] = useState<TGithubProj[]>([]);
  const [languages, setLanguages] = useState<{ [key: string]: TLanguages }>({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const allRepos: TGithubProj[] = []
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

      const filterRepos = allRepos.filter((repo: TGithubProj) => portoRepo.includes(repo.name))
      setRepos(filterRepos)
      
      const langPromises = filterRepos.map(async (repo) => {
        const langResponse = await fetch(repo.languages_url, {
          headers: {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
          }
        });
        const languages = await langResponse.json();
        return { name: repo.name, languages };
      });

      const languagesData = await Promise.all(langPromises);
      const languagesMap = languagesData.reduce<{ [key: string]: TLanguages }>((acc, { name, languages }) => {
        acc[name] = languages;
        return acc;
      }, {});

      setLanguages(languagesMap);
      console.log(languagesMap)
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
    </section>
  )
}

export default Projects