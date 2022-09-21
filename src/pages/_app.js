import LocalStorageContextProvider, { Updater as LocalStorageContextUpdater } from '~/contexts/LocalStorage'
import { useAnalytics } from '~/hooks'
import '~/Theme/globals.css'
import '../assets/css/bootstrap-extended.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/icons.css'
import '../assets/css/pace.min.css'
import '../assets/css/app.css'
import Script from 'next/script'
import Head from 'next/head'


function App({ Component, pageProps }) {
	useAnalytics()

	return (
	    <>
      <Head>
        <title>Next.js</title>
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-55586655-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-55586655-1');
        `}
      </Script>
	
		<LocalStorageContextProvider>
			<LocalStorageContextUpdater />
			<Component {...pageProps} />
		</LocalStorageContextProvider>
		</>
	)
}

export default App
