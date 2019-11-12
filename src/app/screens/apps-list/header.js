import React, { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Cancel as CancelIcon } from 'assets/icons'
import { colors } from 'app/theme'

const StyledHeader = styled.header`
  display: flex;
  position: relative;
  text-align: center;
  margin-bottom: 1.5rem;
`

const StyledInput = styled.input`
  background-clip: padding-box;
  border: 1px solid ${colors.grayLight};
  font-size: 1rem;
  font-weight: 300;
  outline: 0;
  padding: 1rem;
  resize: none;
  transition: all 0.2s ease;
  width: 100%;
  -webkit-appearance: none;

  :focus,
  :hover {
    border: 1px solid ${colors.primary};
    box-shadow: none;
    cursor: auto;
    transition: all 0.2s ease;
  }
`

const CancelButton = styled(props => (
  <button type="button" {...props}>
    <CancelIcon />
  </button>
))`
  height: 20px;
  width: 20px;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  fill: ${colors.grayDark}50;
`

const Header = ({ searchTerm, setPage, setSearchTerm }) => {
  const inputRef = useRef(null)

  useEffect(() => inputRef.current.focus(), [])

  const onSearchTermChange = useCallback(
    event => {
      setPage(0)
      setSearchTerm(event.target.value)
    },
    [setPage, setSearchTerm]
  )

  const onCancelButtonClick = useCallback(() => {
    setSearchTerm('')
    inputRef.current.focus()
  }, [setSearchTerm])

  return (
    <StyledHeader>
      <StyledInput
        onChange={onSearchTermChange}
        placeholder="Search by app"
        ref={inputRef}
        title="Search for a specific app"
        value={searchTerm}
      />
      {searchTerm && <CancelButton onClick={onCancelButtonClick} />}
    </StyledHeader>
  )
}

export default Header
