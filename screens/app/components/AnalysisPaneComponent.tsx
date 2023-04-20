import {
  Button,
  Chip,
  Input,
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React, { useMemo, useState } from "react";

import { LineChart } from "./Chart";

export const AnalysisPaneComponent: IComponent = () => {
  const [showChart, setShowChart] = useState(false);

  function handleButtonClick() {
    setShowChart(!showChart);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data_assign: {
    janitor: string;
    collector: string;
    vehicle: string;
    route: string;
    created_at: string;
    status: string;
  }[] = [
    {
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      created_at: "28 / 2 / 2023",
      status: "Đã hoàn thành",
    },
    {
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      created_at: "28 / 2 / 2023",
      status: "Đã hoàn thành",
    },
    {
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      created_at: "28 / 2 / 2023",
      status: "Đã hoàn thành",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data_vehicles: {
    license_plates: string;
    driver: string;
    entry_time: string;
    departure_time: string;
    date: string;
    distance: string;
  }[] = [
    {
      license_plates: "Hino FC9JETC",
      driver: "Mike",
      entry_time: "19:47",
      departure_time: "21:30",
      date: "28/2/2023",
      distance: "14.4 km",
    },
  ];

  const renderassigned = useMemo(
    () =>
      data_assign.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{index + 1}</td>
          <td className="px-6 py-2">{item.janitor}</td>
          <td className="px-6 py-2">{item.collector}</td>
          <td className="px-6 py-2">{item.vehicle}</td>
          <td className="px-6 py-2">{item.route}</td>
          <td className="px-6 py-2">{item.create_by}</td>
          <td className="px-6 py-2">{item.day}</td>
          <td className="text-center px-6 py-2">
            {item.status == "Đã hoàn thành" ? (
              <Chip className="bg-teal-600" value={item.status} />
            ) : (
              <Chip color="lime" value={item.status} />
            )}
          </td>
        </tr>
      )),
    [data_assign]
  );

  const renderVehicles = useMemo(
    () =>
      data_vehicles.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{index + 1}</td>
          <td className="px-6 py-2">{item.license_plates}</td>
          <td className="px-6 py-2">{item.driver}</td>
          <td className="px-6 py-2">{item.entry_time}</td>
          <td className="px-6 py-2">{item.departure_time}</td>
          <td className="px-6 py-2">{item.date}</td>
          <td className="px-6 py-2">{item.distance}</td>
        </tr>
      )),
    [data_vehicles]
  );

  const data = [
    {
      label: "Phân công",
      value: "assign",
      children: (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Janitor
              </th>
              <th scope="col" className="px-6 py-3">
                Collector
              </th>
              <th scope="col" className="px-6 py-3">
                Phương tiện
              </th>
              <th scope="col" className="px-6 py-3">
                Lộ trình
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian bắt đầu
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {renderassigned}
          </tbody>
        </table>
      ),
    },
    {
      label: "Phương tiện",
      value: "vehicles",
      children: (
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Biển số
              </th>
              <th scope="col" className="px-6 py-3">
                Tài xế
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian xuất bãi
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian nhập bãi
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày thực hiện
              </th>
              <th scope="col" className="px-6 py-3">
                Quãng đường di chuyển
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {renderVehicles}
          </tbody>
        </table>
      ),
    },
    {
      label: "MCPs",
      value: "mcps",
      children: (
        <div className="grid grid-row-6 gap-8">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-3 ">
              <div className="flex flex-col w-72 gap-6">
                <Select
                  variant="static"
                  label="Chọn MCPs"
                  color="teal"
                  nonce={undefined}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  <Option>1</Option>
                  <Option>2</Option>
                  <Option>3</Option>
                  <Option>4</Option>
                  <Option>5</Option>
                </Select>
              </div>
            </div>
            <div className="col-start-3 col-end-4 gap-6">
              <Input
                color="teal"
                label="Chọn ngày"
                type="date"
                variant="static"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              />
            </div>
            <div className="col-start-5 col-end-6 gap-6">
              <Button
                variant="outlined"
                color="teal"
                onClick={handleButtonClick}
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Xác nhận
              </Button>
            </div>
          </div>
          <div className="gap-8 flex flex-row">
            {showChart ? (
              <LineChart monitorType={"Khối lượng (tấn)"} />
            ) : (
              <div className="bg-gray-200 h-10 w-full min-h-screen max-h-500"></div>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="general-pane">
      <div className="employee">
        <Tabs value="html">
          <TabsHeader
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
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
    </div>
  );
};
