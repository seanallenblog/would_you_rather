import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Question from './Question';


class Dashboard extends Component {
  render () {
    const { unansweredIds, answeredIds } = this.props;

    return (
      <div>
        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
          <Tab eventKey="unanswered" title="Unanswered">
            <ul className='cards'>
              {
                unansweredIds.map((id) => (
                  <li key={id}>
                    <Question answered={false} id={id} />
                  </li>
                ))
              }
            </ul>
          </Tab>
          <Tab eventKey="answered" title="Answered">
            <ul className='cards'>
              {
                answeredIds.map((id) => (
                  <li key={id}>
                    <Question answered={true} id={id} />
                  </li>
                ))
              }
            </ul>
          </Tab>

        </Tabs>
      </div>
    );
  }
}

function mapStateToProps ({ questions, authedUser }) {
  const questionIds = Object.keys(questions)
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const answeredIds = questionIds.filter((id) => {
    return questions[id].optionOne.votes.includes('dezmara') ||
      questions[id].optionTwo.votes.includes('dezmara');
  });

  const unansweredIds = questionIds.filter((id) => {
    return !questions[id].optionOne.votes.includes(authedUser) &&
      !questions[id].optionTwo.votes.includes(authedUser);
  });

  return {
    answeredIds,
    unansweredIds,
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard);