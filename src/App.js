import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list';
import InputSearch from './components/input-search/input-search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField : ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({users}));
  }
  test = (e) => {
    console.log(this.state);
    this.setState({searchField: 'le'});
  }
  filtrer = (e) => {
    this.setState({searchField: e.target.value});
  }
  render(){
    console.log(this.state.searchField);
    const {users, searchField} = this.state;
    const filtredUsers = users.filter(
      (user) => user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
          <div >
            <h1>Users Search</h1>
            <InputSearch updateSearchField={this.filtrer}
            tester={this.test}
            />
            <CardList users={filtredUsers}/>
          </div>
    );
}
}

export default App;
