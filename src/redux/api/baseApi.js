import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setUser } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({ 
    baseUrl: 'https://my-portfolio-server-bay.vercel.app',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;

        if (token) {
            headers.set('authorization', `${token}`);
        }

        return headers;
    },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    
    if (result?.error?.originalStatus === 401) {
        console.log('Sending refresh token');

        const res = await fetch('https://my-portfolio-server-bay.vercel.app/refresh-token', {
            method: 'POST',
            credentials: 'include',
        });
        
        const data = await res.json();

        if (data?.accessToken) {
            console.log('ok');
            const user = api.getState().auth.user;
            api.dispatch(setUser({ user, token: data.accessToken }));
            result = await baseQuery(args, api, extraOptions);
        } else {
            console.log('not ok');
            api.dispatch(logOut());
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
});