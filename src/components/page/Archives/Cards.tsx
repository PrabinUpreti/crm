/* eslint-disable @typescript-eslint/no-explicit-any */
import ArchiveCard from "./ArchiveCard";
import { IBookmark } from "@/@types";

const Cards = ({ data }: { data: IBookmark[] }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2.5rem]">
      {data?.slice(0, 8).map((item: any) => {
        return <ArchiveCard {...item} />;
      })}
    </div>
  );crea
};

export default Cards;
