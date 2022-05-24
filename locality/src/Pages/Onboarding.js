import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Stack } from "@fluentui/react";
import icon from "../Assets/Locality_Logo.png";
//import background from "../Assets/Background.png";
import "../stylings/Onboarding.css";
import "../App.css";

function Onboarding() {
  const [location, setLocation] = useState("");

  return (
    <Container fluid className="onboarding-container">
      <div class="onboarding-margin">
      <div>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>
    </div>
      <Stack>
        <img src={icon} class="onboarding-img" alt="Locality_Logo"></img>

        <form class="onboarding-content">
          <input
            class="onboarding-text-input"
            type="text"
            placeholder="Enter your zip code"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          ></input>
          <a class="onboarding-submit" href="/Homepage">
            Find events!
          </a>
        </form>
        <br/>
        <a class="onboarding-signin" href="/Signin">
          Sign In/Join
        </a>
      </Stack>
      </div>
    </Container>
  );
}

export default Onboarding;
