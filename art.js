/* Trâu Con Kể Chuyện — tranh minh họa SVG (khung 320 × 200)
   Phần đầu chép nguyên từ Kho Báu Lời Ông Bà để tranh hai trang giống nhau.
   Vẽ đơn giản theo bảng màu Trường Tiếng Việt Của Em.
   Muốn thay bằng tranh vẽ riêng: đặt file assets/art/<id>.png (hoặc .svg) và thêm id vào ART.custom. */
window.ART = (function () {
  const C = {
    sky: '#D7ECEC', sky2: '#EAF4EE', sun: '#F2BE4A', cloud: '#FFFDF8',
    grass: '#B5D69A', grass2: '#94C27D', leaf: '#6FA86A', leafD: '#4E8A55',
    wood: '#C68B59', woodD: '#9A6A40', straw: '#DDAA55', strawL: '#EFCF8E',
    water: '#A7D5DF', waterD: '#78B8C9', stone: '#BDB6AA', stoneD: '#948D82',
    ink: '#3A3B3C', grey: '#8C919B', greyD: '#626873', greyL: '#B4B8C0',
    peach: '#F2B28F', pink: '#EE9DA9', red: '#D0533F', redD: '#A93E2F',
    white: '#FFFDF8', skin: '#F5D0B0', beige: '#F4F0EA', brick: '#C98A63',
    yellow: '#F6D36B', orange: '#EC9A4C', blue: '#7FB3D9', night: '#4D5D7E', mud: '#A98C6B'
  };
  const n = (v) => Math.round(v * 10) / 10;
  const G = (x, y, s, inner, flip) => `<g transform="translate(${n(x)} ${n(y)}) scale(${flip ? -s : s} ${s})">${inner}</g>`;
  const rad = (d) => d * Math.PI / 180;

  /* ── nền ── */
  const BG = {
    day: () => `<rect width="320" height="200" fill="${C.sky}"/><path d="M0 150 Q80 138 160 148 T320 146 V200 H0Z" fill="${C.grass}"/><path d="M0 172 Q90 162 180 170 T320 168 V200 H0Z" fill="${C.grass2}"/>`,
    meadow: () => `<rect width="320" height="200" fill="${C.sky}"/><path d="M0 128 Q100 116 200 126 T320 122 V200 H0Z" fill="${C.grass}"/><path d="M0 160 Q90 150 180 158 T320 156 V200 H0Z" fill="${C.grass2}"/>`,
    field: () => `<rect width="320" height="200" fill="${C.sky}"/><rect y="120" width="320" height="80" fill="${C.grass}"/>` +
      Array.from({ length: 6 }, (_, i) => `<path d="M0 ${130 + i * 12} H320" stroke="${C.grass2}" stroke-width="3" stroke-dasharray="6 9"/>`).join(''),
    water: () => `<rect width="320" height="200" fill="${C.sky}"/><path d="M0 118 Q80 112 160 118 T320 116 V200 H0Z" fill="${C.water}"/><path d="M0 150 Q70 144 150 150 T320 148" stroke="${C.white}" stroke-width="3" fill="none" opacity=".6"/><path d="M30 176 Q90 170 140 176" stroke="${C.white}" stroke-width="3" fill="none" opacity=".5"/>`,
    under: () => `<rect width="320" height="200" fill="${C.water}"/><path d="M0 30 Q80 20 160 30 T320 26" stroke="${C.white}" stroke-width="4" fill="none" opacity=".5"/><path d="M0 178 Q80 168 160 178 T320 174 V200 H0Z" fill="${C.strawL}"/>`,
    room: () => `<rect width="320" height="200" fill="${C.beige}"/><rect y="150" width="320" height="50" fill="${C.wood}"/><path d="M0 150 H320" stroke="${C.woodD}" stroke-width="3"/>`,
    night: () => `<rect width="320" height="200" fill="${C.night}"/><path d="M0 156 Q90 146 180 154 T320 150 V200 H0Z" fill="#5E7A62"/>`,
    dawn: () => `<rect width="320" height="200" fill="#F6DCC2"/><path d="M0 150 Q80 140 160 148 T320 144 V200 H0Z" fill="${C.grass}"/>`,
    tet: () => `<rect width="320" height="200" fill="#C9483A"/><circle cx="270" cy="40" r="70" fill="#D45C45"/><path d="M0 170 H320 V200 H0Z" fill="#A93E2F"/>`,
    sky: () => `<rect width="320" height="200" fill="${C.sky}"/>`,
    board: () => `<rect width="320" height="200" fill="${C.beige}"/><rect y="160" width="320" height="40" fill="${C.wood}"/>`
  };

  /* ── chi tiết trời đất ── */
  const sun = (x, y, r = 18) => `<g><circle cx="${x}" cy="${y}" r="${r + 7}" fill="${C.sun}" opacity=".25"/><circle cx="${x}" cy="${y}" r="${r}" fill="${C.sun}"/></g>`;
  const cloud = (x, y, s = 1) => G(x, y, s, `<path d="M-30 0 Q-32 -14 -18 -14 Q-14 -28 2 -24 Q14 -32 22 -18 Q36 -18 32 0Z" fill="${C.cloud}"/>`);
  const moon = (x, y) => `<path d="M${x} ${y - 16} A16 16 0 1 0 ${x + 12} ${y + 10} A13 13 0 1 1 ${x} ${y - 16}Z" fill="${C.yellow}"/>`;
  const star = (x, y, r = 8, fill = C.yellow) => {
    let d = ''; for (let i = 0; i < 10; i++) { const a = rad(-90 + i * 36), rr = i % 2 ? r * 0.45 : r; d += (i ? 'L' : 'M') + n(x + Math.cos(a) * rr) + ' ' + n(y + Math.sin(a) * rr); }
    return `<path d="${d}Z" fill="${fill}" stroke="${C.woodD}" stroke-width="${r > 12 ? 2 : 0}" stroke-linejoin="round"/>`;
  };
  const sparkle = (x, y, r = 6, c = C.white) => `<path d="M${x} ${y - r} Q${x} ${y} ${x + r} ${y} Q${x} ${y} ${x} ${y + r} Q${x} ${y} ${x - r} ${y} Q${x} ${y} ${x} ${y - r}Z" fill="${c}"/>`;
  const drops = (pts, c = C.waterD) => pts.map(([x, y, s = 1]) => G(x, y, s, `<path d="M0 -7 Q5 0 5 3 A5 5 0 0 1 -5 3 Q-5 0 0 -7Z" fill="${c}"/>`)).join('');
  const notes = (x, y, s = 1, c = C.ink) => G(x, y, s, `<path d="M0 0 V-22 L14 -26 V-6" stroke="${c}" stroke-width="2.5" fill="none"/><ellipse cx="-3" cy="1" rx="5" ry="4" fill="${c}"/><ellipse cx="11" cy="-5" rx="5" ry="4" fill="${c}"/>`);
  const heart = (x, y, s = 1, c = C.pink) => G(x, y, s, `<path d="M0 6 C-14 -4 -10 -16 0 -9 C10 -16 14 -4 0 6Z" fill="${c}"/>`);
  const lines = (x, y, s = 1, c = C.white, rot = 0) => `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" stroke="${c}" stroke-width="3" stroke-linecap="round"><path d="M0 0 H-18"/><path d="M2 9 H-12"/><path d="M0 -9 H-10"/></g>`;
  const grassTuft = (x, y, s = 1) => G(x, y, s, `<path d="M-6 0 Q-6 -10 -10 -14 M0 0 Q0 -12 2 -18 M6 0 Q7 -8 11 -12" stroke="${C.leafD}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`);
  const flower = (x, y, s = 1, c = C.pink) => G(x, y, s, `<path d="M0 0 V-16" stroke="${C.leafD}" stroke-width="2"/>` + [0, 72, 144, 216, 288].map((a) => `<circle cx="${n(Math.cos(rad(a)) * 5)}" cy="${n(-20 + Math.sin(rad(a)) * 5)}" r="4" fill="${c}"/>`).join('') + `<circle cy="-20" r="3" fill="${C.yellow}"/>`);
  const tree = (x, y, s = 1, fruit) => G(x, y, s, `<rect x="-6" y="-40" width="12" height="40" rx="4" fill="${C.wood}"/><circle cx="-16" cy="-52" r="20" fill="${C.leaf}"/><circle cx="14" cy="-54" r="22" fill="${C.leaf}"/><circle cx="0" cy="-72" r="22" fill="${C.leafD}" opacity=".9"/><circle cx="0" cy="-70" r="20" fill="${C.leaf}"/>` +
    (fruit ? [[-18, -50], [12, -62], [20, -44], [-4, -80], [-8, -58], [6, -46]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="5" fill="${C.orange}"/>`).join('') : ''));
  const mountain = (x, y, w, h, c = C.leaf, snow) => `<path d="M${x - w / 2} ${y} Q${x - w / 6} ${y - h * 0.8} ${x} ${y - h} Q${x + w / 6} ${y - h * 0.8} ${x + w / 2} ${y}Z" fill="${c}"/>` + (snow ? `<path d="M${x - w * 0.12} ${y - h * 0.82} Q${x} ${y - h * 1.02} ${x + w * 0.12} ${y - h * 0.82} Q${x} ${y - h * 0.74} ${x - w * 0.12} ${y - h * 0.82}Z" fill="${C.white}" opacity=".8"/>` : '');

  /* ── người ── */
  function kid(o) {
    const s = o.s || 1, shirt = o.shirt || C.blue, pants = o.pants || C.ink, hairC = o.hairC || C.ink;
    const arm = (side, a) => { const sx = side * 11, ex = sx + side * Math.sin(rad(a)) * 19, ey = -46 + Math.cos(rad(a)) * 19; return `<path d="M${sx} -46 L${n(ex)} ${n(ey)}" stroke="${shirt}" stroke-width="7" stroke-linecap="round"/><circle cx="${n(ex)}" cy="${n(ey)}" r="4.2" fill="${C.skin}"/>`; };
    let legs;
    if (o.legs === 'run') legs = `<path d="M-4 -24 L-14 -6 L-20 -4" stroke="${pants}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M4 -24 L12 -2" stroke="${pants}" stroke-width="8" stroke-linecap="round"/>`;
    else if (o.legs === 'jump') legs = `<path d="M-5 -24 L-12 -12 L-6 -2" stroke="${pants}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M5 -24 L12 -12 L6 -2" stroke="${pants}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    else if (o.legs === 'sit') legs = `<path d="M-6 -24 H8 V-2" stroke="${pants}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M0 -24 H14 V-2" stroke="${pants}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    else legs = `<rect x="-9" y="-26" width="8" height="26" rx="4" fill="${pants}"/><rect x="1" y="-26" width="8" height="26" rx="4" fill="${pants}"/>`;
    const face = {
      smile: `<circle cx="-5.5" cy="-67" r="2" fill="${C.ink}"/><circle cx="5.5" cy="-67" r="2" fill="${C.ink}"/><path d="M-5 -60 Q0 -55 5 -60" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
      open: `<circle cx="-5.5" cy="-67" r="2" fill="${C.ink}"/><circle cx="5.5" cy="-67" r="2" fill="${C.ink}"/><ellipse cx="0" cy="-58.5" rx="3.5" ry="3" fill="${C.redD}"/>`,
      sleepy: `<path d="M-8 -67 H-3" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/><circle cx="5.5" cy="-67" r="2.6" fill="${C.ink}"/><ellipse cx="0" cy="-58.5" rx="3" ry="3.4" fill="${C.redD}"/>`,
      happy: `<path d="M-8 -66 Q-5.5 -70 -3 -66" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M3 -66 Q5.5 -70 8 -66" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M-5 -60 Q0 -54 5 -60" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
      wow: `<circle cx="-5.5" cy="-67" r="2.4" fill="${C.ink}"/><circle cx="5.5" cy="-67" r="2.4" fill="${C.ink}"/><circle cx="0" cy="-58.5" r="3" fill="${C.redD}"/>`,
      sad: `<circle cx="-5.5" cy="-67" r="2" fill="${C.ink}"/><circle cx="5.5" cy="-67" r="2" fill="${C.ink}"/><path d="M-4 -58 Q0 -62 4 -58" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`
    }[o.face || 'smile'];
    const hair = {
      boy: `<path d="M-15 -68 Q-16 -84 0 -84 Q16 -84 15 -68 Q10 -76 0 -75 Q-8 -77 -15 -68Z" fill="${hairC}"/>`,
      girl: `<path d="M-15 -64 Q-17 -85 0 -84 Q17 -85 15 -64 Q14 -74 6 -76 Q-6 -72 -15 -64Z" fill="${hairC}"/><circle cx="-16" cy="-62" r="6" fill="${hairC}"/><circle cx="16" cy="-62" r="6" fill="${hairC}"/>`,
      long: `<path d="M-16 -50 Q-19 -86 0 -84 Q19 -86 16 -50 L12 -50 Q14 -72 4 -76 Q-8 -72 -12 -50Z" fill="${hairC}"/>`,
      old: `<path d="M-15 -68 Q-16 -84 0 -84 Q16 -84 15 -68 Q10 -76 0 -75 Q-8 -77 -15 -68Z" fill="${C.greyL}"/><circle cx="0" cy="-86" r="6" fill="${C.greyL}"/>`,
      grandpa: `<path d="M-15 -66 Q-15 -78 -8 -80 Q0 -76 8 -80 Q15 -78 15 -66 Q13 -72 8 -72 Q0 -72 -8 -72 Q-13 -72 -15 -66Z" fill="${C.greyL}"/><path d="M-6 -58 Q0 -46 6 -58 Q0 -55 -6 -58Z" fill="${C.greyL}"/>`
    }[o.hair || 'boy'];
    const hat = o.hat ? `<path d="M-27 -72 Q0 -80 27 -72 L0 -100Z" fill="${C.straw}"/><path d="M0 -100 L-14 -74 M0 -100 L-4 -76 M0 -100 L6 -76 M0 -100 L16 -74" stroke="${C.woodD}" stroke-width="1" opacity=".5"/><path d="M-27 -72 Q0 -80 27 -72" stroke="${C.woodD}" stroke-width="1.5" fill="none"/>` : '';
    const body = `<rect x="-13" y="-52" width="26" height="30" rx="10" fill="${shirt}"/>`;
    const head = `<circle cx="0" cy="-66" r="15" fill="${C.skin}"/>${hair}<circle cx="-9" cy="-61" r="2.6" fill="${C.pink}" opacity=".7"/><circle cx="9" cy="-61" r="2.6" fill="${C.pink}" opacity=".7"/>${face}${hat}`;
    return G(o.x, o.y, s, legs + arm(-1, o.armL || 8) + body + arm(1, o.armR || 8) + (o.extra || '') + head, o.flip);
  }

  /* ── con vật ── */
  const frog = (x, y, s = 1) => G(x, y, s, `<ellipse cx="0" cy="-14" rx="22" ry="15" fill="${C.leaf}"/><ellipse cx="0" cy="-10" rx="14" ry="9" fill="#BFE0A8"/><circle cx="-10" cy="-28" r="7" fill="${C.leaf}"/><circle cx="10" cy="-28" r="7" fill="${C.leaf}"/><circle cx="-10" cy="-29" r="4" fill="${C.white}"/><circle cx="10" cy="-29" r="4" fill="${C.white}"/><circle cx="-10" cy="-29" r="2" fill="${C.ink}"/><circle cx="10" cy="-29" r="2" fill="${C.ink}"/><path d="M-8 -17 Q0 -12 8 -17" stroke="${C.leafD}" stroke-width="2" fill="none"/><ellipse cx="-20" cy="-2" rx="9" ry="4" fill="${C.leafD}"/><ellipse cx="20" cy="-2" rx="9" ry="4" fill="${C.leafD}"/>`);
  const duck = (x, y, s = 1, flip) => G(x, y, s, `<ellipse cx="0" cy="-16" rx="24" ry="15" fill="${C.white}"/><path d="M-22 -18 L-32 -26 L-24 -10Z" fill="${C.white}"/><circle cx="16" cy="-36" r="11" fill="${C.white}"/><path d="M25 -38 L36 -35 L25 -31Z" fill="${C.orange}"/><circle cx="19" cy="-39" r="2" fill="${C.ink}"/><path d="M-8 -18 Q2 -10 12 -18" stroke="${C.greyL}" stroke-width="2" fill="none"/><path d="M-6 -2 v4 M6 -2 v4" stroke="${C.orange}" stroke-width="3"/>`, flip);
  const buffalo = (x, y, s = 1, flip, eat) => G(x, y, s, `<rect x="-30" y="-12" width="8" height="14" rx="3" fill="${C.greyD}"/><rect x="-14" y="-12" width="8" height="14" rx="3" fill="${C.greyD}"/><rect x="10" y="-12" width="8" height="14" rx="3" fill="${C.greyD}"/><rect x="22" y="-12" width="8" height="14" rx="3" fill="${C.greyD}"/><ellipse cx="0" cy="-26" rx="36" ry="20" fill="${C.grey}"/><path d="M-36 -28 Q-46 -24 -44 -10" stroke="${C.greyD}" stroke-width="3" fill="none"/>` +
    G(eat ? 36 : 38, eat ? -14 : -34, 1, `<path d="M-14 -14 Q-28 -26 -20 -36 Q-18 -22 -6 -16Z" fill="${C.greyD}"/><path d="M14 -14 Q28 -26 20 -36 Q18 -22 6 -16Z" fill="${C.greyD}"/><ellipse cx="0" cy="-4" rx="15" ry="16" fill="${C.grey}"/><ellipse cx="0" cy="6" rx="11" ry="8" fill="${C.greyL}"/><circle cx="-4" cy="6" r="1.8" fill="${C.ink}"/><circle cx="4" cy="6" r="1.8" fill="${C.ink}"/>` + (eat ? `<path d="M-9 -6 h6 M3 -6 h6" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/>` : `<circle cx="-6" cy="-6" r="2.2" fill="${C.ink}"/><circle cx="6" cy="-6" r="2.2" fill="${C.ink}"/>`)), flip);
  const elephant = (x, y, s = 1, flip, tail) => G(x, y, s, `<rect x="-30" y="-20" width="13" height="22" rx="5" fill="${C.greyD}"/><rect x="-10" y="-20" width="13" height="22" rx="5" fill="${C.greyD}"/><rect x="10" y="-20" width="13" height="22" rx="5" fill="${C.grey}"/><ellipse cx="-4" cy="-34" rx="36" ry="24" fill="${C.grey}"/>` +
    (tail === 'mouse' ? `<path d="M-40 -34 Q-60 -40 -62 -24 Q-64 -12 -54 -14" stroke="${C.pink}" stroke-width="2" fill="none"/>` : `<path d="M-40 -36 Q-48 -34 -46 -24" stroke="${C.greyD}" stroke-width="3" fill="none"/>`) +
    `<circle cx="30" cy="-46" r="20" fill="${C.grey}"/><ellipse cx="20" cy="-46" rx="12" ry="16" fill="${C.greyL}"/><path d="M44 -42 Q56 -30 50 -10 Q48 -4 44 -8 Q48 -26 38 -36Z" fill="${C.grey}"/><circle cx="36" cy="-52" r="2.4" fill="${C.ink}"/><path d="M40 -36 Q44 -32 42 -26" stroke="${C.white}" stroke-width="3" stroke-linecap="round" fill="none"/>`, flip);
  const mouse = (x, y, s = 1, flip) => G(x, y, s, `<path d="M-14 -6 Q-30 -2 -30 -14" stroke="${C.pink}" stroke-width="2" fill="none"/><ellipse cx="0" cy="-8" rx="15" ry="9" fill="${C.greyL}"/><circle cx="12" cy="-14" r="7" fill="${C.greyL}"/><circle cx="8" cy="-22" r="5" fill="${C.greyL}"/><circle cx="8" cy="-22" r="2.6" fill="${C.pink}"/><circle cx="15" cy="-15" r="1.4" fill="${C.ink}"/><circle cx="19" cy="-12" r="1.6" fill="${C.pink}"/>`, flip);
  const cat = (x, y, s = 1, flip, o = {}) => G(x, y, s, `<path d="M-18 -8 Q-38 -14 -32 -34" stroke="${C.orange}" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="-14" rx="20" ry="14" fill="${C.orange}"/><path d="M-6 -2 v2 M8 -2 v2" stroke="${C.orange}" stroke-width="6" stroke-linecap="round"/><circle cx="12" cy="-32" r="13" fill="${C.orange}"/><path d="M2 -40 L4 -52 L12 -44Z M14 -44 L22 -52 L23 -40Z" fill="${C.orange}"/><path d="M8 -20 h10" stroke="#F7C899" stroke-width="5" stroke-linecap="round"/>` +
    (o.blind ? `<rect x="-2" y="-38" width="28" height="7" rx="3" fill="${C.red}"/><path d="M-2 -35 L-10 -30 M-2 -34 L-8 -38" stroke="${C.red}" stroke-width="3" stroke-linecap="round"/>` : o.angry ? `<path d="M6 -36 l5 2 M19 -36 l-5 2" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/><circle cx="9" cy="-32" r="1.8" fill="${C.ink}"/><circle cx="17" cy="-32" r="1.8" fill="${C.ink}"/>` : `<circle cx="8" cy="-33" r="2" fill="${C.ink}"/><circle cx="17" cy="-33" r="2" fill="${C.ink}"/>`) +
    `<circle cx="12.5" cy="-27" r="1.5" fill="${C.pink}"/><path d="M20 -26 h8 M20 -28 l7 -3" stroke="${C.woodD}" stroke-width="1"/>`, flip);
  const dog = (x, y, s = 1, flip, angry) => G(x, y, s, `<path d="M-20 -18 Q-30 -28 -26 -34" stroke="${C.wood}" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="-16" rx="22" ry="13" fill="${C.strawL}"/><rect x="-16" y="-8" width="7" height="10" rx="3" fill="${C.strawL}"/><rect x="8" y="-8" width="7" height="10" rx="3" fill="${C.strawL}"/><circle cx="18" cy="-30" r="13" fill="${C.strawL}"/><ellipse cx="9" cy="-28" rx="5" ry="10" fill="${C.wood}" transform="rotate(20 9 -28)"/><ellipse cx="28" cy="-26" rx="6" ry="4" fill="${C.ink}"/>` +
    (angry ? `<path d="M13 -36 l5 2 M24 -38 l-5 3" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="-32" r="1.8" fill="${C.ink}"/><circle cx="22" cy="-33" r="1.8" fill="${C.ink}"/><path d="M22 -21 l3 4 l3 -4" fill="${C.white}"/>` : `<circle cx="17" cy="-33" r="2" fill="${C.ink}"/><circle cx="24" cy="-33" r="2" fill="${C.ink}"/>`), flip);
  const fish = (x, y, s = 1, flip, c = C.orange) => G(x, y, s, `<path d="M-20 0 L-34 -12 L-34 12Z" fill="${c}"/><ellipse cx="0" cy="0" rx="22" ry="14" fill="${c}"/><path d="M-4 -12 Q2 -22 10 -12" fill="${c}"/><circle cx="10" cy="-3" r="3" fill="${C.white}"/><circle cx="11" cy="-3" r="1.6" fill="${C.ink}"/><path d="M-6 -8 Q-2 0 -6 8" stroke="${C.white}" stroke-width="2" fill="none" opacity=".7"/><path d="M14 5 Q17 7 20 5" stroke="${C.ink}" stroke-width="1.5" fill="none"/>`, flip);
  const turtle = (x, y, s = 1, flip) => G(x, y, s, `<rect x="-18" y="-8" width="9" height="9" rx="4" fill="#9CC48A"/><rect x="10" y="-8" width="9" height="9" rx="4" fill="#9CC48A"/><circle cx="30" cy="-12" r="8" fill="#9CC48A"/><circle cx="33" cy="-14" r="1.6" fill="${C.ink}"/><path d="M-28 -6 Q0 -40 28 -6Z" fill="${C.leafD}"/><path d="M-12 -14 L0 -26 L12 -14 L0 -8Z" fill="${C.leaf}"/><path d="M-30 -6 H30" stroke="${C.woodD}" stroke-width="3" stroke-linecap="round"/>`, flip);
  const squirrel = (x, y, s = 1, flip) => G(x, y, s, `<path d="M-10 -6 Q-36 -10 -30 -40 Q-24 -60 -6 -50 Q-20 -44 -18 -30 Q-16 -18 -4 -14Z" fill="${C.orange}"/><ellipse cx="2" cy="-12" rx="12" ry="10" fill="${C.wood}"/><circle cx="12" cy="-24" r="9" fill="${C.wood}"/><path d="M8 -31 L10 -38 L14 -31Z" fill="${C.wood}"/><circle cx="15" cy="-25" r="1.8" fill="${C.ink}"/><ellipse cx="4" cy="-10" rx="5" ry="6" fill="${C.strawL}"/>`, flip);
  const horse = (x, y, s = 1, flip) => G(x, y, s, `<path d="M-26 -30 L-34 -6 M-12 -30 L-24 -4 M14 -30 L28 -8 M24 -30 L36 -14" stroke="${C.woodD}" stroke-width="7" stroke-linecap="round"/><ellipse cx="0" cy="-36" rx="32" ry="15" fill="${C.wood}"/><path d="M-30 -40 Q-48 -40 -50 -22" stroke="${C.woodD}" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M22 -44 L36 -66 L46 -62 L32 -38Z" fill="${C.wood}"/><path d="M36 -66 Q46 -74 56 -64 Q58 -56 50 -56 L42 -60Z" fill="${C.wood}"/><path d="M24 -46 Q30 -62 38 -70" stroke="${C.woodD}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="46" cy="-66" r="1.8" fill="${C.ink}"/>`, flip);
  const parrot = (x, y, s = 1, flip) => G(x, y, s, `<path d="M-4 -6 L-14 18 L2 10Z" fill="${C.blue}"/><ellipse cx="0" cy="-16" rx="13" ry="18" fill="${C.leaf}"/><path d="M-6 -20 Q-14 -6 -4 4" fill="${C.leafD}"/><circle cx="2" cy="-36" r="11" fill="${C.red}"/><path d="M10 -38 Q20 -36 14 -26 Q11 -30 9 -31Z" fill="${C.straw}"/><circle cx="4" cy="-38" r="2.4" fill="${C.white}"/><circle cx="4.5" cy="-38" r="1.3" fill="${C.ink}"/><path d="M-4 2 v4 M4 2 v4" stroke="${C.ink}" stroke-width="2"/>`, flip);
  const ant = (x, y, s = 1, flip, crumb) => G(x, y, s, `<path d="M-8 -4 l-4 4 M-2 -4 l0 5 M4 -4 l4 4" stroke="${C.ink}" stroke-width="1.5"/><circle cx="-8" cy="-6" r="4" fill="${C.ink}"/><circle cx="0" cy="-6" r="3" fill="${C.ink}"/><circle cx="7" cy="-8" r="4" fill="${C.ink}"/><path d="M9 -12 l3 -5 M6 -12 l1 -6" stroke="${C.ink}" stroke-width="1.2"/>` + (crumb ? `<rect x="2" y="-20" width="9" height="7" rx="2" fill="${C.strawL}"/>` : ''), flip);
  const hen = (x, y, s = 1, flip) => G(x, y, s, `<path d="M-22 -24 Q-34 -40 -20 -42 Q-26 -32 -14 -28Z" fill="${C.woodD}"/><ellipse cx="0" cy="-18" rx="22" ry="17" fill="${C.wood}"/><circle cx="16" cy="-36" r="10" fill="${C.wood}"/><path d="M12 -46 q3 -6 6 0 q3 -6 6 0 Z" fill="${C.red}"/><path d="M25 -36 L32 -33 L25 -30Z" fill="${C.straw}"/><path d="M21 -29 q2 5 -2 6" fill="${C.red}"/><circle cx="19" cy="-38" r="1.8" fill="${C.ink}"/><path d="M-10 -20 Q0 -10 10 -20" stroke="${C.woodD}" stroke-width="2" fill="none"/><path d="M-4 -2 v4 M6 -2 v4" stroke="${C.straw}" stroke-width="3"/>`, flip);
  const chick = (x, y, s = 1, flip) => G(x, y, s, `<circle cx="0" cy="-8" r="8" fill="${C.yellow}"/><circle cx="5" cy="-16" r="5" fill="${C.yellow}"/><path d="M9 -17 L13 -15 L9 -13Z" fill="${C.orange}"/><circle cx="6" cy="-17" r="1" fill="${C.ink}"/>`, flip);
  const bird = (x, y, s = 1, flip, c = C.blue) => G(x, y, s, `<path d="M-12 -8 L-22 -14 L-18 -4Z" fill="${c}"/><ellipse cx="0" cy="-10" rx="13" ry="10" fill="${c}"/><circle cx="10" cy="-18" r="7" fill="${c}"/><path d="M16 -19 L23 -17 L16 -15Z" fill="${C.straw}"/><circle cx="12" cy="-19" r="1.4" fill="${C.ink}"/><path d="M-6 -12 Q0 -4 6 -12" fill="${C.white}" opacity=".6"/>`, flip);
  const dragonfly = (x, y, s = 1, flip) => G(x, y, s, `<ellipse cx="-8" cy="-6" rx="12" ry="4" fill="${C.white}" opacity=".85" transform="rotate(-25 -8 -6)"/><ellipse cx="-8" cy="6" rx="12" ry="4" fill="${C.white}" opacity=".85" transform="rotate(25 -8 6)"/><ellipse cx="6" cy="-6" rx="12" ry="4" fill="${C.white}" opacity=".85" transform="rotate(25 6 -6)"/><ellipse cx="6" cy="6" rx="12" ry="4" fill="${C.white}" opacity=".85" transform="rotate(-25 6 6)"/><rect x="-30" y="-1.6" width="34" height="3.2" rx="1.6" fill="${C.red}"/><circle cx="6" cy="0" r="4" fill="${C.redD}"/>`, flip);

  /* ── đồ vật ── */
  const lute = (x, y, s = 1, rot = -35) => `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><rect x="-2.5" y="-46" width="5" height="40" fill="${C.woodD}"/><circle cx="0" cy="0" r="12" fill="${C.wood}"/><circle cx="0" cy="0" r="4" fill="${C.woodD}"/><rect x="-4" y="-50" width="8" height="6" rx="2" fill="${C.woodD}"/></g>`;
  const plateFish = (x, y, s = 1) => G(x, y, s, `<ellipse cx="0" cy="0" rx="34" ry="8" fill="${C.white}" stroke="${C.greyL}" stroke-width="2"/>` + G(2, -6, 0.62, `<path d="M-20 0 L-34 -12 L-34 12Z" fill="${C.straw}"/><ellipse cx="0" cy="0" rx="22" ry="12" fill="${C.straw}"/><circle cx="12" cy="-3" r="2" fill="${C.ink}"/><path d="M-10 -9 V9 M-2 -11 V11 M6 -10 V10" stroke="${C.woodD}" stroke-width="2"/>`));
  const barrel = (x, y, s = 1, full) => G(x, y, s, `<path d="M-22 0 Q-28 -30 -22 -60 H22 Q28 -30 22 0Z" fill="${C.wood}"/><path d="M-26 -14 H26 M-26 -46 H26" stroke="${C.woodD}" stroke-width="5"/><ellipse cx="0" cy="-60" rx="22" ry="6" fill="${full ? C.water : C.woodD}"/>`);
  const lantern = (x, y, s = 1) => G(x, y, s, `<path d="M0 -40 V-26" stroke="${C.yellow}" stroke-width="2"/><ellipse cx="0" cy="-12" rx="14" ry="16" fill="${C.red}"/><rect x="-7" y="-30" width="14" height="5" rx="2" fill="${C.yellow}"/><rect x="-7" y="2" width="14" height="5" rx="2" fill="${C.yellow}"/><path d="M-3 7 V18 M0 7 V20 M3 7 V18" stroke="${C.yellow}" stroke-width="1.5"/><path d="M-6 -24 Q-10 -12 -6 0 M6 -24 Q10 -12 6 0" stroke="${C.redD}" stroke-width="1.5" fill="none"/>`);
  const banhChung = (x, y, s = 1) => G(x, y, s, `<rect x="-22" y="-36" width="44" height="36" rx="5" fill="${C.leaf}"/><rect x="-22" y="-36" width="44" height="36" rx="5" fill="none" stroke="${C.leafD}" stroke-width="2"/><path d="M-8 -36 V0 M8 -36 V0 M-22 -24 H22 M-22 -12 H22" stroke="${C.strawL}" stroke-width="2.5"/>`);
  const maiBranch = (x, y, s = 1) => G(x, y, s, `<path d="M0 0 Q10 -30 40 -50 M20 -26 Q30 -34 26 -50" stroke="${C.woodD}" stroke-width="4" fill="none" stroke-linecap="round"/>` + [[40, -50], [26, -50], [14, -18], [32, -38], [22, -32], [6, -8]].map(([a, b]) => [0, 72, 144, 216, 288].map((r) => `<circle cx="${n(a + Math.cos(rad(r)) * 4)}" cy="${n(b + Math.sin(rad(r)) * 4)}" r="3.4" fill="${C.yellow}"/>`).join('') + `<circle cx="${a}" cy="${b}" r="2" fill="${C.orange}"/>`).join(''));
  const envelope = (x, y, s = 1, rot = 0) => `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><rect x="-12" y="-18" width="24" height="34" rx="3" fill="${C.red}" stroke="${C.yellow}" stroke-width="2"/><circle cx="0" cy="-2" r="5" fill="${C.yellow}"/></g>`;
  const clock = (x, y, s = 1) => G(x, y, s, `<circle cx="-12" cy="-34" r="6" fill="${C.red}"/><circle cx="12" cy="-34" r="6" fill="${C.red}"/><path d="M-12 0 l-4 6 M12 0 l4 6" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/><circle cx="0" cy="-16" r="18" fill="${C.red}"/><circle cx="0" cy="-16" r="13" fill="${C.white}"/><path d="M0 -16 V-25 M0 -16 H7" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/>`);
  const bubble = (x, y, w, h, text, tail = 'bl', fs = 16) => {
    const t = tail === 'bl' ? `M${x + 14} ${y + h} l-8 12 l18 -12` : `M${x + w - 24} ${y + h} l14 12 l-4 -12`;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${C.white}" stroke="${C.ink}" stroke-width="2"/><path d="${t}" fill="${C.white}" stroke="${C.ink}" stroke-width="2" stroke-linejoin="round"/><rect x="${x + 6}" y="${y + h - 3}" width="${w - 30}" height="5" fill="${C.white}"/><text x="${x + w / 2}" y="${y + h / 2 + fs * 0.36}" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="${fs}" fill="${C.ink}">${text}</text>`;
  };
  const book = (x, y, s = 1, c = C.leaf) => G(x, y, s, `<path d="M0 -4 Q-14 -10 -26 -6 V-30 Q-14 -34 0 -28Z" fill="${C.white}" stroke="${c}" stroke-width="3" stroke-linejoin="round"/><path d="M0 -4 Q14 -10 26 -6 V-30 Q14 -34 0 -28Z" fill="${C.white}" stroke="${c}" stroke-width="3" stroke-linejoin="round"/><path d="M-20 -22 H-6 M-20 -16 H-6 M6 -22 H20 M6 -16 H20" stroke="${C.greyL}" stroke-width="2"/>`);
  const bookStack = (x, y, s = 1) => G(x, y, s, `<rect x="-24" y="-10" width="48" height="10" rx="2" fill="${C.leaf}"/><rect x="-20" y="-20" width="42" height="10" rx="2" fill="${C.peach}"/><rect x="-22" y="-30" width="40" height="10" rx="2" fill="${C.blue}"/><path d="M-20 -5 H20 M-16 -15 H18 M-18 -25 H14" stroke="${C.white}" stroke-width="1.5" opacity=".7"/>`);
  const riceRows = (y0) => Array.from({ length: 4 }, (_, r) => Array.from({ length: 9 }, (_, i) => grassTuft(20 + i * 36 + (r % 2) * 18, y0 + r * 14, 0.8 + r * 0.1)).join('')).join('');
  const well = (x, y) => `<rect x="${x - 70}" y="${y - 150}" width="140" height="150" fill="${C.mud}"/><rect x="${x - 34}" y="${y - 150}" width="68" height="150" fill="#5B6A80"/><rect x="${x - 46}" y="${y - 150}" width="12" height="150" fill="${C.brick}"/><rect x="${x + 34}" y="${y - 150}" width="12" height="150" fill="${C.brick}"/>` +
    Array.from({ length: 8 }, (_, i) => `<path d="M${x - 46} ${y - 150 + i * 19} h12 M${x + 34} ${y - 150 + i * 19} h12" stroke="${C.woodD}" stroke-width="1.5"/>`).join('') +
    `<rect x="${x - 52}" y="${y - 156}" width="24" height="10" rx="3" fill="${C.stone}"/><rect x="${x + 28}" y="${y - 156}" width="24" height="10" rx="3" fill="${C.stone}"/><ellipse cx="${x}" cy="${y - 10}" rx="34" ry="8" fill="${C.waterD}"/>`;

  /* ── 60 cảnh ── */

  /* ════════════════════════════════════════════════════════════════
     PHẦN THÊM cho Trâu Con Kể Chuyện: nhân vật, con vật, đồ vật cổ tích
     và "câu tả cảnh" ngắn gọn để vẽ tranh từng trang truyện.
     ════════════════════════════════════════════════════════════════ */
  C.plum = '#9C7BB0'; C.plumD = '#7A5C8E'; C.gold = '#F2BE4A'; C.goldD = '#C99A2E'; C.silver = '#D9DEE3'; C.iron = '#7D828C';
  const col = (v, d) => (v == null ? d : (C[v] || v));
  const recolor = (svg, map) => Object.keys(map).reduce((s, k) => s.split(k).join(map[k]), svg);

  /* ── nền thêm ── */
  Object.assign(BG, {
    lang: () => BG.day() + `<path d="M0 132 Q14 108 30 126 Q42 100 58 124 Q70 104 84 128 L84 150 H0Z" fill="${C.leafD}" opacity=".55"/>` +
      `<g transform="translate(250 138)"><rect x="-20" y="-16" width="40" height="16" fill="${C.strawL}"/><path d="M-28 -14 L0 -34 L28 -14Z" fill="${C.straw}"/></g>` +
      `<g transform="translate(296 142) scale(.7)"><rect x="-20" y="-16" width="40" height="16" fill="${C.strawL}"/><path d="M-28 -14 L0 -34 L28 -14Z" fill="${C.straw}"/></g>`,
    lua: () => BG.field() + `<path d="M0 120 H320" stroke="${C.leafD}" stroke-width="2" opacity=".4"/>`,
    luachin: () => `<rect width="320" height="200" fill="${C.sky}"/><rect y="118" width="320" height="82" fill="${C.strawL}"/>` +
      Array.from({ length: 6 }, (_, i) => `<path d="M0 ${128 + i * 12} H320" stroke="${C.straw}" stroke-width="4" stroke-dasharray="5 8"/>`).join(''),
    rung: () => `<rect width="320" height="200" fill="#DCEBDD"/>` + [20, 70, 120, 170, 220, 270, 310].map((x, i) => `<circle cx="${x}" cy="${86 + (i % 2) * 14}" r="${34 + (i % 3) * 6}" fill="${i % 2 ? C.leafD : C.leaf}" opacity=".75"/>`).join('') +
      `<path d="M0 140 Q80 130 160 140 T320 136 V200 H0Z" fill="${C.grass2}"/><path d="M0 170 Q90 162 180 168 T320 166 V200 H0Z" fill="${C.leafD}" opacity=".5"/>`,
    nui: () => BG.sky() + mountain(70, 150, 200, 110, '#9DBF8C') + mountain(250, 150, 220, 130, C.leaf) + mountain(160, 150, 160, 80, '#B9D3A4') + `<path d="M0 146 Q80 136 160 146 T320 142 V200 H0Z" fill="${C.grass}"/>`,
    bien: () => BG.sky() + `<rect y="96" width="320" height="104" fill="${C.waterD}"/><rect y="96" width="320" height="6" fill="${C.water}"/>` +
      [[40, 120], [150, 112], [250, 128], [90, 146], [210, 152]].map(([a, b]) => `<path d="M${a - 16} ${b} q8 -6 16 0 t16 0" stroke="${C.white}" stroke-width="2.5" fill="none" opacity=".7"/>`).join('') +
      `<path d="M0 172 Q100 160 200 170 T320 166 V200 H0Z" fill="${C.strawL}"/>`,
    dao: () => BG.sky() + `<rect y="96" width="320" height="104" fill="${C.waterD}"/>` + [[40, 120], [270, 116], [60, 168], [270, 170]].map(([a, b]) => `<path d="M${a - 16} ${b} q8 -6 16 0 t16 0" stroke="${C.white}" stroke-width="2.5" fill="none" opacity=".7"/>`).join('') +
      `<ellipse cx="160" cy="176" rx="150" ry="34" fill="${C.strawL}"/><ellipse cx="160" cy="170" rx="120" ry="20" fill="#F5E2B8"/>`,
    ho: () => BG.sky() + `<rect y="104" width="320" height="96" fill="${C.grass}"/><ellipse cx="160" cy="158" rx="170" ry="44" fill="${C.water}"/>` +
      `<path d="M60 150 q10 -5 20 0 M200 170 q10 -5 20 0 M120 176 q10 -5 20 0" stroke="${C.white}" stroke-width="2.5" fill="none" opacity=".7"/>`,
    cung: () => `<rect width="320" height="200" fill="#F3DFB4"/><rect y="0" width="320" height="18" fill="${C.redD}"/>` +
      [24, 104, 216, 296].map((x) => `<rect x="${x - 7}" y="18" width="14" height="140" fill="${C.red}"/><rect x="${x - 10}" y="152" width="20" height="8" fill="${C.goldD}"/>`).join('') +
      `<rect y="158" width="320" height="42" fill="${C.wood}"/>` + [0, 40, 80, 120, 160, 200, 240, 280].map((x) => `<path d="M${x} 158 l-14 42" stroke="${C.woodD}" stroke-width="1.5" opacity=".5"/>`).join(''),
    sancung: () => BG.sky() + `<rect y="132" width="320" height="68" fill="#E9DCC4"/>` + palace(160, 136, 0.95) + `<path d="M0 132 H320" stroke="${C.stoneD}" stroke-width="2"/>`,
    troi: () => `<rect width="320" height="200" fill="#EDE3F3"/>` + cloud(50, 50, 1.3) + cloud(270, 40, 1.1) + cloud(170, 26, 0.8) +
      `<path d="M0 160 Q40 140 80 156 Q120 136 160 154 Q200 138 240 156 Q280 140 320 154 V200 H0Z" fill="${C.white}"/>`,
    trang: () => BG.night() + [[30, 30], [80, 70], [140, 24], [300, 90], [260, 20], [200, 60]].map(([a, b]) => star(a, b, 4)).join(''),
    bao: () => `<rect width="320" height="200" fill="#B8C2CC"/>` + cloud(60, 40, 1.4).replace(C.cloud, '#8C96A3') + cloud(240, 34, 1.6).replace(C.cloud, '#7F8996') +
      Array.from({ length: 22 }, (_, i) => `<path d="M${(i * 37) % 320} ${40 + (i * 23) % 90} l-6 14" stroke="${C.white}" stroke-width="2" opacity=".8"/>`).join('') +
      `<path d="M0 140 Q40 128 80 140 T160 140 T240 140 T320 140 V200 H0Z" fill="${C.waterD}"/><path d="M0 160 Q40 148 80 160 T160 160 T240 160 T320 160" stroke="${C.white}" stroke-width="3" fill="none" opacity=".6"/>`,
    gieng: () => `<rect width="320" height="200" fill="#6B6158"/>` + Array.from({ length: 7 }, (_, r) => Array.from({ length: 6 }, (_, i) => `<rect x="${i * 58 - (r % 2) * 29}" y="${r * 30}" width="54" height="26" rx="5" fill="${C.stoneD}" opacity=".55"/>`).join('')).join('') +
      `<circle cx="160" cy="34" r="30" fill="${C.sky}" stroke="${C.stone}" stroke-width="6"/><rect y="168" width="320" height="32" fill="#5B6A80"/>`,
    vuon: () => BG.day() + Array.from({ length: 17 }, (_, i) => `<rect x="${i * 20}" y="128" width="8" height="30" rx="3" fill="${C.wood}"/>`).join('') + `<path d="M0 136 H320 M0 150 H320" stroke="${C.woodD}" stroke-width="3"/>`,
    hang: () => `<rect width="320" height="200" fill="#8E7660"/><path d="M0 0 H320 V200 H0Z M60 200 Q60 60 160 50 Q260 60 260 200Z" fill="#6E5A47" fill-rule="evenodd"/><rect y="180" width="320" height="20" fill="#5E4C3C"/>`,
    han: () => `<rect width="320" height="200" fill="#F6E7C4"/><rect y="118" width="320" height="82" fill="#D9B98F"/>` + [[30, 140, 'l20 6 l-6 12 l18 8'], [130, 150, 'l-14 10 l10 8 l-6 14'], [210, 132, 'l24 4 l-4 14 l16 10'], [270, 170, 'l-20 6 l8 12'], [70, 176, 'l18 -6 l10 10']].map(([a, b, d]) => `<path d="M${a} ${b} ${d}" stroke="#A98C6B" stroke-width="2.5" fill="none" stroke-linecap="round"/>`).join(''),
    duong: () => BG.day() + `<path d="M120 200 Q150 160 170 146 L200 146 Q200 170 240 200Z" fill="${C.strawL}"/>`
  });

  /* ── người (thêm áo dài, râu, vương miện, cánh tiên, gậy…) ── */
  const FACE = {
    smile: `<circle cx="-5.5" cy="-67" r="2" fill="${C.ink}"/><circle cx="5.5" cy="-67" r="2" fill="${C.ink}"/><path d="M-5 -60 Q0 -55 5 -60" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    open: `<circle cx="-5.5" cy="-67" r="2" fill="${C.ink}"/><circle cx="5.5" cy="-67" r="2" fill="${C.ink}"/><ellipse cx="0" cy="-58.5" rx="3.5" ry="3" fill="${C.redD}"/>`,
    happy: `<path d="M-8 -66 Q-5.5 -70 -3 -66" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M3 -66 Q5.5 -70 8 -66" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M-5 -60 Q0 -54 5 -60" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    wow: `<circle cx="-5.5" cy="-67" r="2.4" fill="${C.ink}"/><circle cx="5.5" cy="-67" r="2.4" fill="${C.ink}"/><circle cx="0" cy="-58.5" r="3" fill="${C.redD}"/>`,
    sad: `<circle cx="-5.5" cy="-67" r="2" fill="${C.ink}"/><circle cx="5.5" cy="-67" r="2" fill="${C.ink}"/><path d="M-4 -58 Q0 -62 4 -58" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    cry: `<path d="M-8 -67 H-3 M3 -67 H8" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/><path d="M-4 -58 Q0 -62 4 -58" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M-6 -64 q-2 5 0 7 q2 -2 0 -7Z M7 -64 q-2 5 0 7 q2 -2 0 -7Z" fill="${C.blue}"/>`,
    angry: `<path d="M-9 -72 L-3 -69 M9 -72 L3 -69" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/><circle cx="-5.5" cy="-66" r="2" fill="${C.ink}"/><circle cx="5.5" cy="-66" r="2" fill="${C.ink}"/><path d="M-4 -58 Q0 -61 4 -58" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    sly: `<path d="M-8 -67 H-3 M3 -67 H8" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"/><path d="M-5 -60 Q2 -56 6 -61" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    sleepy: `<path d="M-8 -67 H-3 M3 -67 H8" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/><ellipse cx="0" cy="-58.5" rx="2.4" ry="2" fill="${C.redD}"/>`,
    blind: `<path d="M-9 -67 Q-5.5 -64 -2 -67 M2 -67 Q5.5 -64 9 -67" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M-5 -60 Q0 -56 5 -60" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`
  };
  const HOLD = {
    axe: (c) => `<g transform="rotate(-30)"><rect x="-2" y="-34" width="4" height="38" rx="2" fill="${C.woodD}"/><path d="M1 -33 L6 -32 Q9 -37 16 -38 Q13 -28 16 -18 Q9 -19 6 -23 L1 -22Z" fill="${col(c, C.iron)}" stroke="${C.ink}" stroke-width="1.2" stroke-linejoin="round"/></g>`,
    sword: () => `<g transform="rotate(-20)"><rect x="-2.5" y="-46" width="5" height="38" fill="${C.silver}" stroke="${C.greyD}" stroke-width="1"/><path d="M-2.5 -46 L0 -52 L2.5 -46Z" fill="${C.silver}"/><rect x="-8" y="-9" width="16" height="4" rx="2" fill="${C.gold}"/><rect x="-2" y="-6" width="4" height="10" fill="${C.woodD}"/></g>`,
    bamboo: () => `<g transform="rotate(-25)"><rect x="-3" y="-60" width="6" height="66" rx="3" fill="${C.leaf}"/>${[-48, -32, -16].map((v) => `<path d="M-3 ${v} h6" stroke="${C.leafD}" stroke-width="2"/>`).join('')}<path d="M0 -60 q-10 -10 -4 -18 M0 -60 q10 -8 6 -18" stroke="${C.leafD}" stroke-width="3" fill="none"/></g>`,
    stick: () => `<path d="M0 -6 L6 40" stroke="${C.woodD}" stroke-width="3" stroke-linecap="round"/>`,
    staff: () => `<path d="M0 -40 V46" stroke="${C.woodD}" stroke-width="4" stroke-linecap="round"/><circle cx="0" cy="-44" r="6" fill="${C.gold}"/>`,
    flower: () => `<path d="M0 0 V-18" stroke="${C.leafD}" stroke-width="2"/>${Array.from({ length: 12 }, (_, i) => `<ellipse cx="0" cy="-24" rx="1.8" ry="6" fill="${C.white}" stroke="${C.greyL}" stroke-width=".6" transform="rotate(${i * 30} 0 -20)"/>`).join('')}<circle cy="-20" r="3" fill="${C.yellow}"/>`,
    bag: () => `<path d="M-10 6 Q-14 -10 -5 -14 L-3 -18 H3 L5 -14 Q14 -10 10 6Z" fill="${C.strawL}" stroke="${C.woodD}" stroke-width="1.5"/><path d="M-4 -15 H4" stroke="${C.red}" stroke-width="2"/>`,
    gourd: () => `<circle cx="0" cy="-2" r="8" fill="#C9D98A"/><circle cx="0" cy="-13" r="5" fill="#C9D98A"/><rect x="-1.5" y="-21" width="3" height="4" fill="${C.woodD}"/>`,
    bowl: () => `<path d="M-10 -6 Q0 8 10 -6Z" fill="${C.white}" stroke="${C.blue}" stroke-width="1.5"/><path d="M-9 -6 Q0 -14 9 -6Z" fill="${C.white}"/>`,
    broom: () => `<g transform="rotate(25)"><path d="M0 -40 V10" stroke="${C.woodD}" stroke-width="3"/><path d="M-8 10 L0 2 L8 10 L6 26 H-6Z" fill="${C.straw}"/></g>`,
    bow: () => `<path d="M-4 -30 Q14 -6 -4 22" stroke="${C.woodD}" stroke-width="3" fill="none"/><path d="M-4 -30 V22" stroke="${C.greyL}" stroke-width="1"/>`,
    lute: () => lute(0, 0, 0.6, -40),
    book: () => book(0, 6, 0.5),
    paint: () => `<rect x="-4" y="-22" width="3" height="24" fill="${C.woodD}" transform="rotate(20)"/><circle cx="-6" cy="-22" r="4" fill="${C.red}"/>`,
    sheaf: () => `<g transform="scale(.5) translate(0 18)">${Array.from({ length: 7 }, (_, i) => { const a = -30 + i * 10; return `<path d="M0 -14 L${n(Math.sin(rad(a)) * 40)} ${n(-14 - Math.cos(rad(a)) * 40)}" stroke="${C.straw}" stroke-width="4"/><circle cx="${n(Math.sin(rad(a)) * 42)}" cy="${n(-14 - Math.cos(rad(a)) * 42)}" r="5" fill="${C.gold}"/>`; }).join('')}<rect x="-7" y="-18" width="14" height="6" fill="${C.wood}"/></g>`,
    torch: () => `<rect x="-2" y="-24" width="4" height="30" fill="${C.woodD}"/>${fire(0, -22, 0.4)}`,
    net: () => `<path d="M0 0 L-6 -30 M0 0 Q-20 10 -30 30 Q0 40 30 30 Q20 10 0 0" stroke="${C.greyD}" stroke-width="1.5" fill="none"/><path d="M-22 22 H22 M-14 12 H14 M-8 4 L-20 32 M8 4 L20 32" stroke="${C.greyL}" stroke-width="1"/>`
  };
  function person(o) {
    const s = o.s || 1.2, shirt = col(o.shirt, C.blue), pants = col(o.pants, C.ink), hairC = col(o.hairC, C.ink);
    const armA = (side, a) => { const sx = side * 11, ex = sx + side * Math.sin(rad(a)) * 19, ey = -46 + Math.cos(rad(a)) * 19; return { svg: `<path d="M${sx} -46 L${n(ex)} ${n(ey)}" stroke="${shirt}" stroke-width="7" stroke-linecap="round"/><circle cx="${n(ex)}" cy="${n(ey)}" r="4.2" fill="${C.skin}"/>`, ex, ey }; };
    const aL = armA(-1, o.armL == null ? 8 : o.armL), aR = armA(1, o.armR == null ? (o.hold ? 40 : 8) : o.armR);
    let legs;
    if (o.robe) legs = `<path d="M-13 -50 Q-15 -26 -20 0 H20 Q15 -26 13 -50Z" fill="${shirt}"/><path d="M-13 -36 H13" stroke="${col(o.belt, C.gold)}" stroke-width="3"/><path d="M-18 0 h10 M8 0 h10" stroke="${C.ink}" stroke-width="3" stroke-linecap="round"/>`;
    else if (o.legs === 'run') legs = `<path d="M-4 -24 L-14 -6 L-20 -4" stroke="${pants}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M4 -24 L12 -2" stroke="${pants}" stroke-width="8" stroke-linecap="round"/>`;
    else if (o.legs === 'sit') legs = `<path d="M-6 -24 H8 V-2" stroke="${pants}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M0 -24 H14 V-2" stroke="${pants}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    else if (o.legs === 'jump') legs = `<path d="M-5 -24 L-12 -12 L-6 -2" stroke="${pants}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M5 -24 L12 -12 L6 -2" stroke="${pants}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
    else legs = `<rect x="-9" y="-26" width="8" height="26" rx="4" fill="${pants}"/><rect x="1" y="-26" width="8" height="26" rx="4" fill="${pants}"/>`;
    const hairs = {
      boy: `<path d="M-15 -68 Q-16 -84 0 -84 Q16 -84 15 -68 Q10 -76 0 -75 Q-8 -77 -15 -68Z" fill="${hairC}"/>`,
      girl: `<path d="M-15 -64 Q-17 -85 0 -84 Q17 -85 15 -64 Q14 -74 6 -76 Q-6 -72 -15 -64Z" fill="${hairC}"/><circle cx="-16" cy="-62" r="6" fill="${hairC}"/><circle cx="16" cy="-62" r="6" fill="${hairC}"/>`,
      long: `<path d="M-16 -46 Q-19 -86 0 -84 Q19 -86 16 -46 L12 -48 Q14 -72 4 -76 Q-8 -72 -12 -48Z" fill="${hairC}"/>`,
      bun: `<circle cx="0" cy="-86" r="7" fill="${hairC}"/><path d="M-15 -66 Q-16 -84 0 -83 Q16 -84 15 -66 Q12 -76 0 -76 Q-12 -76 -15 -66Z" fill="${hairC}"/>`,
      bunw: `<circle cx="0" cy="-86" r="7" fill="${C.greyL}"/><path d="M-15 -66 Q-16 -84 0 -83 Q16 -84 15 -66 Q12 -76 0 -76 Q-12 -76 -15 -66Z" fill="${C.greyL}"/>`,
      old: `<path d="M-15 -68 Q-16 -84 0 -84 Q16 -84 15 -68 Q10 -76 0 -75 Q-8 -77 -15 -68Z" fill="${C.greyL}"/>`,
      grandpa: `<path d="M-15 -66 Q-15 -78 -8 -80 Q0 -76 8 -80 Q15 -78 15 -66 Q13 -72 8 -72 Q0 -72 -8 -72 Q-13 -72 -15 -66Z" fill="${C.greyL}"/>`,
      bald: `<path d="M-15 -62 Q-16 -70 -13 -72 M15 -62 Q16 -70 13 -72" stroke="${C.white}" stroke-width="4" stroke-linecap="round"/>`,
      top: `<circle cx="0" cy="-86" r="5" fill="${hairC}"/><path d="M-15 -66 Q-16 -84 0 -83 Q16 -84 15 -66 Q12 -76 0 -76 Q-12 -76 -15 -66Z" fill="${hairC}"/>`,
      none: ''
    };
    const beard = o.beard ? `<path d="M-10 -60 Q-8 ${o.beard === 'long' ? -30 : -44} 0 ${o.beard === 'long' ? -26 : -40} Q8 ${o.beard === 'long' ? -30 : -44} 10 -60 Q0 -55 -10 -60Z" fill="${col(o.beardC, C.white)}" stroke="${C.greyL}" stroke-width="1"/>` : '';
    const mus = o.mus ? `<path d="M-8 -59 Q-4 -62 0 -59 Q4 -62 8 -59" stroke="${C.ink}" stroke-width="2.5" fill="none" stroke-linecap="round"/>` : '';
    const crown = o.crown ? `<path d="M-12 -79 L-12 -92 L-6 -85 L0 -96 L6 -85 L12 -92 L12 -79Z" fill="${C.gold}" stroke="${C.goldD}" stroke-width="1.5" stroke-linejoin="round"/><circle cx="0" cy="-86" r="2" fill="${C.red}"/>` : '';
    const tiara = o.tiara ? `<path d="M-9 -81 L-6 -88 L-2 -83 L0 -90 L2 -83 L6 -88 L9 -81Z" fill="${C.gold}" stroke="${C.goldD}" stroke-width="1"/>` : '';
    const khan = o.khan ? `<path d="M-16 -70 Q-17 -86 0 -86 Q17 -86 16 -70 Q0 -76 -16 -70Z" fill="${col(o.khan === true ? null : o.khan, C.ink)}"/><path d="M-15 -76 Q0 -82 15 -76 M-16 -71 Q0 -78 16 -71" stroke="${C.greyD}" stroke-width="1.2" fill="none"/>` : '';
    const helmet = o.helmet ? `<path d="M-17 -68 Q-17 -90 0 -90 Q17 -90 17 -68 Q0 -74 -17 -68Z" fill="${C.iron}"/><path d="M0 -90 V-100" stroke="${C.red}" stroke-width="4" stroke-linecap="round"/><path d="M-17 -68 H17" stroke="${C.greyD}" stroke-width="2"/>` : '';
    const hat = o.hat ? `<path d="M-27 -72 Q0 -80 27 -72 L0 -100Z" fill="${C.straw}"/><path d="M0 -100 L-14 -74 M0 -100 L-4 -76 M0 -100 L6 -76 M0 -100 L16 -74" stroke="${C.woodD}" stroke-width="1" opacity=".5"/><path d="M-27 -72 Q0 -80 27 -72" stroke="${C.woodD}" stroke-width="1.5" fill="none"/>` : '';
    const scarf = o.scarf ? `<path d="M-16 -64 Q-18 -86 0 -86 Q18 -86 16 -64 Q14 -78 0 -78 Q-14 -78 -16 -64Z" fill="${col(o.scarf === true ? null : o.scarf, C.wood)}"/>` : '';
    const glasses = o.glasses ? `<circle cx="-6" cy="-67" r="4.5" fill="${C.ink}"/><circle cx="6" cy="-67" r="4.5" fill="${C.ink}"/><path d="M-1.5 -67 H1.5" stroke="${C.ink}" stroke-width="2"/>` : '';
    const wings = o.wings ? `<ellipse cx="-22" cy="-56" rx="14" ry="22" fill="${C.white}" opacity=".85" stroke="${C.sky}" stroke-width="2" transform="rotate(-25 -22 -56)"/><ellipse cx="22" cy="-56" rx="14" ry="22" fill="${C.white}" opacity=".85" stroke="${C.sky}" stroke-width="2" transform="rotate(25 22 -56)"/>` : '';
    const patch = o.patch ? `<rect x="-8" y="-46" width="7" height="7" fill="${C.strawL}" transform="rotate(10 -4 -42)"/><rect x="3" y="-34" width="6" height="6" fill="${C.peach}"/>` : '';
    const armor = o.armor ? `<path d="M-13 -50 H13 V-30 H-13Z" fill="${C.iron}"/><path d="M-13 -44 H13 M-13 -38 H13" stroke="${C.greyD}" stroke-width="1.5"/>` : '';
    const body = o.robe ? '' : `<rect x="-13" y="-52" width="26" height="30" rx="10" fill="${shirt}"/>`;
    const hold = o.hold && HOLD[o.hold] ? `<g transform="translate(${n(aR.ex)} ${n(aR.ey)})">${HOLD[o.hold](o.holdC)}</g>` : '';
    const sparkles = o.glow ? sparkle(-26, -80, 5, C.yellow) + sparkle(28, -60, 4, C.yellow) + sparkle(-24, -30, 3.5, C.yellow) : '';
    const head = `<circle cx="0" cy="-66" r="15" fill="${C.skin}"/>${scarf}${hairs[o.hair || 'boy']}<circle cx="-9" cy="-61" r="2.6" fill="${C.pink}" opacity=".7"/><circle cx="9" cy="-61" r="2.6" fill="${C.pink}" opacity=".7"/>${FACE[o.face || 'smile']}${glasses}${mus}${beard}${khan}${helmet}${crown}${tiara}${hat}`;
    return G(o.x, o.y, s, sparkles + wings + legs + aL.svg + body + armor + patch + aR.svg + head + hold, o.flip);
  }

  /* ── con vật thêm ── */
  const tiger = (x, y, s = 1, f, o = {}) => G(x, y, s,
    `<path d="M-32 -28 Q-52 -34 -46 -52" stroke="${C.orange}" stroke-width="6" fill="none" stroke-linecap="round"/>` +
    [-26, -12, 12, 24].map((a) => `<rect x="${a}" y="-18" width="9" height="18" rx="4" fill="${C.orange}"/>`).join('') +
    `<ellipse cx="0" cy="-28" rx="36" ry="17" fill="${C.orange}"/><ellipse cx="2" cy="-18" rx="24" ry="6" fill="#F7D3A8"/>` +
    (o.plain ? '' : [-22, -10, 2, 14].map((a) => `<path d="M${a} -44 q5 8 0 15" stroke="${C.ink}" stroke-width="3" fill="none" stroke-linecap="round"/>`).join('')) +
    (o.rope ? `<path d="M-30 -36 Q0 -22 30 -36 M-30 -20 Q0 -8 30 -20" stroke="${C.woodD}" stroke-width="4" fill="none"/>` : '') +
    `<g transform="translate(38 -42)"><path d="M-13 -8 L-10 -22 L-2 -14Z M13 -8 L10 -22 L2 -14Z" fill="${C.orange}"/><circle r="16" fill="${C.orange}"/><ellipse cx="0" cy="6" rx="10" ry="7" fill="#F7D3A8"/>` +
    (o.angry ? `<path d="M-10 -8 l6 3 M10 -8 l-6 3" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"/>` : '') + `<circle cx="-6" cy="-3" r="2.4" fill="${C.ink}"/><circle cx="6" cy="-3" r="2.4" fill="${C.ink}"/><path d="M-3 3 h6 l-3 3Z" fill="${C.ink}"/>` +
    `<path d="M-4 9 Q0 12 4 9 M-8 6 h-10 M-8 9 l-9 3 M8 6 h10 M8 9 l9 3" stroke="${C.ink}" stroke-width="1.2" fill="none"/>` + (o.plain ? '' : `<path d="M-4 -14 v5 M4 -14 v5 M0 -15 v6" stroke="${C.ink}" stroke-width="2"/>`) + `</g>`, f);
  const cow = (x, y, s, f) => recolor(buffalo(x, y, s, f), { [C.greyD]: C.woodD, [C.grey]: C.wood, [C.greyL]: C.strawL });
  const goldTurtle = (x, y, s, f) => recolor(turtle(x, y, s, f), { [C.leafD]: C.goldD, [C.leaf]: C.yellow, '#9CC48A': C.strawL });
  const ironHorse = (x, y, s, f, o = {}) => recolor(horse(x, y, s, f), { [C.woodD]: C.greyD, [C.wood]: C.iron }) + (o.fire ? G(x, y, s, fire(56, -60, 0.6, true), f) : '');
  const toad = (x, y, s = 1) => recolor(frog(x, y, s), { [C.leafD]: '#7E6548', [C.leaf]: C.mud, '#BFE0A8': '#D8C3A0' }) + G(x, y, s, [[-12, -18], [10, -22], [-2, -24], [14, -12], [-16, -10]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="2" fill="#7E6548"/>`).join(''));
  const rooster = (x, y, s = 1, f) => G(x, y, s, `<path d="M-18 -26 Q-44 -60 -24 -62 Q-30 -42 -12 -30Z" fill="${C.leafD}"/><path d="M-20 -24 Q-48 -42 -36 -54 Q-30 -36 -14 -26Z" fill="${C.redD}"/>`, f) + hen(x, y, s, f) + G(x, y, s, `<path d="M10 -46 q3 -9 6 0 q3 -9 6 0 q3 -7 5 1Z" fill="${C.red}"/>`, f);
  const crow = (x, y, s = 1, f, o = {}) => (o.white ? bird(x, y, s, f, C.white) + G(x, y, s, `<ellipse cx="0" cy="-10" rx="13" ry="10" fill="none" stroke="${C.greyL}" stroke-width="1.2"/>`, f) : bird(x, y, s, f, C.ink) + G(x, y, s, `<circle cx="12" cy="-19" r="2.4" fill="${C.white}"/><circle cx="12.6" cy="-19" r="1.3" fill="${C.ink}"/>`, f));
  const peacock = (x, y, s = 1, f, o = {}) => {
    const tc = o.plain ? C.white : C.leaf, ec = o.plain ? C.greyL : C.blue, bc = o.plain ? C.white : '#4F8FB5';
    const fan = Array.from({ length: 9 }, (_, i) => { const a = rad(-170 + i * 20); const ex = n(-6 + Math.cos(a) * 46), ey = n(-30 + Math.sin(a) * 46); return `<path d="M-6 -26 L${ex} ${ey}" stroke="${o.plain ? C.greyL : C.leafD}" stroke-width="2"/><ellipse cx="${ex}" cy="${ey}" rx="8" ry="11" fill="${tc}" stroke="${o.plain ? C.greyL : C.leafD}" stroke-width="1"/><circle cx="${ex}" cy="${ey}" r="3.6" fill="${ec}"/>`; }).join('');
    return G(x, y, s, fan + `<path d="M-4 -2 v6 M6 -2 v6" stroke="${C.straw}" stroke-width="3"/><ellipse cx="0" cy="-18" rx="14" ry="13" fill="${bc}" stroke="${o.plain ? C.greyL : 'none'}"/><path d="M6 -26 Q10 -40 12 -46" stroke="${bc}" stroke-width="8" stroke-linecap="round"/><circle cx="13" cy="-48" r="7" fill="${bc}" stroke="${o.plain ? C.greyL : 'none'}"/><path d="M12 -55 l-3 -7 M14 -55 l0 -8 M16 -55 l3 -7" stroke="${bc === C.white ? C.greyL : bc}" stroke-width="1.5"/><path d="M19 -49 L25 -47 L19 -45Z" fill="${C.straw}"/><circle cx="15" cy="-49" r="1.5" fill="${C.ink}"/>`, f);
  };
  const eagle = (x, y, s = 1, f) => G(x, y, s, `<path d="M-6 -24 Q-30 -64 -76 -56 Q-58 -48 -50 -38 Q-66 -36 -70 -24 Q-40 -30 -10 -16Z" fill="${C.woodD}"/><path d="M6 -24 Q30 -64 76 -56 Q58 -48 50 -38 Q66 -36 70 -24 Q40 -30 10 -16Z" fill="${C.wood}"/><ellipse cx="0" cy="-16" rx="14" ry="18" fill="${C.woodD}"/><path d="M-8 0 L0 12 L8 0Z" fill="${C.woodD}"/><circle cx="6" cy="-36" r="10" fill="${C.white}"/><path d="M14 -38 Q22 -36 16 -30Z" fill="${C.gold}"/><circle cx="9" cy="-38" r="1.8" fill="${C.ink}"/><path d="M4 -42 l8 2" stroke="${C.ink}" stroke-width="1.5"/>`, f);
  const crab = (x, y, s = 1, f) => G(x, y, s, [-1, 1].map((d) => [0, 1, 2].map((i) => `<path d="M${d * 14} ${-10 + i * 4} l${d * 14} ${4 + i * 3}" stroke="${C.redD}" stroke-width="3" stroke-linecap="round"/>`).join('') + `<path d="M${d * 16} -18 Q${d * 26} -26 ${d * 28} -32" stroke="${C.redD}" stroke-width="4" fill="none"/><path d="M${d * 22} -30 a8 8 0 1 0 ${d * 14} -2 l${d * -6} 0 l${d * -2} 6Z" fill="${C.red}"/>`).join('') + `<ellipse cx="0" cy="-14" rx="20" ry="12" fill="${C.red}"/><path d="M-5 -24 v-6 M5 -24 v-6" stroke="${C.redD}" stroke-width="2"/><circle cx="-5" cy="-31" r="3" fill="${C.white}"/><circle cx="5" cy="-31" r="3" fill="${C.white}"/><circle cx="-5" cy="-31" r="1.5" fill="${C.ink}"/><circle cx="5" cy="-31" r="1.5" fill="${C.ink}"/><path d="M-5 -10 Q0 -6 5 -10" stroke="${C.redD}" stroke-width="1.5" fill="none"/>`, f);
  const bear = (x, y, s = 1, f) => G(x, y, s, `<rect x="-24" y="-16" width="12" height="16" rx="5" fill="${C.woodD}"/><rect x="12" y="-16" width="12" height="16" rx="5" fill="${C.woodD}"/><ellipse cx="0" cy="-30" rx="28" ry="22" fill="${C.woodD}"/><ellipse cx="0" cy="-26" rx="15" ry="13" fill="${C.wood}"/><circle cx="-14" cy="-70" r="7" fill="${C.woodD}"/><circle cx="14" cy="-70" r="7" fill="${C.woodD}"/><circle cx="0" cy="-58" r="18" fill="${C.woodD}"/><ellipse cx="0" cy="-52" rx="8" ry="6" fill="${C.wood}"/><circle cx="0" cy="-54" r="2.4" fill="${C.ink}"/><circle cx="-7" cy="-62" r="2" fill="${C.ink}"/><circle cx="7" cy="-62" r="2" fill="${C.ink}"/>`, f);
  const bee = (x, y, s = 1, f) => G(x, y, s, `<ellipse cx="-4" cy="-14" rx="6" ry="9" fill="${C.white}" opacity=".8" transform="rotate(-20 -4 -14)"/><ellipse cx="4" cy="-14" rx="6" ry="9" fill="${C.white}" opacity=".8" transform="rotate(20 4 -14)"/><ellipse cx="0" cy="-4" rx="11" ry="7" fill="${C.yellow}"/><path d="M-4 -10 v12 M2 -10 v12" stroke="${C.ink}" stroke-width="3"/><circle cx="10" cy="-5" r="1.4" fill="${C.ink}"/>`, f);
  const fox = (x, y, s = 1, f) => G(x, y, s, `<path d="M-18 -16 Q-46 -12 -40 -36 Q-30 -26 -16 -24Z" fill="${C.orange}"/><path d="M-40 -36 Q-44 -28 -36 -26Z" fill="${C.white}"/><rect x="-14" y="-12" width="6" height="12" rx="3" fill="${C.orange}"/><rect x="8" y="-12" width="6" height="12" rx="3" fill="${C.orange}"/><ellipse cx="0" cy="-18" rx="20" ry="11" fill="${C.orange}"/><path d="M12 -26 L14 -46 L22 -34 L30 -46 L32 -26 Q34 -18 44 -20 Q34 -10 22 -14 Q12 -16 12 -26Z" fill="${C.orange}"/><path d="M30 -18 Q38 -18 44 -20 Q36 -12 26 -14Z" fill="${C.white}"/><circle cx="44" cy="-20" r="2" fill="${C.ink}"/><circle cx="24" cy="-30" r="1.8" fill="${C.ink}"/>`, f);
  const python = (x, y, s = 1, f) => G(x, y, s, `<ellipse cx="0" cy="-12" rx="46" ry="14" fill="#7E9A5A"/><ellipse cx="-4" cy="-30" rx="36" ry="12" fill="#8DAA66"/><ellipse cx="-8" cy="-46" rx="24" ry="10" fill="#7E9A5A"/>` +
    [[-30, -12], [-6, -14], [20, -12], [-20, -30], [8, -30]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="4" fill="${C.leafD}" opacity=".7"/>`).join('') +
    `<path d="M-2 -50 Q14 -70 30 -66" stroke="#8DAA66" stroke-width="14" fill="none" stroke-linecap="round"/><ellipse cx="36" cy="-68" rx="16" ry="11" fill="#8DAA66"/><circle cx="36" cy="-74" r="3.5" fill="${C.yellow}"/><circle cx="37" cy="-74" r="1.6" fill="${C.ink}"/><path d="M30 -79 l8 2" stroke="${C.ink}" stroke-width="2"/><path d="M50 -66 l10 -2 m-10 2 l9 4" stroke="${C.red}" stroke-width="2"/>`, f);
  const dragon = (x, y, s = 1, f, o = {}) => { const c1 = col(o.c, C.gold), c2 = C.goldD; return G(x, y, s, `<path d="M-90 -30 Q-70 -70 -40 -40 Q-10 -10 20 -40 Q44 -64 62 -50" stroke="${c1}" stroke-width="16" fill="none" stroke-linecap="round"/>` +
    [[-78, -52], [-50, -50], [-22, -24], [6, -30], [34, -56]].map(([a, b]) => `<path d="M${a} ${b} l6 -10 l6 10Z" fill="${c2}"/>`).join('') +
    `<path d="M-90 -30 l-12 6 l4 -12Z" fill="${c2}"/><ellipse cx="70" cy="-52" rx="16" ry="12" fill="${c1}"/><path d="M80 -48 Q92 -44 88 -38 Q80 -40 76 -42Z" fill="${c1}"/><path d="M64 -62 l-6 -12 M72 -63 l2 -12" stroke="${c2}" stroke-width="3" stroke-linecap="round"/><circle cx="74" cy="-56" r="2.4" fill="${C.ink}"/><path d="M86 -42 q14 -2 18 8 M84 -40 q8 8 4 16" stroke="${c2}" stroke-width="1.6" fill="none"/>` +
    [[-60, -36], [10, -24]].map(([a, b]) => `<path d="M${a} ${b} l-4 10 m4 -10 l2 10 m-2 -10 l7 8" stroke="${c2}" stroke-width="2.5" stroke-linecap="round"/>`).join(''), f); };
  const devil = (x, y, s = 1, f) => G(x, y, s, `<rect x="-14" y="-16" width="10" height="16" rx="4" fill="${C.plumD}"/><rect x="4" y="-16" width="10" height="16" rx="4" fill="${C.plumD}"/><ellipse cx="0" cy="-34" rx="22" ry="22" fill="${C.plum}"/><path d="M-12 -62 L-18 -78 L-6 -66Z M12 -62 L18 -78 L6 -66Z" fill="${C.strawL}"/><circle cx="0" cy="-58" r="14" fill="${C.plum}"/><circle cx="-5" cy="-60" r="3" fill="${C.white}"/><circle cx="5" cy="-60" r="3" fill="${C.white}"/><circle cx="-5" cy="-60" r="1.5" fill="${C.ink}"/><circle cx="5" cy="-60" r="1.5" fill="${C.ink}"/><path d="M-6 -52 Q0 -48 6 -52" stroke="${C.ink}" stroke-width="2" fill="none"/><path d="M-3 -51 v2 M3 -51 v2" stroke="${C.white}" stroke-width="2"/><path d="M-22 -36 L-32 -24 M22 -36 L32 -24" stroke="${C.plum}" stroke-width="7" stroke-linecap="round"/><path d="M18 -12 Q30 -6 26 6" stroke="${C.plumD}" stroke-width="3" fill="none"/>`, f);
  const snail = (x, y, s = 1, f, o = {}) => G(x, y, s, `<path d="M-26 0 Q-30 -6 -20 -8 H22 Q30 -8 30 0Z" fill="#E9C9B4"/><circle cx="0" cy="-22" r="18" fill="${C.peach}" stroke="${C.wood}" stroke-width="2"/><path d="M0 -22 m-3 0 a3 3 0 1 1 6 0 a7 7 0 1 1 -14 0 a11 11 0 1 1 22 0 a15 15 0 1 1 -28 4" stroke="${C.wood}" stroke-width="2" fill="none"/><path d="M24 -8 l4 -14 M28 -8 l6 -12" stroke="#E9C9B4" stroke-width="3" stroke-linecap="round"/>` + (o.glow ? sparkle(-24, -40, 5, C.yellow) + sparkle(26, -40, 4, C.yellow) : ''), f);
  const coconut = (x, y, s = 1, f, o = {}) => G(x, y, s, `<path d="M-8 -2 v4 M8 -2 v4" stroke="${C.woodD}" stroke-width="5" stroke-linecap="round"/><path d="M-24 -26 l-8 6 M24 -26 l8 -6" stroke="${C.woodD}" stroke-width="5" stroke-linecap="round"/><circle cx="0" cy="-26" r="24" fill="#8A6142"/>` + [[-14, -40], [10, -44], [-4, -12], [16, -18], [-18, -20]].map(([a, b]) => `<path d="M${a} ${b} q4 -2 8 0" stroke="#6E4B31" stroke-width="2" fill="none"/>`).join('') +
    `<circle cx="-8" cy="-30" r="2.6" fill="${C.ink}"/><circle cx="8" cy="-30" r="2.6" fill="${C.ink}"/><path d="M-6 -20 Q0 -14 6 -20" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="-14" cy="-24" r="3" fill="${C.pink}" opacity=".6"/><circle cx="14" cy="-24" r="3" fill="${C.pink}" opacity=".6"/>` + (o.hat ? `<path d="M-30 -42 Q0 -50 30 -42 L0 -68Z" fill="${C.straw}"/>` : ''), f);

  /* ── đồ vật, cây cối, nhà cửa ── */
  function palace(x, y, s = 1) {
    const tip = (a, b, d) => `<path d="M${a} ${b} q${d * 8} -2 ${d * 12} -10" stroke="${C.redD}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    return G(x, y, s, `<rect x="-86" y="-8" width="172" height="8" fill="${C.stone}"/><rect x="-66" y="-56" width="132" height="48" fill="${C.yellow}"/>` +
      [-58, -30, 30, 58].map((a) => `<rect x="${a - 4}" y="-56" width="8" height="48" fill="${C.red}"/>`).join('') + `<path d="M-14 -8 V-34 Q0 -46 14 -34 V-8Z" fill="${C.wood}"/>` +
      `<path d="M-84 -54 L-62 -76 H62 L84 -54Z" fill="${C.redD}"/>${tip(-84, -54, -1)}${tip(84, -54, 1)}<rect x="-36" y="-96" width="72" height="22" fill="${C.yellow}"/><path d="M-50 -94 L-32 -112 H32 L50 -94Z" fill="${C.redD}"/>${tip(-50, -94, -1)}${tip(50, -94, 1)}` +
      `<circle cx="0" cy="-114" r="5" fill="${C.gold}"/><path d="M-30 -112 H30" stroke="${C.gold}" stroke-width="2"/>`);
  }
  const house = (x, y, s = 1, f, o = {}) => G(x, y, s, `<rect x="-40" y="-40" width="80" height="40" fill="${o.rich ? C.white : '#E8CFA6'}"/><path d="M-52 -38 L0 -76 L52 -38Z" fill="${o.rich ? C.redD : C.straw}"/>` +
    (o.rich ? `<path d="M-40 -48 H40 M-28 -58 H28" stroke="${C.red}" stroke-width="2"/>` : `<path d="M-30 -46 L-10 -62 M10 -62 L30 -46 M-6 -52 L6 -52" stroke="${C.woodD}" stroke-width="1.5" opacity=".5"/>`) +
    `<rect x="-10" y="-28" width="20" height="28" fill="${C.wood}"/><rect x="18" y="-30" width="14" height="12" fill="${C.woodD}"/><path d="M25 -30 V-18" stroke="${C.wood}" stroke-width="2"/>` + (o.poor ? `<path d="M-30 -40 l6 -6 M24 -44 l8 4" stroke="${C.woodD}" stroke-width="2"/>` : ''), f);
  const bamboo = (x, y, s = 1, f, o = {}) => G(x, y, s, Array.from({ length: o.n || 4 }, (_, i) => { const dx = (i - ((o.n || 4) - 1) / 2) * 12, h = 120 - (i % 2) * 18; return `<rect x="${dx - 3.5}" y="${-h}" width="7" height="${h}" rx="3" fill="${i % 2 ? C.leaf : '#8DBB6E'}"/>` + Array.from({ length: Math.floor(h / 20) }, (_, k) => `<path d="M${dx - 3.5} ${-12 - k * 20} h7" stroke="${C.leafD}" stroke-width="2"/>`).join('') + `<path d="M${dx} ${-h + 10} q-14 -6 -18 2 M${dx} ${-h + 24} q14 -8 18 0 M${dx} ${-h + 40} q-12 -4 -16 4" stroke="${C.leafD}" stroke-width="3" fill="none" stroke-linecap="round"/>`; }).join(''), f);
  const pole = (x, y, s = 1, f, o = {}) => { const k = o.n || 6, segH = o.h || 18; return G(x, y, s, `<rect x="-4" y="${-k * segH}" width="8" height="${k * segH}" rx="3" fill="#8DBB6E"/>` + Array.from({ length: k }, (_, i) => `<path d="M-4 ${-i * segH - 2} h8" stroke="${C.leafD}" stroke-width="2.4"/>`).join(''), f); };
  const segs = (x, y, s = 1) => G(x, y, s, [[-40, -6, 10], [-8, -4, -6], [24, -8, 18], [52, -4, -14], [-30, -22, 4], [10, -24, -20]].map(([a, b, r]) => `<g transform="translate(${a} ${b}) rotate(${r})"><rect x="-12" y="-4" width="24" height="8" rx="3" fill="#8DBB6E"/><path d="M-12 -4 v8 M12 -4 v8" stroke="${C.leafD}" stroke-width="2.4"/></g>`).join(''));
  const fruitTree = (x, y, s, fruitSvg) => tree(x, y, s) + G(x, y, s, [[-18, -50], [12, -62], [20, -44], [-4, -80], [-8, -58], [6, -46], [-22, -66]].map(([a, b]) => fruitSvg(a, b)).join(''));
  const khe = (x, y, s = 1) => fruitTree(x, y, s, (a, b) => star(a, b, 5.5, C.yellow).replace('<path', `<path stroke="${C.goldD}" stroke-width="1"`));
  const vusua = (x, y, s = 1) => fruitTree(x, y, s, (a, b) => `<circle cx="${a}" cy="${b}" r="5.5" fill="${C.plum}"/><path d="M${a} ${b - 5} v-3" stroke="${C.woodD}" stroke-width="1.5"/>`);
  const banyan = (x, y, s = 1, f, o = {}) => G(x, y, s, `<path d="M-14 0 Q-10 -40 -6 -60 H6 Q10 -40 14 0Z" fill="${C.woodD}"/><path d="M-6 -50 Q-30 -60 -44 -50 M6 -52 Q30 -64 46 -52" stroke="${C.woodD}" stroke-width="6" fill="none" stroke-linecap="round"/>` +
    [[-40, -74, 30], [0, -96, 34], [40, -76, 30], [-20, -88, 26], [22, -90, 26]].map(([a, b, r], i) => `<circle cx="${a}" cy="${b}" r="${r}" fill="${i % 2 ? C.leafD : C.leaf}"/>`).join('') +
    [-50, -38, 38, 50].map((a) => `<path d="M${a} -54 V${o.short ? -30 : -10}" stroke="${C.woodD}" stroke-width="2" opacity=".7"/>`).join('') + (o.glow ? sparkle(-50, -100, 6, C.yellow) + sparkle(50, -110, 5, C.yellow) + sparkle(0, -134, 5, C.yellow) : ''), f);
  const palm = (x, y, s = 1, f) => G(x, y, s, `<path d="M0 0 Q-6 -50 8 -100" stroke="${C.wood}" stroke-width="10" fill="none" stroke-linecap="round"/>` + [[-40, -80], [-30, -110], [10, -124], [46, -104], [44, -82]].map(([a, b]) => `<path d="M8 -100 Q${(8 + a) / 2} ${b - 14} ${a} ${b}" stroke="${C.leaf}" stroke-width="8" fill="none" stroke-linecap="round"/>`).join('') + `<circle cx="2" cy="-94" r="6" fill="#8A6142"/><circle cx="13" cy="-94" r="6" fill="#8A6142"/>`, f);
  const watermelon = (x, y, s = 1, f, o = {}) => G(x, y, s, o.slice ? `<path d="M-30 -2 A30 30 0 0 0 30 -2Z" fill="${C.leafD}"/><path d="M-26 -2 A26 26 0 0 0 26 -2Z" fill="${C.red}"/>` + [[-12, 6], [0, 12], [12, 6], [-4, 4], [6, 2]].map(([a, b]) => `<ellipse cx="${a}" cy="${b - 2}" rx="1.6" ry="2.6" fill="${C.ink}"/>`).join('')
    : `<ellipse cx="0" cy="-18" rx="28" ry="19" fill="#6FA86A"/>` + [-16, -6, 4, 14].map((a) => `<path d="M${a} -36 Q${a + 6} -18 ${a} 0" stroke="${C.leafD}" stroke-width="3.5" fill="none"/>`).join('') + `<path d="M0 -37 q4 -8 10 -6" stroke="${C.woodD}" stroke-width="2" fill="none"/>`, f);
  const seeds = (x, y, s = 1) => G(x, y, s, [[-14, -4], [-4, -8], [6, -3], [14, -9], [-8, -14], [2, -16]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="2" ry="3" fill="${C.ink}"/>`).join(''));
  const sheaf = (x, y, s = 1) => G(x, y, s, Array.from({ length: 9 }, (_, i) => { const a = -40 + i * 10; return `<path d="M0 -14 L${n(Math.sin(rad(a)) * 40)} ${n(-14 - Math.cos(rad(a)) * 40)}" stroke="${C.straw}" stroke-width="3"/><ellipse cx="${n(Math.sin(rad(a)) * 42)}" cy="${n(-14 - Math.cos(rad(a)) * 42)}" rx="3" ry="6" fill="${C.gold}" transform="rotate(${a} ${n(Math.sin(rad(a)) * 42)} ${n(-14 - Math.cos(rad(a)) * 42)})"/>`; }).join('') + `<path d="M-6 0 L0 -20 L6 0" stroke="${C.straw}" stroke-width="4" fill="none"/><rect x="-7" y="-18" width="14" height="5" fill="${C.wood}"/>`);
  const grain = (x, y, s = 1, f, o = {}) => G(x, y, s, `<ellipse cx="0" cy="-20" rx="${o.small ? 6 : 26}" ry="${o.small ? 9 : 20}" fill="${C.gold}" stroke="${C.goldD}" stroke-width="2"/><path d="M0 ${o.small ? -28 : -38} V${o.small ? -12 : -2}" stroke="${C.goldD}" stroke-width="2"/>` + (o.small ? '' : `<circle cx="-8" cy="-24" r="2" fill="${C.ink}"/><circle cx="8" cy="-24" r="2" fill="${C.ink}"/><path d="M-6 -14 Q0 -9 6 -14" stroke="${C.ink}" stroke-width="2" fill="none"/>`));
  const banhGiay = (x, y, s = 1) => G(x, y, s, `<ellipse cx="0" cy="-2" rx="30" ry="6" fill="${C.leaf}"/><path d="M-24 -4 Q-24 -32 0 -32 Q24 -32 24 -4Z" fill="${C.white}" stroke="${C.greyL}" stroke-width="2"/>`);
  const tray = (x, y, s = 1) => G(x, y, s, `<path d="M-40 0 v8 M40 0 v8 M-20 2 v8 M20 2 v8" stroke="${C.redD}" stroke-width="4"/><ellipse cx="0" cy="0" rx="48" ry="9" fill="${C.red}"/><ellipse cx="0" cy="-2" rx="44" ry="7" fill="${C.redD}" opacity=".3"/>`);
  const fire = (x, y, s = 1, side) => G(x, y, s, side ? `<path d="M0 0 Q20 -10 40 0 Q20 10 0 0Z" fill="${C.orange}"/><path d="M0 0 Q14 -5 26 0 Q14 5 0 0Z" fill="${C.yellow}"/>` : `<path d="M-14 0 Q-20 -20 -6 -34 Q-6 -20 0 -18 Q0 -36 12 -44 Q8 -26 16 -18 Q20 -10 14 0Z" fill="${C.orange}"/><path d="M-6 0 Q-10 -12 0 -20 Q2 -10 8 -8 Q10 -4 6 0Z" fill="${C.yellow}"/>`);
  const pot = (x, y, s = 1, f, o = {}) => (o.fire ? fire(x, y, s * 0.9) : '') + G(x, y - (o.fire ? 10 * s : 0), s, `<path d="M-26 -30 Q-30 0 0 0 Q30 0 26 -30Z" fill="${C.ink}"/><rect x="-28" y="-34" width="56" height="6" rx="3" fill="${C.greyD}"/><path d="M-30 -24 h-6 M30 -24 h6" stroke="${C.greyD}" stroke-width="4"/><path d="M-20 -36 Q0 -46 20 -36Z" fill="${C.greyD}"/>` + (o.steam ? `<path d="M-8 -48 q-6 -8 0 -16 q6 -8 0 -16 M8 -48 q-6 -8 0 -16" stroke="${C.white}" stroke-width="2.4" fill="none" opacity=".8"/>` : ''));
  const bag = (x, y, s = 1, f, o = {}) => G(x, y, s, (o.gold ? [[-24, -2], [22, -4], [30, 0], [-30, 0]].map(([a, b]) => `<circle cx="${a}" cy="${b - 4}" r="5" fill="${C.gold}" stroke="${C.goldD}" stroke-width="1.5"/>`).join('') : '') + `<path d="M-20 0 Q-28 -26 -12 -34 L-7 -42 H7 L12 -34 Q28 -26 20 0Z" fill="${o.big ? C.wood : C.strawL}" stroke="${C.woodD}" stroke-width="2"/><path d="M-9 -36 H9" stroke="${C.red}" stroke-width="3"/>` + (o.gold ? `<circle cx="0" cy="-44" r="5" fill="${C.gold}"/>` : ''));
  const gold = (x, y, s = 1) => G(x, y, s, `<path d="M-30 0 L-24 -12 H-6 L0 0Z M2 0 L8 -12 H26 L32 0Z M-14 -12 L-8 -24 H10 L16 -12Z" fill="${C.gold}" stroke="${C.goldD}" stroke-width="1.5"/>` + [[-34, 4], [36, 2], [0, 6]].map(([a, b]) => `<circle cx="${a}" cy="${b - 4}" r="5" fill="${C.gold}" stroke="${C.goldD}" stroke-width="1.5"/>`).join('') + sparkle(-20, -30, 5, C.white) + sparkle(22, -26, 4, C.white));
  const axe = (x, y, s = 1, f, o = {}) => G(x, y, s, `<rect x="-2.5" y="-56" width="5" height="56" rx="2" fill="${C.woodD}"/><path d="M1 -54 L10 -52 Q14 -60 26 -62 Q22 -44 26 -26 Q14 -28 10 -36 L1 -34Z" fill="${col(o.c, C.iron)}" stroke="${C.ink}" stroke-width="1.4" stroke-linejoin="round"/><path d="M22 -58 Q19 -44 22 -30" stroke="${C.white}" stroke-width="2" fill="none" opacity=".6"/>` + (o.c === 'gold' || o.c === 'silver' ? sparkle(30, -54, 5, C.white) : ''), f);
  const sword = (x, y, s = 1, f, o = {}) => `<g transform="translate(${x} ${y}) rotate(${o.r || 0}) scale(${s})"><rect x="-3.5" y="-74" width="7" height="60" fill="${C.silver}" stroke="${C.greyD}" stroke-width="1.2"/><path d="M-3.5 -74 L0 -84 L3.5 -74Z" fill="${C.silver}" stroke="${C.greyD}" stroke-width="1.2"/><rect x="-14" y="-16" width="28" height="6" rx="3" fill="${C.gold}"/><rect x="-3" y="-10" width="6" height="16" fill="${C.woodD}"/><circle cx="0" cy="8" r="4" fill="${C.gold}"/>${o.glow ? sparkle(14, -60, 6, C.yellow) + sparkle(-14, -40, 5, C.yellow) : ''}</g>`;
  const boat = (x, y, s = 1, f, o = {}) => G(x, y, s, (o.sail ? `<path d="M0 -12 V-74" stroke="${C.woodD}" stroke-width="3"/><path d="M2 -72 Q30 -46 4 -18Z" fill="${C.strawL}" stroke="${C.wood}" stroke-width="1.5"/>` : '') + `<path d="M-48 -16 Q0 -8 48 -16 L40 0 Q0 8 -40 0Z" fill="${C.wood}"/><path d="M-44 -12 Q0 -4 44 -12" stroke="${C.woodD}" stroke-width="2" fill="none"/>`, f);
  const eggs = (x, y, s = 1, f, o = {}) => G(x, y, s, (o.sack ? `<path d="M-40 0 Q-50 -50 0 -56 Q50 -50 40 0Z" fill="${C.pink}" opacity=".55"/>` : '') + [[-24, -10], [-8, -8], [8, -10], [24, -8], [-16, -24], [0, -24], [16, -24], [-8, -38], [8, -38]].map(([a, b]) => `<ellipse cx="${a}" cy="${b}" rx="7" ry="9" fill="${C.white}" stroke="${C.greyL}" stroke-width="1.2"/>`).join(''));
  const rock = (x, y, s = 1) => G(x, y, s, `<path d="M-30 0 Q-34 -24 -12 -30 Q8 -40 26 -24 Q36 -10 30 0Z" fill="${C.stone}"/><path d="M-14 -22 Q0 -28 12 -20" stroke="${C.stoneD}" stroke-width="2" fill="none"/>`);
  const daisy = (x, y, s = 1, f, o = {}) => G(x, y, s, `<path d="M0 0 V-40" stroke="${C.leafD}" stroke-width="3"/><path d="M0 -16 q-12 -4 -14 -12 q10 0 14 10" fill="${C.leaf}"/>` + Array.from({ length: o.many ? 36 : o.five ? 5 : 12 }, (_, i) => `<ellipse cx="0" cy="-54" rx="${o.many ? 1.2 : o.five ? 5.5 : 3}" ry="12" fill="${C.white}" stroke="${C.greyL}" stroke-width=".8" transform="rotate(${i * (o.many ? 10 : o.five ? 72 : 30)} 0 -44)"/>`).join('') + `<circle cx="0" cy="-44" r="6" fill="${C.yellow}"/>`);
  const tet = (x, y, s = 1) => G(x, y, s, `<rect x="-3.5" y="-170" width="7" height="170" rx="3" fill="#8DBB6E"/>` + Array.from({ length: 8 }, (_, i) => `<path d="M-3.5 ${-i * 20 - 4} h7" stroke="${C.leafD}" stroke-width="2"/>`).join('') +
    `<path d="M0 -170 q-22 -6 -26 6 M0 -170 q22 -8 26 4 M0 -168 q-8 -18 2 -24" stroke="${C.leafD}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M0 -150 Q14 -150 16 -126 L4 -128Z" fill="${C.gold}"/><path d="M0 -146 Q-16 -140 -16 -118 L-4 -122Z" fill="${C.orange}"/>` + [[-10, -112], [10, -108]].map(([a, b]) => `<path d="M${a} ${b - 8} V${b}" stroke="${C.ink}" stroke-width="1"/><path d="M${a - 4} ${b + 6} Q${a} ${b - 4} ${a + 4} ${b + 6}Z" fill="${C.gold}"/>`).join(''));
  const bigMoon = (x, y, s = 1) => G(x, y, s, `<circle r="46" fill="#F7E7A6"/><circle cx="-14" cy="-10" r="8" fill="#EBD58A" opacity=".6"/><circle cx="18" cy="16" r="6" fill="#EBD58A" opacity=".6"/>` + banyan(4, 30, 0.42).replaceAll(C.leafD, '#C9B46A').replaceAll(C.leaf, '#D7C47E').replaceAll(C.woodD, '#B39B55') + person({ x: -18, y: 32, s: 0.32, shirt: '#B39B55', pants: '#B39B55', hairC: '#B39B55', legs: 'sit' }).replaceAll(C.skin, '#D7C47E'));
  const bell = (x, y, s = 1) => G(x, y, s, `<path d="M0 -26 V-34" stroke="${C.red}" stroke-width="2"/><path d="M-10 0 Q-12 -22 0 -24 Q12 -22 10 0Z" fill="${C.gold}" stroke="${C.goldD}" stroke-width="1.5"/><circle cx="0" cy="2" r="3" fill="${C.goldD}"/>` + sparkle(14, -20, 3.5, C.yellow));
  const basket = (x, y, s = 1, f, o = {}) => G(x, y, s, `<path d="M-22 -24 Q0 -50 22 -24" stroke="${C.woodD}" stroke-width="3" fill="none"/><path d="M-24 -24 L-18 0 H18 L24 -24Z" fill="${C.straw}"/><path d="M-22 -16 H22 M-20 -8 H20 M-12 -24 L-10 0 M0 -24 V0 M12 -24 L10 0" stroke="${C.wood}" stroke-width="1.5"/>` + (o.fish ? `<ellipse cx="-6" cy="-28" rx="8" ry="4" fill="${C.grey}"/>` : ''));
  const plow = (x, y, s = 1, f) => G(x, y, s, `<path d="M-40 -40 L10 -6 L30 -4 L24 2 L-2 0 Z" fill="${C.wood}" stroke="${C.woodD}" stroke-width="2"/><path d="M-40 -40 L-46 -30 M-36 -36 l-14 -6" stroke="${C.woodD}" stroke-width="4" stroke-linecap="round"/><path d="M24 -4 L36 2 L22 4Z" fill="${C.iron}"/>`, f);
  const log = (x, y, s = 1, f, o = {}) => G(x, y, s, `<rect x="-40" y="-20" width="74" height="20" rx="6" fill="${C.wood}"/><ellipse cx="34" cy="-10" rx="8" ry="10" fill="${C.strawL}"/><ellipse cx="34" cy="-10" rx="4" ry="5" fill="none" stroke="${C.woodD}" stroke-width="1.5"/>` + (o.chips ? [[-50, -2], [-56, -10], [46, 0], [-30, 4]].map(([a, b]) => `<path d="M${a} ${b} l8 -3 l-2 5Z" fill="${C.strawL}"/>`).join('') : ''), f);
  const scroll = (x, y, s = 1) => G(x, y, s, `<rect x="-22" y="-30" width="44" height="30" fill="${C.white}" stroke="${C.wood}" stroke-width="2"/><rect x="-26" y="-34" width="52" height="6" rx="3" fill="${C.wood}"/><rect x="-26" y="-2" width="52" height="6" rx="3" fill="${C.wood}"/><path d="M-14 -22 H14 M-14 -15 H10 M-14 -8 H14" stroke="${C.greyL}" stroke-width="2"/>`);
  const paints = (x, y, s = 1) => G(x, y, s, [[-24, C.red], [-8, C.blue], [8, C.leaf], [24, C.yellow]].map(([a, c]) => `<rect x="${a - 6}" y="-14" width="12" height="14" rx="3" fill="${C.white}" stroke="${C.greyL}"/><ellipse cx="${a}" cy="-14" rx="6" ry="2.5" fill="${c}"/>`).join(''));
  const ink = (x, y, s = 1, f, o = {}) => G(x, y, s, `<path d="M-12 -24 Q-14 0 0 0 Q14 0 12 -24Z" fill="${C.greyD}"/><ellipse cx="0" cy="-24" rx="12" ry="4" fill="${C.ink}"/>` + (o.spill ? `<path d="M10 -22 Q40 -40 60 -20 Q70 0 50 4 Q30 -6 14 -16Z" fill="${C.ink}" opacity=".9"/>` : ''));
  const waves = (x, y, s = 1) => G(x, y, s, Array.from({ length: 6 }, (_, i) => `<path d="M${-150 + i * 50} 0 q12 -18 25 0 t25 0" stroke="${C.waterD}" stroke-width="8" fill="none" stroke-linecap="round"/>`).join(''));
  const rain = (x, y, s = 1) => G(x, y, s, Array.from({ length: 16 }, (_, i) => `<path d="M${-80 + (i * 37) % 160} ${(i * 19) % 60} l-6 14" stroke="${C.waterD}" stroke-width="2.4" stroke-linecap="round"/>`).join(''));
  const tower = (x, y, s = 1) => G(x, y, s, `<ellipse cx="0" cy="0" rx="40" ry="8" fill="${C.leaf}"/><rect x="-20" y="-30" width="40" height="30" fill="#E8DCC8"/><path d="M-26 -30 L-18 -38 H18 L26 -30Z" fill="${C.redD}"/><rect x="-14" y="-52" width="28" height="14" fill="#E8DCC8"/><path d="M-20 -52 L-12 -60 H12 L20 -52Z" fill="${C.redD}"/><rect x="-8" y="-70" width="16" height="10" fill="#E8DCC8"/><path d="M-12 -70 L0 -80 L12 -70Z" fill="${C.redD}"/><path d="M-6 -22 Q0 -30 6 -22 V-8 H-6Z M-6 -48 h12" fill="${C.woodD}" stroke="${C.woodD}"/>`);
  const cloudD = (x, y, s = 1) => cloud(x, y, s).replace(C.cloud, '#8C96A3');
  const mini = (cx, cy, mood) => (mood === 'sleepy' ? `<path d="M${cx - 8} ${cy} h5 M${cx + 3} ${cy} h5" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/>` : mood === 'angry' ? `<path d="M${cx - 9} ${cy - 5} l5 2 M${cx + 9} ${cy - 5} l-5 2" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/><circle cx="${cx - 5}" cy="${cy}" r="2" fill="${C.ink}"/><circle cx="${cx + 5}" cy="${cy}" r="2" fill="${C.ink}"/>` : `<circle cx="${cx - 5}" cy="${cy}" r="2" fill="${C.ink}"/><circle cx="${cx + 5}" cy="${cy}" r="2" fill="${C.ink}"/>`) +
    `<path d="M${cx - 4} ${cy + 6} Q${cx} ${mood === 'sad' || mood === 'angry' || mood === 'sleepy' ? cy + 3 : cy + 10} ${cx + 4} ${cy + 6}" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
  const organ = (x, y, s = 1, f, o = {}) => {
    const md = ['happy', 'sad', 'angry', 'sleepy'].find((k) => o[k]) || 'smile';
    const legs = `<path d="M-7 0 V-12 M7 0 V-12" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/><path d="M-11 0 h6 M5 0 h6" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/>`;
    const sk = C.skin, skd = '#E7B48F';
    const body = {
      mat: `<path d="M-30 -34 Q0 -64 30 -34 Q0 -4 -30 -34Z" fill="${C.white}" stroke="${C.ink}" stroke-width="2.5"/><circle cx="0" cy="-34" r="12" fill="${C.blue}"/><circle cx="0" cy="-34" r="6" fill="${C.ink}"/><circle cx="3" cy="-37" r="2.4" fill="${C.white}"/><path d="M-20 -46 l-4 -8 M-8 -51 l-2 -9 M6 -51 l2 -9 M19 -46 l4 -8" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/>` + (md === 'sleepy' ? `<path d="M-30 -34 Q0 -64 30 -34 Q0 -40 -30 -34Z" fill="${C.skin}" stroke="${C.ink}" stroke-width="2"/>` : ''),
      tai: `<path d="M-14 -12 Q-24 -40 -6 -56 Q18 -66 22 -40 Q24 -26 10 -20 Q4 -14 -2 -10 Q-8 -6 -14 -12Z" fill="${sk}" stroke="${skd}" stroke-width="2.5"/><path d="M-2 -46 Q10 -52 12 -40 Q12 -32 4 -30" stroke="${skd}" stroke-width="3" fill="none" stroke-linecap="round"/>` + mini(-6, -28, md),
      tay: `<rect x="-18" y="-50" width="36" height="40" rx="14" fill="${sk}" stroke="${skd}" stroke-width="2"/>` + [-12, -4, 4, 12].map((a, i) => `<rect x="${a - 3.5}" y="${-66 + Math.abs(i - 1.5) * 3}" width="7" height="22" rx="3.5" fill="${sk}" stroke="${skd}" stroke-width="1.6"/>`).join('') + `<rect x="14" y="-40" width="18" height="7" rx="3.5" fill="${sk}" stroke="${skd}" stroke-width="1.6" transform="rotate(-30 14 -36)"/>` + mini(0, -32, md),
      chan: `<path d="M-26 0 L-26 -50 Q-26 -58 -18 -58 H-6 Q2 -58 2 -50 L2 -24 Q14 -24 28 -20 Q38 -16 36 -6 Q34 0 26 0Z" fill="${sk}" stroke="${skd}" stroke-width="2.2" stroke-linejoin="round"/>` + [[16, -22, 4.5], [24, -20, 4], [30, -17, 3.6], [34, -13, 3.2], [36, -9, 2.8]].map(([a, b, r]) => `<circle cx="${a}" cy="${b}" r="${r}" fill="${sk}" stroke="${skd}" stroke-width="1.4"/>`).join('') + mini(-12, -40, md),
      mieng: `<circle cx="0" cy="-34" r="24" fill="${C.peach}"/><path d="M-16 -30 Q0 -40 16 -30 Q0 -12 -16 -30Z" fill="${C.redD}"/><path d="M-16 -30 Q-8 -36 0 -32 Q8 -36 16 -30" stroke="${C.red}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M-14 -28 Q0 -14 14 -28" stroke="${C.red}" stroke-width="4" fill="none" stroke-linecap="round"/>` +
        (md === 'sleepy' ? `<path d="M-12 -46 h6 M6 -46 h6" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/>` : `<circle cx="-8" cy="-46" r="2.4" fill="${C.ink}"/><circle cx="8" cy="-46" r="2.4" fill="${C.ink}"/>`)
    }[o.t || 'mat'];
    return G(x, y, s, (o.t === 'chan' ? '' : legs) + body, f);
  };
  const khoai = (x, y, s = 1) => G(x, y, s, `<path d="M0 -10 V-34 M0 -26 q-14 -6 -18 -16 q12 0 18 10 M0 -30 q14 -8 20 -16 q-12 -2 -20 8" stroke="${C.leafD}" stroke-width="3" fill="${C.leaf}"/>` + [[-16, 0, -20], [4, 4, 10], [22, -2, 25]].map(([a, b, r]) => `<ellipse cx="${a}" cy="${b}" rx="12" ry="7" fill="${C.plum}" transform="rotate(${r} ${a} ${b})"/>`).join(''));
  const say = (x, y, text) => { const t = text.replace(/_/g, ' '); const w = Math.max(60, t.length * 7.6 + 24); return bubble(x, y, n(w), 30, t, 'bl', 13); };

  /* ── nhân vật dựng sẵn (dùng lại ở mọi truyện) ── */
  const PRESET = {
    ong: 'p:hair=grandpa,beard,shirt=wood,pants=woodD',
    ba: 'p:hair=bunw,shirt=plum,robe,belt=plumD',
    bo: 'p:hair=boy,shirt=blue,pants=ink',
    me: 'p:hair=bun,shirt=peach,robe,belt=wood',
    trai: 'p:hair=boy,shirt=blue,s=0.95',
    gai: 'p:hair=girl,shirt=pink,s=0.95',
    vua: 'p:hair=top,beard=short,beardC=ink,crown,shirt=yellow,robe,belt=red',
    vuagia: 'p:hair=grandpa,beard=long,crown,shirt=yellow,robe,belt=red',
    hoang: 'p:hair=top,crown,shirt=red,robe,belt=gold',
    cchua: 'p:hair=long,tiara,shirt=pink,robe,belt=gold',
    but: 'p:hair=bald,beard=long,shirt=white,robe,belt=straw,hold=staff,armR=20,glow',
    tien: 'p:hair=long,shirt=white,robe,belt=pink,wings,glow',
    phu: 'p:hair=boy,khan,mus,shirt=red,robe,belt=gold',
    nd: 'p:hair=boy,hat,shirt=wood,pants=ink',
    ndn: 'p:hair=bun,hat,shirt=peach,pants=ink',
    linh: 'p:hair=boy,helmet,armor,shirt=red,pants=ink',
    tuong: 'p:hair=top,helmet,armor,shirt=red,robe,belt=gold,hold=sword',
    ngheo: 'p:hair=boy,shirt=mud,pants=woodD,patch',
    thay: 'p:hair=grandpa,beard=short,khan,shirt=greyD,robe,belt=ink,face=blind,hold=stick,armR=30'
  };
  const REG = {
    tree: (x, y, s, f, o) => tree(x, y, s, o.fruit), khe, vusua, banyan, palm, bamboo, pole, segs, tet,
    house, palace: (x, y, s) => palace(x, y, s), boat, rock, waves, rain, tower,
    buffalo: (x, y, s, f, o) => buffalo(x, y, s, f, o.eat), cow, tiger, elephant: (x, y, s, f) => elephant(x, y, s, f), mouse, cat: (x, y, s, f, o) => cat(x, y, s, f, o), dog: (x, y, s, f, o) => dog(x, y, s, f, o.angry),
    fish: (x, y, s, f, o) => fish(x, y, s, f, col(o.c, C.orange)), turtle, goldturtle: goldTurtle, horse, ironhorse: ironHorse, hen, rooster, chick, duck,
    bird: (x, y, s, f, o) => bird(x, y, s, f, col(o.c, C.blue)), crow, peacock, eagle, frog: (x, y, s) => frog(x, y, s), toad, crab, bear, bee, fox, python, dragon, devil, snail, coconut, squirrel,
    mat: (x, y, s, f, o) => organ(x, y, s, f, Object.assign({ t: 'mat' }, o)), tai: (x, y, s, f, o) => organ(x, y, s, f, Object.assign({ t: 'tai' }, o)), tay: (x, y, s, f, o) => organ(x, y, s, f, Object.assign({ t: 'tay' }, o)),
    chan: (x, y, s, f, o) => organ(x, y, s, f, Object.assign({ t: 'chan' }, o)), mieng: (x, y, s, f, o) => organ(x, y, s, f, Object.assign({ t: 'mieng' }, o)), khoai,
    watermelon, seeds, sheaf, grain, banhchung: (x, y, s) => banhChung(x, y, s), banhgiay: banhGiay, tray, pot, fire: (x, y, s) => fire(x, y, s), bag, gold, axe, sword, eggs, daisy, bell, basket, plow, log, scroll, paints, ink,
    gourd: (x, y, s) => G(x, y, s * 2, HOLD.gourd()), bowl: (x, y, s) => G(x, y, s * 2, HOLD.bowl()), lute: (x, y, s) => lute(x, y, s, -30), lantern: (x, y, s) => lantern(x, y, s), book: (x, y, s) => book(x, y, s),
    flower: (x, y, s, f, o) => flower(x, y, s, col(o.c, C.pink)), grass: (x, y, s) => grassTuft(x, y, s), heart: (x, y, s) => heart(x, y, s),
    sun: (x, y, s) => sun(x, y, 18 * s), moon: (x, y) => moon(x, y), bigmoon: bigMoon, cloud: (x, y, s) => cloud(x, y, s), cloudd: cloudD, star: (x, y, s) => star(x, y, 7 * s), sparkle: (x, y, s) => sparkle(x, y, 6 * s, C.yellow),
    mountain: (x, y, s) => mountain(x, y, 160 * s, 100 * s, C.leaf), well: (x, y) => well(x, y), drops: (x, y, s) => drops([[x, y, s], [x + 14, y + 10, s * 0.8], [x - 12, y + 14, s * 0.7]]), riceRows: (x, y) => riceRows(y), notes: (x, y, s) => notes(x, y, s)
  };

  /* ── "câu tả cảnh": "nền vật@x,y,s:tùy-chọn vật2@x …" ── */
  function parseOpts(list, into) {
    list.forEach((t) => { if (!t) return; const i = t.indexOf('='); if (i < 0) into[t] = true; else { const k = t.slice(0, i), v = t.slice(i + 1); into[k] = isNaN(+v) ? v : +v; } });
    return into;
  }
  function item(tok, cast) {
    const at = tok.indexOf('@');
    let name = at < 0 ? tok.split(':')[0] : tok.slice(0, at);
    let rest = at < 0 ? tok.slice(name.length) : tok.slice(at + 1);
    const parts = rest.split(':'); const pos = (parts.shift() || '').split(',').filter(Boolean).map(Number);
    if (name === 'say') { const eq = tok.indexOf('='); const xy = tok.slice(at + 1, eq).split(',').map(Number); return say(xy[0], xy[1], tok.slice(eq + 1)); }
    const x = pos[0] == null ? 160 : pos[0], y = pos[1] == null ? 182 : pos[1], sm = pos[2] == null ? 1 : pos[2];
    const def = (cast && cast[name]) || PRESET[name];
    const flags = parseOpts(parts, {});
    if (def) {
      if (def.startsWith('p:')) {
        const o = parseOpts(def.slice(2).split(','), {});
        Object.assign(o, flags);
        if (flags.f) o.flip = true;
        if (o.wave) o.armR = 150; if (o.up) { o.armR = 160; o.armL = 160; } if (o.point) o.armR = 95; if (o.pray) { o.armL = 150; o.armR = 150; }
        ['sit', 'run', 'jump'].forEach((k) => { if (o[k]) o.legs = k; });
        Object.keys(FACE).forEach((k) => { if (flags[k]) o.face = k; });
        o.x = x; o.y = y; o.s = (o.s || 1.2) * sm;
        return person(o);
      }
      return item(def.replace(/@[^:]*/, '') .replace(/^([^:@]+)/, `$1@${x},${y},${sm}`) + (parts.length ? ':' + parts.join(':') : ''), null);
    }
    const fn = REG[name];
    if (!fn) { console.warn('Chưa có hình:', name); return ''; }
    return fn(x, y, sm, !!flags.f, flags);
  }
  function scene(dsl, cast) {
    const toks = String(dsl || 'day').trim().split(/\s+/);
    const bg = BG[toks[0]] ? BG[toks[0]]() : BG.day();
    const body = toks.slice(BG[toks[0]] ? 1 : 0).map((t) => item(t, cast)).join('');
    return `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">${bg}${body}</svg>`;
  }
  /* chân dung nhân vật: vẽ một vật, khung tự co theo hình (app.js đo lại) */
  function portrait(tok, cast) {
    return `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="fit"><g>${item(tok.includes('@') ? tok : tok.replace(/^([^:]+)/, '$1@160,190'), cast)}</g></svg>`;
  }
  return { scene, portrait, C, star, has: (k) => !!(REG[k] || PRESET[k] || BG[k]) };
})();
