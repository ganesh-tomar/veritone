import { React, useEffect, useState, useRef } from 'react'
import Style from '../../styles/header/Header.module.css';
import { headerData } from "./headerData"
import Link from 'next/link';
import Button from '../button/Button';
import Image from 'next/image';
import Router, { useRouter } from 'next/router';

export default function MobileHeader() {
    const router = useRouter()

    const menuData = headerData
    const [leftWidth, setLeftWidth] = useState('');
    const [leftWidthDiv, setLeftWidthDiv] = useState('');
    const [headerHeight, setHeaderHeight] = useState(0);
    const [ActiveMobiileMenu, setActiveMobiileMenu] = useState("h");
    const [ActiveMobileSubMenu, setActiveMobileSubMenu] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [leftValue, setLeftValue] = useState(0);
    const [isSerachOpen, setSearchOpen] = useState(0);
    const [activeSubMenu, setActiveSubMenu] = useState();
    const [headerColor, setHeaderBg] = useState(0);
    const [winWidth, isWinWidth] = useState(0);
    const [scrollRemove, setScrollRemove] = useState(0);
    const [back, setBack] = useState();
    const [subBack, setSubBack] = useState();
    const [inputValue, setInputValue] = useState('');
    const [tabHeight, setTabHeight] = useState(); 
    const innerWrapRef = useRef(null);
   
    useEffect(() => {
        const mainSections = document.querySelector('main');

        mainSections.addEventListener('click', function () {
             setActiveMobiileMenu();
            setActiveMobileSubMenu();
            setSearchOpen(0)
        })
        const innerWrapNode = innerWrapRef.current;
        if (innerWrapNode) {
          const height = innerWrapNode.clientHeight;
          setTabHeight(height);
        }
    })

    const showMenuRes = (e, val) => {
        if (winWidth <= 1024) {
            e.preventDefault();
            e.stopPropagation()
            // if(scrollRemove != 1) {
                setActiveMobiileMenu(val);
                setActiveMobileSubMenu();
                setBack("")
                setSubBack("")
            // }
        }
    }
    const showSubManuRes = (e, val) => {
        if (winWidth <= 1024) {
            e.preventDefault()
            e.stopPropagation()
                setActiveMobileSubMenu(val);
                setTimeout(() => {
                    setLeftValue(1)
                }, [500])
                setBack("")
                setSubBack("")
        }
    }

  

    function backBtn(val) {
        if (winWidth <= 1024) {
            if(val == 'x') {
                setBack(val)
            } else {
                setSubBack(val)
                setTabHeight()
            }
            
        }
    }
    const toggleMenu = () => {
        
        setSearchOpen(0)
        setIsMenuOpen(!isMenuOpen);

        if(headerColor != 1) {
            setHeaderBg(1)
            document.querySelector('header .mainHeader').classList.add('bg-cosmos');
        }else {
            setHeaderBg(0)
            setActiveMobiileMenu();
            setActiveMobileSubMenu();
            document.querySelector('header .mainHeader').classList.remove('bg-cosmos')
        }
    };

    const subMenuProrperty =
    {
        top: `${headerHeight - 5}px`,
    }
    const bgColor = {
        'background-color': menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.bgColor
    }

    const searchClick = () => {
        setActiveMobiileMenu("h")
        setActiveMobileSubMenu()
        setIsMenuOpen(false)
        setSearchOpen(1)
    }
    const searchCrossBtn = () => {
        setSearchOpen(0)
    }

    // const searchData = (e) => {
    //     if(e.key !== "Enter") {
    //         setInputValue(inputValue + e.key);
    //     } else {
    //         e.preventDefault();
    //         router.push({
    //             ...router,
    //                 query: {
    //                     ...router.query,
    //                     s: inputValue
    //                 },
    //         }, undefined, 
    //         { shallow: true }, )
    //     }
    // }
    const [query, setQuery] = useState('');
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
          router.push({
            ...router,
            query: { 
                ...router.query,
                s: query }, 
          }, undefined,
          {shallow: true},
          );
        }
      };

    const searchClean = () => {
        setQuery('')
        delete router.query.s
        router.push(router, undefined, { shallow: true });
    }

    const tabBgColor = menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.bgColor

    const isLightningBg = menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.bgColor === 'bg-lightning';
    const textColorClass = isLightningBg ? 'text-cosmos' : 'text-white';
    const arrowClass = isLightningBg ? Style.blackRightArrow : Style.rightArrow;

    const BackgroundColor = `${textColorClass} ${arrowClass}`;

    const backBtnArrow = isLightningBg ? Style.backBlackBtn : Style.backBtntwo

    return (
        <div className="row flex items-center justify-between laptop-portrait:hidden xl-up:hidden">
            <div className="logo relative sm:w-[77px] mb-[20px] ipad:mb-0">
                <Link href="/" className='emptyLink'>.</Link>
                <Image src="/images/logo/logo.svg" width={148} height={28} alt="Logo" />
            </div>
            <nav className={`max-w-[655px] mainNavWrap w-full ipad:absolute ipad:top-[55px] sm:top-[41px] ipad:max-w-full ipad:p-[20px] ipad:h-[calc(100vh-250px)] sm:h-[calc(100vh-30px)] md:h-[calc(100vh-50px)] tablet:h-[calc(100vh-20px)] tabletlarge:h-[calc(100vh-50px)] tablet:pb-[100px] tabletlarge:pb-[60px] ipad:justify-between sm:justify-between sm:pb-[60px] ipad:flex-col transition-all duration-700 ease-in-out ipad:overflow-auto ipad:overflow-x-clip ipad:bg-cosmos ipad:flex  ${isMenuOpen ? 'ipad:left-[0%]' : 'ipad:left-[-100%]'} `}>
                <ul className='flex laptopsmall:justify-center ipad:flex-wrap ipad:pt-[60px]'>
                    {
                        menuData.map((item, index) => {
                            const submenu = item.subMainMenu.subMenu
                            var arra1 = menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.multiLink?.slice(0, 5)
                            var arra2 = menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.multiLink?.slice(5, 8)
                            var consService = menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.multiLink;
                            var consServiceTwo = menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.multiLinkTwo;
                            return (
                                <li key={index} className={`mr-[25px] mainNav laptopsmall:mr-[20px] last:mr-0 ipad:w-full ipad:mr-0 inline-block ipad:mb-[18px] pb-[25px] ipad:pb-0`}  >
                                    <Link href="#" className={`arrow main-nav text-[20px] pr-[18px] pl-[35px] sm:pr-[20px] ipad:text-[19px] relative laptop-portrait:pl-[22px] text-white ipad:pl-0 ${Style.dropDownArrow} ipad:font-[700] ${ActiveMobiileMenu === index ? `${Style.show}` : ''} `} datatype={`${index}`} onClick={(e) => showMenuRes(e, index)}>{item?.mainMenu}</Link>
                                    <div className={`${Style.subMenu} subMenu absolute transition-all duration-700 ease-in-out z-[9]  h-[622px] overflow-x-hidden laptop-portrait:h-[480px] phablet:h-full tablet:h-full ipad:h-full ipad:w-full laptopsmall:h-full sm:h-full ${ActiveMobiileMenu === index ? 'laptop-portrait:block laptop-portrait:opacity-100 laptop-portrait:visible xl-up:block xl-up:opacity-100 xl-up:visible abc' : 'laptop-portrait:hidden laptop-portrait:opacity-0 laptop-portrait:invisible xl-up:hidden xl-up:opacity-0 xl-up:invisible '} ${back !== "x" && ActiveMobiileMenu === index ? 'ipad:left-0 ipad:z-10' : 'ipad:left-[-100%]'} ipad:!top-0`} style={leftWidth == '' ? subMenuProrperty : subMenuProrperty}>
                                        <div className={`${Style.innerSubMenu} innerSubMenu relative inline-flex flex-nowrap ipad:h-full phablet:h-full tablet:tablet:h-full sm:h-full w-full h-full ipad:block`}>
                                            <div className={`${Style.subMenuLinks} subMenuLinks !bg-cosmos sm:mt-[-5px] pl-[36px] pr-[42px] pt-[50px] pb-[77px] tablet:pb-[120px] sm:pb-[120px] tablet:pt-[50px] laptopsmall:pt-[50px] h-full text-white flex flex-col justify-between sm:flex laptop-portrait:pb-[50px] laptopsmall:pl-[20px] ipad:pl-[20px] sm:pt-[50px] ipad:pt-[50px] sm:h-full phablet:[calc(100vh+100px)] tablet:h-full laptopsmall:h-[calc(100vh-100px)]`}>
                                                <div className="subMenuWrapper ">
                                                    <div className={`${Style.backBtn} backBtn relative cursor-pointer text-[20px] mb-[20px] ipad:mb-[25px] pl-[30px] hidden ipad:inline-block`} onClick={() => backBtn('x')}></div>
                                                    <h4 className='ipad:block hidden mb-[30px] ipad:text-[28px] ipad:mb-[28px]'>{item.subMainMenu.description}</h4>
                                                    <ul className=''>
                                                        {
                                                            submenu.map((subItem, i) => {
                                                                const multiLink = subItem?.multiLink;
                                                                return (
                                                                    <li key={i} className=' subMenuCheck pb-[10px] mb-[11px] ipad:mb-[7px] w-[calc(100%+42px)]' >
                                                                        <Link href="#" className={`text-white ${Style.rightArrow} relative pr-[28px] text-[22px] laptopsmall:text-[20px] ipad:text-[19px] font-[700]`} onClick={(e) => showSubManuRes(e, i)} >{subItem?.menu}</Link>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="btnWrap sm:mt-[160px]">
                                                    {
                                                        item.subMainMenu.buttonText ? 
                                                        <Button buttonText={item.subMainMenu.buttonText} url={'/'} buttonClass={`${item.subMainMenu.btnClass} smallDefaultBtn sm:w-full`} />
                                                        : ""
                                                    }
                                                    
                                                </div>
                                            </div>
                                            {menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.heading ?
                                                <div  className={`tabs ${Style.tabs} transition-all duration-700 ease-in-out ipad:left-[-100%] ${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu] ? 'laptop-portrait:block xl-up:block z-[9]' : 'laptop-portrait:hidden xl-up:hidden ipad:block z-0'} ${subBack !== "xx" && leftValue ? 'ipad:!left-0 opacity-[1]' : 'ipad:left-[-100%] z-0 bg-transparent opacity-[0]'} ${tabHeight < 450 ? 'sm:h-full' : 'sm:h-[calc(100%+200px)]'} ipad:absolute ipad:top-0 ipad:w-full tablet:h-full phablet:h-full laptopsmall:h-full`}>
                                                    <div className={`subMenuWrap ${Style.subMenuWrap} ${tabBgColor == 'bg-ember' ? Style.bgember : tabBgColor == 'bg-lightning' ? Style.bgLightning : tabBgColor == 'bg-riptide' ? Style.bgRiptide : tabBgColor == 'bg-ultraviolet' ? Style.bgultraviolet : ''} ipad:pb-[150px] sm:pb-0 h-full`}>
                                                        <div ref={innerWrapRef} className={`${Style.innerWrap} innerWrap  transition-all ease-in-out top-0 overflow-auto p-[20px] ${arra2 ? 'pr-[84px] laptopmid:pr-[20px]' : 'pr-[20px]'} pl-[55px] laptopmid:pl-[30px] laptopsmall:pl-[20px] laptopsmall:pr-[30px] ipad:pl-[20px] ipad:left-0 ipad:right-0 ipad:w-full pt-[48px] ipad:pt-[48px] ipad:pr-[20px] z-[9] ${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu] ? 'opacity-1 visible' : 'opacity-0 invisible'} ipad:relative`}>
                                                            <div className={`${backBtnArrow} backBtn relative cursor-pointer text-[20px] mb-[25px] pl-[30px] hidden ipad:inline-block `} onClick={() => backBtn('xx')}></div>
                                                            <div className="inroWrap max-w-[414px]">
                                                                <h3 className={` sm:text-[28px] font-[400] sm:max-w-[300px] ${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.heading}</h3>
                                                                <div className="btnWrap mt-[26px] flex ipad:hidden">
                                                                    <Button buttonText={`${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.btn1}`} url={'/'} buttonClass={`${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.btn1Class} xl-up:!text-[20px] mr-[25px]`} />
                                                                </div>
                                                            </div>
                                                            <div className="innerMenu pl-[3px] mt-[60px] ipad:mt-[16px] ipad:pl-0 laptopsmall:mt-[20px]">
                                                                { menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.multiLinkHeadingOne ?
                                                                  <div className="flex w-full justify-between sm:block sm:mt-[28px] ipad:max-w-[500px] sm:flex-wrap">
                                                                  <div className="colOne">
                                                                      <p className={`text-[20px] font-[700] mb-[10px]  ${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.multiLinkHeadingOne}</p>
                                                                      <ul className='mr-[44px] laptopsmall:mr-0 laptopsmall:pr-[12px] sm:mr-0 max-w-[250px] laptop-portrait:max-w-[200px] laptopsmall:max-w-[200px]'>
                                                                          {
                                                                              consService.map((link, j) => {
                                                                                  return (
                                                                                      <li key={j} className={`mb-[22px] ipad:mb-[18px] laptopsmall:mb-[10px] ${consService.length ? 'w-[220px] laptop-portrait:w-[160px]' : ''}`}>
                                                                                          <Link href={link.url ? link.url : "#"} className={` text-[22px] laptopsmall:text-[18px] ipad:text-[18px] font-[700] inline fit-content relative pr-[28px] ${BackgroundColor}`} >{link?.link}</Link>
                                                                                      </li>
                                                                                  )
                                                                              })
                                                                          }
                                                                      </ul>
                                                                  </div>
                                                                  
                                                                  <div className="colOne">
                                                                      <p className={`text-[20px] font-[700] mb-[10px] ${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.multiLinkHeadingTwo}</p>
                                                                      <ul className='max-w-[225px] laptop-portrait:max-w-[200px]'>
                                                                          {
                                                                              consServiceTwo.map((link, j) => {
                                                                                  return (
                                                                                      <li key={j} className={`mb-[22px] ipad:mb-[15px] laptopsmall:mb-[10px] ${consServiceTwo.length ? 'w-[250px] laptopsmall:w-[200px] laptop-portrait:w-[220px]' : ''}`}>
                                                                                          <Link href={link.url ? link.url : "#"} className={` text-[22px] laptopsmall:text-[18px] ipad:text-[18px] font-[700] inline fit-content relative pr-[28px] ${BackgroundColor}`}>{link?.link}</Link>
                                                                                      </li>
                                                                                  )
                                                                              })
                                                                          }
                                                                      </ul>
                                                                  </div>
                                                              </div> : 
                                                                    <div className="flex w-full justify-between sm:block sm:mt-[28px] ipad:max-w-[500px]">
                                                                        <h6 className={`text-[20px] mb-[22px] font-[700] uppercase ipad:hidden ${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.bgColor === 'bg-lightning' ? 'text-cosmos' : 'text-white'}`}>{menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.subMenuDescription}</h6>
                                                                        <ul className='mr-[44px] laptopsmall:mr-0 laptopsmall:pr-[12px] sm:mr-0'>
                                                                            {
                                                                                arra1.map((link, j) => {
                                                                                    return (
                                                                                        <li key={j} className={`mb-[22px] ipad:mb-[18px] laptopsmall:mb-[10px] ${arra2.length ? 'ipad:w-[255px]' : 'w-full'}  `}>
                                                                                            <Link href={link.url ?link.url: "#"} className={`text-[22px] laptopsmall:text-[20px] ipad:text-[19px] font-[700] inline ${BackgroundColor} relative pr-[28px]`}>{link?.link}</Link>
                                                                                        </li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                        <ul>
                                                                            {
                                                                                arra2.map((link, j) => {
                                                                                    return (
                                                                                        <li key={j} className='mb-[22px] ipad:mb-[15px] laptopsmall:mb-[10px]'>
                                                                                            <Link href={link.url ?link.url: "#"}  className={`text-[22px] laptopsmall:text-[20px] ipad:text-[19px] font-[700] inline ${BackgroundColor} relative pr-[28px]`}>{link?.link}</Link>
                                                                                        </li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className="btnWrap mt-[22px] flex xl-up:hidden laptop-portrait:hidden sm:flex-wrap sm:flex-col-reverse sm:mt-[100px] ipad:absolute sm:relative ipad:bottom-[50px] sm:bottom-[50px] ipad:left-0 phablet:relative phablet:bottom-0 tablet:relative tablet:bottom-0 sm:w-full ipad:px-[20px]" >
                                                            <Button buttonText={`${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.btn1}`} url={'/'} buttonClass={`${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.btn1Class} xl-up:!text-[20px] mr-[25px] sm:mr-0 sm:w-full sm:mt-[20px]`} />
                                                            <Button buttonText={`${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.btn2}`} url={'/'} buttonClass={`${menuData[ActiveMobiileMenu]?.subMainMenu?.subMenu[ActiveMobileSubMenu]?.btn2Class} ipad:!hidden xl-up:!text-[20px] mr-[30px] sm:mr-0 sm:w-full sm:mt-0`} />
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                : ''}
                                            {/* <div className="btnWrap">
                                        <Button buttonText={'Explore'} url={'/'} buttonClass={'default smallDefaultBtn sm:w-full'} />
                                    </div> */}
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={`resBtnWrap ${Style.resBtnWrap} laptop-portrait:hidden xl-up:hidden`}>
                    <Button buttonText={'Sign in'} url={'/'} buttonClass={'transparent smallWhiteBtn sm:w-full'} />
                    <Button buttonText={'Get started'} url={'/'} buttonClass={'default smallWhiteBtn ml-[20px] sm:w-full ipad:mt-[28px] sm:ml-0'} />
                </div>
            </nav>
            <div className="btnOuter flex items-center w-full justify-end max-w-fit pb-[20px] ipad:pb-[14px] ipad:flex-wrap ipad:absolute ipad:bottom-[80px] ipad:left-0 ipad:max-w-full">
                <div className="searchWrap mr-[22px] ipad:hidden cursor-pointer" onClick={() => searchClick()}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 16L13.0834 13.0833M15.1667 8.08333C15.1667 11.9954 11.9954 15.1667 8.08333 15.1667C4.17132 15.1667 1 11.9954 1 8.08333C1 4.17132 4.17132 1 8.08333 1C11.9954 1 15.1667 4.17132 15.1667 8.08333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className={`searchForm ${Style.searchForm} absolute left-[50%] w-full  translate-x-[-50%] px-[20px] max-w-[1252px] mx-[auto] overflow-x-auto transition-all rounded-b-[4px] duration-300 ease-in-out  ${isSerachOpen ? 'top-[86px] ipad:top-[92px]' : 'top-[-140%] ipad:top-[-82px]'}`}>
                    <div className="searchWrapper relative bg-cosmos py-[30px] px-[40px]">
                        <div className="crossBtn absolute top-[5px] right-[10px] w-[20px] h-[20px] sm:right-[20px] cursor-pointer" onClick={() => searchCrossBtn()}>
                            <Image src="/images/icons/cross.svg" width={24} height={24} alt='Cross'></Image>
                        </div>
                        <form action="" autoComplete="off">
                            <label htmlFor="search" className='text-[0]'>.</label>
                            <input type="text" id="search" className='w-full rounded-[4px] p-[10px] py-[5px] outline-none pr-[30px]' placeholder="Search"  value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleSearch}/>
                            <div className={`searchCross ${Style.searchCross} relative cursor-pointer ${query ? 'opacity-1' : 'opacity-0'}`}  onClick={() => searchClean()}></div>
                        </form>
                    </div>

                </div>
                <Link href="#" className='text-white text-[20px] ipad:hidden'>Sign in</Link>
                <div className="btnWrap ml-[32px] ipad:hidden">
                    <Button buttonText={'Get started'} url={'/'} buttonClass={'btn-white smallWhiteBtn '} />
                </div>
            </div>
            <div className="searchWrap mr-[22px] absolute top-[50%] right-[70px] translate-y-[-50%] sm:right-[42px] cursor-pointer sm:mr-[11px] laptop-portrait:hidden xl-up:hidden" onClick={() => searchClick()}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16L13.0834 13.0833M15.1667 8.08333C15.1667 11.9954 11.9954 15.1667 8.08333 15.1667C4.17132 15.1667 1 11.9954 1 8.08333C1 4.17132 4.17132 1 8.08333 1C11.9954 1 15.1667 4.17132 15.1667 8.08333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <button aria-label="first link" className={`menu-toggle w-9 h-[25px] relative transition-transform duration-500 cursor-pointer sm:w-[22px] sm:h-[12px] laptop-portrait:hidden xl-up:hidden ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                <ul>
                    <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? 'menu-open transform rotate-[135deg] top-3 sm:top-[6px]' : 'top-0'}`}></li>
                    <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? 'menu-open opacity-0 left-[-60px] ' : 'top-[11px] left-0 sm:top-[6px]'}`}></li>
                    <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? 'menu-open transform rotate-[-135deg] top-3 sm:top-[6px]' : 'top-[22px] sm:top-[12px]'}`}></li>
                </ul>
            </button>
        </div>
    )
}
