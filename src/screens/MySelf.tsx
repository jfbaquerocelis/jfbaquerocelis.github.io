import styled from 'styled-components'
import { Layout, Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faBitbucket,
} from '@fortawesome/free-brands-svg-icons'
import colors from '../utils/Colors'

const { Footer } = Layout
const { Title, Text, Paragraph } = Typography

function MySelf() {
  return (
    <Container>
      <Profile>
        <ContainerAvatar>
          <Avatar />
        </ContainerAvatar>
        <Title level={2}>John Fredy Baquero Celis</Title>
        <Text>Senior Software Engineer</Text>
        <Text>System Engineer</Text>
      </Profile>
      <StyledFooter>
        <FooterText>
          <Text>
            Made with <FontAwesomeIcon color={colors.red} icon={faHeart} />
          </Text>
          <Paragraph>© 2022</Paragraph>
        </FooterText>
        <Social>
          <FontAwesomeIcon size="2x" color={colors.white} icon={faLinkedin} />
          <FontAwesomeIcon size="2x" color={colors.white} icon={faTwitter} />
          <FontAwesomeIcon size="2x" color={colors.white} icon={faGithub} />
          <FontAwesomeIcon size="2x" color={colors.white} icon={faBitbucket} />
        </Social>
      </StyledFooter>
    </Container>
  )
}

const Container = styled.article`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
`
const Profile = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  text-align: center;

  .ant-typography {
    color: white;
    font-weight: 400;
  }
`
const ContainerAvatar = styled.div`
  margin: 0;
  width: 12rem;
  height: 12rem;
  border: 1.5px inset ${colors.secondary};
  border-radius: 50%;
`
const Avatar = styled.div`
  background-image: url(${process.env.PUBLIC_URL + '/images/john.jpg'});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 1.5px solid ${colors.secondary};
  border-radius: 50%;
  margin: 5%;
  width: 90%;
  height: 90%;
`
const StyledFooter = styled(Footer)`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  padding: 1rem 2rem;
`
const FooterText = styled.div`
  text-align: center;

  .ant-typography {
    color: white;
  }
`
const Social = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  svg {
    padding: 0 0.5rem;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
      color: ${colors.primary};
    }
  }
`

export default MySelf
