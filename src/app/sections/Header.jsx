"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const Header = () => {
    const [isClick, setIsClick] = useState(false)

    const toggleButton = () => {
        setIsClick(!isClick)
    }

    const handleLinkClick = () => {
        setIsClick(false)
    }

    return (
        <header className="fixed w-full h-20 bg-hero max-lg:bg-none max-lg:bg-primary z-10 md:shadow-2xl">
            <nav className="block max-md: justify-between items-center h-full mx-16 max-xl:mx-12 max-lg:mx-6 max-md:mx-0 z-10">
                <div className="flex max-w-screen-2xl w-full justify-between items-center h-full">
                    <div className="flex justify-between items-center w-full md:hidden px-8">
                        <button onClick={toggleButton}>
                            {!isClick ? (
                                    <Image 
                                    className="hidden max-md:block"
                                    width={30} 
                                    height={30} 
                                    src={"/menu.ico"} 
                                    alt={"menu"}
                            />
                            ) : (
                                <Image 
                                    className="hidden max-md:block"
                                    width={30} 
                                    height={30} 
                                    src={"/close.ico"} 
                                    alt={"close"}
                            />
                            )}
                        </button>
                        <Link href={"/"}>
                            <Image 
                                width={45} 
                                height={45} 
                                src={"/logo.svg"} 
                                alt={"logo image"} 
                            />
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-12 max-xl:gap-x-8 max-lg:gap-x-4 max-md:hidden">
                    <Link href={"/"}>
                        <Image 
                            width={45} 
                            height={45} 
                            src={"/logo.svg"} 
                            alt={"logo image"} 
                        />
                    </Link>
                        <ul className="flex gap-x-6 max-lg:text-sm font-bold">
                        <li className="text-black hover:text-secondary transition-all duration-300"><Link href={"#home"}>Home</Link></li>
                        <li className="text-black hover:text-secondary transition-all duration-300"><Link href={"#about"}>About</Link></li>
                        <li className="text-black hover:text-secondary transition-all duration-300"><Link href={"#solutions"}>Solutions</Link></li>
                        <li className="text-black hover:text-secondary transition-all duration-300"><Link href={"#contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex box-border gap-x-4 max-md:hidden">
                        <Link href={"#"} className=""><span className="text-black max-lg:hover:text-white font-bold hover:bg-primary max-lg:hover:bg-secondary border-2 border-black transition-all duration-300 rounded-lg px-8 py-4">Sign In</span></Link>
                        <Link href={"#"} className=""><span className="text-white font-bold hover:text-black bg-black hover:bg-white border-2 border-black transition-all duration-300 rounded-lg px-8 py-4">Get Started</span></Link>
                    </div>
                </div>
                {isClick && (
                    <ul className="flex flex-col items-center w-full gap-y-10 pt-2 pb-5 bg-primary text-white shadow-2xl md:hidden z-50">
                        <li className="li hover:text-secondary">
                            <Link href="#home" onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className="li hover:text-secondary">
                            <Link href="#about" onClick={handleLinkClick}>About</Link>
                        </li>
                        <li className="li hover:text-secondary">
                            <Link href="#solution" onClick={handleLinkClick}>Solution</Link>
                        </li>
                        <li className="li hover:text-secondary">
                            <Link href="#contact" onClick={handleLinkClick}>Contact</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Header
