import { Card } from "flowbite-react";

const OtherProjects: React.FC = () => {
	return (
		<div>
			<h1 className="mb-5 mt-10 text-center text-xl font-semibold">
				Other projects:
			</h1>
			<div className="mx-auto max-w-5xl">
				<Card
					// className="bg-gradient-to-r from-black via-slate-950 to-slate-900"
					href="#"
				>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Coding Quiz
					</h5>
				</Card>
			</div>
		</div>
	);
};

export default OtherProjects;
