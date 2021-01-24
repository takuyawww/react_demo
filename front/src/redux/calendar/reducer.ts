import dayjs from 'dayjs'

// import constants
import { CALENDAR_SET_MONTH } from './action' 
// import services
import { formatMonth } from '../../services/calendar'

const day: dayjs.Dayjs = dayjs()

interface InitialState {
  year: number
  month: number
}

const initialState: InitialState = formatMonth(day)

const calendarReducer = (
  state: InitialState = initialState, 
  action: {
    type: string
    payload: {
      year: number
      month: number
    }
  }
) => {
  const { type, payload } = action

  switch (type) {
    case CALENDAR_SET_MONTH:
      return payload
    default:
      return state
  }
}

export default calendarReducer