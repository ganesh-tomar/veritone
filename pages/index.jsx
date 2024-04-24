
import Layout from '../components/layout';
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { useEffect } from 'react';
const HeroBanner = dynamic(() => import('../components/HeroBanner'), {
	suspense: true,
})
// import HeroBanner from '../components/HeroBanner';
import IntroWithLogo from '../components/IntroWithLogo';
import TwoColumnText from '../components/TwoColumnText';
import Tabs from '../components/Tabs';
import Footercta from '../components/Footercta';
import TwitterSlider from '../components/TwitterSlider';
import FullWidthContent from '../components/FullWidthContent';
import FormOverlay from '../components/global/FormOverlay';
import { useState } from 'react';
import { NextSeo } from 'next-seo';

//importing sections data
import { heroData, introWithLogo, tabs, fullWidthContent, twoColumnText, twitterSliderData, footerCta } from '../public/homepageData/homepage'

const Home = () => {

	const [open, setOpen] = useState(0)
	const [url, setUrl] = useState('im not a big fan of the government')

	const setFormOverlay = (url) => {
		open == 0 ? setOpen(1) : setOpen(0)
		setUrl(url)
	}
	let test = setFormOverlay.bind(this)

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 2500);

		return () => clearTimeout(timeout);
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

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
							type: 'image/jpeg',
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
			<Suspense fallback={`Loading...`}>
				<HeroBanner {...heroData} setFormOverlay={setFormOverlay} />
			</Suspense>
			<IntroWithLogo {...introWithLogo} />
			<Tabs data={tabs} />
			<FullWidthContent {...fullWidthContent} />
			<TwoColumnText {...twoColumnText} />
			<TwitterSlider data={twitterSliderData} onlyInternalPosts={true} />
			<Footercta {...footerCta} setFormOverlay={setFormOverlay} />
			<FormOverlay toggle={open} setFormOverlay={setFormOverlay} buttonText={'Connect with us'} url={'#'} buttonClass={'default mr-[30px]'} formUrl={url} />
		</>
	);
};

export default Home;
