import axios, { AxiosRequestConfig } from 'axios'
import { appEnv } from '../config/env'

interface GetRequestParams {
  endpoint: string
  config?: AxiosRequestConfig
}

const instance = axios.create({
  baseURL: appEnv.GITHUB_API_URL
})

export const get = async ({ endpoint, config }: GetRequestParams) => {
  const response = await instance.get(endpoint, config)
  return response.data
}
