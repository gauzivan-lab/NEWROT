export function Week1Illustration() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="w1bg" cx="50%" cy="60%" r="70%">
          <stop offset="0%" stopColor="#e8dfc8" />
          <stop offset="100%" stopColor="#c9b99a" />
        </radialGradient>
        <radialGradient id="w1sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8c97a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#d4a853" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="w1fig" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8a9e6e" />
          <stop offset="100%" stopColor="#5c6b47" />
        </linearGradient>
      </defs>

      <rect width="400" height="320" fill="url(#w1bg)" />

      {/* Sun glow */}
      <circle cx="200" cy="175" r="90" fill="url(#w1sun)" />
      <circle cx="200" cy="175" r="55" fill="#e8c97a" fillOpacity="0.35" />

      {/* Sun rays */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
        <line
          key={i}
          x1="200" y1="175"
          x2={200 + Math.cos((angle * Math.PI) / 180) * 110}
          y2={175 + Math.sin((angle * Math.PI) / 180) * 110}
          stroke="#e8c97a"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
      ))}

      {/* Woman silhouette */}
      {/* Head */}
      <ellipse cx="200" cy="72" rx="22" ry="26" fill="url(#w1fig)" />
      {/* Neck */}
      <rect x="193" y="94" width="14" height="16" rx="5" fill="url(#w1fig)" />
      {/* Shoulders & torso */}
      <path d="M155 118 Q175 108 200 110 Q225 108 245 118 L238 200 Q200 215 162 200 Z" fill="url(#w1fig)" />
      {/* Arms flowing up */}
      <path d="M158 125 Q130 100 118 70 Q115 58 122 52 Q130 48 135 60 Q145 88 168 118" fill="url(#w1fig)" fillOpacity="0.85" />
      <path d="M242 125 Q270 100 282 70 Q285 58 278 52 Q270 48 265 60 Q255 88 232 118" fill="url(#w1fig)" fillOpacity="0.85" />
      {/* Dress/skirt flowing */}
      <path d="M162 200 Q155 240 145 280 Q170 290 200 292 Q230 290 255 280 Q245 240 238 200 Q200 215 162 200Z" fill="url(#w1fig)" fillOpacity="0.9" />

      {/* Floating leaves/petals */}
      <ellipse cx="130" cy="130" rx="12" ry="6" fill="#8a9e6e" fillOpacity="0.5" transform="rotate(-30 130 130)" />
      <ellipse cx="270" cy="110" rx="10" ry="5" fill="#8a9e6e" fillOpacity="0.5" transform="rotate(25 270 110)" />
      <ellipse cx="150" cy="200" rx="8" ry="4" fill="#5c6b47" fillOpacity="0.4" transform="rotate(-15 150 200)" />
      <ellipse cx="255" cy="185" rx="9" ry="4" fill="#5c6b47" fillOpacity="0.4" transform="rotate(20 255 185)" />
      <ellipse cx="110" cy="165" rx="7" ry="3.5" fill="#8a9e6e" fillOpacity="0.35" transform="rotate(-40 110 165)" />
      <ellipse cx="295" cy="155" rx="7" ry="3.5" fill="#8a9e6e" fillOpacity="0.35" transform="rotate(35 295 155)" />

      {/* Ground line */}
      <ellipse cx="200" cy="300" rx="80" ry="12" fill="#5c6b47" fillOpacity="0.12" />
    </svg>
  );
}

