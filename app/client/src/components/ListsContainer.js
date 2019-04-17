import React, { Component } from 'react'
import axios from 'axios'
import { List } from './List';

export default class ListsContainer extends Component {
  state = {
    lists: []
  }

  componentDidMount() {
    axios.get('/api/v1/lists.json')
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
        {this.state.lists.map(list => {
          return (<List list={list} key={list.id} />)
        })}
      </div>
    )
  }
}