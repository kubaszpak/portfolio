function App() {
	return (
		<>
			<header className="flex">
				<h2 className="mr-auto flex flex-1 justify-center">kubaszpak.dev</h2>
				<ul className="flex flex-1 justify-center gap-3">
					<li>Home</li>
					<li>About</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
				<h2 className="ml-auto flex flex-1 justify-center">Dark</h2>
			</header>
			<div className="app">
				<main>
					Jakub
					<br />
					Szpak
				</main>
				<p className="mt-16 text-lg text-slate-300">
					Fullstack Web Developer
					<br />
					based in Wroclav, Poland
				</p>
			</div>
		</>
	);
}

export default App;
