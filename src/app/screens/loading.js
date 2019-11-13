import React from 'react'
import styled from 'styled-components'
import { Loader } from 'assets/icons'

const FlexContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  cursor: wait;
`

const StyledLoader = styled(Loader)`
  fill: ${({ theme }) => theme.primary};
  width: 6rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 8rem;
  }
`

const Loading = () => (
  <FlexContainer>
    <StyledLoader />
  </FlexContainer>
)

export default Loading
