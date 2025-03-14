import Image from 'next/image'
import CallToAction from '../components/CallToAction'


const Features = () => {
    return (
        <section className="bg-secondary h-max overflow-x-hidden">
            <div className="max-w-screen-lg flex max-lg:flex-col  gap-x-20 max-2xl:gap-x-16 mx-auto max-2xl:px-2 max-xl:px-4 mb-32 max-md:mb-24 max-sm:mb-20">
                <div className="flex max-lg:justify-center mt-28 max-lg:mt-16 max-md:mt-10 max-lg:order-1">
                    <Image 
                        width={470} 
                        height={100} 
                        src={"/features-banner.png"} 
                        alt={"features-banner"} 
                        className="max-lg:w-[90%] max-md:w-[80%] max-sm:w-full"
                    />
                </div>
                <div className="flex flex-col mt-36 max-lg:mt-20 h-max">
                    <p className="text-xs font-semibold bg-primary rounded-2xl px-4 py-2 w-max">CRM</p>
                    <h1 className="text-4xl max-sm:text-3xl text-white font-bold max-lg:w-[28rem] max-md:w-[26rem] max-xs:w-[20rem]">Customer Relationship Management</h1>
                    <p className="max-md:text-sm text-white w-[30rem] max-sm:w-[22rem] max-xs:w-[18rem] mt-2">From managing customer data to providing personalized experiences, our CRM capabilities are designed to enhance customer satisfaction and drive repeat business.</p>
                    <ul className="flex flex-col gap-y-4 mt-8">
                        <li className="flex gap-x-1 items-start">
                            <Image width={28} height={28} src={"/CheckCircle.svg"} alt={"check icon"} className="mt-1" />
                            <p className="max-md:text-sm text-white w-[30rem] max-md:w-[28rem] max-sm:w-[24rem] max-xs:w-[20rem]"><span className="font-bold">Centralized Customer Database:</span> Maintain a comprehensive database of customer information, including contact details, purchase history, and preferences, allowing you to have a complete view of each customer and provide personalized experiences.</p>
                        </li>
                        <li className="flex gap-x-1 items-start">
                            <Image width={28} height={28} src={"/CheckCircle.svg"} alt={"check icon"} className="mt-1" />
                            <p className="max-md:text-sm text-white w-[30rem] max-md:w-[28rem] max-sm:w-[24rem] max-xs:w-[20rem]"><span className="font-bold">Personalization and Segmentation:</span> Segment your customer base based on various criteria such as demographics, purchase behavior, or engagement level.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex w-[150%] items-center gap-x-4 mb-6 -mx-8">
                <h4 className="text-2xl text-nowrap text-white font-bold">HOW TO SUBSCRIBE</h4>
                <Image width={35} height={35} src={"/ArrowRight.svg"} alt={"Arrow icon"} />
                <h4 className="text-2xl text-nowrap text-white">VIEW PAGE PRICING E CREATE A ACCOUNT</h4>
                <Image width={30} height={30} src={"/Circle.svg"} alt={"Circle icon"} />
                <h4 className="text-2xl text-nowrap text-white font-bold">HOW TO SUBSCRIBE</h4>
                <Image width={35} height={35} src={"/ArrowRight.svg"} alt={"Arrow icon"} />
                <h4 className="text-2xl text-nowrap text-white">VIEW PAGE PRICING E CREATE A ACCOUNT</h4>
                <Image width={30} height={30} src={"/Circle.svg"} alt={"Circle icon"} />
            </div>
            <CallToAction />
        </section>
    )
}

export default Features