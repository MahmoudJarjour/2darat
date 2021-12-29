import Router from "./Routes/Router";
import { Suspense } from "react";
import "./App.css";

function App() {
  return (
    <Suspense fallback="loading ...">
      <Router />
    </Suspense>
  );
}

export default App;
