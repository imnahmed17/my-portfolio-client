import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useCurrentToken } from '../redux/features/auth/authSlice';

const PrivateRoute = ({ children }) => {
    const token = useSelector(useCurrentToken);
    const location = useLocation();

    if (!token) {
        return <Navigate to='/login' state={{ from: location }} replace={true} />;
    }

    return children;
};

export default PrivateRoute;