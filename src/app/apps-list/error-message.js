import React from 'react'

const ErrorMessage = ({ error }) => (
  <>
    <h1>{error.code}</h1>
    <h4>{error.message}</h4>
  </>
)

export default ErrorMessage
