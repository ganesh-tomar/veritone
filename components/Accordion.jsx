import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from '../styles/accordion.module.css'
import Button from "./button/Button";

const AccordionItem = ({ id, heading, paragraph, icon, tag1, tag2, btnText, btnLink, toggleAccordion }) => {
    // console.log(tag1);
    return (
        <div
            className={`${style.accordionItem} wrap w-full cursor-pointer pl-[48px] lg:pl-0`}
            onClick={(e) => toggleAccordion(id, e)}
        >
            <div className={`accordionHead flex lg:flex-wrap`}>
                <div className="iconWrap max-w-[50px] max-h-[50px] w-full h-full mt-[40px] lg:max-w-[44px] lg:max-h-[44px]">
                    <Image className={`w-full object-contain h-[50px] lg:h-[44px]`} src={icon} alt={`icon`} width={120} height={120} />
                </div>
                <div className={`${style.accordionHead} head w-[calc(100%-80px)] py-[30px] lg:pt-[16px] ml-[30px] pr-[260px] lg:pr-0 lg:w-full lg:ml-0`}>
                    <h4 className="lg:pr-[60px]">
                        {heading}
                    </h4>
                    <ul className={`flex pt-[10px] items-center md:flex-wrap`}>
                        <li className={`${style.category} pb-[3px] relative mr-[40px] text-[20px] md:text-[15px] md:mr-[25px] xxs:text-[13px] font-bold uppercase`}>{tag1}</li>
                        <li className={`${style.category} pb-[3px] relative text-[20px] font-bold md:text-[15px] xxs:text-[13px] uppercase`}>{tag2}</li>
                    </ul>
                    <div
                        className={`${style.accordionContent} relative w-full overflow-hidden`}
                    >
                        <div className={`${style.description}`}>
                            <p className="pt-[30px]">
                                {paragraph}
                            </p>
                            {btnText && (
                                <div className="btn-wrap pt-[30px]">
                                    <Button buttonClass={`text-link-black sm:mt-[20px]`} buttonText={btnText} url={btnLink} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

const Accordion = ({ data }) => {
    useEffect(() => {
        const sections = document.querySelectorAll(`section.accordion`);
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
            const descHeight = document.querySelector(`.${style.accordionItem}.${style.active}`).querySelector(`.${style.description}`).offsetHeight;
            const content = document.querySelector(`.${style.accordionItem}.${style.active}`).querySelector(`.${style.accordionContent}`);
            // console.log(descHeight);
            // console.log(content);
            // console.log(descHeight, 'new');
            content.style.transition = `none`;
            content.style.height = `${descHeight}px`;
            setTimeout(() => {
                content.style.transition = '';
            }, 200);
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
        const allItems = e.target.closest(`section.accordion`).querySelectorAll(`.${style.accordionItem}`);
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
        <section className={`accordion`}>
            <div className={`container`}>
                <div className="accordion_wrapper relative w-full flex flex-wrap">
                    <div className="w-full">
                        <div className="accordion_wrap relative w-full">
                            <h2 className="mb-[48px]">{data.title}</h2>
                            <div className={`relative w-full`}>
                                {data?.items?.map((accordionItem) => (
                                    <AccordionItem
                                        key={accordionItem.id}
                                        id={accordionItem.id}
                                        heading={accordionItem.heading}
                                        paragraph={accordionItem.paragraph}
                                        icon={accordionItem.icon}
                                        tag1={accordionItem.tag1}
                                        tag2={accordionItem.tag2}
                                        btnText={accordionItem.btnText}
                                        btnLink={accordionItem.btnLink}
                                        toggleAccordion={toggleAccordion}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;
