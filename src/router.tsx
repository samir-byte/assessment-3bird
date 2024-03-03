import { RouteObject, createBrowserRouter } from 'react-router-dom'

const routes = [
  {
    index: true,
    async lazy() {
      const { RepositoryPage } = await import('./pages/repository/page')
      return { Component: RepositoryPage }
    },
    path: '/'
  },
  {
    async lazy() {
      const { RepositoryDetailPage } = await import('./pages/repository/detail')
      return { Component: RepositoryDetailPage }
    },
    path: '/:owner/:repo'
  },
  {
    path: '*',
    async lazy() {
      const { NotFoundPage } = await import('./pages/not-found/page')
      return { Component: NotFoundPage }
    }
  }
] satisfies RouteObject[]

export const router = createBrowserRouter(routes)
