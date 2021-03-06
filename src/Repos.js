import React, { Component } from "react";

export default class Repos extends Component {
  render() {
    return this.props.repos.data.map(repo => (
      <a
        href={repo.svn_url}
        target="_blank"
        style={{ textDecoration: "none", margin: 5 }}
        alt=""
        key={repo.id}
      >
        {repo.full_name} {repo.stargazers_count}
      </a>
    ));
  }
}
