import { BellSVG } from "@components/SVGIcons/BellSVG";
import { BoxSVG } from "@components/SVGIcons/BoxSVG";
import { ChartSVG } from "@components/SVGIcons/ChartSVG";
import { GeneralSVG } from "@components/SVGIcons/GeneralSVG";
import { SettingSVG } from "@components/SVGIcons/SettingSVG";
import TabsDashboard from "@components/TabsDashboard";
import { capitalize } from "@utils/tools";
import { ReactElement, useState } from "react";

import { AlertPaneComponent } from "./AlertPaneComponent";
import { AnalysisPaneComponent } from "./AnalysisPaneComponent";
import { AssignPaneComponent } from "./AssignPaneComponent";
import { GeneralPaneComponent } from "./GeneralPaneComponent";
import { SettingPaneComponent } from "./SettingPaneComponent";

const DashboardItemComponent: IComponent<{
  name: string;
  icon: ReactElement;
  active: boolean;
  onClick: () => void;
}> = ({ name, icon, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`duration-150 grow flex !item-center rounded-lg gap-2 !py-4 !px-8 ${
        active && "bg-teal-600"
      }`}
    >
      <div className="w-[20px] h-[20px ]">{icon}</div>
      <h2 className="text-sm">{capitalize(name)}</h2>
    </div>
  );
};

const Dashboard: IComponent = () => {
  const [activePane, setActivePane] = useState(0);

  const panes = [
    {
      menuItem: (
        <DashboardItemComponent
          onClick={() => setActivePane(0)}
          active={activePane === 0}
          name="Chung"
          icon={<GeneralSVG />}
        />
      ),
      render: <GeneralPaneComponent />,
    },
    {
      menuItem: (
        <DashboardItemComponent
          onClick={() => setActivePane(2)}
          active={activePane === 2}
          name="Cảnh báo"
          icon={<BellSVG />}
        />
      ),
      render: <AlertPaneComponent />,
    },
    {
      menuItem: (
        <DashboardItemComponent
          onClick={() => setActivePane(3)}
          active={activePane === 3}
          name="Phân công"
          icon={<BoxSVG />}
        />
      ),
      render: <AssignPaneComponent />,
    },
    {
      menuItem: (
        <DashboardItemComponent
          onClick={() => setActivePane(4)}
          active={activePane === 4}
          name="Phân tích"
          icon={<ChartSVG />}
        />
      ),
      render: <AnalysisPaneComponent />,
    },
    {
      menuItem: (
        <DashboardItemComponent
          onClick={() => setActivePane(5)}
          active={activePane === 5}
          name="Cài đặt"
          icon={<SettingSVG />}
        />
      ),
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
