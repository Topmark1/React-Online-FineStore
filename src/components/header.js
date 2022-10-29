import React from 'react'


export default function Header(){

    return (<div className='header'>
      <div className='head1'>
        <img className='logo' src={require('./logo.PNG')} alt='' />
       <h1 className="finestore"> FineStore</h1>
       </div>
       <div className='head2'>
        <p>About</p>
        <p>Contact</p>
        <b><p>Follow</p></b>
       </div>
       <div className='navbar'>
        <img className='arrow' src={require('./images/downarrow.png')} alt='' />
        <div className='head3'>
        <p>About</p>
        <p>Contact</p>
        <b><p>Follow</p></b>
        </div>
       
       </div>
       </div>)
}