import React, { useEffect, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../middlewares/authContextHooks";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { toasts, registerUser, clearErrors, isAuthenticated, currentUser } =
    useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName:Yup.string().required('First Name is required!'),
    lastName:Yup.string().required('Last Name is required!'),
    email: Yup.string().required("Email is required!"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must be at least 6 characters"),
    
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    registerUser(data)
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
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-800"
              >
                First Name
              </label>
              <input
              {...register('firstName')}
                placeholder="John"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="text-red-600">{errors.firstName?.message}</p>
            </div>
            <div className="mb-2">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-800"
              >
                Last Name
              </label>
              <input
              {...register('lastName')}
                placeholder="Smith"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="text-red-600">{errors.lastName?.message}</p>
            </div>
          </div>

          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
            {...register('email')}
              placeholder="john@smith.com"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="mb-2 relative">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
            {...register('password')}
              placeholder="********"
              type={`${showPassword ? "text" : "password"}`}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
          <div className="mb-2">
            <label
              for="password2"
              className="block text-sm font-semibold text-gray-800"
            >
              Confirm Password
            </label>
            <input
              placeholder="********"
              type={`${showPassword ? "text" : "password"}`}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-purple-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
