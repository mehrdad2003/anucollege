import Layout from "@/components/Layout"
import Link from 'next/link'
import styles from '@/styles/404.module.css'
import {FaExclamationTriangle} from 'react-icons/fa'
const NotFound = () => {
    return (
        <Layout title='Not found'>
            <div className={styles.error}>
                 <h1>
                     <FaExclamationTriangle/>
                     404</h1>
                 <h4>Not Found</h4>
                 <Link href='/'>Home</Link>
            </div>
        </Layout>
    )
}

export default NotFound
