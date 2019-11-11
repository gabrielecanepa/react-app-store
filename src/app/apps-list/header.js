import React, { useCallback } from 'react'
import styled from 'styled-components'
import { colors } from 'app/theme'

const StyledHeader = styled.header`
  display: flex;
  text-align: center;
`

const StyledInput = styled.input`
  background-clip: padding-box;
  border: 1px solid ${colors.grayLight};
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  outline: 0;
  padding: 1rem;
  resize: none;
  transition: all 0.2s ease;
  width: 100%;
  -webkit-appearance: none;

  :focus,
  :hover {
    border: 1px solid ${colors.primary};
    cursor: auto;
    transition: all 0.2s ease;
  }
`

const Header = ({ searchTerm, setPage, setSearchTerm }) => {
  const onSearchTermChange = useCallback(
    event => {
      setPage(0)
      setSearchTerm(event.target.value)
    },
    [setPage, setSearchTerm]
  )

  return (
    <StyledHeader>
      <StyledInput
        onChange={onSearchTermChange}
        placeholder="Search by App"
        title="Search for a specific app"
        value={searchTerm}
      />
    </StyledHeader>
  )
}

export default Header
