import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Radio,
  Typography,
} from "@material-tailwind/react";
import React from "react";

export const AssignPaneComponent: IComponent = () => {
  const [open_assign, setOpen_assign] = React.useState(false);
  const handleOpen_assign = () => setOpen_assign((cur_assign) => !cur_assign);
  const [open_collector, setOpen_collector] = React.useState(false);
  const handleOpen_collector = () =>
    setOpen_collector((cur_collector) => !cur_collector);
  const [open_janitor, setOpen_janitor] = React.useState(false);
  const handleOpen_janitor = () =>
    setOpen_janitor((cur_janitor) => !cur_janitor);
  const [open_vehicle, setOpen_vehicle] = React.useState(false);
  const handleOpen_vehicle = () =>
    setOpen_vehicle((cur_vehicle) => !cur_vehicle);
  const [open_MCPs, setOpen_MCPs] = React.useState(false);
  const handleOpen_MCPs = () => setOpen_MCPs((cur_MCPs) => !cur_MCPs);

  const data_janitor: {
    name: string;
    gender: string;
    day_of_birth: string;
    area: string;
    status: string;
  }[] = [
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận",
    },
  ];

  const data_collector: {
    name: string;
    gender: string;
    day_of_birth: string;
    area: string;
    status: string;
  }[] = [
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận",
    },
    {
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận",
    },
  ];

  const data_vehicle: {
    license_plates: string;
    capacity: string;
    fuel: string;
    status: string;
  }[] = [
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Bận",
    },
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Bận",
    },
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Bận",
    },
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Rảnh",
    },
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Rảnh",
    },
    {
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Rảnh",
    },
  ];

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
    {
      location: "Quận Tân Bình",
      MCPs_capacity: "2000",
      status: "Rỗng",
    },
    {
      location: "Quận Bình Thạnh",
      MCPs_capacity: "2500",
      status: "Nửa",
    },
    {
      location: "Quận 7",
      MCPs_capacity: "3000",
      status: "Đầy",
    },
  ];

  const data_assign: {
    janitor: string;
    collector: string;
    vehicle: string;
    route: string;
    create_by: string;
    day: string;
    status: string;
  }[] = [
    {
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      create_by: "Mike",
      day: "28 / 2 / 2023",
      status: "Đã hoàn thành",
    },
    {
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      create_by: "Mike",
      day: "28 / 2 / 2023",
      status: "Đã hoàn thành",
    },
    {
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      create_by: "Mike",
      day: "28 / 2 / 2023",
      status: "Đã hoàn thành",
    },
    {
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      create_by: "Mike",
      day: "28 / 2 / 2023",
      status: "Đã hoàn thành",
    },
    {
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      create_by: "Mike",
      day: "28 / 2 / 2023",
      status: "Đang tiến hành",
    },
  ];

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-1 col-end-3 ">
        <div className="w-72">
          <Input
            color="green"
            label="Tìm kiếm"
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          />
        </div>
      </div>

      <div className="col-end-7 col-span-1 ">
        <React.Fragment>
          <Button
            color="green"
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
                color="light-green"
                className="mb-4 grid h-28 place-items-center"
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
                <div className="w-72 gap-4 flex flex-col">
                  <Input
                    variant="static"
                    label="ID"
                    color="green"
                    placeholder=""
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  />
                </div>

                <div className="w-72 gap-4 flex justify-between">
                  <div>
                    <Input
                      variant="static"
                      label="Collector"
                      color="green"
                      placeholder=""
                      nonce={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={handleOpen_collector}
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
                      handler={handleOpen_collector}
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
                                Giới tính
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Ngày sinh
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Khu vực
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
                            {data_collector.map((item, index) => (
                              <tr
                                key={index}
                                className="bg-white dark:bg-gray-800 border-8"
                              >
                                <td className="px-6 py-2">{index}</td>
                                <td className="px-6 py-2">{item.name}</td>
                                <td className="px-6 py-2">{item.gender}</td>
                                <td className="px-6 py-2">
                                  {item.day_of_birth}
                                </td>
                                <td className="px-6 py-2">{item.area}</td>
                                <td className="px-6 py-2 text-center">
                                  {item.status == "Rảnh" ? (
                                    <Chip color="green" value={item.status} />
                                  ) : (
                                    <Chip color="red" value={item.status} />
                                  )}
                                </td>
                                <td className="px-6 py-2">
                                  {item.status == "Rảnh" ? (
                                    <Radio
                                      id={index.toString()}
                                      name="color"
                                      color="green"
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  ) : (
                                    <Radio
                                      id={index.toString()}
                                      name="color"
                                      color="green"
                                      disabled
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
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
                          onClick={handleOpen_collector}
                          className="mr-1 text-gray-900"
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span>Hủy bỏ</span>
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen_collector}
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

                <div className="w-72 gap-4 flex justify-between">
                  <div>
                    <Input
                      variant="static"
                      label="Janitor"
                      color="green"
                      placeholder=""
                      nonce={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    />
                  </div>
                  <div>
                    <button
                      onClick={handleOpen_janitor}
                      type="button"
                      className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                      handler={handleOpen_janitor}
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
                                Giới tính
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Ngày sinh
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Khu vực
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
                            {data_janitor.map((item, index) => (
                              <tr
                                key={index}
                                className="bg-white dark:bg-gray-800 border-8"
                              >
                                <td className="px-6 py-2">{index}</td>
                                <td className="px-6 py-2">{item.name}</td>
                                <td className="px-6 py-2">{item.gender}</td>
                                <td className="px-6 py-2">
                                  {item.day_of_birth}
                                </td>
                                <td className="px-6 py-2">{item.area}</td>
                                <td className="px-6 py-2 text-center">
                                  {item.status == "Rảnh" ? (
                                    <Chip color="green" value={item.status} />
                                  ) : (
                                    <Chip color="red" value={item.status} />
                                  )}
                                </td>
                                <td className="px-6 py-2">
                                  {item.status == "Rảnh" ? (
                                    <Radio
                                      id={index.toString()}
                                      name="color"
                                      color="green"
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  ) : (
                                    <Radio
                                      id={index.toString()}
                                      name="color"
                                      color="green"
                                      disabled
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
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
                          onClick={handleOpen_janitor}
                          className="mr-1 text-gray-900"
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span>Hủy bỏ</span>
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen_janitor}
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

                <div className="w-72 gap-4 flex justify-between">
                  <div>
                    <Input
                      variant="static"
                      label="Phương tiện"
                      color="green"
                      placeholder=""
                      nonce={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    />
                  </div>
                  <div>
                    <button
                      onClick={handleOpen_vehicle}
                      type="button"
                      className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                      handler={handleOpen_vehicle}
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
                      >
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
                                Trạng thái
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Chọn
                              </th>
                            </tr>
                          </thead>
                          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                            {data_vehicle.map((item, index) => (
                              <tr
                                key={index}
                                className="bg-white dark:bg-gray-800 border-8"
                              >
                                <td className="px-6 py-2">
                                  {index.toString()}
                                </td>
                                <td className="px-6 py-2">
                                  {item.license_plates}
                                </td>
                                <td className="px-6 py-2">{item.capacity}</td>
                                <td className="px-6 py-2">{item.fuel}</td>
                                <td className="px-6 py-2 text-center">
                                  {item.status == "Rảnh" ? (
                                    <Chip color="green" value={item.status} />
                                  ) : (
                                    <Chip color="red" value={item.status} />
                                  )}
                                </td>
                                <td className="px-6 py-2">
                                  {item.status == "Rảnh" ? (
                                    <Radio
                                      id={index.toString()}
                                      name="color"
                                      color="green"
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  ) : (
                                    <Radio
                                      id={index.toString()}
                                      name="color"
                                      color="green"
                                      disabled
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
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
                          onClick={handleOpen_vehicle}
                          className="mr-1 text-gray-900 "
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span>Hủy bỏ</span>
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen_vehicle}
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

                <div className="w-72 gap-4 flex justify-between">
                  <div>
                    <Input
                      variant="static"
                      label="MCPs"
                      color="green"
                      placeholder=""
                      nonce={undefined}
                      onResize={undefined}
                      onResizeCapture={undefined}
                    />
                  </div>
                  <div>
                    <button
                      onClick={handleOpen_MCPs}
                      type="button"
                      className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                      handler={handleOpen_MCPs}
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
                                Sức chứa
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
                            {data_MCPs.map((item, index) => (
                              <tr
                                key={index}
                                className="bg-white dark:bg-gray-800 border-8"
                              >
                                <td className="px-6 py-2">
                                  {index.toString()}
                                </td>
                                <td className="px-6 py-2">{item.location}</td>
                                <td className="px-6 py-2">
                                  {item.MCPs_capacity}
                                </td>
                                <td className="px-6 py-2 text-center">
                                  {item.status == "Rỗng" ? (
                                    <Chip color="green" value={item.status} />
                                  ) : item.status == "Nửa" ? (
                                    <Chip color="yellow" value={item.status} />
                                  ) : (
                                    <Chip color="red" value={item.status} />
                                  )}
                                </td>
                                <td className="px-6 py-2">
                                  {item.status == "Rỗng" ? (
                                    <Checkbox
                                      color="green"
                                      disabled
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  ) : (
                                    <Checkbox
                                      color="green"
                                      nonce={undefined}
                                      onResize={undefined}
                                      onResizeCapture={undefined}
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
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
                          onClick={handleOpen_MCPs}
                          className="mr-1 text-gray-900 "
                          nonce={undefined}
                          onResize={undefined}
                          onResizeCapture={undefined}
                        >
                          <span>Hủy bỏ</span>
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen_MCPs}
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

                <div>
                  <Input
                    variant="static"
                    label="Chú thích"
                    color="green"
                    placeholder=""
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
                    color="green"
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
                Tạo bởi
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày tạo
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody className=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            {data_assign.map((item, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800 border-8">
                <td className="px-6 py-2">{index}</td>
                <td className="px-6 py-2">{item.janitor}</td>
                <td className="px-6 py-2">{item.collector}</td>
                <td className="px-6 py-2">{item.vehicle}</td>
                <td className="px-6 py-2">{item.route}</td>
                <td className="px-6 py-2">{item.create_by}</td>
                <td className="px-6 py-2">{item.day}</td>
                <td className="text-center px-6 py-2">
                  {item.status == "Đã hoàn thành" ? (
                    <Chip color="green" value={item.status} />
                  ) : (
                    <Chip color="lime" value={item.status} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
