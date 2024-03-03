import { ERROR, IDLE, LOADING, SUCCESS } from '../constants'

export type TStatus =
  | typeof IDLE
  | typeof LOADING
  | typeof SUCCESS
  | typeof ERROR
