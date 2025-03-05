import React, { useEffect, useState } from 'react'
import ChallengeCard from './ChallengeCard'
import axios from 'axios'
import Hover3DCard from './ui/Hover3DCard'
import {motion} from 'framer-motion'

const ChallengeSection = () => {
    const [challenges,setChallenges]=useState([])
    const [mobileScreen, setMobileScreen] = useState(window.innerWidth <= 768);


     useEffect(() => {
        const handleResize = () => {
          setMobileScreen(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


   useEffect(()=>{
   const fetchChallenges=async ()=>{
    try {
        const res=await axios.get("https://persiststartupathon-admin.onrender.com/api/admin/challenges")
        const allChallenges=res.data.challenges
       

        
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


  return (
    <div id="challenge">
        <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
        >
        <h2 className='text-3xl text-center md:text-5xl m-1 p-1 font-semibold text-white'>Ongoing startupathon challenges</h2>
        <p className='text-slate-300 text-lg font-normal text-center text-wrap'>Start your challenge-tackle live challenges,earn equity,and lead the future</p>
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.6, delay: 0.3 }}
         viewport={{ once: false }}
        className='grid lg:grid-cols-3 gap-3 sm:grid-cols-2 m-4 lg:ml-16 items-center justify-center  '>

        
        {
            mobileScreen ? (
                challenges.map((challenge)=>{
                    return(
                        <ChallengeCard image={challenge.image}
                        key={challenge._id}
                            title={challenge.title}
                            funding={challenge.funding}
                            description={challenge.description}
                            deadline={challenge.deadline}
                        />
                    )
                })
            ) :(
                challenges.map((challenge)=>{
                    return(
                        <Hover3DCard image={challenge.image}
                        key={challenge._id}
                            title={challenge.title}
                            funding={challenge.funding}
                            description={challenge.description}
                            deadline={challenge.deadline}
                        />
                    )
                })
            )
            
        }
        </motion.div>
    </div>
  )
}

export default ChallengeSection
