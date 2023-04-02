import { BellSVG } from "@components/SVGIcons/BellSVG";
import { BoxSVG } from "@components/SVGIcons/BoxSVG";
import { ChartSVG } from "@components/SVGIcons/ChartSVG";
import { GeneralSVG } from "@components/SVGIcons/GeneralSVG";
import { SettingSVG } from "@components/SVGIcons/SettingSVG";
import TabsDashboard from "@components/TabsDashboard";
import { capitalize } from "@utils/tools";
import { ReactElement } from "react";

import { AlertPaneComponent } from "./AlertPaneComponent";
import { AnalysisPaneComponent } from "./AnalysisPaneComponent";
import { AssignPaneComponent } from "./AssignPaneComponent";
import { GeneralPaneComponent } from "./GeneralPaneComponent";
import { SettingPaneComponent } from "./SettingPaneComponent";

const DashboardItemComponent: IComponent<{
  name: string;
  icon: ReactElement;
}> = ({ name, icon }) => {
  return (
    <div className="grow flex !item-center rounded-lg gap-2">
      <div className="w-[20px] h-[20px ]">{icon}</div>
      <h2 className="text-sm">{capitalize(name)}</h2>
    </div>
  );
};

const Dashboard: IComponent = () => {
  const panes = [
    {
      menuItem: <DashboardItemComponent name="Chung" icon={<GeneralSVG />} />,
      render: <GeneralPaneComponent />,
    },
    {
      menuItem: <DashboardItemComponent name="Cảnh báo" icon={<BellSVG />} />,
      render: <AlertPaneComponent />,
    },
    {
      menuItem: <DashboardItemComponent name="Phân công" icon={<BoxSVG />} />,
      render: <AssignPaneComponent />,
    },
    {
      menuItem: <DashboardItemComponent name="Phân tích" icon={<ChartSVG />} />,
      render: <AnalysisPaneComponent />,
    },
    {
      menuItem: <DashboardItemComponent name="Cài đặt" icon={<SettingSVG />} />,
      render: <SettingPaneComponent />,
    },
  ];
  return (
    <div className="dashboard after:relative z-10 w-full rounded-3xl font-serif">
      <TabsDashboard panes={panes} />
    </div>
  );
};

export default Dashboard;
