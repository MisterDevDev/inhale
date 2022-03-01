import React from "react";
import ReactPlayer from "react-player";

const Player = () => {
    const screenWidth = window.innerWidth
    return (
        <div className="video-player">
            <ReactPlayer 
                url='https://youtu.be/QPfJImLccTQ'
                width={screenWidth > 800 ? '720px' :'360px'}
                height={screenWidth > 800 ? '360px' :'180px'}
            />
        </div>
    )
}

export default Player