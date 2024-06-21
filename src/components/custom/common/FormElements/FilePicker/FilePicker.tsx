import { Input } from "@/components/ui/Input/input";
import { Label } from "@/components/ui/Label/label";

const FilePicker = () => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
};

export default FilePicker;
