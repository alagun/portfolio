import { Card, Space, Button, Image, Row, Col } from 'antd'
import { ArrowRightOutlined, GithubOutlined, EyeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { ALL_PROJECTS } from '@/shared/constants/projects'
import styles from './ProjectsSection.module.scss'

const FEATURED_PROJECTS = ALL_PROJECTS.slice(0, 3);

export const ProjectsSection = () => {
  const navigate = useNavigate()

  const handleNavigateToProjects = () => {
    navigate('/projects')
  }

  return (
    <Card title="🚀 Проекты" className={styles.sectionCard}>
      <Space direction="vertical" style={{ width: '100%' }} size="middle">
        <Row gutter={[16, 16]} className={styles.projectsPreview}>
          {FEATURED_PROJECTS.map((project) => (
            <Col xs={24} md={8} key={project.id}>
              <div className={styles.projectPreviewCard}>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    preview={false}
                    className={styles.previewImg}
                    placeholder={
                      <div className={styles.projectPlaceholder}>
                        <EyeOutlined />
                      </div>
                    }
                  />
                  <div className={styles.projectOverlay}>
                    <Space direction="vertical" size="small">
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.previewLink}
                      >
                        <EyeOutlined /> Демо
                      </a>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.previewLink}
                        >
                        <GithubOutlined /> Код
                      </a>
                      )}
                    </Space>
                  </div>
                </div>
                <div className={styles.projectPreviewInfo}>
                  <div className={styles.previewTitle}>{project.title}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
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