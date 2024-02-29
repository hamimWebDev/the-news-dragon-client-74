import React, { useContext } from 'react';
import { AuthContext } from '../../layouts/providers/AuthProviders';

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;