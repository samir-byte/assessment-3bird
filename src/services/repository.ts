import { get } from '../lib/http'
import { IRepositoryItem } from '../types/repository'

interface RepositoryParams {
  q: string
  page: number
  sort?: string
}

interface Response<T> {
  incomplete_results: boolean
  items: T
  total_count?: number
}

interface Markdown {
  content: string
  encoding: string
  name: string
  sha: string
  path: string
  html_url: string
}

export const getAllRepositories = async (
  params: RepositoryParams
): Promise<Response<IRepositoryItem[]>> => {
  try {
    console.log(params, 'params')
    const response = await get({
      endpoint: `search/repositories`,
      config: {
        params: { ...params, per_page: 10 }
      }
    })
    return response
  } catch (error) {
    console.log(error, 'error')
    throw error
  }
}

export const getSingleRepository = async (
  owner: string,
  repo: string
): Promise<IRepositoryItem> => {
  try {
    const response = await get({
      endpoint: `repos/${owner}/${repo}`
    })
    return response
  } catch (error) {
    console.log(error, 'error')
    throw error
  }
}

export const getRepositoryMarkdown = async (
  owner: string,
  repo: string
): Promise<Markdown> => {
  try {
    const response = await get({
      endpoint: `repos/${owner}/${repo}/contents/README.md`
    })
    return response
  } catch (error) {
    console.log(error, 'error')
    throw error
  }
}
