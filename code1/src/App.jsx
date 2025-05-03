import FirstChild from "./components/FirstChild"
import { Navbar } from "./components/Navbar"

function App() {


  return (
    <>
    <Navbar logoName="GYM" />
    <Navbar logoName="Brother's GYM" />
    <Navbar  />
    {/* <ChildComponents name="XYZ" age="23" /> */}
    {/* <FirstChild name="Ganesh" age="xyz" />
    <FirstChild  /> */}
    </>
  )
}

// function ChildComponents(porps){
//   return(
//     <h1>Name :{props.name}  , Age : {props.age}  </h1>
    
//   )
// }

export default App
