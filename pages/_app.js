import { Provider } from "jotai";
import { AnimatePresence } from "framer-motion";

import "styles/index.scss";

function MyApp({ Component, pageProps, router }) {
	return (
		<Provider>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</Provider>
	);
}

export default MyApp;
