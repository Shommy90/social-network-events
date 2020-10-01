import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import EventForm from "../../features/event/EventForm/EventForm";
import NavBar from "../../features/nav/navBar/NavBar";
import HomePage from "../../features/home/HomePage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Container>
            </>
          )}
        />
      </>
    );
  }
}

export default App;
