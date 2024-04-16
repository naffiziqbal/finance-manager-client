/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../context/UserContext";
import { updateUser } from "../../utils/updateUser";
import toast from "react-hot-toast";

const UpdateProfileForm = ({ setActiveForm }: any) => {
  const { user } = useContext(ContextProvider);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const name = data.displayName;
    const email = data.email;
    const password = data.password;

    const newUser = {
      name,
      email,
      password,
    };
    const response = await updateUser(newUser, user?._id);
    console.log(response);
    if (response.success) {
      toast(response.message);
      setActiveForm(false);
      reset();
    }
  };
  return (
    <div className="my-6 px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="">
          <label htmlFor="name" className="flex flex-col">
            <span>Full Name</span>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="max-w-2xl w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
              {...register("displayName")}
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
              defaultValue={user?.email}
              className="max-w-2xl  w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
              {...register("email")}
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
              defaultValue={user?.password}
              className="max-w-2xl w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                This field is required
              </span>
            )}
          </label>
        </div>
        <div>
          <label htmlFor="Image" className="flex flex-col">
            <span>Image</span>
            <input
              type="file"
              className="max-w-2xl w-full p-2 my-4 ring-violet-600 rounded ring outline-none"
              {...register("profile")}
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
};

export default UpdateProfileForm;
