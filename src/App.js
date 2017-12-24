import React, { Component } from "react";

class App extends Component {
  state = {
    searchText: "",
    user: null
  };
  onSearch = event => {
    this.setState({ searchText: event.target.value });
  };
  fetchUser = () => {
    fetch(`https://api.github.com/users/${this.state.searchText}`)
      .then(response => response.json())
      .then(response => this.setState({ user: response }));
  };

  render() {
    return (
      <div>
        Enter a GitHub user name
        <input onChange={this.onSearch} />
        <button onClick={this.fetchUser}>Search</button>
        {this.state.user && (
          <div>
            {this.state.user.login}
            <img src={this.state.user.avatar_url} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
