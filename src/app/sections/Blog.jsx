import CardBlog from "../components/CardBlog"
import NewsLetter from "../components/NewsLetter"


const Blog = () => {
    return (
        <section className="bg-secondary h-max" id="solutions">
            <div className="max-w-screen-xl mx-auto h-full mb-28 max-lg:mb-24 max-md:mb-20">
                <div className="flex flex-col mx-auto">
                    <h1 className="text-5xl max-sm:text-4xl text-center text-white font-bold mt-32 max-xl:mt-20">Explore our Blog</h1>
                    <p className="text-lg max-md:text-sm text-center text-white w-[40rem] max-xl:w-[36rem] max-lg:w-[32rem] max-md:w-[28rem] max-sm:w-[22rem]  mx-auto mt-3">Delve into a world of insights, inspiration, and industry trends through our carefully curated blog. Stay up-to-date with the latest developments in the ecommerce landscape.</p>
                </div>
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-6 max-xl:gap-4 w-max mx-auto mt-8">
                    <CardBlog 
                        src={"/blog1.png"} 
                        heading={"Delve into a world of insights, inspiration, and industry trends through our carefully curated blog. Stay up-to-date with the latest developments in the ecommerce landscape."} 
                        content={"Learn proven strategies and techniques to optimize your ecommerce conversion rates. Explore topics such as persuasive product descriptions, effective call-to-action buttons, and streamlined checkout processes."} 
                    />
                    <CardBlog 
                        src={"/blog2.png"} 
                        heading={"Learn proven strategies and techniques to optimize your ecommerce conversion rates. Explore topics such as persuasive product descriptions, effective call-to-action buttons, and streamlined checkout processes."} 
                        content={"Dive into the world of social media marketing for ecommerce and unlock the potential of platforms like Facebook, Instagram, and Twitter. Gain insights into crafting compelling social media campaigns, leveraging user-generated content, and creating engaging content that resonates with your target audience."} 
                    />
                    <CardBlog 
                        src={"/blog3.png"} 
                        heading={"The Future of Ecommerce: Trends and Innovations to Watch"} 
                        content={"Stay ahead of the curve by exploring the future of ecommerce in this insightful blog series. Discover emerging trends, such as voice commerce, augmented reality (AR) shopping experiences, and personalized product recommendations."} 
                    />
                </div>
            </div>
            <NewsLetter />
        </section>
    )
}

export default Blog
