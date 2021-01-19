import dayjs from 'dayjs'

export const createCalendar: (month: any) => dayjs.Dayjs[] = (month) => {
  const fristDay: dayjs.Dayjs = getMonth(month)
  const firstDayIndex: number = fristDay.day()

  return Array(35)
    .fill(0)
    .map((_: number, i: number) => {
      const diffFromFirstDay: number = i - firstDayIndex
      const day: dayjs.Dayjs = fristDay.add(diffFromFirstDay, 'day')
      return day
    })
}

export const isSameDay = (d1: dayjs.Dayjs, d2: dayjs.Dayjs): boolean => {
  const format: string = 'YYYYMMDD'
  return d1.format(format) === d2.format(format)
}

export const isSameMonth = (m1: dayjs.Dayjs, m2: dayjs.Dayjs): boolean => {
  const format = 'YYYYMM'
  return m1.format(format) === m2.format(format)
}

export const isFirstDay = (day: dayjs.Dayjs): boolean => day.date() === 1

export const getMonth = ({year, month}) => {
  return dayjs(`${year} - ${month}`)
}

export const formatMonth = (day) => {
  return (
    {
      month: day.month() + 1,
      year: day.year()
    }
  )
}

const getMonthStateCreator = diff => month => {
  const day = getMonth(month).add(diff, "month");
  return formatMonth(day);
}

export const getNextMonth = getMonthStateCreator(1);
export const getPreviousMonth = getMonthStateCreator(-1)