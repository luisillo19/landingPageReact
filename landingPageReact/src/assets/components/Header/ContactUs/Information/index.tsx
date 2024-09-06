import { IconType } from "react-icons";
import "./style.css";

type InformationProps = {
    ContactText: string,
    Icon: IconType
}

export default function Information({ContactText, Icon}: InformationProps) {

	return (

        <div className="information__container">
            <Icon className="information__icon" />
            <span className="information__container-content">{ContactText}</span>
        </div>
    )
}
