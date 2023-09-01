import { useState } from "react";
import { requestPostComment } from "./routeWrappers";
import { useParams } from "react-router-dom";

export default function CommentCreator() {
  // states
  const [sender, setSender] = useState("" as string);
  const [comment, setComment] = useState("" as string);

  // other
  let params = useParams();
  let postId = params.postid ? parseInt(params.postid) : 0;

  // functions
  async function handleSubmit() {
    let res = await requestPostComment(postId, sender, comment);
    console.log(res);
  }

  // return
  return (
    <div className="">
      <form name="comment">
        <input
          className="rounded-lg p-4 border-t mr-0 border-b border-l text-gray-300 border-gray-800 bg-gray-900 left-10 w-1/3 m-2"
          placeholder="Username"
          name="sender"
          onChange={(event) => {
            setSender(event.target.value);
          }}
        />
        <div className="flex flex-row">
          <textarea
            id="commenttextarea"
            rows={2}
            className="block p-2.5 text-gray-300 bg-gray-900 rounded-lg border border-gray-800 mx-2 w-5/6"
            placeholder="Write your comment here..."
            spellCheck="false"
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
          <button className="btn btn-blue flex-grow" onClick={(event) => {
            event.preventDefault();
            handleSubmit()}}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
