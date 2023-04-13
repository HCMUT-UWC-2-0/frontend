import React from "react";
import {
  Chip,
  Button,
  Dialog,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  Input,
  CardFooter,
  Typography,
  Checkbox,
} from "@material-tailwind/react";

export const AssignPaneComponent: IComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (

    <div class="grid grid-cols-6 gap-4">
      <div class="col-start-1 col-end-3 ">
        <div className="w-72">
          <Input color="green" label="Tìm kiếm" />
        </div>
      </div>

      
      <div class="col-end-7 col-span-1 ">
        <React.Fragment>
          <Button color="green" onClick={handleOpen}>Đăng ký</Button>
          <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
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
                  <Input variant="static" label="ID" color="green" placeholder="" />
                </div>

                <div className="w-72 gap-4 flex justify-between">
                  <div>
                    <Input variant="static" label="Collector" color="green" placeholder="" />
                  </div>
                  <div>
                    <button type="button" class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg aria-hidden="true" class="w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </button>

                  </div>
                </div>

                <div className="w-72 gap-4 flex justify-between">
                  <div>
                    <Input variant="static" label="Janitor" color="green" placeholder="" />
                  </div>
                  <div>
                    <button type="button" class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg aria-hidden="true" class="w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </button>

                  </div>
                </div>

                <div className="w-72 gap-4 flex justify-between">
                  <div>
                    <Input variant="static" label="Phương tiện" color="green" placeholder="" />
                  </div>
                  <div>
                    <button type="button" class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg aria-hidden="true" class="w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </button>

                  </div>
                </div>

                <div className="w-72 gap-4 flex justify-between">
                  <div>
                    <Input variant="static" label="Lộ trình" color="green" placeholder="" />
                  </div>
                  <div>
                    <button type="button" class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <svg aria-hidden="true" class="w-5 h-5" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </button>

                  </div>
                </div>

                <div>
                  <Input variant="static" label="Chú thích" color="green" placeholder="" />
                </div>
                
              </CardBody>
              <CardFooter className="pt-0">
                <div className="items-center flex flex-col">
                  <Button variant="gradient" color="green" onClick={handleOpen} haftWidth>
                    Đăng ký
                  </Button>
                  <Button variant="text" onClick={handleOpen} haftWidth className="text-gray-600">Hủy bỏ</Button>
                </div>
              </CardFooter>
            </Card>
          </Dialog>
        </React.Fragment>
      </div>
      
      <div class="col-start-1 col-end-7 bg-gray-200 relative overflow-x-auto rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
          <thead class=" text-gray-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Janitor
              </th>
              <th scope="col" class="px-6 py-3">
                Collector
              </th>
              <th scope="col" class="px-6 py-3">
                Phương tiện
              </th>
              <th scope="col" class="px-6 py-3">
                Lộ trình
              </th>
              <th scope="col" class="px-6 py-3">
                Tạo bởi
              </th>
              <th scope="col" class="px-6 py-3">
                Ngày tạo
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody class=" font-medium text-gray-900 whitespace-nowrap dark:text-white ">
            <tr  class="bg-white dark:bg-gray-800 border-8" >
              <td class="px-6 py-2">1</td>
              <td class="px-6 py-2">John</td>
              <td class="px-6 py-2">Tony</td>
              <td class="px-6 py-2">Hino FC9JETC</td>
              <td class="px-6 py-2">KG1-HD4 </td>
              <td class="px-6 py-2">Mike</td>
              <td class="px-6 py-2">28/2/2023</td>
              <td class="px-6 py-2 text-center">
                <Chip color="green" value="Đã hoàn thành" />
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 border-8 ">
              <td class="px-6 py-2">2</td>
              <td class="px-6 py-2">John</td>
              <td class="px-6 py-2">Tony</td>
              <td class="px-6 py-2">Hino FC9JETC</td>
              <td class="px-6 py-2">KG1-HD4 </td>
              <td class="px-6 py-2">Mike</td>
              <td class="px-6 py-2">28/2/2023</td>
              <td class="px-6 py-2 text-center">
                <Chip color="green" value="Đã hoàn thành" />
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 border-8 ">
              <td class="px-6 py-2">3</td>
              <td class="px-6 py-2">John</td>
              <td class="px-6 py-2">Tony</td>
              <td class="px-6 py-2">Hino FC9JETC</td>
              <td class="px-6 py-2">KG1-HD4 </td>
              <td class="px-6 py-2">Mike</td>
              <td class="px-6 py-2">28/2/2023</td>
              <td class="px-6 py-2 text-center">
                <Chip color="lime" value="Đang tiến hành " />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>


  );
};
