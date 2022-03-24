import Image from "next/image";
import Layout from "components/Layout";
import { useRouter } from "next/router";

import projects from "lib/projects";
import { motion } from "framer-motion";
import { fadeIn, fadeUp, stagger } from "util/animations";

export default function Index() {
	const { name } = useRouter().query;
	let project = projects.find((p) => p.name === name);

	return (
		<Layout>
			<div className="max-w-5xl mx-auto py-16">
				<motion.div
					variants={stagger}
					className="grid grid-cols-2 gap-x-8 gap-y-16">
					<motion.div variants={fadeUp} className="text-2xl">
						{project?.title}
					</motion.div>
					<motion.div variants={fadeUp}>
						{project?.description}
					</motion.div>
					<motion.div variants={fadeUp} className="col-span-2">
						<img
							class="relative shadow-lg"
							src={`/portfolio/${project?.name}.png`}
							alt={project?.title}
						/>
					</motion.div>
				</motion.div>
			</div>
		</Layout>
	);
}
