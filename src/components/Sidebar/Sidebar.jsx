import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            {/* Small Screen Navbar */}
            <header className='dashboard-header'>
                <nav className='nav container'>
                    <Link to='/' className='nav__logo'>&lt;Noman Ahmed /&gt;</Link>
                    <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                        <ul className='nav__list grid'>
                            <li className='nav__item'>
                                <NavLink 
                                    to='/dashboard/add-skill' 
                                    onClick={() => setToggle(!toggle)}
                                    className={({ isActive }) => isActive ? 'nav__link active-link' : 'nav__link'}
                                >
                                    <i className='uil uil-file-medical nav__icon'></i> Add Skill
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink 
                                    to='/dashboard/add-project' 
                                    onClick={() => setToggle(!toggle)}
                                    className={({ isActive }) => isActive ? 'nav__link active-link' : 'nav__link'}
                                >
                                    <i className='uil uil-file-medical nav__icon'></i> Add Project
                                </NavLink>
                            </li>
                            <li className='nav__item'>
                                <NavLink 
                                    to='/dashboard/add-blog' 
                                    onClick={() => setToggle(!toggle)}
                                    className={({ isActive }) => isActive ? 'nav__link active-link' : 'nav__link'}
                                >
                                    <i className='uil uil-file-medical nav__icon'></i> Add Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div onClick={() => setToggle(!toggle)} className='nav__toggle'>
                        <i className='uil uil-apps'></i>
                    </div>
                </nav>
            </header>
            {/* Sidebar */}
            <div className='sidebar__container'>
                <div>
                    {/* Branding & Profile Info */}
                    <Link to='/' className='nav__logo dashboard__logo'>&lt;Noman Ahmed /&gt;</Link>
                    <div className='dashboard__user'>
                        <h4 className='font-medium'>Noman Ahmed</h4>
                        <p className='text-sm'>ashiknoman17@gmail.com</p>
                    </div>
                    {/* Nav Items */}
                    <div className='sidebar-menu__item flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            <NavLink 
                                to='/dashboard/add-skill' 
                                className={({ isActive }) => isActive ? 'active-link sidebar-nav__link' : 'sidebar-nav__link'}
                            >
                                <i className='uil uil-file-medical'></i> Add Skill
                            </NavLink>
                            <NavLink 
                                to='/dashboard/add-project' 
                                className={({ isActive }) => isActive ? 'active-link sidebar-nav__link' : 'sidebar-nav__link'}
                            >
                                <i className='uil uil-file-medical'></i> Add Project
                            </NavLink>
                            <NavLink 
                                to='/dashboard/add-blog' 
                                className={({ isActive }) => isActive ? 'active-link sidebar-nav__link' : 'sidebar-nav__link'}
                            >
                                <i className='uil uil-file-medical'></i> Add Blog
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;