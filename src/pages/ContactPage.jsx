import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Thank you for contacting us!");
		setFormData({ name: "", email: "", message: "" });
	};

	const fadeIn = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
	};

	return (
		<div className="bg-gray-50 text-gray-800">
			{/* Hero Section */}
			<motion.section className="bg-blue-900 text-white py-20 px-6 text-center" initial="initial" animate="visible" variants={fadeIn}>
				<h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
				<p className="text-lg md:text-xl max-w-3xl mx-auto">We'd love to hear from you. Reach out to us for inquiries, partnerships, or support.</p>
			</motion.section>

			{/* Contact Form & Details */}
			<motion.section className="py-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10" initial="initial" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
				{/* Form */}
				<div className="bg-white p-8 rounded-lg shadow-md">
					<h2 className="text-2xl font-bold text-blue-800 mb-6">Send us a message</h2>
					<h2 className="text-lg text-gray-600 mb-6">We're available 24x7</h2>
					<form onSubmit={handleSubmit} className="space-y-4">
						<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
						<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
						<textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
						<motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
							Send Message
						</motion.button>
					</form>
				</div>

				{/* Contact Info + Map */}
				<div className="flex flex-col justify-between bg-gray-100 p-8 rounded-lg shadow-md">
					<div>
						<h2 className="text-2xl font-bold text-blue-800 mb-6">Get in Touch</h2>
						<p className="mb-4">Have questions? Feel free to reach out through the following channels:</p>
						<ul className="space-y-3 text-gray-700 mb-6">
							<li>
								<strong>Email:</strong> contact@bussindia.in
							</li>
							<li>
								<strong>Phone:</strong> +91-8743074319
							</li>
							<li>
								<strong>Phone:</strong> +91-9430673437
							</li>
							<li>
								<strong>Location:</strong> Kishanganj, Bihar
							</li>
						</ul>
					</div>
					<iframe title="Bright Up Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28741.678911532273!2d87.9418024!3d26.1151301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA2JzU0LjUiTiA4N8KwNTYnMzkuOCJF!5e0!3m2!1sen!2sin!4v1690228830000!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"></iframe>
				</div>
			</motion.section>
		</div>
	);
};

export default ContactPage;
