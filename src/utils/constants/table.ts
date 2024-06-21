// Table
export const defaultThCss = "",
  tableThCss = (isFlag: boolean) =>
    isFlag
      ? "hidden"
      : "h-[52px] px-7 py-5 bg-gray-100 text-sm font-semibold  z-90 border-b-[1px] border-[#C7C7C7]",
  tableTdCss = (isLastRow: boolean, isFlag?: boolean) => {
    const commonCss =
      "text-md px-7 py-5 z-[-10]  border-y-[1px] border-[#C7C7C7]";
    const rowCss = `${commonCss} border-b-[1px] border-primary-lighter/50`;
    const hiddenCss = "hidden";

    let result = "";

    if (isLastRow) {
      if (isFlag) {
        result = hiddenCss;
      } else {
        result = rowCss;
      }
    } else {
      if (isFlag) {
        result = hiddenCss;
      } else {
        result = commonCss;
      }
    }

    return result;
  };
