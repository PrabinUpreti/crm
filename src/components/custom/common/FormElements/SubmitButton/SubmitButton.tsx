import { ISubmitButton } from "@/@types";
import { Button } from "@/components/ui/Button/button";
import React from "react";

const SubmitButton: React.FC<ISubmitButton> = (props) => {
  return (
    <div>
      <Button type={"submit"} {...props} />
    </div>
  );
};

export default SubmitButton;
