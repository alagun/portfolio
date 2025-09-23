import { Row, Col } from 'antd'
import { 
  HeroSection, 
  SkillsSection, 
  ExperienceSection, 
  EducationSection, 
  ProjectsSection, 
  AdditionalInfoSection, 
  ContactsSection 
} from '@/widgets'
import { SectionWrapper } from '@/widgets/section-wrapper/SectionWrapper'
import styles from './MainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <HeroSection />

      <SectionWrapper height="300px">
        <SkillsSection />
      </SectionWrapper>

      <SectionWrapper height="400px">
        <ExperienceSection />
      </SectionWrapper>

      <SectionWrapper height="500px">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <EducationSection />
          </Col>
          <Col xs={24} md={12}>
            <ProjectsSection />
          </Col>
        </Row>
      </SectionWrapper>

      <SectionWrapper height="300px">
        <AdditionalInfoSection />
      </SectionWrapper>

      <SectionWrapper height="200px">
        <ContactsSection />
      </SectionWrapper> 
    </div>
  )
}