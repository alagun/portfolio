import { Row, Col } from 'antd'
import { useAppSelector } from '@/app/store/store.hooks'
import { selectTheme } from '@/app/store/selectors'
import styles from './GithubStatsSection.module.scss'

const THEME_MAP = {
  light: {
    stats: 'default',
    profile: 'default',
    languages: 'default'
  },
  dark: {
    stats: 'github_dark',
    profile: 'github_dark', 
    languages: 'github_dark'
  }
}

const GITHUB_CONFIG = {
  username: 'alagun',
  cardTypes: ['stats', 'profile-details', 'repos-per-language'],
  layout: { cols: { xs: 24, md: 12, lg: 8 }, gutter: [16, 16] }
}

export const GithubStatsSection = () => {
  const theme = useAppSelector(selectTheme)
  const { username, cardTypes, layout } = GITHUB_CONFIG
  
  const getCardUrl = (type: string) => {
    const themeKey = type === 'profile-details' ? 'profile' : 
                     type === 'repos-per-language' ? 'languages' : 'stats'
    
    const themeName = THEME_MAP[theme.mode][themeKey]
    return `https://github-profile-summary-cards.vercel.app/api/cards/${type}?username=${username}&theme=${themeName}`
  }

  return (
    <Row justify="center" gutter={[16, 16]}>
      {cardTypes.map((type) => (
        <Col 
          key={type} 
          xs={type === 'profile-details' ? 24 : layout.cols.xs} 
          md={type === 'profile-details' ? 24 : layout.cols.md} 
          lg={type === 'profile-details' ? 24 : layout.cols.lg}
          className={styles.githubCol}
        >
          <img 
            src={getCardUrl(type)}
            alt={`GitHub ${type}`}
            className={styles.githubCard}
            key={`${type}-${theme.mode}`}
          />
        </Col>
      ))}
    </Row>
  )
}