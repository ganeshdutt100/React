// import FirstChild from "./components/FirstChild";
// import { Navbar } from "./components/Navbar";

import Code2UseEffect from "./components/Code2UseEffect";

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

      <Code2UseEffect />
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
