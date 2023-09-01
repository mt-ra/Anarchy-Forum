import { BrowserRouter, Route, Routes } from "react-router-dom";

// always on the page
import Nav from "./components/Nav";
import PostList from "./components/PostList";

// depends on the route
import PostCreator from "./components/PostCreator";
import PostDetails from "./components/PostDetails";
import NoPosts from "./components/NoPosts";
import PostEdit from "./components/PostEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflowx-hidden overflowy-scroll">
        <Nav />
        <div className="flex flex-row bg-slate-1000" id="mainBody">
          <PostList />
          <div className="h-full flex-grow flex-shrink">
            <Routes>
              <Route path="/Anarchy-Forum" element={<NoPosts />} />
              <Route path="/Anarchy-Forum/post/:postid" element={<PostDetails />} />
              <Route path="/Anarchy-Forum/post/create" element={<PostCreator />} />
              <Route path="/Anarchy-Forum/post/:postid/edit" element={<PostEdit />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
