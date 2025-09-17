import themeSlice from '@/features/theme/themeSlice'
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }).concat(
  ),
})