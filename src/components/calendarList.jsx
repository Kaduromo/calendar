import React, { useEffect, useState } from "react"
import "./index.css"
import Calendar from "./calendar.jsx"
import { toast } from "react-toastify"

const defaultProps = {
  date: new Date(),
  years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  onChange: Function.prototype,
}

const CalendarsList = () => {
  const [date, setDate] = useState(defaultProps.date)
  const [theme, setTheme] = useState("Светлая")

  const year = () => date.getFullYear()
  const month = (mont) => (mont ? mont - 1 : date.getMonth())

  const handlePrevMonthButtonClick = () => {
    const date = new Date(year(), month() - 12)
    toast(date.getFullYear())
    setDate(date)
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
    const date = new Date(year(), month() + 12)
    toast(date.getFullYear())
    setDate(date)
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
      setTheme("Тёмная")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
      localStorage.setItem("theme", "light")
      setTheme("Светлая")
    }
  }

  return (
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
                className="calendar-prev"
                onClick={handlePrevMonthButtonClick}
              >
                {date.getFullYear() - 1}
              </button>
              <span>
                <button onClick={handleTodayMonthButtonClick}>
                  {date.getFullYear()}
                </button>
              </span>
              <button
                className="calendar-next"
                onClick={handleNextMonthButtonClick}
              >
                {date.getFullYear() + 1}
              </button>
            </span>
          </p>
        </header>
        <div className="calendar-body">
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(1)}
            title="Январь"
            text="ебаный новый год"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(2)}
            title="Февраль"
            text="ебаный холод"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(3)}
            title="Март"
            text="ебаная грязь"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(4)}
            title="Апрель"
            text="ебаные шутники"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(5)}
            title="Май"
            text="ебаный день труда"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(6)}
            title="Июнь"
            text="ебаные школьники"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(7)}
            title="Июль"
            text="ебаная жара"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(8)}
            title="Август"
            text="ебаный отпуск"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(8)}
            title="Сентябрь"
            text="ебаное 3 сентября"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(10)}
            title="Октябрь"
            text="ебаный дождь"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(11)}
            title="Ноябрь"
            text="ебаные скидки"
          />
          <Calendar
            props={defaultProps}
            year={year()}
            month={month(12)}
            title="Декабрь"
            text="ебаные подарки"
          />
        </div>
      </div>
    </div>
  )
}

export default CalendarsList
