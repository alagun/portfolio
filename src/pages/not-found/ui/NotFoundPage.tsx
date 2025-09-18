import { Result, Button, Space, Typography } from 'antd'
import { HomeOutlined, RocketOutlined, GithubOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import styles from './NotFoundPage.module.scss'

const { Title, Paragraph, Text } = Typography

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const actions = [
    <Button 
      type="primary" 
      key="home"
      icon={<HomeOutlined />}
      onClick={() => navigate('/')}
      size="large"
    >
      На главную
    </Button>,
    <Button 
      key="projects"
      icon={<RocketOutlined />}
      onClick={() => navigate('/projects')}
      size="large"
    >
      К проектам
    </Button>,
    <Button 
      key="github"
      icon={<GithubOutlined />}
      onClick={() => window.open('https://github.com/alagun', '_blank')}
      size="large"
    >
      Мой GitHub
    </Button>
  ]

  return (
    <div className={styles.notFoundPage}>
      <Result
        status="404"
        title="404"
        subTitle="Извините, страница не найдена"
        extra={actions}
        className={styles.result}
      />
      
      <div className={styles.content}>
        <Title level={3}>Возможно, вы искали:</Title>
        <Space direction="vertical" size="middle">
          <Paragraph>
            <Text strong>• </Text>
            <Button 
              type="link" 
              onClick={() => navigate('/')}
              className={styles.linkButton}
            >
              Главная страница
            </Button>
            {" "}- информация обо мне и моих навыках
          </Paragraph>
          
          <Paragraph>
            <Text strong>• </Text>
            <Button 
              type="link" 
              onClick={() => navigate('/projects')}
              className={styles.linkButton}
            >
              Проекты
            </Button>
            {" "}- примеры моих работ и исходный код
          </Paragraph>
          
          <Paragraph>
            <Text strong>• </Text>
            <Button 
              type="link" 
              onClick={() => window.open('https://github.com/alagun', '_blank')}
              className={styles.linkButton}
            >
              GitHub
            </Button>
            {" "}- мой аккаунт с репозиториями
          </Paragraph>
          
        </Space>
      </div>
    </div>
  )
}