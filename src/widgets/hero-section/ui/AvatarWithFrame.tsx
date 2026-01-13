import { Image } from 'antd'
import styles from './AvatarWithFrame.module.scss'

interface AvatarWithFrameProps {
  src: string
  alt?: string
  size?: number
}

export const AvatarWithFrame = ({ 
  src, 
  alt = "Алексей Лагун",
  size = 280 
}: AvatarWithFrameProps) => {
  const topFrameUrl = new URL('/static/svg/avatar-frame/top-frame.svg', import.meta.url).href;
  
  return (
    <div className={styles.avatarContainer} style={{ width: size, height: size }}>
      <img 
        src={topFrameUrl}
        alt="" 
        className={styles.topFrame}
        style={{ width: size, height: size }}
      />
      
      <div className={styles.photoContainer}>
        <Image
          src={src}
          alt={alt}
          className={styles.avatarPhoto}
          preview={false}
          placeholder={
            <div className={styles.avatarPlaceholder}>
              AL
            </div>
          }
        />
      </div>
      
      <img 
        src="/static/svg/avatar-frame/bottom-frame.svg" 
        alt="" 
        className={styles.bottomFrame}
        style={{ width: size, height: size }}
      />
    </div>
  )
}