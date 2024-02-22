import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({darkTheme}) => {
  return (
    <ul className='list-group my-3'>
        <ListItem darkTheme={darkTheme} />
    </ul>
  )
}

export default ListGroup
