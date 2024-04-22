import { React, useEffect, useState, useRef } from 'react'
import Style from '../../styles/header/Header.module.css';
import Link from 'next/link';
import Button from '../button/Button';

export default function TabHeader({ data, dataIndex }) {

    return (
        data.map((item, index) => {
            var consService = item?.multiLink;
            var consServiceTwo = item?.multiLinkTwo;
            const isLightningBg = item?.bgColor === 'bg-lightning';
            const backBtnArrow = isLightningBg ? Style.backBlackBtn : Style.backBtntwo;
            var arra1 = item?.multiLink?.slice(0, 4)
            var arra2 = item?.multiLink?.slice(4, 8)
            const textColorClass = isLightningBg ? 'text-cosmos' : 'text-white';
            const arrowClass = isLightningBg ? Style.blackRightArrow : Style.rightArrow;
            const BackgroundColor = `${textColorClass} ${arrowClass}`;
            return (
                <div key={index} className={`tabs ${Style.tabs} transition-all duration-700 ease-in-out ipad:left-[-100%] ipad:absolute ipad:top-0 ipad:w-full tablet:h-full phablet:h-full ${dataIndex === index ? 'laptop-portrait:block xl-up:block z-[9]' : 'laptop-portrait:hidden xl-up:hidden ipad:block z-0'}`}>
                    <div className={`subMenuWrap ${Style.subMenuWrap} ${item.bgColor == 'bg-ember' ? Style.bgember : item?.bgColor == 'bg-lightning' ? Style.bgLightning : item?.bgColor == 'bg-riptideWeb' ? Style.bgRiptideWeb : item?.bgColor == 'bg-ultraviolet' ? Style.bgultraviolet : ''} ipad:pb-[150px] sm:pb-0 h-full`}>
                        <div className={`${Style.innerWrap} innerWrap  transition-all ease-in-out top-0 overflow-auto p-[20px] ${arra2 ? 'pr-[55px] laptopmid:pr-[60px]' : 'pr-[20px]'}  pl-[55px] desktopMid:pl-[32px] laptopmid:pl-[30px] laptopsmall:pl-[20px] laptopsmall:pr-[40px] ipad:pl-[20px] ipad:left-0 ipad:right-0 ipad:w-full pt-[48px] ipad:pt-[48px] ipad:pr-[20px] z-[9] relative`}>
                            <div className={`${backBtnArrow} backBtn relative cursor-pointer text-[20px] mb-[25px] pl-[30px] hidden ipad:inline-block `} onClick={() => backBtn('xx')}></div>
                            <div className="inroWrap max-w-[414px]">
                                <h3 className={` sm:text-[28px] font-[400] sm:max-w-[300px] ${item.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{item?.heading}</h3>
                                {
                                    item?.btn1Url != '#' ? 
                                        <div className="btnWrap mt-[26px] flex ipad:hidden">
                                            <Button buttonText={`${item?.btn1}`} url={item?.btn1Url ? item?.btn1Url : '#'} buttonClass={`${item?.btn1Class} xl-up:!text-[20px] mr-[25px]`} />
                                        </div>
                                        : ''
                                }
                            </div>
                            <div className="innerMenu pl-[3px] mt-[60px] ipad:mt-[16px] ipad:pl-0 laptopsmall:mt-[20px]">
                                <h6 className={`text-[20px] mb-[22px] font-[700] uppercase ipad:hidden ${item?.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{item?.subMenuDescription}</h6>
                                {item?.multiLinkHeadingOne ?
                                    <div className="flex w-full justify-between sm:block sm:mt-[28px] ipad:max-w-[500px] sm:flex-wrap xxl-up:max-w-full">
                                        <div className="colOne">
                                            <p className={`text-[20px] font-[700] mb-[10px]  ${item?.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{item?.multiLinkHeadingOne}</p>
                                            <ul className='mr-[60px] laptopsmall:mr-0 laptopsmall:pr-[12px] sm:mr-0 max-w-[250px] laptop-portrait:max-w-[200px] laptopsmall:max-w-[200px]'>
                                                {
                                                    consService.map((link, j) => {
                                                        return (
                                                            <li key={j} className={`mb-[22px] ipad:mb-[18px] laptopsmall:mb-[10px] ${consService.length ? 'w-[220px] laptop-portrait:w-[160px]' : ''}`}>
                                                                <Link href={link.url ? link.url : "#"} className={` text-[22px] laptopsmall:text-[18px] ipad:text-[18px] font-[700] inline fit-content relative pr-0 ${BackgroundColor}`} >{link?.link}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>

                                        <div className="colOne">
                                            <p className={`text-[20px] font-[700] mb-[10px] ${item?.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{item?.multiLinkHeadingTwo}</p>
                                            <ul className='max-w-[250px] laptop-portrait:max-w-full'>
                                                {
                                                    consServiceTwo.map((link, j) => {
                                                        return (
                                                            <li key={j} className={`mb-[22px] ipad:mb-[15px] laptopsmall:mb-[10px] ${consServiceTwo.length ? 'w-[250px] laptopsmall:w-[200px] laptop-portrait:w-[220px]' : ''}`}>
                                                                <Link href={link.url ? link.url : "#"} className={` text-[22px] laptopsmall:text-[18px] ipad:text-[18px] font-[700] inline fit-content relative pr-0 ${BackgroundColor}`}>{link?.link}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div> :
                                    <div className="flex w-full justify-between sm:block sm:mt-[28px] ipad:max-w-[500px]">
                                        <ul className={`mr-[60px] laptopsmall:pr-[12px] sm:mr-0 `}>
                                            {
                                                arra1?.map((link, j) => {
                                                    return (
                                                        <li key={j} className={`mb-[22px] ipad:mb-[18px] laptopsmall:mb-[10px]`}>
                                                            <Link href={link.url ? link.url : "#"} className={`text-[22px] laptopsmall:text-[20px] ipad:text-[19px] font-[700] inline ${BackgroundColor} relative pr-0`}>{link?.link}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <ul className={`${arra2?.length ? 'laptop-portrait:max-w-[275px] laptopmid:max-w-[270px] desktopMid:max-w-[270px]' : ''} `}>
                                            {
                                                arra2?.map((link, j) => {
                                                    return (
                                                        <li key={j} className='mb-[22px] ipad:mb-[15px] laptopsmall:mb-[10px]'>
                                                            <Link href={link.url ? link.url : "#"} className={`text-[22px] laptopsmall:text-[20px] ipad:text-[19px] font-[700] inline ${BackgroundColor} relative pr-0`}>{link?.link}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            )
        })
    )
}
