import React from 'react';

//Store props.video as video
const VideoDetail = ({video}) =>{
  if(!video){
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;

  //Build the video url.
  const url = 'https://www.youtube.com/embed/' + videoId;
  //Rewritten with ES6 Sugar (template strings/injection)
  //We provide this url to the iframe
//  const url = `https://www.yotube.com/embed/${videoId}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default VideoDetail;
