import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
    label: <Link to="portfolio">PORTFOLIO</Link>,
    key: 'portfolio',
  },
  {
    label: (
      <a
        href="https://medium.com/@jfbaquerocelis"
        target="_blank"
        rel="noopener noreferrer">
        MEDIUM
      </a>
    ),
    key: 'medium',
  },
]

function MyMenu() {
  return (
    <StyledMenu
      mode="horizontal"
      items={items}
      defaultSelectedKeys={['about']}
    />
  )
}

const StyledMenu = styled(Menu)`
  background-color: transparent;
  border-bottom: none;

  li {
    &:nth-child(n + 0) {
      border-left: 1px solid #dedede;
    }
    &:first-child {
      border-left: 0px;
    }
    &:hover {
      color: ${colors.secondary};
      transition: 0.1s ease color;
    }
  }
`

export default MyMenu
