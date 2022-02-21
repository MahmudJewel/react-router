import { Container, Row } from "react-bootstrap";
import "./assets/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigations";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import NoPage from "./pages/NoPage";
import Under1 from "./pages/Under1";
import Under2 from "./pages/Under2";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Container className="text-center">
        {/* multiple page router  */}
        <Routes>
          <Route index element={<Home />} />
          {/* single page router  */}
          <Route path="/1" element={<Page1 />}>
            <Route path="un-1" element={<Under1 />} />
            <Route path="un-2" element={<Under2 />} />
          </Route>

          <Route index element={<Home />} />
          {/* <Route path="/1" element={<Page1 />} /> */}
          <Route path="/2" element={<Page2 />} />
          <Route path="/un-1" element={<Under1 />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
