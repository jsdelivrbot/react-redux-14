import React from 'react';

//Sugar. 'this component will recieve a prop with a key video. Please extract video from props, and assign to a variable called video'
const VideoListItem = ({video}) =>{
  console.log(video);
  return(
     <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading">

          </div>
        </div>
      </div>
     </li>
   );
};

export default VideoListItem;
