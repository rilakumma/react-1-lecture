import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      pictureURL: '',
      friends: [{ name: 'm', pictureURL: 'http://http.cat/404'}]
    };
    this.updateName = this.updateName.bind(this);
    this.updatePic = this.updatePic.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  updateName(event) {
    //console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  }

  updatePic(event) {
    this.setState({
      pictureURL: event.target.value
    });
  }

  addFriend(){
    const newFriend = { name: this.state.name, pictureURL: this.state.pictureURL};
    const friendsCopy = this.state.friends.slice();
    friendsCopy.push(newFriend);
    this.setState({
      name: '',
      pictureURL: '',
      friends: friendsCopy});
  }

  render() {
    // const name = this.state.name;
    // const pictureURL = this.state.pictureURL;
    const { name, pictureURL, friends} = this.state;
    //console.log(this.state)
    return (
      <div>
        <div>
          
          Name: <input value={name} onChange={event=> this.setState({ name: event.target.value})} /> 
          
          {name}
        </div>
        <div>
          Picture URL: <input value={pictureURL} onChange={this.updatePic} />
          {pictureURL}
        </div>
        <button onClick={this.addFriend}>Add Friend</button>
        <div>Friends: {friends.map(friend => {
          return <div>
            Name: {friend.name} {' '}
            Picture: <img src={friend.pictureURL} />
          </div>
        })}</div>
      </div>
    );
  }
}

export default App;
