import InventoriesTable from "./InventoriesTable";
import { useGetInventoriesQuery } from "@/api/inventories";
import Spinner from "../common/Loaders/Spinner/Spinner";
const InventoriesDetail = () => {
  const { data, isLoading, isError } = useGetInventoriesQuery();
  if (isLoading) return "loading";
  if (isError) return <div>Error Occurred</div>;
  if (isLoading || !data) return <Spinner />;

  return (
    <div className="my-[1.3rem]">
      <InventoriesTable inventories={data} />
    </div>
  );
};

export default InventoriesDetail;
