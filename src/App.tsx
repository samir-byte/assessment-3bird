import { appEnv } from './config/env'

function App() {
  console.log(appEnv.GITHUB_API_URL, 'appEnv.API_URL')
  return (
    <>
      <h1 className='font-bold underline'>Hello world</h1>
    </>
  )
}

export default App
