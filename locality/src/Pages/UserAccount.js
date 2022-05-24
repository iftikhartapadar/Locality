import React from "react";
import "../stylings/UserAccount.css";
import "../App.css";
import {
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import { Auth } from "../Auth/Auth";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function UserAccount(props) {
  let auth = new Auth();

  let onSignoutClick = () => {
    auth.signOut();
    props.onAuthStateChanged();
  };
  const PrettoSlider = withStyles({
    root: {
      color: "#104432",
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "white",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  return (
    <div className="ua-page">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>

    <div className="ua-container">
      <div className="ua-toggle">
        <Button
          variant="primary"
          size="lg"
          href="/UserAccount"
          className="toggle-btn">
          Account Settings
        </Button>
        <Button
          variant="primary"
          size="lg"
          href="/Bookmarks"
          className="toggle-btn">
          Bookmarks
        </Button>
        <Button
          variant="primary"
          size="lg"
          onClick={onSignoutClick}
          href="/Homepage"
          className="toggle-btn">
          Sign out
        </Button>
      </div>
      <div className="settings-container">
        <Container>
          <ArrowBackIcon className="back-btn" fontSize="large" onClick={event =>  window.location.href='/Homepage'}></ArrowBackIcon>
          <h1 className="ua-title">ACCOUNT SETTINGS</h1>

          <div>
            <Row>
              <Col>
                <h3 className="ua-inputtitle">Language</h3>
              </Col>
              <Col>
                <DropdownButton
                  as={ButtonGroup}
                  align={{ lg: "end" }}
                  title="Choose a language setting"
                  className="ua-button"
                >
                  <Dropdown.Item eventKey="1">Spanish</Dropdown.Item>
                  <Dropdown.Item eventKey="2">French</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Korean</Dropdown.Item>
                  <Dropdown.Item eventKey="2">German</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Arabic</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="ua-inputtitle">Font Size</h3>
              </Col>
              <Col>
                <Button variant="primary" size="sm" className="ua-button">
                  Small
                </Button>
                <Button variant="primary" size="md" className="ua-button">
                  Medium
                </Button>
                <Button variant="primary" size="lg" className="ua-button">
                  Large
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="ua-inputtitle">Notifications</h3>
              </Col>
              <Col>
                <Button variant="primary" className="ua-button">
                  Events Near Your Area
                </Button>
                <Button variant="primary" className="ua-button">
                  Events You May Like
                </Button>
                <Button variant="primary" className="ua-button">
                  Trending Events
                </Button>
              </Col>
            </Row>
            <Row className="ua-slider">
              <Col>
                <h3 className="ua-inputtitle">Event Proximity (miles)</h3>
              </Col>
              <Col>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  defaultValue={50}
                  style={{ marginTop: "1.5%" }}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
    </div>
  );
}

export default UserAccount;
