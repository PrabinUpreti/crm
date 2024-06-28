const GFormTabTriggers = [
  {
    id: "createForm",
    label: "Create Forms",
  },
  {
    id: "formLists",
    label: "Forms Lists",
  },
  {
    id: "formResponse",
    label: "Form Response",
  },
];

import { useGetContactQuery } from "@/api/contact";
import { useParams } from "react-router";
import UserDetail from "./UserDetail/UserDetail";
import SearchInput from "@/components/custom/common/SearchInput/SearchInput";
import { Button } from "@/components/ui/Button/button";
import { BiChevronDown } from "react-icons/bi";
import GForm from "./GForm";
import GFormDetails from "./GFormDetails";
import Tabs from "@/components/custom/common/Tabs/TabsWithBottomBorder/Tabs";
const GFormTab = () => {
  const { contactId } = useParams();
  const { data, isLoading } = useGetContactQuery(contactId);
  // const { transactionData } = useGetContactQuery(contactId);

  // if (!contactId) return "loading";

  // if (isLoading || !data) return "Loading...";

  return (
    <>
      <div>
        <p className="mt-5 font-bold">Opportunity Details</p>
        <div className="flex justify-between mt-7">
          <SearchInput
            id="workspace-search"
            name="workspace-search"
            inputSize="lg"
            placeholder="example : Search"
            className=""
          />
          <Button type="button" variant={"default"} size={"lg"}>
            Message <BiChevronDown />
          </Button>
        </div>
      </div>
      <div className="my-[2rem]">
        <Tabs
          triggers={GFormTabTriggers}
          contents={[
            {
              id: "createForm",
              element: <GForm />,
            },
            {
              id: "formLists",
              element: <GFormDetails />,
            },
            {
              id: "formResponse",
              element: <div>Form Response</div>,
            },
          ]}
        />
      </div>
    </>
  );
};

export default GFormTab;
