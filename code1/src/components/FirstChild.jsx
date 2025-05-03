import React from 'react'

const FirstChild = ({name="xyz" , age='45'}) => {
  return (
    <div>
      <h1>Name :{name}  , Age : {age}  </h1>
    </div>
  )
}
// FirstChild.defaultProps ={
//      name :"XYZ",
//      age:45

// }

export default FirstChild

// Destructuring props