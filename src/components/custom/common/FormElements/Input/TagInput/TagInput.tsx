import { TagInput as EmblorTagInput, Tag } from "emblor";

export interface ITagInput {
  placeholder: string;
  className: string;
  tags: Tag[];
  setTags: () => void;
  activeTagIndex: number;
  setActiveTagIndex: () => void;
}
const TagInput: React.FC<ITagInput> = ({
  placeholder,
  className,
  tags,
  setTags,
  activeTagIndex,
  setActiveTagIndex,
  ...props
}) => {
  return (
    <EmblorTagInput
      {...props}
      placeholder={placeholder}
      tags={tags}
      className={className}
      setTags={setTags}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
    />
  );
};

export default TagInput;
