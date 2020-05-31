import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleLogout } from '../actions/authedUser';
import Button from 'react-bootstrap/Button';

class AuthedUserControls extends Component {

  state = {
    toHome: false
  }

  logoutUser = () => {
    const { dispatch } = this.props;
    const id = null;
    dispatch(handleLogout(id));
    this.setState(() => ({
      toHome: true
    }))
  }

  render () {
    const { user } = this.props;
    const { toHome } = this.state;
    const path = require(`../lib/images/${user.avatarURL}`);


    if (toHome) {
      return <Redirect to='/' />
    }

    return (
      <ul className='authed-controls'>
        <li className='sm-avatar-container'>
          <img className='avatar-img-sm' src={path} alt='user avatar' />
        </li>
        <li>Hello, {user.name}!</li>
        <li>
          <Button
            variant='info'
            size='sm'
            className='logout-btn'
            onClick={this.logoutUser}>Logout</Button>
        </li>
      </ul>
    );
  }
}

function mapStateToProps ({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user
  }
}

export default connect(mapStateToProps)(AuthedUserControls);