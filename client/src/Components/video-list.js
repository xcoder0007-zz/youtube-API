import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({videos})=> {
    if(!videos){ 
        return <h4>Loading .... </h4>;
        
    }

    const Videosli = videos.map(video => <VideoListItem key={video.etag} video={video} /> )
    return (
        <ul className="col-md-4 list-group">
            {Videosli}
        </ul>
    );
}

export default VideoList