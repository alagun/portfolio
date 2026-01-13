import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'
import { useAppSelector } from './store/store.hooks'
import { selectTheme } from './store/selectors'
import { getCustomTheme } from '@/shared/config/antd-theme'
import { Header } from '@/widgets/header'
import styles from './styles/App.module.scss'
import "./styles/global.scss";

const preloadMainPage = () => import('@/pages/main')

const { Content } = Layout

export default function App () {
  const theme = useAppSelector(selectTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.mode)
    preloadMainPage()
  }, [theme.mode])

  return (
    <ConfigProvider theme={getCustomTheme(theme)}>
      <Layout className={styles.layout}>
        <Header />
        <div className={styles.contentWrapper}>
          <Content className={styles.content}>
            <Outlet />
          </Content>
        </div>
      </Layout>
    </ConfigProvider>
  )
}