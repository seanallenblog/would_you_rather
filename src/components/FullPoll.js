import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';



class FullPoll extends Component {

  state = {
    selectedOption: null
  }

  handleChange = (e) => {
    const val = e.target.value;
    this.setState(() => ({
      selectedOption: val
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const answer = this.state.selectedOption;
    const { dispatch, qid } = this.props;

    dispatch(handleAnswerQuestion(answer, qid));

    this.setState(() => ({
      selectedOption: null
    }));


  }

  render () {
    const { question, answered } = this.props;
    const { selectedOption } = this.state;

    let optionOneVotes, optionTwoVotes, totalVotes, optionOnePercent, optionTwoPercent;

    if (answered) {
      console.log(question);
      optionOneVotes = question.optionOne.votes.length;
      optionTwoVotes = question.optionTwo.votes.length;
      totalVotes = optionOneVotes + optionTwoVotes;
      optionOnePercent = Math.round((optionOneVotes / totalVotes) * 100);
      optionTwoPercent = Math.round((optionTwoVotes / totalVotes) * 100);
    }

    console.log(this.state);

    return (
      <div className="question-details">
        {
          !answered &&
          <Fragment>
            <h3>Would you rather</h3>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type='radio'
                  name='choice'
                  value='optionOne'
                  checked={
                    selectedOption === 'optionOne'
                  }
                  onChange={(e) => this.handleChange(e)} />
                {question.optionOne.text}?
            </label>
              <label>
                <input
                  type="radio"
                  name="choice"
                  value='optionTwo'
                  checked={
                    selectedOption === 'optionTwo'
                  }
                  onChange={(e) => this.handleChange(e)} />
                {question.optionTwo.text}?
            </label>
              <div>
                <Button type='submit'>Submit</Button>
              </div>
            </form>
          </Fragment>
        }

        {
          answered &&
          <Fragment>
            <h3>Results:</h3>
            <div className='q-results'>
              <p>
                Would you rather {question.optionOne.text}?
              </p>
              <ProgressBar
                striped
                variant='success'
                label={`${optionOnePercent}%`}
                animated now={optionOnePercent} />
              <p className='out-of-votes'>{optionOneVotes} out of {totalVotes} votes</p>
            </div>
            <div className='q-results'>
              <p>
                Would you rather {question.optionTwo.text}?
              </p>
              <ProgressBar
                striped
                variant='success'
                label={`${optionTwoPercent}%`}
                animated now={optionTwoPercent} />
              <p className='out-of-votes'>{optionTwoVotes} out of {totalVotes} votes</p>
            </div>
          </Fragment>
        }
      </div>
    );
  }
}

function mapStateToProps ({ questions, authedUser }, props) {
  const question = questions[props.qid];
  const answered = question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  return {
    question,
    authedUser,
    answered
  }
}

export default withRouter(connect(mapStateToProps)(FullPoll));