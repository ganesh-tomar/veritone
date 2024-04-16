// import { Footer, Header, PreviewRibbon } from '@pantheon-systems/nextjs-kit';
// import styles from './layout.module.css';
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Header from './header/Header'
const DynamicHeader = dynamic(() => import('./header/Header'), {
	suspense: true,
  })
import Footer from './Footer/Footer';
export default function Layout({ children }) {
	


	return (
		<>
			<Suspense fallback={`Loading...`}>
				<DynamicHeader />
			</Suspense>
			<main className="mb-auto">
				{children}
			</main>
			<Footer />
		</>
	)
}
