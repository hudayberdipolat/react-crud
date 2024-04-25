import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import ListPost from "./pages/posts/ListPost";
import CreatePost from "./pages/posts/CreatePost";
import EditPost from "./pages/posts/EditPost";
import AboutPage from "./pages/about/About";


function App() {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<ListPost/>}></Route>
                    <Route path="posts/create" element={<CreatePost/>}></Route>
                    <Route path="posts/id/edit" element={<EditPost/>}></Route>
                    <Route path="about" element={<AboutPage/>}></Route>
                </Route>
            </Routes>
        
        </BrowserRouter>
      </>
  );
}

export default App;
