import { Accordion, Carousel, Modal } from "flowbite-react";

import domkyLandingPage from "../assets/static/domky/domky_lading_page.png";
import domkyListingDetails from "../assets/static/domky/listing_details_1.png";

import kawaTrawaLandingPage from "../assets/static/kawa_trawa/kawa_trawa.png";

import portfolioLandingPage from "../assets/static/portfolio/portfolio.png";

export type Project = "domky" | "kawa_trawa" | "portfolio" | null;

const projects = {
	domky: {
		title: "Domky",
		images: [domkyLandingPage, domkyListingDetails],
	},
	kawa_trawa: { title: "Kawa i trawa", images: [kawaTrawaLandingPage] },
	portfolio: {
		title: "Web portfolio",
		images: [portfolioLandingPage],
	},
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
				{project && (
					<div className="font-semibold">{projects[project].title}</div>
				)}
			</Modal.Header>
			<Modal.Body>
				{!!project && (
					<>
						<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
							<Carousel slide={false}>
								{projects[project!].images.map(
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
						<Accordion className="mt-8">
							<Accordion.Panel>
								<Accordion.Title>Project description</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										A web application that allows accommodation booking for
										people in need in Poland. The application allows users to
										create accounts, share their listings and search other
										listings based on availability, location and number of
										guests. The decision to share an accommodation is up to the
										host and is based on user communication, facilitated by a
										built-in live chat system.
									</p>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>Technologies</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										<ul>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
											<li>- tRPC</li>
										</ul>
									</p>
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion>
					</>
				)}
			</Modal.Body>
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
		</Modal>
	);
};

export default ProjectDetailsModal;
