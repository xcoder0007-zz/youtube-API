import React from 'react';

const VideoListItem = ({ video,OnvideoClick }) => {
    const title = video.snippet.title;
    const publishedAt = video.snippet.publishedAt;
    const thumbnails = video.snippet.thumbnails.default.url;
    const description = video.snippet.description;
    return (
        
                        <li title={description} className="list-group-item" onClick={()=> OnvideoClick(video)}>
                         <img src={thumbnails} />
                         <span className="title-video">{title}</span>
                        </li>
    )
};

export default VideoListItem;