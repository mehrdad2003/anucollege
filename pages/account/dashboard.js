import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"
import{parseCookie} from "@/helpers/index"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import DashboardEvent from "@/components/DashboardEvent"
import styles from '@/styles/Dashboard.module.css'
import { useRouter } from "next/router"
const DashboardPage = ({events,token}) => {
    const router=useRouter()
  const handleDelete=async(id)=>{
   
        if(confirm('Are you sure ?')){
            const res=await fetch(`${API_URL}/events/${id}`,{
                method:'DELETE',
                headers:{Authorization:`Bearer ${token}`}
            })
            const data=res.json()
            if(!res.ok){
                toast.error(data.message)
            }else{
                router.reload()
            }
        }
       }
 
    return (
        <Layout title='User dashboard'>
           <div className={styles.dash}>
             <h1>Dashboard</h1>
             <h3>My Articles</h3>
             <ToastContainer/>
             {events.map((evt)=><DashboardEvent evt={evt} key={evt.id} handleDelete={handleDelete}/>)}
           </div>
        </Layout>
    )
}
export async function  getServerSideProps({req}) {
    const {token}=parseCookie(req)
   const  res=await fetch(`${API_URL}/events/me`,{
       method:'GET',
       headers:{Authorization:`Bearer ${token}`}
   })
   const events=await res.json()
    return{
        props:{events,token}
    }
}

export default DashboardPage
