import { LoadingSVG } from "@components/SVGIcons/LoadingSVG";
import { Chip, Input } from "@material-tailwind/react";
import { useAccountStore } from "@states/account";
import { useMCPStore } from "@states/mcps";
import { useCallback, useEffect, useMemo } from "react";

export const StatusComponent: IComponent<{
  levelFill: number;
}> = ({ levelFill }) => {
  let statusType = "bg-teal-600";
  if (levelFill > 0.5) {
    statusType = "bg-orange-600";
  }
  if (levelFill > 0.8) {
    statusType = "bg-red-600";
  }
  return (
    <Chip className={statusType} value={(levelFill * 100).toString() + "%"} />
  );
};

export const AlertPaneComponent: IComponent = () => {
  const { fetchMCPStatus, loadingStatus, mcpStatuses } = useMCPStore();
  const { accessToken } = useAccountStore();
  const fetchData = useCallback(async () => {
    await fetchMCPStatus(accessToken);
  }, [fetchMCPStatus, accessToken]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderMCPs = useMemo(
    () =>
      !loadingStatus ? (
        mcpStatuses.map((item, index) => (
          <tr key={index} className="bg-white dark:bg-gray-800 border-8">
            <td className="px-6 py-2">{index}</td>
            <td className="px-6 py-2">{item.location}</td>
            <td className="px-6 py-2">
              {new Date(item.updatedAt).toLocaleString()}
            </td>
            <td className="px-6 py-2 text-center">
              <StatusComponent levelFill={item.currentLevelFill} />
            </td>
          </tr>
        ))
      ) : (
        <div className="xyz-in w-screen h-screen flex justify-center items-center gap-3">
          <LoadingSVG width={32} height={32} />
          <span className="animate-pulse">Loading, please wait...</span>
        </div>
      ),
    [mcpStatuses, loadingStatus]
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
