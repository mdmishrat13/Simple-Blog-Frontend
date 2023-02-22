import React, { useEffect, useState } from "react";
import useComment from "../../../middlewares/commentContextHooks";
import boy from "./../../../Assets/Images/boy.jpg";
import Comment from "./Comment";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const Comments = ({ feed }) => {
  const { createComment,getComment,isCommentLoading } = useComment();
  const [comments,setComments] =useState([])
    console.log(comments)
    const fetchComments = async()=>{
        const fatchedComments = await getComment(feed)
        setComments(fatchedComments)
    }
    useEffect(()=>{
        fetchComments()
    },[getComment])
    console.log(feed)
  const validationSchema = Yup.object().shape({
    comment: Yup.string(),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    createComment({ ...data, post: feed });
    reset()
  };

  return (
    <div className="mt-2">
      <div className="border border-gray-200" />
      <div className="flex gap-3 my-2 py-2 ">
        <img
          src={boy}
          className="w-8 h-8 object-cover overflow-hidden rounded-lg"
        />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="rounded-lg w-full ">
            <textarea
            required
            rows={1}
              {...register("comment")}
              className="border-1 bg-gray-200  rounded-r px-4 py-2 w-full"
              type="text"
              placeholder="Leave a comment"
            />
          </div>
          <div className="text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-gray-300 rounded-md font-semibold hover:bg-gray-600 hover:text-white"
          >
            Submit
          </button>
          </div>
        </form>
      </div>
      {comments?.map(comment=> <Comment key={comment._id} comment={comment}/>)}
      
        
    </div>
  );
};

export default Comments;
