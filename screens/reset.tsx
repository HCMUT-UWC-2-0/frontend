import { btn } from "@configs/styles";
import Button from "@material-tailwind/react/components/Button";
import Input from "@material-tailwind/react/components/Input";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type PForm = {
  newpass1: string;
  newpass2: string;
};

export const ResetScreen: IComponent = () => {
  const { register, handleSubmit } = useForm<PForm>();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // state to control whether to show success pop-up or not
  const [showErrorPopup, setShowErrorPopup] = useState(false); // state to control whether to show error pop-up or not
  const [passValue, setValue] = useState(""); //Save user input
  const onSubmit = (formData: PForm) => {
    setValue(formData.newpass1); // Store value in state variable
    setValue(formData.newpass2);
    if (formData.newpass1 === formData.newpass2) {
      setShowSuccessPopup(true);
    } else {
      setShowErrorPopup(true);
    }
  };

  return (
    <div className="mt-32 font-sans flex w-full h-full justify-center items-center flex-col gap-2 pb-40 animate__animated animate__bounceIn">
      <header className="flex w-full text-3xl font-bold text-gray-800 self-start bg-brown-50">
        UWC 2.0
      </header>
      <h1
        className="text-2xl font-bold text-teal-700"
        style={{ paddingTop: "150px" }}
      >
        Tạo mật khẩu mới
      </h1>
      <form className="flex flex-col gap-2 my-4 py-4 border-t border-b border-gray-300">
        <p className="text-sm font-bold text-gray-800">Mật khẩu mới</p>
        <Input
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          type="password"
          className="w-72"
          label="Nhập mật khẩu mới"
          autoComplete="passwordl"
          containerProps={{ className: "bg-white rounded" }}
          {...register("newpass1", { required: true })}
        />
        <p className="text-sm font-bold text-gray-800">Nhập lại mật khẩu mới</p>
        <Input
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          type="password"
          autoComplete="password"
          className="w-72"
          label="Nhập mật khẩu mới của bạn"
          containerProps={{ className: "bg-white rounded" }}
          {...register("newpass2", { required: true })}
        />
        <button type="submit" hidden />
      </form>
      <div className="flex gap-2 mt-2">
        <Button
          color="teal"
          size="md"
          className={btn}
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onClick={handleSubmit(onSubmit)}
        >
          Xác nhận
        </Button>
      </div>
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-96 rounded-lg p-8">
            <div className="flex justify-end"></div>
            <h2 className="text-3xl font-bold text-teal-800 mb-4 text-center">
              Đổi mật khẩu thành công!
            </h2>
            <div className="border-b border-gray-300 mb-4" />
            <p className="py-4 font-bold text-gray-800 text-center px-4">
              Mật khẩu đã được cập nhật
            </p>
            <div className="text-center">
              <Link href="/login">
                <a className="bg-teal-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Quay lại trang đăng nhập
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
      {showErrorPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-96 rounded-lg p-8">
            <div className="flex justify-end">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setShowErrorPopup(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.292 6.293a1 1 0 00-1.414-1.414L12 10.586 7.122 5.707a1 1 0 00-1.414 1.414L10.586 12l-4.88 4.879a1 1 0 001.414 1.414L12 13.414l4.878 4.88a1 1 0 001.415-1.414L13.414 12l4.878-4.879z" />
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Mật khẩu không trùng khớp, xin nhập lại
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
