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
import { useCallback, useEffect, useMemo } from "react";

export const GeneralPaneComponent: IComponent = () => {
  const data_vehicle: {
    license_plates: string;
    capacity: string;
    fuel: string;
    make_by: string;
  }[] = [
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản",
    },
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản",
    },
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản",
    },
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản",
    },
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản",
    },
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản",
    },
  ];

  const data_MCPs: {
    location: string;
    MCPs_capacity: string;
  }[] = [
    {
      location: "Quận Bình Thạnh",
      MCPs_capacity: "1000",
    },
    {
      location: "Quận 10",
      MCPs_capacity: "1500",
    },
    {
      location: "Quận Tân Bình",
      MCPs_capacity: "2000",
    },
    {
      location: "Quận Bình Thạnh",
      MCPs_capacity: "2500",
    },
    {
      location: "Quận 7",
      MCPs_capacity: "3000",
    },
  ];

  const { fetchJanitors, janitors } = useJanitorStore();
  const { fetchCollectors, collectors } = useCollectorStore();
  const { accessToken } = useAccountStore();
  const fetchData = useCallback(async () => {
    await fetchJanitors(accessToken);
    await fetchCollectors(accessToken);
  }, [fetchJanitors, fetchCollectors]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderHeader = useMemo(
    () => (
      <tr>
        <th scope="col" className="px-6 py-3">
          ID
        </th>
        <th scope="col" className="px-6 py-3">
          CCCD/CMND
        </th>
        <th scope="col" className="px-6 py-3">
          Tên
        </th>
        <th scope="col" className="px-6 py-3">
          Tuổi
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
      janitors.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{index}</td>
          <td className="px-6 py-2">{item.ssn}</td>
          <td className="px-6 py-2">{item.name}</td>
          <td className="px-6 py-2">{item.age}</td>
          <td className="px-6 py-2">{item.gender}</td>
          <td className="px-6 py-2">{item.dateOfBirth}</td>
          <td className="px-6 py-2">{item.placeOfBirth}</td>
          <td className="px-6 py-2">{item.phone}</td>
        </tr>
      )),
    [janitors]
  );

  const renderCollectors = useMemo(
    () =>
      collectors.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{index}</td>
          <td className="px-6 py-2">{item.ssn}</td>
          <td className="px-6 py-2">{item.name}</td>
          <td className="px-6 py-2">{item.age}</td>
          <td className="px-6 py-2">{item.gender}</td>
          <td className="px-6 py-2">{item.dateOfBirth}</td>
          <td className="px-6 py-2">{item.placeOfBirth}</td>
          <td className="px-6 py-2">{item.phone}</td>
        </tr>
      )),
    [collectors]
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
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Biển số
              </th>
              <th scope="col" className="px-6 py-3">
                Tải trọng
              </th>
              <th scope="col" className="px-6 py-3">
                Nhiên liệu
              </th>
              <th scope="col" className="px-6 py-3">
                Nơi sản xuất
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {data_vehicle.map((item, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800 border-8">
                <td className="px-6 py-2">{index}</td>
                <td className="px-6 py-2">{item.license_plates}</td>
                <td className="px-6 py-2">{item.capacity}</td>
                <td className="px-6 py-2">{item.fuel}</td>
                <td className="px-6 py-2">{item.make_by}</td>
              </tr>
            ))}
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
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Địa chỉ
              </th>
              <th scope="col" className="px-6 py-3">
                Sức Chứa
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {data_MCPs.map((item, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800 border-8">
                <td className="px-6 py-2">{index}</td>
                <td className="px-6 py-2">{item.location}</td>
                <td className="px-6 py-2">{item.MCPs_capacity}</td>
              </tr>
            ))}
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
            className="font-bold w-1/2"
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                className="font-bold"
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
