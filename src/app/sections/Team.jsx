import Image from 'next/image'

const Team = () => {
    return (
        <section className="bg-[#F9FBFC] h-max" id="about">
            <div className="max-w-screen-xl h-full mx-auto mb-32 max-lg:mb-28 max-md:mb-20">
                <div className="">
                    <h1 className="text-5xl max-xs:text-4xl max-xs:w-[18rem] text-center text-black font-bold mx-auto mt-24 max-xl:mt-16">Meet our amazing team</h1>
                    <p className="text-lg max-md:text-sm text-center text-black w-[40rem] max-2xl:w-[36rem] max-xl:w-[30rem] max-lg:w-[24rem] max-md:w-[22rem] max-sm:w-[18rem] mx-auto mt-3">We believe that teamwork is key to achieving extraordinary results in the ecommerce world.</p>
                    <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-x-10 max-2xl:gap-x-6 max-xl:gap-x-3 max-lg:gap-y-6 max-w-max mx-auto mt-8 max-md:mt-4">
                        <div>
                            <Image width={300} height={200} src={"/member1.png"} alt={"member image"} className="w-64 max-xl:w-60 max-sm:w-72 h-80 max-sm:h-44 rounded-3xl object-none max-sm:object-[50%_45%]" />
                            <h2 className="text-lg text-center font-bold mt-2">Antonia</h2>
                            <p className="text-center text-black">Product Designer</p>
                        </div>
                        <div>
                            <Image width={500} height={200} src={"/member2.png"} alt={"member image"} className="w-64 max-xl:w-60 max-sm:w-72 h-80 max-sm:h-44 rounded-3xl object-none max-sm:object-[50%_35%]" />
                            <h2 className="text-lg text-center font-bold mt-2">Carlos</h2>
                            <p className="text-center text-black">Developer</p>
                        </div>
                        <div>
                            <Image width={300} height={200} src={"/member3.png"} alt={"member image"} className="w-64 max-xl:w-60 max-sm:w-72 h-80 max-sm:h-44 rounded-3xl object-none max-sm:object-[50%_35%]" />
                            <h2 className="text-lg text-center font-bold mt-2">Maria</h2>
                            <p className="text-center text-black">Marketing</p>
                        </div>
                        <div>
                            <Image width={300} height={200} src={"/member4.png"} alt={"member image"} className="w-64 max-xl:w-60 max-sm:w-72 h-80 max-sm:h-44 rounded-3xl object-none max-sm:object-[50%_25%]" />
                            <h2 className="text-lg text-center font-bold mt-2">Nick</h2>
                            <p className="text-center text-black">Product Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team