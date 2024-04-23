import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image";
import Button from "../button/Button";
import styles from '../../styles/Tabs.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var t = 0
const Tabs = ({ tab, tab_content, bg }) => {

  // Code For tab
  const [i, setI] = useState(0)
  const sliderBlade = useRef(null);
  const [autoplayVal, setAutoplay] = useState(true);
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    autoplaySpeed: (autoplayVal == true ? 3000 : 0),
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    fade: true,
    pauseOnHover: false,
    adaptiveHeight: false,

  })

  const handler = (index, text) => {

    setAutoplay(false)
    sliderBlade.current.slickGoTo(index);

    setI(index)
    t = index
  }
  useEffect(() => {

  }, [autoplayVal])
  const handleChange = (index) => {
    index = (index == (tab.length - 1) ? -1 : index)
    setI(index + 1)
  }

  const [winWidth, setWinWidth] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setI((prevSlide) => (prevSlide + 1) % tab.length); // Advance to the next slide
  //   }, 2000); // Adjust the interval as needed
  //   return () => clearInterval(interval);
  // }, []);
  //console.log(tab_content)


  return (
    <section className={`tabs ${winWidth > 767 ? 'scrollTab' : ''} padding-medium ${styles.tabs} overflow-hidden overflow-x-clip`}>
      <div className={`container ${styles.container} `} >
        <div className={`wrapp ${styles.wrapp}`}>
          <ul className={`relative w-full flex flex-wrap items-center justify-evenly bg-white z-[1] pt-[15px]`}>
            {tab.map((item, index) => {
              return (
                <li key={index} className={`list ${styles.list} flex justify-center py-[15px] sm:pb-[0] px-[10px] sm:px-[20px] md:w-1/2`}><h4 onClick={() => handler(index)} className={`${i === index ? ` ${styles.active} ` : ''} block text-30 relative cursor-pointer text-center pb-[12px]`}>{item.tab_heading}</h4></li>
              );
            })}
          </ul>
          <div className={`tab-outer relative ${styles.tab_outer} pt-[29px]`}>
            <Slider ref={sliderBlade}   {...sliderSettings} autoplay={autoplayVal} swipeToSlide={autoplayVal} draggable={autoplayVal} beforeChange={autoplayVal == true ? handleChange : ""} >
              {tab_content.map((item, index) => {
                let color = item.bg
                return (
                  <div key={index} className='relative w-full sm:bottom-[-1px]' onClick={() => setAutoplay(false)}>
                    <div className={`tab-content justify-between transition-opacity duration-1000 overflow-hidden  flex flex-wrap`}>
                      <div className={`col-seven ${styles.col_seven} mr-[20px]`}>
                        <h2 className={`pr-[30px] md:pr-[0]`}>{item.tab_title}</h2>
                        <p className={`pt-[40px] md:pt-[30px] laptop:pt-[30px] tablet:pt-[30px]`}>{item.blurb}</p>
                        <div className={`btn-wrap ${styles.btnWrap} pt-[20px] tabletlarge:pt-[20px] tablet:pt-[20px]`}>
                          <Button buttonClass='btn-black' buttonText={item.btntext} url={item.btnlink} />
                        </div>
                      </div>
                      <div className={`col-hree ${styles.col_three} w-[486px] tabletlarge:max-h-[386px] tabletlarge:max-w-[386px] tablet:max-w-[386px] tablet:max-h-[386px] md:w-full md:max-w-[400px] tablet:w-[300px] pt-[43px] relative laptopmid:pt-[30px] laptop:pt-[30px] tablet:pt-[30px] md:pt-[0] md:m-[auto]`}>
                        <div className={`image-wrap ${styles.image_wrap} absolute w-[360px] top-[114px] md:top-[50px] sm:left-[20px] flex justify-start h-[240px] md:h-[175px] tabletlarge:top-[88px] tablet:top-[88px] tabletlarge:left-[43px] tablet:left-[10px]`}>
                          <Image className={` w-full h-full object-cover max-w-[360px] max-h-[248px] md:max-w-[253px] md:max-h-[175px] tabletlarge:max-w-[287px] tabletlarge:max-h-[192px] tablet:max-w-[240px] tablet:max-h-[170px]`} src={item.imgpath} alt={item.alt} width={360} height={120} />
                        </div>
                        <div className={`image-wrap ${styles.image_wrap} flex justify-end w-full h-full sm:pr-[20px]`}>
                          <Image className={` w-full h-full object-cover max-w-[360px] max-h-[248px] md:max-w-[253px] md:max-h-[175px] tabletlarge:max-w-[287px] tabletlarge:max-h-[199px] tablet:max-w-[240px] tablet:max-h-[170px]`} src={item.imgpath2} alt={item.alt2} width={360} height={120} />
                        </div>
                      </div>
                      <div className={`content-outer ${styles.content_outer} pt-[45px] lg:pt-[60px] w-full flex flex-wrap`}>
                        <div className={`img-outer ${styles.imgOuter} relative top-[0] bottm-[0] tabletlarge:w-[297px] tablet:w-[297px] tabletlarge:h-[194px] tablet:h-[194px] m-[auto] tabletlarge:ml-0 tablet:ml-0 tabletlarge:mr-auto tablet:mr-auto w-[487px] h-[256px] sm:h-[auto] laptop-portrait:w-[350px] sm:w-[100%]`}>
                          <Image className={`w-[100%] h-full object-cover `} src={item.imgpath3} alt={item.alt3} width={360} height={120} />
                          {item.logo != "#" ?
                            <Image className={`logo absolute left-[0] top-[0] right-[0] bottom-[0] h-[120px] w-[120px] object-contain tabletlarge:w-[163px] tablet:w-[163px] m-auto z-10`} src={item.logo} alt={item.logo_alt} width={360} height={46} />
                            : ""}
                        </div>
                        <div className={`content ${styles.content}`}>
                          <div className={`inner-content ${styles.innerContent} ${color} pt-[47px] lg:pt-[70px] pb-[67px] lg:pb-[45px] pl-[190px] tabletlarge:pl-[210px] tablet:pl-[84px] pr-[100px] h-full laptopmid:pl-[225px] laptop:pl-[150px] lg:pl-[20px]`}>
                            <div className={`inner-content-wrap `}>
                              <h3 className='font-normal'>{item.inner_title} </h3>
                              <p className={`max-w-[485px] pt-[14px] ipad:pt-[10px]`}>{item.inner_blurb} </p>
                              <ul className={`flex pt-[5px] ipad:pt-[10px]`}>
                                <li className={`relative inline-block`}><h6 className=''>{item.tag1}</h6></li>
                                <li className={`relative inline-block`}><h6 className=''>{item.tag2}</h6></li>
                              </ul>
                              <div className={`btn-wrap ${styles.btn_wrap} pt-[27px] tabletlarge:pt-[40px]`}>
                                <Button buttonClass={`${item.btnClass} mr-[23px] sm:mr-[0]`} buttonText={`${item.bottom_btn_text}`} url={`${item.bottom_btn_url}`} />
                                {/* <Button buttonClass={`text-link-white sm:mt-[20px]`} buttonText={`${item.bottom_link_text}`} url={`${item.bottom_link_url}`} /> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Tabs;