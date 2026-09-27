import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const OpeningCeremony = ({ isOpen, onOpen }) => {
  const [stage, setStage] = useState('sealed');
  const { t } = useLanguage();

  const handleOpenClick = () => {
    if (stage === 'sealed') {
      setStage('opening');
    } else if (stage !== 'done') {
      setStage('revealing');
      onOpen();
      window.setTimeout(() => setStage('done'), 450);
    }
  };

  useEffect(() => {
    const timers = [];
    if (stage === 'opening') {
      timers.push(window.setTimeout(() => setStage('rising'), 380));
    }
    if (stage === 'rising') {
      timers.push(
        window.setTimeout(() => {
          setStage('revealing');
          onOpen();
        }, 650)
      );
    }
    if (stage === 'revealing') {
      timers.push(window.setTimeout(() => setStage('done'), 400));
    }
    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [stage, onOpen]);

  if (stage === 'done') return null;

  return (
    <div
      className={`oc-screen oc-${stage}`}
      onClick={handleOpenClick}
      aria-label={t.opening.ariaOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpenClick();
        }
      }}
    >
      <div className="oc-scene">
        <div className="oc-envelope">
          <div className="oc-env-back" />
          <div className="oc-env-flap">
            <svg viewBox="0 0 400 155" className="oc-flap-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flapFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7a1020" />
                  <stop offset="60%" stopColor="#580b15" />
                  <stop offset="100%" stopColor="#44070f" />
                </linearGradient>
              </defs>
              <path
                d="M 0 10 A 10 10 0 0 1 10 0 L 390 0 A 10 10 0 0 1 400 10 L 200 152 Z"
                fill="url(#flapFrontGrad)"
              />
            </svg>
            <div className="oc-wax-seal">
              <img
                src="/images/gold-vishnu-padam-seal.png"
                alt="శ్రీవారి పాదాలు — Traditional Vaishnavite Vishnu Padam Royal Seal"
              />
            </div>
          </div>

          <div className="oc-card">
            <div className="oc-card-inner">
              <span className="oc-card-crown">{t.opening.crown}</span>
              <p className="oc-card-eyebrow">{t.opening.eyebrow}</p>
              <h2 className="oc-card-names">{t.opening.names}</h2>
              <div className="oc-card-rule">
                <span className="oc-card-diamond">◆</span>
              </div>
              <p className="oc-card-date">{t.opening.date}</p>
              <p className="oc-card-place">{t.opening.place}</p>
              <p className="oc-card-script">{t.opening.script}</p>
            </div>
          </div>

          <div className="oc-env-pocket">
            <svg viewBox="0 0 400 270" className="oc-pocket-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pocketLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#620d1a" />
                  <stop offset="100%" stopColor="#4a0812" />
                </linearGradient>
                <linearGradient id="pocketRightGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5a0c18" />
                  <stop offset="100%" stopColor="#40060e" />
                </linearGradient>
                <linearGradient id="pocketBottomGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#6c0f1e" />
                  <stop offset="60%" stopColor="#540a15" />
                  <stop offset="100%" stopColor="#460710" />
                </linearGradient>
                <filter id="pocketShadow" x="-10%" y="-20%" width="120%" height="140%">
                  <feDropShadow dx="0" dy="-4" stdDeviation="5" floodColor="#140205" floodOpacity="0.65" />
                </filter>
              </defs>
              <path d="M 0 0 L 215 145 L 0 270 Z" fill="url(#pocketLeftGrad)" />
              <path d="M 400 0 L 185 145 L 400 270 Z" fill="url(#pocketRightGrad)" />
              <path d="M 0 270 L 400 270 L 200 135 Z" fill="url(#pocketBottomGrad)" filter="url(#pocketShadow)" />
            </svg>
          </div>
        </div>

        <div className="oc-cue">
          <p className="oc-cue-title">{t.opening.cueTitle}</p>
          <p className="oc-cue-sub">{t.opening.cueSub}</p>
        </div>
      </div>
    </div>
  );
};
