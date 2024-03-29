import { useSearchParams } from 'react-router-dom'

interface Props {
  totalCount: number
}

const sortOptions = [
  { value: 'best-match', label: 'Best Match' },
  { value: 'stars', label: 'Stars' },
  { value: 'forks', label: 'Forks' },
  { value: 'updated', label: 'Updated' },
  { value: 'help-wanted-issues', label: 'Help wanted' }
]

const RepositoryToolbar: React.FC<Props> = props => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get('sort') ?? 'best-match'
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSearchParams(prevSearchParams => {
      prevSearchParams.set('sort', value)
      return prevSearchParams
    })
  }

  return (
    <div
      data-testid='repository-toolbar'
      className='mb-4 md:flex md:items-center md:justify-between'
    >
      <h4 className='mb-2 md:mb-0'>Repositories: {props.totalCount} Results</h4>

      <div className='flex items-center'>
        <span className='mr-2 whitespace-nowrap text-sm font-medium text-gray-900'>
          Sort By:{' '}
        </span>

        <select
          id='sort-by'
          defaultValue={sort}
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
          onChange={handleSortChange}
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default RepositoryToolbar
