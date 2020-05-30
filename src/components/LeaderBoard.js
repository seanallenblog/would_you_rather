import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoardCard from './LeaderBoardCard';

class LeaderBoard extends Component {

  render () {
    const { sortedUserIds } = this.props;
    return (
      <ul className="cards">
        {
          sortedUserIds.map((id, idx) => (
            <li key={id}>
              <LeaderBoardCard rank={idx + 1} id={id} />
            </li>
          ))
        }
      </ul>
    );
  }
}

function mapStateToProps ({ users }) {
  const sortedUserIds = buildSortedOrder(users);
  return {
    sortedUserIds
  }
}

function buildSortedOrder (users) {
  return Object.keys(users).sort((a, b) => {
    return (Object.keys(users[b].answers).length + users[b].questions.length) -
      (Object.keys(users[a].answers).length + users[a].questions.length)
  })
}

export default connect(mapStateToProps)(LeaderBoard);