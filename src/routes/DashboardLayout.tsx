

import { useState, useEffect, type ReactNode, useRef } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUsers,
  FiSettings,
  FiDatabase,
  FiServer,
  FiChevronRight,
} from "react-icons/fi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  visible?: boolean;
  to: string;
}

interface SubNavItemProps {
  text: string;
  to: string;
  visible?: boolean;
}

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    clients: false,
    bulk: false,
    devices: false,
  });
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

  const toggleSubItems = (itemKey: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  // Check if subitem is active
  const isSubItemActive = (path: string) => {
    return location.pathname === path;
  };

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
          initial={isMobile ? { x: -300 } : { width: 300 }}
          animate={
            isMobile
              ? sidebarOpen
                ? { x: 0 }
                : { x: -300 }
              : sidebarOpen
              ? { width: 300 }
              : { width: 80 }
          }
          exit={isMobile ? { x: -300 } : { width: 80 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`fixed md:relative z-30 h-screen bg-white dark:bg-gray-800 shadow-md ${
            isMobile ? "w-72" : ""
          }`}
        >
          <div className="flex flex-col h-full p-4">
            {/* Navigation */}
            <nav className="flex-1 space-y-1">
              <NavItem
                icon={<FiHome size={20} />}
                text="Dashboard"
                active={location.pathname === "/dashboard"}
                visible={sidebarOpen || isMobile}
                to="/dashboard"
              />
              
              {/* Client Management */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleSubItems("clients")}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-300 ${
                    expandedItems.clients
                      ? "bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-white"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                  }`}
                >
                  <FiUsers size={20} className="flex-shrink-0" />
                  {(sidebarOpen || isMobile) && (
                    <>
                      <span className="ml-3 flex-1 text-left">Client Management</span>
                      <motion.div
                        animate={{
                          rotate: expandedItems.clients ? 90 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiChevronRight size={16} />
                      </motion.div>
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expandedItems.clients && (sidebarOpen || isMobile) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-8 space-y-1">
                        <SubNavItem
                          text="Add Client"
                          to="/clients/add"
                          visible={sidebarOpen || isMobile}
                          active={isSubItemActive("/clients/add")}
                        />
                        <SubNavItem
                          text="Client List"
                          to="/clients"
                          visible={sidebarOpen || isMobile}
                          active={isSubItemActive("/clients")}
                        />
                        <SubNavItem
                          text="Client Reports"
                          to="/clients/reports"
                          visible={sidebarOpen || isMobile}
                          active={isSubItemActive("/clients/reports")}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bulk Management */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleSubItems("bulk")}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-300 ${
                    expandedItems.bulk
                      ? "bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-white"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                  }`}
                >
                  <FiDatabase size={20} className="flex-shrink-0" />
                  {(sidebarOpen || isMobile) && (
                    <>
                      <span className="ml-3 flex-1 text-left">Bulk Management</span>
                      <motion.div
                        animate={{
                          rotate: expandedItems.bulk ? 90 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiChevronRight size={16} />
                      </motion.div>
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expandedItems.bulk && (sidebarOpen || isMobile) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-8 space-y-1">
                        <SubNavItem
                          text="Create Bulk"
                          to="/bulk/create"
                          visible={sidebarOpen || isMobile}
                          active={isSubItemActive("/bulk/create")}
                        />
                        <SubNavItem
                          text="Bulk History"
                          to="/bulk/history"
                          visible={sidebarOpen || isMobile}
                          active={isSubItemActive("/bulk/history")}
                        />
                        <SubNavItem
                          text="Bulk Analytics"
                          to="/bulk/analytics"
                          visible={sidebarOpen || isMobile}
                          active={isSubItemActive("/bulk/analytics")}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Device Management */}
              <div className="space-y-1">
                <button
                  onClick={() => toggleSubItems("devices")}
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-300 ${
                    expandedItems.devices
                      ? "bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-white"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                  }`}
                >
                  <FiServer size={20} className="flex-shrink-0" />
                  {(sidebarOpen || isMobile) && (
                    <>
                      <span className="ml-3 flex-1 text-left">Device Management</span>
                      <motion.div
                        animate={{
                          rotate: expandedItems.devices ? 90 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiChevronRight size={16} />
                      </motion.div>
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {expandedItems.devices && (sidebarOpen || isMobile) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-8 space-y-1">
                        <SubNavItem
                          text="Add Device"
                          to="/devices/add"
                          visible={sidebarOpen || isMobile}
                          active={isSubItemActive("/devices/add")}
                        />
                        <SubNavItem
                          text="Device List"
                          to="/devices"
                          visible={sidebarOpen || isMobile}
                          active={isSubItemActive("/devices")}
                        />
                        <SubNavItem
                          text="Device Status"
                          to="/devices/status"
                          visible={sidebarOpen || isMobile}
                          active={isSubItemActive("/devices/status")}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavItem
                icon={<FiSettings size={20} />}
                text="Settings"
                active={location.pathname === "/settings"}
                visible={sidebarOpen || isMobile}
                to="/settings"
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
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-2xl font-bold">
                      SMS Gateway
                    </BreadcrumbPage>
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
            marginLeft: isMobile ? 0 : sidebarOpen ? 0 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex-1 pl-0 pr-4 py-4"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
};

// NavItem component
const NavItem = ({ icon, text, active = false, visible, to }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
        active
          ? "bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-white"
          : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
      }`}
    >
      <span className="flex-shrink-0">{icon}</span>
      {visible && <span className="ml-3">{text}</span>}
    </Link>
  );
};

// SubNavItem component
const SubNavItem = ({ text, to, visible, active = false }: SubNavItemProps & { active?: boolean }) => {
  return (
    <Link
      to={to}
      className={`block p-2 pl-4 rounded-lg transition-all duration-300 text-sm ${
        active
          ? "bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-white"
          : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
      }`}
    >
      {visible && text}
    </Link>
  );
};

export default DashboardLayout;