import type { TitleProps } from 'antd/lib/typography/Title'

import styled from 'styled-components'
import { Typography } from 'antd'
import colors from '../utils/Colors'

const { Title } = Typography

const MyTitle = styled(Title)<TitleProps>`
  font-family: 'Rambla', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid ${colors.gray};
  margin-bottom: 1rem !important;
`

export default MyTitle
