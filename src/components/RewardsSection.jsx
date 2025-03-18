import React, { useEffect, useState } from 'react';
import RewardsCard from './RewardsCard';
import { motion } from 'framer-motion';
import NeonCard2 from './Ui/NeonCard2';
import tube from '../assets/tube.png';

const perks = [
  { id: 1, logo: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb0_icons8-salary-100.png", text: "Competitive Salary" },
  { id: 2, logo: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56e32a2b11cb90771_icons8-funding-100.png", text: "≥ $10,000 USD in Company Funding" },
  { id: 3, logo: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a417e_icons8-equity-100.png", text: "≥ 10% Founder Equity" },
  { id: 4, logo: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae2d9fa700f0bce8284f3_aws.png", text: "≥ $100,000 USD AWS Credits" },
  { id: 5, logo: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56f2bdcaefd17dfb7_icons8-chat-gpt-100.png", text: "$1,000 OpenAI Credits" },
  { id: 6, logo: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae3f61195ced8cfc850c8_ibm.png", text: "$120,000 USD IBM Cloud Credits" },
  { id: 7, logo: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f508ad153ee0fc9169_icons8-twilio-is-a-cloud-communications-platform-as-a-service-company-100.png", text: "$2,500 Twilio Credits" },
  { id: 8, logo: "https://cdn.prod.website-files.com/623ae64112adcf772da9687e/676ae0f56499a033884a4146_icons8-airtable-100.png", text: "$2,000 Airtable Credits" }
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.3,
      ease: "easeOut"
    }
  })
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.20,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

const RewardsSection = () => {
  return (
    <div className='mt-30 relative'>
      <motion.div className="absolute -left-[290px] -translate-y-20 opacity-[50%]">
        <img src={tube} alt="Floating Top Element" className="h-[380px] w-[550px] opacity-[50%]" />
      </motion.div>

      <div className='flex flex-col relative justify-center items-center'>
        <div className='h-[204px] w-[934px] gap-[10px] flex flex-col'>
          <motion.h2
          style={{fontFamily: "Bricolage Grotesque"}}
            className='leading-[125%] font-[700] text-[48px] font-[Bricolage Grotesque] text-white text-center'
            custom={0} variants={fadeUpVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true }}>
            Startupathon <span className='bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text'>Success</span> Comes with
          </motion.h2>

          <motion.h2
          style={{fontFamily: "Bricolage Grotesque"}}
            className='leading-[125%] font-[700] text-[48px] font-[Bricolage Grotesque] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text text-center'
            custom={1} variants={fadeUpVariants} initial="hidden" whileInView="visible"
            viewport={{ once: true }}>
            Extraordinary Rewards
          </motion.h2>

          <motion.div
          style={{fontFamily: "Inter"}}
          className='leading-[150%] text-[16px] font-[500]  w-[934px] h-[56px] text-center text-white'>
            <motion.p custom={2} variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Unlock unparalleled opportunities and exclusive benefits designed to accelerate your startup journey.
            </motion.p>
            <motion.p custom={3} variants={fadeUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              From funding and equity to premium cloud credits—your path to success starts here!
            </motion.p>
          </motion.div>
        </div>

        <div className='h-[545px] w-[1126px] flex flex-col items-center relative'>
          <div className='absolute right-4 bottom-60 opacity-[50%] '>
            <NeonCard2 />
          </div>

          <motion.div className='grid grid-cols-4 justify-center items-center gap-[34px]  m-4' initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
            {perks.map((reward, index) => (
              <motion.div key={reward.id} custom={index} variants={cardVariants}>
                <RewardsCard logo={reward.logo} text={reward.text} />
              </motion.div>
            ))}
          </motion.div>

          <div className='absolute left-1 bottom-0 rotate-180 translate-y-20 opacity-[50%] '>
            <NeonCard2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsSection;