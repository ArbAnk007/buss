import { motion } from "framer-motion";
import { directorImageOne, directorImageTwo } from "../images/index.js";

const pageVariants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const AboutPage = () => {
	return (
		<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className="bg-gray-50 text-gray-800 min-h-screen">
			{/* Hero Section */}
			<section className="bg-blue-900 text-white py-20 px-6 text-center">
				<h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
				<p className="text-lg md:text-xl max-w-3xl mx-auto">Empowering lives and brightening futures through innovation, integrity, and impact.</p>
			</section>

			{/* Company Overview */}
			<section className="py-16 max-w-6xl mx-auto px-6 text-center">
				<h2 className="text-3xl font-bold text-blue-900 mb-6">Who We Are</h2>
				<p className="text-gray-700 text-lg max-w-4xl mx-auto">Bright Up Solution and Services is a dynamic startup headquartered in Kishanganj, Bihar. We are committed to bridging gaps and delivering high-quality services across Travel, Healthcare, Information Technology, Education, Agriculture, and Trading. Our mission is to empower communities, unlock opportunities, and create a positive social impact.</p>
			</section>

			{/* Core Values */}
			<section className="py-16 bg-gray-100">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-blue-900 mb-10">Our Core Values</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{ title: "Innovation", desc: "We bring modern solutions to traditional challenges." },
							{ title: "Integrity", desc: "Honesty and transparency in everything we do." },
							{ title: "Impact", desc: "Creating positive change in communities and businesses." },
						].map((value, i) => (
							<motion.div key={i} className="bg-white p-6 rounded-lg shadow-md cursor-pointer" whileHover={{ scale: 1.05 }}>
								<h3 className="text-xl font-semibold text-blue-700">{value.title}</h3>
								<p className="text-gray-600 mt-2">{value.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Leadership Section */}
			<section className="py-16 max-w-6xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Leadership</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{/* Aamir Ashraf */}
					<motion.div className="bg-white p-6 rounded-lg shadow-md cursor-pointer flex flex-col items-center text-center gap-y-4" whileHover={{ scale: 1.03 }}>
						<div className="w-80 h-[400px]">
							<img src={directorImageOne} alt="Aamir Ashraf" className="w-full h-full object-fit rounded-lg" />
						</div>
						<h3 className="text-2xl font-semibold text-blue-800">Aamir Ashraf</h3>
						<p className="text-sm text-gray-500 mb-2">Senior Technology & Network Specialist | Strategic Leader for Startups</p>
						<p className="text-gray-700">Aamir is an accomplished Electronics & Communication Engineer with a Master’s degree and over a decade of experience in networking and technology leadership. He has managed complex infrastructures, led teams, and delivered scalable solutions for startups. Passionate about leveraging technology for real-world problems, he specializes in education, IT, travel, and trading sectors.</p>
					</motion.div>

					{/* Musarrat Perween */}
					<motion.div className="bg-white p-6 rounded-lg shadow-md cursor-pointer flex flex-col items-center text-center gap-y-4" whileHover={{ scale: 1.03 }}>
						<div className="w-80 h-[400px]">
							<img src={directorImageTwo} alt="Musarrat Perween" className="w-full h-full object-fit rounded-lg" />
						</div>
						<h3 className="text-2xl font-semibold text-blue-800">Musarrat Perween</h3>
						<p className="text-sm text-gray-500 mb-2">Social Development Expert | Philanthropist | Advocate for Rural Empowerment</p>
						<p className="text-gray-700">Musarrat holds a degree in Psychology and is passionate about rural empowerment and social development. With extensive experience in agriculture programs and healthcare initiatives, she designs impactful community programs that uplift rural areas through sustainable agriculture, health awareness, and education.</p>
					</motion.div>
				</div>
			</section>
		</motion.div>
	);
};

export default AboutPage;
