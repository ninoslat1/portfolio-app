import { LoaderFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { projectList } from 'lib/projectList';
import { TProj, TLanguages, TGithubProj } from 'lib/types';
import { FC, useEffect, useState } from 'react'
import { TemplatePills } from '~/templates/Pills';
import { portoRepo, sanitizePortoRepo } from '~/templates/ProjectRepoList';

const Projects:FC<{ project: TGithubProj[] }> = ({project}) => {
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
              <li key={repo.id} className='project-cards'>
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