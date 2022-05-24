import React, { useState, useRef } from "react";
import HeaderBar from "../Components/HeaderBar";
import Education from "../Components/Education";
import Footer from "../Components/Footer";
import { MyFirebase } from "../myFirebase";
import "../stylings/Homepage.css";
import "../App.css";
import { Button, Card, Row, Col, Container, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EventIcon from "@material-ui/icons/Event";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { GoogleMap, LoadScript} from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  position: "center"
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyVerticallyCenteredModal(props) {
  let db = new MyFirebase();

  let addBookmarkHandler = () => {
    db.createBookmark(
      props.info.Name,
      props.info.Description,
      props.info.Date,
      props.info.Tags,
      props.info.Location,
      props.info.Creator,
      props.info.imgUrl
    );

    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
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
                  fontSize="large"//tag teaming 
                ></TwitterIcon>{" "}
              </a>
              <EventIcon
                className="modal-event-item"
                fontSize="large"
                color="black"
              ></EventIcon>
            </Col>
          </Row>
          <h4>{props.info.Location}</h4>
          <h4>{props.info.Date}</h4>
          <Row>
            <Col>
          <LoadScript googleMapsApiKey="AIzaSyD_kTU3aRt4yxJwdbAUg8bah4VmaH9FKv0" className="google-map">
            <GoogleMap className="google-map"
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10} 
            >
              { /* Child components, such as markers, info windows, etc. */ }
              <></>
            </GoogleMap>
          </LoadScript>
          </Col>
        </Row>

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
        <Button onClick={addBookmarkHandler}>Bookmark</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Homepage(props) {
  const [modalShow, setModalShow] = useState(false);
  const [filterResults, setFilterResults] = useState([]);
  const eventDetails = useRef({});


  
  props.onAuthStateChanged();

  let updateEventDetails = (details) => {
    eventDetails.current = details;
    setModalShow(true);
  };
  let makeEventCard = (info) => {
    return (
      <Col>
        <Card className="homepage-cards">
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

  let showSearchResults = (tag) => {
    var events = props.events;
    if (tag === "Show all events") {
      setFilterResults([]);
    } else {
      var results = [];
      var i = 0;
      while (i < events.length) {
        if (events[i].Tags === tag) {
          results.push(events[i]);
        }
        i++;
      }
      setFilterResults(results);
    }
    console.log(filterResults);
  };

  let randomGenerator = () => {
    const max = props.events.length - 1;
    const rand = Math.floor(Math.random() * max);

    const details = props.events[rand];
    console.log(details);
    updateEventDetails(details);

    return (
      <MyVerticallyCenteredModal
        info={eventDetails.current}
        show={modalShow}
        onHide={() => setModalShow(false)}
        animation={true}
        scrollable={true}
      />
    );
  };

  if (filterResults.length) {
    return (
      <div className="homepage">
        
        <HeaderBar user={props.user} showSearchResults={showSearchResults} />
        <h1 className="filter-title">Here's what we found</h1>
        <Button onClick={randomGenerator}>Find random event</Button>
        <Container fluid className="homepage-cards-container">
          <Row className="homepage-cards-row">
            {filterResults.length
              ? filterResults.map(makeEventCard)
              : "Sorry, could not find events."}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="homepage">
        <div>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>
        </div>
        <HeaderBar user={props.user} showSearchResults={showSearchResults} />
        <Education />
        <Button onClick={randomGenerator}>Find random event</Button>
        <Container fluid className="homepage-cards-container">
          <Row className="homepage-cards-row">
            {props.events.length
              ? props.events.map(makeEventCard)
              : "Could not find events."}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Homepage;
