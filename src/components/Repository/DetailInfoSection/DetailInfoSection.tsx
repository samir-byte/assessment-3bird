import React from 'react'
import { IRepositoryItem } from '../../../types/repository'
import { VscIssues } from 'react-icons/vsc'
import branch from '../../../assets/icons/git.png'

const DetailInfoSection: React.FC<Partial<IRepositoryItem>> = props => {
  return (
    <div
      data-testid='detail-info-section'
      className='rounded bg-gray-100 p-5 text-black md:p-10'
    >
      <div className='flex items-center gap-5'>
        <img
          className='h-10 w-10 rounded-full'
          src={props.owner?.avatar_url}
          alt='Rounded avatar'
        ></img>
        <a
          className='text-2xl font-bold text-blue-500 underline'
          href={props.html_url}
          target='_blank'
        >
          {props.full_name}
        </a>
      </div>
      <p className='text-l mt-5 font-medium'>
        Owner:{' '}
        <a
          className='text-blue-500 underline'
          href={props.owner?.html_url}
          target='_blank'
        >
          {props.owner?.login}
        </a>{' '}
      </p>
      <div className='mt-5 flex justify-start gap-5'>
        <div className='flex items-center'>
          <VscIssues color='black' width={20} height={20} />{' '}
          <span>{props.open_issues}</span>
        </div>
        <button
          type='button'
          className='flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100'
        >
          <img src={branch} width={20} height={20} />{' '}
          <span>{props.default_branch}</span>
        </button>
      </div>
    </div>
  )
}

export default DetailInfoSection
