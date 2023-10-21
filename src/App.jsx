import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
// import RightSidebar from './Rightbar'
import Home from './Home'
import Navbar from './Navbar'
import Rightbar from './Rightbar'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Navbar OpenSidebar={OpenSidebar}></Navbar>

      <Header OpenSidebar={OpenSidebar}/>
      <Header/>
      
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <RightSidebar /> */}
      <Home />
      <Rightbar/>
    </div>
  )
}

export default App