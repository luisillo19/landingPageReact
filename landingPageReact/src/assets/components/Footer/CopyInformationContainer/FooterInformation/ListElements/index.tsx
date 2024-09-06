import { IconType } from "react-icons";
import Information from "../../../../Header/ContactUs/Information";
import "./style.css";

type ItemType = {
	text: string;
	link?: string;
	type: "link" | "icon" | "text";
	icon?: IconType; // Puedes especificar un tipo más preciso si tienes un tipo específico de icono
};

type ListElementsProps = {
	title: string;
	items: ItemType[];
};

export default function ListElements({ title, items }: ListElementsProps) {
	return (
		<div className="footer-list">
			<h3>{title}</h3>
			<ul>
				{items.map((item) => {
					if (item.type === "link") {
						return (
							<li key={item.link}>
								<a href="#">{item.text}</a>
							</li>
						);
					} else if (item.type === "icon" && item.icon) {
						return (
							<Information
								ContactText={item.text}
								Icon={item.icon}
							/>
						);
					}
				})}
			</ul>
		</div>
	);
}
