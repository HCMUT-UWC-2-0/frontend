import { ComponentLoading } from "@components/ComponentLoading";
import { DefaultLayout } from "@layouts/DefaultLayout";
import dynamic from "next/dynamic";

const ResetScreen = dynamic(
  () => import("@screens/reset").then((data) => data.ResetScreen),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen">
        <ComponentLoading />
      </div>
    ),
  }
);

const Reset: IPageComponent = () => {
  return <ResetScreen />;
};

Reset.getLayout = (screen) => <DefaultLayout>{screen}</DefaultLayout>;

export default Reset;
