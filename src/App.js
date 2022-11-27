import React from "react"
import CalendarsList from "./components/calendarList"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="App">
      <CalendarsList />
      <ToastContainer />
    </div>
  )
}

export default App
