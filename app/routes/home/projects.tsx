import React, { useEffect } from 'react'

const Projects = () => {
  

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/user`, {
          method: 'GET',
          headers: {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
          }
        });
        const data = await response.json();
        console.log(data)
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
  
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