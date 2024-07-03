const ProjectItem = ({ item }) => {
    return (
        <div className='project__card'>
            <figure className='project__figure'>
                <img src={item.imageUrl} alt='' loading='lazy' className='project__img' />
            </figure>
            <h3 className='project__title'>{item.title}</h3>
            <div className='project__tag__container project__tags'>
                {
                    item.tags.slice(0, 5).map((tag, index) => (
                        <div className='project__tag' key={index}>
                            <span>{tag}</span>
                        </div>
                    ))
                }
            </div>
            <div className='project__button-group'>
                <a href={item.gitLink} className='project__button' target='_blank' rel='noopener noreferrer'>
                    GitHub <i className='uil uil-link project__button-icon'></i>
                </a>
                <a href={item.liveLink} className='project__button' target='_blank' rel='noopener noreferrer'>
                    Demo <i className='bx bx-right-arrow-alt project__button-icon'></i>
                </a>
            </div>
        </div>
    );
};

export default ProjectItem;