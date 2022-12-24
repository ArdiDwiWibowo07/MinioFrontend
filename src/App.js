import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from "./components/Tables";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Table/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
