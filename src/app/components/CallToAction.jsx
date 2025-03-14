import Link from "next/link"

const CallToAction = () => {
    return (
        <div className="flex justify-center bg-primary h-[300px]">
            <div className="self-center w-max mx-auto">
                <h1 className="text-4xl max-md:text-3xl text-center font-bold text-black w-[35rem] max-sm:w-[24rem] max-xs:w-[20rem] mx-auto">Take action and accelerate your ecommerce success</h1>
                <p className="text-lg max-sm:text-sm max-xs:text-xs text-black text-center">Trusted by over 100 companies around the world</p>
                <div className="flex max-xs:flex-wrap justify-center gap-x-3 max-xs:gap-y-10 mt-8 max-xs:mb-8">
                    <Link href={"#"}><span className="text-white font-bold hover:text-black bg-black hover:bg-white border-2 border-black transition-all duration-300 rounded-lg px-10 max-xs:px-8 py-4">Get Started</span></Link>
                    <Link href={"#"}><span className="text-black font-bold hover:text-white hover:bg-secondary border-2 border-black transition-all duration-300 rounded-lg px-12 max-xs:px-10 py-4">See more</span></Link>
                </div>
            </div>
        </div>
    )
}

export default CallToAction