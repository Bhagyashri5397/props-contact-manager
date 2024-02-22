import React, { useState }  from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'


// 13 video ----------

const App = () => {

  const [darkTheme , setDarkTheme] = useState(false);

  const changeTheme = () => {
   
    if (darkTheme) {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
    
  };

 

  return (
    <>
      <Navbar darkTheme={darkTheme}/>
      <div className= {darkTheme ? "container p-5 my-3 bg-secondary" : "container p-5 bg-light"} >

        <button className='btn btn-sm btn-dark rounded-0 w-100' onClick={()=>changeTheme()}>Change Theme</button>

        <Form darkTheme={darkTheme} />
        <ListGroup darkTheme={darkTheme}/>
      </div>
    </>
  )
}

export default App
