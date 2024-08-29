import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './style/global.css'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import UserPage from './pages/users'
import PostPage from './pages/posts'
import HomePage from './pages/home'
import ErrorPage from './pages/error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/users',
        element: <UserPage />
      },
      {
        path: '/posts',
        element: <PostPage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
