import React, { Component } from 'react'
import axios from 'axios'

export default class ListsContainer extends Component {
  state = {
    lists: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists.json')
    .then(response => {
      console.log(response)
      this.setState({
        lists: response.data
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="lists-container">
        Lists will be here, brah.
      </div>
    )
  }
}