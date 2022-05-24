import React, { useState } from "react";
import icon from "../Assets/Locality_Logo.png";
import "../App.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Dropdown } from "@fluentui/react/lib/Dropdown";

function HeaderBar(props) {
  const dropdownOptions = [
    { key: "all", text: "Show all events" },
    { key: "freeFood", text: "Free food" },
    { key: "under21", text: "Under 21" },
    { key: "cultural", text: "Cultural" },
    { key: "party", text: "Party" },
    { key: "volunteering", text: "Volunteering" },
    { key: "mexico", text: "Mexico" },
  ];

  const [selected, setSelected] = useState();

  let onChange = (e, selectedOption) => {
    console.log(selectedOption);
    props.showSearchResults(selectedOption.text);
  };
  if (props.user) {
    return (
      <div className="header-container">
              <div>
               <link rel="preconnect" href="https://fonts.googleapis.com"></link>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
              <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>
              </div>
        <img
          src={icon}
          alt="Locality Logo"
          class="header-img"
          onClick={(event) => (window.location.href = "/Homepage")}
        ></img>
        <Dropdown
          className="header-search"
          selectedKey={selected ? selected.key : undefined}
          onChange={onChange}
          placeholder="Filter events..."
          options={dropdownOptions}
        />
        <AddCircleIcon
          className="header-add-item"
          fontSize="large"
          onClick={(event) => (window.location.href = "/CreatingEvent")}
        ></AddCircleIcon>
        <a className="header-signin" href="/UserAccount">
          Account
        </a>
      </div>
    );
  } else {
    return (
      
      <div className="header-container">
              <div>
              <link rel="preconnect" href="https://fonts.googleapis.com"></link>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
              <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>
              </div>
        <img
          src={icon}
          alt="Locality Logo"
          class="header-img"
          onClick={(event) => (window.location.href = "/Homepage")}
        ></img>
        <Dropdown
          className="header-search"
          selectedKey={selected ? selected.key : undefined}
          onChange={onChange}
          placeholder="Filter events..."
          options={dropdownOptions}
        />
        <a className="header-signin" href="/Signin">
          Sign in
        </a>
      </div>
    );
  }
}

export default HeaderBar;
