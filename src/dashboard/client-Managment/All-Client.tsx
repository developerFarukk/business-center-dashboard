import ClientTable from "@/pages/client-components/ClientTable";
import { useGetAllClientQuery } from "@/redux/features/clientManageApi";




const AllClient = () => {

    const { data, isLoading, error } = useGetAllClientQuery(undefined);
    const  clientData =  data?.results

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
            <ClientTable clientdatas={clientData} />
        </div>
    );
};

export default AllClient;
