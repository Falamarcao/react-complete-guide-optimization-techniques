import { useState } from "react";
import DemoOutput from "./Demo/DemoOutput";
import Button from "./components/UI/Button";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNING");

  const handleToogleParagraph = () =>
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={handleToogleParagraph}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
