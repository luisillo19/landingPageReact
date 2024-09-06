import SearchConsultingContainer from "./SearchConsultingContainer";
import NavBar from "./NavBar";
import Logo from "./Logo";
import './style.css'


export default function Menu() {
	return (
		<div className="header__bottomnav">
			<Logo src='/public/logo.png' alt='Company Logo' className='logo' />
			<NavBar />
			<SearchConsultingContainer className="search__consulting-container" />
		</div>
	);
}
