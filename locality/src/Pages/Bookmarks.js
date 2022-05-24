import React, { useState, useRef } from "react";
import "../stylings/Bookmarks.css";
import "../App.css";
import { Button, Card, Row, Col, Container, Modal } from "react-bootstrap";
import { MyFirebase } from "../myFirebase";
import EventIcon from "@material-ui/icons/Event";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Auth } from "../Auth/Auth";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img src={props.info.imgUrl} alt="logo" className="modal-image"></img>
        <Container>
          <Row>
            <Col>
              <Modal.Title className="modal-title">
                {props.info.Name}
              </Modal.Title>
            </Col>
            <Col>
              <a href="https://www.facebook.com/">
                <FacebookIcon
                  className="modal-share-item"
                  fontSize="large"
                ></FacebookIcon>{" "}
              </a>
              <a href="https://twitter.com/?lang=en">
                <TwitterIcon
                  className="modal-share-item"
                  fontSize="large"
                ></TwitterIcon>{" "}
              </a>
              <EventIcon
                className="modal-event-item"
                fontSize="large"
              ></EventIcon>
            </Col>
          </Row>
          <h4>{props.info.Location}</h4>
          <h4>{props.info.Date}</h4>
          <p className="modal-desc">
            <br />
            {props.info.Description}
            <br /> <br />
            Host: {props.info.Creator}
            <br />
            Tags: #{props.info.Tags}
          </p>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Remove Bookmark</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Bookmarks(props) {
  let db = new MyFirebase();
  let auth = new Auth();

  const [bookmarks, setBookmarks] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const eventDetails = useRef({});

  let onSignoutClick = () => {
    auth.signOut();
    props.onAuthStateChanged();
  };

  let getBookmarksHandler = (objects) => {
    console.log(Object.values(objects));
    setBookmarks(Object.values(objects));
  };

  if (bookmarks.length === 0) {
    db.getListOfObjects("/Users/u1", getBookmarksHandler);
  }
  let makeEventCard = (info) => {
    return (
      <Col>
        <Card className="bm-cards">
          <Card.Img variant="top" src={info.imgUrl} className="homepage-img" />
          <Card.Body>
            <Card.Title>{info.Name}</Card.Title>
            <Card.Text>{info.Description}</Card.Text>
            <Button variant="primary" onClick={() => updateEventDetails(info)}>
              More Details
            </Button>
          </Card.Body>
        </Card>
        <MyVerticallyCenteredModal
          info={eventDetails.current}
          show={modalShow}
          onHide={() => setModalShow(false)}
          animation={true}
          scrollable={true}
        />
      </Col>
    );
  };

  let updateEventDetails = (details) => {
    eventDetails.current = details;
    setModalShow(true);
  };

  return (
    <div className="bm-page">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>

    <div className="bm-container">
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
      <div className="bookmarks-container">
        <Container>
          <ArrowBackIcon className="back-btn" fontSize="large" onClick={event =>  window.location.href='/Homepage'}></ArrowBackIcon>
          <h1 className="bm-title">BOOKMARKS</h1>

          <Container fluid className="bm-cards-container">
            <Row className="bm-cards-row">
              {bookmarks.length
                ? bookmarks.map(makeEventCard)
                : "You have no bookmarks."}
            </Row>
          </Container>
        </Container>
      </div>
    </div>
    </div>
  );
}

export default Bookmarks;
