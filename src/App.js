import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./Components/Layouts/Layout";
import Calender from "./pages/Calender/Calender";
import Boards from "./pages/Board/Boards";
import DataGrid from "./pages/DataGrid/DataGrid";

function App() {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path="Calender" element={<Calender />}></Route>
            <Route path="Board" element={<Boards />}></Route>
            <Route path="users" element={<DataGrid />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
