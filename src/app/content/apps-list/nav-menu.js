import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { CloseMenu as CloseMenuIcon, OpenMenu as OpenMenuIcon } from 'assets/icons'

const Nav = styled.nav`
  flex: 1 100%;
  padding: 1rem;
  order: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex: 0;
  }
`

const NavCollapse = styled(({ icon, ...props }) => React.createElement(icon, props))`
  cursor: pointer;
  fill: ${({ theme }) => theme.secondaryText};
  width: 0.5rem;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: none;
  }
`

const ListItem = styled(({ active, children, collapsed, onClick, toggleCollapsed, ...props }) => (
  <li {...props}>
    <button disabled={active} onClick={onClick} type="button">
      {children}
    </button>
    {/* eslint-disable-next-line */}
    <div onClick={toggleCollapsed} role="menuitem" />
    {active && <NavCollapse icon={collapsed ? OpenMenuIcon : CloseMenuIcon} onClick={toggleCollapsed} />}
  </li>
))`
  cursor: pointer;
  position: relative;

  /* Clickable div, hidden in desktop */
  > div {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    ${({ active, collapsed }) =>
      active
        ? `
          > div {
            display: initial;
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
          }
        `
        : collapsed && 'display: none;'}
  }

  button {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.primaryText};
    cursor: pointer;
    font-size: 17px;
    font-weight: 300;
    padding: 1rem;
    text-align: left;
    text-decoration: none;
    transition: background-color 300ms ease-in-out;
    width: 100%;

    :disabled {
      color: ${({ theme }) => theme.primary};
      cursor: initial;
    }
    :not([disabled]):hover {
      background-color: ${({ theme }) => theme.light};
    }
  }
`

const Category = ({ active, category, children, collapsed, onClick, toggleCollapsed, ...props }) => {
  const onCategoryClick = useCallback(() => onClick(category), [category, onClick])

  return (
    <ListItem
      active={active}
      collapsed={collapsed}
      onClick={onCategoryClick}
      toggleCollapsed={toggleCollapsed}
      {...props}
    >
      {children}
    </ListItem>
  )
}

const NavMenu = ({ activeCategory, categories, setActiveCategory, setPage }) => {
  const [collapsed, setCollapsed] = useState(true)

  const onCategoryClick = useCallback(
    category => {
      setActiveCategory(category)
      setPage(0)
    },
    [setActiveCategory, setPage]
  )

  const toggleCollapsed = useCallback(() => setCollapsed(!collapsed), [collapsed])

  return (
    <Nav>
      <h2>{'Categories'}</h2>
      <ul>
        <Category
          active={!activeCategory}
          collapsed={collapsed}
          onClick={onCategoryClick}
          title={activeCategory ? 'See all apps' : undefined}
          toggleCollapsed={toggleCollapsed}
        >
          {'All'}
        </Category>
        {categories.map(category => (
          <Category
            active={category === activeCategory}
            category={category}
            collapsed={collapsed}
            key={category}
            onClick={onCategoryClick}
            title={category !== activeCategory ? `See ${category} apps` : undefined}
            toggleCollapsed={toggleCollapsed}
          >
            {category}
          </Category>
        ))}
      </ul>
    </Nav>
  )
}

export default NavMenu
