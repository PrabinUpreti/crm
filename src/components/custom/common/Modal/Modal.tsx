import { IModalProps } from "@/@types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog/dialog";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
export const modalVariants = cva("", {
  variants: {
    size: {
      sm: "max-w-lg",
      md: "max-w-xl",
      lg: "max-w-2xl",
      xl: "max-w-3xl",
      full: "w-[calc(100vw-5rem)] w-[calc(100vh-5rem)]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Modal: React.FC<IModalProps> = ({
  trigger,
  title,
  description,
  body,
  footer,
  children,
  size,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={cn(modalVariants({ size: size }))}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {/* body goes here */}
        <div>{body}</div>
        <div>{children}</div>
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
