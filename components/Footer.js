import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
const Footer = () => {
    return (
        <footer className={styles.footer}>
          <p>Copyright&copy;2021</p> 
          <Link href='/about'>
          About us
          </Link> 
        </footer>
    )
}

export default Footer
