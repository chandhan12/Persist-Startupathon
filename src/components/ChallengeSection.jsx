import React, { useEffect, useState } from 'react'
import ChallengeCard from './ChallengeCard'
import axios from 'axios'

const ChallengeSection = () => {
    const [challenges,setChallenges]=useState([])

   useEffect(()=>{
   const fetchChallenges=async ()=>{
    try {
        const res=await axios.get("https://persiststartupathon-admin.onrender.com/api/admin/challenges")
        const allChallenges=res.data.challenges
       

        console.log(res.data.challenges)
        const filteredChallenges=allChallenges.filter((eachChallenge)=>{
            return(
                eachChallenge.status ==true
            )
        })
        

        setChallenges(filteredChallenges)

    } catch (error) {
        console.log(error.message)
    }
   }
    fetchChallenges()
   },[])
console.log(challenges)

  return (
    <div id="challenge">
        <h2 className='text-3xl text-center md:text-5xl m-1 p-1 font-semibold text-white'>Ongoing startupathon challenges</h2>
        <p className='text-slate-300 text-lg font-normal text-center text-wrap'>Start your challenge-tackle live challenges,earn equity,and lead the future</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 m-4 lg:ml-16 items-center justify-center  '>

        
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
