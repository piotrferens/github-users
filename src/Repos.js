import React, { Component } from "react";

export default class Repos extends Component {
  render() {
    return this.props.repos.map(repo => (
      <a
        href={repo.svn_url}
        target="blank"
        style={{ textDecoration: "none" }}
        alt=""
        key={repo.id}
      >
        {repo.full_name} {repo.stargazers_count}
      </a>
    ));
  }
}
