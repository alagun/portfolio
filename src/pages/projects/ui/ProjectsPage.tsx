import { Button, Card, Typography, Space, Image } from 'antd'
import { ArrowLeftOutlined, GithubOutlined, GlobalOutlined, EyeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import styles from './ProjectsPage.module.scss'
import { ALL_PROJECTS } from '@/shared/constants/projects'
import { IProject } from '@/shared/types'

const { Title, Paragraph, Text } = Typography

export const ProjectsPage = () => {
  const navigate = useNavigate()

  const handleProjectClick = (demoUrl: string) => {
    window.open(demoUrl, '_blank')
  }

  return (
    <div className={styles.projectsPage}>
      <Button 
        type="text" 
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/')}
        className={styles.backButton}
      >
        На главную
      </Button>

      <Title level={1}>Мои проекты</Title>
      <Paragraph>
        Здесь собраны ключевые коммерческие и pet-проекты, над которыми я работал. 
        Каждый проект включает описание, используемые технологии и ссылки на код и демо.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {ALL_PROJECTS.map((project: IProject) => (
          <Card key={project.id} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div 
                className={styles.projectImageSection}
                onClick={() => handleProjectClick(project.demoUrl)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  preview={false}
                  className={styles.projectImage}
                  placeholder={
                    <div className={styles.projectPlaceholder}>
                      <EyeOutlined />
                    </div>
                  }
                />
                <div className={styles.projectOverlay}>
                  <EyeOutlined className={styles.viewIcon} />
                  <Text className={styles.viewText}>Посмотреть демо</Text>
                </div>
              </div>
              
              <div className={styles.projectInfo}>
                <div className={styles.projectHeader}>
                  <div>
                    <Title level={3} className={styles.projectTitle}>
                      {project.title}
                    </Title>
                    {project.period && (
                      <Text type="secondary" className={styles.projectPeriod}>
                        {project.period}
                      </Text>
                    )}
                  </div>
                  <Space>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <GithubOutlined /> Код
                      </a>
                    )}
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <GlobalOutlined /> Демо
                    </a>
                  </Space>
                </div>
                
                <Paragraph className={styles.projectDescription}>
                  {project.description}
                </Paragraph>
                
                <Space wrap className={styles.techStack}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </Space>
              </div>
            </div>
          </Card>
        ))}
      </Space>
    </div>
  )
}