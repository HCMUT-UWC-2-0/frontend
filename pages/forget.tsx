import { ComponentLoading } from "@components/ComponentLoading";
import { DefaultLayout } from "@layouts/DefaultLayout";
import dynamic from "next/dynamic";

const ForgetScreen = dynamic(
  () => import("@screens/forget").then((data) => data.ForgetScreen),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen">
        <ComponentLoading />
      </div>
    ),
  }
);

const Forgot: IPageComponent = () => {
  return <ForgetScreen />;
};

Forgot.getLayout = (screen) => <DefaultLayout>{screen}</DefaultLayout>;

export default Forgot;
