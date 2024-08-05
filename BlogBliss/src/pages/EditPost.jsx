import React,{useState,useEffect} from 'react'
import { PostForm } from '../components'
import services from '../lib/config'
import { useParams,useNavigate } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()
   
    useEffect(()=>{
        if(slug){
            services.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }
        else navigate('/')
    },[slug,navigate])

  return post ? (
    <div className='py-8'>
     <div className='w-full max-w-7xl mx-auto px-4'>
        <PostForm post={post}/>
     </div>
    </div>
  ) : null 
}

export default EditPost