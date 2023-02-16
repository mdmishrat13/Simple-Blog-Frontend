import React from "react";
import usePost from "../../../middlewares/postContextHooks";
import Feed from "./Feed";

const Feeds = () => {
  const { feeds, getFeeds, isPostLoading } = usePost();

  if (isPostLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-4">
      <div className="p-4">something will go there</div>
      <div className=" p-4">
        {!feeds.length ? (
          <h1>No Feeds Available</h1>
        ) : (
          <div className="grid gap-4">
            {feeds?.map((feed) => (
              <Feed feed={feed} key={feed._id} />
            ))}
          </div>
        )}
      </div>

      <div className="p-4">something will go there</div>
    </div>
  );
};

export default Feeds;
