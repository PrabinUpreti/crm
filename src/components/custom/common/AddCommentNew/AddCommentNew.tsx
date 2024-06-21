import { Button } from "@/components/ui/Button/button";
import { FormEvent, useState } from "react";
import PlateEditor from "../Editors/PlateEditor/PlateEditor";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import IconDropdown from "../Dropdowns/IconDropdown/IconDropdown";
import { ThreeVerticalDots } from "../icons/commonIcons";
interface IComment {
  id: number;
  content: string;
  date: string;
  avatar: string;
  name: string;
}

const plateEditorInitialValue = [
  {
    id: "1",
    type: ELEMENT_PARAGRAPH,
    children: [{ text: "Comment here..." }],
  },
];

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Edit " },
    { id: "2", isLink: false, label: "Delete" },
    // { id: "3", isLink: false, label: "Send Email" },
  ],
};

const AddCommentNew = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<IComment[]>([]);
  const handleSubmit = (Event: FormEvent) => {
    Event.preventDefault();
    if (comment.trim()) {
      const newComment: IComment = {
        id: comments.length + 1,
        content: comment,
        date: new Date().toLocaleDateString(),
        avatar:
          "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
        name: " ",
      };
      setComments([newComment, ...comments]);
      setComment("");
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 py-3 lg:py-7 antialiased max-h-[70vh] overflow-auto border">
        <div className="px-4">
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="px-4 mb-4 bg-white rounded-lg rounded-t-lg border  ">
              <PlateEditor
                initialValue={plateEditorInitialValue}
                className="my-[4rem]"
              />
            </div>
            <Button>Comment</Button>
          </form>
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="p-2 text-sm bg-white rounded-lg dark:bg-gray-900"
            >
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src={comment.avatar}
                      alt={comment.name}
                    />
                    {comment.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time title={comment.date}>{comment.date}</time>
                  </p>
                </div>
                <button
                  id={`dropdownComment1Button${comment.id}Button`}
                  data-dropdown-toggle="dropdownComment1"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                <div
                  id={`dropdownComment1Button${comment.id}`}
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="/"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Remove
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">
                {comment.content}
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                  <svg
                    className="mr-1.5 w-3.5 h-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  Reply
                </button>
              </div>
            </article>
          ))}
          <article className="p-6 mb-3 ml-3 lg:ml-6 text-sm bg-white rounded-lg dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Jese Leos"
                  />
                  Jese Leos
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <time title="February 12th, 2022 text-xs">Feb. 12, 2022</time>
                </p>
              </div>

              <IconDropdown
                menu={dropdownMenus}
                dropdownSize="sm"
                dropdownVariant="default"
                icon={<ThreeVerticalDots />}
                className="w-[2rem]"
              />
            </footer>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              Much appreciated! Glad you liked it ☺️
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
          <article className="p-6 mb-3 ml-3 lg:ml-6 text-sm bg-white rounded-lg dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Jese Leos"
                  />
                  Jese Leos
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <time title="February 12th, 2022 text-xs">Feb. 12, 2022</time>
                </p>
              </div>

              <IconDropdown
                menu={dropdownMenus}
                dropdownSize="sm"
                dropdownVariant="default"
                icon={<ThreeVerticalDots />}
                className="w-[2rem]"
              />
            </footer>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              Much appreciated! Glad you liked it ☺️
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
          <article className="p-6 mb-3 ml-3 lg:ml-6 text-sm bg-white rounded-lg dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Jese Leos"
                  />
                  Jese Leos
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  <time title="February 12th, 2022 text-xs">Feb. 12, 2022</time>
                </p>
              </div>

              <IconDropdown
                menu={dropdownMenus}
                dropdownSize="sm"
                dropdownVariant="default"
                icon={<ThreeVerticalDots />}
                className="w-[2rem]"
              />
            </footer>
            <p className="text-gray-500 text-sm dark:text-gray-400">
              Much appreciated! Glad you liked it ☺️
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              >
                <svg
                  className="mr-1.5 w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default AddCommentNew;
