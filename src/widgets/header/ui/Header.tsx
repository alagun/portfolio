import { Link } from 'react-router-dom'
import { Layout } from 'antd'
import { ThemeToggle } from '@/features/theme/toggle'
import styles from './Header.module.scss'

const { Header: AntHeader } = Layout

export const Header = () => {
  return (
    <AntHeader className={styles.header}>
      <Link to='/' className={styles.logo}>
        <span className={styles.logoIcon}>i</span>
        <span className={styles.logoText}>Alexey Lagun</span>
      </Link>

      <div className={styles.headerRight}>
        <ThemeToggle />
      </div>
    </AntHeader>
  )
}