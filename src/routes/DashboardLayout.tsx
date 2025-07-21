// src/layouts/DashboardLayout.tsx
// import { AppSidebar } from "@/components/dashboardComponents/app-sidebar";
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
// import { Outlet } from "react-router-dom";

// export function DashboardLayout() {
//   return (
//     <SidebarProvider>
//       <div className="flex h-screen">
//         <AppSidebar />
//         <div className="flex-1 overflow-auto">
//           <SidebarInset className="min-h-full">
//             <Outlet />
//           </SidebarInset>
//         </div>
//       </div>
//     </SidebarProvider>
//   )
// }

// import { AppSidebar } from "@/components/dashboardComponents/app-sidebar";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen mx-auto p-1">
        <Outlet />
    </div>
    // <SidebarProvider>
    //   <AppSidebar />
    //   <SidebarInset>
    //     <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
    //       <div className="flex items-center gap-2 px-4">
    //         <SidebarTrigger className="-ml-1" />
    //         <Separator
    //           orientation="vertical"
    //           className="mr-2 data-[orientation=vertical]:h-4"
    //         />
    //         <Breadcrumb>
    //           <BreadcrumbList>
    //             <BreadcrumbItem className="hidden md:block">
    //               <BreadcrumbLink href="#">
    //                 Building Your Application
    //               </BreadcrumbLink>
    //             </BreadcrumbItem>
    //             <BreadcrumbSeparator className="hidden md:block" />
    //             <BreadcrumbItem>
    //               <BreadcrumbPage>Data Fetching</BreadcrumbPage>
    //             </BreadcrumbItem>
    //           </BreadcrumbList>
    //         </Breadcrumb>
    //       </div>
    //     </header>
    //     <Outlet />
    //   </SidebarInset>
    // </SidebarProvider>
  );
};

export default DashboardLayout;
