import React, { useEffect, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../middlewares/authContextHooks";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import parse from "date-fns/parse";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { toasts, registerUser, clearErrors, isAuthenticated, currentUser } =
    useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required!"),
    lastName: Yup.string().required("Last Name is required!"),
    email: Yup.string().required("Email is required!"),
    gender:Yup.string().required().nullable(),
    birthDate: Yup.date()
    // .transform(function (value, originalValue) {
    //   if (this.isType(value)) {
    //     return value;
    //   }
    //   const result = parse(originalValue, "dd.MM.yyyy", new Date());
    //   return result;
    // })
    .typeError("please enter a valid date")
    .required()
    .min("1969-11-13", "Date is too early"),
    password: Yup.string()
      .required("Password is required!")
      .min(6, "Password must be at least 6 characters"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
   const registered =await registerUser(data);
   console.log(registered)
    // console.log(data)
  };

  useEffect(() => {
    if (toasts) {
      toast(toasts);
    }
  }, [toasts, isAuthenticated, clearErrors]);
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden my-4">
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
                {...register("firstName")}
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
                {...register("lastName")}
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
              {...register("email")}
              placeholder="john@smith.com"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>

          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Gender
            </label>

            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center px-4 border border-gray-200 rounded">
                <input
                {...register('gender')}
                value='male'
                  id="bordered-radio-1"
                  type="radio"
                  name="gender"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="bordered-radio-1"
                  className="w-full py-2 ml-2 text-sm font-medium text-gray-900"
                >
                  Male
                </label>
              </div>
              <div className="flex items-center px-4 border border-gray-200 rounded">
                <input
                {...register('gender')}
                value='female'
                  id="bordered-radio-2"
                  type="radio"
                  name="gender"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
                />
                <label
                  htmlFor="bordered-radio-2"
                  className="w-full py-2 ml-2 text-sm font-medium text-gray-900 "
                >
                  Female
                </label>
              </div>
              <div className="flex items-center px-4 border border-gray-200 rounded">
                <input
                 {...register("gender")}
                 value="other"
                  id="bordered-radio-3"
                  type="radio"
                  name="gender"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="bordered-radio-3"
                  className="w-full py-2 ml-2 text-sm font-medium text-gray-900"
                >
                  Other
                </label>
              </div>
            </div>
            <p className="text-red-600">{errors.gender?.message}</p>
          </div>

          <div className="mb-2 relative">
            <label
              for="dob"
              className="block text-sm font-semibold text-gray-800"
            >
              Date Of Birth
            </label>
            <input
            {...register('birthDate')}
              type="date"
              min="1950-01-01"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
            <p className="text-red-600">{errors.birthDate?.message}</p>
          </div>

          <div className="mb-2 relative">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              {...register("password")}
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
