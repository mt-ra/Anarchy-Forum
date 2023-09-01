import { Link } from "react-router-dom";

export default function PostCard(props: {
  postId: number;
  sender: string;
  title: string;
  timeSent: number;
}) {

  let displayedTitle = "";
  if (props.title.length > 30) {
    displayedTitle = props.title.substring(0,30) + "...";
  } else {
    displayedTitle = props.title;
  }
  return (
    <Link to={`/Anarchy-Forum/post/${props.postId}`}>
      <div className="mx-2 my-2 bg-slate-700 px-3 py-3 hover:bg-slate-600">
        <h1 className="text-xl">{displayedTitle}</h1>
        <p>{props.sender}</p>
      </div>
    </Link>
  );
}
