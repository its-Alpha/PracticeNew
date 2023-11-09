import React from 'react'

export const Third = () => {
    return (
        <> 
        
        <h3>This is not a default export component</h3>


        </>
    )
}

export const Test =()=>(
    <h1>This is a single statment with parenthesis and no return</h1>
)

export const LoginForm=()=>{
    return(
        <form>
            <lable htmlFor='email'>Email</lable>
            <br/>
            <input type='email' id='email' placeholder='Enter your email id'/>
            <br/>
            <lable htmlFor='pwd'>Password</lable>
            <br/>
            <input type='pwd' id='pwd' placeholder='********'/>
            <br/>
            <button>Login</button>


        </form>
    )
}