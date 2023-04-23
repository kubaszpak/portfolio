import { Carousel, Modal } from "flowbite-react";

import domkyLandingPage from "../assets/static/domky/domky_lading_page.png";
import domkyListingDetails from "../assets/static/domky/listing_details_1.png";

import kawaTrawaLandingPage from "../assets/static/kawa_trawa/kawa_trawa.png";

import portfolioLandingPage from "../assets/static/portfolio/portfolio.png";

export type Project = "Domky" | "Kawa i trawa" | "Web portfolio" | null;

const images = {
	Domky: [domkyLandingPage, domkyListingDetails],
	"Kawa i trawa": [kawaTrawaLandingPage],
	"Web portfolio": [portfolioLandingPage],
};

const ProjectDetailsModal: React.FC<{
	project: Project;
	setProject: React.Dispatch<React.SetStateAction<Project>>;
}> = ({ project, setProject }) => {
	return (
		<Modal
			show={project !== null}
			onClose={() => setProject(null)}
			dismissible={true}
		>
			<Modal.Header>
				<div className="font-semibold">{project}</div>
			</Modal.Header>
			<Modal.Body>
				{!!project && (
					<>
						<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
							<Carousel slide={false}>
								{images[project!].map((imgPath: string, idx: number) => {
									return (
										<img
											src={imgPath}
											key={idx}
											alt={imgPath.slice(imgPath.lastIndexOf("/") + 1)}
										/>
									);
								})}
							</Carousel>
						</div>
						<p className="mt-5 font-semibold">Project description:</p>
						<div>
							A web application that allows accommodation booking for people in
							need in Poland. The application allows users to create accounts,
							share their listings and search other listings based on
							availability, location and number of guests. The decision to share
							an accommodation is up to the host and is based on user
							communication, facilitated by a built-in live chat system.
						</div>
						<p className="font-semibold">Technologies:</p>
						<ul>
							<li>- tRPC</li>
						</ul>
						<Modal.Footer className="justify-right">
							<a
								href="https://github.com/kubaszpak/domky"
								target="_blank"
								type="button"
								className="rounded-lg bg-gradient-to-r from-black via-slate-950 to-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-slate-100 ring-2 ring-slate-100 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:focus:ring-neutral-100"
							>
								Code
							</a>
							<a
								href="https://domky.vercel.app/"
								target="_blank"
								type="button"
								className="rounded-lg px-5 py-2.5 text-center text-sm font-semibold text-slate-950 ring-2 ring-slate-950 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 dark:focus:ring-neutral-100"
							>
								Visit site
							</a>
						</Modal.Footer>
					</>
				)}
			</Modal.Body>
		</Modal>
	);
};

export default ProjectDetailsModal;
