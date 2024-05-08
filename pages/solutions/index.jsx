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

//importing sections data
import { banner, stickyNavData, tabs, accordionData, colTwoCards, resourceCards, twitterSliderData, introWithAccordionData1, introWithAccordionData2, introWithAccordionData3, introWithAccordionData4, footerCta } from '../../public/mediaEntertainmentData/entertainment'

const Home = () => {

	return (
		<>
			{/* <NextSeo title="AI Solutions for Media, Entertainment & Broadcast | Veritone" description="Transform your media & entertainment business with Veritone's AI solutions. Drive growth and innovation. Click now." />
			 */}
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
							url: 'https://veritone-seven.vercel.app/images/veritone_OG_image.jpg',
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
};

export default Home;
