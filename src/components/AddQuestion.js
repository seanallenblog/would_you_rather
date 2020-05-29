import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSaveQuestion } from '../actions/questions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class AddQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({
      [name]: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, authedUser } = this.props;
    const { optionOne, optionTwo } = this.state;

    dispatch(handleSaveQuestion(optionOne, optionTwo, authedUser));

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))

  }

  render () {
    const { optionOne, optionTwo, toHome } = this.state;

    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <Card>
        <Card.Header
          style={{
            'textAlign': 'center',
            'fontSize': '2rem',
            'fontWeight': 'bold'
          }}>Create New Question</Card.Header>
        <Card.Body>
          <div className="new-q-form">
            <p>Complete the question:</p>
            <h6>Would you rather...</h6>
            <form onSubmit={this.handleSubmit}>
              <input
                name='optionOne'
                value={optionOne}
                onChange={this.handleInput}
                placeholder='Enter Question One Text Here'
                type='text' />
              <h5 className='or-divider'><span>OR</span></h5>
              <input
                name='optionTwo'
                value={optionTwo}
                onChange={this.handleInput}
                placeholder='Enter Question Two Text Here'
                type='text' />
              <Button className='new-q-btn' type='submit'>Submit</Button>
            </form>
          </div>
        </Card.Body>
      </Card >
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(AddQuestion);