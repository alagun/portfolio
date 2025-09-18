import { Card, Typography, Row, Col, Space } from 'antd'
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
            </Space>
          </Space>
        </Col>
        
        <Col xs={24} md={8}>
        {/* юсда воткнуть свою картинку */}
          {/* <div className={styles.stats}>
            <img 
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=alagun&theme=city_lights" 
              alt="GitHub Stats" 
              className={styles.githubCard}
            />
          </div> */}
        </Col>
      </Row>
    </Card>
  )
}