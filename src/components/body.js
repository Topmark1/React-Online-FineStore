import React from 'react'
import Chart from './chart.js'
import data from './data.js'


export default function Body(){

    const itemDisplay = data.map((item)=>{
    let active
    item.openSpots?active = 'ACTIVE': active = 'SOLD OUT'
    return <Chart
    status={active}
    image={require(`./images/${item.coverImg}`)} 
    starNumber={item.stats.rating}
    itemNumber={item.stats.reviewCount} 
    country={item.location}
    itemDetails={item.title}
    itemAmount={item.price} />})
     
    return (
    <div className='body'>
        <img className='store' alt='' src={require(`./images/store.jpeg`)} />
        <h1 className='online'>Online Experiences</h1>
        <p className='onlinetext'>Join unique interactive activities led by one of a kind host, all without leaving home</p>
       <div className='itemDisplay'>{itemDisplay}</div>
        </div>)
}