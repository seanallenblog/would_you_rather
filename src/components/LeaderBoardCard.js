import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import StatsTile from './StatsTile';
import ScoreTile from './ScoreTile';
import Avatar from './Avatar';

class LeaderBoardCard extends Component {
  render () {
    const { user, numAsked, numAnswered, score, rank } = this.props;
    const rankMap = {
      1: 'one',
      2: 'two',
      3: 'three'
    }

    return (
      <Card>
        <Card.Header
          style={{
            'textAlign': 'center',
            'fontSize': '2rem',
            'fontWeight': 'bold'
          }}>{user.name}</Card.Header>
        <Card.Body className='leader-board'>
          <p className={`rank ${rankMap[rank]}`}><span>{rank}</span></p>
          <Avatar url={user.avatarURL} />
          <StatsTile numAsked={numAsked} numAnswered={numAnswered} />
          <ScoreTile score={score} />
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps ({ users }, { id, rank }) {
  const user = users[id];
  const numAnswered = Object.keys(user.answers).length;
  const numAsked = user.questions.length;
  const score = numAnswered + numAsked;

  return {
    user,
    numAnswered,
    numAsked,
    score,
    rank,
  }
}

export default connect(mapStateToProps)(LeaderBoardCard);