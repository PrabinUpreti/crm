import { IArchive } from "@/@types";

import {
  EditIcon,
  EyeIcon,
  PeopleIcon,
  TaskIcon,
} from "@/components/custom/common/icons/commonIcons";
import Tags, { ITagsProps } from "@/components/custom/common/Tags/Tags";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/card";
import { faker } from "@faker-js/faker";
import { Ellipsis } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ArchiveCard: React.FC<IArchive> = ({
  id,
  name,
  // createdBy,
  // start_date,
  // due_date,
  // status,
  // priority,
  // assignee,
  // tasks,

  description,
}) => {
  return (
    <Card className="group relative pt-[1rem] hover:cursor-pointer hover:shadow-md hover:scale-105 transition-all before:transition-all before:hidden before:rounded-lg   hover:before:block before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gray-900 before:opacity-90 ">
      <div className="absolute left-[-1rem] z-40 top-[-1.5rem] rounded-full bg-primary h-[3rem] w-[3rem] text-primary-foreground flex gap-1 items-center justify-center">
        <PeopleIcon className="text-xl" />
        <p className="">{10}</p>
      </div>
      <div className="absolute right-[0.3rem] top-[0.3rem] rounded-full bg-primary/5 text-primary h-12 w-12 p-2 flex items-center justify-center">
        <TaskIcon />
        {/* <p>{tasks.length}</p> */}
        {20}
      </div>
      <div className=""></div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="">
          {description && description?.length > 50 ? (
            <>
              {description.slice(0, 50)}
              &nbsp;
              <Ellipsis className="inline" />
            </>
          ) : (
            description
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col">
        <div className="flex flex-wrap gap-2 items-center">
          {faker.helpers
            .arrayElements([
              "marketing",
              "design",
              "2024Q2",
              "priority",
              "sales",
              "development",
              "testing",
            ])
            .slice(0, 2)
            .map((tag) => {
              const tagVariant: ITagsProps["variant"] =
                faker.helpers.arrayElement([
                  "primary",
                  "dark",
                  "red",
                  "green",
                  "yellow",
                  "indigo",
                  "purple",
                  "pink",
                  "default",
                ]);
              return <Tags variant={tagVariant} value={tag} />;
            })}
        </div>
      </CardContent>
      <CardFooter className="hidden  group-hover:flex gap-[1rem] absolute z-10 text-white text-2xl  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <EditIcon />
        <Link to={`/archive/${id}`}>
          {" "}
          <EyeIcon />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArchiveCard;
