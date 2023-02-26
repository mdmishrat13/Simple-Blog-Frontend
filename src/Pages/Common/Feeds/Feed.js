import React, { useEffect, useState } from "react";
import {FaRegComment } from "react-icons/fa";
import {TiArrowUpOutline, TiArrowUpThick}from "react-icons/ti"
import { GrView } from "react-icons/gr";
import boy from "./../../../Assets/Images/boy.jpg";

import Comment from "./Comment";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import useComment from "../../../middlewares/commentContextHooks";
import { TbArrowBigDown, TbArrowBigTop } from "react-icons/tb";
import useReact from "../../../middlewares/reactsContextHooks";

const Feed = ({ feed }) => {
  const [commentExpand,setCommentExpand]= useState(false)
  const [liked,setLiked] = useState(false)
  const { createComment,getComment,isCommentLoading } = useComment();
  const {getLikes,createLike,removeLike,checkLiked}= useReact();
  const [comments,setComments] =useState([])
  const [likes,setLikes]= useState([])

    const fetchComments = async()=>{
        const fatchedComments = await getComment(feed._id)
        setComments(fatchedComments)
    }
    const fetchLiked = async()=>{
        const data = await checkLiked(feed._id)
        setLiked(data.data)
    }
    const fetchLikes = async()=>{
      const likes = await getLikes(feed._id)
      setLikes(likes)
    }
    useEffect(()=>{
        fetchComments()
        fetchLiked()
        fetchLikes()
    },[getComment,createLike,removeLike])
  const validationSchema = Yup.object().shape({
    comment: Yup.string(),
  });

  console.log(liked)

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    createComment({ ...data, post: feed });
    reset()
  };

  const handleLike = async()=>{
    if(!liked){
      const newLikes= await createLike(feed._id)
      setLiked(true)
      setLikes([...likes,newLikes])
    }
    if(liked){
      const removedLikes = await removeLike(feed._id)
      setLiked(false)
      const newLikes = likes.filter(like=>like._id !== removedLikes._id)
      setLikes(newLikes)
    }
  }
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex gap-2 pb-2">
        <img
          src={boy}
          className="w-8 h-8 object-cover overflow-hidden rounded-lg"
        />
        <div>
          <p className="font-sm font-bold text-gray-600 m-0 p-0">
            {feed.user?.firstName + " " + feed.user?.lastName}
          </p>
          <p className="font-medium text-sm m-0 text-gray-500 p-0">Student</p>
        </div>
      </div>
      <h1 className="text-lg font-bold text-gray-700">{feed.title}</h1>
      <p className="text-gray-600">{feed.content}</p>
      <div className="mt-4 border border-gray-200" />
      <div className="grid grid-cols-3 mt-2 gap-4 rounded-md inline-block p-1">
        <div className="flex items-center gap-4 text-center">
          <button onClick={handleLike} className="flex items-center justify-center gap-1">
            {!liked?<TiArrowUpOutline className="text-2xl block text-center " />:<TiArrowUpThick className="text-2xl block text-center"/>}
            <p className="text-xl">{likes?.length}</p>
          </button>
          <button className="flex items-center justify-center gap-1">
            <TbArrowBigDown className="text-2xl text-black bg-gray-400 text-center" />
            <p className="text-xl">12</p>
          </button>
        </div>
        <button className="flex items-center justify-center gap-1" onClick={()=>setCommentExpand(!commentExpand)}>
          <FaRegComment className="focus:bg-gray-300 text-2xl inline-block text-center" />
          <p className="text-xl">{comments.length==0?'':comments.length}</p>
        </button>
        <button className="flex items-center justify-end gap-1" onClick={()=>setCommentExpand(!commentExpand)}>
          <GrView className="focus:bg-gray-300 text-2xl inline-block" />
          <p className="text-xl">46</p>
        </button>
      </div>
      <div className={`${commentExpand?"block":'hidden'}`}>
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
      <div className="mt-2">
      
      {comments?.map(comment=> <Comment key={comment._id} comment={comment}/>)}
      
        
    </div>
      </div>
    </div>
  );
};

export default Feed;
