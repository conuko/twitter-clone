import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Login from './Login';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Navbar from './Navbar';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
              <Navbar />
              {/* if loading is still true, nothing will be rendered. Else, the Dashboard will be rendered: */}
              {this.props.loading === true
                ? null
                : <div>
                    <Route path='/login' exact component={Login} />
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/tweet/:id' component={TweetPage} />
                    <Route path='/new' component={NewTweet} />
                </div>}
          </div>
        </Fragment>
      </Router>

    )
  }
}

// checks, if the initial data is still loading:
function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect()(App);