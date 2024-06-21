import { RocketIcon } from "@radix-ui/react-icons";

import {
  Alert as ShadAlert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/Alert/alert";
import { IAlertProps } from "@/@types";

export default function Alert({ title, description }: Readonly<IAlertProps>) {
  return (
    <ShadAlert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </ShadAlert>
  );
}
