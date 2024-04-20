import React, { useEffect } from "react";
import Image from "next/image";
import Button from "./button/Button";

export default function ColTwoCards({ data }) {
    // useEffect(() => {
    //     const sectionNext = document.querySelector('section.col-two-cards').nextSibling;
    //     sectionNext.classList.add('lg-up:pt-[316px]');
    // }, [])


    return (
        <section className="col-two-cards pb-0">
            <span className="bg-cosmos absolute block w-full h-[85%] top-0 left-0 lg:h-[40%] sm:h-[36%]"></span>
            <div className="container">
                <div className="text-center">
                    {data.intro.title && <h2 className="text-white">{data.intro.title}</h2>}
                    {data.intro.blurb && <p className="max-w-[667px] mx-auto pt-[30px] text-white">{data.intro.blurb}</p>}
                </div>
            </div>
            <div className="max-w-[1546px] relative mx-auto w-full mt-[38px] px-[20px]">
                <div className={`outer w-[calc(100%+22px)] left-0 top-0 ml-[-11px] flex flex-wrap lg:w-full lg:ml-0 lg:block  ${data.imageCard2 && 'lg-up:h-[550px]'} `}>
                    <div className="relative w-[calc(50%-22px)] lg-up:flex lg-up:flex-wrap lg-up:flex-col lg-up:justify-between mx-[11px] lg:w-full lg:mx-0">
                        <div className="imageWrap w-full max-h-[430px] h-full lg:max-h-[227px] lg:h-[227px]">
                            <Image className={`w-full h-full object-cover`} src={`/images/card_a.png`} alt={`card_a`} width={1000} height={1000} />
                        </div>
                        <div className="yellow_card absolute bottom-0 left-0 w-full pt-[54px] pl-[53px] pr-[120px] pb-[58px] flex bg-lightning desktopMid:pr-[30px] laptopmid:pr-[38px] laptop:pr-[38px] laptop:pl-[38px] tablet:px-[38px] tablet:py-[38px] md:px-[15px] md:py-[30px] lg:relative lg:bottom-auto lg:left-auto md:flex-wrap">
                            <div className="imageWrap w-full max-w-[50px] max-h-[50px] h-full xl:max-w-[44px] xl:max-h-[44px] md:mb-[20px]">
                                <Image className={`w-full h-full object-cover`} src={data.imageCard.icon} alt={data.imageCard.iconName} width={1000} height={1000} />
                            </div>
                            <div className="content w-[calc(100%-50px)] pl-[23px] xl:w-[calc(100%-44px)] md:w-full md:pl-0">
                                <h3 className="text-ellipsis leading-[1.25] line-clamp-3">{data.imageCard.title}</h3>
                                <div className="btn-wrap mt-[30px] md:mt-[20px]">
                                    <Button buttonClass={`text-link-black`} buttonText={data.imageCard.buttonText} url={data.imageCard.buttonUrl} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        data.imageCard2 && <div className="relative lg:mt-[20px] w-[calc(50%-22px)] lg-up:flex lg-up:flex-wrap lg-up:flex-col lg-up:justify-between mx-[11px] lg:w-full lg:mx-0">
                            <div className="imageWrap w-full max-h-[430px] h-full lg:max-h-[227px] lg:h-[227px]">
                                <Image className={`w-full h-full object-cover`} src={`/images/card_a.png`} alt={`card_a`} width={1000} height={1000} />
                            </div>
                            <div className="yellow_card absolute bottom-0 left-0 w-full pt-[54px] pl-[53px] pr-[120px] pb-[58px] flex bg-lightning desktopMid:pr-[30px] laptopmid:pr-[38px] laptop:pr-[38px] laptop:pl-[38px] tablet:px-[38px] tablet:py-[38px] md:px-[15px] md:py-[30px] lg:relative lg:bottom-auto lg:left-auto md:flex-wrap">
                                <div className="imageWrap w-full max-w-[50px] max-h-[50px] h-full xl:max-w-[44px] xl:max-h-[44px] md:mb-[20px]">
                                    <Image className={`w-full h-full object-cover`} src={data.imageCard.icon} alt={data.imageCard.iconName} width={1000} height={1000} />
                                </div>
                                <div className="content w-[calc(100%-50px)] pl-[23px] xl:w-[calc(100%-44px)] md:w-full md:pl-0">
                                    <h3 className="text-ellipsis leading-[1.25] line-clamp-3">{data.imageCard.title}</h3>
                                    <div className="btn-wrap mt-[30px] md:mt-[20px]">
                                        <Button buttonClass={`text-link-black`} buttonText={data.imageCard.buttonText} url={data.imageCard.buttonUrl} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {data.cards && <div className="w-[calc(50%-22px)] mx-[11px] lg:w-full lg:mx-0">
                        {data.cards.map((card, index) => (
                            <div key={index} className="w-full h-1/2">
                                <div className={`card pt-[54px] pl-[53px] h-full pr-[120px] pb-[58px] flex desktopMid:pr-[30px] laptopmid:pr-[38px]  laptop:pr-[38px] laptop:pl-[38px]  tablet:px-[38px] tablet:py-[38px] md:px-[15px] md:py-[30px] md:flex-wrap ${card.cardBg}`}>
                                    <div className="imageWrap w-full max-w-[50px] max-h-[50px] h-full xl:max-w-[44px] xl:max-h-[44px] md:mb-[20px]">
                                        <Image
                                            className={`w-full h-full object-cover`}
                                            src={`/images/icons/${card.icon}`}
                                            alt={`card_${index}`}
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                    <div className="content w-[calc(100%-50px)] pl-[23px] xl:w-[calc(100%-44px)] md:w-full md:pl-0">
                                        {card.title && <h3 className="text-white text-ellipsis leading-[1.25] line-clamp-3">{card.title}</h3>}
                                        <div className="btn-wrap mt-[30px]">
                                            {card.buttonText && card.buttonUrl && <Button buttonClass={`text-link-white`} buttonText={card.buttonText} url={card.buttonUrl} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>}
                </div>
            </div>
        </section>
    );
}
