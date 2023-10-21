import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Navbar({OpenSidebar}) {
  return (
    <header className='navbar'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='navbar-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='navbar-right'>
            <BsFillBellFill className='icon'/>

            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Navbar



// import React from 'react'
// import 
//  {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
//  from 'react-icons/bs'

// function Header({OpenSidebar}) {
//   return (

    


    
//     <header className='header'>
       
//       <div className='menu-icon'>
//             {/* <BsJustify className='icon' onClick={OpenSidebar}/> */}
//         </div>
//         <div className='header-left'>
//           <div className='header-text'>
//             {/* <BsSearch  className='icon'/> */}
//               <h3>Do you kniw that 80% of medical bills contain errors?</h3>
//               <h2>Picture, upload, and check a bill.</h2>
//               <div className='header-button'>Checking now</div>
//             </div>
//         </div>
//         <div className='header-right'>
//             {/* <BsFillBellFill className='icon'/>
//             <BsFillEnvelopeFill className='icon'/>
//             <BsPersonCircle className='icon'/> */}
//         </div>
//         <div className='menu-icon'>
//             {/* <BsJustify className='icon' onClick={OpenSidebar}/> */}
//         </div>
        
//     </header>
//   )
// }

// export default Header

