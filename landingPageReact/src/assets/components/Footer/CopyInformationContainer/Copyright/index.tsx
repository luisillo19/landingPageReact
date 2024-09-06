import "./style.css";

type CopyrightProps = {
	copyrightContainer: string;
	copyrightContent: string;
	copyrightLink: string;
	hrefLink: string;
	text: string;
    paragraphContentOne: string;
    paragraphContentTwo: string
};

export default function Copyright({
	copyrightContainer,
	copyrightContent,
	copyrightLink,
	text,
    paragraphContentOne,
    paragraphContentTwo
}: CopyrightProps) {
	return (
		<div className={copyrightContainer}>
			<p className={copyrightContent}>{paragraphContentOne}<a className={copyrightLink} href="#">{text}</a>{paragraphContentTwo}</p>
		</div>
	);
}
