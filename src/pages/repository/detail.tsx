import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FETCH_STATUS } from '../../constants'
import {
  getRepositoryMarkdown,
  getSingleRepository
} from '../../services/repository'
import Loader from '../../components/Shared/Loader/Loader'
import Alert from '../../components/Shared/Alert/Alert'
import { AxiosError } from 'axios'
import { ApiError } from '../../types/apiError'
import { IRepositoryItem } from '../../components/Repository/RepositoryItem/RepositoryItem'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const RepositoryDetailPage = () => {
  const { owner, repo } = useParams<{ owner: string; repo: string }>()
  const [data, setData] = useState<IRepositoryItem>()
  const [status, setStatus] = useState(FETCH_STATUS.IDLE)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRepoDetail = async () => {
      setStatus(FETCH_STATUS.LOADING)
      try {
        const response = await getSingleRepository(
          owner as string,
          repo as string
        )
        const markdown = await getRepositoryMarkdown(
          owner as string,
          repo as string
        )
        const content = atob(markdown.content)
        setData({
          ...response,
          content
        })
        setStatus(FETCH_STATUS.SUCCESS)
      } catch (error) {
        setStatus(FETCH_STATUS.ERROR)
        if (error instanceof AxiosError) {
          const err = error as AxiosError<ApiError>
          setError(err.response?.data.message ?? 'Something went wrong')
        }
      }
    }

    fetchRepoDetail()
  }, [owner, repo])

  const isLoading = status === FETCH_STATUS.LOADING
  const isSuccess = status === FETCH_STATUS.SUCCESS
  const isError = status === FETCH_STATUS.ERROR

  return (
    <div className='my-[50px] md:px-[100px]'>
      <Link className='text-blue-500' to='/'>
        Back to Home
      </Link>
      {isLoading && <Loader />}
      {isError && <Alert message={error} variant='danger' />}
      {isSuccess && data && (
        <div className='mt-[20px]'>
          <div className='bg-gray-100 p-5'>
            <p className='text-xl font-medium'>
              Name:
              <a
                className='text-blue-500'
                href={`${data.html_url}`}
                target='_blank'
              >
                {data.name}
              </a>
            </p>
            <p className='text-l font-medium'>
              Owner:{' '}
              <a
                className='text-blue-500'
                href={`${data.owner.html_url}`}
                target='_blank'
              >
                {data.owner.login}
              </a>{' '}
            </p>

            <p className='text-l font-medium'>
              Open issues: {data.open_issues}
            </p>
            <p className='text-l font-medium'>
              Default Branch: {data.default_branch}
            </p>
          </div>

          <div className='mt-[20px]'>
            <h1 className='text-xl font-bold'>Readme</h1>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {data.content}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  )
}
