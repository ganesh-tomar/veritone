
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from "next/link";
import Button from "./button/Button";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function TwitterSlider({ data, onlyInternalPosts }) {
    // let SlidesData;
    const [slidesData, setSlidesData] = useState(data.cards)
    const [totalSlides, setTotalSlides] = useState(data.cards.length)
    const [checked, setChecked] = useState(true)
    const [winWidth, isWinWidth] = useState(0);
    const [autoplaySpeed, setAutoPlaySpeed] = useState(3000);
    useEffect(() => {
        isWinWidth(window.innerWidth);
        window.addEventListener('resize', function () {
            isWinWidth(window.innerWidth);
        })
    });
    // let filteredItems;
    const sliderRef = useRef(null);
    // useEffect(() => {
    //     setSlidesData(data.cards);
    // }, [third])

    // console.log(sliderRef.current)
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 3.65,
        slidesToScroll: 1,
        centerMode: true,
        // focusOnSelect: false,
        touchThreshold: 100,
        draggable: true,
        swipeToSlide: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        accessibility: true,
        adaptiveHeight: false,

    };
    useState(() => {
        if (onlyInternalPosts === true) {
            let filteredItems = data.cards.filter(item => item.categories.includes("veritone"));
            setSlidesData(filteredItems)
        }
    }, [])
    useEffect(() => {
        setTotalSlides(slidesData?.length)
    }, [slidesData])
    const responsiveSettings = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3.29,
                centerPadding: '50px 0 0',
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                centerPadding: '50px 0 0',
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2.03,
                centerPadding: '50px 0 0',
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1.7,
            },
        },
        {
            breakpoint: 595,
            settings: {
                slidesToShow: 1.05,
                centerPadding: '80px 0 0',
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1.05,
                centerPadding: '50px 0 0',
            },
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                centerPadding: '50px 0 0',
            },
        },
        {
            breakpoint: 374,
            settings: {
                slidesToShow: 1,
                centerPadding: '20px 0 0',
            },
        },
    ];

    Object.assign(settings, { responsive: responsiveSettings });


    const changeHandler = (e) => {
        setChecked(false)
        if (e.target.checked) {
            let filteredItems = data.cards.filter(item => item.categories.includes("veritone"));
            setSlidesData(filteredItems)
        } else {
            setSlidesData(data.cards)
        }
        setTimeout(() => {
            setChecked(true)
        }, 300)

    }
    const touchHandler = (e) => {
        setAutoPlaySpeed(25000)
    }
    const touchRemover = (e) => {
        setAutoPlaySpeed(3000)
    }
    return (
        <section ref={sliderRef} className="twitter-slider overflow-hidden padding-medium-top">
            <div className={`px-[20px] mx-auto`}>
                <div className="intro flex items-end justify-between mb-[42px] sm:mb-[20px] ipad:flex-wrap">
                    <div className="titleWrap w-[42%] tabletlarge:w-[35%] lg:w-full xs:mr-[65px]">
                        <h2 className="h1 pb-[25px] sm:pb-[20px]">
                            {data.intro.title}
                        </h2>
                    </div>
                    <div className="btnWrapper w-[55%] flex sm:flex-wrap justify-end items-center tabletlarge:w-fit  lg:w-full ipad:justify-start">
                        <div className="checkBoxWithText flex items-center sm:flex-row-reverse sm:justify-end sm:items-center sm:w-full lg:flex-row-reverse">
                            <div className={`checkboxSwitch`}>
                                <input defaultChecked={onlyInternalPosts} id={data.intro.chekboxId} type="checkbox" className='align-sub' onChange={(e) => changeHandler(e)} />
                                <label className='h-0 w-0 overflow-hidden text-[0]' htmlFor={data.intro.chekboxId}>.</label>
                            </div>
                            <p className='small ipad-up:ml-[20px] tabletlarge:ml-[10px] lg:mr-[20px] sm:ml-0 sm:mr-[20px]'>{data.intro.caption}</p>
                        </div>
                        <div className="btnWrap ml-[60px] laptop-portrait:ml-[30px] sm:hidden sm:ml-0">
                            <Button buttonText={data.intro.btnText} target={true} url={data.intro.btnUrl} buttonClass={data.intro.btnClass} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sliderOuter mx-auto">
                <div className={`sliderWrap  ${winWidth > 400 ? "container" : ""} transition-opacity duration-300 ${checked == true ? 'opacity-[1]' : 'opacity-0'}`}>
                    <Slider  {...settings} autoplaySpeed={autoplaySpeed}>
                        {slidesData?.map((slide, index) => (
                            <div key={index}>
                                <div className={`relative sliderCard max-w-[360px] tabletlarge:max-w-[237px] tabletlarge:max-h-[223px] tablet:max-h-[223px] mx-[15px] xxs:max-w-[calc(100%-40px)] `}>
                                    <Link className='emptyLink' href={slide.url} target='_blank' onTouchStart={touchHandler} onTouchEnd={touchRemover}>.</Link>
                                    <div className="imageWrap max-w-[360px] max-h-[340px] tabletlarge:max-w-[237px] tabletlarge:max-h-[223px] tablet:max-h-[223px] sm:max-h-[240px] w-full h-full overflow-hidden">
                                        <Image
                                            src={slide.imageSrc}
                                            width={500}
                                            height={500}
                                            alt={slide.imageName}
                                            quality={100}
                                            className={`w-full h-full`}
                                        />
                                    </div>
                                    <div className="contentWrap">
                                        <div className="clientWrap my-[30px] sm:mt-[22px] sm:mb-[10px] flex w-full">
                                            <div className="clientImage max-w-[59px] max-h-[59px] h-[59px] tabletlarge:max-w-[43px] tabletlarge:max-h-[43px] tablet:max-w-[43px] tablet:max-h-[43px] sm:max-w-[41px] sm:max-h-[41px] sm:h-[41px] w-full rounded-[50%] overflow-hidden">
                                                <Image
                                                    src={slide.clientImage}
                                                    width={300}
                                                    height={300}
                                                    alt={slide.client}
                                                    quality={100}
                                                    className={`w-full h-full object-cover`}
                                                />
                                            </div>
                                            <div className="details pl-[9px] sm:pl-[15px]">
                                                <span className='text-[20px] font-[400] block text-cosmos'>{slide.client}</span>
                                                <span className='text-[16px] block font-light text-cosmos'>{slide.userName}</span>
                                            </div>
                                        </div>
                                        <p className='content text-cosmos small'> {slide.desc}</p>
                                    </div>

                                    <style jsx>{`
                                                    .content{
                                                        overflow:hidden;
                                                        text-overflow:ellipses;
                                                        -webkit-box-orient: vertical;
                                                        -webkit-line-clamp: 5;
                                                        display: -webkit-box;
                                                    }
                                                    
                                                    `}
                                    </style>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
                <div className="btnWrap mt-[38px] sm:mt-[30px] sm-up:hidden w-full max-w-[343px] mx-auto sm:max-w-[calc(100%-40px)] sm:mx-[20px]">
                    <Button buttonText={data.intro.btnText} url={data.intro.btnUrl} buttonClass={data.intro.btnClass} />
                </div>
            </div>


        </section>
    );
}
