import React, { useEffect, useState } from 'react'
import FounderCard from './FounderCard'
import axios from 'axios';

const FoundersSection = (props) => {
     const [founders,setFounders]=useState([])
        const [page, setPage] = useState(1);
        const [hasMore, setHasMore] = useState(true)

        useEffect(()=>{
      
            let isMounted=true
    
            const fetchFounders=async ()=>{
                try {
                const response=await axios.get(`http://localhost:3000/api/admin/founders?page=${page}&limit=4`)
                if(isMounted){
                    setFounders((prev)=>
                        page==1 ? response.data.founders : [...prev, ...response.data.founders]
                    )
                }
                setHasMore(response.data.hasMore)
    
            }
           catch (error) {
            console.log(error.message)
            
           }
        }
           fetchFounders()
    
           return ()=>{
            isMounted=false
           }
        },[page])
        console.log(founders)



  return (
    <div>
      <h2 className='text-2xl text-center text-wrap  md:text-3xl m-1 p-1 font-semibold text-white'>
        By getting accepted you unlock access to our elite founder network.</h2>
        <p className='text-slate-300 text-xl font-normal text-center text-wrap'>
        Join Persist and gain access to our 400+ millionaire and billionaire startup network.
        </p>
        <div className='flex flex-wrap gap-2 m-4 lg:ml-12 '>
        
        {
            founders.map((founder)=>{
                return (
                    <FounderCard name={founder.name} profilePic={founder.profilePic} position={founder.position} bio={founder.bio} highlights={founder.highlights} />
                )

            })
        }
         
        </div>
        {hasMore && (
        <div
          onClick={() => setPage((prev) => prev + 1)}
          className="hover:text-purple-800 text-white text-center text-lg cursor-pointer"
        >
          Show More
        </div>
      )}  
    </div>
  )
}

export default FoundersSection
