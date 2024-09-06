import Information from "./Information";
import "./style.css";
import { LuClock4 } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import SocialNetworks from "./SocialNetworks";

const ContactInfo = {
	openingText: { text: "Mon-Fri 8:00 am-6:00 pm", icon: LuClock4 },
	phoneNumber: { text: "+91-213-666-0027", icon: LuPhone },
	contactEmail: { text: "info@example.com", icon: LuMail },
};

export default function ContactUs() {
	console.log(Object.values(ContactInfo));
	return (
		<>
			<div className="header__container">
				{Object.values(ContactInfo).map((item) => (
					<Information ContactText={item.text} Icon={item.icon} />
				))}
			</div>
			<SocialNetworks />
		</>
	);
}
