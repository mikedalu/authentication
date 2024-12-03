import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<footer className="bg-red-500 text-white px-8 py-6">
			<div className="grid grid-cols-4">
				<div>LOGO</div>
				<div className="links">
					<h4 className="text-xl font-semibold">Quick Links</h4>
					<div className="flex flex-col">
						<Link to={"/home"}>Home</Link>
						<Link to={"/about"}>About</Link>
						<Link to={"/contact"}>Contact</Link>
					</div>
				</div>
				<div>
					<h4 className="text-xl font-semibold">Services</h4>
					<ul>
						<li>Web Development</li>
						<li>Mobile App Development</li>
						<li>UI/UX Design</li>
					</ul>
				</div>
				<div>
					<h4 className="text-xl font-semibold">Socials</h4>
					<div className="flex flex-col">
						<a href="https://web.facebook.com/michael.dalu" target="_blank" rel="noopener noreferrer">
							Facebook
						</a>
						<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
							{" "}
							Instagram
						</a>
						<a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
							TwitterX
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
