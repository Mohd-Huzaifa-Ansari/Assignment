import React from 'react'
import "./CardPlans.css"

const CardPlans =  ( { type, desc, price,btn, list }) => {
     
  return (
    <div className='cardplans'>
       <h4>{type}</h4>
       <p>{desc}</p>
       <p id='prices'>{price}</p>


     <div className='ul-btn'>
       
            
         <ul>
         
         {list?.map((item, index) => (
          
   
          <li key={index}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z" fill="#54BD95"/>
          </svg>
          {item}</li>
          )
        )}
        </ul>
       

       <button>{btn}</button>
       </div>
      

    </div>
  )
}

export default CardPlans
