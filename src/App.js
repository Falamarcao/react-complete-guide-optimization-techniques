import { useState, useCallback } from "react";
import DemoOutput from "./Demo/DemoOutput";
import Button from "./components/UI/Button";

import "./App.css";

function App() {
  console.log("APP RUNING");

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToogle, setAllowToogle] = useState(false);

  const handleAllowToggle = () => setAllowToogle(true);

  const handleToogleParagraph = useCallback(() => {
    if (allowToogle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToogle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={handleAllowToggle}>Allow Toggle</Button>
      <Button onClick={handleToogleParagraph}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
