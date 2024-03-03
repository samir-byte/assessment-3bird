import { GiStarShuriken } from 'react-icons/gi'
import { IoEye } from 'react-icons/io5'
import { SiTrailforks } from 'react-icons/si'
import { formatDate, formatNumber } from '../../../helpers'
import { Link } from 'react-router-dom'
import { IRepositoryItem } from '../../../types/repository'

const CountItem: React.FC<{ count: number; icon: JSX.Element }> = props => {
  const formattedCount = formatNumber(props.count)
  return (
    <div className='inline-flex items-center gap-1'>
      {props.icon} {formattedCount}
    </div>
  )
}

interface Props extends IRepositoryItem {
  searchParams?: URLSearchParams
}

const RepositoryItem: React.FC<Props> = props => {
  return (
    <div
      data-testid='repository-item'
      className='w-full rounded-lg border border-gray-200 bg-white p-6 shadow'
    >
      <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900'>
        <Link
          to={`/${props.owner.login}/${props.name}?${props.searchParams?.toString()}`}
        >
          {props.name}
        </Link>
      </h5>
      <p className='mb-3 font-normal text-gray-500'>{props.description}</p>
      <div className='inline-flex gap-5'>
        <CountItem
          count={props.stargazers_count}
          icon={<GiStarShuriken data-testid='star-icon' />}
        />
        <CountItem
          count={props.forks}
          icon={<SiTrailforks data-testid='fork-icon' />}
        />
        <CountItem
          count={props.watchers}
          icon={<IoEye data-testid='eye-icon' />}
        />
      </div>
      <div className='space-x-3 text-sm font-medium text-gray-500'>
        <span>Author: {props.owner.login}</span>
        <span>Last updated: {formatDate(props.updated_at)}</span>
      </div>
    </div>
  )
}

export default RepositoryItem
