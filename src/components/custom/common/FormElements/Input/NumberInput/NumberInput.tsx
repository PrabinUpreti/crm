import { INumberInputProps } from "@/@types";
import { inputVariants } from "@/components/custom/common/FormElements/Input/Input/Input";
import { Input } from "@/components/ui/Input/input";
import { cn } from "@/lib/utils";

const NumberInput: React.FC<INumberInputProps> = ({
  placeholder,
  size,
  required = false,
  className,
  onChange,
  ...rest
}) => {
  return (
    <Input
      type="number"
      placeholder={placeholder}
      className={cn(className, inputVariants({ size }))}
      required={required}
      onChange={onChange}
      {...rest}
    />
  );
};
export default NumberInput;
