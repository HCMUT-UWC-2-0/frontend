import { CameraIcon, EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
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
  Input,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import classnames from "classnames";
import Image from "next/image";
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
  const [openPreview, setOpenPreview] = useState(false);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setPreviewImage(event.target.result as string);
        setOpenPreview(true);
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
    <div className="w-1/2">
      <Card>
        <CardHeader
          shadow={false}
          floated={false}
          className="ml-10 h-12 items-center grid border-b"
        >
          <Typography variant="h5" color="teal">
            Tài khoản
          </Typography>
        </CardHeader>
        {previewImage && (
          <Dialog
            open={openPreview}
            handler={() => setOpenPreview(false)}
            size="xs"
          >
            <DialogHeader className="border-b justify-center">
              <Typography variant="h5">Ảnh đại diện</Typography>
            </DialogHeader>
            <DialogBody className="flex justify-center items-center">
              <Image
                src={previewImage}
                alt="Avatar Preview"
                height={200}
                width={200}
              />
            </DialogBody>
            <DialogFooter className="flex justify-end space-x-4 mt-4">
              <button
                type="submit"
                onClick={handleImageSave}
                className="w-fit justify-center rounded-md px-4 py-2 font-medium text-white bg-teal-800"
              >
                Cập nhật
              </button>
              <button
                type="button"
                className="w-20 justify-center rounded-md px-4 py-2 font-medium text-white bg-red-400"
                onClick={() => handleClosePreview()}
              >
                Hủy
              </button>
            </DialogFooter>
          </Dialog>
        )}
        <CardBody className="p0">
          <div className="justify-items-center grid pb-3">
            <div style={{ position: "relative" }}>
              <Avatar src={avatar} alt="avatar" size="xxl" variant="circular" />
              <label
                style={{
                  position: "absolute",
                  bottom: "4px",
                  right: "4px",
                }}
              >
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
                <CameraIcon
                  className="p-0.5 h-6 w-6 rounded-full ring-1 ring-gray-500 bg-white"
                  style={{ cursor: "pointer" }}
                />
              </label>
            </div>
            <div className="justify-center pt-1">
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
                readOnly={!isEditing}
                style={{ fontWeight: 600, fontSize: 20 }}
                className="disabled:bg-transparent text-center"
                label="Họ và tên"
              />
            </div>
          </div>
          <hr />
          <div className="grid gap-4">
            <div className="items-center">
              <Typography variant="h6"> Ngày sinh: </Typography>
              <Input
                type={isEditing ? "date" : "text"}
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                disabled={!isEditing}
                readOnly={!isEditing}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                className={
                  "rounded-md !border-t-blue-gray-200 focus:!border-t-blue-500"
                }
              />
            </div>
            <div className="items-center">
              <Typography variant="h6"> Số điện thoại: </Typography>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={!isEditing}
                readOnly={!isEditing}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                className={
                  "rounded-md !border-t-blue-gray-200 focus:!border-t-blue-500"
                }
              />
            </div>
            <div className="items-center">
              <Typography variant="h6"> Email: </Typography>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
                readOnly={!isEditing}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                className={
                  "rounded-md !border-t-blue-gray-200 focus:!border-t-blue-500"
                }
              />
            </div>
          </div>
        </CardBody>
        <CardFooter className="pt-0 flex justify-end">
          {!isEditing && (
            <Button className="bg-teal-600 w-1/3" onClick={handleEdit}>
              Chỉnh sửa
            </Button>
          )}
          {isEditing && (
            <Button onClick={handleSave} className="bg-teal-600 w-1/3">
              Lưu
            </Button>
          )}
        </CardFooter>
      </Card>
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
    <div className="flex flex-col mb-4">
      <Typography variant="h6" className="mb-2">
        {label}{" "}
      </Typography>
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
          className={
            "rounded-md !border-t-blue-gray-200 focus:!border-t-blue-500"
          }
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 flex items-center px-2 py-2 cursor-pointer"
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
  const [openDialog, setOpenDialog] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleDialogClose = () => setOpenDialog(false);
  const handlePassChange = (event) => {
    event.preventDefault();
    if (newPassword === confirmPassword) {
      setOpenDialog(true);
    }
  };

  return (
    <div className="w-1/2">
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
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
        <CardFooter className="pt-0 flex justify-center">
          <Button
            className="bg-teal-600 w-1/2 py-3"
            type="button"
            onClick={handlePassChange}
          >
            Đổi mật khẩu
          </Button>
        </CardFooter>
      </Card>
      <Dialog open={openDialog} handler={handleDialogClose} size="sm">
        <DialogHeader as="h3" className="font-bold text-lg text-teal-600">
          Đổi mật khẩu thành công
        </DialogHeader>
        <DialogBody>
          <p className="text-black">
            Mật khẩu của bạn đã được thay đổi thành công.
          </p>
        </DialogBody>
        <DialogFooter>
          <button
            className={`bg-teal-600 py-2 px-4 text-white font-semibold rounded-lg`}
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
          name="Ngô Thu Vân"
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
    {
      label: "Thông báo",
      value: "notification",
      children: "notifications",
    },
    {
      label: "Cài đặt MCPs",
      value: "mcp",
      children: "MCPs",
    },
  ];
  const [activeTab, setActiveTab] = useState("account");

  return (
    <main className="space-y-1">
      <Typography variant="h5">Cài đặt</Typography>

      <Tabs value={activeTab} className="">
        <TabsHeader
          indicatorProps={{
            className: "bg-gray-300",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className={classnames(
                "font-semibold text-gray-500 max-w-fit pl-4 pr-4",
                {
                  "text-black": activeTab === value,
                }
              )}
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
