import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import parallelogram2 from "../assets/parallelogram2.png";
import Icosahedron from "../assets/Icosahedron.png";
import Wavebgnew from '../assets/Wavebgnew.png';
import Variant1 from '../assets/Variant1.png';
import NeonCard5 from '../components/Ui/NeonCard5';
import NeonCard4 from '../components/Ui/NeonCard4';

const CompletedPage = () => {
    const { completedId } = useParams();
    const [completed, setCompleted] = useState(null);


    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const fetchCompleted = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://persiststartupathon-admin.onrender.com/api/admin/completed/${completedId}`);
                setCompleted(response.data.item);
            } catch (err) {
                if (!axios.isCancel(err)) {
                    setError('Failed to fetch data');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchCompleted();
        
    }, [completedId]);

    if (loading) return <div className='h-screen w-full flex justify-center items-center'><p className="text-center text-white">Loading...</p></div>;
    if (error) return <div className='h-screen w-full flex justify-center items-center'><p className="text-center text-red-500">{error}</p></div>;

    return (
        <div className="flex relative flex-col items-center h-auto w-full mt-15">
            <div className="h-[363px] flex justify-between w-[1301px]  my-20">
                <div className="h-[357px] w-[685px] gap-[20px]   flex flex-col">
                    <h2
                    style={{fontFamily:"Bricolage Grotesque"}}
                    className="text-[48px] text-[#805ED9] font-[700] leading-[125%] ">{completed?.project}</h2>
                    <p
                    style={{fontFamily:"Bricolage Grotesque"}}
                    className="text-[24px] font-[500] leading-[140%] text-[#EDEDED] ">{completed?.profile}</p>
                    <p
                    style={{fontFamily:"Inter"}}
                    className="text-[18px] font-[400] leading-[125%] text-[#EDEDED] ">{completed?.description}</p>
                    <p
                    style={{fontFamily:"Inter"}}
                    className="text-[20px] font-[700] leading-[140%] text-white ">
                        Offered Initial funding - <span className="text-[#00D400]">${completed?.funding}</span>
                    </p>
                    <p 
                    style={{fontFamily:"Bricolage Grotesque"}}
                    className="text-[25px] font-[600] leading-[100%] text-white ">
                        Eager to make your dream job a reality with us?
                    </p>
                    <button
                    style={{fontFamily:"Inter"}}
                    className='text-white h-[44px] w-[208px] text-[16px] font-[500] leading-[150%] cursor-pointer rounded-[12px] bg-gradient-to-b  from-[#D1AFFF] to-[#906CFF]'>Discover startupathons</button>
                </div>
                <div className="h-[363px] w-[567px] rounded-xl">
                    <iframe
                        src="https://www.loom.com/embed/29dfeb1876844f68807154cda529af63?t=12"
                        frameBorder="0"
                        allowFullScreen
                        className="w-full h-full rounded-xl"
                    ></iframe>
                </div>
            </div>

    
                
            <motion.div
                
                className="top-[44%] right-0 overflow-hidden absolute"
            >
                
                <img src={Wavebgnew} className="h-[350px] w-[350px] z-50" alt="" />
                
            </motion.div>

            <div className='flex justify-center items-center mt-10'>
            <div className=' h-[400px] w-[1200px] rounded-xl top-0  relative '>
       <div className='h-full w-full flex flex-col items-center justify-center  bg-neutral-800 backdrop-brightness-150 rounded-xl'
       style={{
                   backgroundImage: `url(${parallelogram2})`,
                   backgroundSize: "cover",
                   backgroundPosition: "center",
                 }}
       >
       <div className='p-1 flex flex-col items-center justify-center'>
       <h2
       style={{fontFamily:"Bricolage Grotesque"}}
       className='text-[40px] font-[700] mt-10 text-white leading-[120%]'>Got an Idea of Your Own? Let's</h2>
        <h2
        style={{fontFamily:"Bricolage Grotesque"}}
        className='text-[40px] font-[700] text-white leading-[120%]'>Make It Happen!</h2>
        <div className="w-[587px] h-[72px] m-3">
          <p
          style={{fontFamily:"Inter"}}
          className="text-[#EDEDED] text-[16px] font-[400] leading-[24px] text-center">
            We are always on the lookout for visionary founders with groundbreaking startup ideas.
            If you're ready to turn your vision into reality, apply below for our Fellowship 
            program and take the first step towards success.
          </p>
        </div>
                <Link to={'/fellowship'} ><button  className="bg-white mt-8 w-[213px] h-[44px] text-purple-600 rounded-xl font-semibold cursor-pointer">Apply for Fellowship 🚀</button></Link>
       </div>
     
       </div>
      </div>
            </div>
            <img 
                    src={Icosahedron} 
                    alt="image" 
                    className="w-[161px] h-[161px] absolute top-120 z-20"
                  />

            <div className="absolute top-0 right-8">
                <NeonCard5 />
            </div>
            <div className="absolute flex flex-col rotate-[180deg] top-[10%] left-0">
                <NeonCard4 />
            </div>
            <div className="absolute flex flex-col rotate-[180deg] top-[25%] left-0">
                <NeonCard5 />
            </div>
            <div className="absolute flex flex-col bottom-[-10%] right-8">
                <NeonCard5 />
            </div>
        </div>
    );
};

export default CompletedPage;
