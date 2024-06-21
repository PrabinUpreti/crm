import Spinner from "../common/Loaders/Spinner/Spinner";
import EquipmentsTable from "./EquipmentTable";
import { useGetEquipmentsQuery } from "@/api/equipments";
const EquipmentsDetail = () => {
  const { data, isLoading } = useGetEquipmentsQuery();

  if (isLoading || !data) return <Spinner />;

  return (
    <div className="my-[1.3rem]">
      <EquipmentsTable equipments={data} />
    </div>
  );
};

export default EquipmentsDetail;
