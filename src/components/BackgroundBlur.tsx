import { SidebarState } from "../App";

interface BackgroundBlurProps {
	sidebarOpen: boolean;
	setSidebarState: React.Dispatch<React.SetStateAction<SidebarState>>;
}

const BackgroundBlur: React.FC<BackgroundBlurProps> = ({
	sidebarOpen,
	setSidebarState,
}) => {
	return (
		<div
			className={`fixed inset-0 z-10 ${
				sidebarOpen || "hidden"
			} bg-black/20 backdrop-blur-sm dark:bg-slate-900/80`}
			id="headlessui-dialog-overlay-8"
			aria-hidden="true"
			data-headlessui-state="open"
			onClick={() =>
				setSidebarState((prev) => {
					return {
						...prev,
						sidebarOpen: false,
					};
				})
			}
		></div>
	);
};

export default BackgroundBlur;
