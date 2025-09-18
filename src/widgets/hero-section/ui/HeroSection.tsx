import { Card, Typography, Row, Col, Space } from 'antd'
import { GithubOutlined, MessageOutlined } from '@ant-design/icons'
import styles from './HeroSection.module.scss'

const { Title, Text } = Typography

export const HeroSection = () => {
  return (
    <Card className={styles.heroCard}>
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={16}>
          <Space direction="vertical" size="large">
            <Title level={1} className={styles.title}>
              Алексей Лагун
            </Title>
            <Title level={2} className={styles.subtitle}>
              Frontend-разработчик (React + TypeScript)
            </Title>
            
            <Space direction="vertical" size="small">
              <Text strong>📍 Местоположение:</Text>
              <Text>Брест, Беларусь</Text>
              
              <Text strong>📧 Контакты:</Text>
              <Space direction="vertical">
                <a href="https://t.me/AlexeyLagun" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <MessageOutlined /> Telegram: @AlexeyLagun
                </a>
                <a href="https://github.com/alagun" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <GithubOutlined /> GitHub: github.com/alagun
                </a>
              </Space>
            </Space>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}