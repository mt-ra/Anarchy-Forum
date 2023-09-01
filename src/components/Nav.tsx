import React from "react";

import Logo from "./Logo";
import PostButton from "./PostButton";
import ClearButton from "./ClearButton";

export default function Nav() {
  return (
    <div className="bg-slate-800 w-screen flex flex-row py-2 px-2" id="navBar">
      <Logo />
      <div className="flex-grow"></div>
      <PostButton />
      <ClearButton />
    </div>
  );
}
