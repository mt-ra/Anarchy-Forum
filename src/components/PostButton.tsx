import { useNavigate } from "react-router-dom";

export default function PostButton() {
  let navigate = useNavigate();

  return (
    <button
      className="btn btn-blue m-2"
      onClick={() => {
        navigate("/Anarchy-Forum/post/create");
      }}
    >
      Create a Post
    </button>
  );
}
