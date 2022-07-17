import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const jssStyles = document.getElementById("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
