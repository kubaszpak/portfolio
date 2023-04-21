import { Modal } from "flowbite-react";

export type Project = "domky" | "kawa_trawa" | "portfolio" | null;

const ProjectDetailsModal: React.FC<{
	project: Project;
	setProject: any;
}> = ({ project, setProject }) => {
	return (
		<Modal show={project !== null} onClose={() => setProject(null)}>
			<Modal.Header>{project}</Modal.Header>
		</Modal>
	);
};

export default ProjectDetailsModal;
