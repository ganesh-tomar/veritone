import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/StickyNav.module.css'
const StickyNav = (props) => {
  console.log(props.themeColor.themeColor);
  let bladeData = props.data;
  const [activeSection, setActiveSection] = useState('');
  const [winWidth, isWinWidth] = useState(0);
  const [sectionLeft, setsectionLeft] = useState(6)
  const [screenHeight, setScreenHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [crossedSection, setcrossedSection] = useState([])
  useEffect(() => {
    const handleResize = () => {
      isWinWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      // const section = document.querySelector('.intro-with-accordion');
      // console.log(section.offsetX);
      // handleScroll()
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const [distanceFromTop, setDistanceFromTop] = useState(0);
  const elementRef = useRef(null);
  // const Stickytop = {
  //   top: `${scrollValue - 2}px`,
  //   borderTop: `1px solid black`
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const viewportHeight = window.innerHeight;
  //     const viewportMidpoint = viewportHeight / 2;
  //     const sections = document.querySelectorAll('.intro-with-accordion');
  //     const firstSectionBounding = sections[0].getBoundingClientRect();
  //     const fixedList = document.querySelector(`.${style.fixedList}`)
  //     const lastSectionBounding = sections[sections.length - 1].getBoundingClientRect();
  //     if (firstSectionBounding.top < viewportMidpoint) {
  //       fixedList.classList.remove('opacity-0', 'invisible');
  //     } else {
  //       fixedList.classList.add('opacity-0', 'invisible');
  //     }
  //     // if (lastSectionBounding.bottom < viewportMidpoint) {
  //     //   fixedList.classList.add('opacity-0', 'invisible');
  //     // }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   const calculateDistanceFromTop = () => {
  //     const elementTop = elementRef.current.getBoundingClientRect().top;
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const distance = elementTop + scrollTop;
  //     const fixedList = document.querySelector(`.${style.fixedList}`)
  //     setDistanceFromTop(distance);
  //     if (scrollTop > distance) {
  //       fixedList.classList.remove('opacity-0', 'invisible');
  //     } else {
  //       fixedList.classList.add('opacity-0', 'invisible');
  //     }
  //   };

  //   const handleScroll = () => {
  //     calculateDistanceFromTop();
  //   };
  //   // Initial calculation after page load
  //   window.addEventListener('load', calculateDistanceFromTop);

  //   // Recalculate on scroll
  //   window.addEventListener('scroll', handleScroll);

  //   // Cleanup event listeners
  //   return () => {
  //     window.removeEventListener('load', calculateDistanceFromTop);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 500);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleStickyClick = (e, id, borderActive) => {
    e.preventDefault();
    setActiveIndex(borderActive);

    const header = document.querySelector('header > div');
    const headerHeight = header ? header.offsetHeight : 0;

    const targetSection = document.getElementById(id);
    if (!targetSection) return;

    const rect = targetSection.getBoundingClientRect();
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let scrollToPosition = scrollPosition + rect.top - headerHeight;

    scrollToPosition = Math.max(scrollToPosition, 0);

    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }
  // const stickyFunction = () => {

  // }
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const navList = document.querySelectorAll('.sticky-nav .navItem');
    const headerHeight = document.querySelector("header .mainHeader")?.offsetHeight;
    const scrollPosition = window.scrollY + (headerHeight + 1);
    let activeSectionId = '';
    let crossedSections = [];
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = (sectionTop + section.offsetHeight);
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionId = section.id;
        sections.forEach((blade) => {
          blade.classList.remove("active-nav")
        })
        section.classList.add("active-nav")
      }
      if (scrollPosition >= sectionBottom) {
        crossedSections.push(section.id)
      }
    });
    // const viewportHeight = window.innerHeight;
    // const viewportMidpoint = viewportHeight / 2;
    const accordionsections = document.querySelectorAll('.intro-with-accordion');
    const firstSectionBounding = accordionsections[0].getBoundingClientRect();
    const fixedList = document.querySelector(`.${style.fixedList}`)
    // const lastSectionBounding = accordionsections[accordionsections.length - 1].getBoundingClientRect();
    if (firstSectionBounding.top < headerHeight + 1) {
      fixedList.classList.add(style.show);
    } else {
      fixedList.classList.remove(style.show);
      setTimeout(() => {
        setActiveIndex(0);
      }, 300);
    }

    setActiveSection(activeSectionId);
    // setActiveIndex(activeSectionId);
    // setcrossedSection(crossedSections)
  };
  return (
    <>
      <section ref={elementRef} className={`sticky-nav ${style.stickyNav} padding-medium-top padding-medium-bottom `}>
        <div className="container">
          <div className="flex justify-between w-[calc(100%+10px)] -ml-[5px] md:flex-wrap">
            {
              bladeData.map((data, index) => {
                return <div key={index}

                  className={`${activeIndex === index ? style.active : ''} ${style.navItem} navItem md:border-[2px] md:border-cosmos
                  w-[calc(25%-20px)] mx-[5px] max-w-[233px] lg:pr-0 md:w-[calc(50%-10px)] md:p-0 md:mb-[10px] md:flex md:items-center md:justify-center md:max-w-full md:text-center rounded-lg`}>
                  <Link className={`md:p-[26px]`} href={`#${data.link}`} onClick={(e) => handleStickyClick(e, data.link, index)}>
                    <h4 className='relative inline-block text-cosmos md:text-[18px]'>
                      {winWidth > 767 ? data.heading : data.phoneHeading}
                    </h4>
                    {
                      winWidth > 767 ? (
                        <div>
                          <p className='xl-up:text-[30px] pt-[5px] leading-[1.11] truncate h-[108px] laptopsmall:h-[80px] tabletlarge:h-[85px] tablet:h-[85px] line-clamp-3 whitespace-normal'>
                            {data.blurb}
                          </p>
                          <div className={`${style.arrow}`}>
                            {props.themeColor.themeColor === "riptideWeb" ? <Image className='w-full h-full max-h-[33px] max-w-[25px]' src="/images/icons/arrow-riptideWeb.svg" width={100} height={100} alt="Arrow" /> : <Image className='w-full h-full max-h-[33px] max-w-[25px]' src="/images/icons/arrow.svg" width={100} height={100} alt="Arrow" />}
                          </div>
                        </div>
                      ) : null
                    }
                  </Link>
                </div>
              })
            }
          </div>
        </div>
        <ul className={`${style.fixedList} ipad:hidden`}>
          {
            bladeData.map((data, index) => {
              // ${Array.isArray(crossedSection) && crossedSection.includes(data?.link) ? style.expand : ''}
              return <li key={index} className={`${activeSection === data?.link ? 'activatedTab' : 'bg-softEmber'} ${style.navItem} transition-all duration-300 w-[8px] h-[60px] mb-[20px] rounded-[5px]`}>
                <Link href={`#${data.link}`} onClick={(e) => handleStickyClick(e, data.link, index)}
                  className={`h-full w-full inline-block`}>
                  <div className={`${style.navLink} h-full`}>
                    <span className={`inline-flex h-full items-center bg-cosmos text-white text-center py-[15px] px-[30px] overflow-hidden rounded-[5px]`}>{data.heading}</span>
                  </div></Link>
              </li>
            })
          }
        </ul>
      </section>
      <style jsx>
        {
          `
           .activated{
              background-color:#FA524D;
            }
          `
        }
      </style>
    </>
  )
}

export default StickyNav;