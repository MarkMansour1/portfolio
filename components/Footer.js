import Link from "next/link";
import classNames from "util/classNames";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "util/animations";

const links = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Blog", href: "/blog" },
	{ name: "Contact", href: "/contact" },
];

export default function Footer(props) {
	return (
		<footer className="mt-40" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="container mx-auto">
				<div className="flex justify-between">
					<div className="w-2/3">
						<h3
							className={classNames(
								"text-5xl font-bold leading-tight avant-garde",
								props.dark ? "text-gray-500" : "text-black"
							)}>
							We look for not clients but brave men ready to
							create the best product.
							<br />
						</h3>
						<h3
							className={classNames(
								"mt-2 text-5xl font-bold leading-tight avant-garde",
								props.dark ? "text-gray-500" : "text-black"
							)}>
							<Link href="/contact">
								<a
									className={
										props.dark
											? "text-white"
											: "text-gray-600"
									}>
									Contact us
								</a>
							</Link>{" "}
							now to get started.
						</h3>
					</div>
					<div>
						<ul className="space-y-4">
							{links.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>
										<a
											className={classNames(
												"text-2xl",
												props.dark
													? "text-white"
													: "text-black"
											)}>
											{link.name}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex justify-between space-x-16 items-baseline py-12 mt-40 text-gray-500">
					<Link href="/privacy">
						<a>Privacy Policy</a>
					</Link>
					<Link href="/terms">
						<a>Terms and Conditions</a>
					</Link>
					<div className="text-gray-600">
						&copy; {new Date().getFullYear()} Captiva Fitness Ltd.
						Website by{" "}
						<a
							href="https://captivastudio.com"
							target="_blank"
							rel="noreferrer">
							Captiva
						</a>
						.
					</div>
				</div>
			</div>
		</footer>
	);
}
