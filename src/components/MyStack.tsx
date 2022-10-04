import { Typography } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAws,
  faCss3Alt,
  faDigitalOcean,
  faDocker,
  faGitAlt,
  faHtml5,
  faJs,
  faNode,
  faNpm,
  faPython,
  faReact,
  faSass,
  faVuejs,
  faYarn,
} from '@fortawesome/free-brands-svg-icons'

import colors from '../utils/Colors'
import styled from 'styled-components'

const { Title } = Typography

const ImageIcon = styled.img`
  width: 30px;
  height: 100%;
`

const stack = [
  {
    title: 'Frontend',
    items: [
      { icon: <FontAwesomeIcon size="2xl" color="#f16529" icon={faHtml5} /> },
      { icon: <FontAwesomeIcon size="2xl" color="#0170ba" icon={faCss3Alt} /> },
      { icon: <FontAwesomeIcon size="2xl" color="#ffe629" icon={faJs} /> },
      { icon: <FontAwesomeIcon size="2xl" color="#c6538c" icon={faSass} /> },
      { icon: <FontAwesomeIcon size="2xl" color="#4fc08d" icon={faVuejs} /> },
      { icon: <FontAwesomeIcon size="2xl" color="#2196F3" icon={faReact} /> },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: <FontAwesomeIcon size="2xl" color="#43853d" icon={faNode} /> },
      { icon: <FontAwesomeIcon size="2xl" color="#3776ab" icon={faPython} /> },
      { icon: <FontAwesomeIcon size="2xl" color="#ED1C24" icon={faNpm} /> },
      { icon: <FontAwesomeIcon size="2xl" color="#25799f" icon={faYarn} /> },
      { icon: <FontAwesomeIcon size="2xl" color="#0091e2" icon={faDocker} /> },
    ],
  },
  {
    title: 'Cloud Computing',
    items: [
      { icon: <FontAwesomeIcon size="2xl" color="#f19e39" icon={faAws} /> },
      {
        icon: (
          <FontAwesomeIcon size="2xl" color="#0069ff" icon={faDigitalOcean} />
        ),
      },
      {
        icon: (
          <ImageIcon
            src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
            alt="heroku"
          />
        ),
      },
      {
        icon: (
          <ImageIcon
            src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
            alt="netlify"
          />
        ),
      },
    ],
  },
  {
    title: 'Databases',
    items: [
      {
        icon: (
          <ImageIcon
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
            alt="mongodb"
          />
        ),
      },
      {
        icon: (
          <ImageIcon
            src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
            alt="postgresql"
          />
        ),
      },
      {
        icon: (
          <ImageIcon
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
          />
        ),
      },
    ],
  },
  {
    title: 'Control Version System',
    items: [
      { icon: <FontAwesomeIcon size="2xl" color="#f64e27" icon={faGitAlt} /> },
    ],
  },
]

function MyStack() {
  return (
    <Container>
      {stack.map((element, index) => (
        <Stack key={index}>
          <MyTitle level={5}>{element.title}</MyTitle>
          <Tools>{element.items.map(item => item.icon)}</Tools>
        </Stack>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 65%;
`
const Stack = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0.8rem 0;
  padding: 0.5rem;
`
const MyTitle = styled(Title)`
  color: ${colors.darkGray} !important;
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`
const Tools = styled.div`
  display: flex;
  justify-content: space-between;

  & * {
    margin: 0 0.5rem;
  }
`

export default MyStack
