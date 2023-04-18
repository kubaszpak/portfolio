import domky from "../assets/static/domky.png";
import portfolio from "../assets/static/portfolio.png";
import kawa_trawa from "../assets/static/kawa_trawa.png";

interface ProjectsSectionProps {
	projectsSectionRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
	projectsSectionRef,
}) => {
	return (
		<div
			ref={projectsSectionRef}
			className="mx-auto flex min-h-screen max-w-7xl p-8"
		>
			<div className="mt-10 flex flex-1 flex-col items-center">
				<img
					className="lighten mb-3 max-w-xs"
					src={kawa_trawa}
					alt="Kawa i trawa"
				/>
				Kawa i trawa
			</div>
			<div className="flex flex-[2] flex-col items-center">
				<img className="lighten mb-3 max-w-md" src={domky} alt="Domky" />
				Domky
			</div>
			<div className="mt-10 flex flex-1 flex-col items-center">
				<img
					className="lighten mb-3 max-w-xs"
					src={portfolio}
					alt="Portfolio"
				/>
				Web portfolio
			</div>
		</div>
	);
};

export default ProjectsSection;
