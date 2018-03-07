import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

    state = {
      myTransactions:[],
      searchTerm:''
    }
  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  componentDidMount() {
    // this.setState({
    //   myTransactions: transactions
    // },()=>console.log(this.state))
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(res=>res.json())
    .then(json=> this.setState({myTransactions: json}),console.log(this.state)
    )

  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    },()=>console.log(this.state))
  }

  filterByCategory = () => {
    let filteredTransactions = this.state.myTransactions.filter(transaction=>{
      return transaction.category.includes(this.state.searchTerm) || transaction.description.includes(this.state.searchTerm)
    })

    return filteredTransactions
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList myTransactions={this.filterByCategory()} />
      </div>
    )
  }
}

export default AccountContainer
