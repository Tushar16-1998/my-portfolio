import './App.css'
import { Routes, Route } from "react-router-dom";
import CV2 from "./images/CV2.png"
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
