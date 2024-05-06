import React from 'react'
import Image from "next/image";

const Intro_with_logo = ({ title, blurb, bg, logo }) => {
	return (
		<section loading="lazy" className={`intro-with-logo padding-top-large padding-medium-bottom ipad:pb-0 ${bg}`}>
			<div className={`container`}>
				<div className={`flex flex-wrap items-center self-center justify-center`}>
					<h2 className={`text-center max-w-[1040px]`}>{title}</h2>
					<p className={`text-center pt-[29px] max-w-[730px] tabletlarge:pt-[20px] tablet:pt-[20px]`}>{blurb}</p>
					<div className={`logo-wrap w-full flex flex-wrap items-center justify-between lg:justify-evenly pt-[59px] laptop:pt-[40px] lg:pt-[30px] tabletlarge:pt-[50px] tablet:pt-[50px]`}>
						{logo.map((item, i) => {
							return (
								<div key={i} className={`logo lg:w-[33%] flex justify-center p-[15px] `}>
									<Image className={`h-[52px]`} src={item.imgpath} quality={100} alt={item.alt} width={120} height={120} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro_with_logo;
