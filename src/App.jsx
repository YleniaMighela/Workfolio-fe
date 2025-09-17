// importo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo il layout
import DefaultLayout from "./layout/DefaultLayout";

// importo i componenti
import ProjectDetail from "./components/ProjectDetail/ProjectDetail"
import ProjectList from "./components/ProjectList/ProjectList";

// importo le paginr
import HomePage from "./pages/HomePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            {/* <Route path="/aboutme" element={<AboutMe />} /> */}

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
