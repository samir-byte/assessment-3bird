import { format } from 'date-fns'
import numeral from 'numeral'

export const formatDate = (date: string) => {
  return format(new Date(date), 'MMMM dd, yyyy')
}

export const formatNumber = (number: number) => {
  return numeral(number).format('0.0a')
}
