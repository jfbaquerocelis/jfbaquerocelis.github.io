import { Typography } from 'antd'

import MyContainer from '../components/MyContainer'
import MyStack from '../components/MyStack'
import MyTitle from '../components/MyTitle'

const { Paragraph } = Typography

function AboutMe() {
  return (
    <MyContainer>
      <MyTitle level={2}>Welcome!</MyTitle>
      <Paragraph>
        My name is <strong>John</strong>, I&apos;m a software engineer and
        I&apos;m located in Montería City, here in Colombia 🇨🇴. My favorite
        language is <strong>Javascript</strong>, I&apos;ve learned a lot of
        things using it and it&apos;s my current tool which I&apos;m working on.
        My goal is to use it as a tool for creating great technologic solutions
        tailored to the companies needed. I trust that teamwork is the best way
        to advance and get better results in any company and project.
      </Paragraph>

      <MyTitle level={2}>Development Stack</MyTitle>
      <Paragraph>
        Through the years where I&apos;ve worked as a developer, I&apos;ve used
        different technologies. Down below I&apos;d like to show you my current
        stack and the rest of the tools which I&apos;ve used:
      </Paragraph>
      <MyStack />
    </MyContainer>
  )
}

export default AboutMe
