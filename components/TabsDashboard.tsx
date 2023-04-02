import "@reach/tabs/styles.css";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@reach/tabs";
import { ReactElement } from "react";

interface ITabsDashboardProps {
  color?: string;
  panes: Array<{
    menuItem: ReactElement;
    render: ReactElement;
  }>;
}

const TabsDashboard: IComponent<ITabsDashboardProps> = ({
  panes,
  color = "!bg-white",
}) => {
  return (
    <div className="">
      <Tabs orientation="vertical" className="!h-full gap-8">
        <TabList className={color}>
          {panes.map((pane, index) => (
            <Tab
              key={index}
              className="!border-none !py-4 !px-12 !flex !justify-center !rounded-lg"
            >
              {pane.menuItem}
            </Tab>
          ))}
        </TabList>
        <TabPanels className={`grow tab-panels rounded-[20px] ${color}`}>
          {panes.map((pane, index) => (
            <TabPanel key={index} className="h-full p-8">
              {pane.render}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabsDashboard;
