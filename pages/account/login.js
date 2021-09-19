import { useContext,useState,useEffect } from "react"
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from "@/components/Layout"
import styles from '@/styles/AuthForm.module.css'
import {FaUser} from 'react-icons/fa'
import { useGlobalContext } from "@/context/AuthContext"
const LoginPage = () => {
    const{login,error}=useGlobalContext()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
   
    const handleSubmit=(e)=>{
        e.preventDefault()
        login({email,password})
    }
    useEffect(()=>error&&toast.error(error))
    return (
        <Layout title='login'>
           <div className={styles.auth}>
               <h1>
                   <FaUser/>
                     LogIn
               </h1>
               <ToastContainer/>
               <form onSubmit={handleSubmit}>
                   <div>
                       <label htmlFor='email'>
                            EmailAddress
                       </label>
                       <input type='email' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                   </div>
                   <div>
                       <label htmlFor='password'>
                            Password
                       </label>
                       <input type='password' id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                   </div>
                 
                   <input type='submit' value='login' className='btn'/>
               </form>
               {/* <p>
                   Do not have an account <Link href='/account/register'>
                   Register Now
                   </Link>
               </p> */}
           </div>
        </Layout>
    )
}

export default LoginPage
