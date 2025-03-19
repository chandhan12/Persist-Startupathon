import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import parallelogram2 from "../assets/parallelogram2.png";
import BotIcon from '../assets/BotIcon.png'
import { minusIcon, plusIcon, sendIcon } from '../icons';
import { Crosshair, CrossIcon, Minus, MoveLeft, MoveRight, PlusIcon, ShieldCloseIcon, WormIcon, X } from 'lucide-react';
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
import { Tweet } from 'react-tweet'


const ChallengePage = () => {

    const {challengeId}=useParams()
    const [shrink,setShrink]=useState(false)
    const [activebtn,setActiveBtn]=useState(1)
    const [resourcesPopUp,setResourcesPopUp]=useState(false)
    const [activeResource,setActiveResource]=useState(1)
    const [rewardsPopUp,setRewardsPopUp]=useState(false)

  const [challenge, setChallenge] = useState(null);

  const helpingResourses=[

    {
        id:1,
        title:"Tips and Tricks",
        tweets:["1872505563881591201","1880853934883197275","1884425690378035574","1887280412113686839","1888033701658800251"]
    },
    {
        id:2,
        title:"Marketing",
        tweets:["1884984102241136720","1882849009334702232"]
    },
    {
        id:3,
        title:"Founders",
        tweets:["1882810031617491187","1882852404661752110","1882410457790869725"]
    },
    {
        id:4,
        title:"Users Onboarding",
        tweets:["1883329858434187458","1888588802425340376","1883916041253982464"]
    },
    {
        id:5,
        title:"Designers",
        tweets:["1888604519505736067","1885666931166036006","1885696957210841582","1883568285960016231"]
    },
    {
        id:6,
        title:"Editors",
        tweets:["1882142756652597650","1885362774882030009","1885418893486727533","1885728699124740400","1886836061378372064"]
    },
    {
        id:7,
        title:"Developers",
        tweets:["1883747352022040938","1886859253648122181","1886192184808149383","1888212432767635734"]
    },
    {
        id:8,
        title:"SEO",
        tweets:["1886704772545138716","1886448017248559162"]
    },
    {
        id:9,
        title:"Running Ads",
        tweets:["1882855024998645946"]
    },
    {
        id:10,
        title:"Cold Outreach",
        tweets:["1882951041370460539"]
    }
  ]

const allPerks=[
    {
        id:1,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67783b758585d719d2f3adec_dgwr5pdcAMpqdohq3890ZwTKgA3BjMIPrdyToddSYO0.png",
        title:"1 Password",
        description:"A $100 USD credit for newly created 1Password Teams and Business accounts.",
        price:"100",
        link:"https://start.1password.com/sign-up/plan?c=BLCKCHAIN-XOBD8ZE1"
    },
    {
        id:2,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/677829b02546012478e1fc4b_gd375gfNx6kiDQC9fKLaIMfjC0ydHmNIT1-vYQ6on5s.png",
        title:"Accountalent",
        description:"50% reduction of fees on your first year. Standard fee is $1,950. BFF startups pay $975.",
        price:"975",
        link:"https://accountalent.com/"
    },
    {
        id:3,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67783ee34c3068c2e2e320c1_OAPwfV4u86oi-5IPAXW93blk5SdpjNbA1UvQOn-TDKQ.png",
        title:"Affilae",
        description:"25% discount (50€ instead of 69€ or 60$ instead of 79$) and 30 days trial instead of 20 days.",
        price:"20",
        link:"https://affilae.com/en/influencers-affiliates-tracking-software/"
    },
    {
        id:4,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/677824ad6975e137a7d3d216_CGox93sLnd6jx9Bedcl8lv75r4smEXd7eQw8kFdBzfg.png",
        title:"Airtable",
        description:"$2,000 Airtable credit and access to Airtable for Startups (which includes exclusive office hours, content and events)",
        price:"2000",
        link:"https://airtable.com/blockchainff"
    },
    {
        id:5,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/6778222a7247082b0283a605_Ly-H1IemuPuAXKqYpl5TqU2b3BdbT8dcWI5f6g4SUU4.jpg",
        title:"Alchemy",
        description:"We’ve partnered with the BFF team to extend exclusive benefits to portfolio companies, including usage credits, priority support, mentorship, co-marketing and educational resources. Our goal is to make it as easy as possible to build in web3 from ideation to production. Therefore, Alchemy is offering up to $2500 in credits towards an Enterprise plan within your first 12 months.",
        price:"2,500",
        link:"https://form.typeform.com/to/Ll9GdIEa"
    },
    {
        id:6,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/6777d32923edde18fae04a48_mpOJ2D8oI3U4Opu3KVAGDwwI8NJ57bf-AMDT66ybRU4.png",
        title:"Alibaba Cloud",
        description:"Alibaba Cloud offers BFF's portfolio companies up to $20k worth of credits. Depending on the stage and location of the company, Alibaba is wiling to increase the number of credits to $50k. Additional benefits are: 1. Technical support from Alibaba consultants 2. Annual membership for Alibaba Cloud Academy 3. Alibaba Coud Professional Certifications 4. Growth acceleration: Potential funding.",
        price:"50,000",
        link:"https://sg.alibabacloud.com/"
    },
    {
        id:7,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/6777ae9e167bcd9f74c4acb8_aws-perks.png",
        title:"Amazon AWS",
        description:"1. $25,000 in AWS Activate Credits valid for 2 years or $100,000 in AWS Activate Credits valid for 1 year 2. 1 year of AWS Business Support (up to $10,000). 3. 80 credits for self-paced labs",
        price:"100,000",
        link:"https://aws.amazon.com/"
    },
    {
        id:8,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/6778436ee7e8365be107986c_HpLgblKqL9TVAcwV9Qy_YJFaW2-HZY8eWwkcsUDWHXI.png",
        title:"Apollo",
        description:"20% off on Apollo.io annual plans, for new customers only (this discount is provided on top of the standard 20% discount for annual plans)",
        price:"20",
        link:"https://www.apollo.io/"
    },
    {
        id:9,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67783f8fd4b53d00b8ca702b__zk6Wiz-KknA0yfgoaEJdk31gn67dUb-o-wfVeVvI6A.png",
        title:"Arival",
        description:"BFF Portfolio companies will be eligible to the following: Freemium account in the US & Singapore for the first 3 months",
        price:"1",
        link:"https://arival.com/"
    },
    {
        id:10,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67782bd2c220e8835f70e1b8_Fw5UUL7UG8Cb0EDYsNwcXAko2Y8DabhM1yzT6wa5kRg.png",
        title:"Aspire",
        description:"-Up to USD$250k credit -Pay for their SaaS subscriptions -51 days credit -No personal guarantee required -Waiver of application fee for BFF portfolio companies",
        price:"500",
        link:"https://aspireapp.com/"
    },
    {
        id:11,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/6777b28578a69e0f300bc89e_1mTyN0cs7vW_f-BlOHtczyQ9IoKJlNprFWZyuC5JkP0.png",
        title:"Blockchain Game Alliance",
        description:"The Start Up membership tier include : - Discord & Telegram Exclusive Access - Working group Access - Member Exclusive Newsletters - Participation in OMA3 projects - Invites to all events organized by the BGA - Company exclusive offers and discounts - Ask for participation in online activities organized by the BGA (New Members Presentation, Demo Day, Online Panels) - Company News In Weekly Newsletter",
        price:"500",
        link:"https://aspireapp.com/"
    },
    {
        id:12,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67783f36455408b6d65eb5c3_czU9LWRelST17Ljd2ToU9IIXVZFbqIHpL9wA0Ubbj6Y.png",
        title:"BrandPush",
        description:"Get $15 off the total price with the coupon code BLOCKCHAIN",
        price:"15",
        link:"https://www.brandpush.co/order/"
    },
    {
        id:13,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/677829f0c17177b845096b7d_9O-g9brUt7I0lkqp81HWffNFVbwlZ-571-lJ8w8f7LQ.png",
        title:"BreezyHR",
        description:"Companies will receive a 25% discount on any plan subscription for the life of the account.",
        price:"747",
        link:"https://app.breezy.hr/signup?scta=home-header"
    },
    {
        id:14,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/677843ae323c341c6b9fe445_5J60Z8phbO_OoMiOdEj_gLtnchX7Jda_G35YL4hZ9zE.png",
        title:"Brex",
        description:"60K points (can be used for cash or airmiles or billboards etc), $5K AWS credits, $2.5K OpenAI credits for ONLY 1K spend. Highest interest rate at 4.9% and the founders can keep the funds -fully liquid- at that interest rate,",
        price:"500",
        link:"https://app.breezy.hr/signup?scta=home-header"
    },
    {
        id:15,
        image:"https://cdn.prod.website-files.com/623eb8c6eb9b328644ade032/67781cb3695b14b0476d0527_pr1xzU1W80q4XsKobgZoAO3J3XyvlVoljqkvyDX5JTM.png",
        title:"BVNK",
        description:"Start-up projects, referred by Blockchain Founders Fund, signing up for BVNK Business Account will be eligible for following savings: Account setup fee waived (EUR 2,500) 50% off of the monthly account fee (EUR 500 /month) for the first year (total savings EUR 3,000)",
        price:"3,200",
        link:"https://www.bvnk.com/"
    }
    
]
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const fetchChallenge = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://persiststartupathon-admin.onrender.com/api/admin/challenge/${challengeId}`);
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

    if (loading) return <div className='h-screen w-full flex justify-center items-center'><p className="text-center text-white">Loading...</p></div>;
    if (error) return <div className='h-screen w-full flex justify-center items-center'><p className="text-center text-red-500">{error}</p></div>;



    const loomVidUrl=challenge.challengeVideo.replace("share","embed")

   
    const handleShrink=()=>{
        setShrink(!shrink)
    }

    const handleResource=(id)=>{
        setResourcesPopUp(true)
        setActiveResource(id)
    }
    console.log(activeResource)

    const activeResourceDetails=helpingResourses.find((item)=>{
        return (
            item.id===activeResource
        )
    })
    console.log(activeResourceDetails)
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
        <div className='h-[1166px] w-[643px]  flex flex-col gap-[36px] '>
            <div className='h-[485px] w-[643px] gap-[24px] flex flex-col '>
                
                   <div className='w-[642px] h-[191px] flex flex-col gap-[12px]'>
                   <div className='w-[642px] h-[158px] flex flex-col gap-[12px]'>
                   <div className='flex flex-col  gap-[24px] h-[126px] w-[642px]'>
                   <h2
                    style={{fontFamily:"Bricolage Grotesque"}}
                    className='bg-gradient-to-r  from-[#AE98E7] text-[45px] font-[700] leading-[125%] to-[#805ED9] text-transparent bg-clip-text '>{challenge.title}</h2>
                <p 
                style={{fontFamily:"Inter"}}
                className=' text-[14px] font-[500] leading-[100%]'>{challenge.description}</p>
                 </div>
                 <div className='w-[642px] h-[20px]'>
                <p
                style={{fontFamily:"Inter"}}
                className='text-white  text-[14px] font-[700] leading-[140%]'>Initial Funding Offered-<span className='text-[#00D400]'>${challenge.funding} + $2,500</span></p>
                </div>
                   </div>
               <div className='flex gap-[10px] h-[21px] w-[500px] items-center'>
                <img src={TimeIcon} className='h-[20px] w-[20px]' alt="timeicon" />
               <p
               style={{fontFamily:"Bricolage Grotesque"}}
               className='text-white text-[14px] font-[400] leading-[150%]'>Deadline apporaching! Apply by <span className='font-[700]'>{challenge.deadline}</span></p>
                   </div>
               </div>
               <div className='h-[41px] w-[592px] p-[1px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] rounded-[8px]'>
               <div className=' bg-[#312c40] h-full w-full rounded-[8px] p-[12px] gap-[10px] flex items-center  '>
                <p 
                style={{fontFamily:"Bricolage Grotesque"}}
                className='text-white  text-[12px] leading-[150%] font-[500] '>Seeing your amazing submissions, we're increasing the funding by $2,500📈-keep innovating!</p>
               </div>
               </div>

               <div className='h-[205px] w-[642px] flex flex-col gap-[16px]'>
               <div className='w-[642px] h-[60px]'>
               <h2
               style={{fontFamily:"Bricolage Grotesque"}}
               className="text-[#ECECEC] text-[20px] font-[700] leading-[140%] ">
                      The first to complete the challenge {" "}
                      <span
                      style={{fontFamily:"Bricolage Grotesque"}}
                      className=" text-[20px] font-[700] leading-[140%] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text ">
                        Wins extraordinary rewards
                      </span>{" "}
                        unlocking success.
                      <br />
                    </h2>
               </div>
                   <div  className='flex gap-4  h-[129px] w-[642px] '>
                   <div className='h-[127px] w-[127px] p-[1px] rounded-[12px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF]'>
                   <div className='h-full flex flex-col bg-[#0A0A0A] justify-center items-center w-full p-[12px]   rounded-[12px] gap-[10px]'>
                        <img src={SalaryIcon} className='h-[36px] w-[36px]' alt="" />
                        <p style={{fontFamily:"Inter"}}
                        className='text-center text-[12px] font-[600] leading-[150%]'>competitive salary</p>
                    </div>
                   </div>
                    <div className='h-[127px] w-[127px] p-[1px] rounded-[12px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF]'>
                    <div className='h-full flex flex-col bg-[#0A0A0A] justify-center items-center w-full  p-[8px] rounded-[12px] gap-[10px]'>
                        <img src={OfferIcon} className='h-[36px] w-[36px]' alt="" />
                        <p style={{fontFamily:"Inter"}}
                        className='text-center text-[12px] font-[600] leading-[150%]'>{`>$10,000 USD in company funding`}</p>
                    </div>
                    </div>
                    <div className='h-[127px] w-[127px] p-[1px] rounded-[12px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF]'>
                    <div className='h-full flex flex-col bg-[#0A0A0A] justify-center items-center w-full p-[12px]   rounded-[12px] gap-[10px]'>
                        <img src={EquityIcon} className='h-[36px] w-[36px]' alt="" />
                        <p style={{fontFamily:"Inter"}}
                        className='text-center text-[12px] font-[600] leading-[150%]'>{`>10% founder equity`}</p>
                    </div>
                    </div>
                    <div onClick={()=>setRewardsPopUp(true)} className='h-[127px] w-[127px] p-[1px] rounded-[12px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF]'>
                    <div className='h-full flex flex-col bg-[#0A0A0A] justify-center items-center w-full p-[12px] cursor-pointer rounded-[12px] gap-[10px]'>
                        <img src={MoreIcon} className='h-[36px] w-[36px]' alt="" />
                        <p
                        style={{fontFamily:"Inter"}}
                        className='text-center text-[12px] font-[600] leading-[150%]'>and 120+ more</p>
                    </div>
                    </div>
                   </div>
               </div>
                
                </div>
            <div className='h-[461px] w-[643px] flex flex-col gap-[32px]  mt-5 '>
                <div className='rounded-[12px] h-[53px] w-[643px]'>
                    <button
                    onClick={()=>setActiveBtn(1)}
                    style={{fontFamily:"Inter"}}
                    className={` ${activebtn === 1 ? "bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] " :"bg-[#312c40]"} w-[321px] h-[53px] rounded-l-[5.6px] cursor-pointer transition-all duration-300  text-white  text-[16px] font-[500] leading-[150%] `}>Challenge Details</button>
                    <button
                    onClick={()=>setActiveBtn(2)}
                    style={{fontFamily:"Inter"}}
                    className={`${activebtn === 2 ? "bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] " :"bg-[#312c40]"} w-[321px] h-[53px] rounded-r-[5.6px] cursor-pointer transition-all duration-300  text-white  text-[16px] font-[500] leading-[150%] `}>Helping Resources</button>
                </div>
                {
                    activebtn === 1 ? (
                        <div className="h-[383px] w-[643px] p-[2px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] rounded-[24px] shadow-lg shadow-[#805ED9]/40">
                <div className="h-full w-full rounded-[24px] bg-[#0A0A0A] overflow-hidden shadow-[0px_5px_10px_rgba(128,94,217,0.4)]">
                  <iframe
                    src={loomVidUrl}
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full rounded-[24px]"
                  ></iframe>
                </div>
                </div>
                    ) :(
                        <div className='text-white grid grid-cols-2 gap-4'>
                            {
                                helpingResourses.map((item,index)=>{
                                    return(
                                        <div className='bg-gradient-to-b group from-[#D1AFFF] to-[#906CFF] p-[1px] rounded-[12px]'>
                                            <button onClick={()=>{handleResource(item.id)}}  className='p-5 text-white bg-[#0A0A0A] group-hover:bg-[#ECE5FD]  h-full w-full transition-all duration-300 cursor-pointer  rounded-[12px]'>
                                            <p
                                            style={{fontFamily:"Bricolage Grotesque"}}
                                            className='text-[18px] font-[500] leading-[150%] group-hover:text-[#323232] text-white'>{item.title}</p>
                                            <p
                                            style={{fontFamily:'Inter'}}
                                            className='text-[13px] text-[#EDEDED] font-[500] group-hover:text-[#323232]/70 leading-[125%] m-1'>Click to view resources</p>
                                        </button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }

            </div>
           {
            activebtn === 1 ? (
                <div className='h-[112px] w-[643px]'>
                <p
                style={{fontFamily:"Bricolage Grotesque"}}
                className="text-white text-[20px] font-[700] leading-[140%] ">
                          You're{" "}
                          <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF]  text-transparent bg-clip-text font-bold">
                            one assigniment 
                          </span>{" "}
                            away from becoming a{' '}
                            <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF]  text-transparent bg-clip-text font-bold">
                             paid, salaried owner
                          </span>{" "}
                          in a startup with Persist Ventures. Watch the video, figure out how
                          to crack the{" "}  
                          <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF]  text-transparent bg-clip-text font-bold">
                            challenge any way
                          </span>{" "}
                          you can, and{" "} 
                          <span className="bg-gradient-to-b from-[#D1AFFF] to-[#906CFF]  text-transparent bg-clip-text font-bold">
                            change your life.
                          </span>{" "}
                          <br />
                        </p>
                </div>
            ) : " "
           }

      
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
      

            
      {
            /*helping resourses popup */

       
        resourcesPopUp && <div>
        <div className="w-screen h-screen bg-black
      opacity-60 fixed left-0 top-0 justify-center flex">

        </div>
      
                 <div className="w-screen h-screen  
                       fixed left-0 top-0 justify-center flex ">
                          <div className="flex justify-center flex-col ">
                          <div className='h-136 w-[900px]  mt-20 p-[1px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] rounded-xl'>
        <div className="bg-[#1d1b22] absolute p-6  rounded-xl h-135 w-[899px] overflow-auto  md:overflow-y-scroll no-scrollbar   transition-all duration-300">
       <div className='flex justify-between ml-5 mr-2 my-2'>
        <h2
        style={{fontFamily:"Bricolage Grotesque"}}
        className='text-[20px] font-[700] leading-[140%]'>{activeResourceDetails.title} Resources</h2>
       <button onClick={()=>setResourcesPopUp(false)}  > <X size={24} className='text-[20px] font-[700] leading-[140%] hover:text-[#906CFF] transition-all duration-100 cursor-pointer' /></button>
       </div>
       <div className='flex justify-center'>
      
           <div className='flex flex-col gap-5'>
           {
                 <div className='dark   w-[500px]'>
                    {
                activeResourceDetails.tweets.map((item)=>{
                    return (
                        <Tweet id={item}  />
                    )
                })
            }
                 </div>
            }
            
           
           </div>
       </div>
             </div>
        </div>

             
          </div>
          </div>
          </div> 
       

        }
        {
            /*more rewards popup */

       
            rewardsPopUp && <div>
        <div className="w-screen h-screen bg-black
      opacity-60 fixed left-0 top-0 justify-center flex">

        </div>
      
                 <div className="w-screen h-screen  
                       fixed left-0 top-0 justify-center flex ">
                          <div className="flex justify-center flex-col ">
                          <div className='h-136 w-[1200px] mx-5 mt-20 p-[1px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] rounded-xl'>
        <div className="bg-[#1d1b22] absolute p-6  rounded-xl h-135 w-[1199px] overflow-auto  md:overflow-y-scroll no-scrollbar   transition-all duration-300">
        <div className='flex justify-between ml-5 mr-2 my-2'>
        <h2
        style={{fontFamily:"Bricolage Grotesque"}}
        className='text-[20px] font-[700] leading-[140%]'>All Available Perks</h2>
       <button onClick={()=>setRewardsPopUp(false)}  > <X size={24} className='text-[20px] font-[700] leading-[140%] hover:text-[#906CFF] transition-all duration-100 cursor-pointer' /></button>
       </div>
       <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
       {
        allPerks.map((perk,index)=>{
            return(
                <div className='bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] rounded-[12px] h-[280px]  p-[1px]'>
                <div className='bg-[#312d3c] relative  rounded-[12px] h-full w-full'>
                    <div className='flex flex-col p-6 gap-[20px] '>
                        <div className='flex gap-4 items-center '>
                            <div >
                                <img src={perk.image} className='h-16 w-16 rounded-[5px]' alt={perk.title} />
                               
                            </div>
                            <h2
                            style={{fontFamily:"Bricolage Grotesque"}}
                            className='text-white text-[20px] font-[700] leading-[140%]'>{perk.title}</h2>
                        </div>
                        <div>
                            <p
                            style={{fontFamily:"Inter"}}
                            className='text-white text-[15px] font-[400] leading-[125%] line-clamp-4'>{perk.description}</p>
                        </div>
                        <div className='absolute bottom-4 flex justify-between w-5/6'>
                            <h2
                            style={{fontFamily:"Bricolage Grotesque"}}
                            className=' text-[20px] font-[700] leading-[140%] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] text-transparent bg-clip-text'>$ {perk.price}</h2>
                            <button className='text-white bg-[#9275E0]/25  hover:bg-[#9275E0]/50 transition-all duration-300 p-1 px-2 rounded-[5px] text-center'><a target='_blank' href={perk.link} >Learn More</a></button>
                        </div>
                    </div>
                </div>
    
            </div>
            )
        })
       }
        

       </div>
             </div>
        </div>

             
          </div>
          </div>
          </div> 
       

        }
    </div>
  )
}

export default ChallengePage


//bg-[#312c40]

/**<div>
              <div className="w-screen h-screen bg-slate-500 
            opacity-60 fixed left-0 top-0 justify-center flex">
    
              </div>
            
            <div className="w-screen h-screen  
             fixed left-0 top-0 justify-center flex ">
                <div className="flex justify-center flex-col ">
                <span className="bg-white rounded-lg shadow-lg opacity-100 p-6 w-[400px]">
 
  <div className="flex justify-end">
    <div onClick={onClose} className="cursor-pointer text-red-500 hover:text-red-700 transition">
      {crossIcon}
    </div>
  </div>

  
  <div className="space-y-4">
    <input
      type="text"
      ref={nameRef}
      placeholder="Name"
      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <div className="flex flex-col gap-3">
      <input
        type="text"
        ref={positionRef}
        placeholder="Position"
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        ref={locationRef}
        placeholder="Location"
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        ref={bioRef}
        placeholder="Bio"
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        placeholder="Highlights"
        ref={highlightsRef}
        className="border border-gray-300 p-2 rounded h-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <p className="font-medium text-gray-600">Profile Pic:</p>
    <input
      type="file"
      className="w-full border p-2 rounded bg-amber-200 cursor-pointer"
      onChange={handlePicFile}
    />
  </div>

 
  <button
    onClick={handleSubmit}
    className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
  >
    ADD FOUNDER
  </button>
  {
    loading && <p className='text-center text-xl m-4 text-slate-800 font-semibold'>Loading ...</p>
  }
</span>

                   
                </div>
                </div>
                </div> 
                
                
                
                
                <div className="fixed mt-20 inset-0 flex justify-center items-center opacity-100 transition-all  duration-300 animate-fadeIn">
        <div className='h-136 w-136 p-[1px] bg-gradient-to-b from-[#D1AFFF] to-[#906CFF] rounded-xl'>
        <div className="bg-[#1d1b22] absolute p-6  rounded-xl h-135 w-135 overflow-auto  md:overflow-y-scroll no-scrollbar   transition-all duration-300">
        <p>hey hi welcome</p>
        <button onClick={()=>setResourcesPopUp(false)} className='text-red-500'>close</button>
        <p>{activeResourceDetails.id}</p>
        <p>{activeResourceDetails.title}</p>
        <p>{activeResourceDetails.tweets[0]}</p>
        
        <div className='light h-56 w-56'>
            
        <Tweet id={`${activeResourceDetails.tweets[0]}`}  />
        </div>
             </div>
        </div>
        </div>*/