import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/feed">Post feed</Link></li>
        <li>
          <a 
            href="" 
            onClick={ this.onLogoutClick.bind(this) } 
            className="nav-link">
            <img 
              className="rounded-circle"
              src={ user.avatar } 
              alt={ user.name } 
              style={{ width: '25px', marginRight: '5px' }} 
              title="You must have a Gravatar connected to your email to display an image"/>
              {' '}
              Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li><Link to="/profiles">Developers</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar bg-dark">
          <h1>
            <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
          </h1>
          { isAuthenticated? authLinks : guestLinks }
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  auth: state.auth
}

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);