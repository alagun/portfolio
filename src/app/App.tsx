import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'
import { useAppSelector } from './store/store.hooks'
import { selectTheme } from './store/selectors'
import { getCustomTheme } from '@/shared/config/antd-theme'
import { Header } from '@/widgets/header'
import styles from './styles/App.module.scss'
import "./styles/global.scss";

const { Content } = Layout

export default function App () {
  const theme = useAppSelector(selectTheme)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme.mode)
  }, [theme.mode])

  return (
    <ConfigProvider theme={getCustomTheme(theme)}>
      <Layout className={styles.layout}>
        <Header/>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </ConfigProvider>
  )
}