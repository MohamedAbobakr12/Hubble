import Image from 'next/image'

const Testimonials = () => {
    return (
        <section className="bg-black h-max">
            <div className="max-w-screen-xl flex flex-col border-white h-full mx-auto">
                <div className="flex flex-col">
                    <p className="w-max text-black bg-primary font-semibold rounded-3xl px-4 py-2 mx-auto mt-32 max-xl:mt-24">what are they saying</p>
                    <h1 className="text-5xl max-sm:text-4xl max-sm:w-[22rem] text-center text-white font-bold max-sm:mx-auto mt-4">Hear what our clients have to say</h1>
                    <p className="text-lg max-md:text-sm w-[46rem] max-md:w-[35rem] max-sm:w-[23rem] max-xs:w-[20rem] max-sm:leading-6 text-center text-white mx-auto mt-4">Discover the success stories and positive experiences of our clients through their testimonials. We take pride in providing exceptional service and innovative solutions that drive results.</p>
                </div>
                <div className="flex max-xl:flex-col justify-center gap-x-6 max-xl:gap-y-4 mt-6 mb-28 max-md:mb-20">
                    <div className="flex max-lg:flex-wrap max-lg:justify-center max-xs:justify-normal items-center gap-x-3 w-[45%] max-xl:w-[50%] max-lg:w-[60%] max-md:w-[70%] max-sm:w-[85%] h-[280px] max-lg:h-max border-2 border-gray rounded-xl px-10 max-2xl:px-8 max-xl:mx-auto">
                        <Image width={120} height={120} src={"/Avatar.png"} alt={"person image"} className="max-lg:flex max-2xl:self-start align-top w-32 max-xs:w-20 h-32 max-xs:h-20 max-xs:object-cover rounded-[100%] object-none object-top max-2xl:mt-8" />
                        <div className="mb-8">
                            <p className="max-sm:text-sm text-white w-72 max-xs:w-60 mt-4">”The stylish templates and ease of customization have allowed me to create visually stunning and engaging landing pages that perfectly align with my brand.”</p>
                            <h4 className="max-md:text-sm font-bold text-[#D4D4D4] mt-4">Sarah Thompson</h4>
                            <h4 className="max-md:text-sm font-bold text-primary">Thompson's Treasures</h4>
                        </div>
                    </div>

                    <div className="flex max-lg:flex-wrap max-lg:justify-center max-xs:justify-normal items-center gap-x-3 w-[45%] max-xl:w-[50%] max-lg:w-[60%] max-md:w-[70%] max-sm:w-[85%] h-[280px] max-lg:h-max border-2 border-gray rounded-xl px-10 max-2xl:px-8 max-xl:mx-auto">
                        <Image width={120} height={120} src={"/Avatar.png"} alt={"person image"} className="max-lg:flex max-2xl:self-start align-top w-32 max-xs:w-20 h-32 max-xs:h-20 max-xs:object-cover rounded-[100%] object-none object-top max-2xl:mt-8" />
                        <div className="mb-8">
                            <p className="max-sm:text-sm text-white w-72 max-xs:w-64 mt-4">”Managing our ecommerce business has never been easier since we started using the SASS platform. The seamless integration with various marketplaces and social media channels has expanded our reach."</p>
                            <h4 className="max-md:text-sm font-bold text-[#D4D4D4] mt-4">Joao Carlos</h4>
                            <h4 className="max-md:text-sm font-bold text-primary">Davis Digital Solutions</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials