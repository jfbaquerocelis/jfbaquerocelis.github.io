import { faCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typography, Timeline, List, Space, Tag } from 'antd'
import styled from 'styled-components'
import MyContainer from '../components/MyContainer'
import MyTitle from '../components/MyTitle'
import employmentHistory from '../data/employment_history.json'
import colors from '../utils/Colors'
import formatDate from '../utils/formatDate'

const { Title, Text, Paragraph } = Typography

function Experience() {
  return (
    <MyContainer>
      <MyTitle level={2}>EMPLOYMENT HISTORY</MyTitle>

      <Paragraph>
        Since 2015 taking my experience as a Freelancer, this is the whole
        history reflects as experience throughout the years. Take a look:
      </Paragraph>

      <StyledTimeline mode="left">
        {employmentHistory.map((job, index) => (
          <Timeline.Item
            key={index}
            label={
              <Paragraph type="secondary">
                {formatDate(job.startDate)} -{' '}
                {job.endDate ? formatDate(job.endDate) : 'Current'}
              </Paragraph>
            }>
            <Title level={5}>
              <StyledText>{job.role}</StyledText> | {job.company.toUpperCase()}
            </Title>
            <Text type="secondary">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {job.type}
            </Text>
            <Paragraph>{job.description}</Paragraph>

            {job.projects && (
              <>
                {job.projects.map((project, projectId) => (
                  <List
                    key={projectId}
                    header={
                      <Title type="secondary" underline level={5}>
                        {project.name} | {project.role}
                      </Title>
                    }
                    footer={
                      <>
                        {project.stack.map((stackItem, stackId) => (
                          <Tag key={stackId} style={{ margin: '2px' }}>
                            {stackItem}
                          </Tag>
                        ))}
                      </>
                    }
                    dataSource={project.tasks}
                    renderItem={item => (
                      <List.Item>
                        <Space align="start">
                          <FontAwesomeIcon
                            color={colors.secondary}
                            icon={faCheck}
                          />
                          {item}
                        </Space>
                      </List.Item>
                    )}
                  />
                ))}
              </>
            )}

            {job.tasks && (
              <List
                dataSource={job.tasks}
                renderItem={item => (
                  <List.Item>
                    <Space align="start">
                      <FontAwesomeIcon
                        color={colors.secondary}
                        icon={faCheck}
                      />
                      {item}
                    </Space>
                  </List.Item>
                )}
              />
            )}
          </Timeline.Item>
        ))}
      </StyledTimeline>
    </MyContainer>
  )
}

const StyledTimeline = styled(Timeline)`
  margin-top: 1rem;

  .ant-timeline-item {
    &-label {
      width: calc(35% - 12px) !important;
    }
    &-tail {
      left: 35% !important;
    }
    &-head {
      left: 35% !important;
    }
    &-content {
      left: calc(35% - 4px) !important;
      width: calc(65% - 14px) !important;
    }
  }
`
const StyledText = styled(Text)`
  color: ${colors.accent};
`

export default Experience
