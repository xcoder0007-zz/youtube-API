import React from 'react';

const VideoListItem = ({ video }) => {
    console.log(video)
    const title = video.snippet.title;
    const publishedAt = video.snippet.publishedAt;
    const thumbnails = video.snippet.thumbnails.default.url;
    const description = video.snippet.description;
    return (
        <li>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{title}</h5>

                        <img className="card-img-top" src={thumbnails} alt="Card image cap" />
                    </div>
                        <small>{description}</small>
                </a>

            </div>

        </li>
    )
};

export default VideoListItem;