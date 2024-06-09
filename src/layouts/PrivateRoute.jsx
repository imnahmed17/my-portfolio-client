import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const email = import.meta.env.USER_EMAIL;
    const password = import.meta.env.USER_PASSWORD;

    if (email === '' || password === '') {
        return <Navigate to='/' replace={true} />;
    }

    return children;
};

export default PrivateRoute;