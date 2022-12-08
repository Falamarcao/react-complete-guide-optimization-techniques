import { useState, useCallback, useMemo } from "react";
import DemoOutput from "./Demo/DemoOutput";
import Button from "./components/UI/Button";

import "./App.css";
import DemoList from "./Demo/DemoList";

function App() {
  console.log("APP RUNING");

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToogle, setAllowToogle] = useState(false);
  const [listTitle, setListTitle] = useState("My List");

  const handleAllowToggle = () => setAllowToogle(true);

  const handleToogleParagraph = useCallback(() => {
    if (allowToogle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToogle]);

  const handleChangeTitle = useCallback(() => setListTitle("New Title"), []);

  // Best Practices: only memoize [useMemo] data when it's computing expensive.
  const items = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <>
      <div className="app">
        <h1>Hi there!</h1>
        <DemoOutput show={showParagraph} />
        <Button onClick={handleAllowToggle}>Allow Toggle</Button>
        <Button onClick={handleToogleParagraph}>Toggle Paragraph!</Button>
      </div>
      <div className="app2">
        <DemoList title={listTitle} items={items} />
        <Button onClick={handleChangeTitle}>Change List Title</Button>
      </div>
    </>
  );
}

export default App;
