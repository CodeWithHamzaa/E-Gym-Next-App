'use client';

import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
    const [headerActive, setHeaderActive] = useState(false);
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // detect scroll
            setHeaderActive(window.scrollY > 50);
        };

        // add scroll event
        window.addEventListener('scroll', handleScroll);
        // clear scroll event
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <header 
            className={`${
                headerActive ? 'h-[124px]' : 'h-[124px]'
            }   fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}
        >
            <div className="container mx-auto h-full flex items-center justify-between">
                {/* logo */}
                <Link href=''>
                    <Image src={'/assets/img/Newlogo.png'} width={256} height={200} alt="" className="pt-2"/>
                </Link>

                {/* mobile nav- hidden on large devices */}
                <MobileNav 
                    containerStyles={`${headerActive ? 'top-[100px]' : 'top-[124px]'}
                    ${
                    openNav 
                        ? 'max-h-max pt-8 pb-10 border-t border-white/10' 
                        : 'max-h-0  mt-20 pt-0 pb-0 overflow-hidden border-white/10'
                    }
                    flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 
                    top-[124px] text-base uppercase font-medium text-white transition-all xl:hidden`}
                />

                {/* desktop nav - hidden on small devices */}
                <Nav containerStyles="flex gap-4 text-white text-base uppercase font-medium transition-all hidden xl:flex"/>
                
                {/* hide/open menu button */}
                <div className="flex items-center gap-4">
                    {/* login & register buttons */}
                    <div className="text-white flex items-center gap-4">
                        <button className="hover:text-secondary transition-all text-base uppercase font-medium">Login</button>
                        <button className="hover:text-secondary transition-all text-base uppercase font-medium">Register</button>
                    </div>
                    <button
                        onClick={()=> setOpenNav(!openNav)} 
                        className="text-white xl:hidden"
                    >
                        <MdMenu className="text-4xl" />
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;