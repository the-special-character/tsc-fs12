import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "./ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <a href="#">Logo</a>
      </SidebarHeader>
      {/* <SidebarContent>
        <SidebarGroup />
      </SidebarContent> */}
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
