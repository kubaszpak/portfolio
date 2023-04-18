import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { SidebarState } from "../App";

interface SidebarProps {
	aboutSectionRef: React.MutableRefObject<HTMLDivElement>;
	projectsSectionRef: React.MutableRefObject<HTMLDivElement>;
	setSidebarState: React.Dispatch<React.SetStateAction<SidebarState>>;
}

const Sidebar: React.FC<SidebarProps> = ({
	aboutSectionRef,
	projectsSectionRef,
	setSidebarState,
}) => {
	return (
		<>
			<FlowbiteSidebar className={`dark absolute right-0 z-10 h-screen`}>
				<FlowbiteSidebar.Items>
					<FlowbiteSidebar.ItemGroup>
						<FlowbiteSidebar.Logo href="/" img="ying_yang.png" imgAlt="Logo">
							kubaszpak.dev
						</FlowbiteSidebar.Logo>
					</FlowbiteSidebar.ItemGroup>
					<FlowbiteSidebar.ItemGroup>
						<FlowbiteSidebar.Item href="/">Home</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item
							onClick={() => {
								setSidebarState({
									sidebarOpen: false,
									scrollToSectionAfterClose: aboutSectionRef,
								});
							}}
						>
							About
						</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item
							onClick={() => {
								setSidebarState({
									sidebarOpen: false,
									scrollToSectionAfterClose: projectsSectionRef,
								});
							}}
						>
							Projects
						</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item>Contact</FlowbiteSidebar.Item>
					</FlowbiteSidebar.ItemGroup>
				</FlowbiteSidebar.Items>
			</FlowbiteSidebar>
		</>
	);
};

export default Sidebar;
