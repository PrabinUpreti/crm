import Dropdown from "@/components/custom/common/Dropdowns/DropdownMenu/DropdownMenu";
import { DarkModeCard } from "@/components/custom/common/Theme/DarkModeCard";
import { LightModeCard } from "@/components/custom/common/Theme/LightModeCard";
import { useTheme } from "@/components/Providers/Theme/ThemeProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select/select";
import { useAppDispatch } from "@/hooks";
import i18n from "@/intl/i18n";
import { setLanguage } from "@/redux/features/app/appSlice";
import { availableLanguages } from "@/utils/constants/intl";
import { useState } from "react";
export default function PreferencesSettingDetail() {
  const { setTheme, theme } = useTheme();
  const dispatch = useAppDispatch();
  const handleLanguageSelect = (language: any) => {
    if (language) {
      dispatch(setLanguage({ language }));
    }
  };
  return (
    <>
      <div className="pb-5">
        <h1 className="text-4xl  mt-[2rem]">Appearance</h1>
        <span className="text-sm text-gray-500">
          Appearance settings for the workspace.
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2 items-center">
        <button type="button" onClick={() => setTheme("light")}>
          <LightModeCard active={theme === "light"} />
          <span className="mt-2 font-normal text-muted-foreground text-sm">
            Light
          </span>
        </button>
        <button type="button" onClick={() => setTheme("dark")}>
          <DarkModeCard active={theme === "dark"} />
          <span className="mt-2 font-normal text-muted-foreground text-sm">
            Dark
          </span>
        </button>
        <button type="button" onClick={() => setTheme("system")}>
          <div className="relative">
            <LightModeCard active={theme === "system"} />
            <div
              className="absolute top-0 right-0 bottom-0 left-0"
              style={{
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              }}
            >
              <DarkModeCard active={theme === "system"} />
            </div>
          </div>
          <span className="mt-2 font-normal text-muted-foreground text-sm">
            System
          </span>
        </button>
      </div>
      <div className="py-5">
        <h1 className="text-4xl  mt-[2rem]">Languages</h1>
        <span className="text-sm text-gray-500">Language settings</span>
      </div>
      <Select onValueChange={handleLanguageSelect}>
        <SelectTrigger>
          <SelectValue placeholder={`Select Language`} />
        </SelectTrigger>
        <SelectContent>
          {availableLanguages.map((language) => {
            return (
              <SelectItem value={language.id}>{language.label}</SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
}
