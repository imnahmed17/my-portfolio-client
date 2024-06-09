import { useEffect, useState } from 'react';
import { projectsNav } from './data';
import ProjectItem from './ProjectItem';
import './Projects.css';

const Projects = () => {
    const [item, setItem] = useState({ name: 'All' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [loadMore, setLoadMore] = useState(false);

    useEffect(() => {
        if (item.name === 'All') {
            fetch('https://my-portfolio-server-bay.vercel.app/projects')
                .then(res => res.json())
                .then(data => setProjects(data));
        } else {
            fetch('https://my-portfolio-server-bay.vercel.app/projects?category=' + item.name)
                .then(res => res.json())
                .then(data => setProjects(data));
        }
    }, [item, projects]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    }

    return (
        <section className='project section' id='projects'>
            <h2 className='section__title'>Projects</h2>
            <span className='section__subtitle'>Most recent works</span>
            <div>
                <div className='project__filters'>
                    {
                        projectsNav.map((item, index) => {
                            return (
                                <span 
                                    onClick={(e) => handleClick(e, index)} 
                                    className={`${active === index ? 'active-project' : ''} project__item`}
                                    key={index}
                                >
                                    {item.name}
                                </span>
                            );
                        })
                    }
                </div>
                <div className='project__container container grid'>
                    {
                        projects.slice(0, loadMore ? projects.length : 6).map(item => <ProjectItem 
                            item={item} 
                            key={item._id} 
                        />)
                    }
                </div>
                {!loadMore && (
                    <div className='project__load-group'>
                        <button onClick={() => setLoadMore(!loadMore)} className='project__load-more'>Load More</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;