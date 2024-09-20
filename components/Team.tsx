'use client';

import {FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

import { motion } from 'framer-motion';
import { FadeIn } from '@/lib/variants';

const trainerData = [
    {
        image: '/assets/img/trainers/david.jpg',
        name: 'David Williams',
        role: 'Body Builder Coach',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime.',
        social: [
            { icon: FaFacebook, href: 'https://www.facebook.com/' },
            { icon: FaTwitter, href: 'https://www.twitter.com/' },
            { icon: FaYoutube, href: 'https://www.Youtube.com/' },
        ],
    },
    {
        image: '/assets/img/trainers/rosy.jpg',
        name: 'Rosy Rivers',
        role: 'Body Builder Coach',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime.',
        social: [
            { icon: FaFacebook, href: 'https://www.facebook.com/' },
            { icon: FaTwitter, href: 'https://www.twitter.com/' },
            { icon: FaYoutube, href: 'https://www.Youtube.com/' },
        ],
    },
    {
        image: '/assets/img/trainers/matt.jpg',
        name: 'Matt Stone',
        role: 'Body Builder Coach',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime.',
        social: [
            { icon: FaFacebook, href: 'https://www.facebook.com/' },
            { icon: FaTwitter, href: 'https://www.twitter.com/' },
            { icon: FaYoutube, href: 'https://www.Youtube.com/' },
        ],
    },
    {
        image: '/assets/img/trainers/sofia.jpg',
        name: 'Sofia Weggara',
        role: 'Body Builder Coach',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, maxime.',
        social: [
            { icon: FaFacebook, href: 'https://www.facebook.com/' },
            { icon: FaTwitter, href: 'https://www.twitter.com/' },
            { icon: FaYoutube, href: 'https://www.Youtube.com/' },
        ],
    },
];

const Team = () => {
    return (
        <section className="py-12 xl:h-[110vh]" id="team">
            <div className="container mx-auto h-full flex flex-col items-center justify-center">
                <motion.h2 
                    variants={FadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className='h2 text-center mb-6'
                >
                    Our Trainers
                </motion.h2>
                {/* trainers grid */}
                <motion.div
                    variants={FadeIn('up', 0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12'
                >
                    {trainerData.map((trainer, index) =>{
                        return (
                            <div className='flex flex-col items-center text-center' key={index}>
                                {/* image */}
                                <div className='relative w-[320px] h-[360px] mx-auto mb-4'>
                                    <Image src={trainer.image} fill alt='' />
                                </div>
                                {/* name */}
                                <h4 className='h4 mb-2'>{trainer.name}</h4>
                                {/* role */}
                                <p className='uppercase text-xs tracking-[3px] mb-2'>{trainer.role}</p>
                                {/* description */}
                                <p className='mb-6 max-w-[320px] mx-auto'>{trainer.description}</p>
                                {/* socials */}
                                <div className='flex gap-12 justify-center'>
                                    {trainer.social.map((social, index) =>{
                                        return (
                                            <div key={index}>
                                                <Link href={social.href} className='hover:text-accent transition-all'>
                                                    <social.icon className='text-lg' />
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
                {/* button */}
                <motion.div
                    variants={FadeIn('up', 0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <CustomButton containerStyles='w-[196px] h-[62px]' text='See All Trainers' />
                </motion.div>
            </div>
        </section>
    )
};

export default Team;