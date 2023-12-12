import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar";
import { PageStateProvider } from "./context/PageState";
import Home from "./pages";

function App() {
  return (
    <PageStateProvider>
      <Router>
        <SideBar />
        <NavBar />
        <Home />
      </Router>
    </PageStateProvider>
  );
}

export default App;
