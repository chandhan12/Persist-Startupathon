import React, { useEffect, useState } from 'react'
import RewardsCard from './RewardsCard'
import { leftArrowIcon, rightArrowIcon } from '../icons';

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
   <div className=' items-center'>
  <h2 className='text-2xl text-center md:text-3xl m-1 p-1 font-semibold text-white'>Startupathon Success Comes with Extraordinary Rewards</h2>
<div className='flex flex-wrap justify-center  items-center gap-4 m-4'>
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png" text="Competitive Salary" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png" text="≥ $10,000 USD in Company Funding" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png" text="≥ 10% Founder Equity" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png" text="≥ $100,000 USD AWS Credits" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png" text="$1,000 OpenAI Credits" />
</div>
<div className='flex flex-wrap justify-center  items-center gap-4 m-4'>
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png" text="$120,000 USD IBM Cloud Credits" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png" text="$2,500 Twilio Credits" />
<RewardsCard logo="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png" text="$2,000 Airtable Credits" />

</div>
</div>
 )}
 </>
);
}
export default RewardsSection
