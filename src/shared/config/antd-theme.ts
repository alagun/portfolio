import { ThemeState } from '@/features/theme/themeSlice'
import { ThemeConfig } from 'antd'

export const getCustomTheme = (theme: ThemeState): ThemeConfig => {
  const isDark = theme.mode === 'dark'
  
  return {
    token: {
      colorPrimary: '#ff6600',
      colorBgBase: isDark ? '#1a1a1a' : '#f6f6ef',
      colorTextBase: isDark ? '#ffffff' : '#000000',
      colorBorder: isDark ? '#404040' : '#d6d6d6',
      borderRadius: 4,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    components: {
      Layout: {
        headerBg: '#ff6600',
        bodyBg: isDark ? '#1a1a1a' : '#f6f6ef',
      },
      Card: {
        colorBgContainer: isDark ? '#2a2a2a' : '#ffffff',
        colorBorderSecondary: isDark ? '#404040' : '#d6d6d6',
      },
      Button: {
        colorPrimary: '#ff6600',
        colorPrimaryHover: '#e65c00',
        colorPrimaryActive: '#cc5200',
      },
      List: {
        colorBgContainer: isDark ? '#2a2a2a' : '#ffffff',
        colorBorder: isDark ? '#404040' : '#d6d6d6',
      },
      Typography: {
        colorText: isDark ? '#ffffff' : '#000000',
        colorTextSecondary: isDark ? '#a0a0a0' : '#828282',
      },
      Switch: {
        colorPrimary: '#ff6600',
        colorPrimaryHover: '#e65c00',
      },
    },
  }
  }