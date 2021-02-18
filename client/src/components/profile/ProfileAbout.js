import React, { Component } from "react";
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstname = profile.user.name.trim().split(' ')[0];
    // Skill List
    const skills = profile.skills.map((skill, index) => (
      <div key={ index } className="p-3">
        <i className="fa fa-check"/> {skill}
      </div>
    ));

    return (
      <div className="profile-about bg-light p-2">
        <h2 className="text-primary">{ firstname }'s Bio</h2>
        <p>
          { isEmpty(profile.bio) ? (<splan>{ firstname } not have a bio.</splan>) : (<splan>{ profile.bio }</splan>) }
        </p>
        <div className="line"></div>
        <h2 className="text-primary">Skill Set</h2>
        <div className="skills">
          { skills }
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileAbout;