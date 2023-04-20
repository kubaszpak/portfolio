import domky from "../assets/static/domky.png";
import portfolio from "../assets/static/portfolio.png";
import kawa_trawa from "../assets/static/kawa_trawa.png";
import { useEffect } from "react";
import useIsInViewport from "../utils/useIsInViewport";

interface ProjectsSectionProps {
	projectsSectionRef: React.MutableRefObject<HTMLDivElement>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
	projectsSectionRef,
}) => {
	const isSectionIntersecting = useIsInViewport(projectsSectionRef);

	useEffect(() => {
		if (isSectionIntersecting) {
			projectsSectionRef.current.classList.add("animationFadeInFromB");
		} else {
			projectsSectionRef.current.classList.remove("animationFadeInFromB");
		}
	}, [isSectionIntersecting]);

	return (
		<div className="my-40">
			<h1 className="text-center font-semibold">Projects</h1>
			<div
				ref={projectsSectionRef}
				className="mx-auto max-w-7xl p-8 opacity-0 xl:flex"
			>
				<div className="mt-10 flex flex-1 flex-col items-center">
					<img
						className="lighten mb-3 sm:max-w-xs"
						src={kawa_trawa}
						alt="Kawa i trawa"
					/>
					Kawa i trawa
				</div>
				<div className="flex flex-[2] flex-col items-center">
					<img
						className="lighten mb-3 sm:max-w-sm lg:max-w-md"
						src={domky}
						alt="Domky"
					/>
					Domky
				</div>
				<div className="mt-10 flex flex-1 flex-col items-center">
					<img
						className="lighten mb-3 sm:max-w-xs"
						src={portfolio}
						alt="Portfolio"
					/>
					Web portfolio
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
