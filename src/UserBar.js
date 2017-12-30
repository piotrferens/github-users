import React, { Component } from "react";

export default class UserBar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginTop: 15
        }}
      >
        <img
          src={this.props.user.avatar_url}
          style={{
            width: 50,
            height: 50,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            borderRadius: "50%"
          }}
          alt=""
        />
        <div
          style={{
            marginLeft: 20,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          <a
            href={this.props.user.html_url}
            target="blank"
            style={{ textDecoration: "none" }}
          >
            {this.props.user.login}
            {this.props.user.name ? `(${this.props.user.name})` : null}
          </a>

          <span>{this.props.user.bio}</span>
        </div>
      </div>
    );
  }
}
