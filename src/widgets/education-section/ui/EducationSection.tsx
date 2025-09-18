import { Card } from 'antd'
import styles from './EducationSection.module.scss'

export const EducationSection = () => {
  return (
    <Card title="🎓 Образование" className={styles.sectionCard}>
      <ul className={styles.list}>
        <li>Курсы по Frontend-разработке (React/TypeScript) (Coursera, RSShool, Redev)</li>
        <li>Самообучение: документация, пет-проекты</li>
      </ul>
    </Card>
  )
}