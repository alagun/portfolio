import { Row, Col } from 'antd'
import { 
  HeroSection, 
  SkillsSection, 
  ExperienceSection, 
  EducationSection, 
  ProjectsSection, 
  AdditionalInfoSection 
} from '@/widgets'
import styles from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <EducationSection />
        </Col>
        <Col xs={24} md={12}>
          <ProjectsSection />
        </Col>
      </Row>
      
      <AdditionalInfoSection />
    </div>
  )
}