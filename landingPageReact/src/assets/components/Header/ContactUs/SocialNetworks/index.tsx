import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import "./style.css";

export default function SocialNetworks() {
	return (
		<div className="container__loginnetworks">
			<article>
				<a className="login__link" href="#">Login</a>
			</article>

			<div className="separador"></div>

			<div className="networks-container">
				<ul>
					<li>
						<a href="#" ></a>
						<FaFacebookF className="networks__icon" />
					</li>

					<li>
						<a href="#"></a>
						<FaTwitter className="networks__icon" />
					</li>

					<li>
						<a href="#"></a>
						<FaLinkedinIn className="networks__icon" /> 
					</li>
				</ul>
			</div>
		</div>
	);
}
