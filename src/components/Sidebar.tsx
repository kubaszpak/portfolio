import { Sidebar as FlowbiteSidebar } from "flowbite-react";

export default function Sidebar({ sidebarOpen }: { sidebarOpen: boolean }) {
	return (
		<>
			<FlowbiteSidebar className={`dark absolute right-0 z-10 h-screen`}>
				<FlowbiteSidebar.Items>
					<FlowbiteSidebar.ItemGroup>
						<FlowbiteSidebar.Item href="#">Dashboard</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#" label="Pro" labelColor="alternative">
							Kanban
						</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#" label="3">
							Inbox
						</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#">Users</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#">Products</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#">Sign In</FlowbiteSidebar.Item>
						<FlowbiteSidebar.Item href="#">Sign Up</FlowbiteSidebar.Item>
					</FlowbiteSidebar.ItemGroup>
				</FlowbiteSidebar.Items>
			</FlowbiteSidebar>
		</>
	);
}
