import { ITextInputProps } from "@/@types";
import Input from "@/components/custom/common/FormElements/Input/Input/Input";
import { cn } from "@/lib/utils";

const TextInput: React.FC<ITextInputProps> = ({
  placeholder,
  size,
  required = false,
  name,
  id,
  onChange,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      type="text"
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      name={name}
      id={id}
      size={size}
      className={`${cn(className)}`}
    />
  );
};
export default TextInput;
