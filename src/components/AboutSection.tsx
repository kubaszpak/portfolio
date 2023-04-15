import personalImage from "../assets/static/me.png";

interface AboutSectionProps {
	aboutSectionRef: React.MutableRefObject<HTMLDivElement | null>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutSectionRef }) => {
	return (
		<div
			ref={aboutSectionRef}
			className="mx-auto flex min-h-screen max-w-7xl flex-col items-center p-8 sm:flex-row sm:justify-around"
		>
			<p className="text-md mb-8 max-w-lg text-center sm:mb-0 sm:text-left">
				Hi, my name is Jakub,
				<br /> I've graduated Computer Science from the Wroclaw's University of
				Science and Technology in March of 2023. I'd like to continue developing
				my skills in creating beautiful user experiences on the web. I'm looking
				for opportunities where I'll be able to learn more about the frontend as
				well as the backend of web applications.
			</p>
			<img
				className="personal max-w-xs opacity-90"
				src={personalImage}
				alt="Personal photo"
			/>
		</div>
	);
};

export default AboutSection;
