import React from 'react'
import Image from 'next/legacy/image'
import Sher from '../public/sherLogo.png'
import { SiTryhackme } from "react-icons/si"
import { TbPuzzleFilled } from "react-icons/tb"
import { AiFillEye } from "react-icons/ai"

export default function Steps() {
    return (
        <section id="steps" className="text-white body-font bg-black mx-auto">
            <h2 className='py-20 text-5xl text-white text-center underline underline-offset-8 decoration-blue-400'>Flow Of Event</h2>
            <div className='lg:grid lg:grid-cols-2'>
                <div className="container py-20 lg:px-38 px-8 mx-auto flex flex-wrap">
                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-800 rounded-full inline-flex items-center justify-center">
                                <TbPuzzleFilled className='fill-blue-800 w-16 h-16 mx-auto' />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-blue-400 mb-1 text-xl">Round 1</h2>
                                <h3 className='text-lg text-yellow-500'>NAME OF ROUND : </h3>
                                <p className="leading-relaxed italic">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                <AiFillEye className='fill-blue-800 w-16 h-16 mx-auto' />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-blue-400 mb-1 text-xl">Round 2</h2>
                                <h3 className='text-lg text-yellow-500'>NAME OF ROUND : </h3>
                                <p className="leading-relaxed italic">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                <SiTryhackme className='fill-blue-800 w-16 h-16 mx-auto' />
                            </div>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-blue-400 mb-1 text-xl">Round 3</h2>
                                <h3 className='text-lg text-yellow-500'>NAME OF ROUND : </h3>
                                <p className="leading-relaxed italic">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:hidden lg:block justify-center p-40'>
                    <Image src={Sher} />
                </div>
            </div>
        </section>
    )
}
