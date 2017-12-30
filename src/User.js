import React, { Component } from "react";

import Repos from "./Repos";
import Followers from "./Followers";
import UserBar from "./UserBar";
import Following from "./Following";

export default class User extends Component {
  render() {
    return (
      <div
        style={{
          borderTop: "1px solid grey",
          margin: "0px 10px 0px 10px"
        }}
      >
        <UserBar user={this.props.user} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 15
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1
            }}
          >
            <span onClick={this.props.fetchRepos}>
              {this.props.user.public_repos}
            </span>
            <span onClick={this.props.fetchRepos}> PUBLIC REPOS</span>
            <Repos repos={this.props.repos} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1
            }}
          >
            <a onClick={this.props.fetchFollowers}>
              {this.props.user.followers}
            </a>
            <a onClick={this.props.fetchFollowers}> FOLLOWERS</a>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline"
              }}
            >
              <Followers
                fetchUser={this.props.fetchUser}
                followers={this.props.followers}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1
            }}
          >
            <a onClick={this.props.fetchFollowing}>
              {this.props.user.following}
            </a>
            <a onClick={this.props.fetchFollowing}> FOLLOWING</a>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "baseline"
              }}
            >
              <Following
                fetchUser={this.props.fetchUser}
                following={this.props.following}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
