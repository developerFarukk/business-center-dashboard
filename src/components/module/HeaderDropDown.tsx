import { motion, AnimatePresence } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User2 } from "lucide-react";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const HeaderDropDown = () => {

     const dispatch = useAppDispatch();
     const navigate = useNavigate()


  const handleLogout = () => {

    const toastId = toast.loading("Logging out...");
    setTimeout(() => {
      dispatch(logout());
      toast.success("Logged out successfully", { id: toastId, duration: 1500 });
      navigate('/');
    }, 1500);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-2xl font-bold border-none rounded-full p-1 focus:outline-none">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <BsThreeDotsVertical />
          </motion.div>
        </DropdownMenuTrigger>

        <AnimatePresence>
          <DropdownMenuContent asChild forceMount className="mr-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                bounce: 0.2,
              }}
              className="min-w-[180px] rounded-md shadow-lg"
            >
              <DropdownMenuLabel className="px-2 py-1.5 font-semibold">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="" />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                <DropdownMenuItem asChild>
                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-2 py-1.5 rounded cursor-pointer"
                  >
                    <User2 /> Profile
                  </motion.div>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-2 py-1.5 rounded cursor-pointer"
                  >
                    <Settings /> Settings
                  </motion.div>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={handleLogout} asChild>
                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-2 py-1.5 rounded cursor-pointer"
                  >
                    <LogOut /> Log Out
                  </motion.div>
                </DropdownMenuItem>
              </motion.div>
            </motion.div>
          </DropdownMenuContent>
        </AnimatePresence>
      </DropdownMenu>
    </div>
  );
};

export default HeaderDropDown;
