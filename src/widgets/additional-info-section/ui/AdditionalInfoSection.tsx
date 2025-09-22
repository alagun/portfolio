import { Card, Typography, Space, Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { CertificatesSection } from './components/certificates-section/CertificatesSection'
import { GithubStatsSection } from './components/github-stats-section/GithubStatsSection'
import styles from './AdditionalInfoSection.module.scss'

const { Text, Paragraph } = Typography
const { Panel } = Collapse

export const AdditionalInfoSection = () => {
  return (
    <Card title="📌 Дополнительно" className={styles.sectionCard}>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <div>
          <Text strong>Английский: </Text>
          <Text>Intermediate (чтение документации)</Text>
        </div>
        
        <div>
          <Text strong>Хобби: </Text>
          <Text>Изучение новых технологий, спорт, путешествия, общение с людьми</Text>
        </div>
        
        <Paragraph>
          <Text>
            Доброго времени суток, меня зовут Алексей. Оцениваю себя как Middle Frontend-разработчик.
            <br />
            Я программист, думаю что могу написать почти все что угодно. Больше чем за 2 года разных задач, 
            могу говорить уверенно, что пока что не зависал с вопросом "как это делать".
          </Text>
        </Paragraph>

        <Collapse 
          bordered={false}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className={styles.collapse}
          // defaultActiveKey={['certificates']}
        >
          <Panel 
            header="🎓 Сертификаты и курсы" 
            key="certificates" 
            className={styles.panel}
          >
            <CertificatesSection />
          </Panel>
        </Collapse>

        <Collapse 
          bordered={false}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className={styles.collapse}
        >
          <Panel 
            header="📊 GitHub Статистика" 
            key="github" 
            className={styles.panel}
          >
            <GithubStatsSection />
          </Panel>
        </Collapse>
      </Space>
    </Card>
  )
}