import React, { Component } from "react";

import User from "./User";
import SearchUser from "./SearchUser";
import Navigation from "./Navigation";

class App extends Component {
  state = {
    searchText: "",
    user: null,
    repos: { isVisible: false, data: [] },
    followers: { isVisible: false, data: [] },
    following: { isVisible: false, data: [] },
    error: ""
  };

  onSearch = event => {
    this.setState({ searchText: event.target.value });
  };

  fetchUser = username => {
    if (!username) return;

    this.setState({
      searchText: "",
      repos: { isVisible: false, data: [] },
      followers: { isVisible: false, data: [] },
      following: { isVisible: false, data: [] }
    });
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (response.status === 404) {
          throw new Error("This user does not exist :(");
        }
        return response.json();
      })
      .then(response => this.setState({ user: response, error: "" }))
      .catch(error => this.setState({ error: error.message }));
  };

  fetchRepos = () => {
    if (this.state.repos.data.length > 0) {
      this.setState({
        repos: { ...this.state.repos, isVisible: !this.state.repos.isVisible }
      });
      return;
    }
    fetch(`https://api.github.com/users/${this.state.user.login}/repos`)
      .then(response => response.json())
      .then(response =>
        this.setState({ repos: { isVisible: true, data: response } })
      );
  };

  fetchFollowers = () => {
    if (this.state.followers.data.length > 0) {
      this.setState({
        followers: {
          ...this.state.followers,
          isVisible: !this.state.followers.isVisible
        }
      });
      return;
    }
    fetch(`https://api.github.com/users/${this.state.user.login}/followers`)
      .then(response => response.json())
      .then(response =>
        this.setState({ followers: { isVisible: true, data: response } })
      );
  };

  fetchFollowing = () => {
    if (this.state.following.data.length > 0) {
      this.setState({
        following: {
          ...this.state.following,
          isVisible: !this.state.following.isVisible
        }
      });
      return;
    }
    fetch(`https://api.github.com/users/${this.state.user.login}/following`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          following: { isVisible: true, data: response }
        })
      );
  };

  onKeyDown = event => {
    if (event.keyCode === 13) {
      this.fetchUser(this.state.searchText);
    }
  };

  render() {
    return (
      <div>
        <Navigation />
        <SearchUser
          fetchUser={this.fetchUser}
          onKeyDown={this.onKeyDown}
          onSearch={this.onSearch}
          searchText={this.state.searchText}
          error={this.state.error}
        />
        {this.state.user !== null ? (
          <User
            repos={this.state.repos}
            fetchRepos={this.fetchRepos}
            user={this.state.user}
            fetchFollowers={this.fetchFollowers}
            followers={this.state.followers}
            fetchUser={this.fetchUser}
            fetchFollowing={this.fetchFollowing}
            following={this.state.following}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
