/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { projectsNav } from './data';
import { useGetAllProjectQuery, useGetProjectsByCategoryQuery } from '../../redux/features/project/projectApi';
import ProjectItem from './ProjectItem';
import './Projects.css';
import Loader from './Loader';

const Projects = () => {
    const [item, setItem] = useState({ name: 'All' });
    const [active, setActive] = useState(0);
    const [loadMore, setLoadMore] = useState(false);
    const { data: projects, isLoading, refetch } = item.name === 'All'
        ? useGetAllProjectQuery()
        : useGetProjectsByCategoryQuery(item.name)

    useEffect(() => {
        refetch();
    }, [item, refetch]);

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
                        isLoading ? Array.from({ length: 6 }).map((_, index) => <Loader key={index} />) :
                        projects.slice(0, loadMore ? projects?.length : 6).map(item => <ProjectItem 
                            item={item} 
                            key={item._id} 
                        />)
                    }
                </div>
                {!loadMore && (projects?.length > 6) && (
                    <div className='project__load-group'>
                        <button onClick={() => setLoadMore(!loadMore)} className='project__load-more'>Load More</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;