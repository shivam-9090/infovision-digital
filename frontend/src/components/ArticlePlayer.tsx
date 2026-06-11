import React, { useState, useRef, useEffect, useCallback } from "react";
import "./ArticlePlayer.css";

interface ArticlePlayerProps {
  slug: string;
  /** Duration label from manifest, e.g. "6 min" */
  durationLabel?: string;
}

export const ArticlePlayer: React.FC<ArticlePlayerProps> = ({ slug, durationLabel }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const audioSrc = `/audio/${slug}.mp3`;

  // Check if audio file exists on mount
  useEffect(() => {
    fetch(audioSrc, { method: "HEAD" })
      .then((res) => setIsVisible(res.ok))
      .catch(() => setIsVisible(false));
  }, [audioSrc]);

  const formatTime = (secs: number): string => {
    if (!secs || isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setHasError(true);
        });
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) setDuration(audio.duration);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newTime = parseFloat(e.target.value);
    if (audio) {
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const displayDuration = duration > 0 ? formatTime(duration) : durationLabel ?? "";

  if (!isVisible) return null;

  return (
    <div className="article-player" role="region" aria-label="Audio version of this article">
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Top row: play btn | headphone icon | "Listen to article" | pipe | duration */}
      <div className="article-player__header">
        {/* Play / Pause button */}
        <button
          className={`article-player__play-btn ${isPlaying ? "article-player__play-btn--playing" : ""}`}
          onClick={togglePlay}
          disabled={hasError}
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
        >
          {isLoading ? (
            <span className="article-player__spinner" aria-hidden="true" />
          ) : isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>

        <div className="article-player__icon-label">
          <svg className="article-player__headphone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
            <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
          <span className="article-player__label">Listen to article</span>
        </div>

        {displayDuration && (
          <>
            <span className="article-player__pipe" aria-hidden="true" />
            <span className="article-player__duration-label">{displayDuration}</span>
          </>
        )}
      </div>

      {/* Seek bar row */}
      <div className="article-player__controls">
        <div className="article-player__seek-wrapper">
          <div className="article-player__progress-track">
            <div
              className="article-player__progress-fill"
              style={{ width: `${progress}%` }}
            />
            <input
              type="range"
              className="article-player__seek-input"
              min={0}
              max={duration || 100}
              step={0.5}
              value={currentTime}
              onChange={handleSeek}
              aria-label="Seek audio"
            />
          </div>
          <div className="article-player__time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {hasError && (
        <p className="article-player__error">Audio unavailable for this article.</p>
      )}
    </div>
  );
};

export default ArticlePlayer;
