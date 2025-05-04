// import FirstChild from "./components/FirstChild";
// import { Navbar } from "./components/Navbar";

import Code2UseEffect from "./components/Code2UseEffect";
import Code3 from "./components/Code3";

function App() {
  // const eventHandler = () => alert("Clicked!");

  return (
    <>
      {/* <Navbar logoName="GYM" />
    <Navbar logoName="Brother's GYM" />
    <Navbar  />
    <ChildComponents name="XYZ" age="23" />
    <FirstChild name="Ganesh" age="xyz" />
    <FirstChild  />
    <ChildComponents onClick={eventHandler}></ChildComponents> */}

      {/* <Code2UseEffect /> */}
      <Code3 />
    </>
  );
}

function ChildComponents({ onClick }) {
  return (
    <>
      <button onClick={onClick}>Click me </button>
    </>
  );
}

export default App;
