import { useState } from "react"
import classnames from "classnames"
import { toast } from "react-toastify"
import { areEqual, getMonthData } from "./calendar"

const Calendar = ({ year, month, title, text }) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [currentDate] = useState(new Date())
  const monthData = getMonthData(year, month)
  const weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

  const handleDayClick = (date) => {
    const day = `${date.getDate()}-${date.getMonth()}`

    switch (day.trim()) {
      case "1-0":
        setSelectedDate(date)
        return toast("Ебаный Новый Год")
      case "2-0":
        setSelectedDate(date)
        return toast("Ебаный Новый Год")
      case "7-0":
        setSelectedDate(date)
        return toast("Ебаное Рождество")
      case "8-2":
        setSelectedDate(date)
        return toast("Ебаный День Женщин")
      case "24-3":
        setSelectedDate(date)
        return toast("Ебаная Радуница")
      case "25-3":
        setSelectedDate(date)
        return toast("Ебаная Радуница")
      case "1-4":
        setSelectedDate(date)
        return toast("Ебаный День Труда")
      case "8-4":
        setSelectedDate(date)
        return toast("Ебаный День Победы")
      case "9-4":
        setSelectedDate(date)
        return toast("Ебаный День Победы")
      case "3-5":
        setSelectedDate(date)
        return toast("Ебаный День Независимости")
      case "7-10":
        setSelectedDate(date)
        return toast("Ебаный День Октябрьской революции")
      case "25-11":
        setSelectedDate(date)
        return toast("Ебаное Рождество")
      default:
        setSelectedDate()
        break
    }
  }

  const handleHappyDay = (date) => {
    const day = `${date.getDate()}-${date.getMonth()}`
    switch (day.trim()) {
      case "1-0":
        return date
      case "2-0":
        return date
      case "7-0":
        return date
      case "8-2":
        return date
      case "24-3":
        return date
      case "25-3":
        return date
      case "1-4":
        return date
      case "8-4":
        return date
      case "9-4":
        return date
      case "3-5":
        return date
      case "7-10":
        return date
      case "25-11":
        return date
      default:
        break
    }
  }

  return (
    <div>
      <p className="table-text">{text}</p>
      <p className="table-title">{title}</p>
      <table>
        <thead>
          <tr>
            {weekDayNames.map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {monthData.map((week, index) => (
            <tr key={index} className="week">
              {week.map((date, index) =>
                date ? (
                  <td
                    key={index}
                    className={classnames("day", {
                      today: areEqual(date, currentDate),
                      selected: areEqual(date, selectedDate),
                      happy: handleHappyDay(date),
                    })}
                    onClick={() => handleDayClick(date)}
                  >
                    {date.getDate()}
                  </td>
                ) : (
                  <td key={index} />
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar
