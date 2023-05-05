import { Route, Routes } from "react-router-dom";
import './App.scss'
import { useDispatch } from "react-redux";
import { addInitialPlayers,addInitialCourts } from "./actions/padelActions";
import { useEffect } from "react";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Courts from "./pages/Courts";
import Members from "./pages/Members";
import MyAccount from "./pages/MyAccount";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchInitialPlayers() {
      const response = await fetch("./players.json")
      let data = await response.json()
      dispatch(addInitialPlayers(data))
    }
    async function fetchInitialCourts() {
      const response = await fetch("./courts.json")
      let data = await response.json()
      dispatch(addInitialCourts(data))
    }
    
    fetchInitialPlayers()
    fetchInitialCourts()
  }, [])

  

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/courts" element={<Courts />}></Route>
        <Route path="/members" element={<Members />}></Route>
        <Route path="/myaccount" element={<MyAccount />}></Route>
      </Routes>
    </div>
  )
}

export default App
