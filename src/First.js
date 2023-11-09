import React from 'react'
import './First.css';
import Nav from './Nav';

const First = () => {
  return (
      <>
      <Nav/>
      <h1 className='title'>Hello</h1>
      <h2 className='mini-title'>React Class</h2>
      <img src='/Images/4.jpeg' alt='test image' width={'500'}/>
      </>
  )
}

export default First