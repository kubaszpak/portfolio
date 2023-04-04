import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function App() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [parent, enableAnimations] = useAutoAnimate();
	return (
		<>
			<div
				className={`fixed inset-0 ${
					sidebarOpen && "z-10"
				} bg-black/20 backdrop-blur-sm dark:bg-slate-900/80`}
				id="headlessui-dialog-overlay-8"
				aria-hidden="true"
				data-headlessui-state="open"
				onClick={() => setSidebarOpen(false)}
			></div>

			<div ref={parent}>
				{sidebarOpen && <Sidebar sidebarOpen={sidebarOpen} />}
			</div>
			<div className={`${sidebarOpen && "fixed overflow-hidden"}`}>
				<div id="top">
					<header className="flex">
						<h2 className="mr-auto flex flex-1 justify-center">
							kubaszpak.dev
						</h2>
						<ul className="hidden flex-1 justify-center gap-3 sm:flex">
							<li>Home</li>
							<li>About</li>
							<li>Projects</li>
							<li>Contact</li>
						</ul>
						<h2 className="ml-auto hidden flex-1 justify-center sm:flex">
							Dark
						</h2>
						<button
							data-drawer-target="default-sidebar"
							data-drawer-toggle="default-sidebar"
							aria-controls="default-sidebar"
							type="button"
							onClick={() => {
								setSidebarOpen((prev) => !prev);
							}}
							className="inline-flex items-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
						>
							<span className="sr-only">Open sidebar</span>
							<svg
								className="h-6 w-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									clip-rule="evenodd"
									fill-rule="evenodd"
									d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
								></path>
							</svg>
						</button>
					</header>
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
				<div className="min-h-screen"></div>
			</div>
		</>
	);
}

export default App;
