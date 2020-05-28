import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';
import Button from 'react-bootstrap/Button';



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
    const { question } = this.props;
    const { selectedOption } = this.state;
    console.log(this.state);
    return (
      <div className="question-details">
        <p>
          Would you rather
        </p>
        <Fragment>
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
            <p>OR</p>
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
      </div>
    );
  }
}

function mapStateToProps ({ questions, authedUser }, props) {
  const question = questions[props.qid];
  return {
    question,
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(FullPoll));