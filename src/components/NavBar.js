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
        <div className='navbar clearfix ourNavBar'>
          <ul>
            <li ><Link to='/' >All Articles< /Link></li>
        {this.props.topics.map((topic, i) => {
          return <li key={i}><NavLink topic={topic.slug} /></li>;
        })
      }
          </ul>
        </div>
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
