import Head from 'next/head'
import { Inter } from 'next/font/google'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Team from '@/components/team';
import Logo from '../public/pawtrait_logo.jpg'
import Eric from '../components/public/eric_easle.jpg'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />


      <div className=''>

        <Head>

          <title>Pawtraits by Abbey</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>


        <main className='bg-[#ede4df] bg-cover'>
          <div className='min-h-screen text-center '>

            <div className='flex justify-center'>
              <Image src={Logo} alt="logo" style={{ objectFit: "cover" }} />
            </div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className='pl-20'>
                <h1 className='text-center font-anuphan text-4xl pb-10 text-[#776853]'>Personalised Pet Portraits</h1>
                <p className='text-center'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div>
              <Image src={Eric} alt="eric"/>
              </div>


            </div>



          </div>




          <div className='min-h-screen text-center '>
            <section>

              <div className=''>




                <div className='flex justify-center py-2 px-8'>
                  <div className='bg-main-bg text-center text-xl px-4 py-2 border-4 border-solid border-black rounded-xl border-spacing-5 max-w-6xl '>


                    <p className="font-mono text-center text-sm sm:text-base  md:text-l  lg:text-xl  text-white  py-2  ">
                      Welcome to The Foolz NFT project, we are a collection of the most foolish of fools. The Foolz is here to give you all the bots and tools
                      you need to maximise and strategise your trades to their full potential. Once a fool, always a fool. You are trading
                      fake internet money on fake internet things, you my friend, are a fool.
                    </p>
                  </div>
                </div>


                <div className='flex justify-center py-8 px-8'>
                  <div className='bg-main-bg text-center text-sm sm:text-base  md:text-l  lg:text-xl  px-4 py-2 border-4 border-solid border-black rounded-xl border-spacing-5 max-w-6xl '>

                    <p className="font-mono text-center text-white text-1xl py-2 ">
                      • NFT Wallet tracker
                      • Floor Bot
                      • NFT Mint Tracker
                      • NFT Sweep Tracker
                      • Shitcoin Tracker
                      • Token Swapper
                      • Token Launch Stream
                      • Merch
                      • Meet Ups
                      • Gaming Events
                      • Project Support
                    </p>
                  </div>
                </div>


                <Team />
              </div>
            </section>
          </div>

        </main>
        <Footer />
      </div>
    </>
  )
}