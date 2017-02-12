import React from 'react';
import VideoListItem from './video_list_item';

//Video list uses bootstrap classnames inside its jsx.
const VideoList = (props) =>{
  const videoItems = props.videos.map((video) =>{
    return <VideoListItem key={video.etag} video={video} />
  });

  //Need to fill the unordered list with list items.
  //We have an iterator in the form of videoItems. Each element in videoItems
  //is a VideoListItem, returned by mapping each element in the props.video list
  //to a video list item instance.
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