export function Week2Illustration() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="w2bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#eae2ce" />
          <stop offset="100%" stopColor="#d4c5a9" />
        </linearGradient>
        <linearGradient id="w2plate" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f5f0e5" />
          <stop offset="100%" stopColor="#e8dfc8" />
        </linearGradient>
      </defs>

      <rect width="400" height="320" fill="url(#w2bg)" />

      {/* Plate */}
      <ellipse cx="200" cy="195" rx="130" ry="30" fill="#c4b89a" fillOpacity="0.3" />
      <ellipse cx="200" cy="185" rx="125" ry="118" fill="url(#w2plate)" />
      <ellipse cx="200" cy="185" rx="125" ry="118" fill="none" stroke="#c4b89a" strokeWidth="3" />
      <ellipse cx="200" cy="185" rx="105" ry="99" fill="none" stroke="#c4b89a" strokeWidth="1" strokeOpacity="0.5" />

      {/* Orange slice */}
      <circle cx="175" cy="175" r="38" fill="#e8935a" fillOpacity="0.85" />
      <circle cx="175" cy="175" r="38" fill="none" stroke="#d4784a" strokeWidth="1.5" />
      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <line key={i} x1="175" y1="175" x2={175 + Math.cos(a * Math.PI / 180) * 38} y2={175 + Math.sin(a * Math.PI / 180) * 38} stroke="#d4784a" strokeWidth="1" strokeOpacity="0.6" />
      ))}
      <circle cx="175" cy="175" r="10" fill="#f5c97a" fillOpacity="0.7" />

      {/* Avocado half */}
      <ellipse cx="232" cy="165" rx="28" ry="36" fill="#6b8c4e" fillOpacity="0.85" />
      <ellipse cx="232" cy="168" rx="18" ry="24" fill="#a8c47a" fillOpacity="0.9" />
      <ellipse cx="232" cy="170" rx="10" ry="13" fill="#7a5c3a" fillOpacity="0.7" />

      {/* Berries */}
      {[[165, 230, '#c45a6b'], [180, 238, '#a84d5c'], [195, 232, '#c45a6b'], [178, 222, '#b85465']].map(([x, y, c], i) => (
        <circle key={i} cx={x as number} cy={y as number} r="9" fill={c as string} fillOpacity="0.85" />
      ))}

      {/* Greens/herbs */}
      <path d="M220 235 Q228 210 240 220 Q245 230 232 238Z" fill="#5c6b47" fillOpacity="0.8" />
      <path d="M228 238 Q245 218 252 228 Q250 242 235 242Z" fill="#8a9e6e" fillOpacity="0.8" />
      <path d="M210 228 Q205 210 215 215 Q220 222 212 232Z" fill="#5c6b47" fillOpacity="0.7" />

      {/* Leaves decoration around plate */}
      <path d="M75 130 Q90 110 105 130 Q90 150 75 130Z" fill="#8a9e6e" fillOpacity="0.6" />
      <path d="M68 145 Q88 125 100 148 Q85 165 68 145Z" fill="#5c6b47" fillOpacity="0.5" />
      <path d="M310 140 Q295 120 282 140 Q295 158 310 140Z" fill="#8a9e6e" fillOpacity="0.6" />
      <path d="M318 155 Q298 135 285 158 Q300 175 318 155Z" fill="#5c6b47" fillOpacity="0.5" />

      {/* Small dots */}
      <circle cx="120" cy="100" r="4" fill="#e8935a" fillOpacity="0.4" />
      <circle cx="290" cy="95" r="3" fill="#c45a6b" fillOpacity="0.4" />
      <circle cx="100" cy="200" r="5" fill="#8a9e6e" fillOpacity="0.3" />
      <circle cx="310" cy="210" r="4" fill="#8a9e6e" fillOpacity="0.3" />
    </svg>
  );
}

