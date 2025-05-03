'use client'

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
    fadeAnimation
} from '../config/motion';
import ShirtCanvas from '../components/ShirtCanvas'

const Home = () => {
    const router = useRouter();

    return (
        <AnimatePresence>
            <motion.div
                className='px-6 sm:px-20 md:h-screen w-full grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 overflow-hidden bg-white dark:bg-black transition-colors duration-300'
                {...slideAnimation('left')}
            >
                <motion.div
                    className='flex flex-col justify-center h-full max-w-2xl space-y-5'
                    {...headContainerAnimation}
                >
                    <motion.div {...headTextAnimation}>
                        <h1 className='font-extrabold text-left text-8xl md:text-9xl text-black dark:text-white'>
                            JUST <br /> DO IT.
                        </h1>
                    </motion.div>

                    <motion.div {...headContentAnimation}>
                        <p className='text-sm text-gray-700 dark:text-gray-300'>
                            Create your unique and exclusive shirt with our brand new customization tool.
                            <br />
                            <span className='text-yellow-600 dark:text-yellow-400 font-bold'>
                                Unleash your creativity!
                            </span>
                        </p>

                        <motion.div {...slideAnimation('up')} className='flex items-center justify-start mt-4'>
                            <button
                                className='bg-yellow-500 text-white cursor-pointer px-4 py-2 rounded 
                                           hover:bg-yellow-700 transition-all duration-200 ease-in-out'
                                onClick={() => router.push('/customize')}
                            >
                                Customize It
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className='flex justify-center items-center h-full w-full' {...fadeAnimation}>
                    <ShirtCanvas />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Home