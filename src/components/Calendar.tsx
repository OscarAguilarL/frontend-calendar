import ReactCalendar from 'react-calendar'
import { monthNames } from '../constants'

import '../styles/Calendar.css'

export const Calendar = ({
  date,
  setDate,
}: {
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
}) => {
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
