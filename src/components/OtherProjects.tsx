import { Card } from "flowbite-react";

const otherProjects = [
	{
		name: "Coding Quiz",
		link: "https://github.com/kubaszpak/CodingQuiz",
	},
	{
		name: "Lyrics App - Genius Rap Clone",
		link: "https://github.com/kubaszpak/GeniusRapCloneEntityFramework",
	},
	{
		name: "Date Idea APIs",
		link: "https://github.com/kubaszpak/DateIdeaAPIs",
	},
	{
		name: "Vinyl Store MVC",
		link: "https://github.com/kubaszpak/VinylStoreMVC",
	},
	{
		name: "Covid Database Application",
		link: "https://github.com/kubaszpak/CovidDatabaseApplication",
	},
	{
		name: "Apocalypse Simulation",
		link: "https://github.com/kubaszpak/apocalypse",
	},
	{
		name: "Face Recognition",
		link: "https://github.com/kubaszpak/python_face_recognition",
	},
];

const OtherProjects: React.FC = () => {
	return (
		<div>
			<h1 className="my-10 text-center text-xl font-semibold">
				Other projects:
			</h1>
			<div className="mx-auto flex max-w-3xl flex-col gap-3">
				{otherProjects.map((project, idx) => {
					return (
						<Card
							key={idx}
							className="bg-gradient-to-r from-black via-slate-950 to-slate-900"
						>
							<a href={project.link} target="_blank">
								<h5 className="text-2xl font-bold tracking-tight text-white">
									{project.name}
								</h5>
							</a>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default OtherProjects;
