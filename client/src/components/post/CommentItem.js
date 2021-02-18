import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/postActions';

class CommentItem extends Component {

  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <div className="post bg-white p-1 my-1">
        <div>
          <a href="profile.html">
            <img
              className="round-img"
              src={ comment.avatar }
              alt=""
            />
            <h4>{ comment.name }</h4>
          </a>
        </div>
        <div>
          <p className="my-1">
            { comment.text }
          </p>
          { comment.user === auth.user.id ? (
            <button onClick={ this.onDeleteClick.bind(this, postId, comment._id) } type="button" className="btn btn-danger mr-1">
              <i className="fas fa-times"/>
            </button>
            ) : null }
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.Object.isRequired,
  auth: PropTypes.Object.isRequired,
  postId: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);