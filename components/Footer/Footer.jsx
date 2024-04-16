'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css'
import { useState, useEffect } from 'react';

const Footer = () => {
	const Footerdata = [
		{
			heading: 'Explore.',
			links: [
				{
					classlink: 'Home',
					classurl: 'https://www.veritone.com/',
				},
				{
					classlink: 'Solutions',
					classurl: 'https://www.veritone.com/solutions/',
				},
				{
					classlink: 'Platform',
					classurl: 'https://www.veritone.com/aiware/enterprise-ai-platform/',
				},				
				{
					classlink: 'Products',
					classurl: 'https://www.veritone.com/applications/',
				},
				{
					classlink: 'Services',
					classurl: 'https://www.veritone.com/services/professional-services/',
				},
				{
					classlink: 'AI for good',
					classurl: 'https://www.veritone.com/ai-for-good/',
				},
			],
		},
		{
			heading: 'Resources',
			links: [
				{
					classlink: 'Support',
					classurl: 'https://www.veritone.com/technical-support/',
				},
				{
					classlink: 'Blog',
					classurl: 'https://www.veritone.com/blog/',
				},
				{
					classlink: 'Podcast',
					classurl: 'https://www.veritone.com/podcasts/',
				},
				{
					classlink: 'Events',
					classurl: 'https://www.veritone.com/events/',
				},
				{
					classlink: 'Reports',
					classurl: 'https://www.veritone.com/resource-library/?type%5B%5D=industry-report',
				},
				{
					classlink: 'Case studies',
					classurl: 'https://www.veritone.com/resource-library/?type%5B%5D=case-study',
				},
			],
		},
		{
			heading: 'About',
			links: [
				{
					classlink: 'Company',
					classurl: 'https://www.veritone.com/about-us/',
				},
				{
					classlink: 'Careers',
					classurl: 'https://www.veritone.com/careers/',
				},				
				{
					classlink: 'News',
					classurl: 'https://www.veritone.com/press-releases/',
				},
				{
					classlink: 'Investors',
					classurl: 'https://investors.veritone.com/?_gl=1*1vjqcuz*_gcl_au*MTY4MjI5NjAzMC4xNzA5MDg1Njgz',
				},				
				{
					classlink: 'Partners',
					classurl: 'https://www.veritone.com/partners/',
				},
				{
					classlink: 'Contact Us',
					classurl: 'https://www.veritone.com/careers/contact-us/',
				},
			],
		},
		{
			heading: 'More',
			links: [
				{
					classlink: 'Terms of Service',
					classurl: 'https://www.veritone.com/terms/',
				},
				{
					classlink: 'Privacy Policy',
					classurl: 'https://www.veritone.com/privacy/',
				},
				{
					classlink: 'Cookie Policy',
					classurl: 'https://www.veritone.com/cookie-policy/',
				},
				{
					classlink: 'Privacy Form',
					classurl: 'https://www.veritone.com/privacy-form/',
				},
				{
					classlink: 'Sitemap',
					classurl: 'https://www.veritone.com/sitemap/',
				},
			],
		},
	];


	return (
		<footer className={`footer ${styles.footer} padding-120`}>
			<div className="container">
				<div className="logo-outer w-full mb-[23px] h-[30px] sm:mb-[10px] relative">
					<div className="logo-wrap relative max-w-[148px] max-h-[28px] min-h-[28px] ">
						<Link className="emptyLink" href="/">
							.
						</Link>
						<Image
							src="/images/logo.svg"
							width={1000}
							height={1000}
							loading='eager'
							className="w-full h-full object-contain"
							alt="veritone"
						/>
					</div>
				</div>

				<div className="wrapper w-full relative flex flex-wrap justify-between mb-[74px] sm:mb-[30px]">
					<div className="item-small sm:h-auto  lg:mb-[80px] max-w-[225px] h-[226px] flex flex-wrap flex-col sm:flex-col  lg:w-full lg:h-auto justify-between lg:max-w-full">
						<div className="para-wrap relative lg:max-w-[225px] lg:mb-[50px]">
							<p className="text-[16px]">
							AI that makes you even better
							</p>
						</div>
						<div className="link-wrap lg:max-w-[225px]">
							<span className="text-[15px] font-bold uppercase mb-[10px] sm:mb-[5px] inline-block">
								For developers
							</span>
							<Link
								href="http://www.aiware.com/"
								className={`${styles.link} text-link small !text-[16px] hover:text-purple transition-all duration-300 ease-in-out`}
							>
								Visit aiWARE.com
							</Link>
						</div>
					</div>
					<div className="item-big  w-[54%] lg:w-full lg:ml-[-20px] laptop:w-[65%] flex flex-wrap sm:justify-start  justify-end ml-[-60px]">
					{Footerdata.map((wrap, index) => (
                        <ul
                            className={`col-three w-[calc(33.33%-120px)] lg:w-[calc(25%-40px)] sm:w-[calc(50%-40px)]  lg:mx-[20px] mx-[60px] lg-up:last:hidden sm:mb-[50px] lg:block
                            ${index === 2 ? 'mr-0' : ''}`}
                            key={index}
                        >
								<span className="text-[15px] font-bold uppercase mb-[20px] inline-block">
									{wrap.heading}
								</span>
								{wrap.links.map((link, linkIndex) => (
									<li key={linkIndex} className="mb-[10px] ">
										<Link
											href={link.classurl}
											className={`${styles.Link} Link relative text-[16px] font-normal text-cosmos  hover:text-purple transition-all duration-300 ease-in-out`}
										>
											{link.classlink}
										</Link>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
				<div className={`${styles. socialWrapper} socialWrapper  relative before:content-[''] before:absolute before:top-[-23px] sm:before:top-[-40px] before:left-0 before:w-full before:h-[2px] before:bg-cosmos`}>
					<div className="wrapper w-full flex flex-wrap  justify-between mb-[19px] lg:mb-[50px]">
						<ul className={`${styles.linkWrap} linkWrap flex flex-wrap md:max-w-[70%] lg:hidden md:mx-auto md:mb-[30px] md:w-full justify-between `}>
							<li>
								<Link
									className={`${styles.Link} Link text-[16px] font-normal  text-cosmos relative mr-[40px] lg:mr-[25px]  hover:text-purple transition-all duration-300 ease-in-out`}
									href="https://www.veritone.com/terms/									"
								>
								Terms of Service
								</Link>
							</li>
							<li>
								<Link
									className={`${styles.Link} Link  relative text-[16px] font-normal  text-cosmos  mr-[40px] lg:mr-[25px]  hover:text-purple transition-all duration-300 ease-in-out`}
									href="https://www.veritone.com/privacy/"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									className={`${styles.Link} Link relative text-[16px] font-normal  text-cosmos  mr-[40px] lg:mr-[25px]  hover:text-purple transition-all duration-300 ease-in-out`}
									href="https://www.veritone.com/cookie-policy/"
								>
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link
									className={`${styles.Link} Link relative text-[16px] font-normal  text-cosmos mr-[40px] lg:mr-[25px]   hover:text-purple transition-all duration-300 ease-in-out`}
									href="https://www.veritone.com/privacy-form/"
								>
									Privacy Form
								</Link>
							</li>
							<li>
								<Link
									className={`${styles.Link} Link relative text-[16px] font-normal  text-cosmos   hover:text-purple transition-all duration-300 ease-in-out`}
									href="https://www.veritone.com/sitemap/"
								>
									Sitemap
								</Link>
							</li>
						</ul>
						<div className="social-wrap md:max-w-[248px] relative sm:w-full flex flex-wrap lg:mx-auto md:w-full  justify-between w-[18.5%] lg:w-[30%] lg:mb-0">
							<div className={`${styles.hovericon} hovericon relative max-w-[24px] max-h-[24px] hover:fill-purple transition-all duration-300 ease-in-out`}>
							<Link href="https://www.facebook.com/veritoneinc" className='emptyLink' target='_blank'>.</Link>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_88_254)">
										<path
											d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
											fill="#212121"
											className={` ${styles.svg} svg hover:fill-purple transition-all duration-300 ease-in-out`}
										/>
									</g>
									<defs>
										<clipPath id="clip0_88_254">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
							
							</div>
						     
							 <div className={`${styles.hovericon} hovericon relative max-w-[24px] max-h-[24px] hover:fill-purple transition-all duration-300 ease-in-out`}>
							 <Link href="https://twitter.com/veritoneinc" className='emptyLink'  target='_blank'>.</Link>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M15.9455 23L10.396 15.0901L3.44886 23H0.509766L9.09209 13.2311L0.509766 1H8.05571L13.286 8.45502L19.8393 1H22.7784L14.5943 10.3165L23.4914 23H15.9455ZM19.2185 20.77H17.2398L4.71811 3.23H6.6971L11.7121 10.2532L12.5793 11.4719L19.2185 20.77Z"
										fill="#212121"
										className={` ${styles.svg} svg hover:fill-purple transition-all duration-300 ease-in-out`}
									/>
								</svg>
							
							 </div>

							 <div className={`${styles.hovericon} hovericon relative max-w-[24px] max-h-[24px] hover:fill-purple transition-all duration-300 ease-in-out`}>
							 <Link href="https://www.linkedin.com/company/veritone-inc-/" className='emptyLink'  target='_blank'>.</Link>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
										fill="#212121"
										className={` ${styles.svg} svg hover:fill-purple transition-all duration-300 ease-in-out`}
									/>
								</svg>
							
							 </div>
							 <div className={`${styles.hovericon} hovericon relative max-w-[24px] max-h-[24px] hover:fill-purple transition-all duration-300 ease-in-out`}>
							 <Link href="https://www.youtube.com/c/VeritoneInc"  className='emptyLink' target='_blank'>.</Link>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M23.7609 7.20005C23.7609 7.20005 23.5266 5.54536 22.8047 4.8188C21.8906 3.86255 20.8688 3.85786 20.4 3.80161C17.0438 3.55786 12.0047 3.55786 12.0047 3.55786H11.9953C11.9953 3.55786 6.95625 3.55786 3.6 3.80161C3.13125 3.85786 2.10938 3.86255 1.19531 4.8188C0.473438 5.54536 0.24375 7.20005 0.24375 7.20005C0.24375 7.20005 0 9.14536 0 11.086V12.9047C0 14.8454 0.239062 16.7907 0.239062 16.7907C0.239062 16.7907 0.473437 18.4454 1.19062 19.1719C2.10469 20.1282 3.30469 20.0954 3.83906 20.1985C5.76094 20.3813 12 20.4375 12 20.4375C12 20.4375 17.0438 20.4282 20.4 20.1891C20.8688 20.1329 21.8906 20.1282 22.8047 19.1719C23.5266 18.4454 23.7609 16.7907 23.7609 16.7907C23.7609 16.7907 24 14.85 24 12.9047V11.086C24 9.14536 23.7609 7.20005 23.7609 7.20005ZM9.52031 15.1125V8.36724L16.0031 11.7516L9.52031 15.1125Z"
										fill="#212121"
										className={` ${styles.svg} svg hover:fill-purple transition-all duration-300 ease-in-out`}
									/>
								</svg>
							
							 </div>				
							 		
						     <div className={`${styles.hovericon} hovericon relative max-w-[24px] max-h-[24px] hover:fill-purple transition-all duration-300 ease-in-out`}>
							 <Link href="https://www.instagram.com/veritone_inc/" className='emptyLink'  target='_blank'>.</Link>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_88_261)">
										<path
											d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
											fill="#212121"
											className={` ${styles.svg} svg hover:fill-purple transition-all duration-300 ease-in-out`}
										/>
										<path
											d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
											fill="#212121"
											className={` ${styles.svg} svg hover:fill-purple transition-all duration-300 ease-in-out`}
										/>
										<path
											d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
											fill="#212121"
											className={` ${styles.svg} svg hover:fill-purple transition-all duration-300 ease-in-out`}
										/>
									</g>
									<defs>
										<clipPath id="clip0_88_261">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
							
							 </div>
						     

						
						
						</div>
					</div>
					<p className="small lg:text-center sm:text-center sm:max-w-[250px] sm:mx-auto">
					© Veritone, Inc. All rights reserved. © 2024
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
