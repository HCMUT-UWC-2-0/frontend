import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

export const GeneralPaneComponent: IComponent = () => {
  const data_janitor: {
    name: string;
    gender: string;
    day_of_birth: string;
    area: string;
    phone: string;
  }[] = [
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
  ];

  const data_collector: {
    name: string;
    gender: string;
    day_of_birth: string;
    area: string;
    phone: string;
  }[] = [
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789",
    },
  ];

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

  const data = [
    {
      label: "Janitors",
      value: "janitors",
      children: (
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
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
                Khu vực
              </th>
              <th scope="col" className="px-6 py-3">
                SĐT
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {data_janitor.map((item, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800 border-8">
                <td className="px-6 py-2">{index}</td>
                <td className="px-6 py-2">{item.name}</td>
                <td className="px-6 py-2">{item.gender}</td>
                <td className="px-6 py-2">{item.day_of_birth}</td>
                <td className="px-6 py-2">{item.area}</td>
                <td className="px-6 py-2">{item.phone}</td>
              </tr>
            ))}
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
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
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
                Khu vực
              </th>
              <th scope="col" className="px-6 py-3">
                SĐT
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {data_collector.map((item, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800 border-8">
                <td className="px-6 py-2">{index}</td>
                <td className="px-6 py-2">{item.name}</td>
                <td className="px-6 py-2">{item.gender}</td>
                <td className="px-6 py-2">{item.day_of_birth}</td>
                <td className="px-6 py-2">{item.area}</td>
                <td className="px-6 py-2">{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ),
    },
    {
      label: "Phương tiện",
      value: "vehicle",
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
      value: "MCPs",
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
