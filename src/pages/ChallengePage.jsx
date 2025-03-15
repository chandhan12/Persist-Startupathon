import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import parallelogram2 from "../assets/parallelogram2.png";
import BotIcon from '../assets/BotIcon.png'
import { minusIcon, plusIcon, sendIcon } from '../icons';
import { Minus, PlusIcon } from 'lucide-react';
import VideoCarousel from '../components/HiringSection2';
import axios from 'axios';
import TimeIcon from '../assets/TimeIcon.png'
import SalaryIcon from '../assets/SalaryIcon.png'
import OfferIcon from '../assets/OfferIcon.png'
import EquityIcon from '../assets/EquityIcon.png'
import MoreIcon from '../assets/MoreIcon.png'
import NeonCard4 from '../components/Ui/NeonCard4';
import NeonCard5 from '../components/Ui/NeonCard5';
import VideoCarousel2 from '../components/VideoCarousel2';

const ChallengePage = () => {

    const {challengeId}=useParams()
    const [shrink,setShrink]=useState(false)

  const [challenge, setChallenge] = useState(null);


    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const fetchChallenge = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/api/admin/challenge/${challengeId}`);
                setChallenge(response.data.item);
            } catch (err) {
                if (!axios.isCancel(err)) {
                    setError('Failed to fetch data');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchChallenge();
        
    }, [challengeId]);

    if (loading) return <p className="text-center text-white">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;



    const loomVidUrl=challenge.challengeVideo.replace("share","embed")

    console.log(loomVidUrl)
    const handleShrink=()=>{
        setShrink(!shrink)
    }
    console.log(challengeId)
  return (
    <div className='mt-20 text-white h-auto w-full relative flex flex-col'>
        <div className='absolute top-0 left-0 -translate-x-50'>
            <NeonCard4/>
            <NeonCard5/>
        </div>
        <div className='absolute top-0 right-8 -translate-y-40 '>
            
            <NeonCard5/>
        </div>
        <div className='absolute top-[40%] right-8 '>
            
            <NeonCard5/>
        </div>
        <div className='absolute top-[55%] left-0 -translate-x-50'>
            <NeonCard4/>
            <NeonCard5/>
        </div>
        <div className='absolute bottom-[0%] right-8 '>
            
            <NeonCard5/>
        </div>
        <div className='flex flex-col'>
      <div className='flex  gap-8 justify-center mt-10'>
        <div className='h-[1166px] w-[643px] '>
            <div className='h-[485px] w-[643px] '>
                <div className='mx-2 '>
                <h2 className='bg-gradient-to-r m-2 from-purple-400 text-3xl to-purple-500 text-transparent bg-clip-text font-bold'>{challenge.title}</h2>
                <p className='m-2'>{challenge.description}</p>
                <p className='text-white m-2 font-semibold text-md'>Initial Funding Offered-<span className='text-[#00D400]'>${challenge.funding} + $2,500</span></p>
               <div className='flex gap-1 items-center'>
                <img src={TimeIcon} alt="" />
               <p className='text-white m-2 text-sm'>Deadline apporaching! Appky by <span className='font-bold'>{challenge.deadline}</span></p>
               </div>
               <div className='h-[50px] w-[640px] p-[20px] bg-[#312c40] rounded-lg flex items-center mt-8 border border-purple-600 '>
                <p className='text-white  text-[14px] font-[500] '>seeing your amazing submissions, we're increasing the funding by $2,500📈-keep innovating!</p>
               </div>

               <h2 className="text-white text-2xl md:text-xl m-2 font-sans font-bold  md:my-4">
                      The first to complete the challenge {" "}
                      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
                        Wins extraordinary rewards
                      </span>{" "}
                        unlocking success.
                      <br />
                    </h2>
                   <div  className='flex gap-3 m-2 '>
                    <div className='h-[127px] flex flex-col justify-center items-center w-[127px] cursor-pointer border border-purple-600 rounded-xl'>
                        <img src={SalaryIcon} className='h-[36px] w-[36px]' alt="" />
                        <p className='text-center text-sm'>competitive salary</p>
                    </div>
                    <div className='h-[127px] flex flex-col justify-center items-center w-[127px] cursor-pointer border border-purple-600 rounded-xl'>
                        <img src={OfferIcon} className='h-[36px] w-[36px]' alt="" />
                        <p className='text-center text-sm'>{`>$10,000 USD in company funding`}</p>
                    </div>
                    <div className='h-[127px] flex flex-col justify-center items-center w-[127px] cursor-pointer border border-purple-600 rounded-xl'>
                        <img src={EquityIcon} className='h-[36px] w-[36px]' alt="" />
                        <p className='text-center text-sm'>{`>10% founder equity`}</p>
                    </div>
                    <div className='h-[127px] flex flex-col justify-center items-center w-[127px] cursor-pointer border border-purple-600 rounded-xl'>
                        <img src={MoreIcon} className='h-[36px] w-[36px]' alt="" />
                        <p className='text-center text-sm'>and 120+ more</p>
                    </div>
                   </div>
                </div>
                </div>
            <div className='h-[461px] w-[643px] flex flex-col gap-3 '>
                <div className='rounded-xl'>
                    <button className='w-[321px] h-[53px] rounded-l-xl cursor-pointer  text-white bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] '>Challenge Details</button>
                    <button className='w-[321px] h-[53px] rounded-r-xl cursor-pointer  text-white bg-[#312c40] '>Helping Resources</button>
                </div>
                    <div className='h-[383px] w-[643px] border border-purple-600 rounded-xl'>
                    <iframe
                        src={loomVidUrl}
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full rounded-xl"
                    ></iframe>
                    </div>
            </div>
            <div className='h-[112px] w-[643px]'>
            <p className="text-white text-2xl md:text-xl font-sans font-semibold mx-1 md:m-1">
                      You're{" "}
                      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
                        one assigniment 
                      </span>{" "}
                        away from becoming a{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
                         paid,salaried owner
                      </span>{" "}
                      in a startup with Persist Ventures. Watch the video,figure out how
                      to crack the  
                      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
                        challenge any way
                      </span>{" "}
                      you can,and 
                      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-transparent bg-clip-text font-bold">
                        change your life.
                      </span>{" "}
                      <br />
                    </p>
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
                <div className={`${ shrink ? 'h-[90px]  ' : 'h-[572px]     ' } overflow-hidden relative transition-all duration-300 w-[550px]    shadow shadow-[#AE98E7]  border border-purple-600 rounded-2xl`}>
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
                                <p className='text-white '>Query 
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
     <div className='flex justify-center  '>
     <div className='bg-[#DBCDFF] w-auto rounded-3xl'>
      <div className='h-[277px] w-[971px] backdrop-brightness-[1]  rounded-3xl flex flex-col items-center justify-center pt-4'
                style={
                    { backgroundImage: `url(${parallelogram2})`, backgroundPosition: "center", backgroundSize: "cover", }
                }
                >
                    <div className='h-[154px] w-[508px] flex flex-col items-center justify-center '>
                        <div className='flex justify-center items-cente w-[849px] h-[64px]'>
                            <p className='text-center text-black text-xl font-semibold '>Speed up your development process with a 14-day free trail of cursor AI.Cursor lets
                                your code an MVP with little to no coding skills in a day
                            </p>
                        </div>
                        <div className='flex gap-4'>
                        <button className='mt-8 cursor-pointer rounded-xl h-[40px] w-[288px] px-4 text-center text-md font-semibold bg-[#F2EFFB] text-[#161616]'>14 days cursor trail</button>
                        <button className='mt-8 cursor-pointer rounded-xl h-[40px] w-[288px] px-4 text-center text-md font-semibold bg-gradient-to-b from-[#AE98E7] to-[#805ED9] text-white'>cursor tutorial</button>
                        </div>
                    </div>
                </div>
                </div>
     </div>
      <VideoCarousel2/>
      </div>
    </div>
  )
}

export default ChallengePage
