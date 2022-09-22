import type { SiderProps } from 'antd'

import { Layout } from 'antd'
import styled from 'styled-components'
import MySelf from './screens/MySelf'
import MyMenu from './components/MyMenu'

import './App.css'
import colors from './utils/Colors'

const { Header, Sider, Content } = Layout

function App() {
  return (
    <ContainerMaster>
      <StyledSider width="30%">
        <MySelf />
      </StyledSider>
      <ContainerArticles>
        <StyledHeader>
          <MyMenu />
        </StyledHeader>
        <Content>Content</Content>
      </ContainerArticles>
    </ContainerMaster>
  )
}

const ContainerMaster = styled(Layout)`
  display: flex;
  min-height: 100vh;
`
const ContainerArticles = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 70% !important;
`
const StyledSider = styled(Sider)<SiderProps>`
  background: url(${process.env.PUBLIC_URL + '/images/background.jpg'})
    center/cover;
  position: relative;
  z-index: 2;

  :after {
    background-color: ${colors.black};
    content: '';
    height: 100%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`
const StyledHeader = styled(Header)`
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
  height: 3rem;
  line-height: 3rem;
`

export default App
