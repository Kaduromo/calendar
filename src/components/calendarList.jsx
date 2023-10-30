import { useEffect, useState } from "react"
import Calendar from "./calendar.jsx"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./index.css"

const CalendarsList = () => {
  const [date, setDate] = useState(new Date())
  const [theme, setTheme] = useState("Тёмная")
  const year = date.getFullYear()
  const monthList = [
    { id: 0, month: "Январь", description: "ебаный новый год" },
    { id: 1, month: "Февраль", description: "ебаный холод" },
    { id: 2, month: "Март", description: "ебаная грязь" },
    { id: 3, month: "Апрель", description: "ебаные шутники" },
    { id: 4, month: "Май", description: "ебаный день труда" },
    { id: 5, month: "Июнь", description: "ебаные школьники" },
    { id: 6, month: "Июль", description: "ебаная жара" },
    { id: 7, month: "Август", description: "ебаный отпуск" },
    { id: 8, month: "Сентябрь", description: "ебаное 3 сентября" },
    { id: 9, month: "Октябрь", description: "ебаный дождь" },
    { id: 10, month: "Ноябрь", description: "ебаные скидки" },
    { id: 11, month: "Декабрь", description: "ебаные подарки" },
  ]

  const handlePrevMonthButtonClick = () => {
    const newDate = new Date(year, date.getMonth() - 12)
    toast(newDate.getFullYear())
    setDate(newDate)
  }

  const handleTodayMonthButtonClick = () => {
    toast(
      `Сегодня ${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()}`
    )
    setDate(new Date())
  }

  const handleNextMonthButtonClick = () => {
    const newDate = new Date(year, date.getMonth() + 12)
    toast(newDate.getFullYear())
    setDate(newDate)
  }

  useEffect(() => {
    localStorage.setItem("theme", "light")
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    )
  }, [])

  const handleDarkMode = () => {
    const currentTheme = localStorage.getItem("theme")

    document.documentElement.setAttribute("data-theme", currentTheme)

    if (currentTheme === "light") {
      document.documentElement.setAttribute("data-theme", "dark")
      localStorage.setItem("theme", "dark")
      setTheme("Светлая")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
      setTheme("Тёмная")
    }
  }

  return (
    <>
      <div className="calendar">
        <div className="calendar-container">
          <button className="dark-mode" onClick={handleDarkMode}>
            {theme} тема
          </button>
          <header>
            <h1 className="calendar-title">ЕБАНЫЙ</h1>
            <p>
              КАЛЕНДАРЬ
              <span>
                <button
                  className="calendar-prev arrow"
                  style={{
                    borderColor:
                      theme === "Тёмная"
                        ? "linear-gradient(97.64deg, #ff621f 3.48%, #ac25ff 88.39%)"
                        : "blue",
                  }}
                  onClick={handlePrevMonthButtonClick}
                />
                <button onClick={handleTodayMonthButtonClick}>
                  {date.getFullYear()}
                </button>
                <button
                  className="calendar-next arrow"
                  onClick={handleNextMonthButtonClick}
                />
              </span>
            </p>
          </header>
          <div className="calendar-body">
            {monthList.map((m) => (
              <Calendar
                key={m.id}
                year={year}
                month={m.id}
                title={m.month}
                text={m.description}
              />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer
        autoClose={2500}
        position={window.innerWidth < 767.98 ? "bottom-center" : "top-right"}
        theme={theme === "Тёмная" ? "dark" : "light"}
      />
    </>
  )
}

export default CalendarsList
