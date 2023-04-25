import { Accordion, Carousel, Modal } from "flowbite-react";
import projects from "../projects";

export type Project = "domky" | "kawa_trawa" | "portfolio" | null;

const ProjectDetailsModal: React.FC<{
	project: Project;
	setProject: React.Dispatch<React.SetStateAction<Project>>;
}> = ({ project, setProject }) => {
	return (
		<Modal
			id="modal"
			show={project !== null}
			onClose={() => setProject(null)}
			dismissible={true}
		>
			<Modal.Header>
				{!!project && (
					<div className="font-semibold">{projects[project].title}</div>
				)}
			</Modal.Header>
			<Modal.Body>
				{!!project && (
					<>
						<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
							<Carousel slide={false}>
								{projects[project].images.map(
									(imgPath: string, idx: number) => {
										return (
											<img
												src={imgPath}
												key={idx}
												alt={imgPath.slice(imgPath.lastIndexOf("/") + 1)}
											/>
										);
									}
								)}
							</Carousel>
						</div>
						<Accordion className="mt-8" collapseAll>
							<Accordion.Panel>
								<Accordion.Title>Project description</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										{projects[project].description}
									</p>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>Technologies</Accordion.Title>
								<Accordion.Content>
									<ul className="circle-list mx-5 text-slate-800 dark:text-slate-200">
										{projects[project].technologies.map((technology, idx) => {
											return (
												<li key={idx} className="my-1">
													{technology}
												</li>
											);
										})}
									</ul>
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion>
					</>
				)}
			</Modal.Body>
			<Modal.Footer className="justify-right">
				{!!project && (
					<>
						<a
							href={projects[project].codeLink}
							target="_blank"
							className="rounded-lg bg-gradient-to-r from-black via-slate-950 to-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-slate-100 ring-2 ring-slate-100 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-100"
						>
							Code
						</a>
						<a
							href={projects[project].siteLink}
							target="_blank"
							className="rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-slate-950 ring-2 ring-slate-950 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 dark:focus:ring-neutral-100"
						>
							Visit site
						</a>
					</>
				)}
			</Modal.Footer>
		</Modal>
	);
};

export default ProjectDetailsModal;
