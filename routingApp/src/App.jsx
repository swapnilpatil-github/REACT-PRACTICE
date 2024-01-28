import {BrowserRouter,Routes,Route,Link,Navigate} from 'react-router-dom'

import Home from "./components/Home"
import Contact from "./components/Contact"
import Aboutus from "./components/Aboutus"
import NavBar from './components/NavBar'
import Users from './components/Users'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <NavBar/>
       <Routes>

          <Route path = "/" element = {<Home/>}/>
          <Route path = "/about" element = {<Aboutus/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          
          <Route path = "/users/:name" element = {<Users/>}/>
          <Route path = "/*" element = {<Navigate to={"/"}/>}/>

       </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
