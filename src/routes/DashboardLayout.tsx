import  { useState, useEffect, type ReactNode, useRef } from "react";
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
import HeaderDropDown from "@/components/module/HeaderDropDown";

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
  active?: boolean;
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
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Set initial expanded state based on current route
  useEffect(() => {
    const path = location.pathname;
    const newExpandedItems = { ...expandedItems };

    if (path.startsWith("/clients")) {
      newExpandedItems.clients = true;
    }
    if (path.startsWith("/bulk")) {
      newExpandedItems.bulk = true;
    }
    if (path.startsWith("/devices")) {
      newExpandedItems.devices = true;
    }

    setExpandedItems(newExpandedItems);
  }, [location.pathname]);

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

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleSubItems = (itemKey: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemKey]: !prev[itemKey],
    }));
  };

  const isSubItemActive = (path: string) => {
    return location.pathname === path;
  };

  // Animation variants
  const overlayVariants = {
    open: { opacity: 0.5, transition: { duration: 0.3 } },
    closed: { opacity: 0, transition: { duration: 0.3 } },
  };

  const subMenuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3,
          ease: [0.04, 0.62, 0.23, 0.98] as const,
        },
        opacity: { duration: 0.4 },
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3,
          ease: [0.04, 0.62, 0.23, 0.98] as const,
        },
        opacity: { duration: 0.2 },
      },
    },
  };

  const navItemVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const subNavItemVariants = {
    hover: { x: 5 },
    tap: { x: 0 },
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && sidebarOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-20 bg-black"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        ref={sidebarRef}
        initial={
          isFirstLoad
            ? { x: isMobile ? -300 : 0, width: isMobile ? 300 : 80 }
            : false
        }
        animate={
          isMobile
            ? sidebarOpen
              ? { x: 0 }
              : { x: -300 }
            : sidebarOpen
            ? { width: 300 }
            : { width: 80 }
        }
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          delay: isFirstLoad ? 0.3 : 0,
        }}
        className={`fixed md:relative z-30 h-screen bg-background shadow-md ${
          isMobile ? "w-72" : ""
        }`}
      >
        <motion.div
          className="flex flex-col h-full p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: isFirstLoad ? 0.5 : 0 }}
        >
          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <NavItem
                icon={<FiHome size={20} />}
                text="Dashboard"
                active={location.pathname === "/dashboard"}
                visible={sidebarOpen || isMobile}
                to="/dashboard"
              />
            </motion.div>

            {/* Client Management */}
            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="space-y-1"
            >
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
                    <span className="ml-3 flex-1 text-left">
                      Client Management
                    </span>
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
                    variants={subMenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden space-y-1"
                  >
                    <motion.div
                      variants={subNavItemVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <SubNavItem
                        text="Create Client"
                        to="/dashboard/create-client"
                        visible={sidebarOpen || isMobile}
                        active={isSubItemActive("/dashboard/create-client")}
                      />
                    </motion.div>
                    <motion.div
                      variants={subNavItemVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <SubNavItem
                        text="Client List"
                        to="/dashboard/all-client"
                        visible={sidebarOpen || isMobile}
                        active={isSubItemActive("/dashboard/all-client")}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Bulk Management */}
            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="space-y-1"
            >
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
                    <span className="ml-3 flex-1 text-left">
                      Bulk Management
                    </span>
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
                    variants={subMenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden space-y-1"
                  >
                    <motion.div
                      variants={subNavItemVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <SubNavItem
                        text="Create Bulk SMS"
                        to="/dashboard/create-sms"
                        visible={sidebarOpen || isMobile}
                        active={isSubItemActive("/dashboard/create-sms")}
                      />
                    </motion.div>
                    <motion.div
                      variants={subNavItemVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <SubNavItem
                        text="All Bulk SMS"
                        to="/dashboard/all-sms"
                        visible={sidebarOpen || isMobile}
                        active={isSubItemActive("/dashboard/all-sms")}
                      />
                    </motion.div>
    
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Device Management */}
            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="space-y-1"
            >
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
                    <span className="ml-3 flex-1 text-left">
                      Device Management
                    </span>
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
                    variants={subMenuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden space-y-1"
                  >
                    <motion.div
                      variants={subNavItemVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <SubNavItem
                        text="Add Device"
                        to="/dashboard/add-device"
                        visible={sidebarOpen || isMobile}
                        active={isSubItemActive("/dashboard/add-device")}
                      />
                    </motion.div>
                    <motion.div
                      variants={subNavItemVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <SubNavItem
                        text="Device List"
                        to="/dashboard/device-list"
                        visible={sidebarOpen || isMobile}
                        active={isSubItemActive("/dashboard/device-list")}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <NavItem
                icon={<FiSettings size={20} />}
                text="Settings"
                visible={sidebarOpen || isMobile}
                to="/dashboard"
              />
            </motion.div>
          </nav>

          {/* User profile */}
          <div className="pt-4 mt-auto border-t dark:border-gray-700">
            {sidebarOpen || isMobile ? (
              <motion.div
                className="flex justify-between space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isFirstLoad ? 0.7 : 0 }}
              >
                <div className="flex justify-center items-center gap-2">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuFnUSTkmuFrahAKIiNz1rmlp6FgAX1ku3w&s"
                      alt="faruk"
                    />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Parvez</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Admin
                    </p>
                  </div>
                </div>
                <div className="">
                  <HeaderDropDown />
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="flex justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuFnUSTkmuFrahAKIiNz1rmlp6FgAX1ku3w&s"
                    alt="faruk"
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Fixed header */}
        <motion.header
          initial={isFirstLoad ? { y: -50, opacity: 0 } : false}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            delay: isFirstLoad ? 0.4 : 0,
          }}
          className="sticky top-0 z-20 bg-background border-b dark:border-gray-700 p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Sidebar toggle button in header */}
              <motion.button
                onClick={toggleSidebar}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mr-4 p-1 text-gray-600 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>

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
            <section className="flex justify-center items-center gap-2 text-center">
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuFnUSTkmuFrahAKIiNz1rmlp6FgAX1ku3w&s"
                    alt="faruk"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </motion.div>
              <HeaderDropDown />
            </section>
          </div>
        </motion.header>

        {/* Main content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: isFirstLoad ? 0.8 : 0 }}
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
      <motion.span
        className="flex-shrink-0"
        whileHover={{ rotate: 10 }}
        whileTap={{ rotate: -10 }}
      >
        {icon}
      </motion.span>
      {visible && (
        <motion.span
          className="ml-3"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.span>
      )}
    </Link>
  );
};

// SubNavItem component
const SubNavItem = ({ text, to, visible, active = false }: SubNavItemProps) => {
  return (
    <Link
      to={to}
      className={`block p-2 pl-4 rounded-lg transition-all duration-300 text-sm ${
        active
          ? "bg-blue-100 text-blue-600 dark:bg-gray-700 dark:text-white"
          : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
      }`}
    >
      {visible && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.span>
      )}
    </Link>
  );
};

export default DashboardLayout;
