import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

export default function AudioPlayer({ url }) {

    const [isPlaying, setIsPlaying] = useState(false);
    const [played, setPlayed] = useState(0);
    const playerRef = useRef();

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleProgress = (progress) => {
        setPlayed(progress.played);
    };
    return (
        <div className='player'>
          <ReactPlayer
            className="react-player"
            ref={playerRef}
            url={url}
            playing={isPlaying}
            onProgress={handleProgress}
          />
          <button onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <progress value={played} max={1} />
        </div>
      );
}