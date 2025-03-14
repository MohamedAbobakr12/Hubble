import Image from 'next/image'
import Link from 'next/link'


const CardBlog = ({ src, heading, content  }) => {
    return (
        <div className="bg-white w-[22rem] max-md:w-[20rem] h-[32rem] max-md:h-[31rem] rounded-xl">
            <Image width={400} height={250} src={src} alt={"blog image"} className="h-64 rounded-t-lg object-cover" />
            <div className="mx-6 mt-4">
                <span className="flex gap-x-2">
                    <Image width={18} height={18} src={"/clock.svg"} alt={"clock icon"} />
                    <p className="text-[#727273]">Dez 30, 2022</p>
                </span>
                <h1 className="text-xl max-md:text-lg text-black font-bold text-wrap truncate leading-7 max-h-14 line-clamp-2">{heading}</h1>
                <p className="text-[15px] max-md:text-sm text-[#525252] text-wrap truncate leading-6 max-h-[72px] line-clamp-3 mt-3">{content}</p>
                <button className="flex items-center gap-x-3 px-2 py-2 text-black font-bold rounded-md mt-3">Read article
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" fill="none" viewBox="0 0 19 16">
                        <path fill="#050507" d="m18.28 8.53-6.75 6.75a.75.75 0 0 1-1.06-1.06l5.47-5.47H1.25a.75.75 0 0 1 0-1.5h14.69l-5.47-5.47A.75.75 0 1 1 11.53.72l6.75 6.75a.748.748 0 0 1 0 1.06Z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CardBlog