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
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">1</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">2</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">3</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">4</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">5</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">6</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
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
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">1</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">2</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">3</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">4</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">5</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">6</td>
              <td className="px-6 py-2">John</td>
              <td className="px-6 py-2">Nam</td>
              <td className="px-6 py-2">19/2/1973</td>
              <td className="px-6 py-2">D.10</td>
              <td className="px-6 py-2">0123456789</td>
            </tr>
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
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">1</td>
              <td className="px-6 py-2">Hino FC9JETC</td>
              <td className="px-6 py-2">5000</td>
              <td className="px-6 py-2">50</td>
              <td className="px-6 py-2">Nhật Bản</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">2</td>
              <td className="px-6 py-2">Hino FC9JETC</td>
              <td className="px-6 py-2">5000</td>
              <td className="px-6 py-2">50</td>
              <td className="px-6 py-2">Nhật Bản</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">3</td>
              <td className="px-6 py-2">Hino FC9JETC</td>
              <td className="px-6 py-2">5000</td>
              <td className="px-6 py-2">50</td>
              <td className="px-6 py-2">Nhật Bản</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">4</td>
              <td className="px-6 py-2">Hino FC9JETC</td>
              <td className="px-6 py-2">5000</td>
              <td className="px-6 py-2">50</td>
              <td className="px-6 py-2">Nhật Bản</td>
            </tr>
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
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">1</td>
              <td className="px-6 py-2">Quận Bình Thạnh</td>
              <td className="px-6 py-2">1000</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">2</td>
              <td className="px-6 py-2">Quận 10</td>
              <td className="px-6 py-2">1500</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">3</td>
              <td className="px-6 py-2">Bến xe Q8</td>
              <td className="px-6 py-2">2000</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 border-8" >
              <td className="px-6 py-2">4</td>
              <td className="px-6 py-2">Bến xe Miền Tây</td>
              <td className="px-6 py-2">2500</td>
            </tr>
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
