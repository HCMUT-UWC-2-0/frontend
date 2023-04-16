import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useCallback, useMemo } from "react";

import { ShowComponent } from "./ShowComponent";
import { UploadComponent } from "./UploadComponent";

export const DegreeTabComponent: IComponent = () => {
  const data = useMemo(
    () => [
      {
        label: "Show degree",
        value: "show",
        children: <ShowComponent />,
      },
      {
        label: "Upload degree",
        value: "upload",
        children: <UploadComponent />,
      },
    ],
    [ShowComponent, UploadComponent]
  );
  return (
    <div>
      {" "}
      <Tabs value="show">
        <TabsHeader
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          className="w-1/2 bg-teal-600"
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              className="font-bold text-semibold"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          {data.map(({ value, children }) => (
            <TabPanel key={value} value={value}>
              {children}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};
