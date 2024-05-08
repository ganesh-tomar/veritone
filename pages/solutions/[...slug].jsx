import BannerSecondLevel from '../../components/BannerSecondLevel';
import Tabs from '../../components/Tabs';
import Footercta from '../../components/Footercta';
import TwitterSlider from '../../components/TwitterSlider';
import StickyNav from '../../components/StickyNav';
import Accordion from '../../components/Accordion';
import IntroWithAccordion from '../../components/IntroWithAccordion';
import ColTwoCards from '../../components/ColTwoCards';
import ResourceCards from '../../components/ResourceCards';
import FormOverlay from '../../components/global/FormOverlay';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Head from 'next/head';

//importing sections data


import { banner, stickyNavData, tabs, accordionData, colTwoCards, resourceCards, twitterSliderData, introWithAccordionData1, introWithAccordionData2, introWithAccordionData3, introWithAccordionData4, footerCta, themeColor } from '../../public/mediaEntertainmentData/entertainment'

import { publicBanner, publicStickyNavData, publicTabs, publicAccordionData, publicColTwoCards, publicResourceCards, publicTwitterSliderData, publicIntroWithAccordionData1, publicIntroWithAccordionData2, publicIntroWithAccordionData3, publicIntroWithAccordionData4, publicFooterCta, publicthemeColor } from '../../public/solutions/public-sector'
import { hireBanner, hireStickyNavData, hireTabs, hireColTwoCards, hireResourceCards, hireTwitterSliderData, hireIntroWithAccordionData1, hireIntroWithAccordionData2, hireIntroWithAccordionData3, hireIntroWithAccordionData4, hireFooterCta, hireThemeColor, metaData } from '../../public/solutions/hire'


const Home = () => {
	const [open, setOpen] = useState(0)
	const [url, setUrl] = useState('im not a big fan of the government')

	const setFormOverlay = (url) => {
		open == 0 ? setOpen(1) : setOpen(0)
		setUrl(url)
	}

	const mediaEntertainmentMetaData = {
		title: "AI Solutions for Media, Entertainment & Broadcast | Veritone",
		description:
			"Transform your media & entertainment business with Veritone's AI solutions. Drive growth and innovation. Click now.",
		ogImagePath: "https://veritone-seven.vercel.app/images/veritone_OG_image.jpg",
	};

	const router = useRouter();
	return (
		<>
			<NextSeo
				title="Veritone | AI that makes you even better"
				description="Transform your workflows and superpower your teams with innovative, custom AI solutions, AI services, and a powerful enterprise AI platform."
				canonical='https://www.veritone.com'
				openGraph={{
					url: 'https://www.veritone.com',
					title: 'Veritone | AI that makes you even better',
					description: 'Transform your workflows and superpower your teams with innovative, custom AI solutions, AI services, and a powerful enterprise AI platform.',
					images: [
						{
							url: 'https://nextjs.veritone.com/images/veritone_OG_image.jpg',
							width: 800,
							height: 600,
							alt: 'Veritone',
							type: 'image/jpg',
						},
					],
					siteName: 'Veritone',
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: 'summary_large_image',
				}}
			/>
			<BannerSecondLevel {...banner} setFormOverlay={setFormOverlay} />
			<StickyNav data={stickyNavData} themeColor={themeColor} />
			<IntroWithAccordion data={introWithAccordionData1} pt="padding-top-120" pb='no-padding-bottom' />
			<IntroWithAccordion data={introWithAccordionData2} reverse={"true"} pt='padding-medium-top' pb='no-padding-bottom' />
			<IntroWithAccordion data={introWithAccordionData3} pt='padding-medium-top' pb='no-padding-bottom' />
			<IntroWithAccordion data={introWithAccordionData4} reverse={"true"} pt='padding-medium-top' pb='padding-medium-bottom' />
			<Tabs data={tabs} />
			<Accordion data={accordionData} />
			<ColTwoCards data={colTwoCards} />
			<ResourceCards data={resourceCards} />
			<TwitterSlider data={twitterSliderData} onlyInternalPosts={true} />
			<Footercta {...footerCta} setFormOverlay={setFormOverlay} />
			<FormOverlay toggle={open} setFormOverlay={setFormOverlay} buttonText={'Connect with us'} url={'#'} buttonClass={'default mr-[30px]'} formUrl={url} />
		</>
	);
};

export default Home;
