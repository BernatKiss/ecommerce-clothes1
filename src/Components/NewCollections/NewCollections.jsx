import React from 'react'
import './NewCollections.css'
import new_colletion from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-colletions'>
      <h1>NEW COLLETIONS</h1>
      <hr />
      <div className="colletions">
         {new_colletion.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         })}
      </div>
    </div>
  )
}

export default NewCollections
