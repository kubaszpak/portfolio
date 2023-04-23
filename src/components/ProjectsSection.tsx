import domky from "../assets/static/domky.png";
import portfolio from "../assets/static/portfolio.png";
import kawa_trawa from "../assets/static/kawa_trawa.png";
import { useEffect, useState } from "react";
import useIsInViewport from "../utils/useIsInViewport";
import ProjectDetailsModal, { Project } from "./ProjectDetailsModal";
import OtherProjects from "./OtherProjects";

interface ProjectsSectionProps {
	projectsSectionRef: React.MutableRefObject<HTMLDivElement>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
	projectsSectionRef,
}) => {
	const isSectionIntersecting = useIsInViewport(projectsSectionRef);
	const [chosenProject, setChosenProject] = useState<Project>(null);

	useEffect(() => {
		if (isSectionIntersecting) {
			projectsSectionRef.current.classList.add("animationFadeInFromB");
		} else {
			projectsSectionRef.current.classList.remove("animationFadeInFromB");
		}
	}, [isSectionIntersecting]);

	return (
		<div className="my-40 p-8 opacity-0" ref={projectsSectionRef}>
			<h1 className="mb-8 text-center text-2xl font-semibold">
				Recent projects
			</h1>
			<div className="mx-auto max-w-7xl xl:flex">
				<div className="mb-8 flex flex-1 flex-col items-center xl:mt-10">
					<img
						className="lighten mb-3 sm:max-w-xs"
						src={kawa_trawa}
						alt="Kawa i trawa"
					/>
					Kawa i trawa
					<button
						onClick={() => setChosenProject("Kawa i trawa")}
						type="button"
						className="my-5 rounded-lg bg-gradient-to-r from-black via-slate-950 to-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-slate-100 ring-2 ring-slate-100 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-100"
					>
						Read more
					</button>
				</div>
				<div className="mb-8 flex flex-[2] flex-col items-center">
					<img
						className="lighten mb-3 sm:max-w-sm lg:max-w-md"
						src={domky}
						alt="Domky"
					/>
					Domky
					<button
						type="button"
						onClick={() => setChosenProject("Domky")}
						className="my-5 rounded-lg bg-gradient-to-r from-black via-slate-950 to-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-slate-100 ring-2 ring-slate-100 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-100"
					>
						Read more
					</button>
				</div>
				<div className="mb-8 flex flex-1 flex-col items-center xl:mt-10">
					<img
						className="lighten mb-3 sm:max-w-xs"
						src={portfolio}
						alt="Portfolio"
					/>
					Web portfolio
					<button
						type="button"
						className="my-5 rounded-lg bg-gradient-to-r from-black via-slate-950 to-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-slate-100 ring-2 ring-slate-100 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-100"
						onClick={() => setChosenProject("Web portfolio")}
					>
						Read more
					</button>
				</div>
				<ProjectDetailsModal
					setProject={setChosenProject}
					project={chosenProject}
				/>
			</div>
			<OtherProjects />
		</div>
	);
};

export default ProjectsSection;
