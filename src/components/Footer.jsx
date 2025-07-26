const Footer = () => {
	return (
		<footer className="bg-blue-900 text-white py-6">
			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
				<div>
					<p>© {new Date().getFullYear()} Bright Up Solution and Services</p>
					<p>Kishanganj, Bihar</p>
				</div>
				<div className="mt-4 md:mt-0">
					<p>Email: contact@brightup.in</p>
					<p>Phone: +91-XXXXXXXXXX</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
