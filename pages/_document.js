import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
                <meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Veritone | AI that makes you even better" />
				<meta name="twitter:description" content="Transform your workflows and superpower your teams with innovative, custom AI solutions, AI services, and a powerful enterprise AI platform." />
				{/* <meta name="twitter:image" content="https://nextjs.veritone.com/images/veritone_OG_image.jpg" /> */}
				<meta name="twitter:site" content="https://twitter.com/veritoneinc" />

                <script strategy="lazyOnload"
					dangerouslySetInnerHTML={{
						__html: `  window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
				  
					gtag('config', 'G-V9F3W9WQ5R');`}}
				/>
                <script strategy="lazyOnload"
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-K8DLN47');`}}
				/>
				<script strategy="lazyOnload"
					dangerouslySetInnerHTML={{
						__html: `window.addEventListener('message', function()
					{
					  if(event.data.sendToGA)
					{
					   console.log('message successfully sent');
					   let eventName = event.data.eventName;
					   gtag('event', eventName, {});
					}
					}
					);`}}
				/>
                <script strategy="lazyOnload"
					dangerouslySetInnerHTML={{__html:`	function initPardot() {
						if (window.pardotDidInit) {
							return false;
						}
						window.pardotDidInit = true; // flag to ensure script does not get added to DOM more than once.
						const script = document.createElement('script');
						script.type = 'text/javascript';
						script.async = true;
						script.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
						var c = document.getElementsByTagName('script')[0];
						c.parentNode.insertBefore(script, c);
					}
					initPardot()`}}
				/>
				<script strategy="lazyOnload"
					dangerouslySetInnerHTML={{__html:`piAId = '637301';
					piCId = '20529';
					piHostname = 'pi.pardot.com';`}}
				/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;





