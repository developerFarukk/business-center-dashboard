
import { motion } from "framer-motion";

interface StatsCardProps {
  title: string;
  value: string | number;
}



const StateCard = ({ title, value }: StatsCardProps) => {

    return (
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-muted/50 dark:bg-muted/80 aspect-video rounded-xl p-6 shadow-sm bg-linear-to-r dark:from-slate-800 dark:to-blue-800  from-fuchsia-200 to-slate-400"
    >
      <div className="h-full flex flex-col ">
        {/* Title */}
        <h3 className="text-lg font-bold text-center ">
          {title}
        </h3>
        
        {/* Value with smooth appearance */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-7xl font-bold text-center  lg:mt-6 md:mt-6 mt-4"
        >
          {value}
        </motion.div>
      </div>
    </motion.div>
    );
};

export default StateCard;
