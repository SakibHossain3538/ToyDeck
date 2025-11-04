import React, { useContext } from 'react'
import { ToysContext } from '../Context/Context'
import { Navigate,useLocation } from 'react-router'

function PrivateRoute({children}) {
    const { user, loading } = useContext(ToysContext)
      const location = useLocation();

  if (loading) {
    return null
  }
    if (user && user?.email) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute