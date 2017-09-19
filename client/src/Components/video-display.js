import React from 'react';

const VideoDisplay = ({ video }) => {
    if(!video){
      return <div>Loading ...</div>;
    }
    const videoId = video.id.videoId;
    const src = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="card">
        <div className="embed-responsive embed-responsive-16y9">
          <iframe className="embed-responsive-item" src={src} frameBorder="0"></iframe>
        </div>
        <div className="card-body">
          <h4 className="card-title">{video.snippet.title}</h4>
          <p className="card-text">{video.snippet.description}</p>
          <p className="card-text"><small className="text-muted">{video.snippet.date}</small></p>
        </div>
      </div>
    )
  }


export default VideoDisplay