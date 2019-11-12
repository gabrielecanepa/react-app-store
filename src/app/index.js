import React, { useEffect, useState } from 'react'
import { AppsList, Error, Loading } from './screens'
import { GlobalStyle } from './theme'
import { apiGetApps, apiRequest } from 'utils/requests'

const App = () => {
  const [apps, setApps] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { json, requestError } = await apiRequest(apiGetApps, [])
      requestError ? setError(requestError) : setApps(json)
      setIsLoading(false)
    })()
  }, [])

  return (
    <>
      <GlobalStyle />
      {isLoading ? <Loading /> : error ? <Error error={error} /> : <AppsList apps={apps} />}
    </>
  )
}

export default App
