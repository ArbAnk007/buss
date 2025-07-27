// const Footer = () => {
// 	return (
// 		<footer className="bg-blue-900 text-white py-6">
// 			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
// 				<div>
// 					<p>© {new Date().getFullYear()} Bright Up Solution and Services</p>
// 					<p>Kishanganj, Bihar</p>
// 				</div>
// 				<div className="mt-4 md:mt-0">
// 					<p>Email: contact@brightup.in</p>
// 					<p>Phone: +91-XXXXXXXXXX</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;

import React from "react";

const Footer = () => {
	return (
		<footer className="bg-blue-900 text-white py-10">
			<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
				{/* Company Info */}
				<div>
					<h2 className="text-xl font-bold mb-4">Bright Up Solution and Services</h2>
					<p className="text-sm text-gray-300 mb-2">Empowering Lives, Brightening Futures</p>
					<p className="text-sm">Head Office:</p>
					<p className="text-sm">Shop no-3, Sarah Market</p>
					<p className="text-sm">Sultanganj Colony, Uttarpali</p>
					<p className="text-sm">Ward no-01</p>
					<p className="text-sm">Kishanganj 855107, Bihar</p>
					<p className="text-sm mt-2">Email: contact@bussindia.in</p>
					<p className="text-sm">Phone: +91-8743074319</p>
					<p className="text-sm">Phone: +91-9430673437</p>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
					<ul className="space-y-2 text-gray-300">
						<li>
							<a href="/" className="hover:text-yellow-400">
								Home
							</a>
						</li>
						<li>
							<a href="/about" className="hover:text-yellow-400">
								About Us
							</a>
						</li>
						<li>
							<a href="/services" className="hover:text-yellow-400">
								Services
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:text-yellow-400">
								Contact
							</a>
						</li>
					</ul>
				</div>

				{/* Social Media */}
				<div>
					<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
					<div className="flex space-x-4">
						{/* Facebook */}
						<a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
							<svg className="w-6 h-6 fill-white hover:fill-yellow-400 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.482v-9.294H9.692v-3.622h3.115V8.41c0-3.1 1.892-4.788 4.659-4.788 1.325 0 2.463.099 2.794.144v3.238l-1.918.001c-1.505 0-1.796.716-1.796 1.763v2.311h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z" />
							</svg>
						</a>
						{/* X (Twitter) */}
						<a href="https://twitter.com" aria-label="X" target="_blank" rel="noopener noreferrer">
							<svg className="w-6 h-6 fill-white hover:fill-yellow-400 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227">
								<path d="M714.163 519.284L1160.89 0H1054.57L669.835 450.887L356.413 0H0L468.035 681.368L0 1226.31H106.32L512.173 744.736L843.587 1226.31H1200L714.163 519.284ZM561.273 687.531L518.746 627.327L145.993 79.5751H301.017L601.74 508.497L644.267 568.702L1068.57 1147.01H914.292L561.273 687.531Z" />
							</svg>
						</a>
						{/* Instagram */}
						<a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
							<svg className="w-6 h-6 fill-white hover:fill-yellow-400 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 189.6c-41.1 0-74.7-33.6-74.7-74.7s33.6-74.7 74.7-74.7 74.7 33.6 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9C385.7 48 354.3 39.8 319 38.1c-35.6-1.7-142.4-1.7-178 0-35.3 1.7-66.7 9.9-92.9 36.2S9.8 126.3 8.1 161.6c-1.7 35.6-1.7 142.4 0 178 1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.6 1.7 142.4 1.7 178 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.6 1.7-142.4 0-178zm-48.3 214.7c-7.8 19.6-23 34.8-42.6 42.6-29.5 11.7-99.5 9-132.6 9s-103.1 2.6-132.6-9c-19.6-7.8-34.8-23-42.6-42.6-11.7-29.5-9-99.5-9-132.6s-2.6-103.1 9-132.6c7.8-19.6 23-34.8 42.6-42.6 29.5-11.7 99.5-9 132.6-9s103.1-2.6 132.6 9c19.6 7.8 34.8 23 42.6 42.6 11.7 29.5 9 99.5 9 132.6s2.6 103.1-9 132.6z" />
							</svg>
						</a>

						{/* YouTube */}
						<a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
							<svg className="w-6 h-6 fill-white hover:fill-yellow-400 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path d="M23.498 6.186a2.958 2.958 0 00-2.08-2.088C19.305 3.5 12 3.5 12 3.5s-7.305 0-9.418.598a2.958 2.958 0 00-2.08 2.088C0 8.305 0 12 0 12s0 3.695.502 5.814a2.958 2.958 0 002.08 2.088C4.695 20.5 12 20.5 12 20.5s7.305 0 9.418-.598a2.958 2.958 0 002.08-2.088C24 15.695 24 12 24 12s0-3.695-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
							</svg>
						</a>
						{/* LinkedIn */}
						<a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
							<svg className="w-6 h-6 fill-white hover:fill-yellow-400 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zM7.119 20.452H3.558V9h3.561v11.452zM5.338 7.633c-1.137 0-2.061-.926-2.061-2.065 0-1.14.924-2.065 2.061-2.065s2.062.925 2.062 2.065c0 1.139-.925 2.065-2.062 2.065zM20.452 20.452h-3.561v-5.724c0-1.364-.026-3.115-1.899-3.115-1.902 0-2.195 1.489-2.195 3.023v5.816h-3.561V9h3.42v1.561h.048c.476-.899 1.637-1.848 3.368-1.848 3.6 0 4.266 2.368 4.266 5.449v6.29z" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<div className="text-center text-sm text-gray-300 mt-8">© {new Date().getFullYear()} Bright Up Solution and Services. All rights reserved.</div>
		</footer>
	);
};

export default Footer;
