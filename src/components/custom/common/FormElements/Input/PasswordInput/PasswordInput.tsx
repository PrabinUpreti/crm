import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "@/components/custom/common/FormElements/Input/Input/Input";
import { IPasswordInputProps } from "@/@types";

const PasswordInput: React.FC<IPasswordInputProps> = ({
  className,
  size,
  placeholder,
  required,
  onChange,
  name,
  id,
  ...props
}): React.ReactNode => {
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="relative">
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        name={name}
        id={id}
        size={size}
        required={required}
        placeholder={placeholder}
        className={cn("hide-password-toggle pr-10", className)}
        onChange={onChange}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <FaEye className="h-4 w-4" aria-hidden="true" />
        ) : (
          <FaEyeSlash className="h-4 w-4 text-gray-400" aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>

      <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
    </div>
  );
};

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
