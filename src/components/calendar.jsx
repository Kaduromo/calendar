import { useState } from "react"
import classnames from "classnames"
import { toast } from "react-toastify"
import { areEqual, getMonthData } from "./calendar"

const Calendar = ({ year, month, title, text }) => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [currentDate] = useState(new Date())
  const monthData = getMonthData(year, month)

  const weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
  const holidayDays = [
    { date: "1-0", text: "Ебаный Новый Год" },
    { date: "2-0", text: "Ебаный Новый Год" },
    { date: "7-0", text: "Ебаное Рождество" },
    { date: "8-2", text: "Ебаный День Женщин" },
    { date: "24-3", text: "Ебаная Радуница" },
    { date: "25-3", text: "Ебаная Радуница" },
    { date: "1-4", text: "Ебаный День Труда" },
    { date: "9-4", text: "Ебаный День Победы" },
    { date: "3-5", text: "Ебаный День Независимости" },
    { date: "7-10", text: "Ебаный День Октябрьской революции" },
    { date: "25-11", text: "Ебаное Рождество" },
  ]

  const currentDay = (d) => `${d.getDate()}-${d.getMonth()}`

  const selectedDay = (date) => {
    const day = currentDay(date)
    holidayDays.forEach((happyDay) => {
      if (happyDay.date === day) {
        setSelectedDate(date)
        toast(happyDay.text)
      }
    })
  }

  const holidayDay = (date) => {
    const day = currentDay(date)
    return holidayDays.find((happyDay) => happyDay.date === day && date)
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
                      holiday: holidayDay(date),
                    })}
                    onClick={() => selectedDay(date)}
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
