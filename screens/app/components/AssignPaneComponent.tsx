import { createTaskApi } from "@apis/tasks";
import { LoadableButton } from "@components/LoadableButton";
import { LoadingSVG } from "@components/SVGIcons/LoadingSVG";
import { btn } from "@configs/styles";
import { ToastTemplate } from "@configs/toast";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Radio,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useAccountStore } from "@states/account";
import { useCollectorStore } from "@states/collectors";
import { useJanitorStore } from "@states/janitors";
import { useMCPStore } from "@states/mcps";
import { useRouteStore } from "@states/routes";
import { useCurrentTasksStore } from "@states/tasks";
import { useVehicleStore } from "@states/vehicles";
import { cx, parteDateTimeString } from "@utils/tools";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { StatusComponent } from "./AlertPaneComponent";

const FuelComponent: IComponent<{
  fuel: number;
}> = ({ fuel }) => {
  let statusType = "bg-teal-600";
  if (fuel < 0.8) {
    statusType = "bg-orange-600";
  }
  if (fuel < 0.5) {
    statusType = "bg-red-600";
  }
  return <Chip className={statusType} value={(fuel * 100).toString() + "%"} />;
};

export const AssignPaneComponent: IComponent = () => {
  const [openAssign, setOpenAssign] = useState(false);

  const [openCollector, setOpenCollector] = useState(false);
  const handleOpenCollector = () => setOpenCollector((prev) => !prev);

  const [openJanitor, setOpenJanitor] = useState(false);
  const handleOpenJanitor = () => setOpenJanitor((prev) => !prev);

  const [openVehicle, setOpenVehicle] = useState(false);
  const handleOpenVehicle = () => setOpenVehicle((prev) => !prev);

  const [openMCP, setOpenMCPs] = useState(false);
  const handleOpenMCPs = () => setOpenMCPs((prev) => !prev);

  const [selectedJanitor, setSelectedJanitor] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const [selectedCollector, setSelectedCollector] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const [selectedVehicle, setSelectedVehicle] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const [selectedMCP, setSelectedMCP] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const [selectedRoute, setSelectedRoute] = useState<number>(-1);

  const [selectedDate, setSelectedDate] = useState<string>("");

  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleOpenAssign = () => {
    setOpenAssign((cur_assign) => !cur_assign);
    setSelectedCollector(null);
    setSelectedJanitor(null);
    setSelectedVehicle(null);
    setSelectedMCP(null);
  };

  const [loadingRegisterTask, setLoadingRegisterTask] = useState(false);

  const handleRegisterTask = async () => {
    if (
      selectedJanitor === null ||
      selectedCollector === null ||
      selectedVehicle === null ||
      selectedMCP === null ||
      selectedRoute === -1 ||
      selectedDate === "" ||
      selectedTime === ""
    ) {
      return;
    }
    setLoadingRegisterTask(true);
    const data = {
      startTime: selectedDate + " " + selectedTime,
      janitorId: selectedJanitor?.id,
      collectorId: selectedCollector?.id,
      vehicleId: selectedVehicle?.id,
      mcpId: selectedMCP?.id,
      routeId: selectedRoute,
    };

    try {
      const res = await createTaskApi(data, accessToken);
      if (res.status !== 200) {
        ToastTemplate.unknown();
      } else if (res.status === 200) {
        ToastTemplate.createTaskSuccess();
        handleOpenAssign();
        fetchData();
      }
    } catch (e) {
      ToastTemplate.unknown();
    }
    setLoadingRegisterTask(false);
  };

  const { tasks, loading, fetchAllCurrentTasks } = useCurrentTasksStore();
  const { janitorStatuses, fetchJanitorStatus } = useJanitorStore();
  const { collectorStatuses, fetchCollectorStatuses } = useCollectorStore();
  const { vehicleStatuses, fetchVehicleStatus } = useVehicleStore();
  const { mcpStatuses, fetchMCPStatus } = useMCPStore();
  const { routes, fetchRoutes } = useRouteStore();
  const { accessToken } = useAccountStore();

  const fetchData = useCallback(async () => {
    await fetchAllCurrentTasks(accessToken);
    await fetchJanitorStatus(accessToken);
    await fetchCollectorStatuses(accessToken);
    await fetchVehicleStatus(accessToken);
    await fetchMCPStatus(accessToken);
    await fetchRoutes(accessToken);
  }, [
    fetchAllCurrentTasks,
    fetchJanitorStatus,
    fetchCollectorStatuses,
    fetchVehicleStatus,
    fetchMCPStatus,
    fetchRoutes,
    accessToken,
  ]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderHeader = useMemo(
    () => (
      <tr>
        <th scope="col" className="px-6 py-3">
          ID nhân viên
        </th>
        <th scope="col" className="px-6 py-3">
          Tên
        </th>
        <th scope="col" className="px-6 py-3">
          Số điện thoại
        </th>
        <th scope="col" className="px-6 py-3">
          Giới tính
        </th>
        <th scope="col" className="px-6 py-3">
          Trạng thái
        </th>
        <th scope="col" className="px-6 py-3">
          Chọn
        </th>
      </tr>
    ),
    []
  );

  const renderJanitors = useMemo(
    () =>
      janitorStatuses.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{item.workerID}</td>
          <td className="px-6 py-2">{item.workerName}</td>
          <td className="px-6 py-2">{item.phone}</td>
          <td className="px-6 py-2">{item.gender}</td>
          <td className="px-6 py-2 text-center">
            {item.status === "AVAILABLE" ? (
              <Chip className="bg-teal-600" value={item.status} />
            ) : (
              <Chip color="red" value={item.status} />
            )}
          </td>
          <td className="px-6 py-2">
            {item.status === "AVAILABLE" ? (
              <Radio
                id={index.toString()}
                name="color"
                color="teal"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onClick={() =>
                  setSelectedJanitor({
                    id: item.workerID,
                    name: item.workerName,
                  })
                }
              />
            ) : (
              <></>
            )}
          </td>
        </tr>
      )),
    [janitorStatuses]
  );

  const renderCollectors = useMemo(
    () =>
      collectorStatuses.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{item.workerID}</td>
          <td className="px-6 py-2">{item.workerName}</td>
          <td className="px-6 py-2">{item.phone}</td>
          <td className="px-6 py-2">{item.gender}</td>
          <td className="px-6 py-2 text-center">
            {item.status === "AVAILABLE" ? (
              <Chip className="bg-teal-600" value={item.status} />
            ) : (
              <Chip color="red" value={item.status} />
            )}
          </td>
          <td className="px-6 py-2">
            {item.status === "AVAILABLE" ? (
              <Radio
                id={index.toString()}
                name="color"
                color="teal"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onClick={() =>
                  setSelectedCollector({
                    id: item.workerID,
                    name: item.workerName,
                  })
                }
              />
            ) : (
              <></>
            )}
          </td>
        </tr>
      )),
    [collectorStatuses]
  );

  const renderVehicles = useMemo(
    () =>
      vehicleStatuses.map((item, index) => (
        <tr key={index} className="bg-white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{item.vehicleID}</td>
          <td className="px-6 py-2">{item.vehicleName}</td>
          <td className="px-6 py-2">{item.capacity}</td>
          <td className="px-6 py-2 text-center">
            {item.status == "AVAILABLE" ? (
              <Chip className="bg-teal-600" value={item.status} />
            ) : (
              <Chip color="red" value={item.status} />
            )}
          </td>
          <td className="px-6 py-2">
            <FuelComponent fuel={item.currentFuel} />
          </td>
          <td className="px-6 py-2">{parteDateTimeString(item.updatedAt)}</td>
          <td className="px-6 py-2">
            {item.status === "AVAILABLE" ? (
              <Radio
                id={index.toString()}
                name="color"
                color="teal"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onClick={() =>
                  setSelectedVehicle({
                    name: item.vehicleName,
                    id: item.vehicleID,
                  })
                }
              />
            ) : (
              <></>
            )}
          </td>
        </tr>
      )),
    [vehicleStatuses]
  );

  const renderMCPs = useMemo(
    () =>
      mcpStatuses.map((item, index) => (
        <tr key={index} className="bg -white dark:bg-gray-800 border-8">
          <td className="px-6 py-2">{item.mcpID}</td>
          <td className="px-6 py-2">{item.location}</td>
          <td className="px-6 py-2">
            {" "}
            <StatusComponent levelFill={item.currentLevelFill} />
          </td>
          <td className="px-6 py-2">
            <Radio
              id={index.toString()}
              name="color"
              color="teal"
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onClick={() =>
                setSelectedMCP({
                  id: item.mcpID,
                  name: item.location,
                })
              }
            />
          </td>
        </tr>
      )),
    [mcpStatuses]
  );

  const renderCurrentTasks = useMemo(
    () =>
      !loading || tasks != null ? (
        tasks?.map((item, index) => (
          <tr key={index} className="bg-white dark:bg-gray-800 border-8">
            <td className="px-6 py-2 text-center">{index}</td>
            <td className="px-6 py-2 text-center">{item.janitor}</td>
            <td className="px-6 py-2 text-center">{item.collector}</td>
            <td className="px-6 py-2 text-center">{item.vehicle}</td>
            <td className="px-6 py-2 text-center">{item.route}</td>
            <td className="px-6 py-2 text-center">{item.startTime}</td>
            <td className="px-6 py-2 text-center">{item.endTime}</td>
            <td className="text-center px-6 py-2">
              {item.status == "OPENED" ? (
                <Chip className="bg-teal-600" value={item.status} />
              ) : (
                <Chip className="bg-indigo-600" value={item.status} />
              )}
            </td>
          </tr>
        ))
      ) : (
        <div className="xyz-in w-screen h-screen flex justify-center items-center gap-3">
          <LoadingSVG width={32} height={32} />
          <span className="animate-pulse">Loading, please wait...</span>
        </div>
      ),
    [tasks, loading]
  );

  return (
    <div className="">
      <div className="mb-8 flex justify-end">
        <React.Fragment>
          <Button
            className="bg-teal-600"
            onClick={handleOpenAssign}
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Đăng ký
          </Button>
          <Dialog
            size="xs"
            open={openAssign}
            handler={handleOpenAssign}
            className="bg-transparent shadow-none"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <Card
              className="mx-auto w-full max-w-[24rem]"
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <CardHeader
                variant="gradient"
                className="mb-4 grid h-28 place-items-center bg-teal-600"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                <Typography variant="h3" color="white">
                  Đăng ký công việc
                </Typography>
              </CardHeader>
              <CardBody
                className="flex flex-col gap-4"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                <div className="w-full gap-2 flex justify-between">
                  <div className="text-lg">
                    <span className="font-bold">Janitor:</span>{" "}
                    <span className="">{selectedJanitor?.name}</span>
                  </div>
                  <div>
                    <button
                      onClick={handleOpenJanitor}
                      type="button"
                      className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </button>
                    <Dialog
                      open={openJanitor}
                      handler={handleOpenJanitor}
                      size="xl"
                      nonce={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    >
                      <DialogHeader
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                      >
                        Hãy chọn Janitor
                      </DialogHeader>
                      <DialogBody
                        divider
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        className="h-[70vh] overflow-y-scroll"
                      >
                        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            {renderHeader}
                          </thead>
                          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                            {renderJanitors}
                          </tbody>
                        </table>
                      </DialogBody>
                      <DialogFooter
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                      >
                        <Button
                          variant="gradient"
                          color="teal"
                          onClick={handleOpenJanitor}
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span>Xác nhận</span>
                        </Button>
                      </DialogFooter>
                    </Dialog>
                  </div>
                </div>

                <div className="w-full gap-2 flex justify-between items-center">
                  <div className="text-lg">
                    <span className="font-bold">Collector:</span>{" "}
                    <span className="">{selectedCollector?.name}</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
                      onClick={handleOpenCollector}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </button>
                    <Dialog
                      open={openCollector}
                      handler={handleOpenCollector}
                      size="xl"
                      nonce={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    >
                      <DialogHeader
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                      >
                        Hãy chọn Collector
                      </DialogHeader>
                      <DialogBody
                        divider
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        className="h-[70vh] overflow-y-scroll"
                      >
                        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            {renderHeader}
                          </thead>
                          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                            {renderCollectors}
                          </tbody>
                        </table>
                      </DialogBody>
                      <DialogFooter
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                      >
                        <Button
                          variant="gradient"
                          color="teal"
                          onClick={handleOpenCollector}
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span>Xác nhận</span>
                        </Button>
                      </DialogFooter>
                    </Dialog>
                  </div>
                </div>
                <div className="w-full gap-2 flex justify-between">
                  <div className="text-lg">
                    <span className="font-bold">Phương tiện:</span>{" "}
                    <span className="">{selectedVehicle?.name}</span>
                  </div>
                  <div>
                    <button
                      onClick={handleOpenVehicle}
                      type="button"
                      className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </button>
                    <Dialog
                      open={openVehicle}
                      handler={handleOpenVehicle}
                      size="xl"
                      nonce={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    >
                      <DialogHeader
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                      >
                        Hãy chọn phương tiện
                      </DialogHeader>
                      <DialogBody
                        divider
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        className="h-[70vh] overflow-y-scroll"
                      >
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
                                Tải trọng (Tấn)
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Trạng thái
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Nhiên liệu hiện tại (Lít)
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Lần cuối cập nhật
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Chọn
                              </th>
                            </tr>
                          </thead>
                          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                            {renderVehicles}
                          </tbody>
                        </table>
                      </DialogBody>
                      <DialogFooter
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                      >
                        <Button
                          variant="gradient"
                          color="teal"
                          onClick={handleOpenVehicle}
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span>Xác nhận</span>
                        </Button>
                      </DialogFooter>
                    </Dialog>
                  </div>
                </div>

                <div className="w-full gap-2 flex justify-between">
                  <div className="text-lg">
                    <span className="font-bold">MCP: </span>{" "}
                    <span className="">{selectedMCP?.name}</span>
                  </div>
                  <div>
                    <button
                      onClick={handleOpenMCPs}
                      type="button"
                      className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="white"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </button>
                    <Dialog
                      open={openMCP}
                      handler={handleOpenMCPs}
                      size="xl"
                      nonce={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    >
                      <DialogHeader
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                      >
                        Hãy chọn MCPs
                      </DialogHeader>
                      <DialogBody
                        divider
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                        className="h-[70vh] overflow-y-scroll"
                      >
                        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                          <thead className=" text-gray-900 border-8 bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <th scope="col" className="px-6 py-3">
                                ID
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Địa điểm
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Trạng thái
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Chọn
                              </th>
                            </tr>
                          </thead>
                          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                            {renderMCPs}
                          </tbody>
                        </table>
                      </DialogBody>
                      <DialogFooter
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                      >
                        <Button
                          variant="gradient"
                          color="teal"
                          onClick={handleOpenMCPs}
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span>Xác nhận</span>
                        </Button>
                      </DialogFooter>
                    </Dialog>
                  </div>
                </div>

                <div className="gap-2">
                  <Select
                    variant="static"
                    color="teal"
                    label="Chọn tuyến đường"
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onChange={(value) =>
                      value && setSelectedRoute(Number.parseInt(value))
                    }
                  >
                    {routes.map((route, index) => (
                      <Option key={index} value={index.toString()}>
                        {route.startLocation} - {route.endLocation}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="gap-2">
                  <Input
                    color="teal"
                    label="Chọn ngày"
                    type="date"
                    variant="static"
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onChange={(event) =>
                      event?.target?.value &&
                      setSelectedDate(event.target.value)
                    }
                  />
                </div>

                <div className="gap-2">
                  <Input
                    color="teal"
                    label="Chọn giờ"
                    type="time"
                    variant="static"
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onChange={(event) =>
                      event?.target?.value &&
                      setSelectedTime(event.target.value)
                    }
                  />
                </div>
              </CardBody>
              <CardFooter
                className="pt-0"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                <div className="items-center flex flex-col">
                  <LoadableButton
                    loading={loadingRegisterTask}
                    onClick={handleRegisterTask}
                    color="teal"
                    size="md"
                    className={cx(btn, "uppercase")}
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    Đăng ký
                  </LoadableButton>
                </div>
              </CardFooter>
            </Card>
          </Dialog>
        </React.Fragment>
      </div>

      <div className="col-start-1 col-end-7 bg-gray-200 relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
          <thead className=" text-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Janitor
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Collector
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Phương tiện
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Lộ trình
              </th>
              <th scope="col" className="px-6 py-3">
                Thời gian bắt đầu
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Thời gian kết thúc
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {renderCurrentTasks}
          </tbody>
        </table>
      </div>
    </div>
  );
};
