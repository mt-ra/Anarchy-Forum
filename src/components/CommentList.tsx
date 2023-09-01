import CommentCard from "./CommentCard";

export default function CommentList(props: {
  comments: {
    commentId: number;
    sender: string;
    comment: string;
    timeSent: number;
  }[];
}) {
  const commentElements = [];
  for (let com of props.comments) {
    commentElements.push(<CommentCard info={com} key={com.commentId}/>)
  }

  return (
    <div className="">
      {commentElements}
    </div>
  );
}
