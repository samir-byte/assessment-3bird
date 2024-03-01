import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
  return (
    <div data-testid='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
