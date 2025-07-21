

import { useState, useEffect, type ReactNode, useRef } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiSettings,
  FiGrid,
} from "react-icons/fi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  visible?: boolean;
}

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobile &&
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, sidebarOpen]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-20 bg-black"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        <motion.aside
          ref={sidebarRef}
          initial={isMobile ? { x: -250 } : { width: 250 }}
          animate={
            isMobile
              ? sidebarOpen
                ? { x: 0 }
                : { x: -250 }
              : sidebarOpen
              ? { width: 250 }
              : { width: 80 }
          }
          exit={isMobile ? { x: -250 } : { width: 80 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`fixed md:relative z-30 h-screen bg-white dark:bg-gray-800 shadow-md ${
            isMobile ? "w-64" : ""
          }`}
        >
          <div className="flex flex-col h-full p-4">
            {/* Navigation */}
            <nav className="flex-1 space-y-2">
              <NavItem
                icon={<FiHome size={20} />}
                text="Dashboard"
                active={true}
                visible={sidebarOpen || isMobile}
              />
              <NavItem
                icon={<FiGrid size={20} />}
                text="Projects"
                visible={sidebarOpen || isMobile}
              />
              <NavItem
                icon={<FiUsers size={20} />}
                text="Users"
                visible={sidebarOpen || isMobile}
              />
              <NavItem
                icon={<FiSettings size={20} />}
                text="Settings"
                visible={sidebarOpen || isMobile}
              />
            </nav>

            {/* User profile */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="pt-4 mt-auto border-t dark:border-gray-700"
            >
              {sidebarOpen || isMobile ? (
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3q2h29IZLxDPT2AJ-lzrTCbkFc_TWVjuVXQ&s"
                      alt="faruk"
                    />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Admin
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3q2h29IZLxDPT2AJ-lzrTCbkFc_TWVjuVXQ&s"
                      alt="faruk"
                    />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                </div>
              )}
            </motion.div>
          </div>
        </motion.aside>
      </AnimatePresence>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* Fixed header */}
        <header className="sticky top-0 z-20 bg-white dark:bg-gray-900 border-b dark:border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Sidebar toggle button in header */}
              <button
                onClick={toggleSidebar}
                className="mr-4 p-1 text-gray-600 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                      Building Your Application
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Avatar on the right side */}
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3q2h29IZLxDPT2AJ-lzrTCbkFc_TWVjuVXQ&s"
                  alt="faruk"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main content */}
        <motion.main
          animate={{
            marginLeft: isMobile ? 0 : sidebarOpen ? 250 : 80,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex-1 p-4"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
};

// NavItem component
const NavItem = ({ icon, text, active = false, visible }: NavItemProps) => {
  return (
    <a
      href="#"
      className={`flex items-center p-3 rounded-lg transition-colors ${
        active
          ? "bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-white"
          : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
      }`}
    >
      <span className="flex-shrink-0">{icon}</span>
      {visible && <span className="ml-3">{text}</span>}
    </a>
  );
};

export default DashboardLayout;
