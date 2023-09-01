import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { requestPostDetails } from "./routeWrappers";
import CommentCreator from "./CommentCreator";
import CommentList from "./CommentList";


export default function PostDetails() {
  let params = useParams();
  let postId = params.postid ? parseInt(params.postid) : 0;

  // states
  const [title, setTitle] = useState("Loading..." as string);
  const [sender, setSender] = useState("Loading..." as string);
  const [content, setContent] = useState("Loading..." as string);

  const [timeSent, setTimeSent] = useState(0 as number);
  const [lastRefresh, setLastRefresh] = useState(0 as number);

  const [comments, setComments] = useState(
    [] as {
      commentId: number;
      sender: string;
      comment: string;
      timeSent: number;
    }[]
  );

  // functions
  async function handleRefresh() {
    let r = await requestPostDetails(postId);
    let res = r.post;
    setTitle(res.title);
    setSender(res.sender);
    setContent(res.content);
    setTimeSent(res.timeSent);
    setLastRefresh(Math.floor(Date.now() / 1000));
    setComments(res.comments);
  }

  // use effects
  useEffect(() => {
    handleRefresh();
  }, [postId])

  // return
  return (
    <div className="h-full p-10 overflow-y-scroll">
      <div className="bg-slate-800 p-2 rounded-2xl flex flex-col">
        <div className="bg-slate-700 rounded-xl p-5">
          <div className="flex flex-row justify-between">
            <div className="text-gray-400">
              <p>Time Posted: {timeSent}s</p>
              <p>Last Refresh: {lastRefresh}s</p>
            </div>
            <div className="flex flex-row h-10">
              <button
                className="btn btn-blue mx-2 cursor-pointer"
                onClick={handleRefresh}
              >
                Refresh
              </button>
              <Link
                className="btn btn-blue mx-2 cursor-pointer"
                to={`/Anarchy-Forum/post/${postId}/edit`}
              >
                Edit
              </Link>
            </div>
          </div>
          <div className="m-2 p-2"></div>
          <h1 className="text-4xl">{title}</h1>
          <h2 className="text-xl">{sender}</h2>
          <br />
          <p>{content}</p>
          <br />
        </div>
        <div>
          <div className="p-2">
            <h1 className="text-2xl">Comments:</h1>
            <CommentCreator />
            <br/>
            <CommentList comments={comments}/>
          </div>
        </div>
      </div>
    </div>
  );
}
