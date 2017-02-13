import React from 'react';

//Sugar. 'this component will recieve a prop with a key video. Please extract video from props, and assign to a variable called video'
const VideoListItem = ({video, onVideoSelect}) =>{
  const imageUrl = video.snippet.thumbnails.default.url; //Pull image url from video variable. Can reference this variable inside jsx by wrapping variable name inside curlybrackets.

  //When the list item is clicked, we run the callback function onVideoSelect, giving it this item's video as the parameter
  return(
     <li onClick={()=>onVideoSelect(video)}
     className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
     </li>
   );
};

export default VideoListItem;
