import { get } from '../lib/http'

interface RepositoryParams {
  q: string
  page: number
  sort?: string
}

export const getAllRepositories = async (params: RepositoryParams) => {
  try {
    console.log(params, 'params')
    const response = await get({
      endpoint: `search/repositories`,
      config: {
        params: { ...params, per_page: 10 }
      }
    })
    console.log(response, 'response')
    return response
  } catch (error) {
    console.log(error, 'error')
    throw error
  }
}

export const getSingleRepository = async (owner: string, repo: string) => {
  try {
    const response = await get({
      endpoint: `repos/${owner}/${repo}`
    })
    console.log(response, 'response')
    return response
  } catch (error) {
    console.log(error, 'error')
    throw error
  }
}

export const getRepositoryMarkdown = async (owner: string, repo: string) => {
  try {
    const response = await get({
      endpoint: `repos/${owner}/${repo}/contents/README.md`
    })
    console.log(response, 'response')
    return response
  } catch (error) {
    console.log(error, 'error')
    throw error
  }
}
