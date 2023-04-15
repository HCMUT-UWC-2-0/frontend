import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

//TODO: follow ref here: https://www.material-tailwind.com/docs/react/tabs

export const GeneralPaneComponent: IComponent = () => {

  const data_janitor: {
    ID: int;
    name: string;
    gender: string;
    day_of_birth: string;
    area: string;
    phone: string
  }[] = [
    {
      ID: "1",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    },
    {
      ID: "2",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    },
    {
      ID: "3",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    },
    {
      ID: "4",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    },
    {
      ID: "5",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    },
    {
      ID: "6",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    }
  ];

  const data_collector: {
    ID: int;
    name: string;
    gender: string;
    day_of_birth: string;
    area: string;
    phone: string
  }[] = [
    {
      ID: "1",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    },
    {
      ID: "2",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    },
    {
      ID: "3",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    },
    {
      ID: "4",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    },
    {
      ID: "5",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    },
    {
      ID: "6",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      phone: "0123456789"
    }
  ];

  const data_vehicle: {
    ID: int;
    license_plates: string;
    capacity: string;
    fuel: string;
    make_by: string
  }[] = [
    {
      ID: "1",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản"
    },
    {
      ID: "2",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản"
    },
    {
      ID: "3",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản"
    },
    {
      ID: "4",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản"
    },
    {
      ID: "5",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản"
    },
    {
      ID: "6",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      make_by: "Nhật Bản"
    }
  ];

  const data_MCPs: {
    ID: int;
    location: string;
    MCPs_capacity: string;
  }[] = [
    {
      ID: "1",
      location: "Quận Bình Thạnh",
      MCPs_capacity: "1000",
    },
    {
      ID: "2",
      location: "Quận 10",
      MCPs_capacity: "1500",
    },
    {
      ID: "3",
      location: "Quận Tân Bình",
      MCPs_capacity: "2000",
    },
    {
      ID: "4",
      location: "Quận Bình Thạnh",
      MCPs_capacity: "2500",
    },
    {
      ID: "5",
      location: "Quận 7",
      MCPs_capacity: "3000",
    }
  ];


  const data = [
    {
      label: "Janitors",
      value: "janitors",
      children: 
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
                <td className="px-6 py-2">{item.ID}</td>
                <td className="px-6 py-2">{item.name}</td>
                <td className="px-6 py-2">{item.gender}</td>
                <td className="px-6 py-2">{item.day_of_birth}</td>
                <td className="px-6 py-2">{item.area}</td>
                <td className="px-6 py-2">{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
    },
    {
      label: "Collectors",
      value: "collectors",
      children: 
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
                <td className="px-6 py-2">{item.ID}</td>
                <td className="px-6 py-2">{item.name}</td>
                <td className="px-6 py-2">{item.gender}</td>
                <td className="px-6 py-2">{item.day_of_birth}</td>
                <td className="px-6 py-2">{item.area}</td>
                <td className="px-6 py-2">{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
    },
    {
      label: "Phương tiện",
      value: "vehicle",
      children: 
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
                <td className="px-6 py-2">{item.ID}</td>
                <td className="px-6 py-2">{item.license_plates}</td>
                <td className="px-6 py-2">{item.capacity}</td>
                <td className="px-6 py-2">{item.fuel}</td>
                <td className="px-6 py-2">{item.make_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
    },
    {
      label: "MCPs",
      value: "MCPs",
      children: 
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
                <td className="px-6 py-2">{item.ID}</td>
                <td className="px-6 py-2">{item.location}</td>
                <td className="px-6 py-2">{item.MCPs_capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
