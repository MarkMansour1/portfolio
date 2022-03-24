let easing = [];

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const fadeUp = {
	initial: {
		y: 32,
		opacity: 0,
		transition: { duration: 0.5 },
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

const fadeIn = {
	initial: {
		opacity: 0,
		transition: { duration: 0.5 },
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 0.25,
		},
	},
};

export { stagger, fadeIn, fadeUp };
