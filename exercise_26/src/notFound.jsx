import React from 'react'
import { useRouteError } from 'react-router'

const notFound = () => {
    const error = useRouteError()
    console.log('err', error)
  return (
    <div>
      <h2>{error.statusText}</h2>
      <p>Sorry this Page not exist.</p>
    </div>
  )
}

export default notFound
