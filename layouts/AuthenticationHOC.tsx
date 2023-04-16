import { LoadingSVG } from "@components/SVGIcons/LoadingSVG";
import { ROUTER } from "@configs/router";
import { useAccountStore } from "@states/account";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { TransitionLayout } from "./TransitionLayout";

export const AuthenticationHOC: IComponent = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { accessToken } = useAccountStore();
  const router = useRouter();

  const preCheck = useCallback(async () => {
    if (accessToken !== "") {
      setLoading(false);
      return;
    }
    //TODO: handle session here
    else {
      router.push(ROUTER.login.url);
      setLoading(false);
    }
  }, [accessToken]);

  useEffect(() => {
    preCheck();
  }, [preCheck]);

  return (
    <TransitionLayout location={loading ? "load" : "loaded"}>
      <>
        {loading && (
          <div className="xyz-in w-screen h-screen flex justify-center items-center gap-3">
            <LoadingSVG width={32} height={32} />
            <span className="animate-pulse">Loading, please wait...</span>
          </div>
        )}
        {!loading && (
          <div className="xyz-in absolute top-0 left-0 w-full h-full">
            {children}
          </div>
        )}
      </>
    </TransitionLayout>
  );
};
