import Image from 'next/image'
import Link from 'next/link'
import SocialProof from '../components/SocialProof'

const Hero = () => {
    return (
        <section className="bg-hero max-lg:bg-none max-lg:bg-primary" id="home">
            <div className="max-w-screen-xl flex max-lg:flex-col h-[850px] max-2xl:h-[825px] max-xl:h-[800px] max-lg:h-[775px] max-sm:h-[650px] max-xs:h-[580px] mx-auto overflow-y-hidden">
                <div className="flex flex-col flex-wrap max-2xl:ml-12 max-xl:ml-8 max-lg:mx-auto">
                    <h1 className="text-6xl max-sm:text-5xl max-xs:text-4xl max-lg:text-center text-black font-bold leading-[70px] w-96 max-xs:w-64 max-lg:mx-auto mt-44 max-lg:mt-28">Effortlessly manage your ecom<span className="lg:hidden">merce</span> empire</h1>
                    <p className="max-md:text-sm max-lg:text-center text-black mt-4 w-[35rem] max-2xl:w-[32rem] max-xl:w-[26rem] max-lg:w-[24rem] max-sm:w-[22rem] max-xs:w-[20rem] max-lg:mx-auto">Say goodbye to the complexities and headaches of traditional solutions and embrace a streamlined approach that maximizes efficiency and drives exceptional results.</p>
                    <div className="flex max-lg:hidden gap-x-3 mt-8">
                        <Link href={"#"}>
                            <p className="flex items-center gap-x-4 text-white font-bold hover:text-black bg-black hover:bg-white border-2 border-black transition-all duration-300 rounded-lg px-8 py-4 black">Get Started
                                <svg className="fill-white transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 16 14">
                                    <path d="m15.317 7.442-5.625 5.625a.625.625 0 1 1-.884-.884l4.558-4.558H1.125a.625.625 0 1 1 0-1.25h12.241L8.808 1.817a.625.625 0 0 1 .884-.884l5.625 5.625a.626.626 0 0 1 0 .884Z"/>
                                </svg>
                            </p>
                        </Link>
                        <Link href={"#"}><p className="text-black font-bold hover:bg-white border-2 border-black transition-all duration-300 rounded-lg px-8 py-4">Live demo</p></Link>
                    </div>
                </div>

                <div className="max-lg:flex max-lg:justify-center lg:absolute -right-[16rem] max-2xl:-right-[22rem] max-xl:-right-[30rem] self-center max-lg:mx-auto max-lg:mt-10">
                    <Image 
                        width={990} 
                        height={700} 
                        src={"/hero-banner.png"} 
                        alt={"hero banner"} 
                        className="rounded-2xl max-2xl:rounded-xl max-lg:rounded-lg max-md:rounded-md max-2xl:w-[90%] max-xl:w-[70%] max-lg:w-[95%]"
                    />
                </div>
            </div>
            <SocialProof />
        </section>
    )
}

export default Hero