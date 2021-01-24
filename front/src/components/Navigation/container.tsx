import Navigation from './presentation'
import { connect } from 'react-redux'

import { getNextMonth, getPreviousMonth } from '../../services/calendar'
import { calendarSetMonth } from '../../redux/calendar/action'

const mapStateToProps = (state) => ({
  calendar: state.calendar
})

const mapDispatchToProps = (dispatch) => ({
  setMonth: (month: {
    year: number
    month: number
  }):void => {
    dispatch(calendarSetMonth(month))
  }
})

const mergeProps = (stateProps, disptchProps) => ({
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar)
    disptchProps.setMonth(nextMonth)
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar)
    disptchProps.setMonth(previousMonth)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Navigation)