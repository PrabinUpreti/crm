import ProfileSettingDetail from "@/components/page/Settings/ProfileSettingDetail";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const ProfileSettingPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <ProfileSettingDetail />
    </div>
  );
};
export default ProfileSettingPage;
