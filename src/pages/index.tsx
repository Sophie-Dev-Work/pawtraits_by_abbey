import Head from 'next/head'
import { Inter } from 'next/font/google'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Logo from '../public/pawtrait_logo.jpg'
import Abbey from '../components/public/abbey_draw.jpg'


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



            <div className="grid grid-cols-2 gap-0 text-center content-center">
              <div className='pl-20 pr-0 m-0'>
                <div className='flex justify-center'>
                  <Image className='mx-auto mb-0' src={Logo} alt="logo" style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <h1 className='text-center font-poppins text-5xl pb-10 text-[#917349] '>Personalised Pet Portraits</h1>
                  <p className='text-center font-poppins text-2xl font-light'>
                    Hi, my name is Abbey! I am a passionate artist who loves animals and capturing their unique personalities in my paintings. I create customised pet portraits that are realistic, expressive and full of life. Whether you want to immortalise your furry friend, surprise someone with a thoughtful gift, or decorate your home with a beautiful piece of art, I can help you turn your vision into reality. All I need is a clear photo of your pet and some details about their character and preferences. I can accommodate any size and style you want and can paint on canvas or paper. Contact me today and let’s create a stunning portrait of your beloved pet!
                  </p>
                </div>
              </div>
              
              <div className='content-center'>
                <Image src={Abbey} alt="eric" className='w-[600px] content-center mt-20 mb-10 mx-auto rounded-2xl shadow-md border-double border-[6px] border-[#917349]' />
              </div>


            </div>

          </div>


        </main>


      <Footer/>



      </div>
    </>
  )
}