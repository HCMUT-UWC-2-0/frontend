import { ComponentLoading } from "@components/ComponentLoading";
import { DefaultLayout } from "@layouts/DefaultLayout";
import dynamic from "next/dynamic";

const LoginScreen = dynamic(
  () => import("@screens/login").then((data) => data.LoginScreen),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen">
        <ComponentLoading />
      </div>
    ),
  }
);

const Login: IPageComponent = () => {
  return <LoginScreen />;
};

Login.getLayout = (screen) => <DefaultLayout>{screen}</DefaultLayout>;

export default Login;
