import React, { useState } from "react";
import "../stylings/CreatingEvent.css";
import "../App.css";
import { MyFirebase } from "../myFirebase";
import { storage } from "../myFirebase";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import { Row, Col, Container } from "react-bootstrap";
import icon from "../Assets/Locality_Logo.png";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Dropdown } from "@fluentui/react/lib/Dropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function CreatingEvent() {

  const allInputs = { imgUrl: '' }
  const [imageAsFile, setImageAsFile] = useState("")
  const [selected, setSelected] = useState();

  const [state, setState] = useState({
    creator: "",
    eventName: "",
    date: "",
    description: "",
    location: "",
    tags: "",
    imgUrl: icon
  });

  const dropdownOptions = [
    { key: "freeFood", text: "Free food" },
    { key: "under21", text: "Under 21" },
    { key: "cultural", text: "Cultural" },
    { key: "party", text: "Party" },
    { key: "volunteering", text: "Volunteering" },
    { key: "mexico", text: "Mexico" },
  ];

  console.log(imageAsFile)
  const handleImageAsFile = (e) => {
    const image = e.target.files[0]
    setImageAsFile(imageFile => (image))
  }

  console.log('start of upload')
  console.log(imageAsFile.name)
  console.log(imageAsFile)
  if (imageAsFile !== '') {
    const uploadTask = storage.ref('/images/' + `${imageAsFile.name}`).put(imageAsFile);
    uploadTask.snapshot.ref.getDownloadURL().then(
      function (downloadURL) {
        setState({
          ...state,
          imgUrl: downloadURL
        })
      })
    console.log(state.imgUrl)
  }


  let submitHandler = (event) => {
    event.preventDefault();
    console.log(
      "Creator: " +
      state.creator +
      "\nEvent Name: " +
      state.eventName +
      "\nDate: " +
      state.date +
      "\nDescription: " +
      state.description +
      "\nLocation: " +
      state.location +
      "\nTags: " +
      state.tags +
      "\n URL" +
      state.imgUrl
    );

    if (
      state.creator !== "" &&
      state.eventName !== "" &&
      state.date !== "" &&
      state.description !== "" &&
      state.location !== "" &&
      state.tags !== ""
    ) {
      let db = new MyFirebase();
      db.createEvent(
        state.eventName,
        state.description,
        state.date,
        state.tags,
        state.location,
        state.creator,
        state.imgUrl
      );
      setState({
        creator: "",
        eventName: "",
        date: "",
        description: "",
        location: "",
        tags: "",
        imgUrl: ""
      });
    }
  };

  let onChangeDropdown = (e, selectedOption) => {
    console.log(selectedOption.text);
    setState({
      ...state,
      tags: selectedOption.text,
    })
  }

  let changeHandler = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const classes = useStyles();

  return (

    <div className="cevents">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>
      
      <div className="ce-container">
      <Container>
        <div>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet"></link>
        </div>
        <ArrowBackIcon className="back-btn" fontSize="large" onClick={event =>  window.location.href='/Homepage'}></ArrowBackIcon>
        <h1 className="ce-title">CREATE NEW EVENT</h1>

        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={(e) => submitHandler(e)}>
          <Row>
            <Col>
              <h3 className="ce-inputtitle">Creator</h3>
            </Col>
            <Col>
              <TextField
                className = "ce-textField"
                id="standard-basic"
                type="text"
                name="creator"
                label="Creator:"
                value={state.creator}
                onChange={(e) => changeHandler(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="ce-inputtitle">Title/Name of Event</h3>
            </Col>
            <Col>
              <TextField
                className = "ce-textField"
                id="standard-basic"
                type="text"
                name="eventName"
                label="Event Name:"
                value={state.eventName}
                onChange={(e) => changeHandler(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="ce-inputtitle">Event Date</h3>
            </Col>
            <Col>
              <TextField
                className = "ce-textField"
                id="standard-basic"
                type="text"
                name="date"
                label="Event Date:"
                value={state.date}
                onChange={(e) => changeHandler(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="ce-inputtitle">Event Description</h3>
            </Col>
            <Col>
              <TextField
                className = "ce-textField"
                id="standard-basic"
                type="text"
                name="description"
                label="Description:"
                value={state.description}
                onChange={(e) => changeHandler(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="ce-inputtitle">Event Location</h3>
            </Col>
            <Col>
              <TextField
                className = "ce-textField"
                id="standard-basic"
                type="text"
                name="location"
                label="Location:"
                value={state.location}
                onChange={(e) => changeHandler(e)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="ce-inputtitle">Event Tags</h3>
            </Col>
            <Col>
            <Dropdown
                className = "tag-search"
                selectedKey={selected ? selected.key : undefined}
                id="standard-basic"
                type="text"
                name="tags"
                placeholder="Choose tags..."
                onChange={onChangeDropdown}
                options={dropdownOptions}
              />
            </Col>
          </Row>
          <Row>
          <Col>
          <h3 className="ce-inputtitle">Image</h3>
          </Col>
            <Col>
              <input
                accept="image/*"
                className={classes.input}
                id="image-upload"
                multiple
                type="file"
                onChange={handleImageAsFile}
              />
              <label htmlFor="contained-button-file">
              </label>
            </Col>
          </Row>
          <Button variant="primary" class="ce-submit" type="submit" value="Submit">
            Submit
          </Button>
        </form>
      </Container>
      </div>
    </div>
  );
}

export default CreatingEvent;
