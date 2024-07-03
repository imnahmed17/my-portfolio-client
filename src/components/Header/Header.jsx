import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (this.scrollY >= 80) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }

        const navItems = document.querySelectorAll('.nav__link');
        const sections = document.querySelectorAll('section');
        let currentSection = 'home';
        sections.forEach(sec => {
            if (window.scrollY >= (sec.offsetTop - 200)) {
                currentSection = sec.id;
            }
        });
        
        navItems.forEach(navItem => {
            if (navItem.href.includes(currentSection)) {
                document.querySelector('.active-link').classList.remove('active-link');
                navItem.classList.add('active-link');
            }
        });
    });

    return (
        <header className='header'>
            <nav className='nav container'>
                <Link to='/' className='nav__logo'>&lt;Noman Ahmed /&gt;</Link>
                <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a 
                                href='#home' 
                                onClick={() => setActiveNav('#home')} 
                                className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}
                            >
                                <i className='uil uil-estate nav__icon'></i> Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a 
                                href='#about' 
                                onClick={() => setActiveNav('#about')} 
                                className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}
                            >
                                <i className='uil uil-user nav__icon'></i> About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a 
                                href='#skills' 
                                onClick={() => setActiveNav('#skills')} 
                                className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}
                            >
                                <i className='uil uil-file-alt nav__icon'></i> Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a 
                                href='#projects' 
                                onClick={() => setActiveNav('#projects')} 
                                className={activeNav === '#projects' ? 'nav__link active-link' : 'nav__link'}
                            >
                                <i className='uil uil-scenery nav__icon'></i> Projects
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a 
                                href='#blogs' 
                                onClick={() => setActiveNav('#blogs')} 
                                className={activeNav === '#blogs' ? 'nav__link active-link' : 'nav__link'}
                            >
                                <i className='uil uil-blogger-alt nav__icon'></i> Blogs
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a 
                                href='#contact' 
                                onClick={() => setActiveNav('#contact')} 
                                className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}
                            >
                                <i className='uil uil-message nav__icon'></i> Contact
                            </a>
                        </li>
                        {/* <li className='nav__item'>
                            <Link 
                                to='/dashboard/add-skill' 
                                className='nav__link'
                            >
                                <i className='uil uil-window-grid nav__icon'></i> Dashboard
                            </Link>
                        </li> */}
                    </ul>
                    <i onClick={() => setToggle(false)} className='uil uil-times nav__close'></i>
                </div>
                <div onClick={() => setToggle(true)} className='nav__toggle'>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;