import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

const HeroBanner = dynamic(() => import('../components/HeroBanner'), {
	suspense: true,
})
const IntroWithLogo = dynamic(() => import('../components/IntroWithLogo'));
const TwoColumnText = dynamic(() => import('../components/TwoColumnText'));
const Tabs = dynamic(() => import('../components/Tabs'));
const TwitterSlider = dynamic(() => import('../components/TwitterSlider'));
const FullWidthContent = dynamic(() => import('../components/FullWidthContent'));
const FormOverlay = dynamic(() => import('../components/global/FormOverlay'));
const Footercta = dynamic(() => import('../components/Footercta'));

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
