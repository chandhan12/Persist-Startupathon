import React, { useEffect, useState } from 'react'
import CompletersCard from './CompletersCard'
import axios from 'axios';

const CompletersSection = () => {

    const [completers,setCompleters]=useState([])
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)


    useEffect(()=>{
      
        let isMounted=true

        const fetchCompleters=async ()=>{
            try {
            const response=await axios.get(`http://localhost:3000/api/admin/completers?page=${page}&limit=6`)
            if(isMounted){
                setCompleters((prev)=>
                    page==1 ? response.data.completers : [...prev, ...response.data.completers]
                )
            }
            setHasMore(response.data.hasMore)

        }
       catch (error) {
        console.log(error.message)
        
       }
    }
       fetchCompleters()

       return ()=>{
        isMounted=false
       }
    },[page])
    console.log(completers)
   
  return (
    <div id="completers">
      <h2 className='text-3xl text-center md:text-5xl m-1 p-1 font-semibold text-white'>Completed Startupathon Challenges</h2>
      <p className='text-slate-300 text-lg font-normal text-center text-wrap'>
        People like you have cracked Startupathon challenges and are now leading thriving startups.
        </p>
        <div className='flex flex-wrap gap-2 m-4 lg:ml-16 items-center justify-center transition-all duration-150   '>
       
        {
            completers.map((completer)=>{
                return (
                <CompletersCard key={completer._id}
                project={completer.project} 
                image={completer.image} profile={completer.profile}
                position={completer.position}
                description={completer.description}
                profilePicture={completer.profilePicture}
                funding={completer.funding}
                />
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

export default CompletersSection
