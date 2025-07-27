import { motion } from "framer-motion";
import { FaPlane, FaHeartbeat, FaLaptopCode, FaBookReader, FaLeaf, FaChartLine } from "react-icons/fa";

const ServicesPage = () => {
	const fadeIn = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	const services = [
		{
			title: "Travel",
			desc: "Customized travel packages, ticketing, and corporate journey planning for seamless experiences.",
			icon: <FaPlane className="text-blue-600 text-5xl mb-4" />,
		},
		{
			title: "Healthcare",
			desc: "Accessible health services, awareness programs, and partnerships with professionals for community well-being.",
			icon: <FaHeartbeat className="text-red-500 text-5xl mb-4" />,
		},
		{
			title: "Information Technology",
			desc: "Web development, digital marketing, software solutions, and modern IT services for businesses.",
			icon: <FaLaptopCode className="text-green-500 text-5xl mb-4" />,
		},
		{
			title: "Education",
			desc: "Digital education tools, coaching, skill development, and academic support services for learners.",
			icon: <FaBookReader className="text-yellow-500 text-5xl mb-4" />,
		},
		{
			title: "Agriculture",
			desc: "Agri-consultancy, sustainable farming practices, and trading of agricultural products to boost rural economies.",
			icon: <FaLeaf className="text-green-700 text-5xl mb-4" />,
		},
		{
			title: "Trading",
			desc: "Stock market trading, investment strategies, and financial solutions for individuals and businesses.",
			icon: <FaChartLine className="text-purple-600 text-5xl mb-4" />,
		},
	];

	return (
		<div className="bg-gray-50 text-gray-800">
			{/* Hero Section */}
			<motion.section className="bg-blue-900 text-white py-20 px-6 text-center" initial="initial" animate="visible" variants={fadeIn}>
				<h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
				<p className="text-lg md:text-xl max-w-3xl mx-auto">We provide innovative solutions across multiple sectors to empower communities and businesses.</p>
			</motion.section>

			{/* Services Grid */}
			<motion.section className="py-16 max-w-7xl mx-auto px-6" initial="initial" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
				<h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">What We Offer</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition cursor-pointer" whileHover={{ scale: 1.05 }}>
							<div className="flex justify-center">{service.icon}</div>
							<h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
							<p className="text-gray-600">{service.desc}</p>
						</motion.div>
					))}
				</div>
			</motion.section>
			<motion.section className="py-16 bg-gray-100" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-blue-900 mb-10">Why Choose Us?</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								title: "Multi-Sector Expertise",
								desc: "We provide solutions in IT, Travel, Education, Healthcare, Agriculture, and Trading.",
							},
							{
								title: "Innovation-Driven",
								desc: "We adopt cutting-edge technology to create efficient and future-ready solutions.",
							},
							{
								title: "Ethical Foundation",
								desc: "We work with integrity and transparency to build long-term trust with our clients.",
							},
							{
								title: "Impact-Oriented",
								desc: "Our mission is to create positive change in communities and businesses.",
							},
						].map((item, index) => (
							<motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md cursor-pointer">
								<h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
								<p className="text-gray-600 mt-2">{item.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default ServicesPage;
