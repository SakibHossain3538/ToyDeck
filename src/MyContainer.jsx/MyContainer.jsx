import React from 'react'

function MyContainer({className,children}) {
  return (
      <div className={`${className} container mx-auto px-4 sm:px-6 lg:px-8 my-auto`}>
             {children}
    </div>
  )
}

export default MyContainer