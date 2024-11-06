import { portoRepo } from "~/templates/ProjectRepoList";
import { TGithubProj, TLanguages, TProj } from "./types";

export const projectList = async (): Promise<TGithubProj[]> => {
    const allRepos: TProj[] = [];
    let page: number = 1;
    let moreRepos: boolean = true;

    try {
        while (moreRepos) {
            const response = await fetch(`https://api.github.com/user/repos?page=${page}&per_page=100`, {
                method: 'GET',
                headers: {
                    'Authorization': `token ${process.env.GITHUB_TOKEN}`
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch repos: ${response.statusText}`);
            }

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

            if (!langResponse.ok) {
                throw new Error(`Failed to fetch languages for repo ${repo.name}: ${langResponse.statusText}`);
            }

            const languages: TLanguages = await langResponse.json();
            return { repo, languages }; 
        });

        return await Promise.all(langPromises);
    } catch (err) {
        console.error(err);
        return []; // Return an empty array on error
    }
}