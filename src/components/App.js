import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Dashboard from './Dashboard';
import QuestionDetails from './QuestionDetails';
import AddQuestion from './AddQuestion';
import LeaderBoard from './LeaderBoard';
import Login from './Login';


class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }


  render () {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {
              this.props.loading
                ? <Login />
                : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                  <Route path='/questions/:id' component={QuestionDetails} />
                  <Route path='/add' component={AddQuestion} />
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);