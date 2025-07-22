import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string | number;
}

const StateCard = ({ title, value }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-fuchsia-200 to-slate-400 dark:from-slate-800 dark:to-blue-800 aspect-video rounded-xl p-6 shadow-sm"
    >
      <div className="h-full flex flex-col">
        {/* Title */}
        <h3 className="text-lg font-bold text-center dark:text-white">{title}</h3>

        {/* Value with smooth appearance */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-7xl font-bold text-center lg:mt-6 md:mt-6 mt-4 dark:text-white"
        >
          {value}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StateCard;
