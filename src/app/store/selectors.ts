import { RootState } from "./store.types"

export const selectTheme = (state: RootState) => state.theme
export const selectThemeMode = (state: RootState) => state.theme.mode

export const selectIsDarkMode = (state: RootState) => state.theme.mode === 'dark'
export const selectIsLightMode = (state: RootState) => state.theme.mode === 'light'