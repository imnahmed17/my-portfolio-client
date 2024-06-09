import { useEffect, useState } from 'react';

const Backend = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('https://my-portfolio-server-bay.vercel.app/skills?category=Backend')
            .then(res => res.json())
            .then(data => setSkills(data));
    }, [skills]);

    return (
        <div className='skills__content' data-aos='flip-right' data-aos-duration='2000' data-aos-delay='200'>
            <h3 className='skills__title'>Backend</h3>
            <div className='skills__box'>
                <div className='skills__group'>
                    {skills.map((skill) => (
                        <div key={skill.title} className='skills__data'>
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className='skills__name'>{skill.title}</h3>
                                <span className='skills__level'>{skill.level}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Backend;