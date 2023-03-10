/*import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar
} from '@ui5/webcomponents-react';
import './App.css';*/
import { HashRouter } from "react-router-dom";
import { MyApp } from "./MyApp";
import { Tree } from "@ui5/webcomponents-react";
import {FileUploadTreeItem} from "./Detail";

function App() {
  return (
    <>
      <HashRouter>
          <MyApp />
          
      </HashRouter>
    </>
  );
}

export default App;
