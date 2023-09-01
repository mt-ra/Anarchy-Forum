export default function CommentCard(props: {
  info: {
    commentId: number;
    sender: string;
    comment: string;
    timeSent: number;
  };
}) {
  return (
    <div className="rounded-lg flex flex-row bg-slate-700 my-2">
      <div className="rounded-l-lg bg-blue-900 w-40 px-4 py-2 flex-shrink-0">
        <p className="text-center">{props.info.sender}</p>
      </div>
      <div className="py-3 px-5 flex-grow">
        <p>{props.info.comment}</p>
        <p className="text-gray-400">sent at {props.info.timeSent}s</p>
      </div>
    </div>
  );
}
