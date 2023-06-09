import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from "next/image";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Eric_Painting from './public/eric_easle.jpg';
import Eric_Pic from './public/eric.jpg'
import Bertie_Pic from './public/bertie_painting.jpg';
import Bertie_Photo from './public/bertie_photo.jpg';
import Rico_Photo from './public/rico_pic.jpg';
import Rico_Painting from './public/rico_painting.jpg';



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


                <main className='bg-[#ede5dd] bg-cover'>
                    <div className='min-h-screen text-center '>

                        <h1 className='text-center font-poppins text-4xl  pb-3 pt-5 text-[#795e38] '>Gallery</h1>

                        <div className="grid md:grid-cols-2 xl:gap-0 gap-y-0 text-center content-center">

                            <div className="col-span-2">
                                <div className="relative flex py-5 items-center">
                                    <div className="flex-grow border-t border-[#795e38] "></div>
                                    <span className="flex-shrink mx-4 text-3xl text-[#795e38]">Eric</span>
                                    <div className="flex-grow border-t border-[#795e38]"></div>
                                </div>

                            </div>

                            <div className='flex justify-center lg:justify-end col-span-2 lg:col-span-1'>
                                <Image src={Eric_Pic} alt="eric" className='  w-[400px] md:w-[500px] lg:w-[500px] lg:h-[500px] content-center md:mt-5 mb-10 lg:mr-5 rounded-2xl shadow-md border-double border-[6px] border-[#795e38]' />
                            </div>

                            <div className='flex justify-center lg:justify-start col-span-2 lg:col-span-1'>
                                <Image src={Eric_Painting} alt="eric" className='w-[400px] md:w-[500px] lg:w-[500px] lg:h-[500px] content-center md:mt-5 mb-10 lg:ml-5 rounded-2xl shadow-md border-double border-[6px] border-[#795e38]' />
                            </div>

                            <div className="col-span-2">

                                <div className="container  px-6 mx-auto">


                                    <section className="mb-10 text-gray-800 text-center ">

                                        <div className="block rounded-lg shadow-lg bg-[#94847c]">
                                            <div className="flex flex-wrap items-center justify-center">
                                                <div className="grow-0 shrink-0 basis-auto w-full ">
                                                    <div className="px-6 py-12 md:px-12 text-center">
                                                        <p className="text-[#ede5dd] mb-2 text-2xl">

                                                            The painting was brilliant and looked exactly like my dog. The quality of the painting was fantastic. Great communication with the seller. Will be commissioning another pet portrait
                                                        </p>
                                                        <p className="text-[#ede5dd] mb-6 text-xl">

                                                            -  Jackie
                                                        </p>
                                                        <ul className="flex justify-center ">
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </section>


                                </div>

                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 xl:gap-0 gap-y-0 text-center content-center">

                            <div className="col-span-2">
                                <div className="relative flex py-5 items-center">
                                    <div className="flex-grow border-t border-[#795e38] "></div>
                                    <span className="flex-shrink mx-4 text-4xl text-[#795e38]">Bertie</span>
                                    <div className="flex-grow border-t border-[#795e38]"></div>
                                </div>

                            </div>

                            <div className='flex justify-center lg:justify-end col-span-2 lg:col-span-1'>
                                <Image src={Bertie_Photo} alt="eric" className='w-[400px] md:w-[500px] lg:w-[500px] lg:h-[500px] content-center md:mt-5 mb-10 lg:mr-5 rounded-2xl shadow-md border-double border-[6px] border-[#795e38]' />
                            </div>

                            <div className='flex justify-center lg:justify-start col-span-2 lg:col-span-1'>
                                <Image src={Bertie_Pic} alt="eric" className=' w-[400px] md:w-[500px] lg:w-[500px] lg:h-[500px] content-center md:mt-5 mb-10 lg:ml-5 rounded-2xl shadow-md border-double border-[6px] border-[#795e38]' />
                            </div>

                            <div className="col-span-2">

                                <div className="container  px-6 mx-auto">


                                    <section className="mb-10 text-gray-800 text-center ">

                                        <div className="block rounded-lg shadow-lg bg-[#94847c]">
                                            <div className="flex flex-wrap items-center justify-center">
                                                <div className="grow-0 shrink-0 basis-auto w-full ">
                                                    <div className="px-6 py-12 md:px-12 text-center">
                                                        <p className="text-[#ede5dd] mb-2 text-2xl">

                                                            The painting of my dog Bertie is amazing! She has even captured his crooked teeth. I couldn't be happier with the painting!
                                                        </p>
                                                        <p className="text-[#ede5dd] mb-6 text-xl">

                                                            -  Jamie
                                                        </p>
                                                        <ul className="flex justify-center ">
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </section>


                                </div>

                            </div>


                        </div>

                        <div className="grid md:grid-cols-2 xl:gap-0 gap-y-0 text-center content-center">

                            <div className="col-span-2">
                                <div className="relative flex py-5 items-center">
                                    <div className="flex-grow border-t border-[#795e38] "></div>
                                    <span className="flex-shrink mx-4 text-4xl text-[#795e38]">Rico</span>
                                    <div className="flex-grow border-t border-[#795e38]"></div>
                                </div>

                            </div>

                            <div className='flex justify-center lg:justify-end col-span-2 lg:col-span-1'>
                                <Image src={Rico_Photo} alt="eric" className=' w-[400px] md:w-[500px] lg:w-[500px] lg:h-[500px] content-center md:mt-5 mb-10 lg:mr-5 rounded-2xl shadow-md border-double border-[6px] border-[#795e38]' />
                            </div>

                            <div className='flex justify-center lg:justify-start col-span-2 lg:col-span-1'>
                                <Image src={Rico_Painting} alt="eric" className=' w-[400px] md:w-[500px] lg:w-[500px] lg:h-[500px] content-center md:mt-5 mb-10 lg:ml-5 rounded-2xl shadow-md border-double border-[6px] border-[#795e38]' />
                            </div>

                            <div className="col-span-2">

                                <div className="container  px-6 mx-auto">


                                    <section className="mb-10 text-gray-800 text-center ">

                                        <div className="block rounded-lg shadow-lg bg-[#94847c]">
                                            <div className="flex flex-wrap items-center justify-center">
                                                <div className="grow-0 shrink-0 basis-auto w-full ">
                                                    <div className="px-6 py-12 md:px-12 text-center">
                                                        <p className="text-[#ede5dd] mb-2 text-2xl">

                                                            Abbey did an amazing job of Rico, I'm so happy with the painting! I asked her to include his tail which wasn't in the original photo by sending her some additional pictures with the tail in - she did an amazing job and made it fit in to the portrait perfectly.
                                                        </p>
                                                        <p className="text-[#ede5dd] mb-6 text-xl">

                                                            -  Sophie
                                                        </p>
                                                        <ul className="flex justify-center ">
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                            <li>
                                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-8 text-[#ffff00]"
                                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                                    <path fill="currentColor"
                                                                        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                                                    </path>
                                                                </svg>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </section>


                                </div>

                                <div className="relative flex py-5 items-center">
                                    <div className="flex-grow border-t border-[#795e38] "></div>
                                </div>

                            </div>










                        </div>



                    </div>


                </main>


                <Footer />



            </div>
        </>
    )
}