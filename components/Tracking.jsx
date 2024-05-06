import Script from 'next/script'

export const HeaderTracking = () => {
    return (
        <Script
            strategy="beforeInteractive"
            id='gtm-script'
            dangerouslySetInnerHTML={{ __html: `console.log('test')`, }} />
    )
}
