import { useState } from "react";
import "../styles/style.css";

export default function Intro() {
  let [name, setName] = useState("");
  // let [purpose, setPurpose] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  // function handlePurposeChange(e) {
  //   setPurpose(e.target.value);
  // }

  return (
    <div className="intro">
      <IntroInput name={name} handleNameChange={handleNameChange} />
    </div>
  );
}

function IntroInput({ name, handleNameChange }) {
  return (
    <div className="intro-input">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="Please, enter your name:"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      {/* <div>
        <label htmlFor="purpose">Purpose of writing: </label>
        <input
          type="text"
          placeholder="Please, enter the purpose for writing this letter:"
          value={purpose}
          onChange={() => handlePurposeChange}
        />
      </div> */}
      <div className="intro-render">
        <h1>{name}</h1>
        {/* <h2>{purpose}</h2> */}
      </div>
    </div>
  );
}

// function IntroRender({ name, purpose }) {
//   return (
//     <div className="intro-render">
//       <h1>{name}</h1>
//       <h2>{purpose}</h2>
//     </div>
//   );
// }
