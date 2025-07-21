// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
// import { Separator } from "@/components/ui/separator";
// import {  SidebarTrigger } from "@/components/ui/sidebar";

// export default function DashboardHome() {
//   return (
//     // <SidebarProvider>
//     //   <AppSidebar />
//     //   <SidebarInset>
//     //     <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
//     //       <div className="flex items-center gap-2 px-4">
//     //         <SidebarTrigger className="-ml-1" />
//     //         <Separator
//     //           orientation="vertical"
//     //           className="mr-2 data-[orientation=vertical]:h-4"
//     //         />
//     //         <Breadcrumb>
//     //           <BreadcrumbList>
//     //             <BreadcrumbItem className="hidden md:block">
//     //               <BreadcrumbLink href="#">
//     //                 Building Your Application
//     //               </BreadcrumbLink>
//     //             </BreadcrumbItem>
//     //             <BreadcrumbSeparator className="hidden md:block" />
//     //             <BreadcrumbItem>
//     //               <BreadcrumbPage>Data Fetching</BreadcrumbPage>
//     //             </BreadcrumbItem>
//     //           </BreadcrumbList>
//     //         </Breadcrumb>
//     //       </div>
//     //     </header>
//     //     <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//     //       <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//     //         <div className="bg-muted/50 aspect-video rounded-xl" />
//     //         <div className="bg-muted/50 aspect-video rounded-xl" />
//     //         <div className="bg-muted/50 aspect-video rounded-xl" />
//     //       </div>
//     //       <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
//     //     </div>
//     //   </SidebarInset>
//     // </SidebarProvider>

//      <>
//       <header className="sticky top-0 z-10 bg-background flex h-16 items-center border-b px-4">
//         <div className="flex items-center gap-2">
//           <SidebarTrigger />
//           <Separator orientation="vertical" className="h-6" />
//           <Breadcrumb>
//             <BreadcrumbList>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbPage>Home</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//       </header>

//       <main className="p-4">
//        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
//            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//             <div className="bg-muted/50 aspect-video rounded-xl" />
//             <div className="bg-muted/50 aspect-video rounded-xl" />
//              <div className="bg-muted/50 aspect-video rounded-xl" />
//            </div>
//           <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
//         </div>
//       </main>
//     </>

//     // <div className="flex h-screen justify-center">
//     //         <Sidebar>
//     //             <SidebarContent>
//     //                 <SidebarGroup>
//     //                     <SidebarGroupLabel className="mt-2 mb-6 text-2xl text-center flex justify-center items-center hover:bg-blue-100">
//     //                         <div className="p-2 ">
//     //                             <Link to="/" className="flex justify-center items-center gap-1"><span><IoHome /></span>RideNest</Link>
//     //                             <div className="text-black text-sm underline">{email}</div>

//     //                         </div>
//     //                     </SidebarGroupLabel>
//     //                     <SidebarGroupContent>
//     //                         <SidebarMenu>
//     //                             {pathsToRender.map((item) => (
//     //                                 <SidebarMenuItem key={item.path}>
//     //                                     <SidebarMenuButton onClick={() => navigate(`/${userRole}/${item.path}`)}>
//     //                                         <div className="text-lg flex items-center gap-2">
//     //                                             <div>{item.icons}</div>
//     //                                             <div>
//     //                                                 {item.name}
//     //                                             </div>
//     //                                         </div>
//     //                                     </SidebarMenuButton>
//     //                                 </SidebarMenuItem>
//     //                             ))}
//     //                         </SidebarMenu>
//     //                     </SidebarGroupContent>
//     //                 </SidebarGroup>
//     //             </SidebarContent>
//     //         </Sidebar>
//     //         <main className=" p-4 flex">
//     //             <Outlet />
//     //         </main>
//     //     </div>

//     // <div>
//     //     ami tumay
//     // </div>
//   )
// }

const DashboardHome = () => {
  return (
    <main className="p-4">
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </main>
  );
};

export default DashboardHome;
