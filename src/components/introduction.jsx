import { useState } from "react";
import "../styles/style.css";
import "../styles/templateA4Styles.css";

let cvDefault = {
  name: "Michael Weber",
  phoneNumber: "+4917642999930",
  webSite: "openWingProject.com",
  email: "webermichael@openwingproject.com",
  letterTitle: "Bewerbungsschreiben zum Anfänger Oberboss bei Ihnen,",
  letterIntro:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur enim, corrupti qui dicta suscipit voluptate labore culpa animi quo, hic harum commodi modi dolore soluta sed velit odit nihil? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur enim, corrupti qui dicta suscipit voluptate labore culpa animi quo, hic harum commodi modi dolore soluta sed velit odit nihil?",
  letterEdu:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus neque, a sed debitis alias fugit ullam explicabo qui maxime deleniti et adipisci. Id omnis magni aliquam blanditiis tempore consequatur hic quod fuga perferendis, velit eaque temporibus voluptatibus natus veritatis voluptate, dolorum fugiat dolores amet nisi in? Tempore voluptatibus assumenda, velit nam quae recusandae sint autem, facilis nesciunt voluptate aliquam nisi cupiditate est voluptas rerum ipsam facere expedita numquam vel?",
  letterExp:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus neque, a sed debitis alias fugit ullam explicabo qui maxime deleniti et adipisci. Id omnis magni aliquam blanditiis tempore consequatur hic quod fuga perferendis, velit eaque temporibus voluptatibus natus veritatis voluptate, dolorum fugiat dolores amet nisi in? Tempore voluptatibus assumenda, velit nam quae recusandae sint autem, facilis nesciunt voluptate aliquam nisi cupiditate est voluptas rerum ipsam facere expedita numquam vel?",
  address: "Hauptstr. 21, 96178 Pommersfelden, Deutschland",
};

function Intro() {
  let [name, setName] = useState("");
  let [letterIntro, setLetterIntro] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLetterIntroChange(e) {
    setLetterIntro(e.target.value);
  }

  if (name || letterIntro) {
    return (
      <div className="main-container">
        <div className="intro">
          <h1>Introduction</h1>
          <div className="flex-container">
            <IntroNameInput name={name} handleNameChange={handleNameChange} />
          </div>
          <div className="flex-container">
            <IntroLetterIntroInput
              letterIntro={letterIntro}
              handleLetterIntroChange={handleLetterIntroChange}
            />
          </div>
        </div>
        <div className="intro-render">
          <TemplateA4 name={name} letterIntro={letterIntro}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main-container">
        <div className="intro">
          <h1>Introduction</h1>
          <div className="flex-container">
            <IntroNameInput name={name} handleNameChange={handleNameChange} />
          </div>
          <div className="flex-container">
            <IntroLetterIntroInput
              letterIntro={letterIntro}
              handleLetterIntroChange={handleLetterIntroChange}
            />
          </div>
        </div>
        <div className="intro-render">
          <TemplateA4 />
        </div>
      </div>
    );
  }

  // return (
  //   if (isLoggedIn) { return <UserGreeting />; } return <GuestGreeting />;

  // );
}

function TemplateA4({
  name = cvDefault.name,
  phoneNumber = cvDefault.phoneNumber,
  webSite = cvDefault.webSite,
  email = cvDefault.email,
  letterTitle = cvDefault.letterTitle,
  letterIntro = cvDefault.letterIntro,
  letterEdu = cvDefault.letterEdu,
  letterExp = cvDefault.letterExp,
  address = cvDefault.address,
}) {
  return (
    <div className="a4-page">
      <section className="contact-container">
        <div className="contact-item">
          <img
            src="../img/elderly_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Person icon"
          />
          <p>{name}</p>
        </div>
        <div className="contact-item">
          <img src="../img/phone-call.svg" alt="Phone icon" />
          <p>{phoneNumber}</p>
        </div>
        <div className="contact-item">
          <img
            src="../img/local_convenience_store_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Homepage icon"
          />
          <a href="https://www.openwingproject.com">{webSite}</a>
        </div>
        <div className="contact-item">
          <img src="../img/mail.svg" alt="Mail icon" />
          <a href="mailto:webermichael@openwingproject.com">{email}</a>
        </div>
      </section>
      <section className="intro">
        <h1>{letterTitle}</h1>
        <p>{letterIntro}</p>
      </section>
      <section className="edu">
        <h2>Relevante Bildung</h2>
        <p>{letterEdu}</p>
      </section>
      <section className="exp">
        <h2>Erfahrung</h2>
        <p>{letterExp}</p>
      </section>
      <footer>{address}</footer>
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

function IntroLetterIntroInput({ letterIntro, handleLetterIntroChange }) {
  return (
    <div className="intro-purpose-input">
      <div className="intro-container">
        <label htmlFor="purpose">Purpose of writing: </label>
        <textarea
          rows={10}
          placeholder="Please, enter the purpose for writing this letter:"
          value={letterIntro}
          onChange={handleLetterIntroChange}
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

function IntroLetterIntroRender({ letterIntro }) {
  return (
    <div className="intro-render">
      <h1>{letterIntro}</h1>
    </div>
  );
}

export { Intro, IntroNameRender, IntroLetterIntroRender };
