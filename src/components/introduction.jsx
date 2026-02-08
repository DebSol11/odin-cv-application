import { useState } from "react";
import "../styles/style.css";

function Intro() {
  let [name, setName] = useState("");
  let [purpose, setPurpose] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePurposeChange(e) {
    setPurpose(e.target.value);
  }

  return (
    <div className="main-container">
      <div className="intro">
        <h1>Introduction</h1>
        <div className="flex-container">
          <IntroNameInput name={name} handleNameChange={handleNameChange} />
        </div>
        <div className="flex-container">
          <IntroPurposeInput
            purpose={purpose}
            handlePurposeChange={handlePurposeChange}
          />
        </div>
      </div>
      <div className="intro-render">
        <TemplateA4 name={name} purpose={purpose}/>
      </div>
    </div>
  );
}

function TemplateA4({ name, purpose }) {
  return (
    <div class="a4-page">
      <h1>{name}</h1>
      <p>
        {purpose}
      </p>
      <p>
        Additional text can be included to further illustrate the layout and
        styling.
      </p>
    </div>
  );
}

function IntroNameInput({ name, handleNameChange }) {
  return (
    <div className="intro-name-input">
      <div className="intro-container">
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
      <div className="intro-container">
        <label htmlFor="purpose">Purpose of writing: </label>
        <textarea
          rows={10}
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

export { Intro, IntroNameRender, IntroPurposeRender };
