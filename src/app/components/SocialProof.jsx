import Image from "next/image"


const SocialProof = () => {
    return (
        <div className="bg-black h-24">
            <ul className="grid grid-flow-col max-sm:grid-rows-2 gap-x-20 max-2xl:gap-x-16 max-xl:gap-x-14 max-lg:gap-x-8 max-md:gap-x-1 items-center justify-center h-full">
                <li><Image width={120} height={50} src={"/google.svg"} alt={"google logo"} className="max-md:w-[80%] max-sm:w-[60%] mx-auto" /></li>
                <li><Image width={120} height={50} src={"/youtube.svg"} alt={"youtube logo"} className="max-md:w-[80%] max-sm:w-[60%] mx-auto" /></li>
                <li><Image width={120} height={50} src={"/disney.svg"} alt={"disney logo"} className="max-md:w-[80%] max-sm:w-[60%] mx-auto" /></li>
                <li><Image width={120} height={50} src={"/spotify.svg"} alt={"spotify logo"} className="max-md:w-[80%] max-sm:w-[60%] mx-auto" /></li>
                <li><Image width={120} height={50} src={"/facebook.svg"} alt={"facebook logo"} className="max-md:w-[80%] max-sm:w-[60%] mx-auto" /></li>
                <li><Image width={120} height={50} src={"/youtube.svg"} alt={"youtube logo"} className="max-md:w-[80%] max-sm:w-[60%] mx-auto" /></li>
            </ul>
        </div>
    )
}

export default SocialProof