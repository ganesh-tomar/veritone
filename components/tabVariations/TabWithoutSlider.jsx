import React, { useState, useEffect, useRef } from 'react'
import Image from "next/image";
import Button from "../button/Button";
import styles from '../../styles/Tabs.module.css';


var t = 0
const Tabs = ({ tab, tab_content, bg, tabBg, pt }) => {
  // console.log(tabBg);
  // Code For tab
  const [open, setopen] = useState(false)
  const [i, setI] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handler = (index, text) => {
    setI(index)
    setSelectedIndex(index);
    setopen(!open);
  }
  const dropdownHandler = () => {
    setopen(!open);
  }
  const liWidth = 100 / tab.length
  // console.log(liWidth);

  return (
    <section className={`tabs padding-medium ${styles.tabs} ${styles.tabWithoutSlider} overflow-x-clip`}>
      <div className={`container ${styles.container} `} >
        <div className={`wrapp`}>
          <div className={`${styles.tabValBox} bg-softEmber ${open ? styles.expand : ''} sm-up:hidden`} onClick={dropdownHandler}>
            <ul className={`relative w-full flex flex-wrap justify-center items-center z-[4] sm:px-[20px] before:content-[''] before:w-[calc(100%+162px)] before:absolute before:h-full before:top-0 before:left-[-81px] before:bg-softEmber`}>
              {selectedIndex !== null && (
                <li key={selectedIndex} className={`cursor-pointer w-full`}>
                  <div className={`${styles.tablist} ${selectedIndex === selectedIndex ? ` ${styles.active} ` : ''} relative w-fit mx-[32px] flex items-center justify-center sm:justify-start sm:mx-0 xl:my-[10px]`}>
                    <div className={``}>
                      {/* Render the icon and heading of the selected tab */}
                      <Image className={`w-full h-full max-h-[32px] max-w-[32px] object-contain mr-[20px]`} src={tab[selectedIndex].tab_icon} quality={100} alt={tab[selectedIndex].tab_icon_name} width={120} height={120} />
                    </div>
                    <h4 className={`relative text-30 text-center pb-[10px]`}>{tab[selectedIndex].tab_heading}</h4>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className={`${styles.listBox} ${open ? styles.expand : ''}`}>
            <ul className={`relative w-full flex flex-wrap justify-center items-center z-[4] py-[28px] sm:px-[20px] xl:py-[20px] before:content-[''] before:w-[calc(100%+162px)] before:absolute before:h-full before:top-0 before:left-[-81px] before:bg-softEmber`}>
              {tab?.map((item, index) => {
                return (
                  <li onClick={() => handler(index)} key={index} className={`cursor-pointer inline-block w-fit sm:w-full ${index === selectedIndex ? 'sm:hidden' : ''}`}>
                    <div className={`${styles.tablist} ${i === index ? ` ${styles.active}  active` : ''} relative w-fit mx-[32px] flex items-center justify-center sm:justify-start sm:mx-0 xl:my-[10px]`}>
                      <div className={``}>
                        <Image className={`w-full h-full max-h-[32px] max-w-[32px] object-contain mr-[20px]`} src={item.tab_icon} quality={100} alt={item.tab_icon_name} width={120} height={120} />
                      </div>
                      <h4 className={`relative text-30 text-center pb-[10px]`}>{item.tab_heading}</h4>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`tab-outer relative ${styles.tab_outer} pt-[59px]`}>
            {tab_content?.map((item, index) => {
              return (
                <div key={index} className={`tab-content transition-opacity  overflow-hidden ${i === index ? `h-fit opacity-[1] ` : 'h-0 opacity-[0] '} flex flex-wrap ipad:overflow-visible`}>
                  <div className={`col-seven ${styles.col_seven} pr-[60px]`}>
                    <h2 className={`pr-[30px] md:pr-[0]`}>{item.tab_title}</h2>
                    <p className={`pt-[40px] md:pt-[30px] laptop:pt-[30px] tablet:pt-[30px]`}>{item.blurb}</p>
                    <div className={`btn-wrap pt-[20px]`}>
                      <Button buttonClass='btn-black' buttonText={item.btntext} url={item.btnlink} />
                    </div>
                  </div>
                  <div className={`col-hree ${styles.col_three} w-[486px] md:w-[320px] tablet:w-[300px] pt-[43px] relative laptopmid:pt-[30px] laptop:pt-[30px] tablet:pt-[30px] md:pt-[0]`}>
                    <div className={`image-wrap ${styles.image_wrap} absolute top-[114px] md:top-[50px] sm:left-[20px] flex justify-end h-[240px] md:h-[175px]`}>
                      <Image className={`w-full h-full object-cover max-w-[360px] max-h-[248px] md:max-w-[253px] md:max-h-[175px] tablet:max-w-[240px] tablet:max-h-[170px]`} src={item.imgpath} quality={100} alt={item.alt} width={1000} height={1000} />
                    </div>
                    <div className={`image-wrap ${styles.image_wrap} flex justify-end w-full h-full sm:pr-[20px]`}>
                      <Image className={`w-full h-full object-cover max-w-[360px] max-h-[248px] md:max-w-[253px] md:max-h-[175px] tablet:max-w-[240px] tablet:max-h-[170px]`} src={item.imgpath2} quality={100} alt={item.alt2} width={1000} height={1000} />
                    </div>
                  </div>
                  <div className={`content-outer ${styles.content_outer} pt-[30px] lg:pt-[60px] w-full flex flex-wrap`}>
                    <div className={`img-outer ${styles.imgOuter} relative top-[0] bottm-[0] m-[auto] w-[487px] h-[256px] sm:h-[auto] laptop:w-[350px] sm:w-[100%]`}>
                      <Image className={`w-[100%] h-full object-cover`} src={item.imgpath3} alt={item.alt3} quality={100} width={1000} height={1000} />
                      {
                        item.logo && <Image className={`logo absolute left-[0] top-[0] right-[0] bottom-[0] h-100px] w-[200px] m-auto z-10`} src={item.logo} quality={100} alt={item.logo_alt} width={1000} height={1000} />
                      }

                    </div>
                    <div className={`content ${styles.content}`}>
                      <div className={`inner-content ${styles.innerContent} ${item.bg} pt-[47px] lg:pt-[70px] pb-[67px] lg:pb-[45px] pl-[255px] pr-[60px] h-full laptopmid:pl-[225px] laptop:pl-[150px] lg:pl-[20px]`}>
                        <div className={`inner-content-wrap`}>
                          <h3>{item.inner_title} </h3>
                          <p className={`max-w-[485px] laptop-landscape:max-w-[700px] pt-[14px]`}>{item.inner_blurb} </p>
                          {(item.tag1 && item.tag2) && <ul className={`flex pt-[5px] sm:flex-wrap`}>
                            <li className={`relative`}><h6>{item.tag1}</h6></li>
                            <li className={`relative`}><h6>{item.tag2}</h6></li>
                          </ul>}
                          <div className={`btn-wrap ${styles.btn_wrap} pt-[27px]`}>
                            {item.bottom_btn_url != '' && (<Button buttonClass={`${item.btnClass} mr-[23px] sm:mr-[0]`} buttonText={`${item.bottom_btn_text}`} url={`${item.bottom_btn_url}`} />)}
                            {item.videoUrl && (<Button buttonText={'Watch now'} url={'#'} buttonClass={'btn-black'} videoUrl={item.videoUrl} />)}
                            {item.bottom_link_url && (<Button buttonClass={`text-link-white sm:mt-[20px]`} buttonText={`${item.bottom_link_text}`} url={`${item.bottom_link_url}`} />)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tabs;