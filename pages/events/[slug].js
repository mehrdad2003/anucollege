import {API_URL} from '@/config/index'
import styles from '@/styles/Event.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {FaPencilAlt,FaTimes} from 'react-icons/fa'
import Layout from '@/components/Layout'
import EventMap from '@/components/EventMap'
import router, { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const SingleEvent = ({evt}) => {
  console.log();
    return (
       <Layout title='eventDetail'>
         <div className={styles.event}>
           
            <span>
            {new Date(evt.date).toLocaleDateString('en-US')} /<span style={{color:'tomato'}}>
            need {evt.time}min
            to read
            </span>
            </span>
            <h1>{evt.name}</h1>
            <ToastContainer/>
            {evt.image &&(
                <div className={styles.image}>
                   <Image src={evt.image.formats?evt.image.formats.thumbnail.url:'/images/event-default.png'} width={960} height={300}/>
                </div>
            )}
            <div>Author:  <span style={{color:'red'}}>{evt.performers}</span>
            {' '}/{' '}key:<span style={{color:'green'}}>{evt.address}</span>
            </div>
           
           
            
            <h3>Description:</h3>
            <p>{evt.description}</p>
            {/* <EventMap evt={evt} /> */}
            <Link href='/events'>
                <a className={styles.back}>
                    {'<'} Go back
                </a>
            </Link>
         </div>
       </Layout>
    )
}
// export async function getStaticPaths(){
//         const res=await fetch(`${API_URL}/events`)
//         const event=await res.json()
//         const paths=event.map(evt=>({
//          params:{slug:evt.slug}
//         } ))
//         return{
//             paths,
//             fallback:true
//         }
//     }
//     export async function getStaticProps({params:{slug}}){
      
//         const res=await fetch(`${API_URL}/events?slug=${slug}`)
//         const event=await res.json()
        
//         return{
//             props:{evt:event[0]},
//             revalidate:1
//         }
//     }
export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(`${API_URL}/events?slug=${slug}`)
    const events = await res.json()
  
    return {
      props: {
        evt: events[0],
      },
    }
  }

export default SingleEvent
