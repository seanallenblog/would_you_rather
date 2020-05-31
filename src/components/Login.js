import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/authedUser';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const path = require(`../lib/images/react-redux-logo.jpeg`);

class Login extends Component {
  state = {
    value: 'dezmara'
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState(() => ({ value }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = this.state;
    dispatch(handleLogin(value));
  }

  render () {
    const { userIds, users } = this.props;
    console.log(this.state);

    return (
      <Card>
        <Card.Header
          style={{
            'textAlign': 'center',
            'fontSize': '1rem',
            'fontWeight': 'bold'
          }}><p>Welcome to the Would You Rather App!</p>
          <p>Please sign in to continue</p>
        </Card.Header>
        <Card.Body>
          <img
            src={path}
            style={{
              'width': '300px',
              'display': 'block',
              'margin': '0 auto'
            }}
            alt='react-redux-logo' />
          <form onSubmit={this.handleSubmit}>
            <select
              className='login-select'
              value={this.state.value}
              onChange={this.handleChange}>
              {
                userIds.map((id) => (
                  <option key={id} value={users[id].id}>
                    {users[id].name}
                  </option>
                ))
              }
            </select>
            <Button className='sign-in-btn' type='submit'>Sign In</Button>
          </form>
        </Card.Body>
      </Card >
    );
  }
}

function mapStateToProps ({ users }) {
  const userIds = Object.keys(users);
  return {
    users,
    userIds
  }
}

export default connect(mapStateToProps)(Login);