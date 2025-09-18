import { Card, Space, Button } from 'antd'
import { ArrowRightOutlined, GithubOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import styles from './ProjectsSection.module.scss'

export const ProjectsSection = () => {
  const navigate = useNavigate()

  const handleNavigateToProjects = () => {
    navigate('/projects')
  }

  return (
    <Card title="🚀 Проекты" className={styles.sectionCard}>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Button 
          type="primary" 
          size="large"
          onClick={handleNavigateToProjects}
          className={styles.projectsButton}
          icon={<ArrowRightOutlined />}
        >
          Смотреть все проекты
        </Button>
        
        <a 
          href="https://github.com/alagun" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.githubLink}
        >
          <GithubOutlined /> GitHub с исходным кодом
        </a>
      </Space>
    </Card>
  )
}