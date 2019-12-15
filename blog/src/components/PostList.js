import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts(); //call to action creator - a simple function call.
  }

  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
