import { IContactRowData } from "@/@types";
import { IContact } from "@/@types/crm";
import {
  Card as ShadCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/card";
import { useEffect, useState } from "react";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const UserDetail = (propsContact: IContact) => {
  const [contact, setContact] = useState<IContact>();

  useEffect(() => {
    setContact(propsContact);
    console.log(propsContact);
  }, [propsContact]);

  if (!contact) return "Loading...";

  const contactFields = [
    { label: "Last Communication Date", value: contact.lastCommunicationDate },
    {
      label: "Next Communication Date",
      value: contact.next_comms_date || "Not set",
    },
    { label: "Phone", value: contact.phone },
    {
      label: "Address",
      value: `${contact.city} ${contact.street} ${contact.country}`,
    },
    { label: "Email Address", value: contact.email },
    { label: "Social Media Platform (Source)", value: contact.source },
    {
      label: "Customer's Social Media A/c Name",
      value:
        contact.social_media_links.facebook ||
        contact.social_media_links.twitter ||
        contact.social_media_links.linkedin,
    },
    { label: "Work Background", value: contact.background_field },
    { label: "Opportunity", value: contact.opportunity },
  ];

  return (
    <div className="mt-[2rem]">
      <ShadCard className="w-full">
        <CardHeader>
          <CardTitle>
            {contact.first_name} {contact.last_name}
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className=" rounded-md">
            <div className=" ">
              {contactFields.map((field, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-1 border-b py-5 "
                >
                  <span className="pl-[2rem] col-span-2">{field.label}</span>
                  <span className="col-span-3">{field.value}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </ShadCard>
    </div>
  );
};

export default UserDetail;
