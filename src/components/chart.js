import React from 'react'
import star from './star.PNG'
import starred from './starred.PNG'

export default function Chart(props){
    const [bad,good]=React.useState(true)
        let y    
        bad?y=starred:y=star
        function change(){
            good((x)=>!x)}
    return (
    <div className='chart'>
      <div className='status'>{props.status}</div>
       <img src={props.image} className='chartimage' alt=''></img>
       <div className='chartl1'>
       <img onClick={change} src={y} className='star' alt=''></img>
       <strong>{props.starNumber}</strong>
       (<div>{props.itemNumber}</div>).<div>{props.country}</div>
       </div>
       <div className='chartl2'>
     {props.itemDetails}
       </div>
       <div className='chartl3'>
       <strong>From ${props.itemAmount}</strong>/ person
       </div>
    </div>)
}