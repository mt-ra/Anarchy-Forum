import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="align-middle p-4">
      <h1 className="text-slate-400 text-3xl">
        <Link to="/">Anarchy Forum</Link>
      </h1>
    </div>
  );
}
