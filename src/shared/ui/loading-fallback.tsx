import { Spin } from 'antd'
import styles from './loading-fallback.module.scss'

export const LoadingFallback = () => {
  return (
    <div className={styles.container}>
      <Spin size="large" />
    </div>
  )
}