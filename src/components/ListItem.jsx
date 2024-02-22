import React from 'react'

const ListItem = ({darkTheme}) => {
  return (
    <li className={darkTheme ? "bg-secondary text-light p-5" : "list-group-item rounded-0"}>
        <h1 className='display-5'>Dad</h1>
        <h1 className='display-6'>+91 9794655502</h1>
        <span class="badge text-bg-success rounded-0">Success</span>
        <button className='btn btn-sm btn-dark rounded-0 float-end'>Call Now</button>

    </li>
  )
}

export default ListItem
