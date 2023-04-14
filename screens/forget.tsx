import { LoadableButton } from "@components/LoadableButton";
import { ROUTER } from "@configs/router";
import { btn } from "@configs/styles";
import Button from "@material-tailwind/react/components/Button";
import Input from "@material-tailwind/react/components/Input";
import { useAccountStore } from "@states/account";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type FForm = {
  email: string;
};

export const ForgetScreen: IComponent = () => {
  
  const { handleLogin, loading } = useAccountStore();
  const { register, handleSubmit } = useForm<FForm>();
  //const handleEmail = () => router.push(ROUTER.email.url); 
  // Incase you wanna add more to the ROUTER file
  //const router = useRouter();

  return (
    <div className="font-sans flex w-full h-full justify-center items-center flex-col gap-2 pb-40 animate__animated animate__bounceIn" >
      <header className="flex w-full text-3xl font-bold text-gray-800 self-start bg-brown-50">UWC 2.0</header>
      <h1 className="text-2xl font-bold text-teal-800" style={{ paddingTop: "150px" }} >Quên mật khẩu</h1>
      <form
        //onSubmit={handleEmail}
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
          containerProps={{ className: "bg-white rounded"}}
          {...register("email", { required: true })}
          className="w-72 "
        />
        <button type="submit" hidden />
      </form>
      <div className="flex gap-2 mt-2">
        <Button
          //onClick={handleEmail}
          color="teal"
          size="md"
          className={btn}
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Gửi xác nhận
        </Button>
      </div>
    </div>
  );
};
