import LocalStorageContextProvider, { Updater as LocalStorageContextUpdater } from '~/contexts/LocalStorage'
import { useAnalytics } from '~/hooks'
import '~/Theme/globals.css'
import '../assets/css/bootstrap-extended.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/icons.css'
import '../assets/css/pace.min.css'
import '../assets/css/app.css'

function App({ Component, pageProps }) {
	useAnalytics()

	return (
		<LocalStorageContextProvider>
			<LocalStorageContextUpdater />
			<Component {...pageProps} />
		</LocalStorageContextProvider>
	)
}

export default App
