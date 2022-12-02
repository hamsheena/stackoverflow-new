import React from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import './Auth.css'
import icon from '../../assets/icons.png'
import AboutAuth from './AboutAuth'
import {signup,login} from '../../actions/auth'

const Auth = () => {
  const [isSignup,setIssignup]=useState(false);
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const dispatch = useDispatch()
const navigate = useNavigate()

  const handleSwitch = () => {
    setIssignup(!isSignup);
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    if(!email && !password){
      alert('Enter email and password')
    }
    if(isSignup){
      if(!name){
        alert("enter a name to continue")
      }
      dispatch(signup({name,email,password},navigate))
    }
    else{
      dispatch(login({email,password},navigate))
    }
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
    <div className='auth-container'>
      {!isSignup && <img src={icon} alt='stackoverflow' width="32px" className='login-logo'/>}
      <form onSubmit={handleSubmit}>
        {
          isSignup && (
            <label htmlFor='name'>
          <h4>Display Name</h4>
          <input type='text' name='name' id='name' onChange={(e) => {setName(e.target.value)}}/>
        </label>
          )
        }
        <label htmlFor='email'>
          <h4>Email</h4>
          <input type='email' name='email' id='email' onChange={(e) => {setEmail(e.target.value)}}/>
        </label>
        <label htmlFor='password'>
          <div style={{display:'flex',justifyContent:"space-between"}}>
          <h4>Password</h4>
          {!isSignup && <p style={{color:"#007ac6", fontSize:"13px"}}>Forgot password?</p>}
          </div>
          <input type='password' name='password' id='password' onChange={(e) => {setPassword(e.target.value)}}/>
          {isSignup && 
          <p style={{color:"#666767", fontSize:"13px"}}>Passwords must contain atleast 8 characters<br/>including atleast 1 letter and<br/> 1 number
            </p>}
            </label>
            {
              isSignup && (
                <label htmlFor='check'>
                  <input type="checkbox" id='check' />
                  <p style={{fontSize:"13px"}}>Opt-in to recieve occational,<br/>product updates,user research invitations<br/>,company announcements and digests.</p>
                </label>
              )
            }
          <button type='submit' className='auth-btn'>
          {isSignup?'Sign Up': 'Log In'}
          </button>
          {
            isSignup && (
              <p style={{color:"#666767", fontSize:"13px"}}>By clicking Sign up,you agree to our <span style={{color:"#007ac6"}}>terms of<br/> service</span>, <span style={{color:"#007ac6"}}>privacy policy </span>and <span style={{color:"#007ac6"}}>cookie policy</span></p>
            )
          }
        
      </form>
      <div style={{marginTop:"-18px", display:"flex",justifyContent:"space-between"}}>
      <p>
            {isSignup?'Already have an account?':'Don\'t have an account?'}
          </p>
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup?'Log In':'Sign Up'}</button>
          </div>
    </div>
    </section>
  )
}

export default Auth