import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import BackgroundBlur from "./components/BackgroundBlur";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

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
				<AboutSection aboutSectionRef={aboutSectionRef} />
			</div>
		</div>
	);
}

export default App;
