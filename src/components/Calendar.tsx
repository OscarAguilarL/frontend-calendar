import { useState } from 'react'
import ReactCalendar from 'react-calendar'

import '../styles/Calendar.css'

const monthNames: string[] = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]

export const Calendar = () => {
  const [date, setDate] = useState<Date>(new Date())

  console.log(date)

  return (
    <ReactCalendar
      className="calendar"
      onChange={setDate}
      value={date}
      navigationLabel={({ date }) => <NavigationLabel date={date} />}
      showNavigation={true}
    />
  )
}

const NavigationLabel = ({ date }: { date: Date }) => {
  return (
    <div className="calendar-navigation">
      <h3 className="calendar-year">{date.getFullYear()}</h3>
      <p className="calendar-month">{monthNames[date.getMonth()]}</p>
    </div>
  )
}
