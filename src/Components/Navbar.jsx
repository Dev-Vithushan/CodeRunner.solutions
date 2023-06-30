import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import Logo from "../images/logo.png"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img  style={{ width: 150, height: 75, marginTop:30 }} src={Logo} alt="Logo" />
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Services</a>
				<a href="/#">Blog</a>
				<a href="/#">Meet Team</a>
        <a className="containerContact" href="/#">Contact Us</a>
        <a href="/#">About Us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;