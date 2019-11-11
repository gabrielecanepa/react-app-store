import AppsList from './apps-list'
import EmptyState from './empty-state'
import ErrorMessage from './error-message'
import Header from './header'
import Loader from 'assets/icons/loader.svg'
import NavMenu from './nav-menu'
import Pagination from './pagination'
import React, { useEffect, useMemo, useState } from 'react'
import config from 'config'
import styled from 'styled-components'
import { apiGetApps, apiRequest } from 'utils/requests'
import { paginateRecords } from 'utils/helpers'

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 2rem auto;
  max-width: 1400px;
  text-align: center;

  > * {
    padding: 15px;
    flex: 1 100%;
  }
`

const MainSection = styled.section`
  flex: 1;
  order: 2;
  text-align: left;
  width: 100%;
`

const totalSubscriptionPrice = app => app.subscriptions.reduce((total, subscription) => total + subscription.price, 0)

const App = () => {
  const [apps, setApps] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(0)

  useEffect(() => {
    ;(async () => {
      const { json, requestError } = await apiRequest(apiGetApps, [])
      requestError ? setError(requestError) : setApps(json)
      setIsLoading(false)
    })()
  }, [])

  const categories = useMemo(
    () => [
      ...new Set(
        apps
          .map(app => app.categories)
          .flat()
          .sort()
      ),
    ],
    [apps]
  )

  const filteredApps = useMemo(
    () =>
      (activeCategory ? apps.filter(app => app.categories.includes(activeCategory)) : apps)
        .filter(app => `${app.name} ${app.description}`.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => totalSubscriptionPrice(a) - totalSubscriptionPrice(b)),
    [activeCategory, apps, searchTerm]
  )

  if (isLoading) return <img alt="Loading..." height="100" src={Loader} width="100" />

  if (error) return <ErrorMessage error={error} />

  return (
    <FlexContainer>
      <NavMenu
        activeCategory={activeCategory}
        categories={categories}
        setActiveCategory={setActiveCategory}
        setPage={setPage}
      />
      <MainSection>
        <Header searchTerm={searchTerm} setPage={setPage} setSearchTerm={setSearchTerm} />
        {filteredApps.length > 0 ? (
          <>
            <Pagination count={filteredApps.length} page={page} setPage={setPage} />
            <AppsList apps={paginateRecords(filteredApps, page, config.appsPerPage)} searchTerm={searchTerm} />
          </>
        ) : (
          <EmptyState />
        )}
      </MainSection>
    </FlexContainer>
  )
}

export default App
