import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from "next/image";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import txt from './public/foolzsm.png';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>

            <Navbar />
                <main className='bg-bg-9 bg-cover'>
                    <div className='min-h-screen text-center '>
                        <div className='flex justify-center py-8 '>
                            <Image src={txt} alt="logo" style={{ objectFit: "cover" }} />
                        </div>
                            <div className='text-center px-5 py-4 '>
                                <h3 className='font-josefin  text-center text-5xl text-white py-10'>
                                    <button type="button" className="text-white bg-cyan-500 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-3 mr-2 mb-2 0 focus:outline-none">Mint Soon Mfer</button>
                                </h3>

                            </div>
                    </div>
                </main>
            <Footer />
        </>
    )
}