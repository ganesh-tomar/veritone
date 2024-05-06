import Button from './button/Button';
import Image from 'next/image';
import style from '../styles/Fullwidthcontent.module.css';

const FullWidthContent = ({ col }) => {
	return (
		<section loading="lazy" className="full-width-content overflow-hidden bg-lightning padding-medium mx-auto xxl-up:min-h-[750px] laptop-landscape:min-h-[auto] md:pt-0">
			<div className={`bg-img ${style.bgimg} absolute top-0 left-0 w-[33.3%] tabletlarge:w-[25%] tablet:w-[25%] h-full phablet:h-[300px] md:relative md:max-w-full md:w-full sm:h-[296px]`}>
				<Image
					src={col.backimgpath}
					alt={col.alt}
					width={1000}
					quality={100}
					height={1000}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="container">
				<div className="row-wrap laptop-landscape:items-center tabletlarge:items-center tablet:items-center relative flex justify-between pt-[16px] tabletlarge:pt-0 tablet:pt-0 md:pt-0 md:flex-wrap phablet:-mt-[150px] sm:-mt-[220px]">
					<div className="img-wrap mt-[20px] tabletlarge:mt-[0] tablet:mt-[0] relative max-w-[360px] w-full max-h-[443px] tabletlarge:max-w-[215px] tabletlarge:max-h-[348px] laptop:h-[443px] laptop-landscape:h-[400px] desktop:h-auto laptopsmall:h-[400px] laptopsmall:w-[325px] tabletlarge:h-[360px] tabletlarge:w-[325px] tablet:h-[360px] tablet:w-[330px] lg:h-[400px] lg:w-[325px] sm:h-[311px] sm:w-[253px] lg:mb-[40px]">
						<div className="img absolute w-full h-full top-0 xxl-up:!left-[50%] tabletlarge:left-[45%] desktop:left-[60%] laptop:left-[32%] z-[1] ">
							<Image
								src={col.frontimgpath}
								alt={col.alt}
								width={1000}
								height={1000}
								quality={100}
								className="w-full h-full object-cover tabletlarge:object-left tablet:object-left"
							/>
						</div>
					</div>
					<div className={`${style.textwrap} text-wrap laptop:pl-[250px] tabletlarge:pl-[110px] tablet:pl-[110px] tabletlarge:max-w-[675px] tablet:max-w-[675px] md-up:max-w-[675px] md:w-full`} >
						<h2 className="h1 text-cosmos text-right md:text-left  laptop-landscape:text-right">
							{col.colTitle}
						</h2>
						<p className="pt-[38px] tabletlarge:pt-[30px] tablet:pt-[30px]  tabletlarge:pl-[0] tabletlarge:ml-[0] tablet:pl-[0] tablet:ml-[0] laptop:pl-[80px] laptop-landscape:!pl-[0px] laptopmid:pl-[80px] mb-[30px] ml-[55px] !laptop-landscape:pl-[0] !laptop-landscape:ml-[0] text-cosmos max-w-[614px] md:mb-[20px] md:ml-0 md:pt-0 md:mt-[28px]">
							{col.colBlurb}
						</p>
						<Button
							buttonText={col.btnText}
							url={col.btnLink}
							buttonClass={'text-link-black laptop-landscape:pl-[0!important] laptop-landscape:pml-[0!important] tabletlarge:pl-[0] tabletlarge:ml-[0] tablet:pl-[0] tablet:ml-[0]  ml-[55px] md:ml-0 laptop:pl-[80px]  laptopmid:pl-[80px]'}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FullWidthContent;
