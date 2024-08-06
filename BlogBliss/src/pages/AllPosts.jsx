import React, { useEffect, useState } from 'react'
import { PostCard } from '../components'
import services from '../lib/config'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        services.getPosts([]).then((Allposts) => {
            if (Allposts)
                setPosts(Allposts.documents)
        })
    }, [])
    return (
        <div className='w-full py-8'>
            <div className='w-full max-w-7xl mx-auto px-4'>
                <div className='flex flex-wrap'>
                    
                    {posts.map(() => (
                        <div key={posts.$id} className='p-2 w-1/4'>
                            <PostCard post={posts} />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllPosts