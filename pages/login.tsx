import { PublicLayout } from "@layouts/PublicLayout";
import { LoginScreen } from "@screens/login";

const Login: IPageComponent = () => {
  return <LoginScreen />;
};

Login.getLayout = (screen) => <PublicLayout>{screen}</PublicLayout>;

export default Login;
