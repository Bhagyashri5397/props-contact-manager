import React from 'react'

const Navbar = ({darkTheme}) => {
  return (
    <nav className= {darkTheme ? ' navbar bg-dark text-light' : 'navbar bg-light text-dark'}>
  <div className="container-fluid ">
    <h3 id='heading '> Props Contact Manager</h3>
  </div>
</nav>
  )
}

export default Navbar
