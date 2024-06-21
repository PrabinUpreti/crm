import { StoryObj, Meta } from "@storybook/react";
import Tabs from "./Tabs";
import {
  Card as ShadCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/card";
import { Label } from "@/components/ui/Label/label";
import { Input } from "@/components/ui/Input/input";
import { Button } from "@/components/ui/Button/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/select";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",

  args: {
    triggers: [{ id: "update-profile", label: "Update Profile" }],
    contents: [
      {
        id: "update-profile",
        element: (
          <div>
            {" "}
            <ShadCard className="w-[350px]">
              <CardHeader>
                <CardTitle> Update Profile</CardTitle>
                <CardDescription>Update your profile.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Framework</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </ShadCard>
          </div>
        ),
      },
    ],
  },
  component: Tabs,
  parameters: {
    layout: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
