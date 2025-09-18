import { Card, Space } from 'antd'
import styles from './ProjectsSection.module.scss'

export const ProjectsSection = () => {
  return (
    <Card title="🚀 Проекты" className={styles.sectionCard}>
      <Space direction="vertical">
        <a href="https://alagun.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          🌐 Портфолио – примеры работ
        </a>
        <a href="https://github.com/alagun" target="_blank" rel="noopener noreferrer" className={styles.link}>
          📂 GitHub – исходный код
        </a>
      </Space>
    </Card>
  )
}