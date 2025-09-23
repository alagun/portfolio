import { createBrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { lazyImport } from '@/shared/utils/lazy-import'
import { LoadingFallback } from '@/shared/ui/loading-fallback'
import App from '../App'

const MainPage = lazyImport(
  () => import('@/pages/main'),
  'MainPage'
)

const ProjectsPage = lazyImport(
  () => import('@/pages/projects'),
  'ProjectsPage'
)

const NotFoundPage = lazyImport(
  () => import('@/pages/not-found'),
  'NotFoundPage'
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withSuspense = (Component: React.LazyExoticComponent<React.ComponentType<any>>) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
)

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: withSuspense(NotFoundPage),
    children: [
      {
        index: true,
        element: withSuspense(MainPage),
      },
      {
        path: 'projects',
        element: withSuspense(ProjectsPage),
      },
    ],
  },
  {
    path: '*',
    element: withSuspense(NotFoundPage),
  },
], {
  basename: import.meta.env.BASE_URL,
})