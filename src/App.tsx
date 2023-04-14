import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import BackgroundBlur from "./components/BackgroundBlur";
import Navbar from "./components/Navbar";

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [parent] = useAutoAnimate();
	const aboutSectionRef = useRef<HTMLDivElement | null>(null);

	const scrollToView = (
		sectionRef: React.MutableRefObject<HTMLDivElement | null>
	) => {
		sectionRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div ref={parent}>
			<BackgroundBlur
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
			/>
			{sidebarOpen && <Sidebar sidebarOpen={sidebarOpen} />}

			<div className={`${sidebarOpen && "fixed overflow-hidden"}`}>
				<div id="top">
					<Navbar
						scrollToView={scrollToView}
						setSidebarOpen={setSidebarOpen}
						aboutSectionRef={aboutSectionRef}
					/>
					<div className="app">
						<main className="text-8xl leading-[0.75] sm:text-[12rem] sm:leading-[8rem] md:text-[16rem] md:leading-[12rem]">
							Jakub
							<br />
							<span id="szpak" className="lg:text-[20rem]">
								Szpak
							</span>
						</main>
						<p className="mt-16 text-sm text-slate-300 md:text-lg">
							Fullstack Web Developer
							<br />
							based in Wroclav, Poland
						</p>
					</div>
				</div>
				<div
					ref={aboutSectionRef}
					className="mx-auto flex min-h-screen max-w-7xl flex-col items-center p-8 sm:flex-row sm:justify-around"
				>
					<p className="text-md mb-8 max-w-lg text-center sm:mb-0 sm:text-left">
						Hi, my name is Jakub,
						<br /> I've graduated Computer Science from the Wroclaw's University
						of Science and Technology in March of 2023. I'd like to continue
						developing my skills in creating beautiful user experiences on the
						web. I'm looking for opportunities where I'll be able to learn more
						about the frontend as well as the backend of web applications.
					</p>
					<img
						className="personal max-w-xs opacity-90"
						src="./src/assets/static/me.png"
						alt="Personal photo"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
