// pages/projects/ui/ProjectsPage.tsx
import { Button, Card, Typography, Space } from 'antd'
import { ArrowLeftOutlined, GithubOutlined, GlobalOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import styles from './ProjectsPage.module.scss'

const { Title, Paragraph } = Typography

const PROJECTS = [
  {
    title: "CRM Система",
    description: "Полнофункциональная CRM система с аналитикой и управлением клиентами",
    tech: ["React", "TypeScript", "Redux", "Ant Design"],
    githubUrl: "https://github.com/alagun/crm-system",
    demoUrl: "https://alagun.github.io/crm-demo"
  },
  {
    title: "Образовательная платформа",
    description: "Платформа для онлайн-курсов с системой прогресса и тестирования",
    tech: ["React", "Node.js", "MongoDB", "Material-UI"],
    githubUrl: "https://github.com/alagun/education-platform",
    demoUrl: "https://alagun.github.io/education-demo"
  },
  {
    title: "E-commerce магазин",
    description: "Интернет-магазин с корзиной, фильтрами и системой оплаты",
    tech: ["React", "Context API", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/alagun/ecommerce-shop",
    demoUrl: "https://alagun.github.io/ecommerce-demo"
  }
]

export const ProjectsPage = () => {
  const navigate = useNavigate()

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
        Здесь собраны ключевые проекты, над которыми я работал. 
        Каждый проект включает описание, используемые технологии и ссылки на код и демо.
      </Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {PROJECTS.map((project, index) => (
          <Card key={index} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <Title level={3} className={styles.projectTitle}>
                {project.title}
              </Title>
              <Space>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <GithubOutlined /> Код
                </a>
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
          </Card>
        ))}
      </Space>
    </div>
  )
}