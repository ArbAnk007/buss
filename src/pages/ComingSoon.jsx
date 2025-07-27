// import { motion } from "framer-motion";
// import { FaClock } from "react-icons/fa";

// const ComingSoon = () => {
// 	return (
// 		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 via-blue-600 to-blue-900 text-white px-4">
// 			<motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center">
// 				<FaClock className="text-6xl mx-auto mb-6 text-yellow-400 animate-pulse" />
// 				<h1 className="text-4xl md:text-6xl font-extrabold mb-4">Coming Soon</h1>
// 				<p className="text-lg md:text-xl mb-8">We're working hard to launch something amazing. Stay tuned!</p>
// 				<div className="flex justify-center">
// 					<input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg text-gray-800 w-64 focus:outline-none" />
// 					<button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-r-lg font-bold hover:bg-yellow-300 transition">Notify Me</button>
// 				</div>
// 			</motion.div>
// 		</div>
// 	);
// };

// export default ComingSoon;

import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-white text-gray-900">
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
				<p className="text-lg text-gray-600 mb-6">We're working on something great. Stay tuned!</p>
			</motion.div>
		</div>
	);
};

export default ComingSoon;
