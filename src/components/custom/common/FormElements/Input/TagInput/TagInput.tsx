import { TagInput as EmblorTagInput, Tag } from "emblor";

export interface ITagInput {
  placeholder: string;
  className: string;
  tags: Tag[];
  setTags: () => void;
  // field: ControllerRenderProps;
}
const TagInput: React.FC<ITagInput> = ({
  placeholder,
  className,
  tags,
  setTags,
  ...props
}) => {
  return (
    <EmblorTagInput
      {...props}
      placeholder={placeholder}
      tags={tags}
      className={className}
      setTags={setTags} //   setTags={(newTags) => {
      //     setTags(newTags);
      //     setValue("topics", newTags as [Tag, ...Tag[]]);
      //   }}
    />
  );
};

export default TagInput;
