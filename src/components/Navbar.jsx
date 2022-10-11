import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Plan chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>

    </div>
  )
}

export default Navbar