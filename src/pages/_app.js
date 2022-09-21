import LocalStorageContextProvider, { Updater as LocalStorageContextUpdater } from '~/contexts/LocalStorage'
import { useAnalytics } from '~/hooks'
import '~/Theme/globals.css'
import '../assets/css/bootstrap-extended.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/icons.css'
import '../assets/css/pace.min.css'
import '../assets/css/app.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from './ga'


function App({ Component, pageProps }) {
	useAnalytics()
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url) => {
		  ga.pageview(url)
		}
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on('routeChangeComplete', handleRouteChange)
	
		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
		  router.events.off('routeChangeComplete', handleRouteChange)
		}
	  }, [router.events])
	

	return (
		<LocalStorageContextProvider>
			<LocalStorageContextUpdater />
			<Component {...pageProps} />
		</LocalStorageContextProvider>
	)
}

export default App
