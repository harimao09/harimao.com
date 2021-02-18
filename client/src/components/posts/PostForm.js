import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import Spinner from '../common/Spinner';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { ADD_POST } from '../../actions/postActions';

class PostForm extends Component {
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

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
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
          <h3>Say Something...</h3>
        </div>
        <form onSubmit={ this.onSubmit } className="form my-1">
          <TextAreaFieldGroup
            placeholder="Create a post"
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

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.Object.isRequired,
  errors: PropTypes.Object.isRequired
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);