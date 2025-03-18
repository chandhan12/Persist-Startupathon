import React, { useEffect, useState } from 'react'
import linkedIcon from '../assets/linkedIcon.png'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import tubeIcon from '../assets/tubeIcon.png'
import tubeIcon2 from '../assets/tubeIcon2.svg'
import parallelogram2 from "../assets/parallelogram2.png";
import Icosahedron from "../assets/Icosahedron.png";
import NeonCard4 from '../components/Ui/NeonCard4'
import NeonCard5 from '../components/Ui/NeonCard5'

const FounderPage = () => {

    const languages=['Chinese (Mandarin)','English']
    const regionExpertise=['China', 'Canada','East Asia', 'South East Asia']
    const techExpertise=['Artificial Intelligence (AI)','Machine Learning (ML)', 'Blockchain (Distributed Ledger Technology)','Cryptocurrency']
    const businessExpertise=['Business Development','Content Marketing','Community','Cryptocurrency','Creators']



    const [founder, setFounder] = useState(null);

    const {founderId} =useParams()
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate=useNavigate()

    const handleNav=()=>{
        navigate('/fellowship')
    }

    useEffect(() => {
        
        const fetchFounder = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/api/admin/founder/${founderId}`);
                setFounder(response.data.item);
            } catch (err) {
                if (!axios.isCancel(err)) {
                    setError('Failed to fetch data');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchFounder();
        
    }, [founderId]);

    if (loading) return <div className='flex justify-center items-center w-full h-screen'><p className="text-center text-white">Loading...</p></div>;
    if (error) return <div className='flex justify-center items-center w-full h-screen'><p className="text-center text-red-500">{error}</p></div>;


    console.log(founder)

  return (
    <div className='flex flex-col  mt-20 relative'>
       
        <div className='absolute right-0 top-0'>
            <img src={tubeIcon} className='' alt="" />
        </div>
    <div className='mx-10'>
    <h2 className="text-[#FFFFFF] text-2xl md:text-3xl font-sans font-semibold mx-1 md:m-2">
      Learn from {founder.name} :{" "}
      <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text font-bold">
        Insights & Expertise
      </span>{" "}
      
      <br />
    </h2>
    <div className='flex gap-4 text-[#FFFFFF] w-[1030px] h-[227px] m-4 '>
        <div className='h-[227px] w-[227px] rounded-2xl border border-purple-600'>
           <img src={founder.profilePic} className='h-full w-full rounded-2xl' alt="" />
        </div>
        <div className='flex flex-col text-[#FFFFFF] h-[221px] w-[771px]'>
            <h2 className='m-1 text-[32px] font-semibold'>{founder.name}</h2>
            <p className='m-1 text-[16px]'>{founder.position}</p>
            <div className='h-[32px] w-[95px] bg-gradient-to-b from-[#3C3C3C] to-[#1C1C1C] rounded-lg flex items-center gap-1 justify-center cursor-pointer'><img src={linkedIcon} className='h-[17px] w-[17px]' alt="" />LinkedIn</div>
            <p className='m-1 text-[18px] '>Co-founded Messon Network, boostrapped to reach 2/3 of Akaimal's bandwidth resources
                in 3 months,currently valued at $100m+; made 10x return from cryptocurrency investment in one year etc.
            </p>
        </div>
    </div>
    <div className='w-[1298px] h-[873px]  m-4 text-[#FFFFFF] '>
    <div class="w-full border-t border-neutral-600"></div>

        <div className='flex justify-between ml-2 mr-8 my-4 '>
            <div className='text-[18px] m-1'>
                Bio:
            </div>
            <div className='w-[1082px] h-[108px]'>  
                <p className='m-1 text-[18px]'>
                {founder.bio} {founder.highlights}
                </p>
            </div>
        </div>
        <div className='flex justify-between ml-2 mr-8 my-6'>
            <div className='m-1 text-[18px]'>
                Company:
            </div>
            <div className='w-[1082px] '>  
                <p className='m-1 text-[18px]'>
                Mask
                </p>
            </div>
        </div>
        <div class="w-full border-t  border-neutral-600"></div>
        <div className='h-[550px] w-[1298px] mt-10 flex flex-col gap-4 '>
        <div className='flex flex-col gap-3'>
                <p className='text-[15px]'>Primary location</p>
                <div className='flex gap-2'>
                      
                                <div className='bg-[#1e1d22] h-auto w-auto text-[16px] p-2 border border-neutral-600 text-[#FFFFFF] rounded-lg'>
                                    {founder.location}
                            </div>
                        
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-[15px]'>Languages Spoken</p>
                <div className='flex gap-2'>
                       {
                        languages.map((item)=>{
                            return(
                                <div className='bg-[#1e1d22] text-[16px] h-auto w-auto p-2 border border-neutral-600 text-[#FFFFFF] rounded-lg'>
                                {item}
                            </div>
                            )
                        })
                       }
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-[15px]'>Regions of Expertise</p>
                <div className='flex gap-2'>
                       {
                        regionExpertise.map((item)=>{
                            return(
                                <div className='bg-[#1e1d22] text-[16px] h-auto w-auto p-2 border border-neutral-600 text-[#FFFFFF] rounded-lg'>
                                {item}
                            </div>
                            )
                        })
                       }
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-[15px]'>Areas of Emerging Tech Expertise</p>
                <div className='flex gap-2'>
                       {
                        techExpertise.map((item)=>{
                            return(
                                <div className='bg-[#1e1d22] text-[16px] h-auto w-auto p-2 border border-neutral-600 text-[#FFFFFF] rounded-lg'>
                                {item}
                            </div>
                            )
                        })
                       }
                </div>
                
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-[15px]'>Areas of Business Expertise</p>
                <div className='flex gap-2'>
                       {
                        businessExpertise.map((item)=>{
                            return(
                                <div className='bg-[#1e1d22] text-[16px] h-auto w-auto p-2 border border-neutral-600 text-[#FFFFFF] rounded-lg'>
                                {item}
                            </div>
                            )
                        })
                       }
                </div>
                
            </div>
        </div>

    </div>
     <div className='flex justify-center relative'>
        <img src={Icosahedron} alt="image" className="w-[161px] h-[161px] absolute -top-22 z-20" />
     <div className='h-[390px] w-[1200px] backdrop-brightness-[5] rounded-3xl flex flex-col items-center justify-center pt-4'
        style={
            { backgroundImage: `url(${parallelogram2})`, backgroundPosition: "center", backgroundSize: "cover", }
        }
        >
            <div className='h-[292px] w-[627px] flex flex-col items-center justify-center '>
                <h2 className='text-[#FFFFFF] text-4xl font-semibold text-center m-2'>Got an Idea of Your Own? Let's Make It Happen!</h2>
                <div className='flex justify-center items-center h-[72px] w-[587px]'>
                    <p className='text-center text-[#C8C6D3] text-[18px] mt-4 '>We are always on the lookout for visionary founders 
                        with groundbreaking startup ideas. If you’re ready to turn your vision into reality, 
                        apply below for our Fellowship Program and take the first step toward success.
                    </p>
                </div>
                <button onClick={handleNav} className='mt-8 cursor-pointer rounded-lg h-[44px] w-auto px-4 text-center text-md font-semibold bg-white text-[#805ED9]'>Accept the challenge! 🚀</button>
            </div>
    </div>
   
     </div>
    </div>
    <div className='absolute top-0 -left-3 -translate-y-40 -translate-x-25'>
           
           <NeonCard5/>
       </div>
       <div className='absolute top-0 right-8 -translate-y-20'>
           <NeonCard5/>
           
       </div>
       <div className='absolute top-0 right-8 '>
           <NeonCard4/>
       </div>
       <div className='bottom-[22%] right-8 absolute opacity-60'>
        <NeonCard4/>
       
       </div>
       <div className='bottom-[12%] right-8 absolute opacity-60'>
        
        <NeonCard5/>
       </div>
       <div className='bottom-[40%] left-0 absolute -translate-x-20 opacity-80'>
        
        <NeonCard5/>
       </div>
    </div>
  )
}

export default FounderPage
