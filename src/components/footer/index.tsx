import React, { Component } from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { AiFillInstagram } from "react-icons/ai";
import { FaEtsy } from "react-icons/fa";

export default function Footer() {
    return (

        <>
            <section className="bg-[#94847c] shadow dark:bg-gray-800">
                <div className="container flex items-center justify-center p-6 mx-auto text-[#fefae0] capitalize ">
                    <a href="https://instagram.com/pawtraitsbyabbey?igshid=YmMyMTA2M2Y=">
                        <AiFillInstagram className="text-4xl mr-2" />
                    </a>
                    <a href="https://www.etsy.com/uk/shop/PawtraitsbyAbbey?ref=usf_2020">
                        <FaEtsy className="text-3xl ml-2" />
                    </a>


                </div>
            </section>
        </>
    )
}