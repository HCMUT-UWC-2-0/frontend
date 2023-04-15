import {
  Button,
  Checkbox,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Radio,
  Typography,
} from "@material-tailwind/react";
import React from "react";

export const AssignPaneComponent: IComponent = () => {
  
  const [open_assign, setOpen_assign] = React.useState(false);
  const handleOpen_assign = () => setOpen_assign((cur_assign) => !cur_assign);
  const [open_collector, setOpen_collector] = React.useState(false);
  const handleOpen_collector = () => setOpen_collector((cur_collector) => !cur_collector);
  const [open_janitor, setOpen_janitor] = React.useState(false);
  const handleOpen_janitor = () => setOpen_janitor((cur_janitor) => !cur_janitor);
  const [open_vehicle, setOpen_vehicle] = React.useState(false);
  const handleOpen_vehicle = () => setOpen_vehicle((cur_vehicle) => !cur_vehicle);
  const [open_MCPs, setOpen_MCPs] = React.useState(false);
  const handleOpen_MCPs = () => setOpen_MCPs((cur_MCPs) => !cur_MCPs);

  const data_janitor: {
    ID: int;
    name: string;
    gender: string;
    day_of_birth: string;
    area: string;
    status: string
  }[] = [
    {
      ID: "1",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận"
    },
    {
      ID: "2",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh"
    },
    {
      ID: "3",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh"
    },
    {
      ID: "4",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh"
    },
    {
      ID: "5",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận"
    },
    {
      ID: "6",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận"
    }
  ];

  const data_collector: {
    ID: int;
    name: string;
    gender: string;
    day_of_birth: string;
    area: string;
    status: string;
  }[] = [
    {
      ID: "1",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh"
    },
    {
      ID: "2",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh"
    },
    {
      ID: "3",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận"
    },
    {
      ID: "4",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Rảnh"
    },
    {
      ID: "5",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận"
    },
    {
      ID: "6",
      name: "John",
      gender: "Nam",
      day_of_birth: "19/2/1973",
      area: "D.10",
      status: "Bận"
    }
  ];

  const data_vehicle: {
    ID: int;
    license_plates: string;
    capacity: string;
    fuel: string;
    status: string;
  }[] = [
    {
      ID: "1",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Bận"
    },
    {
      ID: "2",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Bận"
    },
    {
      ID: "3",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Bận"
    },
    {
      ID: "4",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Rảnh"
    },
    {
      ID: "5",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Rảnh"
    },
    {
      ID: "6",
      license_plates: "Hino FC9JETC",
      capacity: "5000",
      fuel: "50",
      status: "Rảnh"
    }
  ];

  const data_MCPs: {
    ID: int;
    location: string;
    MCPs_capacity: string;
    status: string;
  }[] = [
    {
      ID: "1",
      location: "Quận Bình Thạnh",
      MCPs_capacity: "1000",
      status: "Rỗng"
    },
    {
      ID: "2",
      location: "Quận 10",
      MCPs_capacity: "1500",
      status: "Đầy"
    },
    {
      ID: "3",
      location: "Quận Tân Bình",
      MCPs_capacity: "2000",
      status: "Rỗng"
    },
    {
      ID: "4",
      location: "Quận Bình Thạnh",
      MCPs_capacity: "2500",
      status: "Nửa"
    },
    {
      ID: "5",
      location: "Quận 7",
      MCPs_capacity: "3000",
      status: "Đầy"
    }
  ];


  const data_assign: {
    ID: int;
    janitor: string;
    collector: string;
    vehicle: string;
    route: string;
    create_by: string;
    day: string;
    status: string
  }[] = [
    {
      ID: 1,
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      create_by: "Mike",
      day: "28 / 2 / 2023",
      status: "Đã hoàn thành"
    },
    {
      ID: 2,
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      create_by: "Mike",
      day: "28 / 2 / 2023",
      status: "Đã hoàn thành"
    },
    {
      ID: 3,
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      create_by: "Mike",
      day: "28 / 2 / 2023",
      status: "Đã hoàn thành"
    },
    {
      ID: 4,
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      create_by: "Mike",
      day: "28 / 2 / 2023",
      status: "Đã hoàn thành"
    },
    {
      ID: 5,
      janitor: "John",
      collector: "Tony",
      vehicle: "Hino FC9JETC",
      route: "KG1-HD4",
      create_by: "Mike",
      day: "28 / 2 / 2023",
      status: "Đang tiến hành"
    }
  ]

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-1 col-end-3 ">
        <div className="w-72">
          <Input color="green" label="Tìm kiếm" />
        </div>
      </div>

      <div className="col-end-7 col-span-1 ">
        <React.Fragment>
          <Button color="green" onClick={handleOpen_assign}>
            Đăng ký
          </Button>
          <Dialog
            size="xs"
            open={open_assign}
            handler={handleOpen_assign}
            className="bg-transparent shadow-none"
          >
            <Card className="mx-auto w-full max-w-[24rem]">
              <CardHeader
                variant="gradient"
                color="light-green"
                className="mb-4 grid h-28 place-items-center"
              >
                <Typography variant="h3" color="white">
                  Đăng ký công việc
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <div className="w-72 gap-4 flex flex-col">
                  <Input
                    variant="static"
                    label="ID"
                    color="green"
                    placeholder=""
                  />
                </div>

                <div className="w-72 gap-4 flex justify-between">
                  <div>
                    <Input
                      variant="static"
                      label="Collector"
                      color="green"
                      placeholder=""
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
                    >
                      <DialogHeader >Hãy chọn Collector</DialogHeader>
                      <DialogBody divider>
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
                              <tr key={index} className="bg-white dark:bg-gray-800 border-8">
                                <td className="px-6 py-2">{item.ID}</td>
                                <td className="px-6 py-2">{item.name}</td>
                                <td className="px-6 py-2">{item.gender}</td>
                                <td className="px-6 py-2">{item.day_of_birth}</td>
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
                                      id={item.ID}
                                      name="color"
                                      color="green"
                                    />
                                  ) : (
                                    <Radio
                                      id={item.ID}
                                      name="color"
                                      color="green"
                                      disabled
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </DialogBody>
                      <DialogFooter>
                        <Button
                          variant="text"
                          onClick={handleOpen_collector}
                          className="mr-1 text-gray-900"
                        >
                          <span>Hủy bỏ</span>
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen_collector}
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
                    >
                      <DialogHeader>Hãy chọn Janitor</DialogHeader>
                      <DialogBody divider>
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
                              <tr key={index} className="bg-white dark:bg-gray-800 border-8">
                                <td className="px-6 py-2">{item.ID}</td>
                                <td className="px-6 py-2">{item.name}</td>
                                <td className="px-6 py-2">{item.gender}</td>
                                <td className="px-6 py-2">{item.day_of_birth}</td>
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
                                      id={item.ID}
                                      name="color"
                                      color="green"
                                    />
                                  ) : (
                                    <Radio
                                      id={item.ID}
                                      name="color"
                                      color="green"
                                      disabled
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </DialogBody>
                      <DialogFooter>
                        <Button
                          variant="text"
                          onClick={handleOpen_janitor}
                          className="mr-1 text-gray-900"
                        >
                          <span>Hủy bỏ</span>
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen_janitor}
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
                    >
                      <DialogHeader >Hãy chọn phương tiện</DialogHeader>
                      <DialogBody divider>
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
                              <tr key={index} className="bg-white dark:bg-gray-800 border-8">
                                <td className="px-6 py-2">{item.ID}</td>
                                <td className="px-6 py-2">{item.license_plates}</td>
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
                                      id={item.ID}
                                      name="color"
                                      color="green"
                                    />
                                  ) : (
                                    <Radio
                                      id={item.ID}
                                      name="color"
                                      color="green"
                                      disabled
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </DialogBody>
                      <DialogFooter>
                        <Button
                          variant="text"
                          onClick={handleOpen_vehicle}
                          className="mr-1 text-gray-900 "
                        >
                          <span>Hủy bỏ</span>
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen_vehicle}
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
                    >
                      <DialogHeader >Hãy chọn MCPs</DialogHeader>
                      <DialogBody divider>
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
                              <tr key={index} className="bg-white dark:bg-gray-800 border-8">
                                <td className="px-6 py-2">{item.ID}</td>
                                <td className="px-6 py-2">{item.location}</td>
                                <td className="px-6 py-2">{item.MCPs_capacity}</td>
                                <td className="px-6 py-2 text-center">
                                  {item.status == "Rỗng" ? ( <Chip color="green" value={item.status} />
                                  ) : (
                                    item.status == "Nửa" ? (
                                      <Chip color="yellow" value={item.status} />
                                    ) : (
                                      <Chip color="red" value={item.status} />
                                    )
                                  )}
                                </td>
                                <td className="px-6 py-2">
                                  {item.status == "Rỗng" ? ( <Checkbox color="green" disabled/>
                                  ) : (<Checkbox color="green"/>)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </DialogBody>
                      <DialogFooter>
                        <Button
                          variant="text"                          
                          onClick={handleOpen_MCPs}
                          className="mr-1 text-gray-900 "
                        >
                          <span>Hủy bỏ</span>
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen_MCPs}
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
                  />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <div className="items-center flex flex-col">
                  <Button
                    variant="gradient"
                    color="green"
                    onClick={handleOpen_assign}
                    className="haftWidth"
                  >
                    Đăng ký
                  </Button>
                  <Button
                    variant="text"
                    onClick={handleOpen_assign}
                    className="text-gray-900 haftWidth"
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
                <td className="px-6 py-2">{item.ID}</td>
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
