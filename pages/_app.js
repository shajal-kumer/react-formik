import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import "../styles/cand-dev.css";
import "../styles/formik-style-two.css";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<header className="mt-4">
				<Link href="/">
					<a className="m-2">Demo 1 </a>
				</Link>
				<Link href="/formik-two">
					<a className="m-2">Demo 2 </a>
				</Link>
			</header>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
