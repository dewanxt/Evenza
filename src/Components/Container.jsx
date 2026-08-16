import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`container w-292.5 ${className}`}>
      {children}
    </div>
  )
}

export default Container
