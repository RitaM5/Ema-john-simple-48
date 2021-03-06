import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import About from './Components/About/About'
import Header from './Components/Header/Header'
import Inventory from './Components/Inventory/Inventory'
import Orders from './Components/Orders/Orders'
import Shop from './Components/Shop/Shop'
import Login from './Components/LogIn/Login'
import SignUp from './Components/SignUp/SignUp'
import RequireAuth from './Components/RequireAuth/RequireAuth'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="">
       <Header></Header>
       <Routes>
         <Route  path="/" element={<Shop></Shop>}></Route>
         <Route  path="/shop" element={<Shop></Shop>}></Route>
         <Route  path="/orders" element={<Orders></Orders>}></Route>
         <Route  path="/inventory" element={
           <RequireAuth>
             <Inventory></Inventory>
           </RequireAuth>
         }></Route>
         <Route  path="/about" element={<About></About>}></Route>
         <Route  path="/login" element={<Login></Login>}></Route>
         <Route  path="/signup" element={<SignUp></SignUp>}></Route>
       </Routes>
    </div>
  )
}

export default App
