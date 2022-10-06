import type { MenuProps } from 'antd'

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Space, Tag } from 'antd'
import styled from 'styled-components'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import colors from '../utils/Colors'

const items: MenuProps['items'] = [
  {
    label: <Link to="/">ABOUT ME</Link>,
    key: 'about',
  },
  {
    label: <Link to="experience">PAST EXPERIENCE</Link>,
    key: 'experience',
  },
  {
    label: (
      <Space>
        <Link to="portfolio">PORTFOLIO</Link>
        <Tag color={colors.secondary} style={{ margin: 0 }}>
          Coming Soon
        </Tag>
      </Space>
    ),
    disabled: true,
    key: 'portfolio',
  },
  {
    label: (
      <a
        href="https://medium.com/@jfbaquerocelis"
        target="_blank"
        rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMedium} /> MEDIUM
      </a>
    ),
    key: 'medium',
  },
]

function MyMenu() {
  const [itemSelected, setItemSelected] = useState<string>('')
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location

    if (pathname === '/') setItemSelected('about')
    else setItemSelected(pathname.replace('/', ''))
  }, [])

  if (itemSelected === '') return null

  return (
    <StyledMenu
      mode="horizontal"
      items={items}
      defaultSelectedKeys={[itemSelected]}
    />
  )
}

const StyledMenu = styled(Menu)`
  background-color: transparent;
  border-bottom: none;
  display: flex;

  li {
    &:nth-child(n + 0) {
      border-left: 1px solid #dedede;
    }
    &:first-child {
      border-left: 0px;
    }
  }
`

export default MyMenu
