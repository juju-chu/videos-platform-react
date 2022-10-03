import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map((video, index) => {
        return <VideoItem key={index} video={video} />;
    });
    return <div>{renderedList}</div>
};

export default VideoList;
