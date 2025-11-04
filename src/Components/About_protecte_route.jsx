import { useContext } from 'react'
import { ToysContext } from '../Context/Context'
import { Navigate,useLocation } from 'react-router'
import React from 'react'
import Loading from './Loading'

function About_protecte_route({children}) {
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

export default About_protecte_route