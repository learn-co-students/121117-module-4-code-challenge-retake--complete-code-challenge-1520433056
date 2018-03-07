import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";

class AccountContainer extends Component {
  state = {
    transactions: [],
    filter: ""
  };
  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(json =>
        this.setState({
          transactions: json
        })
      );
  }

  handleChange = event => {
    this.setState({
      filter: event.target.value.toLowerCase()
    });
  };

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList
          transactions={this.state.transactions}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

export default AccountContainer;
