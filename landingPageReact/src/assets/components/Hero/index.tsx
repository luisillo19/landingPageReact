import HeroCard from "./Cards";
import { ButtonSectionHeroLeft } from "../Header/Menu/ButtonConsulting";
import { ButtonSectionHeroRight } from "../Header/Menu/ButtonConsulting";

export default function Hero() {
	return (
		<section className="hero__container">
			<div className="hero__content">
				<HeroCard />
				<div className="buttons__arrows">
					<ButtonSectionHeroLeft className="buttonsection__hero-left" />
					<ButtonSectionHeroRight className="buttonsection__hero-right" />
				</div>
			</div>
		</section>
	);
}
