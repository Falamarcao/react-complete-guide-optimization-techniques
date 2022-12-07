import { memo } from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");

  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default memo(DemoOutput); // only rerender if component change e.g. props.show
