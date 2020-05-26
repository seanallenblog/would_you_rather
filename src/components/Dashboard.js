import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Questions from './Questions';

class Dashboard extends Component {
  render () {
    return (
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="unanswered" title="Unanswered">
            <Questions />
          </Tab>
          <Tab eventKey="answered" title="Answered">
            <Questions />
          </Tab>

        </Tabs>
      </div>
    );
  }
}

export default Dashboard;