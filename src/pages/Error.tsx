import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-6xl md:text-8xl font-bold text-black dark:text-zinc-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-4xl mt-4 text-black dark:text-zinc-50"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="text-base md:text-lg mt-2 text-black dark:text-zinc-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        The page you are looking for does not exist.
      </motion.p>

      <motion.div
        className="mt-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Link to="/">
          <Button>
            <Home className="mr-2" /> Return Home
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Error;
