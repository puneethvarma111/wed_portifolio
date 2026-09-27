import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MusicToggle = ({ isMuted, onToggle }) => {
  const { t } = useLanguage();

  return (
    <button
      className="music-toggle"
      type="button"
      onClick={onToggle}
      aria-pressed={isMuted}
      aria-label={isMuted ? t.controls.musicAriaUnmute : t.controls.musicAriaMute}
      data-testid="button-toggle-music"
    >
      {isMuted ? (
        <VolumeX size={14} strokeWidth={1.35} aria-hidden="true" />
      ) : (
        <Volume2 size={14} strokeWidth={1.35} aria-hidden="true" />
      )}
      <span>{isMuted ? t.controls.musicUnmute : t.controls.musicMute}</span>
    </button>
  );
};
