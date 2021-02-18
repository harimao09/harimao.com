import React, { Component } from "react";
import isEmpty from '../../validation/is-empty';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-md-12">
        <img
            className="round-img my-1"
            src={ profile.user.avatar }
            alt=""
          />
          <h1 className="large">{ profile.user.name }</h1>
          <p className="lead">{ profile.status } { isEmpty(profile.company) ? null : (<span>at { profile.company }</span>) }</p>
          { isEmpty(profile.location) ? null : (<p>{ profile.location }</p>) }
          <div className="icons my-1">
            { isEmpty(profile.website) ? null : (
              <a href={ profile.website } target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe fa-2x"></i>
              </a>
            )}

            { isEmpty(profile.social && profile.social.twitter) ? null : (
              <a href={ profile.social.twitter } target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            )}

            { isEmpty(profile.social && profile.social.facebook) ? null : (
              <a href={ profile.social.facebook } target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
            )}

            { isEmpty(profile.social && profile.social.linkedin) ? null : (
              <a href={ profile.social.linkedin } target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            )}

            { isEmpty(profile.social && profile.social.linkedin) ? null : (
              <a href={ profile.social.linkedin } target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            )}

            { isEmpty(profile.social && profile.social.youtube) ? null : (
              <a href={ profile.social.youtube } target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube fa-2x"></i>
              </a>
            )}

            { isEmpty(profile.social && profile.social.instagram) ? null : (
              <a href={ profile.social.instagram } target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            )}
          </div>
        </div>
      </div>  
    );
  }
}

export default ProfileHeader;