import React from 'react'
import dayjs from 'dayjs'
import { Typography } from '@material-ui/core'
// import styles
import * as styles from './style.css'
// import types
import { TextColorType } from '../../types/commonTypes'
// import services
import { isSameDay, isSameMonth, isFirstDay } from '../../services/calendar'

interface PropType {
  day: dayjs.Dayjs
}

const CalendarElement = (props: PropType) => {
  const day = props.day

  const format: string = isFirstDay(day) ? 'M月D日' : 'D'
  const today: dayjs.Dayjs = dayjs()
  const isToday: boolean = isSameDay(day, today)

  const isCurrentMonth: boolean = isSameMonth(day, today)
  const textColor: TextColorType = isCurrentMonth ? 'textPrimary' : 'textSecondary'

  return (
    <div className={styles.element}>
      <Typography
         className={styles.date}
         color={textColor}
         align='center'
         variant='caption'
         component='div'
      >
        <span className={isToday ? styles.today: ''}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  )
}

export default CalendarElement