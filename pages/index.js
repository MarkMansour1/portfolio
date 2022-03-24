import Image from "next/image";
import Link from "next/link";
import Layout from "components/Layout";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, stagger } from "util/animations";

const projects = [
	{ title: "The Cabin Studios", name: "cabinstudios" },
	{ title: "CrepPlug", name: "crepplug" },
	{ title: "Cemester", name: "cemester" },
	{ title: "DM Fitness & Performance", name: "dmfnp" },
	{ title: "Koto", name: "koto" },
	{ title: "Firth Gardens", name: "firthgardens" },
	{ title: "Denis Gardiner", name: "denisgardiner" },
	{ title: "Kingdom Compassion", name: "kingdomcompassion" },
	{ title: "Coco Cares", name: "cococares" },
];

export default function Index() {
	const [selected, setSelected] = useState(0);
	const [visible, setVisible] = useState(false);
	const [coords, setCoords] = useState({ x: 0, y: 0 });

	let size = 400;
	let half = size / 2;

	return (
		<Layout>
			<motion.div
				className="cursor"
				style={{
					width: size,
					height: size,
					opacity: visible ? 1 : 0,
					transform: visible ? "scale(1)" : "scale(0)",
					left: coords.x,
					top: coords.y,
				}}>
				<Image
					src={`/thumbnails/${projects[selected].name}.png`}
					alt={projects[selected].title}
					layout="fill"
					objectFit="cover"
				/>
			</motion.div>
			<div
				className="max-w-5xl mx-auto"
				onMouseMove={(e) => {
					setCoords({
						x: e.clientX - half,
						y: e.clientY - half,
					});
				}}>
				<motion.div
					variants={stagger}
					className="divide-y divide-gray-300">
					{projects.map((project, index) => (
						<motion.div
							variants={fadeUp}
							key={project.name}
							className="py-24 text-center">
							<Link href={`/${project.name}`}>
								<a
									className="text-4xl hover:text-white hover:drop-shadow transition"
									onMouseEnter={() => {
										setVisible(true);
										setSelected(index);
									}}
									onMouseLeave={() => setVisible(false)}>
									{project.title}
								</a>
							</Link>
						</motion.div>
					))}
				</motion.div>
			</div>
		</Layout>
	);
}
