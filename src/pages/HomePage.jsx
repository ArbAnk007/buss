import { motion } from "framer-motion";

const HomePage = () => {
	const fadeIn = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	const staggerContainer = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const services = [
		{ title: "Travel", desc: "Customized travel packages and corporate journeys." },
		{ title: "Healthcare", desc: "Health services and awareness in rural areas." },
		{ title: "IT Solutions", desc: "Web development, marketing, and software." },
		{ title: "Education", desc: "Coaching, digital tools, and skill development." },
		{ title: "Agriculture", desc: "Agri-consultancy and sustainable farming." },
		{ title: "Trading", desc: "Wholesale and retail of essentials and tech." },
	];

	return (
		<div id="home" className="bg-gray-50 text-gray-800">
			<motion.section className="min-h-screen flex items-center justify-center px-4" initial="hidden" animate="visible" variants={fadeIn}>
				<div className="text-center max-w-2xl">
					<h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Empowering Lives, Brightening Futures</h1>
					<p className="text-lg md:text-xl text-gray-600 mb-8">We provide services in Travel, Healthcare, IT, Education, Agriculture, and Trading — all from the heart of Bihar.</p>
					<motion.a href="#services" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition">
						Explore Our Services
					</motion.a>
				</div>
			</motion.section>

			<motion.section id="about" className="py-16 bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-blue-800 mb-4">Who We Are</h2>
					<p className="text-gray-700 text-md">Bright Up is a startup committed to positive transformation in multiple sectors. We blend innovation with impact to bridge gaps and deliver high-quality services to communities.</p>
				</div>
			</motion.section>

			<motion.section id="services" className="py-16 bg-gray-100" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Core Services</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<motion.div key={index} variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md cursor-pointer" whileHover={{ scale: 1.05 }}>
								<h3 className="text-xl font-semibold text-blue-700">{service.title}</h3>
								<p className="text-gray-600 mt-2">{service.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default HomePage;
