import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
import {useRouter} from 'next/router'
import ShowCase from './ShowCase'
const Layout = ({title,keywords,description,children}) => {
    const router=useRouter()
    return (
        <div>
          <Head>
          <title>{title}</title>
      <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
              </Head> 
              <Header/>
              {router.pathname==='/'&&<ShowCase/>}
             <div className={styles.container}>

             {children}
             </div>

            <Footer/>
        </div>
    )
}
Layout.defaultProps={
    title:"Anu college",
    description:'flight college',
    keywords:'flight,college,permission'
}

export default Layout
