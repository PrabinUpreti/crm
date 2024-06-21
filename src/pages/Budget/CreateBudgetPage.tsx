import CreateBudget from "@/components/custom/BudgetTable/CreateBudget";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
interface Props {
  title: string;
}
const CreateBudgetPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>
      <CreateBudget />
    </div>
  );
};

export default CreateBudgetPage;
