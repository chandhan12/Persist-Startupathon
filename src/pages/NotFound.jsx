// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import NeonCard4 from "../components/Ui/NeonCard4";
import NeonCard5 from "../components/Ui/NeonCard5";
import notfoundimg from '../assets/notfoundimg.png'

const NotFound = () => {
  return (
    <div className="flex flex-col relative items-center justify-center  mt-20 h-screen text-center">
       <div className='absolute top-0 left-0 opacity-[60%] -translate-x-50'>
            <NeonCard4/>
            <NeonCard5/>
        </div>
        <div className='absolute top-0 right-8 opacity-[60%] -translate-y-40 '>
            
            <NeonCard5/>
        </div>
        <div className='absolute top-[40%] right-8 opacity-[60%] '>
            
            <NeonCard5/>
        </div>
        <div className='absolute top-[55%] left-0 opacity-[60%] -translate-x-50'>
            <NeonCard4/>
            <NeonCard5/>
        </div>
        <div className='absolute bottom-[0%] right-8 opacity-[60%] '>
            
            <NeonCard5/>
        </div>

        <div className="h-[652px] w-[554px] flex flex-col gap-[29px]  ">
            <div className="w-[522px] h-[490px]">

                <img src={notfoundimg} className="h-full w-full" alt="" />
            </div>
            <div className="h-[60px] w-[554px]">
                <h2
                style={{fontFamily:"Bricolage Grotesque"}}
                className="text-[48px] font-[700] leading-[125%] text-center text-[#F2EFFB]">Page not found!</h2>
            </div>
           <Link to='/'>
           <button
            style={{fontFamily:"Inter"}}
            className="h-[44px] w-[155px] cursor-pointer rounded-[12px] gap-[10px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-white text-[16px] font-[500] leading-[150%] text-center">
                Go to homepage
            </button>
           </Link>

        </div>
      
    </div>
  );
};

export default NotFound;
