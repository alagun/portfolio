import { Card, Typography, Space } from 'antd'
import { 
  BookOutlined, 
  CodeOutlined, 
  RocketOutlined, 
  SolutionOutlined,
  GlobalOutlined 
} from '@ant-design/icons'
import styles from './EducationSection.module.scss'

const { Title, Text } = Typography

const EDUCATION_ITEMS = [
  {
    icon: <BookOutlined />,
    title: "Курсы по Frontend-разработке",
    description: "React/TypeScript",
    platforms: ["Coursera", "RSShool", "Redev"],
    period: "2022-настоящее время"
  },
  {
    icon: <CodeOutlined />,
    title: "Самообучение",
    description: "Непрерывное профессиональное развитие",
    activities: ["Изучение документации", "Пет-проекты", "Code Review", "Технические блоги"],
    period: "Постоянно"
  },
  {
    icon: <RocketOutlined />,
    title: "Практический опыт",
    description: "Коммерческая разработка",
    details: ["2+ года коммерческого опыта", "Реальные проекты", "Работа в команде"],
    period: "2023-настоящее время"
  }
]

export const EducationSection = () => {
  return (
    <Card title="🎓 Образование & Развитие" className={styles.sectionCard}>
      <Space direction="vertical" size="large" style={{ width: '100%', gap: 8 }}>
        {EDUCATION_ITEMS.map((item, index) => (
          <div key={index} className={styles.educationItem}>
            <div className={styles.itemHeader}>
              <div className={styles.iconContainer}>
                {item.icon}
              </div>
              <div className={styles.itemInfo}>
                <Title level={5} className={styles.itemTitle}>
                  {item.title}
                </Title>
                <Text type="secondary" className={styles.itemDescription}>
                  {item.description}
                </Text>
              </div>
              <div className={styles.period}>
                <Text type="secondary">{item.period}</Text>
              </div>
            </div>
            
            <div className={styles.itemContent}>
              {item.platforms && (
                <div className={styles.platforms}>
                  <Text strong>Платформы: </Text>
                  {item.platforms.join(', ')}
                </div>
              )}
              
              {item.activities && (
                <div className={styles.activities}>
                  <Text strong>Направления: </Text>
                  <div className={styles.tags}>
                    {item.activities.map((activity, i) => (
                      <span key={i} className={styles.tag}>
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {item.details && (
                <div className={styles.details}>
                  {item.details.map((detail, i) => (
                    <div key={i} className={styles.detailItem}>
                      <SolutionOutlined className={styles.detailIcon} />
                      <Text>{detail}</Text>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        <div className={styles.footer}>
          <GlobalOutlined className={styles.footerIcon} />
          <Text type="secondary" className={styles.footerText}>
            Постоянно изучаю новые технологии и лучшие практики разработки
          </Text>
        </div>
      </Space>
    </Card>
  )
}