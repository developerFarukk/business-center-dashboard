import { useGetBulkSmsQuery } from "@/redux/features/bulkManageApi";




const AllSms = () => {

    const { data, isLoading, error } = useGetBulkSmsQuery(undefined);
        console.log("Sms Data:", data);

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
            <div> The Component is Start All-Sms </div>
        </div>
    );
};

export default AllSms;
