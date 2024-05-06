import { React, useRef } from 'react'
import Link from 'next/link'
import Style from '../../styles/header/Header.module.css';
import Button from '../button/Button';

export default function MobileTabHeader({data, dataIndex, reverseFunction, leftValue, tabHeight}) {
  const innerRef = useRef(null);

  function backBtnTwo(val) {
    reverseFunction(val)
  }
  
  return (
    data?.map((item, index) => {
        const arra1 = item?.multiLink?.slice(0, 5);
        const arra2 = item?.multiLink?.slice(5, 8);
        const consService = item?.multiLink;
        const consServiceTwo = item?.multiLinkTwo;
        const tabBgColor = item?.bgColor

        const isLightningBg = item?.bgColor === 'bg-lightning';
        const textColorClass = isLightningBg ? 'text-cosmos' : 'text-white';
        const arrowClass = isLightningBg ? Style.blackRightArrow : Style.rightArrow;
        const BackgroundColor = `${textColorClass} ${arrowClass}`;
        const backBtnArrow = isLightningBg ? Style.backBlackBtn : Style.backBtntwo
        return (
          <div key={index} className={`tabs ${Style.tabs} transition-all duration-700 ease-in-out ${dataIndex === index ? 'laptop-portrait:block xl-up:block z-[9] ipad:left-[0]' : 'laptop-portrait:hidden xl-up:hidden ipad:hidden z-0 ipad:!left-[-100%]'} ${leftValue ? 'ipad:!left-0 !opacity-[1]' : 'ipad:!left-[-100%] z-0 bg-transparent opacity-[0]'} ${tabHeight < 555 ? 'sm:h-full' : 'sm:h-[calc(100%+150px)]'} ipad:absolute ipad:top-0 ipad:w-full tablet:h-full tabletlarge:h-full phablet:h-full laptopsmall:h-full`}>
            <div className={`subMenuWrap ${Style.subMenuWrap} ${tabBgColor == 'bg-ember' ? Style.bgember : tabBgColor == 'bg-lightning' ? Style.bgLightning : tabBgColor == 'bg-riptideWeb' ? Style.bgRiptideWeb : tabBgColor == 'bg-ultraviolet' ? Style.bgultraviolet : ''} ipad:pb-[150px] sm:pb-0 h-full`}>
              <div ref={innerRef} className={` ${dataIndex === index ? "currentActiveTab" : ""}  ${Style.innerWrap} innerWrap ${dataIndex === index ? 'show' : ''} transition-all ease-in-out top-0 overflow-auto p-[20px] ${arra2 ? 'pr-[84px] laptopmid:pr-[20px]' : 'pr-[20px]'} pl-[55px] laptopmid:pl-[30px] laptopsmall:pl-[20px] laptopsmall:pr-[30px] ipad:pl-[20px] ipad:left-0 ipad:right-0 ipad:w-full pt-[48px] ipad:pt-[48px] ipad:pr-[20px] z-[9] ipad:relative`}>
                <div className={`${backBtnArrow} backBtn relative cursor-pointer text-[20px] mb-[25px] pl-[30px] hidden ipad:inline-block `} onClick={() => backBtnTwo('xx')}></div>
                <div className="inroWrap max-w-[414px]">
                  <h3 className={` sm:text-[28px] font-[400] sm:max-w-[300px] ${item?.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{item?.heading}</h3>
                  <div className="btnWrap mt-[26px] flex ipad:hidden">
                    {/* <Button buttonText={`${item?.btn1}`} url={item?.btn1Url ? item?.btn1Url : '#'} buttonClass={`${item?.btn1Class} xl-up:!text-[20px] mr-[25px]`} /> */}
                  </div>
                </div>
                <div className="innerMenu pl-[3px] mt-[60px] ipad:mt-[16px] ipad:pl-0 laptopsmall:mt-[20px]">
                  {item?.multiLinkHeadingOne ?
                    <div className="flex w-full justify-between sm:block sm:mt-[28px] ipad:max-w-[500px] sm:flex-wrap">
                      <div className="colOne">
                        <p className={`text-[20px] font-[700] mb-[10px]  ${item?.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{item?.multiLinkHeadingOne}</p>
                        <ul className='mr-[44px] laptopsmall:mr-0 laptopsmall:pr-[12px] sm:mr-0 max-w-[250px] laptop-portrait:max-w-[200px] laptopsmall:max-w-[200px]'>
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
                        <ul className='max-w-[225px] laptop-portrait:max-w-[200px]'>
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
                      <h6 className={`text-[20px] mb-[22px] font-[700] uppercase ipad:hidden ${item?.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{item?.subMenuDescription}</h6>
                      <ul className='mr-[44px] laptopsmall:mr-0 laptopsmall:pr-[60px] sm:mr-0'>
                        {
                          arra1?.map((link, j) => {
                            return (
                              <li key={j} className={`mb-[22px] ipad:mb-[18px] laptopsmall:mb-[10px] ${arra2.length ? 'ipad:w-[255px]' : 'w-full'}  `}>
                                <Link href={link.url ? link.url : "#"} className={`text-[22px] laptopsmall:text-[20px] ipad:text-[19px] font-[700] inline ${BackgroundColor} relative pr-0`}>{link?.link}</Link>
                              </li>
                            )
                          })
                        }
                      </ul>
                      <ul>
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
              {
                item?.btn1Url != '#' ?
                  <div className="btnWrap mt-[22px] flex xl-up:hidden laptop-portrait:hidden sm:flex-wrap sm:flex-col-reverse sm:mt-[100px] ipad:absolute sm:relative ipad:bottom-[50px] sm:bottom-[65px] ipad:left-0 phablet:relative phablet:bottom-0 tablet:relative tablet:bottom-0 sm:w-full ipad:px-[20px]" >
                    <Button buttonText={`${item?.btn1}`} url={item?.btn1Url ? item?.btn1Url : '#'} buttonClass={`${item?.btn1Class} xl-up:!text-[20px] mr-[25px] sm:mr-0 sm:w-full sm:mt-[20px]`} />
                    <Button buttonText={`${item?.btn2}`} url={item?.btn1Url ? item?.btn1Url : '#'} buttonClass={`${item?.btn2Class} ipad:!hidden xl-up:!text-[20px] mr-[30px] sm:mr-0 sm:w-full sm:mt-0`} />
                  </div> : ''}
            </div>
          </div>
        )
    })
  )
}
