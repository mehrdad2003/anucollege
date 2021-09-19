 import { parseCookie } from '@/helpers/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import {FaImage} from 'react-icons/fa'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.css'
import moment from 'moment'
import Image from 'next/image'
import Modal from '@/components/Modal'
import ImageUpload from '@/components/ImageUpload'

export default function EditPage({ evt,token }) {
  const [values, setValues] = useState({
    name: evt.name,
    performers: evt.performers,
    venue: evt.venue,
    address: evt.address,
    date: evt.date,
    time: evt.time,
    description: evt.description,
  })
const [imagePreview,setImagePreview]=useState(
    evt.image?evt.image.formats.thumbnail.url:null
)
const [showModal,setShowModal]=useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

  const notEmpty=Object.values(values).some((value)=>value==='')
  if(notEmpty){
      toast.error('Please fill all field')
  }
  const res=await fetch(`${API_URL}/events/${evt.id}`,{
      method:'PUT',
      headers:{'Content-Type':'application/json',
      Authorization:`Bearer ${token}`
    },
      body:JSON.stringify(values)
  })
   if(!res.ok){
     if(res.status===401||res.status===403){
      toast.error('Unauthorized')
     }
       toast.error('Some error ocure')
   } else{
       const evt=await res.json()
       router.push(`/events/${evt.slug}`)
   }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
const imageUploaded=async(e)=>{
 const res=await fetch(`${API_URL}/events/${evt.id}`)
 const data=await res.json()
 setImagePreview(data.image.formats.thumbnail.url)
 setShowModal(false)
}
  return (
    <Layout title='Edit Event'>
      <Link href='/events'>Go Back</Link>
      <h1>Edit Article</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor='name'>Article Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='performers'>Author</label>
            <input
              type='text'
              name='performers'
              id='performers'
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='venue'>key</label>
            <input
              type='text'
              name='venue'
              id='venue'
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='address'>About</label>
            <input
              type='text'
              name='address'
              id='address'
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='date'>Date</label>
            <input
              type='date'
              name='date'
              id='date'
              value={moment(values.date).format('yyyy-MM-DD')}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='time'>Time to read</label>
            <input
              type='text'
              name='time'
              id='time'
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='description'>Article Description</label>
          <textarea
            type='text'
            name='description'
            id='description'
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type='submit' value='Update Event' className='btn' />
      </form>
      <h3>Image Preview</h3>
      {imagePreview?(
      <Image src={imagePreview} width={170} height={100}/>):<div>
          <p>No Image Upload</p>
          </div>}
          <div>
              <button onClick={()=>setShowModal(true)} className='btn-secondary'>
                  <FaImage/>Set Image
              </button>
          </div>
          <Modal show={showModal} onClose={()=>setShowModal(false)}>
             <ImageUpload evtId={evt.id}
             token={token}
             imageUploaded={imageUploaded}/>
          </Modal>
    </Layout>
  )
}

export async function getServerSideProps({ params:{id},req}) {
  const {token}=parseCookie(req)
 const res= await fetch(`${API_URL}/events/${id}`)
 const evt=await res.json()

  return {
    props: {
     evt,
     token
    },
  }
}
