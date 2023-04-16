import { LoadableButton } from "@components/LoadableButton";
import { ROUTER } from "@configs/router";
import { btn } from "@configs/styles";
import Button from "@material-tailwind/react/components/Button";
import Input from "@material-tailwind/react/components/Input";
import { useAccountStore } from "@states/account";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type TLoginForm = {
  email: string;
  password: string;
};

export const LoginScreen: IComponent = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<TLoginForm>();
  const { handleLogin, loading } = useAccountStore();

  const handleForgotPass = () => router.push(ROUTER.forget.url);
  const handlePressLogin = handleSubmit((data) => {
    handleLogin(data.email, data.password, router);
  });

  return (
    <div className="mt-32 font-sans flex w-full h-full justify-center items-center flex-col gap-2 pb-40 animate__animated animate__bounceIn">
      <header className="flex w-full text-3xl font-bold text-gray-800 self-start bg-brown-50">
        UWC 2.0
      </header>
      <h1
        className="text-2xl font-bold text-gray-800"
        style={{ paddingTop: "150px" }}
      >
        Chào mừng quay trở lại!
      </h1>
      <span className="text-gray-500 font-bold">
        Đăng nhập để truy cập dashboard của bạn
      </span>
      <form
        onSubmit={handlePressLogin}
        className="flex flex-col gap-2 my-4 py-4 border-t border-b border-gray-300"
      >
        <p className="text-sm font-bold text-gray-800">Email</p>
        <Input
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          type="text"
          className="w-72"
          autoComplete="Email"
          containerProps={{ className: "bg-white rounded" }}
          {...register("email", { required: true })}
        />
        <p className="text-sm font-bold text-gray-800">Mật khẩu</p>
        <Input
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          type="password"
          autoComplete="password"
          className="w-72"
          containerProps={{ className: "bg-white rounded" }}
          {...register("password", { required: true })}
        />
        <button type="submit" hidden />
      </form>
      <span className="text-sm">
        Chưa có tài khoản?{" "}
        <Link href={ROUTER.signup.url}>
          <span className="text-teal-500 font-bold cursor-pointer">
            Đăng ký
          </span>
        </Link>
      </span>
      <div className="flex gap-2 mt-2">
        <LoadableButton
          loading={loading}
          onClick={handlePressLogin}
          color="teal"
          size="sm"
          className={btn}
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Đăng nhập
        </LoadableButton>
        <Button
          disabled={loading}
          onClick={handleForgotPass}
          color="gray"
          size="sm"
          className={btn}
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Quên mật khẩu?
        </Button>
      </div>
    </div>
  );
};
