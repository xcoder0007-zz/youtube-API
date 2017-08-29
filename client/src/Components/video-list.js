import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = (props)=> {
    const Videosli = props.videos.map(video => <VideoListItem key={video.etag} video={video} /> )
    return (
        <ul className="col-md-4 list-group">
            {Videosli}
        </ul>
    );
}

export default VideoList