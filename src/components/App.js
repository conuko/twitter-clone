import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {/* if loading is still true, nothing will be rendered. Else, the Dashboard will be rendered: */}
        {this.props.loading === true
          ? null
          : <NewTweet />
        }
      </div>
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