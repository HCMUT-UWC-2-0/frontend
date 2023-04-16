import { DefaultLayout } from "@layouts/DefaultLayout";
import { LoginScreen } from "@screens/login";

const Login: IPageComponent = () => {
  return <LoginScreen />;
};

Login.getLayout = (screen) => <DefaultLayout>{screen}</DefaultLayout>;

export default Login;
