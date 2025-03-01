import React, { useEffect, useState } from 'react'
import ChallengeCard from './ChallengeCard'
import axios from 'axios'

const ChallengeSection = () => {
    const [challenges,setChallenges]=useState([])

   useEffect(()=>{
   const fetchChallenges=async ()=>{
    try {
        const res=await axios.get("http://localhost:3000/api/admin/challenges")
        setChallenges(res.data.challenges)
    } catch (error) {
        console.log(error.message)
    }
   }
    fetchChallenges()
   },[])

   console.log(challenges)
  return (
    <div>
        <h2 className='text-3xl text-center md:text-5xl m-1 p-1 font-semibold text-white'>Ongoing startupathon challenges</h2>
        <p className='text-slate-300 text-lg font-normal text-center text-wrap'>Start your challenge-tackle live challenges,earn equity,and lead the future</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 m-4 lg:ml-16 items-center justify-center  '>

        <ChallengeCard image="https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67b5c392403527acaf03a1fe_Untitled_design__97_-removebg-preview%20(1).png"
        title="VibeCoder"
        funding="10,000"
        description="An innovative 'Vibe coding' tool with features like drawing tools, Spotify integration, UI component library, smart code explanations, and built-in design assets"
        deadline="march 5, 2025!"
        />
        
        {
            challenges.map((challenge)=>{
                return(
                    <ChallengeCard image={challenge.image}
                        title={challenge.title}
                        funding={challenge.funding}
                        description={challenge.description}
                        deadline={challenge.deadline}
                    />
                )
            })
        }
        </div>
    </div>
  )
}

export default ChallengeSection
