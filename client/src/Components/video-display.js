import React from 'react';

const VideoDisplay = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }
  const videoId = video.id.videoId;
  const src = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="col-md-5 video-clip">
      <iframe className="embed-responsive-item" frameBorder="0" src={src} ></iframe>
      <div className="card-body">
        <h4 className="card-title">{video.snippet.title}</h4>
        <p className="card-text">{video.snippet.description}</p>
        <a target="_blank" href={`http://api.youtube6download.top/fetch/link.php?i=${videoId}`}>
          <span className="removeradius btn btn-primary">Download it </span>
        </a>
        <p className="card-text"><small className="text-muted">{video.snippet.date}</small></p>
      </div>
    </div>
  )
}


export default VideoDisplay