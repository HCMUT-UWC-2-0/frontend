import {
  CameraIcon,
  EyeDropperIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
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
  Switch,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { useAccountStore } from "@states/account";
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
        event?.target?.result && setPreviewImage(event.target.result as string);
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
    <div className="mt-12 w-3/4">
      <Card nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
        <CardHeader
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
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
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            open={openPreview}
            handler={() => setOpenPreview(false)}
            size="xs"
          >
            <DialogHeader
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              className="border-b justify-center"
            >
              <Typography variant="h5">Ảnh đại diện</Typography>
            </DialogHeader>
            <DialogBody
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              className="flex justify-center items-center"
            >
              <Image
                src={previewImage}
                alt="Avatar Preview"
                height={200}
                width={200}
              />
            </DialogBody>
            <DialogFooter
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              className="flex justify-end space-x-4 mt-4"
            >
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
        <CardBody
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          className="p0"
        >
          <div className="justify-items-center grid pb-3">
            <div style={{ position: "relative" }}>
              <Avatar
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                src={avatar}
                alt="avatar"
                size="xxl"
                variant="circular"
              />
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
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
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
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
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
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
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
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
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
        <CardFooter
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          className="pt-0 flex justify-end"
        >
          {!isEditing && (
            <Button
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              className="bg-teal-600 w-fit"
              onClick={handleEdit}
            >
              Chỉnh sửa
            </Button>
          )}
          {isEditing && (
            <Button
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onClick={handleSave}
              className="bg-teal-600 w-1/3"
            >
              Lưu
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
const PasswordField: IComponent<{
  label: string;
  placeholder: string;
  color: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, placeholder, color, value, onChange }) => {
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
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
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
            <EyeDropperIcon className={`h-5 w-5 text-${color}-400`} />
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
  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (newPassword === confirmPassword) {
      setOpenDialog(true);
    }
  };

  return (
    <div className="mt-12 w-3/4">
      <Card nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
        <CardHeader
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          floated={false}
          shadow={false}
          className="ml-10 h-12 items-center grid border-b"
        >
          <Typography variant="h5" color="teal">
            Đổi mật khẩu
          </Typography>
        </CardHeader>
        <CardBody
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          className="flex flex-col border-b"
        >
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
        <CardFooter
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          className="pt-0 flex justify-center"
        >
          <Button
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            className="bg-teal-600 w-1/2 py-3"
            type="button"
            onClick={() => handlePassChange}
          >
            Đổi mật khẩu
          </Button>
        </CardFooter>
      </Card>
      <Dialog
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        open={openDialog}
        handler={handleDialogClose}
        size="sm"
      >
        <DialogHeader
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          className="font-bold text-lg text-teal-600"
        >
          Đổi mật khẩu thành công
        </DialogHeader>
        <DialogBody
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <p className="text-black">
            Mật khẩu của bạn đã được thay đổi thành công.
          </p>
        </DialogBody>
        <DialogFooter
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
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
const NotificationSettings: IComponent = () => {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("vn");

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div className="mt-12 w-3/4">
      <Card nonce={undefined} onResize={undefined} onResizeCapture={undefined}>
        <CardHeader
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          floated={false}
          shadow={false}
          className="ml-10 h-12 items-center grid border-b"
        >
          <Typography variant="h5" color="teal">
            Thông báo
          </Typography>
        </CardHeader>
        <CardBody
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <Typography variant="h6"> Tên người nhận </Typography>
          <Input
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            type="text"
            placeholder="Nhập tên người nhận"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            className={
              "rounded-md !border-t-blue-gray-200 focus:!border-t-blue-500 "
            }
          />
          <Typography variant="h6" className="pt-3">
            {" "}
            Số điện thoại{" "}
          </Typography>
          <div className="flex relative">
            <select
              className="flex w-fit items-center rounded-l-md border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-1"
              value={country}
              onChange={() => handleCountryChange}
            >
              <option value="cn">CN(+86)</option>
              <option value="us">US(+1)</option>
              <option value="gb">UK(+44)</option>
              <option value="vn">VN(+84)</option>
              <option value="jp">JP(+81)</option>
            </select>
            <Input
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              type="tel"
              placeholder="Nhập số điện thoại người nhận"
              className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-blue-500"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <Typography variant="h6" className="pt-3">
            {" "}
            Loại thông báo{" "}
          </Typography>
          <div className="space-y-3 pt-2 flex flex-col">
            <Switch
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              id="full"
              label="Thông báo các MCP đã đầy"
              color="teal"
              defaultChecked={false}
            />
            <Switch
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              id="janistor"
              label="Thông báo các Janistor đã sẵn sàng"
              color="teal"
              defaultChecked={false}
            />
            <Switch
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              id="collector"
              label="Thông báo các Collector đã sẵn sàng"
              color="teal"
              defaultChecked={false}
            />
            <Switch
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              id="vehicle"
              label="Thông báo các phương tiện đã sẵn sàng"
              color="teal"
              defaultChecked={false}
            />
            <Switch
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              id="complete"
              label="Thông báo các chuyến vận chuyển đã hoàn thành"
              color="teal"
              defaultChecked={false}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export const SettingPaneComponent: IComponent = () => {
  const { accountInfo } = useAccountStore();
  const data = [
    {
      label: "Tài khoản",
      value: "account",
      children: accountInfo && (
        <AccountSettings
          name={accountInfo.name}
          avatar="https://media.discordapp.net/attachments/1096637545019883530/1096637545271525436/upscaled-1681528594382.png?width=419&height=629"
          dateOfBirth={new Date(accountInfo.dateOfBirth).toLocaleDateString()}
          phone={accountInfo.phone}
          email={accountInfo.email}
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
      children: <NotificationSettings />,
    },
  ];

  return (
    <main className="space-y-1">
      <Typography variant="h5">Cài đặt</Typography>
      <Tabs value="account" className="">
        <TabsHeader
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          className="font-bold w-1/2"
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              className="font-bold"
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          className="!p-0"
        >
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
