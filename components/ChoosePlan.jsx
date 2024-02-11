import React from 'react'

import "./ChoosePlan.css"
import CardPlans from './smallComponents/CardPlans'
const ChoosePlan = () => {
  const items1 =["2 Users","2 Files","Public Share & Comments","Chat Support ","New income apps"];
  const items2 =["4 Users","All apps","Unlimited editable exports","Folders and collaboration ","All incoming apps"];
  const items3 =["All the features of pro plan","Account success Manager","Single Sign-On (SSO)","Co-conception pogram","Collaboration-Soon"];
  return (
    

    <div className='ChoosePlan'>
    <h1>Choose Plan<br/>
           That’s Right For You</h1>
            <p>Choose plan that works best for you, feel free to contact us</p>
      
      <div className='bill'> <button>Bill Monthly</button>
             <button>Bill Yearly</button>
      </div>

      <div className='plans'>
      <CardPlans type="Free" desc="Have a go  and test your  superpowers"  price="$0" btn="Signup for free" list={items1}/>
      <CardPlans type="Pro" desc="Experiment the power of infinite possibilities" price="$8" btn="Go to pro" list={items2}/>
      <CardPlans type="Business" desc="Unveil new superpowers and join the Design Leaque" price="$16" btn="Goto Business" list={items3}/>
      

      </div>
      
    </div>
  )
}

export default ChoosePlan
