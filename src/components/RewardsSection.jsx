import React, { useEffect, useState } from 'react'
import RewardsCard from './RewardsCard'
import { leftArrowIcon, rightArrowIcon } from '../icons';
import {motion} from 'framer-motion'
import variant3 from '../assets/variant3.png'
import NeonCard2 from './Ui/NeonCard2';
import NeonCard3 from './Ui/NeonCard3';
import tube from '../assets/tube.png'
import SlideUpTextWrapper from '../componentPrac/SlideUpText';

const perks=[
  {
    id:1,
    logo:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png",
    text:"Competitive Salary"
  },
  {
    id:2,
    logo:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png",
    text:"≥ $10,000 USD in Company Funding"
  },
  {
    id:3,
    logo:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png",
    text:"≥ 10% Founder Equity"
  },
  {
    id:4,
    logo:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png",
    text:"≥ $100,000 USD AWS Credits"
  },
  {
    id:5,
    logo:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png",
    text:"$1,000 OpenAI Credits"
  },
  {
    id:6,
    logo:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png",
    text:"$120,000 USD IBM Cloud Credits"

  },
  {
    id:7,
    logo:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png",
    text:"$2,500 Twilio Credits",

  },
  {
    id:8,
    logo:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png",
    text:"$2,000 Airtable Credits"
    }
]

const RewardsSection = () => {
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth <= 768);
  const [currentId,setCurrentId]=useState(1)


  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const filteredPerks=perks.filter((eachPerk)=>{
    return (
      eachPerk.id === currentId
    )

  })

  const rightPerk =()=>{
    if(currentId >=1 && currentId <perks.length){
      setCurrentId((prev)=>prev+1)
    }
    else{
      setCurrentId(1)
    }
  }
  const leftPerk =()=>{
    if(currentId<=perks.length && currentId>1){
      setCurrentId((prev)=>prev-1)
    }
    else{
      setCurrentId(8)
    }
  }
  
  return (
    <>
    {mobileScreen ? (
      <div className='flex justify-center items-center'>
        {filteredPerks.map((perk, index) => (
          <div key={index} className="flex justify-center items-center">
            <button className='text-white m-2 p-2 rounded-lg cursor-pointer' onClick={leftPerk}>{leftArrowIcon}</button>
            <div className="h-52 w-52 rounded-md shadow-[2px_2px_2px_#432d7b] hover:bg-[#1e1426] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center p-2 bg-[#150722]">
              <img className="h-16 w-14 mt-4" src={perk.logo} alt="" />
              <p className="text-white m-1 font-semibold text-center text-lg">{perk.text}</p>
            </div>
            <button onClick={rightPerk} className='text-white m-2  p-2 rounded-lg cursor-pointer'>{rightArrowIcon}</button>
          </div>
        ))}
      </div>
    ) : (
      <div className='mt-30'>
     <motion.div
        
        className="absolute -left-[340px] -translate-y-20 "
      >
        <img src={tube} alt="Floating Top Element" className="h-[456px] w-[629px] -left-[284px] opacity-[50%]" />
      </motion.div>

     
   <div className='flex flex-col relative justify-center items-center '>
 <div className='h-[136px] m-2'>
 <SlideUpTextWrapper/>
 </div>
    <div className="md:w-2/3 w-auto m-2">
      <p className="text-white text-center m-2 text-sm md:text-lg">
        Unlock unparlled opportunities and exculsive benefits designed to acclerate your startup journey. From funding and <br />
        equity to premium cold credits-your path to success starts here!
      </p>
    </div>
<div className='h-[545px] w-[1126px]  flex flex-col items-center'>
<div className='absolute right-4 bottom-60 '>
        <NeonCard2 />
      </div>
      <div className='absolute right-4 bottom-20  '>
        <NeonCard3 />
      </div>
<motion.div 

className='flex flex-wrap justify-center  items-center gap-4 m-4'>
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png" text="Competitive Salary" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png" text="≥ $10,000 USD in Company Funding" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png" text="≥ 10% Founder Equity" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png" text="≥ $100,000 USD AWS Credits" />

</motion.div>
<motion.div

className='flex flex-wrap justify-center  items-center gap-4 m-4'>
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png" text="$1,000 OpenAI Credits" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png" text="$120,000 USD IBM Cloud Credits" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png" text="$2,500 Twilio Credits" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png" text="$2,000 Airtable Credits" />

</motion.div>
<div className='absolute left-1 bottom-0 rotate-180 translate-y-20 '>
        <NeonCard2 />
      </div>
</div>
</div>
</div>
 )}
 </>
);
}
export default RewardsSection


/*

initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -50 }}
transition={{ duration: 0.8, ease: "easeInOut" }}
viewport={{ once: false, amount: 0.2 }}
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -50 }}
transition={{ duration: 0.8, ease: "easeInOut" }}
viewport={{ once: false, amount: 0.2 }}

*/