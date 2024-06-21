import Spinner from "../common/Loaders/Spinner/Spinner";
import BudgetTable from "./BudgetTable";
import { useGetBudgetsQuery } from "@/api/budgets";
const BudgetDetail = () => {
  const { data, isLoading } = useGetBudgetsQuery();

  if (isLoading || !data) return <Spinner />;

  return (
    <div className="my-[1.3rem]">
      <BudgetTable budgets={data} />
    </div>
  );
};

export default BudgetDetail;
