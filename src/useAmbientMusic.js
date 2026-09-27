import { useRef, useState, useCallback, useEffect } from 'react';

export function useAmbientMusic() {
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const timerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const startMusic = useCallback(() => {
    if (audioCtxRef.current) {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const gainNode = ctx.createGain();
    gainNode.gain.value = isMuted ? 0 : 0.035;
    gainNode.connect(ctx.destination);

    audioCtxRef.current = ctx;
    masterGainRef.current = gainNode;

    // Pentatonic scale frequencies for royal Indian ambient chime
    const notes = [261.63, 329.63, 392.00, 329.63, 293.66, 349.23, 440.00, 349.23];
    let noteIndex = 0;

    const playNextNote = () => {
      if (!audioCtxRef.current || !masterGainRef.current) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(notes[noteIndex % notes.length], now);

      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.22, now + 0.18);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      osc.connect(noteGain);
      noteGain.connect(gainNode);

      osc.start(now);
      osc.stop(now + 3.0);

      noteIndex += 1;
      timerRef.current = window.setTimeout(playNextNote, 1400);
    };

    playNextNote();
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const nextMuted = !prev;
      const ctx = audioCtxRef.current;
      const gain = masterGainRef.current;
      if (ctx && gain) {
        gain.gain.setTargetAtTime(nextMuted ? 0 : 0.035, ctx.currentTime, 0.08);
      }
      return nextMuted;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return { isMuted, startMusic, toggleMute };
}
