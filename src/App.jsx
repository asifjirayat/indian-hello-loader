import { useState } from "react";
import IndianHelloLoader from "./components/IndianHelloLoader.jsx";

const App = () => {
  const [theme, setTheme] = useState("auto");

  return (
    <div>
      <h1>Indian Hello Loader</h1>

      <div style={{ margin: "2rem 0" }}>
        <button onClick={() => setTheme("auto")}>Auto (System)</button>
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>

      <IndianHelloLoader theme={theme} />
    </div>
  );
};

export default App;
