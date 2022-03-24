import Image from "next/image";
import Link from "next/link";
import classNames from "util/classNames";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Fade as Hamburger } from "hamburger-react";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, stagger } from "util/animations";

const links = [
	{ name: "Home", href: "/", current: true },
	{ name: "Contact", href: "/contact", current: false },
];

export default function Nav(props) {
	const router = useRouter();
	let url = router.asPath;

	const [isOpen, setOpen] = useState(false);
	const [isScrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () =>
			window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
		);
	});

	return (
		<motion.header
			variants={fadeIn}
			className={classNames(
				"w-full z-10 ",
				isScrolled && !isOpen ? "py-8" : "py-12",
				isOpen ? "fixed" : "absolute"
			)}
			style={{ transition: "padding 0.25s ease" }}>
			{/* Overlay */}
			<Transition
				show={isOpen}
				enter="transition-opacity duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-300"
				leaveFrom="opacity-100"
				leaveTo="opacity-0">
				<div
					className={classNames(
						"fixed left-0 top-0 w-screen h-screen",
						"bg-gray-900"
					)}>
					<div className="relative top-1/2 -translate-y-1/2">
						<div className="container mx-auto">
							<motion.div
								variants={stagger}
								className="flex flex-col space-y-12 ">
								{links.map((link) => (
									<motion.div
										variants={fadeUp}
										key={link.name}>
										<Link href={link.href}>
											<a
												className={classNames(
													"text-6xl font-bold cursor-pointer transition",
													"text-white hover:text-red-500"
												)}>
												{link.name}
											</a>
										</Link>
									</motion.div>
								))}
							</motion.div>
						</div>
					</div>
				</div>
			</Transition>
			{/* Navbar */}
			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<Link href="/">
						<a
							className={classNames(
								"text-xl",
								isOpen
									? "text-white hover:text-gray-500"
									: "text-black"
							)}>
							Mark Mansour
						</a>
					</Link>
					<div className="flex space-x-8 items-center">
						<Link href="/contact">
							<a
								className={classNames(
									"relative px-6 py-3 border text-xs font-semibold uppercase bg-transparent transition",
									isOpen
										? "border-white text-white hover:bg-white hover:text-black"
										: "border-black text-black hover:bg-black hover:text-white"
								)}>
								Contact
							</a>
						</Link>
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
							size={24}
							color={isOpen ? "white" : "black"}
						/>
					</div>
				</div>
			</div>
		</motion.header>
	);
}
