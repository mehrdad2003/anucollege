import Link from 'next/link'
import styles from '@/styles/Header.module.css'
import Search from './Search'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useGlobalContext } from '@/context/AuthContext'
const Header = () => {
    const{user,logout}=useGlobalContext()
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
              <Link href='/'>
               <a>Anu college</a>
              </Link>
            </div>
            <Search/>
            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            <a>Articles</a>
                        </Link>
                    </li>
        {user?<>
            <li>
                        <Link href='/events/add'>
                            <a>Add Article</a>
                        </Link>
                    </li>
               <li>
                   <Link href='/account/dashboard'>
                    <a>
                        Dashboard
                    </a>
                   </Link>
                   
                   </li>     
             <li>
                 <button className='btn-secondary btn-icon' onClick={()=>logout()}>
                     <FaSignOutAlt/>LogOut
                 </button>
                 </li>       
        </>:<>
        <li>
                        <Link href='/account/login'>
                               <a className='btn-secondary btn-icon'>
                                   <FaSignInAlt/>login
                               </a>
                        </Link>
                    </li>
        
        </>}            
                   
                   
                </ul>
            </nav>
        </header>
    )
}

export default Header
