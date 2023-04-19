import { LoadingSVG } from "@components/SVGIcons/LoadingSVG";
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
import { useCurrentTasksStore } from "@states/tasks";
import { useVehicleStore } from "@states/vehicles";
import { parteDateTimeString } from "@utils/tools";
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
  const [open_assign, setOpenAssign] = React.useState(false);
  const handleOpen_assign = () => {
    setOpenAssign((cur_assign) => !cur_assign);
    setSelectedCollector("");
    setSelectedJanitor("");
    setSelectedVehicle("");
    setSelectedMCPs("");
  };
  const [open_collector, setOpenCollector] = React.useState(false);

  const handleOpenCollector = () =>
    setOpenCollector((cur_collector) => !cur_collector);
  const [open_janitor, setOpenJanitor] = React.useState(false);
  const handleOpenJanitor = () => setOpenJanitor((cur_janitor) => !cur_janitor);
  const [open_vehicle, setOpenVehicle] = React.useState(false);
  const handleOpenVehicle = () => setOpenVehicle((cur_vehicle) => !cur_vehicle);
  const [open_MCPs, setOpenMCPs] = React.useState(false);
  const handleOpenMCPs = () => setOpenMCPs((cur_MCPs) => !cur_MCPs);

  const [selected_collector, setSelectedCollector] = useState<string>("");
  const handleCollector = (name: string) => {
    setSelectedCollector(name);
  };
  const handleClose_collector = () => {
    setSelectedCollector("");
  };
  const [selected_janitor, setSelectedJanitor] = useState<string>("");
  const handleJanitor = (name: string) => {
    setSelectedJanitor(name);
  };
  const handleCloseJanitor = () => {
    setSelectedJanitor("");
  };
  const [selected_vehicle, setSelectedVehicle] = useState<string>("");
  const handleVehicle = (name: string) => {
    setSelectedVehicle(name);
  };
  const handleCloseVehicle = () => {
    setSelectedVehicle("");
  };
  const [selected_MCPs, setSelectedMCPs] = useState<string>("");
  const handleMCPs = (name: string) => {
    setSelectedMCPs(name);
  };
  const handleCloseMCPs = () => {
    setSelectedMCPs("");
  };

  const { tasks, loading, fetchAllCurrentTasks } = useCurrentTasksStore();
  const { janitorStatuses, fetchJanitorStatus } = useJanitorStore();
  const { collectorStatuses, fetchCollectorStatuses } = useCollectorStore();
  const { vehicleStatuses, fetchVehicleStatus } = useVehicleStore();
  const { mcpStatuses, fetchMCPStatus } = useMCPStore();
  const { accessToken } = useAccountStore();

  const fetchData = useCallback(async () => {
    await fetchAllCurrentTasks(accessToken);
    await fetchJanitorStatus(accessToken);
    await fetchCollectorStatuses(accessToken);
    await fetchVehicleStatus(accessToken);
    await fetchMCPStatus(accessToken);
  }, [fetchAllCurrentTasks, fetchJanitorStatus, accessToken]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data_MCPs: {
    location: string;
    MCPs_capacity: string;
    status: string;
  }[] = [
    {
      location: "Quận Bình Thạnh",
      MCPs_capacity: "1000",
      status: "Rỗng",
    },
    {
      location: "Quận 10",
      MCPs_capacity: "1500",
      status: "Đầy",
    },
  ];

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
                onClick={() => handleJanitor(item.workerName)}
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
                onClick={() => handleJanitor(item.workerName)}
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
                onClick={() => handleVehicle(item.vehicleID)}
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
              onClick={() => handleMCPs(item.location)}
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
    [tasks]
  );

  return (
    <div className="">
      <div className="mb-8 flex justify-end">
        <React.Fragment>
          <Button
            className="bg-teal-600"
            onClick={handleOpen_assign}
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Đăng ký
          </Button>
          <Dialog
            size="xs"
            open={open_assign}
            handler={handleOpen_assign}
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
                <div className="w-72 gap-2 flex justify-between">
                  <div className="text-lg">
                    <span className="font-bold">Janitor:</span>{" "}
                    <span className="">{selected_janitor}</span>
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
                      open={open_janitor}
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
                          variant="text"
                          onClick={handleOpenJanitor}
                          className="mr-1 text-gray-900"
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span onClick={() => handleCloseJanitor()}>
                            Hủy bỏ
                          </span>
                        </Button>
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

                <div className="w-72 gap-2 flex justify-between items-center">
                  <div className="text-lg">
                    <span className="font-bold">Collector:</span>{" "}
                    <span className="">{selected_collector}</span>
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
                      open={open_collector}
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
                          variant="text"
                          onClick={handleOpenCollector}
                          className="mr-1 text-gray-900"
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span onClick={() => handleClose_collector()}>
                            Hủy bỏ
                          </span>
                        </Button>
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
                <div className="w-72 gap-2 flex justify-between">
                  <div className="text-lg">
                    <span className="font-bold">Phương tiện:</span>{" "}
                    <span className="">{selected_vehicle}</span>
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
                      open={open_vehicle}
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
                          variant="text"
                          onClick={handleOpenVehicle}
                          className="mr-1 text-gray-900 "
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span onClick={() => handleCloseVehicle()}>
                            Hủy bỏ
                          </span>
                        </Button>
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

                <div className="w-72 gap-2 flex justify-between">
                  <div className="text-lg">
                    <span className="font-bold">MCP: </span>{" "}
                    <span className="">{selected_MCPs}</span>
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
                      open={open_MCPs}
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
                          variant="text"
                          onClick={handleOpenMCPs}
                          className="mr-1 text-gray-900 "
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span onClick={() => handleCloseMCPs()}>Hủy bỏ</span>
                        </Button>
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
                  >
                    <Option>1</Option>
                    <Option>2</Option>
                    <Option>3</Option>
                    <Option>4</Option>
                    <Option>5</Option>
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
                  <Button
                    variant="gradient"
                    color="teal"
                    onClick={handleOpen_assign}
                    className="haftWidth"
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    Đăng ký
                  </Button>
                  <Button
                    variant="text"
                    onClick={handleOpen_assign}
                    className="text-gray-900 haftWidth"
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    Hủy bỏ
                  </Button>
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
