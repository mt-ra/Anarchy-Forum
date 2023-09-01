import { useState } from "react";
import { Link } from "react-router-dom";

import PostCard from "./PostCard";
import { requestPostList } from "./routeWrappers";

export default function PostList() {
  const [posts, setPosts] = useState(
    [] as { postId: number; sender: string; title: string; timeSent: number }[]
  );

  const [loading, setLoading] = useState(false as boolean);

  async function handleRefresh() {
    setLoading(true);
    let l = await requestPostList();
    setPosts(l.posts);
    setLoading(false);
  }

  const postElements = [];
  for (let post of posts) {
    postElements.push(
      <PostCard
        key={`${post.postId}`}
        postId={post.postId}
        sender={post.sender}
        title={post.title}
        timeSent={post.timeSent}
      />
    );
  }

  return (
    <div className="h-full bg-gray-900 overflow-y-scroll overflow-x-hidden w-96 flex-shrink-0">
      <Link to="/">
        <button
          className="btn btn-blue w-full my-2 mx-0"
          onClick={handleRefresh}
        >
          Refresh Post List
        </button>
      </Link>

      {postElements.length === 0 ? (
        loading ? (
          <p></p>
        ) : (
          <p className="text-center pt-4 text-gray-500">
            No posts found. Try refreshing.
          </p>
        )
      ) : (
        postElements
      )}
      {loading ? (
        <p className="text-center pt-4 text-gray-500">Loading...</p>
      ) : (
        <p></p>
      )}
    </div>
  );
}
