import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/features/auth/authSlice';
import './Sidebar.css';

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const handleLogOut = () => {
        dispatch(logOut());
        navigate('/');
    };

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
                    <div className='sidebar-menu__item'>
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
                <div className='sidebar-nav__button-container'>
                    <button onClick={handleLogOut} className='sidebar-nav__link sidebar-nav__button'>
                        <i className='uil uil-signout'></i> Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;