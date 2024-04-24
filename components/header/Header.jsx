import { React, useEffect, useState, useRef } from 'react'
import Style from '../../styles/header/Header.module.css';
import Link from 'next/link';
import Button from '../button/Button';
import Image from 'next/image';
import { headerData } from "./headerData"
import MobileHeader from './MobileHeader'
import Router, { useRouter } from 'next/router';
import TabHeader from './TabHeader';

export default function Header() {
    const router = useRouter()
    const menuData = headerData

    const [leftWidth, setLeftWidth] = useState('');
    // const [leftWidthDiv, setLeftWidthDiv] = useState('');
    const containerRef = useRef(null);
    const mainDivRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    // const [menuHeaderWidth, setMenuHeaderWidth] = useState(0);
    const [activeMenu, setActiveMenu] = useState("h");
    const [activeSubMenu, setActiveSubMenu] = useState();
    const [winWidth, isWinWidth] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSerachOpen, setSearchOpen] = useState(0);
    const [headerColor, setHeaderBg] = useState(0);
    const [scrollRemove, setScrollRemove] = useState(0);
    const [activeArrow, setActiveArrow] = useState(0);
    const [hoverBackground, setBackground] = useState(0);

    useEffect(() => {
        const headerElement = document.querySelector('header .mainHeader');
        const mainSections = document.querySelector('main');
        const logoCLick = document.querySelector('.logo');

        isWinWidth(window.innerWidth);
        if (headerElement) {
            const height = headerElement.offsetHeight;
            setHeaderHeight(height);
        }
        mainSections.addEventListener('click', function () {
            setSearchOpen(0)
        })

        window.addEventListener('resize', function () {
            setActiveMenu("h")
            setActiveSubMenu()
            isWinWidth(window.innerWidth);
        })

        logoCLick.addEventListener('click', function () {
            setActiveMenu("h")
            setActiveSubMenu()
            setSearchOpen(0)
        })

        const handleScroll = () => {
            if (window.scrollY > 5) {
                setHeaderBg(1)
            } else {
                setHeaderBg(0)
            }
        }

        setTimeout(() => {
            window.addEventListener('scroll', handleScroll);
        }, 500);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
    useEffect(() => {
        if (window.scrollY > 5) {
            setHeaderBg(1)
        } else {
            setHeaderBg(0)
        }
    })
    const showManu = (e, val) => {
        if (winWidth > 1024) {
            e.preventDefault()
            if (activeMenu != val) {
                setActiveMenu(val)
                setActiveSubMenu()
                setSearchOpen(0)
                setBackground(1)
            }
        }
    }
    const hideMenu = (e, val) => {
        if (winWidth > 1024) {
            setActiveMenu("h")
            setActiveSubMenu()
            setSearchOpen(0)
            setBackground(0)
        }
    }
    const showSubManu = (e, value) => {
        if (winWidth > 1024) {
            e.preventDefault()

            setActiveSubMenu(value);

            if (activeSubMenu) {
                const tabs = document.querySelector('.header .mainHeader .subMenu .subMenuLinks .tabs');
            }
        }
    }

    const subMenuProrperty =
    {
        top: `${headerHeight - 6}px`,
    }
    const searchClick = () => {
        setActiveMenu("h")
        setActiveSubMenu()
        setIsMenuOpen(false)
        setSearchOpen(1)
    }
    const searchCrossBtn = () => {
        setSearchOpen(0)
    }
    const [query, setQuery] = useState('');
    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            window.location.href = "https://www.veritone.com/?s=" + query
        }
    };

    const searchClean = () => {
        setQuery('')
        delete router.query.s
        router.push(router, undefined, { shallow: true });
    }
    return (
        <header className=''>
            <div ref={mainDivRef} className={`${Style.mainHeader} mainHeader ${headerColor ? 'bg-cosmos ipad:bg-cosmos' : 'bg-transparent ipad:bg-cosmos'} ${hoverBackground ? 'bg-cosmos' : 'bg-transparent'} transition-all ease-in-out duration-500 fixed z-[99] top-0 left-[50%] translate-x-[-50%] w-full`}>
                <div className="overflow-x-clip pt-[20px] ipad:py-[14px] relative">
                    <div ref={containerRef} className={`${Style.container}`} >
                        {
                            winWidth > 1024 ? <div className="row flex items-center justify-between ipad:hidden">
                                <div className="logo relative sm:w-[77px] mb-[20px]">
                                    <Link href="/" className='emptyLink'>.</Link>
                                    <Image src="/images/logo/logo.svg" width={148} quality={100} height={28} alt="Logo" />
                                </div>
                                <nav className={`max-w-[655px] mainNavWrap w-full transition-all duration-700 ease-in-out`}>
                                    <ul className='flex laptopsmall:justify-center'>
                                        {
                                            menuData.map((item, index) => {
                                                const submenu = item.subMainMenu.subMenu
                                                return (
                                                    <li key={index} className={`mr-[25px] mainNav laptopsmall:mr-[20px] last:mr-0 inline-block pb-[25px]`} onMouseEnter={(e) => showManu(e, index)} onMouseLeave={(e) => hideMenu(e, index)} >
                                                        <Link href="#" className={`arrow main-nav text-[20px] pr-[18px] pl-[35px] relative laptop-portrait:pl-[22px] text-white ${Style.dropDownArrow} ${activeMenu === index ? `${Style.show}` : ''} `} datatype={`${index}`} >{item?.mainMenu}</Link>
                                                        <div className={`${Style.subMenu}  subMenu absolute transition-all duration-700 ease-in-out z-[9]   ${item.subMainMenu.btnClass ? '' : 'h-auto xl-up:w-[360px]'} overflow-x-hidden phablet:h-auto tablet:h-full ipad:h-full ipad:w-full ${activeMenu === index ? 'laptop-portrait:block laptop-portrait:opacity-100 laptop-portrait:visible xl-up:block xl-up:opacity-100 xl-up:visible abc' : 'laptop-portrait:hidden laptop-portrait:opacity-0 laptop-portrait:invisible xl-up:hidden xl-up:opacity-0 xl-up:invisible '} `} style={leftWidth == '' ? subMenuProrperty : subMenuProrperty}>
                                                            <div className="innerSubMenu relative inline-flex flex-nowrap w-full">
                                                                <div className={`${Style.subMenuLinks} subMenuLinks  bg-cosmos pl-[36px] pr-[42px] pt-[50px] pb-[77px] ${item.subMainMenu.btnClass ? '' : 'w-full pb-[36px]'} laptopsmall:pt-[50px] text-white flex flex-col justify-between laptop-portrait:pb-[50px] laptopsmall:pl-[20px]`}>
                                                                    <div className="subMenuWrapper ">
                                                                        <h4 className='ipad:block hidden mb-[30px]'>{item.subMainMenu.description}</h4>
                                                                        <ul className=''>
                                                                            {
                                                                                submenu.map((subItem, i) => {
                                                                                    // const multiLink = subItem?.multiLink;
                                                                                    return (
                                                                                        <li key={i} className=' subMenuCheck pb-[10px] mb-[11px] w-[270px]' onMouseEnter={(e) => showSubManu(e, i)} >
                                                                                            <Link href={`${subItem.url}`} className={`text-white ${Style.rightArrow} relative pr-0 text-[22px] laptopsmall:text-[20px] font-[700] ${activeArrow ? Style.arrowActive : ''}`} >{subItem?.menu}</Link>
                                                                                        </li>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <div className="btnWrap">
                                                                        {
                                                                            item.subMainMenu.buttonUrl ?
                                                                                <Button buttonText={item.subMainMenu.buttonText} url={item.subMainMenu.buttonUrl} buttonClass={`${item.subMainMenu.btnClass} smallDefaultBtn sm:w-full`} />
                                                                                : ""
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <TabHeader data={submenu} dataIndex={activeSubMenu} />
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className={`resBtnWrap ${Style.resBtnWrap} laptop-portrait:hidden xl-up:hidden `}>
                                        <Button buttonText={'Sign in'} target={true} url={'https://login.veritone.com/'} buttonClass={'transparent smallWhiteBtn'} />
                                        <Button buttonText={'Get started'} target={true} url={'https://unlock.veritone.com/corp-contact-us'} buttonClass={'default smallWhiteBtn ml-[20px]'} />
                                    </div>
                                </nav>
                                <div className="btnOuter flex items-center w-full justify-end max-w-fit pb-[20px]">
                                    <div className="searchWrap mr-[22px] ipad:hidden cursor-pointer" onClick={() => searchClick()}>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 16L13.0834 13.0833M15.1667 8.08333C15.1667 11.9954 11.9954 15.1667 8.08333 15.1667C4.17132 15.1667 1 11.9954 1 8.08333C1 4.17132 4.17132 1 8.08333 1C11.9954 1 15.1667 4.17132 15.1667 8.08333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={`searchForm ${Style.searchForm} absolute left-[50%] w-full translate-x-[-50%] px-[20px] max-w-[1252px] mx-[auto] overflow-x-auto transition-all rounded-b-[4px] duration-300 ease-in-out  ${isSerachOpen ? 'top-[86px] ipad:top-[92px]' : 'top-[-140%] ipad:top-[-82px]'}`}>
                                        <div className="searchWrapper relative bg-cosmos py-[30px] px-[40px]">
                                            <div className="crossBtn absolute top-[5px] right-[10px] w-[20px] h-[20px] sm:right-[20px] cursor-pointer" onClick={() => searchCrossBtn()}>
                                                <Image src="/images/icons/cross.svg" width={24} quality={100} height={24} alt='Cross'></Image>
                                            </div>
                                            <form action="" autoComplete="off">
                                                <label htmlFor="search" className='text-[0]'>.</label>
                                                <input type="text" id="search" className='relative w-full rounded-[4px] p-[10px] pt-[5px] pb-[6px] outline-none pr-[30px]' placeholder="Search"
                                                    value={query}
                                                    onChange={(e) => setQuery(e.target.value)}
                                                    onKeyDown={handleSearch}
                                                />
                                                <div className={`searchCross ${Style.searchCross} relative cursor-pointer ${query ? 'opacity-1' : 'opacity-0'}`} onClick={() => searchClean()}></div>
                                            </form>
                                        </div>

                                    </div>
                                    <Link href="https://login.veritone.com" target='_blank' className='text-white text-[20px] ipad:hidden'>Sign in</Link>
                                    <div className="btnWrap ml-[32px] ipad:hidden">
                                        <Button buttonText={'Get started'} target={true} url={'https://unlock.veritone.com/corp-contact-us'} buttonClass={'btn-white smallWhiteBtn '} />
                                    </div>
                                </div>
                                <div className="searchWrap mr-[22px] absolute top-[50%] right-[70px] translate-y-[-50%] sm:right-[42px] cursor-pointer sm:mr-[11px] laptop-portrait:hidden xl-up:hidden" onClick={() => searchClick()}>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 16L13.0834 13.0833M15.1667 8.08333C15.1667 11.9954 11.9954 15.1667 8.08333 15.1667C4.17132 15.1667 1 11.9954 1 8.08333C1 4.17132 4.17132 1 8.08333 1C11.9954 1 15.1667 4.17132 15.1667 8.08333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <button aria-label="first link" className={`menu-toggle w-9 h-[25px] relative transition-transform duration-500 cursor-pointer sm:w-[22px] sm:h-[12px] laptop-portrait:hidden xl-up:hidden ${isMenuOpen ? 'menu-open' : ''}`} >
                                    <ul>
                                        <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? 'menu-open transform rotate-[135deg] top-3 sm:top-[6px]' : 'top-0'}`}></li>
                                        <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? 'menu-open opacity-0 left-[-60px] ' : 'top-[11px] left-0 sm:top-[6px]'}`}></li>
                                        <li className={`h-0.5 absolute w-full transition-all duration-300 ease-in-out bg-white ${isMenuOpen ? 'menu-open transform rotate-[-135deg] top-3 sm:top-[6px]' : 'top-[22px] sm:top-[12px]'}`}></li>
                                    </ul>
                                </button>
                            </div> : <MobileHeader />
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
