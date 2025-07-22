import { useGetAllDeviceQuery } from "@/redux/features/deviceManageApi";

const DeviceList = () => {
  const { data, isLoading, error } = useGetAllDeviceQuery(undefined);
  console.log("Device Data:", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    let errorMessage = "An error occurred";
    if ("status" in error) {
      // FetchBaseQueryError
      errorMessage = `Status: ${error.status}`;
    } else if ("message" in error) {
      // SerializedError
      errorMessage = error.message as string;
    }
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <div>
      <div> The Component is Start Device-List </div>
    </div>
  );
};

export default DeviceList;
