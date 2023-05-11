import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import BackgroundBlur from "./components/BackgroundBlur";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import SplitType from "split-type";
import { gsap } from "gsap";

export interface SidebarState {
	sidebarOpen: boolean;
	scrollToSectionAfterClose: React.MutableRefObject<HTMLDivElement>;
}

function App() {
	const nullRef = useRef(document.createElement("div"));
	const [sidebarState, setSidebarState] = useState<SidebarState>({
		sidebarOpen: false,
		scrollToSectionAfterClose: nullRef,
	});
	const aboutSectionRef = useRef<HTMLDivElement>(
		null
	) as React.MutableRefObject<HTMLDivElement>;
	const projectsSectionRef = useRef<HTMLDivElement>(
		null
	) as React.MutableRefObject<HTMLDivElement>;
	const contactSectionRef = useRef<HTMLDivElement>(
		null
	) as React.MutableRefObject<HTMLDivElement>;

	const scrollToView = (sectionRef: React.MutableRefObject<HTMLDivElement>) => {
		sectionRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useLayoutEffect(() => {
		new SplitType("#split-name");
		gsap.to(".char", {
			y: 0,
			opacity: 1,
			stagger: 0.05,
			delay: 0.5,
			duration: 0.1,
		});
	}, []);

	useEffect(() => {
		if (sidebarState.sidebarOpen) return;
		scrollToView(sidebarState.scrollToSectionAfterClose);
		setSidebarState((prev) => {
			return {
				...prev,
				scrollToSectionAfterClose: nullRef,
			};
		});
	}, [sidebarState.sidebarOpen]);

	return (
		<>
			<BackgroundBlur
				sidebarOpen={sidebarState.sidebarOpen}
				setSidebarState={setSidebarState}
			/>
			{sidebarState.sidebarOpen && (
				<Sidebar
					setSidebarState={setSidebarState}
					aboutSectionRef={aboutSectionRef}
					projectsSectionRef={projectsSectionRef}
					contactsSectionRef={contactSectionRef}
				/>
			)}
			<div>
				<div
					className={`${sidebarState.sidebarOpen && "fixed overflow-hidden"}`}
				>
					<div id="top">
						<Navbar
							setSidebarState={setSidebarState}
							scrollToView={scrollToView}
							aboutSectionRef={aboutSectionRef}
							projectsSectionRef={projectsSectionRef}
							contactSectionRef={contactSectionRef}
						/>
						<div className="app">
							<main
								id="split-name"
								className="text-8xl leading-[0.75] sm:text-[12rem] sm:leading-[8rem] md:text-[16rem] md:leading-[12rem]"
							>
								Jakub
								<br />
								<span
									id="szpak"
									className="text-9xl leading-[0.75] sm:text-[14rem] sm:leading-[8rem] md:text-[17rem] md:leading-[12rem] lg:text-[20rem]"
								>
									Szpak
								</span>
							</main>

							<p className="animationFadeInFromB mt-16 text-sm md:text-lg">
								Fullstack Web Developer
								<br />
								based in Wroclav, Poland
							</p>
						</div>
					</div>
					<AboutSection aboutSectionRef={aboutSectionRef} />
					<Divider />
					<ProjectsSection projectsSectionRef={projectsSectionRef} />
					<Divider />
					<ContactForm contactSectionRef={contactSectionRef} />
					<div className="min-h-[5rem]" />
				</div>
			</div>
		</>
	);
}

const Divider = () => {
	return <div className="min-h-[10rem]" />;
};

export default App;
