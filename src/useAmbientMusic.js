import { useRef, useState, useCallback, useEffect } from 'react';

export function useAmbientMusic() {
  const audioCtxRef = useRef(null);
  const masterGainRef = useRef(null);
  const droneGainRef = useRef(null);
  const timerRef = useRef(null);
  const droneOscsRef = useRef([]);
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
    const masterGain = ctx.createGain();
    masterGain.gain.value = isMuted ? 0 : 0.045;
    masterGain.connect(ctx.destination);

    audioCtxRef.current = ctx;
    masterGainRef.current = masterGain;

    // Sacred Tanpura Drone (Sa = 130.81 Hz [C3], Pa = 196.00 Hz [G3])
    const droneGain = ctx.createGain();
    droneGain.gain.value = 0.018;
    droneGain.connect(masterGain);
    droneGainRef.current = droneGain;

    const droneFreqs = [130.81, 196.0, 261.63];
    const droneOscs = droneFreqs.map((freq) => {
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.connect(droneGain);
      osc.start();
      return osc;
    });
    droneOscsRef.current = droneOscs;

    // Divine Carnatic Raga Mohanam Notes (Sa, Ri, Ga, Pa, Dha, Sa)
    // Evokes the sacred sanctity of Tirumala and Srinivasa Kalyanam
    const ragaMohanam = [
      261.63, // Sa (C4)
      293.66, // Ri (D4)
      329.63, // Ga (E4)
      392.00, // Pa (G4)
      440.00, // Dha (A4)
      523.25, // High Sa (C5)
      440.00, // Dha
      392.00, // Pa
      329.63, // Ga
      293.66, // Ri
      261.63, // Sa
      392.00, // Pa (low)
    ];

    let noteIndex = 0;

    const playDivineMelody = () => {
      if (!audioCtxRef.current || !masterGainRef.current) return;
      const now = ctx.currentTime;
      const freq = ragaMohanam[noteIndex % ragaMohanam.length];

      // Primary Veena / Flute harmonic
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.24, now + 0.16);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.6);

      osc.connect(noteGain);
      noteGain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 2.7);

      // Temple Bell Chiming Overtone (shimmering brass bell resonance)
      if (noteIndex % 2 === 0) {
        const bellOsc = ctx.createOscillator();
        const bellGain = ctx.createGain();
        bellOsc.type = 'sine';
        bellOsc.frequency.setValueAtTime(freq * 2.756, now);

        bellGain.gain.setValueAtTime(0.0001, now);
        bellGain.gain.exponentialRampToValueAtTime(0.08, now + 0.04);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        bellOsc.connect(bellGain);
        bellGain.connect(masterGain);
        bellOsc.start(now);
        bellOsc.stop(now + 1.3);
      }

      noteIndex += 1;
      timerRef.current = window.setTimeout(playDivineMelody, 1550);
    };

    playDivineMelody();
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const nextMuted = !prev;
      const ctx = audioCtxRef.current;
      const master = masterGainRef.current;
      if (ctx && master) {
        master.gain.setTargetAtTime(nextMuted ? 0 : 0.045, ctx.currentTime, 0.08);
      }
      return nextMuted;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      if (droneOscsRef.current.length) {
        droneOscsRef.current.forEach((osc) => {
          try {
            osc.stop();
          } catch (e) {
            // ignore
          }
        });
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return { isMuted, startMusic, toggleMute };
}
