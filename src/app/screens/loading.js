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
`

const Loading = () => (
  <FlexContainer>
    <Loader height="150" width="150" />
  </FlexContainer>
)

export default Loading
