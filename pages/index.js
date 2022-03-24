import Image from "next/image";
import Link from "next/link";
import Layout from "components/Layout";

import { motion } from "framer-motion";
import { fadeIn, fadeUp, stagger } from "util/animations";

export default function Index() {
	return (
		<Layout>
			<div className="container mx-auto h-screen text-white text-center">
				<motion.div
					variants={stagger}
					className="relative top-1/2 -translate-y-1/2 w-1/2 inline-block">
					<motion.h1
						variants={fadeUp}
						className="text-5xl font-bold leading-tight mb-4">
						Personal Training Reinvented
					</motion.h1>
					<motion.h3
						variants={fadeUp}
						className="text-3xl leading-snug mb-8">
						Start your free trial today.
						<br />
						No credit card required.
					</motion.h3>
					<motion.div variants={fadeUp}>
						<Link href="/">
							<a className="px-8 py-4 border text-xs font-semibold uppercase bg-transparent transition-colors border-white text-white hover:bg-white hover:text-black">
								Get Started →
							</a>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</Layout>
	);
}
