import { connect } from 'react-redux'
import CalendarBoard from './presentation'
import { createCalendar } from '../../services/calendar'

interface StateProps {
  calendar: CalendarProps
}

type CalendarProps = {
  year: number
  month: number
}

const mapStateToProps = (state: StateProps) => ({
  calendar: state.calendar
})

const mergeProps = (stateProps: StateProps) => ({
  calendar: createCalendar(stateProps.calendar)
})

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard)