import StateCard from "@/shared/StateCard";

const DashboardHome = () => {
  return (
    <main className="p-4">
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <StateCard title="Total Client" value="20" />
          <StateCard title="Bulk SMS" value="35" />
          <StateCard title="Total Device" value="17" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </main>
  );
};

export default DashboardHome;
