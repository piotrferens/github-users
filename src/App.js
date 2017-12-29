import React, { Component } from "react";

class App extends Component {
  state = {
    searchText: "",
    user: null,
    repos: null
  };

  onSearch = event => {
    this.setState({ searchText: event.target.value });
  };

  fetchUser = () => {
    this.setState({ searchText: "", user: {} });
    fetch(`https://api.github.com/users/${this.state.searchText}`)
      .then(response => response.json())
      .then(response => this.setState({ user: response }));
  };

  fetchRepos = () => {
    fetch(`https://api.github.com/users/${this.state.user.login}/repos`)
      .then(response => response.json())
      .then(response => this.setState({ repos: response }));
  };
  onKeyDown = event => {
    if (event.keyCode === 13) {
      this.fetchUser();
    }
  };

  render() {
    return (
      <div>
        <div
          style={{
            background: "#1f1d1d"
          }}
        >
          <span
            style={{
              fontSize: 36,
              color: "#d8caca",
              marginLeft: 10
            }}
          >
            React GitHub Project
          </span>
        </div>
        <div style={{ textAlign: "center", margin: "15px 0px 15px 0px" }}>
          <span>Enter a GitHub user name</span>
          <div style={{ paddingTop: 15 }}>
            <input
              onKeyDown={this.onKeyDown}
              onChange={this.onSearch}
              value={this.state.searchText}
            />
            <button onClick={this.fetchUser}>Search</button>
          </div>
        </div>

        {this.state.user !== null ? (
          <div
            style={{
              borderTop: "1px solid grey",
              margin: "0px 10px 0px 10px"
            }}
          >
            <div
              style={{
                display: "flex",
                marginTop: 15
              }}
            >
              <img
                src={this.state.user.avatar_url}
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
                  href={this.state.user.html_url}
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  {this.state.user.login} ({this.state.user.name}){" "}
                </a>

                <span>{this.state.user.bio}</span>
              </div>
            </div>

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
                  marginRight: 15
                }}
              >
                <span onClick={this.fetchRepos}>
                  {this.state.user.public_repos}
                </span>
                <span onClick={this.fetchRepos}> PUBLIC REPOS</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: 15
                }}
              >
                <a>{this.state.user.followers}</a>
                <a> FOLLOWERS</a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <a>{this.state.user.following}</a>
                <a> FOLLOWING</a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
