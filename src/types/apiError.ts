export type ApiError = {
  message: string
  documentation_url: string
  errors: {
    resource: string
    field: string
    code: string
    message: string
  }[]
}
