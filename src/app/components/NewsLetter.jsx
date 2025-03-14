const NewsLetter = () => {
    return (
        <div className="max-md:flex bg-[#F9FBFC] h-[200px] max-md:h-max">
            <div className="max-w-screen-lg flex max-md:flex-col justify-between items-center mx-auto max-xl:px-2 h-full max-md:mt-10 max-md:mb-8">
                <div className="flex flex-col">
                    <h1 className="text-4xl max-md:text-3xl max-md:text-center max-sm:text-left font-bold w-[32rem] max-lg:w-[26rem] max-md:w-[30rem] max-sm:w-[20rem] max-xs:w-[19rem]">Subscribe for Exclusive Updates and Insider Insights</h1>
                    <p className="text-lg max-md:text-sm max-md:text-center max-sm:text-left max-sm:w-[14rem] mt-2">Get exclusive updates and insider insights.</p>
                </div>
                <div className="flex items-center gap-x-2 mt-2">
                    <input type="email" name="email" placeholder="Enter your e-mail..." className="text-lg w-72 max-lg:w-64 max-md:w-72 max-sm:w-64 h-12 text-black border-2 border-[#727273] rounded-md px-2 py-2 focus:outline-none placeholder:text-[#A3A3A3] placeholder:text-sm" />
                    <button className="bg-black hover:bg-primary text-sm text-white hover:text-black hover-arrow font-bold border-black rounded-md max-lg:rounded-[.200rem] transition-all duration-300 px-8 max-lg:px-3 py-3">
                        <span className="hidden lg:block">Subscribe</span>
                        <svg className="block lg:hidden fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="none" viewBox="0 0 24 20">
                            <path d="m23.707 10.708-9 9a1 1 0 0 1-1.415-1.415L20.587 11H1a1 1 0 0 1 0-2h19.586l-7.293-7.292A1 1 0 0 1 14.707.293l9 9a1 1 0 0 1 0 1.415Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter