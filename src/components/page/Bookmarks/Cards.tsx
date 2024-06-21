/* eslint-disable @typescript-eslint/no-explicit-any */
import BookmarkCard from "./BookmarkCard";
import { IBookmark } from "@/@types";

const Cards = ({ data }: { data: IBookmark[] }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2.5rem]">
      {data.slice(0, 8)?.map((item: any) => {
        return <BookmarkCard {...item} />;
      })}
    </div>
  );
};

export default Cards;
