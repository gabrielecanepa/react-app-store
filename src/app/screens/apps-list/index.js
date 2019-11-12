import Header from './header'
import List from './list'
import NavMenu from './nav-menu'
import Pagination from './pagination'
import React, { useMemo, useState } from 'react'
import config from 'config'
import styled from 'styled-components'
import { paginateRecords } from 'utils'

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

const NoResultsMessage = ({ searchTerm }) => <p>{`Can't find any app matching "${searchTerm}"`}</p>

const totalSubscriptionPrice = app => app.subscriptions.reduce((total, subscription) => total + subscription.price, 0)

const AppsList = ({ apps }) => {
  const [activeCategory, setActiveCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(0)

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
            <List apps={paginateRecords(filteredApps, page, config.paginationSize)} searchTerm={searchTerm} />
          </>
        ) : (
          <NoResultsMessage searchTerm={searchTerm} />
        )}
      </MainSection>
    </FlexContainer>
  )
}

export default AppsList