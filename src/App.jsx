
// importo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ProjectList from "./components/ProjectList";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<DefaultLayout />} > */}
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectList />} />
          {/* <Route path="/progetti/:id" element={<ProjectCard />} />
            <Route path="/aboutme" element={<AboutMe />} /> */}

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
