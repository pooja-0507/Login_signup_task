import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignupForm from "./components/Signup"

function App() {

  return (
    <>
    <Router>
      <Routes>
       <Route path="/" element={<Login/>}></Route>
       <Route path="/Signup" element={<SignupForm/>}></Route>
      </Routes>
    </Router>

    </>
  )
}

export default App
