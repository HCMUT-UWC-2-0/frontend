import { CameraIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Input,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import classnames from "classnames";
import { useState } from "react";

interface AccountSettingsProps {
  name: string;
  avatar: string;
  dateOfBirth: string;
  phone: string;
  email: string;
}
const AccountSettings: IComponent<AccountSettingsProps> = (props) => {
  const {
    name: initialName,
    dateOfBirth: initialDateOfBirth,
    phone: initialPhone,
    email: initialEmail,
  } = props;
  const [avatar, setAvatar] = useState(props.avatar);
  const [name, setName] = useState(initialName);
  const [dateOfBirth, setDateOfBirth] = useState(initialDateOfBirth);
  const [phone, setPhone] = useState(initialPhone);
  const [email, setEmail] = useState(initialEmail);
  const [isEditing, setIsEditing] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setPreviewImage(event.target.result as string);
      };
    }
  };

  const handleClosePreview = () => {
    setPreviewImage("");
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleImageSave = () => {
    setAvatar(previewImage);
    handleClosePreview();
  };
  const handleSave = () => {
    setIsEditing(false);
    // Save the updated user information
  };
  return (
    <div>
      <Card className="w-96">
        <CardHeader
          shadow={false}
          className="h-40 items-center mt-2 justify-items-center justify-center grid border-b relative"
        >
          <Avatar src={avatar} alt="avatar" size="xxl" variant="circular" />
          <label>
            <input
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
            />
            <CameraIcon
              className="h-5 w-5 rounded-full ring-black bg-gray-300"
              style={{ cursor: "pointer" }}
            />
          </label>
          <Typography variant="h4" className="justify-center">
            {" "}
            {name}{" "}
          </Typography>
        </CardHeader>
        {previewImage && (
          <div
            className="fixed z-50 inset-0 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
                onClick={() => handleClosePreview()}
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              ></span>
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-title"
                  >
                    Image Preview
                  </h3>
                  <div className="mt-5">
                    <img
                      className="h-64 m-auto"
                      src={previewImage}
                      alt="Avatar Preview"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-blue-300 shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleClosePreview()}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    onClick={handleImageSave}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <CardBody className="p0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <Typography className="font-normal"> Ngày sinh: </Typography>
              {dateOfBirth}
            </li>
            <li className="flex items-center gap-4">
              <Typography className="font-normal"> Số điện thoại: </Typography>
              {phone}
            </li>
            <li className="flex items-center gap-4">
              <Typography className="font-normal"> Email: </Typography>
              {email}
            </li>
          </ul>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            color="teal"
            fullWidth
            type="button"
            onClick={handleEdit}
          >
            Chỉnh sửa
          </Button>
        </CardFooter>
      </Card>
      <Dialog size="sm" open={isEditing} handler={() => setIsEditing(false)}>
        <DialogHeader>
          <Typography variant="h4" color="teal">
            Chỉnh sửa thông tin
          </Typography>
        </DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Tên"
              placeholder="Nhập tên"
            />
            <Input
              type="text"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              label="Ngày sinh"
              placeholder="Nhập ngày sinh"
            />
            <Input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              label="Số điện thoại"
              placeholder="Nhập số điện thoại"
            />
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="Nhập email"
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            onClick={handleSave}
            color="teal"
            buttonType="filled"
            size="sm"
            rounded={false}
          >
            Lưu
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};
const PasswordField: IComponent = ({
  label,
  placeholder,
  color,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col mb-6">
      <label className="font-semibold text-black-900 mb-2" htmlFor={label}>
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full py-2 pr-10 pl-3 rounded-md focus:outline-none`}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 flex items-center px-2 py-2 text-gray-400 cursor-pointer hover:text-gray-500"
        >
          {showPassword ? (
            <EyeOffIcon className={`h-5 w-5 text-${color}-400`} />
          ) : (
            <EyeIcon className={`h-5 w-5 text-${color}-400`} />
          )}
        </button>
      </div>
    </div>
  );
};
const PasswordSettings: IComponent = () => {
  const [open, setOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleDialogClose = () => setOpen(false);
  const handlePassChange = (event) => {
    event.preventDefault();
    if (newPassword === confirmPassword) {
      setOpen(true);
    }
  };

  return (
    <div>
      <Card className="w-96">
        <CardHeader
          floated={false}
          shadow={false}
          variant="gradient"
          className="ml-10 h-12 items-center grid border-b"
        >
          <Typography variant="h5" color="teal">
            Đổi mật khẩu
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col border-b">
          <PasswordField
            label="Nhập mật khẩu cũ"
            placeholder="Mật khẩu cũ"
            color="teal"
            value={oldPassword}
            onChange={(event) => setOldPassword(event.target.value)}
          />
          <PasswordField
            label="Nhập mật khẩu mới"
            placeholder="Mật khẩu mới"
            color="teal"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <PasswordField
            label="Xác minh mật khẩu mới"
            placeholder="Mật khẩu mới"
            color="teal"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            color="teal"
            fullWidth
            type="button"
            onClick={handlePassChange}
          >
            Đổi mật khẩu
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={open} handler={handleDialogClose}>
        <DialogHeader as="h3" className="font-bold text-lg text-teal-700">
          Đổi mật khẩu thành công
        </DialogHeader>
        <DialogBody>
          <p className="text-black">
            Mật khẩu của bạn đã được thay đổi thành công.
          </p>
        </DialogBody>
        <DialogFooter>
          <button
            className={`bg-teal-700 py-2 px-4 text-white font-semibold rounded-lg focus:ring-2`}
            onClick={handleDialogClose}
          >
            OK
          </button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export const SettingPaneComponent: IComponent = () => {
  const data = [
    {
      label: "Tài khoản",
      value: "account",
      children: (
        <AccountSettings
          name="Ngo Thu Van"
          avatar="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          dateOfBirth="20/02/1991"
          phone="0989989898"
          email="vanngo@gmail.com"
        />
      ),
    },
    {
      label: "Mật khẩu và bảo mật",
      value: "password",
      children: <PasswordSettings />,
    },
  ];
  const [activeTab, setActiveTab] = useState("account");

  return (
    <main className="space-y-1">
      <Typography variant="h5">Cài đặt</Typography>

      <Tabs value={activeTab} className="w-full">
        <TabsHeader
          indicatorProps={{
            className: "bg-gray-300",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className={classnames("font-semibold text-gray-500", {
                "text-black": activeTab === value,
              })}
              onClick={() => setActiveTab(value)}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, children }) => (
            <TabPanel key={value} value={value}>
              <div className="flex justify-center">{children}</div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </main>
  );
};
