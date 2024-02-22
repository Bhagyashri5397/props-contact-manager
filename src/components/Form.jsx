import React from 'react'

const Form = ({darkTheme}) => {
  return (
    <form className= {darkTheme ? "bg-secondary text-light my-3 p-2" : "my-3 p-2"}>

        <input type="text" placeholder='Enter Name' className='form-control rounded-0 my-2' />

        <input type="number" placeholder='Enter Number' className='form-control rounded-0 my-2' />

        <select className='form-control rounded-0'>
            <option value="family">Family</option>
            <option value="friende">Friends</option>
            <option value="others">Others</option>
        </select>

        <button className='btn btn-primary rounded-0 my-2 w-100'>Save</button>

    </form>
  )
}

export default Form
