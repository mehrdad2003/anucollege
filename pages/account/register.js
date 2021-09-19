// import { useContext,useState,useEffect } from "react"
// import Link from 'next/link'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import Layout from "@/components/Layout"
// import styles from '@/styles/AuthForm.module.css'
// import {FaUser} from 'react-icons/fa'
// import { useGlobalContext } from "@/context/AuthContext"
// const RegisterPage = () => {
//     const{register,error}=useGlobalContext()
//     const[email,setEmail]=useState('')
//     const[password,setPassword]=useState('')
//     const[userName,setUserName]=useState('')
//     const[passwordConfirm,setPasswordConfirm]=useState('')
//     useEffect(()=>error&&toast.error('somthing wrong'))
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         if(password!==passwordConfirm){
//           toast.error('Password do not match')
//           return
//         }
//        register({email,password,userName})
//     }
//     return (
//         <Layout title='Register'>
//            <div className={styles.auth}>
//                <h1>
//                    <FaUser/>
//                      Rgister
//                </h1>
//                <ToastContainer/>
//                <form onSubmit={handleSubmit}>
//                <div>
//                        <label htmlFor='userName'>
//                        userName
//                        </label>
//                        <input type='text' id='userName' name='userName' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
//                    </div>
//                    <div>
//                        <label htmlFor='email'>
//                             EmailAddress
//                        </label>
//                        <input type='email' id='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//                    </div>
//                    <div>
//                        <label htmlFor='password'>
//                             Password
//                        </label>
//                        <input type='password' id='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
//                    </div>
//                    <div>
//                        <label htmlFor='passwordConfirm'>
//                             PasswordConfirm
//                        </label>
//                        <input type='password' id='passwordConfirm' name='passwordConfirm' value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)}/>
//                    </div>
//                    <input type='submit' value='register' className='btn'/>
//                </form>
//                <p>
//                   Already have an account <Link href='/account/login'>
//                    Login Now
//                    </Link>
//                </p>
//            </div>
//         </Layout>
//     )
// }

// export default RegisterPage
