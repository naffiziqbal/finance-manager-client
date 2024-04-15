/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { handleImageUpload } from "../../utils/uploadProfileToIMGBB";
import { signup } from "../../utils/signup";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

type Inputs = {
  email?: string;
  password?: string;
  displayName?: string;
  profile?: any;
};

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const image = data.profile[0];
    const formData = new FormData();
    formData.append("image", image);
    const res = await handleImageUpload(formData);
    console.log(res);
    if (res.success) {
      const userData = {
        displayName: data.displayName,
        email: data.email,
        password: data.password,
        photoURL: res.data.url,
      };
      try {
        const user = await signup(userData);
        console.log(user);
        if (user.success) {
          Cookies.set("token", user?.token);
          Cookies.set("uid", user?.user._id);
          toast(user.message);
          reset();
        }
        if (user.success === false) {
          toast(user.message);
        }
      } catch (error: any) {
        console.log(error);
        toast(error.message);
      }
    }
  };

  return (
    <div className="px-5">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="">
          <label htmlFor="name" className="flex flex-col">
            <span>Full Name</span>
            <input
              type="text"
              className="max-w-2xl w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
              {...register("displayName", { required: true })}
            />
            {errors.displayName && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </label>
        </div>
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
        <div>
          <label htmlFor="amount" className="flex flex-col">
            <span>Amount</span>
            <input
              type="file"
              className="max-w-2xl w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
              {...register("profile", { required: true })}
            />
            {errors.profile && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </label>
        </div>
        <p className="text-sm">
          Already have an Account?{" "}
          <Link className="text-violet-600 underline" to={"/login"}>
            Login
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
