import React from 'react'
import TextHighlighter from 'react-highlight-words'
import styled from 'styled-components'
import { colors } from 'app/theme'
import { hexToRgba } from 'utils/helpers'

const AppContainer = styled.div`
  box-shadow: 0 2px 3px 0 ${colors.gray}, 0 0 3px 0 ${colors.gray};
  position: relative;
  transition: background 0.3s ease-in-out;
  width: 100%;
`

const AppTitle = styled.h1`
  color: ${colors.primary};
`

const BoxInfo = styled.div`
  background-color: ${colors.white};
  clear: both;
  cursor: pointer;
  flex: 1;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: ${hexToRgba(colors.grayLight, 0.3)};
  }
`

const BoxInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

const BoxInfoFooter = styled.div`
  display: flex;

  ul {
    display: inline-flex;
  }
  li {
    display: inline-flex;
    align-items: baseline;
    padding: 0 1rem 0 0;
  }
  li span {
    color: ${colors.grayDark};
  }
`

const Tags = styled.div`
  color: ${colors.primary};
  font-weight: 400;
  text-align: right;
`

const App = ({ name, description, categories, subscriptions, searchTerm }) => (
  <AppContainer>
    <BoxInfo>
      <BoxInfoContent>
        <div>
          <AppTitle>
            <TextHighlighter searchWords={[searchTerm]} textToHighlight={name} />
          </AppTitle>
          <p>
            <TextHighlighter searchWords={[searchTerm]} textToHighlight={description} />
          </p>
        </div>
        <Tags>{categories.sort().join(' / ')}</Tags>
      </BoxInfoContent>
      <BoxInfoFooter>
        <ul>
          {subscriptions.map(subscription => (
            <li key={subscription.name}>
              <span>{subscription.name}</span>{' '}
              <h3>
                {subscription.price > 0 ? (
                  <>
                    {(subscription.price / 100).toFixed(2)}
                    <sup>{'€'}</sup>
                  </>
                ) : (
                  'Free'
                )}
              </h3>
            </li>
          ))}
        </ul>
      </BoxInfoFooter>
    </BoxInfo>
  </AppContainer>
)

const AppsList = ({ apps, searchTerm }) => (
  <ul>
    {apps.map(app => (
      <li key={app.id}>
        <App searchTerm={searchTerm} {...app} />
      </li>
    ))}
  </ul>
)

export default AppsList
