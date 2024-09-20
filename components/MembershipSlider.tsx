'use client';

import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import CustomButton from "./CustomButton";

// import swiper component
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//membership data
const membershipData = [
    {
        title: "Basic Membership",
        price: "19.99",
        benefits: [
            {
                icon: FaCheck,
                text: "Access to all gym facilities"
            },
            {
                icon: FaCheck,
                text: "Includes memberships"
            },
            {
                icon: FaCheck,
                text: "24/7 access to our live online support"
            },
            {
                icon: MdClose,
                text: "10% off membership annually"
            },
            {
                icon: MdClose,
                text: "Health and fitness tips"
            },
            {
                icon: MdClose,
                text: "No additional amenities"
            },
        ],
    },
    {
        title: "Ultimate Membership",
        price: "49.99",
        benefits: [
            {
                icon: FaCheck,
                text: "Access to all gym facilities"
            },
            {
                icon: FaCheck,
                text: "Includes memberships"
            },
            {
                icon: FaCheck,
                text: "24/7 access to our live online support"
            },
            {
                icon: FaCheck,
                text: "10% off membership annually"
            },
            {
                icon: FaCheck,
                text: "Health and fitness tips"
            },
            {
                icon: MdClose,
                text: "No additional amenities"
            },
        ],
    },
    {
        title: "Premium Membership",
        price: "99.99",
        benefits: [
            {
                icon: FaCheck,
                text: "Access to all gym facilities"
            },
            {
                icon: FaCheck,
                text: "Includes memberships"
            },
            {
                icon: FaCheck,
                text: "24/7 access to our live online support"
            },
            {
                icon: FaCheck,
                text: "10% off membership annually"
            },
            {
                icon: FaCheck,
                text: "Health and fitness tips"
            },
            {
                icon: FaCheck,
                text: "No additional amenities"
            },
        ],
    },
];

const MembershipSlider = () => {
    return (
        <Swiper 
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                // breakpoints
                768: { 
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: { 
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            className="min-h-[680px]"
        >
            {membershipData.map((item, index) =>{
                return (
                    <SwiperSlide key={index}>
                        <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
                            <div>
                                <h4 className="h4 py-5 px-[60px] border-b border-accent">{item.title}</h4>
                            </div>
                            {/* benefits */}
                            <div className="py-[30px] px-[60px]">
                                <ul className="flex flex-col gap-5 mb-7">
                                    {item.benefits.map((item, index) => {
                                        return (
                                            <li className="flex items-center gap-2" key={index}>
                                                <item.icon className="text-accent text-lg" />
                                                {item.text}
                                            </li>
                                        );
                                    })}
                                </ul>
                                {/* price & button */}
                                <p className="text-accent mb-8 flex gap-1 items-center">
                                    <sup className="text-4xl">$</sup>
                                    <strong className="text-6xl">{item.price}</strong>
                                    <em className="self-end text-2xl">/month</em>
                                </p>
                                <CustomButton containerStyles="w-[196px] h-[62px]" text="Join Now" />
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}

export default MembershipSlider