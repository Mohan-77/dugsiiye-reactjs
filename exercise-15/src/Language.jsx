import React, { useContext } from 'react'
import userContext from './userContext.js'

export default function Language() {
    const lan = useContext(userContext);
  return (
    <div>Language: {lan}</div>
  )
}
