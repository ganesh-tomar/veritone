import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from '../styles/IntroWithAccordion.module.css'
import Intro from "./Intro";

const AccordionItem = ({ id, heading, paragraph, isOpen, toggleAccordion, reverse }) => {
    return (
        <div
            className={`${style.accordionItem} wrap relative w-full pt-[15px] border-b-[1px] sm:pt-[22px] sm:pb-[31px] cursor-pointer ${reverse == "true" ? " pr-[100px] lg:pr-0" : "pr-[94px] lg:pr-0"}`}
            onClick={(e) => toggleAccordion(id, e)}
        >
            <div className={`titleWrap lg:pr-[80px]`}>
                <h4 className={`lite text-cosmos ${reverse == "true" ? "lg-up:pr-[20px]" : ""}`}>
                    {heading}
                </h4>
            </div>
            <div
                className={`${style.accordionContent} relative w-full ${reverse == "true" ? "" : "pr-[40px] lg:pr-0"}`}>
                <div className={`${style.description}`}>
                    <p className="text-cosmos">
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function IntroWithAccordion({ data, reverse, pb, pt }) {
    useEffect(() => {
        const sections = document.querySelectorAll(`.intro-with-accordion`);
        sections.forEach(section => {
            const firstItem = section.querySelector(`.${style.accordionItem}`);
            const descHeight = (firstItem.querySelector(`.${style.description}`).offsetHeight);
            const content = (firstItem.querySelector(`.${style.accordionContent}`));
            content.style.height = `${descHeight}px`;
            firstItem.classList.add(style.active);
        });
    }, [])

    useEffect(() => {
        const handleResize = () => {
            const items = document.querySelectorAll(`.${style.accordionItem}.${style.active}`);
            items.forEach(item => {
                const content = (item.querySelector(`.${style.accordionContent}`));
                const descHeight = (item.querySelector(`.${style.description}`).offsetHeight);
                content.style.transition = `none`;
                content.style.height = `${descHeight}px`;
                setTimeout(() => {
                    content.style.transition = '';
                }, 100);
            });
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });


    const toggleAccordion = (itemId, e) => {
        const item = (e.target.closest(`.${style.accordionItem}`));
        const content = (e.target.closest(`.${style.accordionItem}`).querySelector(`.${style.accordionContent}`));
        const descHeight = (e.target.closest(`.${style.accordionItem}`).querySelector(`.${style.description}`).offsetHeight);
        const allItems = e.target.closest(`.intro-with-accordion`).querySelectorAll(`.${style.accordionItem}`);
        if (item.classList.contains(style.active)) {
            allItems.forEach(item => {
                const content = (item.querySelector(`.${style.accordionContent}`));
                item.classList.remove(style.active);
                content.style.height = 0;
            });
        } else {
            allItems.forEach(item => {
                const content = (item.querySelector(`.${style.accordionContent}`));
                item.classList.remove(style.active);
                content.style.height = 0;
            });
            content.style.height = `${descHeight}px`;
            item.classList.add(style.active);
        }
    };


    return (
        <>
            <section
                className={`intro-with-accordion ${pb} ${pt}`}
                id={data.id}
            >
                <div className={`container`}>
                    <Intro data={data.intro} />
                    <div className={`accordion_wrapper relative w-full flex flex-wrap pt-[50px] lg:mt-[50px] laptopmid:pt-[30px] laptop:pt-[30px] tablet:pt-[30px] md:pt-[0]  ${reverse == "true" ? "flex-row-reverse" : ""}  ${data.borderBottom == true ? style.borderBottom : ""}`}>
                        <div className={`col_two w-1/2 lg:w-full`}>
                            <div className={`w-full relative min-h-[543px] laptop-landscape:min-h-[500px] lg:min-h-[300px] lg:max-w-[400px] lg:mb-[40px] ${reverse == "true" ? " lg-up:ml-auto" : ""}`}>
                                <div className={`image-wrap ${style.image_wrap} flex justify-end absolute w-full max-w-[487px] h-[393px] left-0 top-[20px] laptopsmall:max-w-[380px] laptopsmall:h-[300px] tabletlarge:max-w-[340px] tabletlarge:h-[240px] lg:max-w-[270px] lg:h-[220px] lg:relative lg:top-auto lg:left-auto ${reverse == "true" ? "left-auto right-0 lg:justify-start lg:max-w-full" : ""}`}>
                                    <Image className={`w-full h-full object-cover  ${reverse == "true" ? "lg:max-w-[270px]" : ""}`} src={data.backwardImage} alt={"item.alt"} width={1000} height={1000} />
                                </div>
                                <div className={`image-wrap ${style.image_wrap} flex justify-end absolute w-full max-w-[487px] h-[393px] left-[127px] top-[150px] z-[2] laptopsmall:max-w-[380px] laptopsmall:h-[300px] tabletlarge:max-w-[340px] tabletlarge:h-[240px] lg:h-[220px] lg:top-auto lg:mt-[-150px] lg:relative ${reverse == "true" ? "left-auto right-[127px] lg:right-auto" : "lg:max-w-full lg:left-auto"}`}>
                                    <Image className={`w-full h-full object-cover lg:max-w-[270px]`} src={data.forewardImage} alt={"item.alt2"} width={1000} height={1000} />
                                </div>
                            </div>
                        </div>
                        <div className={`col_two w-[calc(50%-96px)] laptop-landscape:w-[calc(50%-20px)] tabletlarge:w-[calc(50%-50px)] lg:w-full ${reverse == "true" ? "mr-[96px] laptop-landscape:mr-[20px]  tabletlarge:mr-[50px] lg:mr-0" : "ml-[96px] laptop-landscape:ml-[20px] tabletlarge:ml-[50px] lg:ml-0"}`}>
                            <div className="accordion_wrap relative w-full lg-up:max-w-[600px]">
                                <div className={`accordion relative w-full`}>
                                    {data.accordionData.map((accordionItem) => (
                                        <AccordionItem
                                            key={accordionItem.id}
                                            id={accordionItem.id}
                                            heading={accordionItem.heading}
                                            paragraph={accordionItem.paragraph}
                                            toggleAccordion={toggleAccordion}
                                            reverse={reverse}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
