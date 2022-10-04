import type { TitleProps } from 'antd/lib/typography/Title'

import { Typography } from 'antd'
import styled from 'styled-components'

import MyStack from '../components/MyStack'
import colors from '../utils/Colors'

const { Title, Paragraph } = Typography

function AboutMe() {
  return (
    <Container>
      <StyledTitle level={2}>Welcome!</StyledTitle>
      <Paragraph>
        My name is <strong>John</strong>, I&apos;m a software engineer and
        I&apos;m located in Montería City, here in Colombia 🇨🇴. My favorite
        language is <strong>Javascript</strong>, I&apos;ve learned a lot of
        things using it and it&apos;s my current tool which I&apos;m working on.
        My goal is to use it as a tool for creating great technologic solutions
        tailored to the companies needed. I trust that teamwork is the best way
        to advance and get better results in any company and project.
      </Paragraph>

      <StyledTitle level={2}>Development Stack</StyledTitle>
      <Paragraph>
        Through the years where I&apos;ve worked as a developer, I&apos;ve used
        different technologies. Down below I&apos;d like to show you my current
        stack and the rest of the tools which I&apos;ve used:
      </Paragraph>
      <MyStack />
    </Container>
  )
}

const Container = styled.div`
  padding: 0 6rem;
  margin-top: 3.6rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`
const StyledTitle = styled(Title)<TitleProps>`
  font-family: 'Rambla', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid ${colors.gray};
  margin-bottom: 1rem !important;
`

export default AboutMe
