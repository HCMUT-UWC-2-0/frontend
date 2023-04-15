import { LoadableButton } from "@components/LoadableButton";
import { ROUTER } from "@configs/router";
import { btn } from "@configs/styles";
import Button from "@material-tailwind/react/components/Button";
import Input from "@material-tailwind/react/components/Input";
import { useAccountStore } from "@states/account";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Fragment, useState } from "react";

type FForm = {
  email: string;
};

export const ForgetScreen: IComponent = () => {
  const { handleLogin, loading } = useAccountStore();
  const { register, handleSubmit } = useForm<FForm>();
  const [showPopup, setShowPopup] = useState(false); // state to control whether to show pop-up or not
  const [emailValue, setEmailValue] = useState(''); //Save user input
  
  const onSubmit = (formData: FForm) => {
    setEmailValue(formData.email); // Store email value in state variable
    setShowPopup(true);
  };

  
  return (
    <div className="font-sans flex w-full h-full justify-center items-center flex-col gap-2 pb-40 animate__animated animate__bounceIn">
      <header className="flex w-full text-3xl font-bold text-gray-800 self-start bg-brown-50">UWC 2.0</header>
      <h1 className="text-2xl font-bold text-teal-800" style={{ paddingTop: "150px" }}>
        Quên mật khẩu
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 my-4 py-6 border-t border-b border-gray-300"
      >
        <p className="text-sm font-bold text-gray-800 text-center">Nhập email của bạn để được hướng dẫn</p>
        <Input
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          type="text"
          label="Email"
          autoComplete="email"
          containerProps={{ className: "bg-white rounded" }}
          {...register("email", { required: true })}
          className="w-72 "
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
          Gửi xác nhận
        </Button>
    </div>
    <div>
    {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-40 flex justify-center items-center">
          <div className="bg-white w-96 rounded-lg p-8">
            <div className="flex justify-end">
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setShowPopup(false)}
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
            <h2 className="text-3xl font-bold text-teal-800 mb-4">Email đã gửi</h2>
            <div className="border-b border-gray-300 mb-4" />
            <p className="text-base font-medium text-gray-800 mb-4">
              Một email đã được gửi tới tài khoản <p className="font-bold">{emailValue}</p>
            </p>
            <div className="text-center">
              <Link href="/reset">
                <a className="bg-teal-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Xác nhận
                  </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
};
