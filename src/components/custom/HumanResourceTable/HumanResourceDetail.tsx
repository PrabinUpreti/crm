import Spinner from "../common/Loaders/Spinner/Spinner";
import HumanResourceTable from "./HumanResourceTable";
import { useGetHumanResourcesQuery } from "@/api/humanResource";
const HumanResourceDetail = () => {
  const { data, isLoading, isError } = useGetHumanResourcesQuery();

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error Occured</div>;

  return (
    <div className="my-[1.3rem]">
      <HumanResourceTable data={data} />
    </div>
  );
};

export default HumanResourceDetail;
