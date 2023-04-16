import TabsDashboard from "@components/TabsDashboard";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { ReactElement, useMemo } from "react";

import { DegreeTabComponent } from "./DegreeTabComponent";

const DashboardItemComponent: IComponent<{
  name: string;
  icon: ReactElement;
}> = ({ name, icon }) => {
  return (
    <div className="grow flex !item-center rounded-lg gap-2">
      <div className="w-[32px] h-[32px] ">{icon}</div>
      <h2 className="text-md">{name}</h2>
    </div>
  );
};

export const AdminScreen: IComponent = () => {
  const panes = useMemo(
    () => [
      {
        menuItem: (
          <DashboardItemComponent name="Degree" icon={<AcademicCapIcon />} />
        ),
        render: <DegreeTabComponent />,
      },
    ],
    [DegreeTabComponent]
  );
  return (
    <div>
      <h1>Hello Admin !</h1>
      <div className="dashboard after:relative z-10 w-full rounded-3xl font-serif mt-4">
        <TabsDashboard panes={panes} />
      </div>
    </div>
  );
};
