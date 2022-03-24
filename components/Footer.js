import { motion } from "framer-motion";
import { fadeIn } from "util/animations";

export default function Footer() {
	return (
		<motion.footer variants={fadeIn} aria-labelledby="footer-heading">
			<div className="text-center py-16 border-t border-gray-300">
				<a
					className="text-xl"
					href="mailto:markmansour01@gmail.com"
					target="_blank"
					rel="noreferrer">
					Get In Touch
				</a>
			</div>
		</motion.footer>
	);
}
