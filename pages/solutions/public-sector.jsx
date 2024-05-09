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


import { publicBanner, publicStickyNavData, publicTabs, publicAccordionData, publicColTwoCards, publicResourceCards, publicTwitterSliderData, publicIntroWithAccordionData1, publicIntroWithAccordionData2, publicIntroWithAccordionData3, publicIntroWithAccordionData4, publicFooterCta, publicthemeColor } from '../../public/solutions/public-sector'


const Home = () => {
    const [open, setOpen] = useState(0)
    const [url, setUrl] = useState('im not a big fan of the government')

    const setFormOverlay = (url) => {
        open == 0 ? setOpen(1) : setOpen(0)
        setUrl(url)
    }

    const router = useRouter();
    return (
        <>
            <NextSeo
                title="AI Solutions for Media, Entertainment & Broadcast | Veritone"
                description="Transform your media & entertainment business with Veritone's AI solutions. Drive growth and innovation. Click now."
                canonical='https://www.veritone.com'
                openGraph={{
                    url: 'https://www.veritone.com',
                    title: 'AI for the greater good | Veritone Public Sector',
                    description: "Transform workflows, unlock new efficiencies, and streamline time-consuming processes with powerful AI solutions that help government, legal, and education organizations better serve their communities.",
                    images: [
                        {
                            url: '/images/public-sector/veritone_ps_OG_image.jpeg',
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
            <BannerSecondLevel {...publicBanner} setFormOverlay={setFormOverlay} />
            <StickyNav data={publicStickyNavData} themeColor={publicthemeColor} />
            <IntroWithAccordion data={publicIntroWithAccordionData1} pt="padding-top-120" pb='no-padding-bottom' />
            <IntroWithAccordion data={publicIntroWithAccordionData2} reverse={"true"} pt='padding-medium-top' pb='no-padding-bottom' />
            <IntroWithAccordion data={publicIntroWithAccordionData3} pt='padding-medium-top' pb='no-padding-bottom' />
            <IntroWithAccordion data={publicIntroWithAccordionData4} reverse={"true"} pt='padding-medium-top' pb='padding-medium-bottom' />
            <Tabs data={publicTabs} />
            <Accordion data={publicAccordionData} />
            <ColTwoCards data={publicColTwoCards} />
            <ResourceCards data={publicResourceCards} />
            <TwitterSlider data={publicTwitterSliderData} onlyInternalPosts={true} />
            <Footercta {...publicFooterCta} setFormOverlay={setFormOverlay} />
            <FormOverlay toggle={open} setFormOverlay={setFormOverlay} buttonText={'Connect with us'} url={'#'} buttonClass={'default mr-[30px]'} formUrl={url} />
        </>
    );
};

export default Home;
