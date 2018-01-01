import React from "react";

export default class Followers extends React.Component {
  render() {
    return this.props.followers.data.map(follower => (
      <div
        onClick={() => this.props.fetchUser(follower.login)}
        key={follower.id}
        style={{ display: "flex", alignItems: "center", margin: 5 }}
      >
        <img
          src={follower.avatar_url}
          style={{
            width: 50,
            height: 50,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            borderRadius: "50%"
          }}
          alt=""
        />
        <a style={{ marginLeft: 10 }}> {follower.login}</a>
      </div>
    ));
  }
}
