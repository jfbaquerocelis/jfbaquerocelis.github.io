import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import styled from 'styled-components'
import colors from '../utils/Colors'

const items: MenuProps['items'] = [
  {
    label: 'ABOUT ME',
    key: 'about',
  },
  {
    label: 'PAST EXPERIENCE',
    key: 'experience',
  },
  {
    label: (
      <a
        href="https://medium.com/@jfbaquerocelis"
        target="_blank"
        rel="noopener noreferrer"
      >
        MEDIUM
      </a>
    ),
    key: 'medium',
  },
]

function MyMenu() {
  return <StyledMenu mode="horizontal" items={items} />
}

const StyledMenu = styled(Menu)`
  background-color: transparent;

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
