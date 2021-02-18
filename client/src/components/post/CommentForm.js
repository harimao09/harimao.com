import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addComment } from '../../actions/postActions';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      errors: {}
    }

    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(newProps.errors) {
      this.setState({ errors:newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props.auth;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(postId, newComment);
    this.setState({ text:'' });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form">
        <div className="bg-primary p">
          <h3>Make a Comment...</h3>
        </div>
        <form onSubmit={ this.onSubmit } className="form my-1">
          <TextAreaFieldGroup
            placeholder="Reply to post"
            name="text"
            value={ this.state.text }
            onChange={ this.onChange }
            error={ errors.text }
          />
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.Object.isRequired,
  postId: PropTypes.String.isRequired,
  errors: PropTypes.Object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addComment })(CommentForm);