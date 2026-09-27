import React from 'react';

export const BalajiEmblem = ({ size = 'medium', showMantra = true, className = '' }) => {
  const dimensions = {
    small: { width: 140, height: 70 },
    medium: { width: 220, height: 110 },
    large: { width: 320, height: 160 },
  }[size] || { width: 220, height: 110 };

  return (
    <div className={`balaji-divine-emblem ${className}`} style={{ textAlign: 'center' }}>
      <svg
        viewBox="0 0 340 160"
        width={dimensions.width}
        height={dimensions.height}
        className="balaji-emblem-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Rich Radiant Gold Gradient */}
          <linearGradient id="goldRadiant" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="25%" stopColor="#DFB744" />
            <stop offset="60%" stopColor="#C9A65A" />
            <stop offset="85%" stopColor="#9A7030" />
            <stop offset="100%" stopColor="#7A5C28" />
          </linearGradient>

          {/* Deep Sacred Kumkum Red Gradient */}
          <linearGradient id="kumkumRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF1E40" />
            <stop offset="40%" stopColor="#D90429" />
            <stop offset="80%" stopColor="#9B001C" />
            <stop offset="100%" stopColor="#5A0A1A" />
          </linearGradient>

          {/* Pure Sacred Camphor White-Gold */}
          <linearGradient id="camphorWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFFDF7" />
            <stop offset="100%" stopColor="#F5EBD2" />
          </linearGradient>

          {/* Divine Flame Gradient */}
          <linearGradient id="sacredFlame" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#E65100" />
            <stop offset="50%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#FFF3B0" />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="divineGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Halo Glow */}
        <ellipse cx="170" cy="80" rx="140" ry="60" fill="url(#goldRadiant)" opacity="0.12" filter="blur(14px)" />

        {/* ================= LEFT: SUDARSHANA CHAKRA (Discus of Lord Vishnu) ================= */}
        <g transform="translate(48, 75)">
          {/* Flame Crest */}
          <path
            d="M 0 -38 C -5 -46, -2 -52, 0 -58 C 2 -52, 5 -46, 0 -38 Z"
            fill="url(#sacredFlame)"
          />
          <path
            d="M -7 -36 C -12 -42, -9 -48, -8 -52 C -5 -47, -2 -42, -7 -36 Z"
            fill="url(#sacredFlame)"
            opacity="0.85"
          />
          <path
            d="M 7 -36 C 12 -42, 9 -48, 8 -52 C 5 -47, 2 -42, 7 -36 Z"
            fill="url(#sacredFlame)"
            opacity="0.85"
          />

          {/* Outer Serrated Disc */}
          <circle cx="0" cy="0" r="32" fill="none" stroke="url(#goldRadiant)" strokeWidth="3" />
          <circle cx="0" cy="0" r="27" fill="none" stroke="url(#goldRadiant)" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* 8 Divine Wheel Spokes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={26 * Math.cos((angle * Math.PI) / 180)}
              y2={26 * Math.sin((angle * Math.PI) / 180)}
              stroke="url(#goldRadiant)"
              strokeWidth="2"
            />
          ))}

          {/* Central Hub & Gem */}
          <circle cx="0" cy="0" r="8" fill="url(#goldRadiant)" />
          <circle cx="0" cy="0" r="4.5" fill="url(#kumkumRed)" />

          {/* Golden Flame Ribbons */}
          <path
            d="M -30 0 C -38 -6, -42 4, -48 0 C -42 -2, -36 -4, -30 0 Z"
            fill="url(#sacredFlame)"
          />
          <path
            d="M 30 0 C 38 -6, 42 4, 48 0 C 42 -2, 36 -4, 30 0 Z"
            fill="url(#sacredFlame)"
          />
        </g>

        {/* ================= CENTER: HOLY THIRUMAN NAMAM ================= */}
        <g transform="translate(170, 72)">
          {/* Golden/White Lotus Base (Padma Peetam) */}
          <path
            d="M -24 50 C -16 44, -8 47, 0 51 C 8 47, 16 44, 24 50 C 18 56, -18 56, -24 50 Z"
            fill="url(#goldRadiant)"
          />

          {/* Outer Namam Wings (Vishnu Padam) */}
          {/* Left Wing */}
          <path
            d="M -22 -44 
               C -24 -20, -18 10, -10 32
               C -6 38, -2 43, 0 45
               C -1 41, -4 34, -7 28
               C -13 14, -14 -12, -13 -44
               Z"
            fill="url(#camphorWhite)"
            stroke="url(#goldRadiant)"
            strokeWidth="1.5"
          />

          {/* Right Wing */}
          <path
            d="M 22 -44 
               C 24 -20, 18 10, 10 32
               C 6 38, 2 43, 0 45
               C 1 41, 4 34, 7 28
               C 13 14, 14 -12, 13 -44
               Z"
            fill="url(#camphorWhite)"
            stroke="url(#goldRadiant)"
            strokeWidth="1.5"
          />

          {/* Base U-Cup joining the wings */}
          <path
            d="M -11 31
               C -7 38, -4 44, 0 46
               C 4 44, 7 38, 11 31
               C 7 34, 4 38, 0 39
               C -4 38, -7 34, -11 31
               Z"
            fill="url(#goldRadiant)"
          />

          {/* Central Vermilion Tilakam (Sri Churnam - Goddess Padmavathi / Lakshmi) */}
          <path
            d="M 0 -54
               C -3.2 -28, -4.5 4, -4.5 24
               C -4.5 32, -2.5 36, 0 38
               C 2.5 36, 4.5 32, 4.5 24
               C 4.5 4, 3.2 -28, 0 -54
               Z"
            fill="url(#kumkumRed)"
            filter="drop-shadow(0 0 4px rgba(217,4,41,0.6))"
          />

          {/* Gold highlight line inside red tilak */}
          <path
            d="M 0 -46 L 0 28"
            stroke="#FFF2A3"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>

        {/* ================= RIGHT: PANCHAJANYA SHANKHA (Sacred Conch) ================= */}
        <g transform="translate(292, 75)">
          {/* Flame Crest */}
          <path
            d="M 0 -38 C -5 -46, -2 -52, 0 -58 C 2 -52, 5 -46, 0 -38 Z"
            fill="url(#sacredFlame)"
          />
          <path
            d="M -7 -36 C -12 -42, -9 -48, -8 -52 C -5 -47, -2 -42, -7 -36 Z"
            fill="url(#sacredFlame)"
            opacity="0.85"
          />
          <path
            d="M 7 -36 C 12 -42, 9 -48, 8 -52 C 5 -47, 2 -42, 7 -36 Z"
            fill="url(#sacredFlame)"
            opacity="0.85"
          />

          {/* Conch Body */}
          <path
            d="M -6 -28 
               C 14 -30, 28 -18, 28 0 
               C 28 18, 14 28, -4 30
               C -18 32, -28 20, -28 6
               C -28 -14, -18 -26, -6 -28
               Z"
            fill="url(#camphorWhite)"
            stroke="url(#goldRadiant)"
            strokeWidth="2"
          />

          {/* Spiral Shell Ridges */}
          <path
            d="M -16 -12 C -6 -20, 8 -18, 14 -8 C 18 0, 16 12, 6 18 C -4 22, -14 14, -16 2"
            fill="none"
            stroke="url(#goldRadiant)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M -6 -4 C 0 -8, 6 -6, 8 -1 C 10 3, 7 8, 2 9 C -3 10, -6 6, -6 -4"
            fill="none"
            stroke="url(#goldRadiant)"
            strokeWidth="2"
          />

          {/* Golden Flame Wings */}
          <path
            d="M -28 0 C -36 -6, -40 4, -46 0 C -40 -2, -34 -4, -28 0 Z"
            fill="url(#sacredFlame)"
          />
          <path
            d="M 28 0 C 36 -6, 40 4, 46 0 C 40 -2, 34 -4, 28 0 Z"
            fill="url(#sacredFlame)"
          />
        </g>
      </svg>

      {showMantra && (
        <div className="balaji-mantra-banner">
          <p className="balaji-mantra-sanskrit">॥ ॐ नमो वेङ्कटेशाय ॥</p>
          <p className="balaji-mantra-sub">శ్రీ వేంకటేశ్వర ప్రసన్న · శ్రీనివాస కళ్యాణం</p>
        </div>
      )}
    </div>
  );
};
