import { requestClear } from "./routeWrappers";

export default function ClearButton() {
  return (
    <button
      className="btn btn-red m-2 mr-4"
      onClick={() => {
        alert("You are become death, the destroyer of worlds");
        alert("(database has been wiped)");
        requestClear();
      }}
    >
      Nuke
    </button>
  );
}
