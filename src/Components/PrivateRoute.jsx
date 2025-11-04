import React, { useContext } from 'react'
import { ToysContext } from '../Context/Context'
import { Navigate,useLocation } from 'react-router'
import Loading from './Loading';

function PrivateRoute({children}) {
    const { user, loading } = useContext(ToysContext)
      const location = useLocation();

    if (loading) {
       return <Loading></Loading>
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute