import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { FETCH_STATUS } from '../../constants'
import {
  getRepositoryMarkdown,
  getSingleRepository
} from '../../services/repository'
import Loader from '../../components/Shared/Loader/Loader'
import Alert from '../../components/Shared/Alert/Alert'
import { AxiosError } from 'axios'
import { ApiError } from '../../types/apiError'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { TStatus } from '../../types/status'
import { IRepositoryItem } from '../../types/repository'
import { IoMdArrowBack } from 'react-icons/io'
import { FaReadme } from 'react-icons/fa'
import DetailHeading from '../../components/Repository/DetailInfoSection/DetailInfoSection'

export const RepositoryDetailPage = () => {
  const { owner, repo } = useParams<{ owner: string; repo: string }>()
  const [data, setData] = useState<IRepositoryItem>()
  const [status, setStatus] = useState<TStatus>(FETCH_STATUS.IDLE)
  const [searchParams] = useSearchParams()
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
  const isSuccess = true
  const isError = status === FETCH_STATUS.ERROR

  return (
    <div className='my-[50px] px-[20px] md:px-[100px]'>
      <Link
        className='flex items-center gap-1 text-blue-500'
        to={`/?${searchParams.toString()}`}
      >
        <IoMdArrowBack />
        <span>Back</span>
      </Link>
      {isLoading && <Loader />}
      {isError && <Alert message={error} variant='danger' />}
      {isSuccess && data && (
        <div className='mt-[20px]'>
          <DetailHeading {...data} />

          <div className='mt-[20px]'>
            <div className='flex items-center gap-1'>
              <FaReadme />
              <h1 className='text-2xl font-bold'>Readme</h1>
            </div>

            <ReactMarkdown
              className='markdown prose'
              remarkPlugins={[remarkGfm]}
            >
              {data.content}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  )
}
