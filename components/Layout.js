import Nav from "./Nav";
import Footer from "./Footer";
import classNames from "util/classNames";

import { motion } from "framer-motion";

export default function Layout(props) {
	return (
		<>
			<motion.div
				initial="initial"
				animate="animate"
				exit={{ opacity: 0 }}>
				<Nav dark={!props.lightHeader} />
				<main className="min-h-screen">{props.children}</main>
				<Footer dark={!props.lightFooter} />
			</motion.div>
			{!props.noNoise && <div className="noise bg-gray-900" />}
		</>
	);
}
