import React, { useState, useRef, useEffect } from 'react';
import styles from './MusicPlayer.module.css';

import mainaTrack from '../../assets/Maina.mp3';
import roshniTrack from '../../assets/Roshni.mp3';
import tofaTrack from '../../assets/Tofa.mp3';

const TRACKS = [
  {
    title: 'ROSHNI',
    artist: 'Akshat\'s Selection',
    url: roshniTrack
  },
  {
    title: 'MAINA',
    artist: 'Akshat\'s Selection',
    url: mainaTrack
  },
  {
    title: 'TOFA',
    artist: 'Akshat\'s Selection',
    url: tofaTrack
  }
];

export default function MusicPlayer({ theme, onPresetChange }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 900;
    }
    return false;
  });

  const audioRef = useRef(null);

  const currentTrack = TRACKS[currentTrackIndex];

  // Notify parent of preset changes based on active track
  useEffect(() => {
    const presetNames = ['roshni', 'maina', 'tofa'];
    if (onPresetChange) {
      onPresetChange(presetNames[currentTrackIndex] || 'default');
    }
  }, [currentTrackIndex, onPresetChange]);

  // Set initial volume when audio mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle play/pause toggle
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => console.log('Audio playback failed:', err));
      setIsPlaying(true);
    }
  };

  // Change tracks
  const handleTrackChange = (index) => {
    let nextIndex = index;
    if (index >= TRACKS.length) nextIndex = 0;
    if (index < 0) nextIndex = TRACKS.length - 1;

    setCurrentTrackIndex(nextIndex);
    setIsPlaying(false); // Reset play state first

    // Wait for the source to update, then load & play
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load();
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log('Playback error:', err));
      }
    }, 50);
  };

  const handleNext = () => handleTrackChange(currentTrackIndex + 1);
  const handlePrev = () => handleTrackChange(currentTrackIndex - 1);

  // Time update listener
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Metadata loaded (duration)
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Audio ended listener
  const handleAudioEnded = () => {
    handleNext();
  };

  // Format time (seconds to MM:SS)
  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Seek on click/drag
  const handleSeek = (e) => {
    const value = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  // Toggle Mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Handle Volume Slider
  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (vol > 0) setIsMuted(false);
  };

  return (
    <div className={`${styles.playerContainer} ${isCollapsed ? styles.collapsed : ''} ${theme === 'dark' ? styles.dark : ''}`}>
      <audio
        ref={audioRef}
        src={currentTrack.url}
        crossOrigin="anonymous"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
      />

      {isCollapsed ? (
        /* Collapsed Mini Toggle Button */
        <button 
          className={styles.miniToggle} 
          onClick={() => setIsCollapsed(false)}
          title="Open Ambient Player"
        >
          <div className={`${styles.spinningDisc} ${isPlaying ? styles.spinning : ''}`}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          {isPlaying && (
            <div className={styles.pulseContainer}>
              <span className={styles.pulse}></span>
            </div>
          )}
        </button>
      ) : (
        /* Fully Expanded Premium Player */
        <div className={styles.expandedPlayer}>
          {/* Header Row */}
          <div className={styles.playerHeader}>
            <span className={styles.playerTitle}>AMBIENT SOUND</span>
            <div className={styles.headerControls}>
              {/* Equalizer waves */}
              <div className={styles.eqContainer} title={isPlaying ? "Playing ambient beats" : "Paused"}>
                <span className={`${styles.eqBar} ${isPlaying ? styles.animateBar1 : ''}`}></span>
                <span className={`${styles.eqBar} ${isPlaying ? styles.animateBar2 : ''}`}></span>
                <span className={`${styles.eqBar} ${isPlaying ? styles.animateBar3 : ''}`}></span>
                <span className={`${styles.eqBar} ${isPlaying ? styles.animateBar4 : ''}`}></span>
              </div>
              <button 
                className={styles.collapseBtn} 
                onClick={() => setIsCollapsed(true)} 
                title="Collapse Player"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Track Info */}
          <div className={styles.trackInfo}>
            <div className={styles.trackTitle}>{currentTrack.title}</div>
            <div className={styles.trackArtist}>{currentTrack.artist}</div>
          </div>

          {/* Progress Bar Row */}
          <div className={styles.progressContainer}>
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className={styles.progressBar}
            />
            <div className={styles.timeLabel}>
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls Panel */}
          <div className={styles.controlsRow}>
            {/* Volume Control */}
            <div className={styles.volumeWrapper}>
              <button className={styles.volumeBtn} onClick={toggleMute} title={isMuted ? "Unmute" : "Mute"}>
                {isMuted || volume === 0 ? (
                  /* Mute Icon */
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  /* Speaker Icon */
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className={styles.volumeSlider}
              />
            </div>

            {/* Playback Buttons */}
            <div className={styles.playbackButtons}>
              <button className={styles.controlBtn} onClick={handlePrev} title="Previous Track">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="19 20 9 12 19 4 19 20" />
                  <line x1="5" y1="19" x2="5" y2="5" />
                </svg>
              </button>

              <button className={`${styles.controlBtn} ${styles.playBtn}`} onClick={togglePlay} title={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? (
                  /* Pause Icon */
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  /* Play Icon */
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </button>

              <button className={styles.controlBtn} onClick={handleNext} title="Next Track">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 4 15 12 5 20 5 4" />
                  <line x1="19" y1="5" x2="19" y2="19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
