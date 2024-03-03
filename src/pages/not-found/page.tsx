import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center'>
        <h1 className='mb-4'>404 | This page could not be found</h1>
        <Link className='text-blue-500' to='/'>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
