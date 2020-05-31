import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Avatar from './Avatar';
import FullPoll from './FullPoll';


class QuestionDetails extends Component {

  render () {
    const { question, user } = this.props;

    if (!question) {
      return <Redirect to='/404' />
    }

    return (
      <Card>
        <Card.Header>{user.name} asks:</Card.Header>
        <div className="question-info-container">
          <Avatar url={user.avatarURL} />
          <FullPoll qid={question.id} />
        </div>
      </Card>
    );
  }
}

function mapStateToProps ({ questions, users }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  const user = question ? users[question.author] : null;

  return {
    question,
    user
  }
}

export default connect(mapStateToProps)(QuestionDetails);