import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </>
    );
  }
}

export default App;
