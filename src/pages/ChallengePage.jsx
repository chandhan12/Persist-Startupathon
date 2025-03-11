import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import parallelogram2 from "../assets/parallelogram2.png";
import BotIcon from '../assets/BotIcon.png'
import { minusIcon, plusIcon, sendIcon } from '../icons';
import { Minus, PlusIcon } from 'lucide-react';
import VideoCarousel from '../components/HiringSection2';

const ChallengePage = () => {

    const {challengeId}=useParams()
    const [shrink,setShrink]=useState(false)



    const handleShrink=()=>{
        setShrink(!shrink)
    }
    console.log(challengeId)
  return (
    <div className='mt-20 text-white h-auto w-full flex flex-col'>
        <div className='flex flex-col'>
      <div className='flex  gap-4 justify-center'>
        <div className='h-[1166px] w-[643px] bg-slate-300'>
            <div className='h-[485px] w-[643px] bg-pink-200'>

            </div>
            <div className='h-[461px] w-[643px] bg-orange-200'>

            </div>
        </div>
        <div className={`${ shrink ? 'h-[400px]' : 'h-[865px]' } transition-all duration-300 w-[597px] flex justify-center bg-[#1d1b22] rounded-xl  `}>
            <div className='h-[819px] w-[550px] flex flex-col gap-12 mt-8 '>
                <div className='rounded-3xl'>
                <div className='h-[196px] w-[550px] backdrop-brightness-[3] rounded-3xl flex flex-col items-center pt-4'
                style={
                    { backgroundImage: `url(${parallelogram2})`, backgroundPosition: "center", backgroundSize: "cover", }
                }
                >
                    <div className='h-[154px] w-[508px] flex flex-col items-center justify-center '>
                        <div className='flex justify-center items-center'>
                            <p className='text-center text-white text-md '>Take the challenge to transform your life submit your work via our telegram bot,
                                use bot to ask questions, receive feedback and earn a certificate for participating!
                            </p>
                        </div>
                        <button className='mt-8 cursor-pointer rounded-lg h-[36px] w-auto px-4 text-center text-md font-semibold bg-white text-[#805ED9]'>Accept the challenge! 🚀</button>
                    </div>
                </div>
                </div>
                <div className={`${ shrink ? 'h-[90px]  ' : 'h-[572px]     ' } overflow-hidden relative transition-all duration-300 w-[550px] relative   shadow shadow-[#AE98E7]  border border-purple-600 rounded-2xl`}>
                        <div className={`${shrink ? 'rounded-2xl' : 'rounded-t-2xl'} transition-all duration-300  flex justify-between items-center bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] top-0 w-[550px] h-[90px]`}>
                            <div className={`flex justify-center mx-3 items-center gap-2 p-2`}>
                                <div>
                                    <img src={BotIcon} className='h-[32px] w-[32px]' alt="" />
                                </div>
                                <div className='p-1'>
                                    <h2 className='text-xl font-semibold text-[#FCFCFC]'>MaitreyaAI Assistant</h2>
                                    <p className='text-xs text-[#FCFCFC]'>Challenge Guide And Support</p>
                                </div>
                            </div>
                            <div className='mx-3 p-2'>
                               <button className='cursor-pointer transition-all duration-200' onClick={handleShrink}>{shrink ? <PlusIcon className='h-8 w-8'/> : <Minus  className='h-8 w-8'/>} </button>
                            </div>
                        </div>

                      <div>
                      <div>
                       <div className='h-auto  flex gap-1 items-end mx-4 mt-5'>
                            <img src={BotIcon} className='h-[32px] w-[32px]' alt="" />
                            <div className='min-w-auto max-w-[270px] bg-gradient-to-b from-[#3C3C3C] to-[#1C1C1C] rounded-tl-3xl rounded-tr-xl rounded-br-xl p-3 border border-[#805ED9] '>
                                <p className='text-white '>Hi! 👋 I'm Here To Help You With InstaCreatorBot! Ask Me Anything About 
                                    This Challenge, Video Requirements, Or Any Other Questions You Have.
                                </p>
                            </div>
                        </div>
                       </div>
                        <div className='flex justify-end'>
                        <div className='h-auto   flex gap-1 items-end mx-4 mt-12'>
                           
                            <div className='min-w-[170px] flex items-center justify-center max-w-[249px] bg-[#312c40] rounded-t-2xl rounded-bl-2xl p-3 border border-[#805ED9] '>
                                <p className='text-white '>Hi! 👋 I'm Here To Help You With InstaCreatorBot! 
                                </p>
                            </div>
                            <img src={BotIcon} className='h-[32px] w-[32px]' alt="" />
                        </div>
                        {/**/ }
                        </div>
                        
                      </div>


                        <div className={ `${shrink ? 'hidden bottom-10' : 'bottom-0 absolute block'} transition-all duration-300 w-[493px] h-[44px] rounded-4xl border border-neutral-500 flex items-center justify-between p-2  bg-gradient-to-r from-[#3C3C3C] to-[#1C1C1C]   my-5 mx-5`}>
                            <input type="text" className={` h-full outline-none w-[90%]  m-2`} />
                           <button  className='m-2 cursor-ponter text-[#9778E3]'> {sendIcon}</button>
                        </div>
                </div>
            </div>
        </div>

       
      </div>
     <div className='flex justify-center '>
     <div className='bg-[#DBCDFF] w-[550px] rounded-3xl'>
      <div className='h-[196px] w-[550px] backdrop-brightness-[3]  rounded-3xl flex flex-col items-center pt-4'
                style={
                    { backgroundImage: `url(${parallelogram2})`, backgroundPosition: "center", backgroundSize: "cover", }
                }
                >
                    <div className='h-[154px] w-[508px] flex flex-col items-center justify-center '>
                        <div className='flex justify-center items-center'>
                            <p className='text-center text-black text-md '>Take the challenge to transform your life submit your work via our telegram bot,
                                use bot to ask questions, receive feedback and earn a certificate for participating!
                            </p>
                        </div>
                        <button className='mt-8 cursor-pointer rounded-lg h-[36px] w-auto px-4 text-center text-md font-semibold bg-white text-[#805ED9]'>Accept the challenge! 🚀</button>
                    </div>
                </div>
                </div>
     </div>
      <VideoCarousel/>
      </div>
    </div>
  )
}

export default ChallengePage
