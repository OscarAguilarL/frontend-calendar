import { useState } from 'react'
import Calendar from 'react-calendar'

import 'react-calendar/dist/Calendar.css'

function App() {
  const [date, setDate] = useState<Date>(new Date())

  console.log(date)

  return (
    <div className="App">
      <Calendar onChange={setDate} value={date} />
    </div>
  )
}

export default App
