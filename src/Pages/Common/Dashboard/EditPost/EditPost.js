import React, { useEffect } from "react";
import usePost from "../../../../middlewares/postContextHooks";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const {id} = useParams()
  const { isPostLoading, updatePost,toasts,post,getPost } = usePost();
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("title is required!")
      .min(10, "title must be at least 6 characters"),
    content: Yup.string()
    .required("Description is required!")
    .min(50,'Description must be at least 50 character!'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
   console.log(data)
   updatePost(id,data);
   reset()
  };

  useEffect(() => {
    getPost(id)
    if (toasts) {
      toast(toasts);
    }
  }, [toasts]);

  if(isPostLoading){
    return <h1>Loading....</h1>
  }

  return (
    <div className="p-4">
      {post&&<form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 rounded shadow w-full"
      >
        <div className="pb-2">
          <label htmlFor="" className="font-semibold text-gray-700 block pb-1">
            Post Title
          </label>
          <input
          {...register('title')}
            type="text"
            className="border-1 bg-gray-200  rounded-r px-4 py-2 w-full"
            defaultValue={post.title}
          />
          <p className="text-red-600">{errors.title?.message}</p>
        </div>
        <div className="pb-2">
          <label htmlFor="" className="font-semibold text-gray-700 block pb-1">
            Post Description
          </label>
          <textarea
          {...register('content')}
            rows={12}
            type="text"
            className="border-1 bg-gray-200  rounded-r px-4 py-2 w-full"
            defaultValue={post.content}
          />
           <p className="text-red-600">{errors.content?.message}</p>
        </div>
        <div className="text-right">
          <button type="submit" className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-900">
            Update
          </button>
        </div>
      </form>}
    </div>
  );
};

export default EditPost;
