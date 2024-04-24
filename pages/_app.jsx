import '../styles/globals.css';
import '../components/button/button.css';
import '../styles/checkboxSwitch.css';
import ChatBot from '../components/ChatBot';
import { HeaderTracking } from '../components/Tracking';
import Head from 'next/head';

// import '@pantheon-systems/nextjs-kit/style.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>




				<HeaderTracking />
			</Head>
			<Layout>
				<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8DLN47"
					height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
				<Component {...pageProps} />
			</Layout>

			{/* <ChatBot /> */}
		</>
	);
}

export default MyApp;
