import React from 'react'
import styled from 'styled-components'
import { Error as ErrorIcon } from 'assets/icons'
import { colors } from 'app/theme'

const FlexContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`

const StyledIcon = styled(props => <ErrorIcon width="450" {...props} />)`
  padding: 2rem 0;
`

const Title = styled.h2`
  color: ${colors.error};
  line-height: 1;
  margin-bottom: 1rem;
`

const Message = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
`

const EmailLink = styled.a`
  text-decoration: underline;
`

const Error = ({ error }) => (
  <FlexContainer>
    <StyledIcon />
    <Title>{'Ooops! Something went wrong.'}</Title>
    <Message>
      {`Looks like you ran into a ${error.type} error (code ${error.status}). Please try to load the page again, or `}
      <EmailLink href="mailto:support@talkdesk.com">{'click here'}</EmailLink>
      {' to contact our support.'}
    </Message>
  </FlexContainer>
)

export default Error
