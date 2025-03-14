"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';


export const Footer = () => {

    const [year, setYear] = useState(null);
    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
    }, [])

    return (
        <footer className="bg-[#F9FBFC] h-[150px]" id="contact">
            <div className="max-w-screen-xl h-full mx-auto">
                <div className="flex flex-col gap-y-2 justify-center items-center h-full">
                    <Image width={50} height={50} src={"/logo.svg"} alt={"logo image"} />
                    <p className="text-sm text-[#727273]">Copyright &#169; {year} Under UI. All rights reserved.</p>
                    <ul className="flex gap-x-2">
                        <li><Link href={"#"}><Image width={24} height={24} src={"/twitter.svg"} alt={"twitter icon"} /></Link></li>
                        <li><Link href={"#"}><Image width={24} height={24} src={"/instagram.svg"} alt={"instagram icon"} /></Link></li>
                        <li><Link href={"#"}><Image width={24} height={24} src={"/linkedin.svg"} alt={"linkedin icon"} /></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer