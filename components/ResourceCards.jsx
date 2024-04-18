import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import Button from "./button/Button";

export default function ResourceCards({ data }) {
    return (
        <section className="resource-cards padding-large-top no-padding-bottom">
            <div className={` px-[20px] mx-auto`}>
                <div className="intro flex items-end justify-between mb-[42px] ipad:flex-wrap">
                    <div className="titleWrap w-[60%] ipad:w-full">
                        <h2 className="h1 pb-[25px] sm:pb-[12px]">{data.intro.title}</h2>
                    </div>
                    <div className="btnWrap w-[15%] ipad:w-auto text-right lg:pt-[25px]">
                        <Button buttonText={data.intro.btnText} url={data.intro.btnUrl} buttonClass={data.intro.btnClass} />
                    </div>
                </div>
                <div className="row flex flex-wrap w-[calc(100%+22px)] ml-[-11px]">
                    {data?.cards?.map((item, index) => (
                        <div key={index} className="colThree w-[calc(33.33%-22px)] lg:w-[calc(50%-22px)] md:w-full lg:mb-[30px] mx-[11px]">
                            <div className={`card relative group`}>
                                <Link className='emptyLink' href={item.url}>.</Link>
                                <div className="imageWrap mb-[32px] max-h-[230px] w-full h-full overflow-hidden">
                                    <Image
                                        src={item.imagePath}
                                        width={2000}
                                        height={2000}
                                        alt={item.imageName}
                                        className={`w-full h-full scale-[1] group-hover:scale-[1.1] transition-all duration-300`}
                                    />
                                </div>
                                <div className="content pr-[32px]">
                                    <h4 className={`group-hover:text-ember transition-color duration-300`}>{item.heading}</h4>
                                    <span className='text-[20px] font-bold pt-[10px] inline-block uppercase'>{item.type}</span>
                                    <p className='pt-[10px]'>{item.blurb}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
