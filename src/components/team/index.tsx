import React, { Component } from "react";
import Image from "next/image";
import jpeg1 from '../public/flodd.png';
import jpeg2 from '../public/br33d.png';
import jpeg3 from '../public/mage.png';
import jpeg4 from '../public/m3chanic.png';
import jpeg5 from '../public/madrag.png';
import jpeg6 from '../public/doom.png';
import jpeg7 from '../public/hogan.png';
import jpeg8 from '../public/quamfy.png';
import jpeg9 from '../public/soph.png';
import jpeg10 from '../public/warnett.png';
import jpeg11 from '../public/emptty.png';
import jpeg12 from '../public/punk.png';

export default function Team() {
    return (
        <>

        <main className="">

            <section className="font-mono">
                <div className="py-2 px-4 mx-auto max-w-screen-xl text-center">
                    <div className="mx-auto mb-4 max-w-screen-sm ">
                        <h2 className="mb-4 text-xl sm:text-2xl  md:text-3xl  lg:text-4xl tracking-tight font-extrabold text-white">Meet the Team </h2>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
                        <div className="text-center text-white ">
                            <Image className="mx-auto mb-4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-4 border-solid border-white" src={jpeg1} alt="logo" style={{ objectFit: "cover" }} />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight">
                                <a className="text-white text-base md:text-xl  lg:text-2xl ">Flodd</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Founder</p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/G_Flodd" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section className="font-mono ">
                <div className="">
                    <div className="mx-auto mb-4 max-w-screen-sm "></div>
                    <div className="grid gap-8 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                        <div className="text-center text-white ">

                            <Image className="mx-auto mb-4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-4 border-solid border-white" src={jpeg3} alt="logo" style={{ objectFit: "cover" }} />                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <a className="text-white text-base md:text-xl  lg:text-2xl ">Pixelmage</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Dev </p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/pixelmagenft" className="text-[#00acee] dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>


                        <div className="text-center text-white ">

                            <Image className="mx-auto mb-4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-4 border-solid border-white" src={jpeg2} alt="logo" style={{ objectFit: "cover" }} />                                
                            <h3 className="mb-1 font-bold tracking-tight text-gray-900 dark:text-white">
                                <a className="text-white text-base md:text-xl  lg:text-2xl ">Br33d</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Dev </p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/0xbr33d" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="text-center text-white ">
                            <Image className="mx-auto mb-4 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border-4 border-solid border-white" src={jpeg4} alt="logo" style={{ objectFit: "cover" }} />                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <a className="text-white text-base md:text-xl  lg:text-2xl ">M3CHANIC</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Artist </p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/0xM3chanic" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>




            <section className="font-mono ">
                <div className="py-2 px-4 mx-auto max-w-screen-xl text-center ">
                    <div className="mx-auto mb-4 max-w-screen-sm lg:mb-8">

                    </div>
                    <div className="grid gap-4 lg:gap-8 grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4">
                        <div className="text-center text-white ">


                            <Image className="mx-auto mb-4  w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full border-4 border-solid border-white" src={jpeg5} alt="logo" style={{ objectFit: "cover" }} />                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <a className="text-white text-base md:text-xl  lg:text-2xl ">Madrag</a>
                                
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Marketing </p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/madragtrades" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>




                        <div className="text-center text-white ">


                            <Image className="mx-auto mb-4 w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full border-4 border-solid border-white" src={jpeg7} alt="logo" style={{ objectFit: "cover" }} />                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <a className="text-white text-base md:text-xl  lg:text-2xl ">Hogan</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl "> Advisor </p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/HoganTheReformd" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>



                        <div className="text-center text-white ">


                            <Image className="mx-auto mb-4 w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28  rounded-full border-4 border-solid border-white" src={jpeg8} alt="logo" style={{ objectFit: "cover" }} />                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <a className="text-white text-base md:text-xl  lg:text-2xl ">QuamfyWhale</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Advisor</p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/quamfywhale" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>




                        <div className="text-center text-white ">


                            <Image className="mx-auto mb-4 w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28  rounded-full border-4 border-solid border-white" src={jpeg11} alt="logo" style={{ objectFit: "cover" }} />                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <a className="text-white text-base md:text-xl  lg:text-2xl ">Empty</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Spell Checker </p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/Dictionarycom" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="text-center text-white ">


                            <Image className="mx-auto mb-4 w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full border-4 border-solid border-white" src={jpeg9} alt="logo" style={{ objectFit: "cover" }} />                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <a className="text-white text-base md:text-xl  lg:text-2xl ">MC_Sophie</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Dev </p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/sophie_marisa" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="text-center text-white ">


                            <Image className="mx-auto mb-4 w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full border-4 border-solid border-white" src={jpeg10} alt="logo" style={{ objectFit: "cover" }} />                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <a className="text-white text-base md:text-xl  lg:text-2xl ">Warnett</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Analytics </p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/warnett_" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="text-center text-white ">


                            <Image className="mx-auto mb-4 w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full border-4 border-solid border-white" src={jpeg12} alt="logo" style={{ objectFit: "cover" }} />                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <a className="text-white text-base md:text-xl  lg:text-2xl ">PunkPoser</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Advisor </p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/punkposer69" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="text-center text-white ">


                            <Image className="mx-auto mb-4 w-14 h-14 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full border-4 border-solid border-white" src={jpeg6} alt="logo" style={{ objectFit: "cover" }} />                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                <a className="text-white text-base md:text-xl  lg:text-2xl ">Badjuju</a>
                            </h3>
                            <p className="text-white text-xs md:text-xl  lg:text-2xl ">Advisor </p>
                            <ul className="flex justify-center mt-1 space-x-4">
                                <li>
                                    <a href="https://twitter.com/OneBadjuju" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    </a>
                                </li>

                            </ul>
                        </div>


                    </div>
                </div>
            </section>
            </main>
        </>
    )
}
