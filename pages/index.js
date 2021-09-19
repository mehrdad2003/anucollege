import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"
import EventItem from "@/components/EventItem"
import Link from 'next/link'
export default function Home({events}) {
 
  return (
    <Layout >
    <h1>Latest Articles</h1>
    {events.length===0&&<h3>No articles yet</h3>}
    {events.map((evt)=>{
      return<EventItem key={evt.id} evt={evt}/>
    })}
    {events.length>0&&(
        <Link href='/events'>
         <a className='btn-secondary'>View all articles</a>
        </Link>
    )}
    </Layout>
  )
}
export async function getStaticProps(){
const res=await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`)
const events=await res.json()
return{
  props:{events},
  revalidate:1
}
}
