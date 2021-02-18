import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {

  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if(likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div className="post bg-white p-1 my-1">
        <div>
          <a href="profile.html">
            <img
              className="round-img"
              src={ post.avatar }
              alt=""
            />
            <h4>{ post.name }</h4>
          </a>
        </div>
        <div>
          <p className="my-1">
            { post.text }
          </p>
          { showActions ? (<span>
            <button onClick={ this.onLikeClick(this, post._id) } type="button" className="btn btn-light">
              <i className={classnames('fas fa-thumbs-up', {
                'text-info':this.findUserLike(post.likes)
              })}></i>
              <span>{ post.likes.length }</span>
            </button>
            <button onClick={ this.onUnlikeClick(this, post._id) } type="button" className="btn btn-light">
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${post._id}`} className="btn btn-primary">
              Comments
            </Link>
            { post.user === auth.user.id ? (
              <button onClick={ this.onDeleteClick.bind(this, post._id) } type="button" className="btn btn-danger mr-1">
                <i className="fas fa-times"/>
              </button>
            ) : null }
          </span>): null }
        </div>
      </div>
    )
  }
}

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.Object.isRequired,
  auth: PropTypes.Object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(PostItem);