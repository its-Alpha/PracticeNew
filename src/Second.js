import React from 'react'
import { LoginForm, Test, Third } from './Third'
import Nav from './Nav'

const Second = () => {
  return (
    <>
    <Nav/>
        <h2 style={{color:'red', backgroundColor:'gray '}}>This is a Second Component</h2>
        <hr/>
        <Third/>
        <Test/>
        <LoginForm />
    </>
  )
}

export default Second 