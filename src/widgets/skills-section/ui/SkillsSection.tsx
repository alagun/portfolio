import { Card, Tooltip } from 'antd'
import { useState } from 'react'
import { SKILLS } from '@/shared/constants/skills'
import styles from './SkillsSection.module.scss'

export const SkillsSection = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([])

  const handleAnimationEnd = (index: number) => {
    setAnimatedItems(prev => [...prev, index])
  }

  return (
    <Card title="🛠 Технические навыки" className={styles.sectionCard}>
      <div className={styles.skillsGrid}>
        {SKILLS.map((skill, index) => (
          <Tooltip 
            key={index} 
            title={skill.description}
            placement="top"
            className={styles.tooltip}
          >
            <div 
              className={`${styles.skillItem} ${
                animatedItems.includes(index) ? styles.animated : ''
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onAnimationEnd={() => handleAnimationEnd(index)}
            >
              <div className={styles.iconWrapper}>
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className={styles.skillIcon}
                />
                <div className={styles.pulseEffect}></div>
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          </Tooltip>
        ))}
      </div>
    </Card>
  )
}