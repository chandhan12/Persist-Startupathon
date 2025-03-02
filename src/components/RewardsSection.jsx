import React from 'react'
import RewardsCard from './RewardsCard'

const perks=[
  {
    id:1,
    logo:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png",
    text:"Competitive Salary"
  },
  {
    id:2,
    log:"https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png",
    text:"≥ $10,000 USD in Company Funding"
  }
]

const RewardsSection = () => {
  return (
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
  )
}

export default RewardsSection
