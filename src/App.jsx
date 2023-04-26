import { Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/courts" element={<Courts />}></Route>
          <Route path="/members" element={<Members />}></Route>
        </Routes>
    </div>
  )
}

export default App
