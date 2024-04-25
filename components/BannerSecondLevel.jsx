import React, { useEffect } from 'react';
import Image from "next/image";
import Button from "./button/Button";
import style from '../styles/bannerSecond.module.css'

export default function BannerSecondLevel({ title, blurb, buttonText, buttonClass, bgimage, bgimageName, buttonUrl, imagePath, imageName, bg, pageBg, topPattern, topimageName }) {

    useEffect(() => {
        var body = document.querySelector("body");
        if (pageBg && pageBg == 'riptideWeb') {
            body.classList.add(pageBg);
        }
    });

    return (
        <section className={`banner-second-level flex items-center overflow-hidden padding-120 min-h-[848px] ipad:min-h-[600px] md:min-h-[550px] md:pt-[80px] ${bg}`}>
            <div className="bg-image absolute w-full h-full top-0 left-0">
                <Image className={`object-cover w-full h-full`} src={bgimage} alt={bgimageName} quality={100} width={3000} height={3000} />
            </div>
            <div className="container">
                <div className="row flex justify-between items-center md:flex-wrap md:flex-col-reverse pr-[74px] desktop:pr-[135px] xl:pr-[90px] md:pr-0">
                    <div className="content-wrap relative max-w-[59%] z-[1] xl:max-w-[59%] tablet:pr-[20px] md:max-w-full md:text-center">
                        <h1 className='text-white'>{title}</h1>
                        <p className='text-white pt-[42px]'>{blurb}</p>
                        <div className="btn-wrap pt-[42px]">
                            <Button buttonText={buttonText} url={buttonUrl} buttonClass={buttonClass} />
                        </div>
                    </div>
                    <div className={`${style.imageWrap} relative w-full h-full max-w-[385px] max-h-[475px] xl:max-w-[285px] xl:max-h-[375px] md:max-w-[160px] md:max-h-[195px] md:mb-[25px]`}>
                        <div className=' absolute w-[275px h-[185px] top-[-77px] right-[-140px] laptop:w-[190px] laptop:h-[140px] laptop:top-[-57px] laptop:right-[-90px]  tablet:w-[190px] tablet:h-[140px] tablet:top-[-57px] tablet:right-[-90px]  md:w-[140px] md:h-[95px] md:top-[40px] md:right-[-100px]'>  <Image className={`object-contain w-full h-full`} src={topPattern} quality={100} alt={topimageName} width={2000} height={2000} /></div>
                        <Image className={`object-cover w-full h-full`} src={imagePath} quality={100} alt={imageName} width={2000} height={2000} />
                    </div>
                </div>
            </div>
        </section>
    )
}
