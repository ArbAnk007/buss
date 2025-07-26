import { heroBannerBig, travelImage, healthcareImage, itImage } from "../images/index.js";
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

// function HomePage() {
// 	const services = [
// 		{
// 			name: "travel",
// 			discription: "Seamless travel experiences — from planning to execution. We offer customized travel packages, ticketing, and support for personal and corporate journeys.",
// 			img: travelImage,
// 			rev: false,
// 		},
// 		{
// 			name: "healthcare",
// 			discription: "Seamless travel experiences — from planning to execution. We offer customized travel packages, ticketing, and support for personal and corporate journeys.",
// 			img: healthcareImage,
// 			rev: true,
// 		},
// 		{
// 			name: "it",
// 			discription: "Seamless travel experiences — from planning to execution. We offer customized travel packages, ticketing, and support for personal and corporate journeys.",
// 			img: itImage,
// 			rev: false,
// 		},
// 		{
// 			name: "trading",
// 			discription: "Seamless travel experiences — from planning to execution. We offer customized travel packages, ticketing, and support for personal and corporate journeys.",
// 			img: travelImage,
// 			rev: true,
// 		},
// 	];

// 	return (
// 		<div>
// 			{/* <div className="heading mb-16 flex flex-col items-center gap-y-2">
// 				<div>
// 					<p className="text-6xl font-bold text-[#2aa6a8]">BUSS</p>
// 				</div>
// 				<div className="w-[80%]">
// 					<p className="text-xl text-center font-semibold">Bright Up Solution and Services is a dynamic startup committed to driving positive transformation across key sectors: Travel, Healthcare, Information Technology, Education, Agriculture, and Trading. Founded by a visionary duo, our company is built on the values of innovation, integrity, and impact. We are on a mission to bridge gaps, unlock opportunities, and bring high-quality services.</p>
// 				</div>
// 			</div> */}
// 			<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
// 			{services.map((item) => (
// 				<div key={item.name} className={`flex justify-around mt-8 mb-8 gap-x-4 ${item.rev ? "flex-row-reverse" : ""}`}>
// 					<div className="w-[50%] flex items-center">
// 						<p className="text-2xl text-center">{item.discription}</p>
// 					</div>
// 					<div className="flex items-center w-[50%]">
// 						<img src={item.img} alt="" className="rounded-4xl w-full h-96 object-cover" />
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// export default HomePage;
