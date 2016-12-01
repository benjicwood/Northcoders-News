import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import NavLink from './NavLink';

const NavBar = React.createClass({
  componentWillMount: function () {
    this.props.fetchTopics();
  },
  render: function () {
    if (!this.props.topics) {
      return (
        <div>Loading Topics...</div>
    );
    } else {
      return (
        <nav className="nav has-shadow">
  <div className="container">
    <div className="nav-left">
      <a className="nav-item is-tab is-info"><Link to='/' >all articles < /Link></a>
        {this.props.topics.map((topic, i) => {
          return <a className="nav-item is-tab is-info" key={i}><NavLink topic={topic.slug} /></a>;
        })
      }
    </div>
  </div>
</nav>
    );
    }
  }
});
function mapStateToProps (state) {
  if(!state || !state.topics) return {};
  return {
    topics: state.topics
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTopics: () => {
      dispatch(actions.fetchTopics());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
