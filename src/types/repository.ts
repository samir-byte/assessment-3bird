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
