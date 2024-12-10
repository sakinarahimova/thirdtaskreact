import React from 'react'
import './Home.css';
import logo from './logo.svg'
const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-card'>
            <div>
                <h1>HELLO DEAR USER</h1>
                <p>You're welcome to navigate through other pages and explore the rest of our website at your leisure.</p>
            </div>
            {/* <div>
                <img src={logo} alt="Logo" className="logo" />
            </div> */}
        </div>
    </div>
  )
}

export default Home