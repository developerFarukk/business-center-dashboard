import { useGetBulkSmsQuery } from "@/redux/features/bulkManageApi";
import { useGetAllClientQuery } from "@/redux/features/clientManageApi";
import { useGetAllDeviceQuery } from "@/redux/features/deviceManageApi";
import StateCard from "@/shared/StateCard";

const DashboardHome = () => {
  const { data } = useGetAllClientQuery(undefined);
  const totalClients = data?.count || 0;

  const { data: bulkSms } = useGetBulkSmsQuery(undefined);
  const totalBulkSms = bulkSms?.count || 0;

  const { data: deviceData } = useGetAllDeviceQuery(undefined);
  const totalDevice = deviceData?.count || 0;

  return (
    <main className="p-4">
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <StateCard title="Total Client" value={totalClients} />
          <StateCard title="Bulk SMS" value={totalBulkSms} />
          <StateCard title="Total Device" value={totalDevice} />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </main>
  );
};

export default DashboardHome;
