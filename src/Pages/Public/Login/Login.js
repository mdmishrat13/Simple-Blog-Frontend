import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../../../middlewares/authContextHooks";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { toasts, loginUser, clearErrors, isAuthenticated,isAuthLoading} = useAuth();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must be at least 6 characters"),
    email: Yup.string().required("Email is required!"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    loginUser(data);
  };

  useEffect(() => {
    if (toasts) {
      toast(toasts);
    }
  }, [toasts, isAuthenticated, clearErrors]);
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="john@smith.com"
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="mb-2 relative">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              {...register("password")}
              type={`${showPassword ? "text" : "password"}`}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="********"
            />
            <p className="text-red-600">{errors.password?.message}</p>
            <p className="text-2xl text-purple-700 absolute cursor-pointer right-4 top-9">
              {!showPassword ? (
                <BiShow onClick={() => setShowPassword(true)} />
              ) : (
                <BiHide onClick={() => setShowPassword(false)} />
              )}
            </p>
          </div>

          <Link to="/" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-6">
            <button
              disabled={errors.length|| isAuthLoading}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
               {isAuthLoading?'Loading...':'Login'}
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-purple-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