export function Week3Illustration() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="w3bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8dfc8" />
          <stop offset="100%" stopColor="#d4c5a9" />
        </linearGradient>
        <linearGradient id="w3body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4b89a" />
          <stop offset="100%" stopColor="#a89880" />
        </linearGradient>
        <radialGradient id="w3glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8c97a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#e8c97a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="320" fill="url(#w3bg)" />

      {/* Body silhouette */}
      <ellipse cx="200" cy="62" rx="24" ry="28" fill="url(#w3body)" />
      <rect x="191" y="86" width="18" height="18" rx="6" fill="url(#w3body)" />
      <path d="M150 115 Q175 105 200 108 Q225 105 250 115 L244 285 Q200 300 156 285 Z" fill="url(#w3body)" />
      <path d="M152 122 Q128 135 120 175 Q118 190 128 192 Q140 190 145 175 Q152 145 158 128Z" fill="url(#w3body)" fillOpacity="0.8" />
      <path d="M248 122 Q272 135 280 175 Q282 190 272 192 Q260 190 255 175 Q248 145 242 128Z" fill="url(#w3body)" fillOpacity="0.8" />

      {/* Digestive glow path */}
      <path d="M200 125 Q218 145 205 168 Q190 192 210 215 Q225 235 205 258" fill="none" stroke="#e8c97a" strokeWidth="8" strokeOpacity="0.5" strokeLinecap="round" />
      <path d="M200 125 Q218 145 205 168 Q190 192 210 215 Q225 235 205 258" fill="none" stroke="#e8c97a" strokeWidth="3" strokeOpacity="0.9" strokeLinecap="round" strokeDasharray="4 3" />

      {/* Nutrients floating */}
      {[
        { x: 120, y: 130, r: 8, c: '#8a9e6e' },
        { x: 290, y: 145, r: 7, c: '#e8935a' },
        { x: 108, y: 190, r: 6, c: '#c45a6b' },
        { x: 298, y: 200, r: 9, c: '#8a9e6e' },
        { x: 115, y: 250, r: 7, c: '#e8c97a' },
        { x: 292, y: 260, r: 6, c: '#e8935a' },
      ].map((d, i) => (
        <g key={i}>
          <circle cx={d.x} cy={d.y} r={d.r + 4} fill={d.c} fillOpacity="0.15" />
          <circle cx={d.x} cy={d.y} r={d.r} fill={d.c} fillOpacity="0.75" />
        </g>
      ))}

      {/* Connecting lines from nutrients to body */}
      {[
        { x1: 128, y1: 130, x2: 160, y2: 140 },
        { x1: 282, y1: 145, x2: 248, y2: 148 },
        { x1: 114, y1: 190, x2: 152, y2: 185 },
        { x1: 290, y1: 200, x2: 248, y2: 196 },
      ].map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#e8c97a" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 2" />
      ))}

      {/* Herb leaves */}
      <path d="M88 155 Q100 138 112 158 Q100 172 88 155Z" fill="#5c6b47" fillOpacity="0.55" />
      <path d="M80 170 Q95 152 108 173 Q95 188 80 170Z" fill="#8a9e6e" fillOpacity="0.5" />
      <path d="M305 168 Q293 150 280 170 Q293 185 305 168Z" fill="#5c6b47" fillOpacity="0.55" />
      <path d="M312 183 Q298 164 285 185 Q298 200 312 183Z" fill="#8a9e6e" fillOpacity="0.5" />
    </svg>
  );
}

export function Week4Illustration() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="w4bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2dbc8" />
          <stop offset="100%" stopColor="#cfc0a5" />
        </linearGradient>
        <linearGradient id="w4fig" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a89880" />
          <stop offset="100%" stopColor="#8a7a62" />
        </linearGradient>
      </defs>

      <rect width="400" height="320" fill="url(#w4bg)" />

      {/* Movement circles / energy aura */}
      <circle cx="200" cy="160" r="130" fill="none" stroke="#c4b89a" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="6 4" />
      <circle cx="200" cy="160" r="105" fill="none" stroke="#c4b89a" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 5" />

      {/* Woman in graceful pose - arms raised */}
      {/* Head */}
      <ellipse cx="200" cy="52" rx="22" ry="25" fill="url(#w4fig)" />
      {/* Neck */}
      <rect x="193" y="73" width="14" height="14" rx="5" fill="url(#w4fig)" />
      {/* Torso */}
      <path d="M168 98 Q185 90 200 92 Q215 90 232 98 L226 195 Q200 208 174 195 Z" fill="url(#w4fig)" />
      {/* Right arm raised up-right */}
      <path d="M230 100 Q255 75 275 45 Q282 35 288 40 Q292 47 286 55 Q268 82 245 108Z" fill="url(#w4fig)" fillOpacity="0.9" />
      {/* Left arm out to side */}
      <path d="M170 105 Q140 120 112 128 Q102 130 100 124 Q98 116 108 113 Q134 107 165 98Z" fill="url(#w4fig)" fillOpacity="0.9" />
      {/* Left leg */}
      <path d="M174 195 Q165 235 158 280 Q170 288 182 285 Q188 245 195 208Z" fill="url(#w4fig)" />
      {/* Right leg - kicked back slightly */}
      <path d="M226 195 Q235 235 248 270 Q242 282 230 278 Q220 242 205 208Z" fill="url(#w4fig)" />

      {/* Flowing fabric / skirt element */}
      <path d="M174 195 Q155 220 140 250 Q158 262 174 245 Q185 225 195 208Z" fill="url(#w4fig)" fillOpacity="0.5" />

      {/* Botanical leaf patterns on body */}
      <path d="M185 130 Q200 118 215 130 Q200 145 185 130Z" fill="#8a9e6e" fillOpacity="0.35" />
      <path d="M182 155 Q200 140 218 155 Q200 172 182 155Z" fill="#8a9e6e" fillOpacity="0.3" />
      <path d="M184 178 Q200 165 216 178 Q200 193 184 178Z" fill="#8a9e6e" fillOpacity="0.25" />

      {/* Energy sparks */}
      {[[290, 50, 5], [300, 70, 3], [278, 35, 4], [95, 118, 4], [82, 130, 3], [108, 105, 3]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#e8c97a" fillOpacity="0.7" />
      ))}

      {/* Ground shadow */}
      <ellipse cx="200" cy="300" rx="70" ry="10" fill="#8a7a62" fillOpacity="0.1" />
    </svg>
  );
}

