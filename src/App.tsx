import { RouterProvider } from 'react-router-dom'
import { appEnv } from './config/env'
import { router } from './router'

function App() {
  console.log(appEnv.GITHUB_API_URL, 'appEnv.API_URL')
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
