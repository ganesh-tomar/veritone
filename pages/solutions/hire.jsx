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

import { hireBanner, hireStickyNavData, hireTabs, hireColTwoCards, hireResourceCards, hireTwitterSliderData, hireIntroWithAccordionData1, hireIntroWithAccordionData2, hireIntroWithAccordionData3, hireIntroWithAccordionData4, hireFooterCta, hireThemeColor, metaData } from '../../public/solutions/hire'


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
                title={metaData.title}
                description={metaData.description}
                openGraph={{
                    url: 'https://www.veritone.com',
                    images: [
                        {
                            url: metaData.ogImagePath,
                            width: 800,
                            height: 600,
                            alt: 'Veritone',
                            type: 'image/jpeg',
                        },
                    ],
                    siteName: 'Veritone',
                }}
            />

            <BannerSecondLevel {...hireBanner} setFormOverlay={setFormOverlay} />
            <StickyNav data={hireStickyNavData} themeColor={hireThemeColor} />
            <IntroWithAccordion data={hireIntroWithAccordionData1} pt="padding-top-120" pb='no-padding-bottom' />
            <IntroWithAccordion data={hireIntroWithAccordionData2} reverse={"true"} pt='padding-medium-top' pb='no-padding-bottom' />
            <IntroWithAccordion data={hireIntroWithAccordionData3} pt='padding-medium-top' reverse={"true"} pb='no-padding-bottom' />
            <IntroWithAccordion data={hireIntroWithAccordionData4} pt='padding-medium-top' pb='padding-medium-bottom' />
            <Tabs data={hireTabs} />
            <ColTwoCards data={hireColTwoCards} />
            <ResourceCards data={hireResourceCards} />
            <TwitterSlider data={hireTwitterSliderData} onlyInternalPosts={true} />
            <Footercta {...hireFooterCta} setFormOverlay={setFormOverlay} />
            <FormOverlay toggle={open} setFormOverlay={setFormOverlay} buttonText={'Connect with us'} url={'#'} buttonClass={'default mr-[30px]'} formUrl={url} />
        </>
    );
};

export default Home;
