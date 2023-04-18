import { Chip, Input } from "@material-tailwind/react";
import { useMemo } from "react";

export const AlertPaneComponent: IComponent = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data_MCPs: {
    location: string;
    time: string;
    status: string;
  }[] = [
    {
      location: "Quận Bình Thạnh",
      time: "9h 1/3/2022",
      status: "Nửa",
    },
    {
      location: "Quận 10",
      time: "9h 1/3/2022",
      status: "Rỗng",
    },
    {
      location: "Quận Tân Bình",
      time: "9h 1/3/2022",
      status: "Rỗng",
    },
    {
      location: "Quận Bình Thạnh",
      time: "9h 1/3/2022",
      status: "Nửa",
    },
    {
      location: "Quận 7",
      time: "9h 1/3/2022",
      status: "Đầy",
    },
  ];
  const renderMCPs = useMemo(
    () =>
      data_MCPs.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{index}</td>
          <td className="px-6 py-2">{item.location}</td>
          <td className="px-6 py-2">{item.time}</td>
          <td className="px-6 py-2 text-center">
            {item.status == "Rỗng" ? (
              <Chip className="bg-teal-600" value={item.status} />
            ) : item.status == "Nửa" ? (
              <Chip color="yellow" value={item.status} />
            ) : (
              <Chip color="red" value={item.status} />
            )}
          </td>
        </tr>
      )),
    [data_MCPs]
  );

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-1 col-end-3 gap-4">
        <div className="w-72">
          <Input
            color="teal"
            label="Tìm kiếm"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          />
        </div>
      </div>
      <div className="col-start-1 col-end-7 bg-gray-200 relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className=" text-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Địa chỉ MCPs
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian
              </th>
              <th scope="col" className="px-6 py-3">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {renderMCPs}
          </tbody>
        </table>
      </div>
    </div>
  );
};
