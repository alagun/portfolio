import { Card } from 'antd'
import styles from './SkillsSection.module.scss'

const skills = [
  'JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 'SASS',
  'Jest', 'Redux', 'Node.js', 'Webpack', 'Vite', 'Figma',
  'VS Code', 'npm', 'Git', 'GitHub', 'Docker', 'Stack Overflow'
]

export const SkillsSection = () => {
  return (
    <Card title="🛠 Технические навыки" className={styles.sectionCard}>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.skillTag}>
            {skill}
          </span>
        ))}
      </div>
      
      <div className={styles.skillIcons}>
        <img 
          src="https://skillicons.dev/icons?i=js,react,ts,html,css,sass,jest,redux,nodejs,webpack,vite,figma,vscode,npm,git,github,docker,stackoverflow" 
          alt="Tech Stack" 
          className={styles.iconsImage}
        />
      </div>
    </Card>
  )
}