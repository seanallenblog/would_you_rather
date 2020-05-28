import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Avatar from './Avatar';
import PollPreview from './PollPreview';

class Question extends Component {
  render () {
    const { question, user } = this.props;

    return (
      <Card>
        <Card.Header>{user.name} asks:</Card.Header>
        <div className='question-info-container'>
          <Avatar url={user.avatarURL} />
          <PollPreview qid={question.id} />
        </div>
      </Card>
    );
  }
}

function mapStateToProps ({ questions, users }, { id }) {
  const question = questions[id];
  const user = users[question.author];

  return {
    question,
    user
  }
}

export default connect(mapStateToProps)(Question);