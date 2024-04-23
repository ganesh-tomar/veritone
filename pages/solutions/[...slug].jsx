import BannerSecondLevel from '../../components/BannerSecondLevel';
import Tabs from '../../components/Tabs';
import Footercta from '../../components/Footercta';
import TwitterSlider from '../../components/TwitterSlider';
import StickyNav from '../../components/StickyNav';
import Accordion from '../../components/Accordion';
import IntroWithAccordion from '../../components/IntroWithAccordion';
import ColTwoCards from '../../components/ColTwoCards';
import ResourceCards from '../../components/ResourceCards';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

//importing sections data


import { banner, stickyNavData, tabs, accordionData, colTwoCards, resourceCards, twitterSliderData, introWithAccordionData1, introWithAccordionData2, introWithAccordionData3, introWithAccordionData4, footerCta } from '../../public/mediaEntertainmentData/entertainment'

import { publicBanner, publicStickyNavData, publicTabs, publicAccordionData, publicColTwoCards, publicResourceCards, publicTwitterSliderData, publicIntroWithAccordionData1, publicIntroWithAccordionData2, publicIntroWithAccordionData3, publicIntroWithAccordionData4, publicFooterCta } from '../../public/solutions/public-sector'
import { hireBanner, hireStickyNavData, hireTabs, hireAccordionData, hireColTwoCards, hireResourceCards, hireTwitterSliderData, hireIntroWithAccordionData1, hireIntroWithAccordionData2, hireIntroWithAccordionData3, hireIntroWithAccordionData4, hireFooterCta, themeColor } from '../../public/solutions/hire'
import { document } from 'postcss';

const Home = () => {
	const router = useRouter();
	if (router.asPath === '/solutions/media-entertainment') {
		return (
			<>
				<NextSeo title="AI Solutions for Media, Entertainment & Broadcast | Veritone" description="Transform your media & entertainment business with Veritone's AI solutions. Drive growth and innovation. Click now." />
				<BannerSecondLevel {...banner} />
				<StickyNav data={stickyNavData} />
				<IntroWithAccordion data={introWithAccordionData1} pt="padding-top-120" pb='no-padding-bottom' />
				<IntroWithAccordion data={introWithAccordionData2} reverse={"true"} pt='padding-medium-top' pb='no-padding-bottom' />
				<IntroWithAccordion data={introWithAccordionData3} pt='padding-medium-top' pb='no-padding-bottom' />
				<IntroWithAccordion data={introWithAccordionData4} reverse={"true"} pt='padding-medium-top' pb='padding-medium-bottom' />
				<Tabs data={tabs} />
				<Accordion data={accordionData} />
				<ColTwoCards data={colTwoCards} />
				<ResourceCards data={resourceCards} />
				<TwitterSlider data={twitterSliderData} onlyInternalPosts={true} />
				<Footercta {...footerCta} />
			</>
		);
	} else if (router.asPath === '/solutions/public-sector') {
		return (
			<>
				<NextSeo title="AI Solutions for Media, Entertainment & Broadcast | Veritone" description="Transform your media & entertainment business with Veritone's AI solutions. Drive growth and innovation. Click now." />
				<BannerSecondLevel {...publicBanner} />
				<StickyNav data={publicStickyNavData} />
				<IntroWithAccordion data={publicIntroWithAccordionData1} pt="padding-top-120" pb='no-padding-bottom' />
				<IntroWithAccordion data={publicIntroWithAccordionData2} reverse={"true"} pt='padding-medium-top' pb='no-padding-bottom' />
				<IntroWithAccordion data={publicIntroWithAccordionData3} pt='padding-medium-top' pb='no-padding-bottom' />
				<IntroWithAccordion data={publicIntroWithAccordionData4} reverse={"true"} pt='padding-medium-top' pb='padding-medium-bottom' />
				<Tabs data={publicTabs} />
				<Accordion data={publicAccordionData} />
				<ColTwoCards data={publicColTwoCards} />
				<ResourceCards data={publicResourceCards} />
				<TwitterSlider data={publicTwitterSliderData} onlyInternalPosts={true} />
				<Footercta {...publicFooterCta} />
			</>
		);
	} else if (router.asPath === '/solutions/hire') {
		return (
			<>
				<NextSeo title="AI Solutions for Media, Entertainment & Broadcast | Veritone" description="Transform your media & entertainment business with Veritone's AI solutions. Drive growth and innovation. Click now." />
				<BannerSecondLevel {...hireBanner} />
				<StickyNav data={hireStickyNavData} themeColor={themeColor} />
				<IntroWithAccordion data={hireIntroWithAccordionData1} pt="padding-top-120" pb='no-padding-bottom' />
				<IntroWithAccordion data={hireIntroWithAccordionData2} reverse={"true"} pt='padding-medium-top' pb='no-padding-bottom' />
				<IntroWithAccordion data={hireIntroWithAccordionData3} pt='padding-medium-top' reverse={"true"} pb='no-padding-bottom' />
				<IntroWithAccordion data={hireIntroWithAccordionData4} pt='padding-medium-top' pb='padding-medium-bottom' />
				<Tabs data={hireTabs} />
				{/* <Accordion data={hireAccordionData} /> */}
				<ColTwoCards data={hireColTwoCards} />
				<ResourceCards data={hireResourceCards} />
				<TwitterSlider data={hireTwitterSliderData} onlyInternalPosts={true} />
				<Footercta {...hireFooterCta} />
			</>
		);
	}
};

export default Home;
