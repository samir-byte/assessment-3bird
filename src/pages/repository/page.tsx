import { useSearchParams } from 'react-router-dom'
import SearchBar from '../../components/Shared/SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import { getAllRepositories } from '../../services/repository'
import { FETCH_STATUS } from '../../constants'
import Alert from '../../components/Shared/Alert/Alert'
import EmptyState from '../../components/Shared/Empty/Empty'
import Pagination from '../../components/Shared/Pagination/Pagination'
import Loader from '../../components/Shared/Loader/Loader'
import RepositoryItem from '../../components/Repository/RepositoryItem/RepositoryItem'
import RepositoryToolbar from '../../components/Repository/RepositoryToolbar/RepositoryToolbar'
import { AxiosError } from 'axios'
import { ApiError } from '../../types/apiError'
import { MdClearAll } from 'react-icons/md'
import { TStatus } from '../../types/status'
import { IRepositoryItem } from '../../types/repository'

export const RepositoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [status, setStatus] = useState<TStatus>(FETCH_STATUS.IDLE)
  const [error, setError] = useState('')
  const [repositories, setRepositories] = useState<IRepositoryItem[]>([])
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    const request = {
      q: searchParams.get('q') as string,
      page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
      sort: searchParams.get('sort') as string
    }
    const fetchData = async () => {
      setStatus(FETCH_STATUS.LOADING)
      try {
        const response = await getAllRepositories(request)
        // throw new Error('Something went wrong')
        setRepositories(response.items)
        setTotalCount(response.total_count as number)
        setStatus(FETCH_STATUS.SUCCESS)
      } catch (error) {
        setStatus(FETCH_STATUS.ERROR)
        if (error instanceof AxiosError) {
          const err = error as AxiosError<ApiError>
          setError(err.response?.data.message ?? 'Something went wrong')
        }
      }
    }

    if (request.q) {
      fetchData()
    } else {
      setRepositories([])
      setStatus(FETCH_STATUS.IDLE)
    }
  }, [searchParams])

  const isLoading = status === FETCH_STATUS.LOADING
  const isSuccess = status === FETCH_STATUS.SUCCESS
  const isError = status === FETCH_STATUS.ERROR

  const handleClear = () => {
    setSearchParams(prevSearchParams => {
      prevSearchParams.delete('q')
      prevSearchParams.delete('page')
      prevSearchParams.delete('sort')
      return prevSearchParams
    })
  }

  const hasSearchParams = () => {
    return (
      searchParams.get('q') ||
      searchParams.get('page') ||
      searchParams.get('sort')
    )
  }

  return (
    <div className='my-[50px] flex flex-col items-center justify-center md:px-[100px]'>
      <div className='flex items-center justify-between gap-4'>
        {hasSearchParams() && (
          <button
            onClick={handleClear}
            className='rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300'
          >
            <MdClearAll className='h-4 w-4' />
          </button>
        )}
        <SearchBar placeholder='Search Repositories ...' />
      </div>

      <hr className='my-8 h-px w-full border-0 bg-gray-200' />
      <div className='w-full'>
        {isLoading && <Loader />}
        {isError && <Alert message={error} variant='danger' />}
        {!isLoading && repositories.length === 0 && <EmptyState />}
        {isSuccess && repositories.length > 0 && (
          <>
            <RepositoryToolbar totalCount={totalCount} />
            <div className='w-full space-y-4'>
              {repositories.map((repo: IRepositoryItem, index) => (
                <RepositoryItem
                  key={index}
                  {...repo}
                  searchParams={searchParams}
                />
              ))}
            </div>
            <div className='my-8 md:w-full'>
              <Pagination totalResults={totalCount} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
