
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



import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}