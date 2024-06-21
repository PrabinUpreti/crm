import ProfileSettingDetail from "@/components/page/Settings/ProfileSettingDetail";
import SettingLayout from "@/layouts/SettingLayout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const SettingPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <SettingLayout />
    </div>
  );
};
export default SettingPage;
