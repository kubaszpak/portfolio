import { Sidebar as FlowbiteSidebar } from "flowbite-react";

export default function Sidebar({ sidebarOpen }: { sidebarOpen: boolean }) {
	return (
		<>
			<FlowbiteSidebar className={`dark absolute right-0 z-10 h-screen`}>
				<FlowbiteSidebar.Items>
					<FlowbiteSidebar.ItemGroup>
						<FlowbiteSidebar.Item href="#">Home</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#">About</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#">Projects</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#">Contact</FlowbiteSidebar.Item>
					</FlowbiteSidebar.ItemGroup>
				</FlowbiteSidebar.Items>
			</FlowbiteSidebar>
		</>
	);
}
