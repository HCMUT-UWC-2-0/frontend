import "@styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

import { ComponentLoading } from "@components/ComponentLoading";
import { MainLayout } from "@layouts/MainLayout";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";

/**
 * Default layout for page component
 */

const DefaultLayout: IComponent = ({ children }) => <>{children}</>;
const ThemeProvider = dynamic(() =>
  import("@material-tailwind/react/context/theme").then(
    (data) => data.ThemeProvider
  )
);

const AuthenticationHOC = dynamic(
  () =>
    import("@layouts/AuthenticationHOC").then((data) => data.AuthenticationHOC),
  { loading: () => <ComponentLoading /> }
);
const ToastContainer = dynamic(() =>
  import("react-toastify").then((data) => data.ToastContainer)
);

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as IPageComponent).getLayout ||
    ((children) => <DefaultLayout>{children}</DefaultLayout>);

  const PageContent = Component as IPageComponent;
  const title = "UWC 2.0";

  return (
    <ThemeProvider value={undefined}>
      <MainLayout>
        <Head>
          <title>{title}</title>
        </Head>
        <AuthenticationHOC>
          {getLayout(<PageContent {...pageProps} />, pageProps)}
        </AuthenticationHOC>
      </MainLayout>

      <ToastContainer position={"bottom-right"} autoClose={3000} pauseOnHover />
    </ThemeProvider>
  );
}

export default MyApp;
