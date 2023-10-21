import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {
  return (
    <main className='main-container'>
        <div className='main-title'>
            <h1>My bills</h1>
        </div>
        <div className='main-cards' >
            <div className='card'>
                <div className='card-inner'>
                    <h3>All</h3>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Unchecked Bills</h3>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>In negotiation bills</h3>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Paid Bills</h3>
                </div>
            </div>
        </div> 
{/* Column 2  */}

        <div className='main-cards2' >
            <div className='card2' onClick={() => openImageModal('bill1.jpeg')}>
                <div className='card2-inner' onClick={() => openImageModal('bill1.jpeg')}>
                    <h2 className='card-text' onClick={() => openImageModal('bill1.jpeg')}>Visited to Provider's name</h2>
                </div>
            </div>
            </div>
            <div className='main-cards2'>
            <div className='card2'>
                <div className='card2-inner'>
                    <h2 className='card-text'>Visited to Provider's name</h2>
                </div>
            </div>
            </div>

            <div className='main-cards2'>
            <div className='card2'>
                <div className='card2-inner'>
                    <h2 className='card-text'>Visited to Provider's name</h2>
                </div>
            </div>
            </div>
    </main>
  )
}





export default Home