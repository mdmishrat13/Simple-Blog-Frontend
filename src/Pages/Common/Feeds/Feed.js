import React, { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import {AiOutlineArrowUp,AiOutlineArrowDown} from "react-icons/ai"
import { GrFormView, GrView } from "react-icons/gr";
import boy from "./../../../Assets/Images/boy.jpg";

import Comment from "./Comment";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import useComment from "../../../middlewares/commentContextHooks";
import useAuth from "../../../middlewares/authContextHooks";
import useReact from "../../../middlewares/reactsContextHooks";

const Feed = ({ feed }) => {
  const [commentExpand, setCommentExpand] = useState(false);
  const [postExpand, setPostExpand] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const { createComment, getComment, isCommentLoading,updateComment,deleteComment } = useComment();
  const {
    getLikes,
    createLike,
    removeLike,
    checkLiked,
    createDisLike,
    removeDisLike,
    getDisLikes,
    checkDisLiked,
  } = useReact();
  const {currentUser}= useAuth()
  const [likes, setLikes] = useState([]);
  const [comment,setComment] = useState([])
  const [disLikes, setDisLikes] = useState([]);

  const fetchLiked = async () => {
    const data = await checkLiked(feed._id);
    setLiked(data.data);
  };
  const fetchDisLiked = async () => {
    const data = await checkDisLiked(feed._id);
    setDisLiked(data);
  };
  const fetchLikes = async () => {
    const likes = await getLikes(feed._id);
    setLikes(likes);
  };
  const fetchDisLikes = async () => {
    const disLikes = await getDisLikes(feed._id);
    setDisLikes(disLikes);
  };
  const fetchComments = async () => {
    const comments = await getComment(feed._id);
    setComment(comments);
  };
  useEffect(() => {
    fetchLiked();
    fetchDisLiked();
    fetchLikes();
    fetchDisLikes();
    fetchComments()
  }, [
  ]);
  const validationSchema = Yup.object().shape({
    comment: Yup.string(),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    const newComment=await createComment({ ...data, post: feed });
    reset();
    const newComments = [...comment,{user:newComment.user,comment:newComment.comment,post:newComment.post,_id:newComment._id}]
    setComment(newComments)
  };

  const handleLike = async () => {
    if (!liked) {
      const newLikes = await createLike(feed._id);
      setLiked(true);
      setLikes([...likes, newLikes]);
      setDisLiked(false)
      const newDisLikes = disLikes.filter(disLike=>disLike.user !== newLikes.user)
      setDisLikes(newDisLikes)
    }
    if (liked) {
      const removedLikes = await removeLike(feed._id);
      setLiked(false);
      const newLikes = likes.filter((like) => like._id !== removedLikes._id);
      setLikes(newLikes);
    }
  };
  const handleDisLike = async () => {
    if (!disLiked) {
      const newDisLikes = await createDisLike(feed._id);
      setDisLiked(true);
      setLiked(false)
      setDisLikes([...disLikes, newDisLikes]);
      const newLikes =likes.filter(like=>like.user !== newDisLikes.user)
      setLikes(newLikes)
    }
    if (disLiked) {
      const removedLikes = await removeDisLike(feed._id);
      setDisLiked(false);
      const newDisLikes = disLikes.filter((like) => like._id !== removedLikes._id);
      setDisLikes(newDisLikes);
    }

  };


  const handleDelete = async(id)=>{
    console.log('clicked')
    const sure = window.confirm('Are you sure?')
    if (sure){
      const deletedComment = await deleteComment(id)
      const newComments=comment?.filter(cmnt=>cmnt._id!==deletedComment._id)
      setComment(newComments)
      console.log(deletedComment)
      alert('Comment Deleted Successfully!')
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
      <div onClick={()=>setPostExpand(!postExpand)} className="cursor-pointer">
      <h1 className="text-lg font-bold text-gray-700">{feed.title}</h1>
      <p className="text-gray-600">{postExpand?feed.content:`${feed.content.slice(0,100)} see more...`}</p>
      </div>
      <div className="mt-4 border border-gray-200" />
      <div className="grid grid-cols-3 mt-2 gap-4 rounded-md inline-block p-1">
        <div className="flex items-center gap-4 text-center">
          <button
            onClick={handleLike}
            className="flex items-center justify-center gap-1"
          >
              <AiOutlineArrowUp className={!liked?"text-2xl block text-center hover:text-green-500":"text-2xl block text-green-600 bg-gray-300 text-center"}/>
            
            <p className="text-xl">{likes?.length}</p>
          </button>
          <button onClick={handleDisLike} className="flex items-center justify-center gap-1">
            <AiOutlineArrowDown
              className={!disLiked?"text-2xl block hover:text-red-500 text-center":"text-2xl block text-red-600 bg-gray-300 text-center"}
            />
            <p className="text-xl">{disLikes?.length}</p>
          </button>
        </div>
        <button
          className="flex items-center justify-center gap-1"
          onClick={() => setCommentExpand(!commentExpand)}
        >
          <FaRegComment className="focus:bg-gray-300 text-2xl inline-block text-center" />
          <p className="text-xl">
            {comment?.length == 0 ? "" : comment?.length}
          </p>
        </button>
        <button
          className="flex items-center justify-end gap-1"
        >
          <GrFormView className="focus:bg-gray-300 text-3xl inline-block text-center" />
          <p className="text-xl">0</p>
        </button>
      </div>
      <div className={`${commentExpand ? "block" : "hidden"}`}>
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
          {comment?.map((commen) => (
            <Comment key={commen._id} handleDelete={handleDelete} setComment={setComment}comment={comment} commen={commen} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
