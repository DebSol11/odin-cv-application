import { useState } from "react";
import "../styles/style.css";
import "../styles/templateA4Styles.css";

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
    <div className="a4-page">
      <section className="contact-container">
        <div className="contact-item">
          <img
            src="../public/img/elderly_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Person icon"
          />
          <p>Michael Weber</p>
        </div>
        <div className="contact-item">
          <img src="../public/img/phone-call.svg" alt="Phone icon" />
          <p>+49 176 42986876876</p>
        </div>
        <div className="contact-item">
          <img
            src="../public/img/local_convenience_store_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Homepage icon"
          />
          <a href="https://www.openwingproject.com">openWingProject.com</a>
        </div>
        <div className="contact-item">
          <img src="../public/img/mail.svg" alt="Mail icon" />
          <a href="mailto:webermichael@openwingproject.com">webermichael@openwingproject.com</a>
        </div>
      </section>
      <section className="intro">
        <h1>Bewerbungsschreiben zum Anfänger Oberboss bei Ihnen,</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur
          enim, corrupti qui dicta suscipit voluptate labore culpa animi quo,
          hic harum commodi modi dolore soluta sed velit odit nihil?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt optio rem
          numquam? Praesentium dolorum quibusdam veritatis nemo quia nulla, est
          magnam alias suscipit eum amet voluptatem exercitationem labore quam
          molestias eveniet, rem laborum odit consectetur expedita at dicta!
          Culpa, vitae hic. Rem necessitatibus, recusandae eligendi et molestias
          similique repellendus iure?
        </p>
      </section>
      <section className="edu">
        <h2>Relevante Bildung</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus neque, a sed debitis alias fugit ullam explicabo qui maxime deleniti et adipisci. Id omnis magni aliquam blanditiis tempore consequatur hic quod fuga perferendis, velit eaque temporibus voluptatibus natus veritatis voluptate, dolorum fugiat dolores amet nisi in? Tempore voluptatibus assumenda, velit nam quae recusandae sint autem, facilis nesciunt voluptate aliquam nisi cupiditate est voluptas rerum ipsam facere expedita numquam vel?</p>
      </section>
      <section className="exp">
        <h2>Erfahrung</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus quam nostrum in. Dolores autem numquam quis exercitationem, quo enim fugit aliquid itaque necessitatibus beatae reprehenderit dolorem alias voluptatem iusto voluptatum ullam facere culpa veritatis atque? Vitae possimus eos cupiditate, esse vero soluta sunt earum quam, est omnis quas illum!</p>
      </section>
      <footer>
        Hauptstr. 11, 96168 Niederfurzheim, Deutschland
      </footer>
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
