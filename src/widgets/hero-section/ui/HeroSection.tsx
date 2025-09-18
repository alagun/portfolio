import { Card, Typography, Space, Button } from 'antd'
import { DownloadOutlined, MessageOutlined, GithubOutlined } from '@ant-design/icons'
import styles from './HeroSection.module.scss'
import { AvatarWithFrame } from './AvatarWithFrame'

const { Title, Text } = Typography

export const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv-alexey-lagun.pdf'
    link.download = 'Alexey-Lagun-CV.pdf'
    link.click()
  }

  const handleContact = () => {
    window.open('https://t.me/AlexeyLagun', '_blank')
  }

  return (
    <Card className={styles.heroCard}>
      <div className={styles.heroContent}>
        <div className={styles.avatarSection}>
          <AvatarWithFrame 
            src="/images/avatar.png"
            alt="Алексей Лагун"
            size={480}
          />
        </div>

        <div className={styles.textSection}>
          <Space direction="vertical" size="large" className={styles.textContent}>
            <div>
              <Title level={1} className={styles.title}>
                Алексей Лагун
              </Title>
              <Title level={2} className={styles.subtitle}>
                Frontend-разработчик
              </Title>
              <Text className={styles.techStack}>
                React • TypeScript • JavaScript • Redux
              </Text>
            </div>

            <div className={styles.description}>
              <Text>
                Создаю современные и производительные веб-приложения. 
                Более 2 лет коммерческого опыта в разработке интерфейсов.
              </Text>
            </div>

            <Space direction="vertical" size="small" className={styles.details}>
              <div className={styles.detailItem}>
                <Text strong>📍</Text>
                <Text>Брест, Беларусь</Text>
              </div>
              <div className={styles.detailItem}>
                <Text strong>💼</Text>
                <Text>Опыт: 2+ года</Text>
              </div>
              <div className={styles.detailItem}>
                <Text strong>🚀</Text>
                <Text>Готов к новым вызовам</Text>
              </div>
            </Space>

            <Space size="middle" className={styles.actions}>
              <Button 
                type="primary" 
                size="large"
                icon={<DownloadOutlined />}
                onClick={handleDownloadCV}
                className={styles.primaryButton}
              >
                Скачать CV
              </Button>
              <Button 
                size="large"
                icon={<MessageOutlined />}
                onClick={handleContact}
                className={styles.secondaryButton}
              >
                Написать мне
              </Button>
              <Button 
                type="text"
                icon={<GithubOutlined />}
                onClick={() => window.open('https://github.com/alagun', '_blank')}
                className={styles.ghostButton}
              >
                GitHub
              </Button>
            </Space>
          </Space>
        </div>
      </div>
    </Card>
  )
}