export function Week5Illustration() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="w5bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8dfc8" />
          <stop offset="100%" stopColor="#c9b99a" />
        </linearGradient>
        <linearGradient id="w5head" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8a7a62" />
          <stop offset="100%" stopColor="#6b5e48" />
        </linearGradient>
        <radialGradient id="w5calm" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8a9e6e" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8a9e6e" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="320" fill="url(#w5bg)" />

      {/* Calm aura circle */}
      <circle cx="200" cy="155" r="120" fill="url(#w5calm)" />
      <circle cx="200" cy="155" r="140" fill="none" stroke="#8a9e6e" strokeWidth="0.8" strokeOpacity="0.2" />

      {/* Head silhouette - profile facing right */}
      <ellipse cx="195" cy="108" rx="52" ry="60" fill="url(#w5head)" />
      {/* Neck & shoulders suggestion */}
      <path d="M155 155 Q175 148 195 150 Q220 148 240 158 L242 210 Q195 225 155 210Z" fill="url(#w5head)" fillOpacity="0.5" />

      {/* Botanical elements growing from head */}
      {/* Main stem */}
      <path d="M210 65 Q215 35 220 15" fill="none" stroke="#5c6b47" strokeWidth="2" strokeOpacity="0.7" />
      {/* Left branch */}
      <path d="M213 55 Q195 40 182 45" fill="none" stroke="#5c6b47" strokeWidth="1.5" strokeOpacity="0.6" />
      {/* Right branch */}
      <path d="M216 42 Q235 28 245 32" fill="none" stroke="#5c6b47" strokeWidth="1.5" strokeOpacity="0.6" />

      {/* Leaves */}
      <path d="M182 45 Q172 30 185 25 Q196 30 182 45Z" fill="#8a9e6e" fillOpacity="0.8" />
      <path d="M245 32 Q258 20 260 30 Q255 42 245 32Z" fill="#8a9e6e" fillOpacity="0.8" />
      <path d="M220 15 Q218 2 228 0 Q235 8 220 15Z" fill="#5c6b47" fillOpacity="0.8" />
      <path d="M206 72 Q192 60 195 50 Q205 52 206 72Z" fill="#8a9e6e" fillOpacity="0.6" />
      <path d="M218 60 Q232 50 232 60 Q226 68 218 60Z" fill="#8a9e6e" fillOpacity="0.6" />

      {/* Small berries */}
      <circle cx="182" cy="45" r="4" fill="#c45a6b" fillOpacity="0.7" />
      <circle cx="220" cy="15" r="4" fill="#c45a6b" fillOpacity="0.7" />
      <circle cx="247" cy="32" r="3" fill="#e8935a" fillOpacity="0.7" />

      {/* Stress waves (subtle, dissipating) */}
      <path d="M270 100 Q290 95 285 108 Q278 118 270 100Z" fill="none" stroke="#c4b89a" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M278 112 Q302 106 296 122 Q288 134 278 112Z" fill="none" stroke="#c4b89a" strokeWidth="1" strokeOpacity="0.3" />

      {/* Balance dots */}
      {[[100, 180, '#8a9e6e'], [85, 210, '#c4b89a'], [310, 175, '#8a9e6e'], [325, 205, '#c4b89a']].map(([x, y, c], i) => (
        <circle key={i} cx={x as number} cy={y as number} r="5" fill={c as string} fillOpacity="0.5" />
      ))}

      {/* Moon crescent (sleep symbol) */}
      <path d="M315 70 Q295 80 298 100 Q320 108 330 88 Q310 88 315 70Z" fill="#e8c97a" fillOpacity="0.5" />
    </svg>
  );
}

