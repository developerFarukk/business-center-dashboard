

import HeaderDropDown from "@/components/module/HeaderDropDown";
import { cn } from "@/lib/utils";
import type { TClient } from "@/types/clientType";
import { motion } from "framer-motion";

interface TClients {
  clientdatas: TClient[];
}

const ClientTable = ({ clientdatas }: TClients) => {
  return (
    <section className="w-full px-4 mx-auto max-w-7xl py-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Client List
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Overview of all registered clients
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto rounded-2xl shadow-md scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-zinc-600"
      >
        <table className="min-w-[800px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-fuchsia-200 to-slate-400 dark:from-slate-800 dark:to-blue-800 text-md uppercase text-gray-700 dark:text-gray-200 tracking-wider border-b border-blue-300 dark:border-zinc-600">
              <th className="px-6 py-3 text-center">ID</th>
              <th className="px-6 py-3 text-left">Username</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-center">Balance</th>
              <th className="px-6 py-3 text-center">SMS Sent</th>
              <th className="px-6 py-3 text-left">Organization</th>
              <th className="px-6 py-3 text-left">Created</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {clientdatas.map((client, index) => (
              <motion.tr
                key={client.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "border-b border-gray-100 dark:border-zinc-700 transition-colors",
                  index % 2 === 0
                    ? "bg-white dark:bg-zinc-900"
                    : "bg-gray-50 dark:bg-zinc-800"
                )}
              >
                <td className="px-6 py-4 text-center text-sm text-gray-700 dark:text-gray-200">
                  {client.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-100">
                  {client.username}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                  {client.email}
                </td>
                <td className="px-6 py-4 text-center text-sm text-green-600 dark:text-green-400">
                  {client.balance}
                </td>
                <td className="px-6 py-4 text-center text-sm">
                  {client.smsSent}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                  {client.organization}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                  {new Date(client.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 flex gap-2 justify-center items-center">
                  <HeaderDropDown />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default ClientTable;
