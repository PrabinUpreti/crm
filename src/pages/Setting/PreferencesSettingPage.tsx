import PreferencesSettingDetail from "@/components/page/Settings/PreferencesSettingDetail";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const PreferencesSettingPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <PreferencesSettingDetail />
    </div>
  );
};
export default PreferencesSettingPage;
