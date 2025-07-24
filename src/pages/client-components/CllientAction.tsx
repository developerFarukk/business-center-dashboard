import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import {  Edit } from "lucide-react";
import { BsThreeDotsVertical, BsTicketDetailed } from "react-icons/bs";

import { MdDelete } from "react-icons/md";



const CllientAction = () => {

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
                    <BsTicketDetailed /> Details
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
                    <Edit /> Edit
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
                    <MdDelete /> Delete
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

export default CllientAction;
