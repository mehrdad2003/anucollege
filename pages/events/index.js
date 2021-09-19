import Layout from "@/components/Layout"
import { API_URL,PER_PAGE } from "@/config/index"
import EventItem from "@/components/EventItem"
import Link from 'next/link'

export default function EventPage({events,page,total}) {
 const lastPage=Math.ceil(total/PER_PAGE)
  return (
    
    <Layout >
    <h1>Articles</h1>
    {events.length===0&&<h3>No article yet</h3>}
    {events.map((evt)=>{
      return<EventItem key={evt.id} evt={evt}/>
    })}
    {page>1 &&(
      <Link href={`/events?page=${page-1}`}>
        <a className='btn-secondary'>
          Prev
        </a>
      </Link>
    )}
    {page<lastPage &&(
      <Link href={`/events?page=${page+1}`}>
        <a className='btn-secondary'>
        Next
        </a>
      </Link>
    )}
    </Layout>
  )
}
export async function getServerSideProps({query:{page=1}}){
  const start=+page===1?0:(+page-1)*PER_PAGE
  const tottalRes=await fetch(`${API_URL}/events/count`)
  const total=await tottalRes.json()
const resEvents=await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
const events=await resEvents.json()
return{
  props:{events,page:+page,total},
 
}
}
