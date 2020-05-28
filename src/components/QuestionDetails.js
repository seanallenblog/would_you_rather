import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Avatar from './Avatar';
import FullPoll from './FullPoll';


class QuestionDetails extends Component {

  render () {
    console.log(this.props);
    const { question, user } = this.props;

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
  const user = users[question.author];

  return {
    question,
    user
  }
}

export default connect(mapStateToProps)(QuestionDetails);