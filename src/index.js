import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBxJW5dxz_Nnv_TwhP83X3ZK9Pw6Is7TJw'


//Create a new component. This produces html
class App extends Component{
  constructor(props){
    super(props);

    this.state = {videos:[]};

    YTSearch(
      {key :API_KEY, term: 'surfboards'},
      (data) => {this.setState({videos : data})}
    );
  }
  render(){
    return ( //SearchBar is jsx for a React functional component, wrapped in tags to instantiate it.
      <div>
        <SearchBar />
      </div> //Now that we have imported SearchBar, we can display it here
    );
  }
}

//Take the generated html, and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
