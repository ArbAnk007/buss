import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	const navVariants = {
		hidden: { y: -60, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
	};

	return (
		<motion.nav className="bg-blue-900 text-white p-4 shadow-md fixed w-full top-0 z-50" initial="hidden" animate="visible" variants={navVariants}>
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				{/* Logo */}
				<div className="text-2xl font-bold cursor-pointer">
					<NavLink to="/">Bright Up</NavLink>
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-6 text-sm">
					<li>
						<NavLink to="/home" className="hover:text-yellow-300">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" className="hover:text-yellow-300">
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="/services" className="hover:text-yellow-300">
							Services
						</NavLink>
					</li>
					<li>
						<NavLink to="/careers" className="hover:text-yellow-300">
							Careers
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" className="hover:text-yellow-300">
							Contact
						</NavLink>
					</li>
				</ul>

				{/* Mobile Toggle Button */}
				<div className="md:hidden cursor-pointer" onClick={toggleMenu}>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden bg-blue-800 mt-4 rounded-lg shadow-lg">
					<ul className="flex flex-col space-y-4 p-4">
						<li>
							<NavLink to="/home" className="hover:text-yellow-300" onClick={toggleMenu}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className="hover:text-yellow-300" onClick={toggleMenu}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink to="/services" className="hover:text-yellow-300" onClick={toggleMenu}>
								Services
							</NavLink>
						</li>
						<li>
							<NavLink to="/careers" className="hover:text-yellow-300" onClick={toggleMenu}>
								Careers
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" className="hover:text-yellow-300" onClick={toggleMenu}>
								Contact
							</NavLink>
						</li>
					</ul>
				</motion.div>
			)}
		</motion.nav>
	);
};

export default Header;
