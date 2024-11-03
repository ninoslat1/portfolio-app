'use client'

import { TProj, TLanguages, TGithubProj } from 'lib/types';
import { useEffect, useState } from 'react'
import { TemplatePills } from '~/templates/Pills';
import { portoRepo, sanitizePortoRepo } from '~/templates/ProjectRepoList';

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
      
      const filterRepos = allRepos.filter(repo => Object.keys(portoRepo).includes(repo.name));
        
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
    } catch (error) {
      console.error(error)
    }
  }
  
    fetchProjects();
  }, []);

  return (
    <>
      {project ? (
        <section className='p-5'>
          <div>
            <p className='panel-title'>Projects</p>
          </div>
          <div>
          <ul className='grid grid-cols-3 gap-5 py-10'>
            {project.map(({ repo, languages }) => (
              <li key={repo.id} className='dark:bg-white bg-slate-900 dark:text-slate-900 text-white p-5 rounded-lg'>
                <p className='text-xl uppercase font-extrabold font-merri'>
                  {sanitizePortoRepo(repo.name)}
                </p>
                <div className='py-2 font-qs'>
                  <strong>
                    {repo.description || 'No description available.'}
                  </strong> 
                </div>
                <div className='py-2 font-qs'>
                  <strong>Languages:</strong> 
                  <TemplatePills languages={Object.keys(languages)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        </section>
      ) : null}
    </>
  )
}

export default Projects