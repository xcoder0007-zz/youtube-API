import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({videos,OnvideoSelect})=> {
    if(!videos){ 
        return <div>Loading .... </div>;
        
    }

    const Videosli = videos.map(video => <VideoListItem OnvideoClick={OnvideoSelect} key={video.etag} video={video} /> )
    return (
        <ul className="list-group video-ul">
            {Videosli}
        </ul>
    );
}

export default VideoList