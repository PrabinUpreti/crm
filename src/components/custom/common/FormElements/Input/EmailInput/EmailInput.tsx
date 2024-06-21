import { IEmailInputProps } from "@/@types";
import { inputVariants } from "@/components/custom/common/FormElements/Input/Input/Input";
import { Input } from "@/components/ui/Input/input";
import { cn } from "@/lib/utils";

const EmailInput: React.FC<IEmailInputProps> = ({
  placeholder,
  size,
  required = false,
  className,
  onChange,
  ...rest
}) => {
  return (
    <Input
      type="email"
      placeholder={placeholder}
      className={cn(className, inputVariants({ size }))}
      required={required}
      onChange={onChange}
      {...rest}
    />
  );
};
export default EmailInput;
