/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../utils/login";
import { useContext } from "react";
import { ContextProvider } from "../../context/UserContext";
import { useMutation } from "@tanstack/react-query";

type Inputs = {
  email?: string;
  password?: string;
};

export default function LoginForm() {
  const navigates = useNavigate();
  const { setLoading } = useContext(ContextProvider);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const userData = {
      email: data.email,
      password: data.password,
    };

    try {
      const user = await login(userData);
      console.log(user);

      if (user.success) {
        Cookies.set("token", user?.token);
        Cookies.set("uid", user?.user._id);
        toast(user.message);
        reset();
        navigates("/dashboard");
      }
      if (user.success === false) {
        toast(user.message);
      }
    } catch (error: any) {
      console.log(error);
      toast(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="px-5">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div>
          <label htmlFor="Email" className="flex flex-col">
            <span>Email</span>
            <input
              type="email"
              className="max-w-2xl  w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </label>
        </div>
        <div>
          <label htmlFor="Password" className="flex flex-col">
            <span>Password</span>
            <input
              type="password"
              className="max-w-2xl w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </label>
        </div>
        <p className="text-sm">
          Don't have an Account?{" "}
          <Link className="text-violet-600 underline" to={"/signup"}>
            Signup
          </Link>
        </p>
        <input
          className="max-w-2xl w-full p-2 my-4 ring-violet-600 bg-violet-600 text-white font-bold hover:bg-violet-700 duration-300 cursor-pointer rounded ring outline-none"
          type="submit"
        />
      </form>
    </div>
  );
}
