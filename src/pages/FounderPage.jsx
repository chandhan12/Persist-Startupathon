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
                const response = await axios.get(`https://persiststartupathon-admin.onrender.com/api/admin/founder/${founderId}`);
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
    <div className='mx-10 '>
    <h2
    style={{fontFamily:"Bricolage Grotesque"}}
    className="text-[#FFFFFF] text-[36px] font-[700] leading-[125%] mx-1 mt-5 mb-12">
      Learn from {founder.name} :{" "}
      <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text font-bold">
        Insights & Expertise
      </span>{" "}
      
      <br />
    </h2>
    <div className='flex gap-[32px] text-[#FFFFFF] w-[1030px] h-[227px] m-4 '>
        <div className='h-[227px] w-[227px] rounded-2xl border border-purple-600'>
           <img src={founder.profilePic} className='h-full w-full rounded-2xl' alt="" />
        </div>
        <div className='flex flex-col gap-[14px] text-[#FFFFFF] h-[221px] w-[771px]'>
            <h2
            style={{fontFamily:"Bricolage Grotesque"}}
            className=' text-[30px] font-[700] leading-[130%]'>{founder.name}</h2>
            <p
            style={{fontFamily:"Bricolage Grotesque"}}
            className=' text-[16px] font-[500] leading-[150%] '>{founder.position}</p>
            <div className='h-[32px] w-[95px] bg-gradient-to-b from-[#3C3C3C] to-[#1C1C1C] rounded-[4px] flex items-center gap-1 justify-center cursor-pointer'><img src={linkedIcon} className='h-[17px] w-[17px]' alt="" />LinkedIn</div>
            <p
            style={{fontFamily:"Inter"}}
            className=' text-[18px] font-[400] leading-[150%] '>Co-founded Messon Network, boostrapped to reach 2/3 of Akaimal's bandwidth resources
                in 3 months,currently valued at $100m+; made 10x return from cryptocurrency investment in one year etc.
            </p>
        </div>
    </div>
    <div className='w-[1298px] h-[873px]  m-4 text-[#FFFFFF] '>
    <div class="w-full border-t border-neutral-600"></div>

        <div className='flex justify-between ml-2 mr-8 my-4 '>
            <div
            style={{fontFamily:"Bricolage Grotesque"}}
            className='text-[24px] font-[600] leading-[150%] m-1 text-[#F6F6F6]'>
                Bio:
            </div>
            <div className='w-[1082px] h-[108px]'>  
                <p
                style={{fontFamily:"Inter"}}
                className='m-1 text-[18px] font-[500] leading-[150%]'>
                {founder.bio} {founder.highlights}
                </p>
            </div>
        </div>
        <div className='flex justify-between ml-2 mr-8 my-6'>
            <div style={{fontFamily:"Bricolage Grotesque"}}
            className='text-[24px] font-[600] leading-[150%] m-1 text-[#F6F6F6]'>
                Company:
            </div>
            <div className='w-[1082px] '>  
                <p style={{fontFamily:"Inter"}}
                className='m-1 text-[18px] text-[#EDEDED] font-[500] leading-[150%]'>
                Mask
                </p>
            </div>
        </div>
        <div class="w-full border-t  border-neutral-600"></div>
        <div className='h-[550px] w-[1298px] mt-10 flex flex-col gap-[25px] '>
        <div className='flex flex-col gap-4'>
                <p
                style={{fontFamily:"Bricolage Grotesque"}}
                className='text-[20px] font-[500] leading-[150%]'>Primary location</p>
                <div className='flex gap-2'>
                      
                                <div
                                style={{fontFamily:"Inter"}}
                                className='bg-white h-auto w-au font-[400] leading-[150%]to text-[16px] px-4 py-1 border border-neutral-600 text-black rounded-full '>
                                    {founder.location}
                            </div>
                        
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p
                style={{fontFamily:"Bricolage Grotesque"}}
                className='text-[20px] font-[500] leading-[150%]'>Languages Spoken</p>
                <div className='flex gap-2'>
                       {
                        languages.map((item)=>{
                            return(
                                <div
                                style={{fontFamily:"Inter"}}
                                className='bg-white text-[16px] font-[400] leading-[150%] h-auto w-auto px-4 py-1 border border-neutral-600 text-black rounded-full '>
                                {item}
                            </div>
                            )
                        })
                       }
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p
                style={{fontFamily:"Bricolage Grotesque"}}
                className='text-[20px] font-[500] leading-[150%]'>Regions of Expertise</p>
                <div className='flex gap-2'>
                       {
                        regionExpertise.map((item)=>{
                            return(
                                <div
                                style={{fontFamily:"Inter"}}
                                className='bg-white text-[16px] font-[400] leading-[150%] h-auto w-auto px-4 py-1 border border-neutral-600 text-black rounded-full '>
                                {item}
                            </div>
                            )
                        })
                       }
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <p
                style={{fontFamily:"Bricolage Grotesque"}}
                className='text-[20px] font-[500] leading-[150%]'>Areas of Emerging Tech Expertise</p>
                <div className='flex gap-2'>
                       {
                        techExpertise.map((item)=>{
                            return(
                                <div
                                style={{fontFamily:"Inter"}}
                                className='bg-white text-[16px] font-[400] leading-[150%] h-auto w-auto px-4 py-1 border border-neutral-600 text-black rounded-full '>
                                {item}
                            </div>
                            )
                        })
                       }
                </div>
                
            </div>
            <div className='flex flex-col gap-4'>
                <p
                style={{fontFamily:"Bricolage Grotesque"}}
                className='text-[20px] font-[500] leading-[150%]'>Areas of Business Expertise</p>
                <div className='flex gap-2'>
                       {
                        businessExpertise.map((item)=>{
                            return(
                                <div
                                style={{fontFamily:"Inter"}}
                                className='bg-white text-[16px] font-[400] leading-[150%] h-auto w-auto px-4 py-1 border border-neutral-600 text-black rounded-full '>
                                {item}
                            </div>
                            )
                        })
                       }
                </div>
                
            </div>
        </div>

    </div>
     <div className='flex justify-center relative mt-20'>
        <img src={Icosahedron} alt="image" className="w-[161px] h-[161px] absolute -top-22 z-20" />
     <div className='h-[390px] w-[1200px] backdrop-brightness-[5] rounded-3xl flex flex-col items-center justify-center pt-4'
        style={
            { backgroundImage: `url(${parallelogram2})`, backgroundPosition: "center", backgroundSize: "cover", }
        }
        >
            <div className='h-[292px] w-[627px] flex flex-col items-center justify-center '>
                <h2
                style={{fontFamily:"Bricolage Grotesque"}}
                className='text-[#FFFFFF] text-[40px] font-[700] leading-[120%] text-center m-2'>Got an Idea of Your Own? Let's Make It Happen!</h2>
                <div className='flex justify-center items-center h-[72px] w-[587px]'>
                    <p
                    style={{fontFamily:"Inter"}}
                    className='text-center text-[#C8C6D3] text-[16px] font-[400] leading-[24px] mt-4 '>We are always on the lookout for visionary founders 
                        with groundbreaking startup ideas. If you’re ready to turn your vision into reality, 
                        apply below for our Fellowship Program and take the first step toward success.
                    </p>
                </div>
                <a target='_blank' href="https://t.me/systemicpersistbot?start=dewdrop_2686031"><button
                        style={{fontFamily:"Inter"}}
                        className='mt-8 cursor-pointer rounded-[7.28px] h-[36px] w-[177px] p-[9.95px] text-center text-[12px] font-[600] leading-[150%] bg-white '><div className='flex gap-2'><p className='bg-gradient-to-b from-[#AE98E7] to-[#805ED9] text-transparent bg-clip-text'>Accept the challenge! </p> 🚀</div> </button></a>
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
