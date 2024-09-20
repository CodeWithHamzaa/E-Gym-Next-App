"use client";

import { FaUsers } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa6';

import { motion } from 'framer-motion';
import { FadeIn } from '@/lib/variants';

import Achievements from './Achievements';

const features = [
    {
        icon: <FaUsers />,
        title: 'award-winning trainers',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum.'
    },
    {
        icon: <IoIosPricetags />,
        title: 'excellent prices',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum.'
    },
    {
        icon: <FaDumbbell />,
        title: 'modern equipment',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum.'
    },
]

const About = () => {
    return (
        <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
            <div className='container mx-auto'>
                <div className='flex flex-col items-center gap-2 mb-8'>
                    <motion.h2 
                        variants={FadeIn('up', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2}}
                        className='h2 text-center'
                    >
                        About Us
                    </motion.h2>

                    <motion.p
                        variants={FadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                        className='max-w-[600px] mx-auto text-center'
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        A vel soluta vitae illo impedit illum, temporibus natus.
                    </motion.p>
                </div>
                {/* Featured items */}
                <motion.div
                    variants={FadeIn('up', 0.8)}
                    initial="hidden"
                    whileInView={ 'show'}
                    viewport={{ once: false, amount: 0.2}}
                    className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16'
                >

                    {features.map((feature, index) => {
                        return (
                            <div className='flex flex-col justify-center items-center gap-4 border p-10' key={index}>
                                <div className='text-4xl bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center'>
                                    {feature.icon}
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2 text-center'>
                                    <h4 className='h4 text-accent'>{feature.title}</h4>
                                    <p>{feature.subtitle}</p>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>

                {/* Achievements */}
                <motion.div
                    variants={FadeIn('up', 1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2}}
                >
                    <Achievements />
                </motion.div>
                
            </div>
        </section>
    )
};

export default About;