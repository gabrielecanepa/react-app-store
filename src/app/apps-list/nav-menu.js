import React, { useCallback } from 'react'
import styled from 'styled-components'
import { colors } from 'app/theme'

const Nav = styled.nav`
  order: 1;

  @media (min-width: 720px) {
    && {
      flex: 0;
    }
  }
`

const NavList = styled.ul``

const ListItem = styled(({ active, children, ...props }) => (
  <li {...props}>
    <button disabled={active} type="button">
      {children}
    </button>
  </li>
))`
  cursor: pointer;

  button {
    border-bottom: 1px solid ${colors.gray};
    color: ${colors.black};
    cursor: pointer;
    display: block;
    font-size: 17px;
    font-weight: 300;
    padding: 1rem;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: all 0.3s ease;
    width: 100%;

    :disabled {
      color: ${colors.primary};
      cursor: initial;
    }
    :not([disabled]):hover {
      background-color: ${colors.white};
      transition: background 0.3s ease-in-out;
    }
  }
`

const Category = ({ active, category, children, onClick, ...props }) => {
  const onCategoryClick = useCallback(() => onClick(category), [category, onClick])

  return (
    <ListItem active={active} onClick={onCategoryClick} {...props}>
      {children}
    </ListItem>
  )
}

const NavMenu = ({ activeCategory, categories, setActiveCategory, setPage }) => {
  const onCategoryClick = useCallback(
    category => {
      setActiveCategory(category)
      setPage(0)
    },
    [setActiveCategory, setPage]
  )

  return (
    <Nav>
      <h2>{'Categories'}</h2>
      <NavList>
        <Category
          active={!activeCategory}
          onClick={onCategoryClick}
          title={activeCategory ? 'See all apps' : undefined}
        >
          {'All'}
        </Category>
        {categories.map(category => (
          <Category
            active={category === activeCategory}
            category={category}
            key={category}
            onClick={onCategoryClick}
            title={category !== activeCategory ? `See ${category} apps` : undefined}
          >
            {category}
          </Category>
        ))}
      </NavList>
    </Nav>
  )
}

export default NavMenu
