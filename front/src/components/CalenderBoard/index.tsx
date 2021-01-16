import React from 'react'
import { GridList, Typography } from '@material-ui/core'
import dayjs from 'dayjs'
// import styles
import * as styles from './style.css'
// import components
import CalendarElement from '../CalendarElement/'
// import services
import { createCalendar } from '../../services/calendar'
// import types
import { DaysType } from '../../types/commonTypes'

const calendar = createCalendar()
const days: DaysType[] = ['月', '火', '水', '木', '金', '土', '日']
  
const CalenderBoard = () => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map((d: string, i: number) => {
          <li key={i}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        })}
        {calendar.map((c: dayjs.Dayjs, i: number) => (
          <li key={i}>
            <CalendarElement day={c}></CalendarElement>
          </li>
        ))}
      </GridList>
    </div>
  )
}

export default CalenderBoard