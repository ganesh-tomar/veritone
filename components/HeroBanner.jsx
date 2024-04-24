import React from 'react'
import Image from "next/image";
import Button from "./button/Button";
import ContactUs from './button/ContactUs';
import styles from '../styles/HeroBanner.module.css';

const HeroBanner = ({ heroTitle, heroBlurb, imgpath, alt, video_url, bg, setFormOverlay }) => {

	return (
		<section className={`hero-banner ${styles.heroBanner} ${bg} ${!video_url == '' ? styles.blackOverlay : ''} items-center flex flex-wrap justify-center pt-[193px] laptopmid:pt-[180px] laptop:pt-[150px] tablet:pt-[140px] md:pt-[130px]`}>
			<div className={`bg-img ${styles.bg_img} absolute top-[0] left-[0] bottom-[0] w-[100%]`}>
				{imgpath && (<Image className={`h-[100%] w-[100%] object-cover`} src={imgpath} alt={alt} quality={100} width={120} height={120} />)}
			</div>
			{video_url && (<video autoPlay muted loop playsInline preload="none" className={`${styles.video_url} object-cover absolute top-[0] left-[0] bottom-[0] w-[100%] h-[100%]`}>
				<source src={video_url} type="video/mp4" />
			</video>)}
			<div className='container z-[2]'>
				<h1 className={`text-center text-white`}>{heroTitle}</h1>
				<p className={`text-center  text-white max-w-[600px] tabletlarge:max-w-[575px] tablet:max-w-[575px] mx-[auto] pt-[92px] laptopmid:pt-[80px] laptop:pt-[70px] tabletlarge:pt-[30px] tablet:pt-[30px] md:pt-[30px]`}>{heroBlurb}</p>
				<div className={`btn-wrap tabletlarge:pt-[30px] tablet:pt-[30px] laptop-landscape:pt-[30px] ${styles.btn_wrap} text-center pt-[40px] md:pt-[30px]`}>
					{/* <ContactUs setFormOverlay={setFormOverlay} buttonText={'Connect with us'} url={'#'} buttonClass={'default mr-[30px]'} formUrl={'https://unlock.veritone.com/l/636301/2023-04-27/4cx8sc?source=https://www.veritone.com/'} /> */}
					<Button buttonText={'Connect with us'} target={true} url={'https://unlock.veritone.com/corp-contact-us'} buttonClass={'default mr-[30px]'} />
					<Button buttonText={'Watch now'} url={'#'} buttonClass={'transparent'} videoUrl={'https://player.vimeo.com/video/930301608?h=aa24d4d3c9&title=0&byline=0&portrait=0'} />

				</div>
			</div>
		</section>
	);
}

export default HeroBanner;
