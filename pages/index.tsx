import { PublicLayout } from "@layouts/PublicLayout";
import { AppScreen } from "@screens/app";

const Home: IPageComponent = () => {
  return <AppScreen />;
};

Home.getLayout = (screen) => <PublicLayout>{screen}</PublicLayout>;

export default Home;
