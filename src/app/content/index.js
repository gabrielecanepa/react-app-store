import AppsList from './apps-list'
import Error from './error'
import Loader from './loader'
import React, { useEffect, useState } from 'react'
import { apiGetApps, apiRequest } from 'utils/requests'

const Content = () => {
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

  if (isLoading) return <Loader />

  if (error) return <Error />

  return <AppsList apps={apps} />
}

export default Content
