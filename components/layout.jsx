import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect } from 'react'
const Header = dynamic(() => import('./header/Header'), {
	suspense: true,
})
import Footer from './Footer/Footer';
export default function Layout({ children }) {
	const [showHeader, setShowHeader] = useState(false);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowHeader(true);
		}, 100);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			{showHeader && (
				<Suspense fallback={`Loading...`}>
					<Header />
				</Suspense>
			)}
			<main className="mb-auto">
				{children}
			</main>

			{showHeader && (
				<Footer />
			)}

		</>
	)
}
