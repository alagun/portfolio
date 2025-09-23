import { ReactNode } from 'react'
import { Spin } from 'antd'
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver'
import styles from './SectionWrapper.module.scss'

interface SectionWrapperProps {
  children: ReactNode
  fallback?: ReactNode
  height?: string
}

export const SectionWrapper = ({ 
  children, 
  fallback = <Spin size="large" />,
  height = 'auto'
}: SectionWrapperProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <div ref={ref} style={{ minHeight: height }} className={styles.wrapper}>
      {isIntersecting ? children : (
        <div className={styles.fallback}>
          {fallback}
        </div>
      )}
    </div>
  )
}