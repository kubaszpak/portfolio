interface NavbarProps {
	scrollToView: (sectionRef: React.MutableRefObject<HTMLDivElement>) => void;
	setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
	aboutSectionRef: React.MutableRefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({
	scrollToView,
	setSidebarOpen,
	aboutSectionRef,
}) => {
	return (
		<header className="sm:flex">
			<h2 className="mr-auto flex justify-center sm:flex-1">
				<a href="/" className="hover:brightness-200">
					kubaszpak.dev
				</a>
			</h2>
			<ul className="hidden flex-1 justify-center gap-3 sm:flex">
				<li>
					<a href="/" className="hover:brightness-200">
						Home
					</a>
				</li>
				<li
					className="hover:cursor-pointer hover:brightness-200"
					onClick={() => scrollToView(aboutSectionRef)}
				>
					About
				</li>
				<li className="hover:cursor-pointer hover:brightness-200">Projects</li>
				<li className="hover:cursor-pointer hover:brightness-200">Contact</li>
			</ul>
			<h2 className="ml-auto hidden flex-1 justify-center hover:cursor-pointer hover:brightness-200 sm:flex">
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
				className="mt-4 inline-flex items-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
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
						clipRule="evenodd"
						fillRule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					></path>
				</svg>
			</button>
		</header>
	);
};

export default Navbar;
