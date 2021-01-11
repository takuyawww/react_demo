import React from 'react'
import { GridList } from '@material-ui/core'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
dayjs.locale('ja')
// import styles
import * as styles from './style.css'

const createCalender = () => {
  const firstDay: dayjs.Dayjs = dayjs().startOf('month')
  const firstDayIndex: number = firstDay.day()
  return Array(35)
    .fill(0)
    .map((_: number, i: number) => {
      const diffFromFirstDay: number = i - firstDayIndex
      const day: dayjs.Dayjs = firstDay.add(diffFromFirstDay, 'day')
      return day
    })
}

const calendar = createCalender()
  
const CalenderBoard = () => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map((c: dayjs.Dayjs, i: number) => (
          <li key={i}>
            <div className={styles.element}>{c.format('D')}</div>
          </li>
        ))}
      </GridList>
    </div>
  )
}

export default CalenderBoard