export function Week6Illustration() {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="w6bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e5dcc8" />
          <stop offset="100%" stopColor="#cdc0a8" />
        </linearGradient>
        <linearGradient id="w6fig" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7a8c5e" />
          <stop offset="100%" stopColor="#5c6b47" />
        </linearGradient>
        <radialGradient id="w6center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8c97a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#e8c97a" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="320" fill="url(#w6bg)" />

      {/* Central glow */}
      <circle cx="200" cy="158" r="80" fill="url(#w6center)" />

      {/* Interconnected system circles */}
      {[
        { cx: 200, cy: 78, label: '🌿' },
        { cx: 268, cy: 118, label: '' },
        { cx: 268, cy: 198, label: '' },
        { cx: 200, cy: 238, label: '' },
        { cx: 132, cy: 198, label: '' },
        { cx: 132, cy: 118, label: '' },
      ].map((c, i) => (
        <g key={i}>
          <line x1={c.cx} y1={c.cy} x2="200" y2="158" stroke="#c4b89a" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="4 3" />
          <circle cx={c.cx} cy={c.cy} r="22" fill="#f0ece0" fillOpacity="0.7" stroke="#c4b89a" strokeWidth="1.5" />
          <circle cx={c.cx} cy={c.cy} r="16" fill="#8a9e6e" fillOpacity={0.15 + i * 0.05} />
        </g>
      ))}

      {/* Small icons in circles */}
      {/* Leaf - nutrition */}
      <path d="M196 68 Q200 60 204 68 Q200 76 196 68Z" fill="#5c6b47" fillOpacity="0.8" />
      <line x1="200" y1="68" x2="200" y2="78" stroke="#5c6b47" strokeWidth="1" strokeOpacity="0.6" />
      {/* Sun - energy */}
      <circle cx="268" cy="118" r="5" fill="#e8c97a" fillOpacity="0.9" />
      {[0,60,120,180,240,300].map((a, i) => (
        <line key={i} x1={268 + Math.cos(a * Math.PI/180) * 5} y1={118 + Math.sin(a * Math.PI/180) * 5} x2={268 + Math.cos(a * Math.PI/180) * 10} y2={118 + Math.sin(a * Math.PI/180) * 10} stroke="#e8c97a" strokeWidth="1.5" strokeOpacity="0.8" />
      ))}
      {/* Moon - sleep */}
      <path d="M264 196 Q258 204 268 210 Q278 204 272 196 Q268 200 264 196Z" fill="#c4b89a" fillOpacity="0.8" />
      {/* Drop - water */}
      <path d="M197 235 Q200 228 203 235 Q203 242 200 243 Q197 242 197 235Z" fill="#8aabe6" fillOpacity="0.6" />
      {/* Heart - emotions */}
      <path d="M128 196 Q132 192 136 196 Q140 192 144 196 Q144 202 136 208 Q128 202 128 196Z" fill="#c45a6b" fillOpacity="0.5" />
      {/* Wave - movement */}
      <path d="M128 114 Q134 110 140 114 Q134 118 128 114Z" fill="none" stroke="#5c6b47" strokeWidth="2" strokeOpacity="0.7" />

      {/* Central figure */}
      <ellipse cx="200" cy="132" rx="16" ry="18" fill="url(#w6fig)" />
      <rect x="193" y="148" width="14" height="10" rx="4" fill="url(#w6fig)" />
      <path d="M178 168 Q190 158 200 160 Q210 158 222 168 L218 210 Q200 220 182 210Z" fill="url(#w6fig)" />
      {/* Arms open/welcoming */}
      <path d="M180 172 Q165 162 152 168 Q148 174 154 178 Q164 175 178 180Z" fill="url(#w6fig)" fillOpacity="0.9" />
      <path d="M220 172 Q235 162 248 168 Q252 174 246 178 Q236 175 222 180Z" fill="url(#w6fig)" fillOpacity="0.9" />

      {/* Sparkles */}
      {[[155, 72], [248, 78], [330, 148], [322, 240], [80, 148], [75, 240]].map(([x, y], i) => (
        <g key={i}>
          <line x1={x} y1={y-6} x2={x} y2={y+6} stroke="#e8c97a" strokeWidth="1.5" strokeOpacity="0.5" />
          <line x1={x-6} y1={y} x2={x+6} y2={y} stroke="#e8c97a" strokeWidth="1.5" strokeOpacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

export const weekIllustrations = [
  Week1Illustration,
  Week2Illustration,
  Week3Illustration,
  Week4Illustration,
  Week5Illustration,
  Week6Illustration,
];
