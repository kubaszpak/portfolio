import { useEffect } from "react";
import personalImage from "../assets/static/me_circle.png";
import useIsInViewport from "../utils/useIsInViewport";

interface AboutSectionProps {
	aboutSectionRef: React.MutableRefObject<HTMLDivElement>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutSectionRef }) => {
	const isSectionIntersecting = useIsInViewport(aboutSectionRef);

	useEffect(() => {
		if (isSectionIntersecting) {
			aboutSectionRef.current.classList.add("animationFadeInFromB");
		} else {
			aboutSectionRef.current.classList.remove("animationFadeInFromB");
		}
	}, [isSectionIntersecting]);

	return (
		<div className="my-40">
			<div
				ref={aboutSectionRef}
				id="about"
				className="mx-auto flex max-w-7xl flex-col items-center p-8 opacity-0 sm:flex-row sm:justify-around"
			>
				<p className="text-md mb-8 max-w-lg text-center sm:mb-0 sm:text-left">
					Hi, my name is Jakub,
					<br />I graduated from the Wroclaw University of Science and
					Technology with a degree in Computer Science in March of 2023. I'd
					like to continue developing my skills in creating beautiful user
					experiences on the web. I'm looking for opportunities where I'll be
					able to learn more about the frontend as well, as the backend of web
					applications.
				</p>
				<img
					className="lighten max-w-xs opacity-90"
					src={personalImage}
					alt="Personal photo"
				/>
			</div>
		</div>
	);
};

export default AboutSection;
