interface BackgroundBlurProps {
	sidebarOpen: boolean;
	setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BackgroundBlur: React.FC<BackgroundBlurProps> = ({
	sidebarOpen,
	setSidebarOpen,
}) => {
	return (
		<div
			className={`fixed inset-0 z-10 ${
				sidebarOpen || "hidden"
			} bg-black/20 backdrop-blur-sm dark:bg-slate-900/80`}
			id="headlessui-dialog-overlay-8"
			aria-hidden="true"
			data-headlessui-state="open"
			onClick={() => setSidebarOpen(false)}
		></div>
	);
};

export default BackgroundBlur;
