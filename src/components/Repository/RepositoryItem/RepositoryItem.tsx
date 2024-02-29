import { GiStarShuriken } from 'react-icons/gi'
import { IoEye } from 'react-icons/io5'
import { SiTrailforks } from 'react-icons/si'
import { formatDate, formatNumber } from '../../../helpers'
import { Link } from 'react-router-dom'

export interface IRepositoryItem {
  id: number
  name: string
  description: string
  owner: {
    login: string
    html_url: string
  }
  stargazers_count: number
  watchers: number
  forks: number
  updated_at: string
  open_issues: number
  default_branch: string
  content: string
  html_url: string
}

const CountItem: React.FC<{ count: number; icon: JSX.Element }> = props => {
  const formattedCount = formatNumber(props.count)
  return (
    <div className='inline-flex items-center gap-1'>
      {props.icon} {formattedCount}
    </div>
  )
}

const RepositoryItem: React.FC<IRepositoryItem> = props => {
  return (
    <div className='w-full rounded-lg border border-gray-200 bg-white p-6 shadow'>
      <h5 className='mb-2 text-2xl font-semibold tracking-tight text-gray-900'>
        <Link to={`/${props.owner.login}/${props.name}`}>{props.name}</Link>
      </h5>
      <p className='mb-3 font-normal text-gray-500'>{props.description}</p>
      <div className='inline-flex gap-5'>
        <CountItem count={props.stargazers_count} icon={<GiStarShuriken />} />
        <CountItem count={props.forks} icon={<SiTrailforks />} />
        <CountItem count={props.watchers} icon={<IoEye />} />
      </div>
      <div className='space-x-3 text-sm font-medium text-gray-500'>
        <span>Author: {props.owner.login}</span>
        <span>Last updated: {formatDate(props.updated_at)}</span>
      </div>
    </div>
  )
}

export default RepositoryItem
