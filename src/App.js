import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.component} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
