import { useState } from "react";
import "../styles/style.css";

export default function Intro() {
  let [name, setName] = useState("");
  let [purpose, setPurpose] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePurposeChange(e) {
    setPurpose(e.target.value);
  }

  return (
    <div className="intro">
      <IntroNameInput name={name} handleNameChange={handleNameChange} />
      <IntroNameRender name={name} />
      <IntroPurposeInput
        purpose={purpose}
        handlePurposeChange={handlePurposeChange}
      />
      <IntroPurposeRender purpose={purpose} />
    </div>
  );
}

function IntroNameInput({ name, handleNameChange }) {
  return (
    <div className="intro-name-input">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="Please, enter your name:"
          value={name}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
}

function IntroPurposeInput({ purpose, handlePurposeChange }) {
  return (
    <div className="intro-purpose-input">
      <div>
        <label htmlFor="purpose">Purpose of writing: </label>
        <input
          type="text"
          placeholder="Please, enter the purpose for writing this letter:"
          value={purpose}
          onChange={handlePurposeChange}
        />
      </div>
    </div>
  );
}

function IntroNameRender({ name }) {
  return (
    <div className="intro-render">
      <h1>{name}</h1>
    </div>
  );
}

function IntroPurposeRender({ purpose }) {
  return (
    <div className="intro-render">
      <h1>{purpose}</h1>
    </div>
  );
}
