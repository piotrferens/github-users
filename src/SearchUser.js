import React from "react";

export default class SearchUser extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center", margin: "15px 0px 15px 0px" }}>
        <span>Enter a GitHub user name</span>
        <div style={{ paddingTop: 15 }}>
          <input
            onKeyDown={this.props.onKeyDown}
            onChange={this.props.onSearch}
            value={this.props.searchText}
          />
          <button onClick={() => this.props.fetchUser(this.props.searchText)}>
            Search
          </button>
        </div>
        <h2> {this.props.error} </h2>
      </div>
    );
  }
}
