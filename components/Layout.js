import Nav from "./Nav";
import Footer from "./Footer";
import classNames from "util/classNames";

import { motion } from "framer-motion";

export default function Layout({ dark, children }) {
	return (
		<motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
			<Nav dark={dark} />
			<main>{children}</main>
			<Footer />
		</motion.div>
	);
}
