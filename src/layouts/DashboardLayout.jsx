import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import './Layout.css';

const DashboardLayout = () => {
    return (
        <div className='dashboard__layout'>
            <Sidebar />
            <div className='layout-group'>
                <div className='outlet'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;