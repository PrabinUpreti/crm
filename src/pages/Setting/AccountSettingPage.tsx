import AccountSettingDetail from "@/components/page/Settings/AccountSettingDetail";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
}

const AccountSettingPage = ({ title }: Props) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);
  return (
    <div>
      <Helmet>{`${title}`}</Helmet>

      <AccountSettingDetail />
    </div>
  );
};
export default AccountSettingPage;
