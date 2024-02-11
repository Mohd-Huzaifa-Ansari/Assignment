import React from 'react'
import "../components/Client.css"

const Client = () => {
  return (
    <div className='client'>
    <h1>
    More than 25,000 teams use Collabs
    </h1>
    <div className='company-logo'>
           <div className='logo-com'>
            <img  src={"https://w7.pngwing.com/pngs/818/117/png-transparent-unsplash-brands-icon-thumbnail.png"}/> 
            <h3>Unsplash</h3>
           </div>
           <div className='logo-com'>
            <img src={"https://w7.pngwing.com/pngs/589/804/png-transparent-notion-logo.png"}/>
            <h3>Notion</h3>
           </div>
           <div className='logo-com'>
            <img src={"https://cdn.icon-icons.com/icons2/2428/PNG/512/intercom_black_logo_icon_147121.png"} />
            <h3>INTERCOM</h3>
           </div>
           <div className='logo-com'>
            <img src={"https://assets-global.website-files.com/5d761d627a6dfa6a5b28ab12/64daa969e7109eabb9ac8dcb_Logo.svg"}/>
            <h3>descript</h3>
           </div>
           <div className='logo-com'>
            <img src={"https://cdn.icon-icons.com/icons2/3912/PNG/512/grammarly_logo_icon_248150.png"}/>
            <h3>grammarly</h3>
           </div>
    </div>
      
    </div>
  )
}

export default Client
