import ContactUs from "./ContactUs";
import Menu from "./Menu";



export default function Header() {
	return (
		<header className="header">
			<div className="top__header">
				<ContactUs />
			</div>
			<div className="lower__header">
				<Menu />
			</div>
		</header>
	);
}
