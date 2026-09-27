import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicToggle = ({ isMuted, onToggle }) => {
  return (
    <button
      className="music-toggle"
      type="button"
      onClick={onToggle}
      aria-pressed={isMuted}
      aria-label={isMuted ? 'Unmute ambient music' : 'Mute ambient music'}
      data-testid="button-toggle-music"
    >
      {isMuted ? (
        <VolumeX size={14} strokeWidth={1.35} aria-hidden="true" />
      ) : (
        <Volume2 size={14} strokeWidth={1.35} aria-hidden="true" />
      )}
      <span>{isMuted ? 'Unmute' : 'Mute'}</span>
    </button>
  );
};
