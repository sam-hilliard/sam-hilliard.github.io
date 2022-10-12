import React from 'react'
import { useParams } from 'react-router-dom'

export default function Article() {

  const { id } = useParams()

  return (
    <div className="container main-container">
      Article: {id}
    </div>
  )
}
