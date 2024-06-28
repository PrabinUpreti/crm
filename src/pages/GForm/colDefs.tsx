import { Button } from "@/components/ui/Button/button";
import { Link, useNavigate } from "react-router-dom";
import { useGetLinkQuery } from "@/api/GForm";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip/tooltip";
import {
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";

// Separate Cell Renderer Component
const ActionsCellRenderer = ({ data }) => {
  const formId = data.id;
  const navigate = useNavigate();
  const [link, setLink] = useState("");
  const { data: linkData, error, isLoading } = useGetLinkQuery(formId);

  useEffect(() => {
    if (error) {
      toast.error("Error fetching link: " + error.message, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }, [error]);

  const handleDelete = () => {
    console.log(`Delete item with id: ${data.id}`);
  };

  const handleCopyLink = async () => {
    if (isLoading) return;
    if (!linkData?.link) {
      toast.error("No link available", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }
    setLink(linkData.link);
    await navigator.clipboard.writeText(linkData.link);
    toast.success("Link copied to clipboard!", {
      autoClose: 1000,
    });
  };

  return (
    <>
      <div className="flex gap-4 items-center justify-start h-full">
        {data.status === "Saved" && (
          <Link to={`/contact/form/1/${formId}`}>
            <TrashIcon />
          </Link>
        )}
        {data.status === "Published" && (
          <Link onClick={handleCopyLink}>
            <Tooltip>
              <TooltipTrigger>
                <TrashIcon />
              </TooltipTrigger>
              <TooltipContent>Click here to get Link</TooltipContent>
            </Tooltip>
          </Link>
        )}
        <TrashIcon
          onClick={handleDelete}
          className="text-destructive cursor-pointer"
        />
        <EditIcon
          className="text-blue-900 cursor-pointer"
          onClick={() => navigate(`/edit/${formId}`)}
        />
        <ToastContainer />
      </div>
    </>
  );
};

export const colDefs = [
  {
    headerName: "Open Form",
    cellRenderer: (p) => (
      <Button className="border border-blue-400" type="submit" variant={"link"}>
        Open Form
      </Button>
    ),
  },
  {
    field: "title",
    headerName: "Form Title",
  },
  {
    field: "author",
    headerName: "Authors",
  },
  {
    field: "status",
    headerName: "Status",
  },
  {
    field: "Actions",
    editable: false,
    floatingFilter: false,
    filter: false,
    enablePivot: false,
    headerCheckboxSelection: false,
    cellRenderer: (p) => <ActionsCellRenderer data={p.data} />,
  },
];
