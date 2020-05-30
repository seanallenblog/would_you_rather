import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';



class PollPreview extends Component {
  viewPoll = (e, qid) => {
    e.preventDefault();
    this.props.history.push(`/questions/${qid}`);
  }

  render () {
    const { qid, question } = this.props;
    return (
      <div className="question-details">
        <p>
          Would you rather
        </p>
        <p>
          {question.optionOne.text} or...
            </p>
        <Button variant='success' onClick={(e) => this.viewPoll(e, qid)}>View Poll</Button>

      </div>
    );
  }
}

function mapStateToProps ({ questions }, props) {
  const question = questions[props.qid];
  return {
    question
  }
}

export default withRouter(connect(mapStateToProps)(PollPreview));