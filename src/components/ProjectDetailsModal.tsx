import { Carousel, Modal } from "flowbite-react";
import domkyLandingPage from "../assets/static/domky/domky_lading_page.png";
import domkyListingDetails from "../assets/static/domky/listing_details_1.png";

export type Project = "Domky" | "Kawa i trawa" | "Web portfolio" | null;

const projects: any = {
	Domky: [domkyLandingPage, domkyListingDetails],
	"Kawa i trawa": [],
	"Web portfolio": [],
};

const ProjectDetailsModal: React.FC<{
	project: Project;
	setProject: any;
}> = ({ project, setProject }) => {
	return (
		<Modal show={project !== null} onClose={() => setProject(null)}>
			<Modal.Header>{project}</Modal.Header>
			<Modal.Body>
				{!!project && (
					<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
						<Carousel slide={false}>
							{projects[project!].map((imgPath: any, idx: any) => {
								console.log(imgPath);
								return <img src={imgPath} key={idx} alt="React Logo" />;
							})}
						</Carousel>
					</div>
				)}
			</Modal.Body>
		</Modal>
	);
};

export default ProjectDetailsModal;
