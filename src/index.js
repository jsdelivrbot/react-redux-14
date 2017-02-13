import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBxJW5dxz_Nnv_TwhP83X3ZK9Pw6Is7TJw'


//Create a new component. This produces html
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo : null
    };

    YTSearch(
      {key :API_KEY, term: 'java'},
      (videos) => {this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }
  render(){
    return ( //SearchBar is jsx for a React functional component, wrapped in tags to instantiate it.

      //We hand videos={this.state.videos}, in order to hand videos as a 'prop' into the VideoList component. This will arrive as an arguement to VideoList, called 'props.videos'. Note, if VideoList was a class, props would be available anywhere via this.props.whateverKey, instead of via the arguement props.whateverKey.

      //Explanation of callback function. onVideoSelect is a function.
      //When it is called with an arguement, it sets the state of
      //the Apps state.selectedVideo to the selectedVideo arguement.
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div> //Now that we have imported SearchBar, we can display it here
    );
  }
}

//Take the generated html, and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
