"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiHotel } from "react-icons/bi"
import { FaHamburger } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Navbar = () => {
    const [mobile, setMobile] = useState(false)
    const pathname = usePathname();

    const links: {name: string, link: string}[] = [
        { name: "Home", link: "/" },
        { name: "Rooms & suits", link: "/rooms-and-suit" },
        { name: "Explore musk", link: "/explore-musk" },
        { name: "news & offers", link: "/news-and-offers" },
        { name: "contact", link: "/contact" },
    ]

    const handleMobileNav = () => {
        if(mobile) {
            setMobile(false)
        }else {
            setMobile(true)
        }
    }

    return (
        <div className="fixed top-0 w-full z-50 flex flex-row items-center justify-between p-4 text-white">
            {/* Logo section */}
            <div className="flex items-center gap-2">
                <Image 
                    src="/placeholder.png"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="w-5 h-5"/>
                <h1 className="italic text-2xl">
                    Musk Hotel
                </h1>
            </div>

            {/* Nav container for big screens */}
            {/* Links container */}
            <div className="hidden md:flex md:flex-row items-center gap-4">
                { links.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className={`uppercase text-base ${pathname === item.link && "text-[#c0691d] font-bold"}`}>
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Nav section for mobile evice */}
            { mobile && (
                <div className="absolute bg-white/80 backdrop-blur-xl w-full h-screen text-black top-full flex flex-col p-8 text-right justify-center gap-5 text-4xl transition duration-1000">
                { links.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className={`uppercase text-base ${pathname === item.link && "text-[#c0691d] font-bold"}`}>
                        {item.name}
                    </Link>
                ))}
            </div>
            )}

            {/* Call to action button */}
            <div className="hidden md:block">
                <button className="flex items-center gap-2 uppercase bg-[#bf7331] p-2 text-white">
                    <span className="text-3xl"><BiHotel /></span>
                    <span>Reservation</span>
                </button>
            </div>

            <div className="md:hidden">
                <button
                    onClick={handleMobileNav}
                    className="">
                    {mobile ? <FiX /> : <FaHamburger />}
                </button>
            </div>
        </div>
    );
}

export default Navbar;