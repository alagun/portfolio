import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { MainPage } from '@/pages/main'
import { ProjectsPage } from '@/pages/projects'
// import { NotFoundPage } from '@/pages/not-found'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
    ],
  },
//   {
//     path: '*',
//     element: <NotFoundPage />,
//   },
],
{
  basename: import.meta.env.BASE_URL,
})