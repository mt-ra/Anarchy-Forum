import { useState } from "react";
import { Link } from "react-router-dom";
import { requestPostCreate } from "./routeWrappers";

export default function PostCreator() {
  // states
  let [senderText, setSenderText] = useState("" as string);
  let [titleText, setTitleText] = useState("" as string);
  let [contentText, setContentText] = useState("" as string);

  // functions
  async function handleSubmit() {
    let sender = senderText;
    let title = titleText;
    let content = contentText;
    requestPostCreate(sender, title, content);
  }

  // return
  return (
    <div className="h-full p-10">
      <div className="bg-slate-700 p-2 rounded-xl">
        <div className="flex flex-row justify-start">
          <div className="flex-grow m-4">
            <h1 className="text-2xl">Enter Post Details:</h1>
          </div>
          <div className="m-4">
            <Link to="/Anarchy-Forum">
              <h1 className="text-2xl text-gray-500 hover:text-gray-300">
                (Exit) X
              </h1>
            </Link>
          </div>
        </div>
        <div className="p-4">
          <form name="createPost">
            <input
              className="rounded-lg p-4 border-t mr-0 border-b border-l text-gray-300 border-gray-800 bg-gray-900 left-10 w-5/6 m-2"
              placeholder="Username"
              name="sender"
              onChange={(event) => {
                setSenderText(event.target.value);
              }}
            />
            <input
              className="rounded-lg p-4 border-t mr-0 border-b border-l text-gray-300 border-gray-800 bg-gray-900 left-10 w-5/6 m-2"
              placeholder="Post Title"
              name="title"
              onChange={(event) => {
                setTitleText(event.target.value);
              }}
            />
            <textarea
              id="message"
              rows={7}
              className="block p-2.5 text-gray-300 bg-gray-900 rounded-lg border border-gray-800 m-2 w-5/6"
              placeholder="Write your thoughts here..."
              spellCheck="false"
              onChange={(event) => {
                setContentText(event.target.value);
              }}
            ></textarea>
            <Link to="/Anarchy-Forum">
              <input
                type="submit"
                value="Submit"
                className="btn btn-blue cursor-pointer m-2 w-5/6"
                onClick={() => {
                  handleSubmit();
                }}
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
