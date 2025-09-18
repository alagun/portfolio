import { Card, Typography, Row, Col, Space, Collapse } from 'antd'
import { useAppSelector } from '@/app/store/store.hooks'
import { selectTheme } from '@/app/store/selectors'
import { CaretRightOutlined } from '@ant-design/icons'
import styles from './AdditionalInfoSection.module.scss'

const { Text, Paragraph } = Typography
const { Panel } = Collapse

const THEME_MAP = {
  light: {
    stats: 'default',
    profile: 'default',
    languages: 'default'
  },
  dark: {
    stats: 'github_dark',
    profile: 'github_dark', 
    languages: 'github_dark'
  }
}

const GITHUB_CONFIG = {
  username: 'alagun',
  cardTypes: ['stats', 'profile-details', 'repos-per-language'],
  layout: { cols: { xs: 24, md: 12, lg: 8 }, gutter: [1, 1] },
  appearance: {
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    hoverEffect: true
  }
}

export const AdditionalInfoSection = () => {
  const theme = useAppSelector(selectTheme)
  const { username, cardTypes, layout } = GITHUB_CONFIG
  
  const getCardUrl = (type: string) => {
    const themeKey = type === 'profile-details' ? 'profile' : 
                     type === 'repos-per-language' ? 'languages' : 'stats'
    
    const themeName = THEME_MAP[theme.mode][themeKey]
    return `https://github-profile-summary-cards.vercel.app/api/cards/${type}?username=${username}&theme=${themeName}`
  }

  return (
    <Card title="📌 Дополнительно" className={styles.sectionCard}>
      <Space direction="vertical" size="middle">
        <div>
          <Text strong>Английский: </Text>
          <Text>Intermediate (чтение документации)</Text>
        </div>
        
        <div>
          <Text strong>Хобби: </Text>
          <Text>Изучение новых технологий, спорт, путешествия, общение с людьми</Text>
        </div>
        
        <Paragraph>
          <Text>
            Доброго времени суток, меня зовут Алексей. Оцениваю себя как Middle Frontend-разработчик.
            <br />
            Я программист, думаю что могу написать почти все что угодно. Больше чем за 2 года разных задач, 
            могу говорить уверенно, что пока что не зависал с вопросом "как это делать".
          </Text>
        </Paragraph>

        <Collapse 
          bordered={false}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className={styles.collapse}
          defaultActiveKey={['0']}
        >
          <Panel 
            header="GitHub Статистика" 
            key="1" 
            className={styles.panel}
          >
            <Row justify="center" gutter={[16, 16]}>
              {cardTypes.map((type) => (
                <Col 
                  key={type} 
                  xs={type === 'profile-details' ? 24 : layout.cols.xs} 
                  md={type === 'profile-details' ? 24 : layout.cols.md} 
                  lg={type === 'profile-details' ? 24 : layout.cols.lg}
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src={getCardUrl(type)}
                    alt={`GitHub ${type}`}
                    className={styles.githubCard}
                    key={`${type}-${theme.mode}`}
                  />
                </Col>
              ))}
            </Row>
          </Panel>
        </Collapse>
      </Space>
    </Card>
  )
}