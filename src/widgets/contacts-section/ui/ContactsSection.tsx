import { Card, Row, Typography } from 'antd'
import { 
  GithubOutlined, 
  MailOutlined, 
  MessageOutlined, 
  FileTextOutlined 
} from '@ant-design/icons'
import styles from './ContactsSection.module.scss'

const { Text } = Typography

const CONTACTS_CONFIG = {
  email: 'alexej.lagun@gmail.com',
  telegram: 'https://t.me/AlexeyLagun',
  github: 'https://github.com/alagun',
  cv: '/cv-alexey-lagun.pdf'
}

export const ContactsSection = () => {
  return (
    <Card title="📞 Контакты" className={styles.contactsCard}>
      <Row justify="space-between" style={{ width: '100%' }}>
        <div className={styles.contactItem}>
          <MailOutlined className={styles.contactIcon} />
          <div className={styles.contactInfo}>
            <Text strong>Email:</Text>
            <a href={`mailto:${CONTACTS_CONFIG.email}`} className={styles.contactLink}>
              {CONTACTS_CONFIG.email}
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <MessageOutlined className={styles.contactIcon} />
          <div className={styles.contactInfo}>
            <Text strong>Telegram:</Text>
            <a 
              href={CONTACTS_CONFIG.telegram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactLink}
            >
              @AlexeyLagun
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <GithubOutlined className={styles.contactIcon} />
          <div className={styles.contactInfo}>
            <Text strong>GitHub:</Text>
            <a 
              href={CONTACTS_CONFIG.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactLink}
            >
              github.com/alagun
            </a>
          </div>
        </div>

        <div className={styles.contactItem}>
          <FileTextOutlined className={styles.contactIcon} />
          <div className={styles.contactInfo}>
            <Text strong>Резюме:</Text>
            <a 
              href={CONTACTS_CONFIG.cv} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactLink}
            >
              Скачать CV (PDF)
            </a>
          </div>
        </div>
	  </Row>
    </Card>
  )
}