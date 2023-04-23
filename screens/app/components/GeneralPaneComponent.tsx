import { LoadingSVG } from "@components/SVGIcons/LoadingSVG";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useAccountStore } from "@states/account";
import { useCollectorStore } from "@states/collectors";
import { useJanitorStore } from "@states/janitors";
import { useMCPStore } from "@states/mcps";
import { useRouteStore } from "@states/routes";
import { useVehicleStore } from "@states/vehicles";
import { useCallback, useEffect, useMemo } from "react";

export const GeneralPaneComponent: IComponent = () => {
  const { loading, fetchJanitors, janitors } = useJanitorStore();
  const { fetchCollectors, collectors } = useCollectorStore();
  const { fetchVehicles, vehicles } = useVehicleStore();
  const { fetchMCPs, mcps } = useMCPStore();
  const { fetchRoutes, routes } = useRouteStore();
  const { accessToken } = useAccountStore();
  const fetchData = useCallback(async () => {
    await fetchJanitors(accessToken);
    await fetchCollectors(accessToken);
    await fetchVehicles(accessToken);
    await fetchMCPs(accessToken);
    await fetchRoutes(accessToken);
  }, [
    fetchJanitors,
    fetchCollectors,
    accessToken,
    fetchMCPs,
    fetchRoutes,
    fetchVehicles,
  ]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderHeader = useMemo(
    () => (
      <tr>
        <th scope="col" className="px-6 py-3">
          Stt
        </th>
        <th scope="col" className="px-6 py-3">
          CCCD/CMND
        </th>
        <th scope="col" className="px-6 py-3">
          Tên
        </th>
        <th scope="col" className="px-6 py-3">
          Giới tính
        </th>
        <th scope="col" className="px-6 py-3">
          Ngày sinh
        </th>
        <th scope="col" className="px-6 py-3">
          Nơi sinh
        </th>
        <th scope="col" className="px-6 py-3">
          SĐT
        </th>
      </tr>
    ),
    []
  );

  const renderJanitors = useMemo(
    () =>
      !loading ? (
        janitors.map((item, index) => (
          <tr key={index} className="bg-white dark:bg-gray-800 border-8">
            <td className="px-6 py-2">{index + 1 + 1}</td>
            <td className="px-6 py-2">{item.ssn}</td>
            <td className="px-6 py-2">{item.name}</td>
            <td className="px-6 py-2">{item.gender}</td>
            <td className="px-6 py-2">
              {new Date(item.dateOfBirth).toLocaleDateString()}
            </td>
            <td className="px-6 py-2">{item.placeOfBirth}</td>
            <td className="px-6 py-2">{item.phone}</td>
          </tr>
        ))
      ) : (
        <div className="xyz-in w-screen h-screen flex justify-center items-center gap-3">
          <LoadingSVG width={32} height={32} />
          <span className="animate-pulse">Loading, please wait...</span>
        </div>
      ),
    [janitors, loading]
  );

  const renderCollectors = useMemo(
    () =>
      collectors.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{index + 1}</td>
          <td className="px-6 py-2">{item.ssn}</td>
          <td className="px-6 py-2">{item.name}</td>
          <td className="px-6 py-2">{item.gender}</td>
          <td className="px-6 py-2">
            {new Date(item.dateOfBirth).toLocaleDateString()}
          </td>
          <td className="px-6 py-2">{item.placeOfBirth}</td>
          <td className="px-6 py-2">{item.phone}</td>
        </tr>
      )),
    [collectors]
  );

  const renderVehicles = useMemo(
    () =>
      vehicles.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{index + 1}</td>
          <td className="px-6 py-2">{item.model}</td>
          <td className="px-6 py-2">{item.makeBy}</td>
          <td className="px-6 py-2">{item.capacity}</td>
          <td className="px-6 py-2">{item.fuelConsumption}</td>
        </tr>
      )),
    [vehicles]
  );

  const renderMCPs = useMemo(
    () =>
      mcps.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{index + 1}</td>
          <td className="px-6 py-2">{item.location}</td>
          <td className="px-6 py-2">{item.capacity}</td>
        </tr>
      )),
    [mcps]
  );

  const renderRoutes = useMemo(
    () =>
      routes.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{index + 1}</td>
          <td className="px-6 py-2">{item.startLocation}</td>
          <td className="px-6 py-2">{item.endLocation}</td>
          <td className="px-6 py-2">{item.distance}</td>
          <td className="px-6 py-2">{item.estimatedTime}</td>
        </tr>
      )),
    [routes]
  );

  const data = [
    {
      label: "Janitors",
      value: "janitors",
      children: (
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            {renderHeader}
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {renderJanitors}
          </tbody>
        </table>
      ),
    },
    {
      label: "Collectors",
      value: "collectors",
      children: (
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            {renderHeader}
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {renderCollectors}
          </tbody>
        </table>
      ),
    },
    {
      label: "Phương tiện",
      value: "vehicles",
      children: (
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Stt
              </th>
              <th scope="col" className="px-6 py-3">
                Kiểu xe
              </th>
              <th scope="col" className="px-6 py-3">
                Nơi sản xuất
              </th>
              <th scope="col" className="px-6 py-3">
                Tải trọng (Tấn)
              </th>
              <th scope="col" className="px-6 py-3">
                Nhiên liệu (Lít)
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
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Stt
              </th>
              <th scope="col" className="px-6 py-3">
                Địa chỉ
              </th>
              <th scope="col" className="px-6 py-3">
                Sức Chứa (Tấn)
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {renderMCPs}
          </tbody>
        </table>
      ),
    },
    {
      label: "Tuyến đường",
      value: "routes",
      children: (
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Stt
              </th>
              <th scope="col" className="px-6 py-3">
                Điểm bắt đầu
              </th>
              <th scope="col" className="px-6 py-3">
                Điểm kết thúc
              </th>
              <th scope="col" className="px-6 py-3">
                Khoảng cách
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian dự kiến
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {renderRoutes}
          </tbody>
        </table>
      ),
    },
  ];
  return (
    <div className="general-pane">
      <div className="employee">
        <Tabs value="janitors">
          <TabsHeader
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            className="font-bold w-2/3"
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                className="font-bold px-4"
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
              <TabPanel
                key={value}
                value={value}
                className="!p-0 rounded-lg mt-8 overflow-hidden"
              >
                {children}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};
