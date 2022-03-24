import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, stagger } from "util/animations";

export default function Nav() {
	return (
		<motion.header variants={fadeIn}>
			<div className="w-full text-center py-12 border-b border-gray-300">
				<Link href="/">
					<a>
						<h1 className="text-xl">Mark Mansour</h1>
						<h3>Portfolio</h3>
					</a>
				</Link>
			</div>
		</motion.header>
	);
}
