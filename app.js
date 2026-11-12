/* Trâu Con Kể Chuyện — ứng dụng (không cần thư viện ngoài)
   Trang: #trang-dau · #ba-muoi-ngay · #so-tu · #huong-dan · #t01 … #t30 (thêm -doc, -xep… để mở thẳng một phần) */
(function () {
  'use strict';
  const ART = window.ART;
  const ALL = (window.TRUYEN || []).slice().sort((a, b) => a.id - b.id);
  const byId = Object.fromEntries(ALL.map((t) => [t.id, t]));
  const app = document.getElementById('app');
  const pad = (n) => String(n).padStart(2, '0');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const rand = (a) => a[Math.floor(Math.random() * a.length)];
  const IMG = (n) => `assets/trau-${n}.png`;
  const GENRE = { 'Cổ tích': '', 'Truyền thuyết': 'tt', 'Ngụ ngôn': 'nn', 'Truyện cười': 'nn' };
  const STEPS = [
    ['nv', 'Nhân vật', 'Meet the characters'], ['doc', 'Đọc truyện', 'Read the flip book'], ['td', 'Thông điệp', 'The message'], ['xep', 'Xếp tranh', 'Put the pictures in order'],
    ['do', 'Đố từ', 'Word quiz'], ['dien', 'Điền từ', 'Fill in the gap'], ['th', 'Tình huống', 'What would you do?'], ['sn', 'Suy ngẫm', 'Think and write']
  ];
  const STAR = ['doc', 'xep', 'do', 'dien', 'th', 'sn'];

  /* ── lưu tiến độ trên máy ── */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('traucon-kc:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('traucon-kc:' + k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } }
  };
  const S = { prog: store.get('prog', {}), words: store.get('words', {}), notes: store.get('notes', {}), sound: store.get('sound', true), en: store.get('en', false) };
  const save = () => { ['prog', 'words', 'notes', 'sound', 'en'].forEach((k) => store.set(k, S[k])); updateTop(); };
  const starsOf = (id) => STAR.filter((k) => S.prog[id] && S.prog[id][k]).length;
  const isDone = (id) => starsOf(id) === STAR.length;
  const totalStars = () => ALL.reduce((a, t) => a + starsOf(t.id), 0);
  const todayStory = () => ALL.find((t) => !isDone(t.id)) || ALL[ALL.length - 1];
  function award(t, k) {
    const p = (S.prog[t.id] = S.prog[t.id] || {});
    if (p[k]) return false;
    p[k] = 1; save(); sfx.win();
    if (isDone(t.id)) { confetti(70); toast(`Các bạn đã hoàn thành Ngày ${t.id}! Giỏi quá!`); } else { confetti(28); toast('Các bạn được thêm một ngôi sao!'); }
    document.querySelectorAll('.steps a').forEach((a) => { if (S.prog[t.id][a.dataset.k]) a.classList.add('done'); });
    const hs = document.getElementById('head-stars'); if (hs) hs.innerHTML = starRow(starsOf(t.id));
    return true;
  }

  /* ── biểu tượng ── */
  const ICON = {
    star: (on) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z" fill="${on ? '#F2BE4A' : '#ECE4D6'}" stroke="${on ? '#B07A22' : '#CFC3AE'}" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
    left: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    right: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    sound: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>',
    mute: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    redo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v5h5" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="currentColor"/></svg>'
  };
  const starRow = (n) => `<span class="stars" aria-label="${n} trên ${STAR.length} ngôi sao">${STAR.map((_, i) => ICON.star(i < n)).join('')}</span>`;
  const genreTag = (t) => `<span class="tag ${GENRE[t.genre] || ''}">${esc(t.genre)}</span>`;
  const trau = (pose, vi, en, big) => `<div class="trau-say${big ? ' big' : ''}"><img src="${IMG(pose)}" alt="Trâu Con"><div class="bub"><p>${vi}</p>${en ? `<p class="en">${en}</p>` : ''}</div></div>`;

  /* ── lời Trâu Con (luôn xưng "mình", gọi "các bạn") ── */
  const SAY = {
    ok: ['Giỏi quá! Các bạn đúng rồi!', 'Tuyệt vời! Mình biết các bạn làm được mà!', 'Chính xác! Các bạn nhớ truyện giỏi ghê!', 'Hay lắm! Mình vui quá đi!'],
    bad: ['Chưa đúng rồi. Các bạn thử lại nhé, mình tin các bạn!', 'Gần đúng rồi! Các bạn nghĩ thêm chút nữa nhé!', 'Ồ, chưa phải. Các bạn đọc lại thật chậm rồi chọn lại nhé!']
  };

  /* ── âm thanh nhỏ ── */
  let actx;
  function tone(freqs, dur = 0.12, type = 'sine', gap = 0.09, vol = 0.16) {
    if (!S.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const t0 = actx.currentTime + 0.01;
      freqs.forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = type; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t0 + i * gap); g.gain.exponentialRampToValueAtTime(vol, t0 + i * gap + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + i * gap + dur);
        o.connect(g); g.connect(actx.destination); o.start(t0 + i * gap); o.stop(t0 + i * gap + dur + 0.05);
      });
    } catch (e) { /* không có âm thanh */ }
  }
  const sfx = { ok: () => tone([660, 880]), bad: () => tone([240, 190], 0.2, 'triangle'), flip: () => tone([420, 560], 0.07, 'triangle', 0.05, 0.08), win: () => tone([523, 659, 784, 1047], 0.2, 'sine', 0.12), pop: () => tone([720, 960], 0.08, 'sine', 0.06, 0.12) };

  /* ── đọc to: ưu tiên file ghi âm (giọng Elio) trong audio/, nếu chưa có thì dùng giọng tiếng Việt của máy ── */
  let voices = [], player = null;
  const missing = new Set();
  const loadVoices = () => { try { voices = speechSynthesis.getVoices(); } catch (e) { voices = []; } };
  if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  function stopSpeak() { try { if (player) { player.pause(); player = null; } if ('speechSynthesis' in window) speechSynthesis.cancel(); } catch (e) { /* bỏ qua */ } }
  function tts(text) {
    if (!('speechSynthesis' in window)) { toast('Trình duyệt này chưa đọc to được. Các bạn đọc to cùng bố mẹ nhé!'); return; }
    loadVoices();
    const v = voices.find((x) => /^vi/i.test(x.lang));
    if (!v) { toast('Máy này chưa có giọng đọc tiếng Việt. Các bạn đọc to cùng bố mẹ nhé!'); return; }
    const u = new SpeechSynthesisUtterance(text); u.voice = v; u.lang = v.lang; u.rate = 0.82;
    speechSynthesis.speak(u);
  }
  function speak(text, file) {
    stopSpeak();
    if (file && !missing.has(file)) {
      const a = new Audio(file); player = a;
      a.addEventListener('error', () => { missing.add(file); if (player === a) tts(text); }, { once: true });
      a.play().catch(() => { missing.add(file); if (player === a) tts(text); });
      return;
    }
    tts(text);
  }

  let toastT;
  function toast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 3200); }
  function confetti(n = 36) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cols = ['#DDAA55', '#6FA86A', '#F2B28F', '#BE5A48', '#7FB3D9', '#F6D36B'];
    for (let i = 0; i < n; i++) {
      const c = document.createElement('i'); c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw'; c.style.background = rand(cols); c.style.animationDelay = Math.random() * 0.4 + 's'; c.style.animationDuration = 1.2 + Math.random() * 0.9 + 's';
      document.body.appendChild(c); setTimeout(() => c.remove(), 2600);
    }
  }

  /* ── chữ trong truyện: [[từ]] hoặc [[Từ|từ]] là từ cần nhớ ── */
  const MARK = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
  const keyOf = (t, surface, key) => { const k = key || surface; return t.words[k] ? k : (t.words[k.toLowerCase()] ? k.toLowerCase() : k); };
  const plain = (s) => s.replace(MARK, (_, a) => a);
  const marked = (t, s) => esc(s).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, a, b) => `<button type="button" class="w" data-w="${esc(keyOf(t, a, b))}" aria-expanded="false">${a}</button>`);
  const pageWords = (t, s) => { const out = []; s.replace(MARK, (_, a, b) => { const k = keyOf(t, a, b); if (!out.includes(k)) out.push(k); }); return out; };
  const sentences = (s) => (s.match(/[^.!?…]+[.!?…]+["”»]?|[^.!?…]+$/g) || [s]).map((x) => x.trim()).filter(Boolean);
  const audioFile = (t, p) => `audio/t${pad(t.id)}-p${pad(p)}.mp3`;
  const castOf = (t) => t.cast || {};

  /* ── thanh trên ── */
  function updateTop() {
    document.getElementById('star-count').textContent = totalStars();
    const sb = document.getElementById('sound-btn'); sb.innerHTML = S.sound ? ICON.sound : ICON.mute; sb.setAttribute('aria-label', S.sound ? 'Tắt tiếng' : 'Bật tiếng');
    const eb = document.getElementById('en-btn'); eb.setAttribute('aria-pressed', S.en ? 'true' : 'false');
    document.body.classList.toggle('show-en', !!S.en);
  }

  /* ════════ TRANG ĐẦU ════════ */
  let filter = 'all';
  function viewHome(scrollToGrid) {
    const td = todayStory(), done = ALL.filter((t) => isDone(t.id)).length;
    app.innerHTML = `
      <section class="hero">
        <img class="mascot" src="${IMG('wave')}" alt="Trâu Con vẫy tay chào" draggable="false">
        <div>
          <p class="eyebrow">Trường Tiếng Việt Của Em · Kho truyện cổ tích</p>
          <h1>Trâu Con <span>Kể Chuyện</span></h1>
          <p class="lead">Chào các bạn! Mình là Trâu Con. Mỗi ngày mình kể cho các bạn nghe một câu chuyện cổ tích Việt Nam nhé!</p>
          <p class="en">Hi! I'm Little Buffalo. Every day I tell you one Vietnamese folk tale, then we play and think about it together.</p>
          <div class="row">
            <a class="btn primary today-btn" href="#t${pad(td.id)}"><span><small>Truyện hôm nay · Ngày ${td.id}</small>${esc(td.title)}</span>${ICON.right}</a>
            <a class="btn ghost" href="#huong-dan">Dành cho bố mẹ, thầy cô</a>
          </div>
          <div class="progress"><div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="30" aria-valuenow="${done}"><i style="width:${(done / ALL.length) * 100}%"></i></div><b>${done}/${ALL.length} truyện</b><span class="muted">· ${totalStars()} sao</span></div>
        </div>
      </section>
      <section class="section" id="luoi">
        <div class="section-head"><h2>30 ngày kể chuyện</h2><p class="muted">Mỗi truyện có 6 ngôi sao: đọc truyện, xếp tranh, đố từ, điền từ, tình huống, suy ngẫm.</p></div>
        <div class="filters" role="group" aria-label="Lọc theo loại truyện">
          ${[['all', 'Tất cả'], ['Cổ tích', 'Cổ tích'], ['Truyền thuyết', 'Truyền thuyết'], ['Ngụ ngôn', 'Ngụ ngôn']].map(([k, l]) => `<button type="button" data-act="filter" data-k="${k}" aria-pressed="${filter === k}">${l}</button>`).join('')}
        </div>
        <div class="grid" style="margin-top:16px">${ALL.filter((t) => filter === 'all' || t.genre === filter).map((t) => card(t, td)).join('')}</div>
      </section>
      <section class="section card guide-teaser">
        <img src="${IMG('reading')}" alt="">
        <div><h2 style="font-size:var(--step-1)">Mỗi ngày khoảng 20 phút</h2><p class="muted">Gặp nhân vật → đọc sách lật → thông điệp → bốn trò chơi → viết suy ngẫm. Tiến độ được lưu trên máy của các bạn.</p></div>
        <a class="btn small" href="#huong-dan">Xem hướng dẫn</a>
      </section>`;
    if (scrollToGrid) document.getElementById('luoi').scrollIntoView();
  }
  function card(t, td) {
    return `<a class="story-card${t.id === td.id ? ' today' : ''}" href="#t${pad(t.id)}">
      <div class="pic">${ART.scene(t.cover, castOf(t))}</div>
      <span class="day-badge">${t.id === td.id ? 'Hôm nay · ' : ''}Ngày ${t.id}</span>${isDone(t.id) ? '<span class="done-badge">Đã xong</span>' : ''}
      <div class="body"><h3>${esc(t.title)}</h3><div class="meta">${genreTag(t)}${starRow(starsOf(t.id))}</div></div></a>`;
  }

  /* ════════ SỔ TỪ ════════ */
  function viewNotebook() {
    const mine = ALL.flatMap((t) => Object.keys(t.words).filter((w) => S.words[t.id + '|' + w]).map((w) => [t, w]));
    app.innerHTML = `
      <div class="section-head"><h1 style="font-size:var(--step-3)">Sổ từ của em</h1></div>
      ${trau('reading', mine.length ? `Các bạn đã nhớ được <b>${mine.length}</b> từ rồi! Chạm vào từ để nghe đọc nhé.` : 'Sổ từ còn trống. Khi đọc truyện, các bạn chạm vào chữ tô màu vàng rồi bấm “Mình nhớ rồi” để cất từ vào đây nhé!', mine.length ? `You have saved ${mine.length} words.` : 'Tap a highlighted word in a story, then press “Mình nhớ rồi” to save it here.')}
      <div class="notebook" style="margin-top:18px">${mine.map(([t, w]) => `<button type="button" class="note" data-act="say-word" data-t="${t.id}" data-w="${esc(w)}" style="text-align:left"><b>${esc(w)}</b><p>${esc(t.words[w][0])}</p><p class="en">${esc(t.words[w][1])}</p><small>Ngày ${t.id} · ${esc(t.title)}</small></button>`).join('')}</div>
      <div class="section"><a class="btn" href="#ba-muoi-ngay">${ICON.left} Về 30 ngày kể chuyện</a></div>`;
  }

  /* ════════ HƯỚNG DẪN ════════ */
  function viewGuide() {
    app.innerHTML = `
      <div class="section-head"><h1 style="font-size:var(--step-3)">Dành cho bố mẹ và thầy cô</h1></div>
      <div class="guide">
        <div class="card"><h3>Mỗi ngày một truyện, khoảng 20 phút</h3><ol>
          <li><b>Nhân vật</b>: xem tranh bìa, làm quen các nhân vật. Hỏi con: “Con đoán truyện sẽ kể chuyện gì?”</li>
          <li><b>Đọc truyện</b>: sách lật từng trang. Chữ tô vàng là <b>từ cần nhớ</b>; chạm vào để xem nghĩa, nghe đọc và cất vào Sổ từ. Nút “Nghe đọc” đọc to cả trang.</li>
          <li><b>Thông điệp</b>: lời nhắn nhủ của câu chuyện (có câu tục ngữ liên quan nếu có).</li>
          <li><b>Xếp tranh</b>: xếp tranh đúng thứ tự, sau đó con nhìn tranh <b>kể lại</b> bằng lời của mình. Đây là phần luyện nói quan trọng nhất.</li>
          <li><b>Đố từ</b> và <b>Điền từ</b>: ôn từ cần nhớ trong truyện.</li>
          <li><b>Tình huống</b>: câu hỏi trắc nghiệm về cách các nhân vật hành xử, và “nếu là con, con sẽ làm gì?”.</li>
          <li><b>Suy ngẫm</b>: chọn cảm xúc và viết vài câu. Bấm “Sao chép” để gửi bài cho thầy cô qua tin nhắn.</li>
        </ol></div>
        <div class="card"><h3>Ngôi sao và tiến độ</h3><p>Mỗi truyện có 6 ngôi sao. Truyện hôm nay là truyện đầu tiên chưa đủ sao. Các truyện đều mở sẵn để thầy cô chọn truyện theo bài học. Tiến độ lưu trên trình duyệt của từng máy, không cần đăng nhập; đổi máy hoặc xoá dữ liệu trình duyệt thì bắt đầu lại.</p></div>
        <div class="card"><h3>Gợi ý tiếng Anh</h3><p>Bấm nút <b>EN</b> ở góc trên để hiện lời giải thích tiếng Anh ngắn (hữu ích cho các bạn còn khó đọc tiếng Việt). Nghĩa tiếng Anh của từ cần nhớ luôn có khi chạm vào từ.</p></div>
        <div class="card"><h3>Về nội dung</h3><p>Ba mươi truyện cổ tích, truyền thuyết và ngụ ngôn dân gian Việt Nam được Trường Tiếng Việt Của Em kể lại ngắn gọn cho trẻ 5–12 tuổi. Một số chi tiết đáng sợ trong bản gốc được kể nhẹ nhàng hơn. Bố mẹ có thể kể thêm bản đầy đủ khi con lớn hơn.</p></div>
      </div>
      <div class="section"><a class="btn primary" href="#t${pad(todayStory().id)}">Bắt đầu truyện hôm nay ${ICON.right}</a></div>`;
  }

  /* ════════ TRANG TRUYỆN ════════ */
  let cur = null;   // { t, step, page, … }
  function viewStory(t, step) {
    if (!STEPS.find((s) => s[0] === step)) step = 'nv';
    const changing = !cur || cur.t !== t;
    cur = { t, step, page: changing ? 0 : cur.page };
    const si = STEPS.findIndex((s) => s[0] === step);
    app.innerHTML = `
      <div class="story-head">
        <a class="btn small ghost back" href="#ba-muoi-ngay" aria-label="Về 30 ngày kể chuyện">${ICON.left}</a>
        <div class="row"><span class="tag day">Ngày ${t.id}</span>${genreTag(t)}<span id="head-stars">${starRow(starsOf(t.id))}</span></div>
        <h1>${esc(t.title)}</h1>
      </div>
      <nav class="steps" aria-label="Các phần của truyện">${STEPS.map(([k, l], i) => `<a href="#t${pad(t.id)}-${k}" data-k="${k}" class="${S.prog[t.id] && S.prog[t.id][k] ? 'done' : ''}" ${k === step ? 'aria-current="step"' : ''}><span class="n">${i + 1}</span>${l}</a>`).join('')}</nav>
      <section class="panel" id="panel"></section>
      <div class="panel-foot">
        ${si > 0 ? `<a class="btn ghost" href="#t${pad(t.id)}-${STEPS[si - 1][0]}">${ICON.left} ${STEPS[si - 1][1]}</a>` : '<span></span>'}
        ${si < STEPS.length - 1 ? `<a class="btn primary" href="#t${pad(t.id)}-${STEPS[si + 1][0]}">${STEPS[si + 1][1]} ${ICON.right}</a>` : (t.id < ALL.length ? `<a class="btn primary" href="#t${pad(t.id + 1)}">Ngày ${t.id + 1}: ${esc(byId[t.id + 1].title)} ${ICON.right}</a>` : '')}
      </div>`;
    const cs = document.querySelector('.steps a[aria-current]'); if (cs && cs.scrollIntoView) cs.scrollIntoView({ block: 'nearest', inline: 'center' });
    ({ nv: pCharacters, doc: pRead, td: pMessage, xep: pOrder, do: pWordQuiz, dien: pFill, th: pSituation, sn: pReflect })[step](t, document.getElementById('panel'));
  }
  const head = (title, en) => `<div class="panel-head"><div><h2>${title}</h2>${en ? `<p class="en">${en}</p>` : ''}</div></div>`;

  /* 1 · nhân vật */
  function pCharacters(t, el) {
    el.innerHTML = `${head('Gặp gỡ nhân vật', 'Meet the characters')}
      <div class="cover-big"><div class="pic">${ART.scene(t.cover, castOf(t))}</div>
        <div>${trau('wave', esc(t.hook), t.en ? esc(t.en) : '', true)}</div></div>
      <div class="chars">${t.chars.map(([name, tok, desc, trait]) => `<div class="char"><div class="face">${ART.portrait(tok, castOf(t))}</div><div><h3>${esc(name)}</h3><p>${esc(desc)}</p>${trait ? `<span class="trait">${esc(trait)}</span>` : ''}</div></div>`).join('')}</div>`;
    fitPortraits(el);
  }
  function fitPortraits(el) {
    el.querySelectorAll('svg.fit').forEach((svg) => {
      try { const b = svg.querySelector('g').getBBox(); const pd = 8, sz = Math.max(b.width, b.height) + pd * 2; svg.setAttribute('viewBox', `${b.x + b.width / 2 - sz / 2} ${b.y + b.height / 2 - sz / 2} ${sz} ${sz}`); } catch (e) { /* giữ khung cũ */ }
    });
  }

  /* 2 · sách lật */
  function pRead(t, el) {
    el.innerHTML = `${head('Đọc truyện', 'Tap a yellow word to see its meaning. Swipe or use the arrows to turn the page.')}
      <div class="book-wrap"><div class="book" id="book"></div>
        <div class="book-ctrl">
          <button class="btn" data-act="prev" aria-label="Trang trước">${ICON.left}<span class="vh">Trang trước</span></button>
          <div class="dots" id="dots"></div>
          <button class="btn primary" data-act="next" aria-label="Trang sau">${ICON.right}<span class="vh">Trang sau</span></button>
        </div>
        <div class="mid-tools"><button class="btn small" data-act="read-page">${ICON.sound} Nghe đọc trang này</button></div>
      </div>`;
    const book = document.getElementById('book');
    book.innerHTML = sheet(t, cur.page);
    drawDots(t);
    let x0 = null, y0 = null;
    book.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    book.addEventListener('touchend', (e) => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) turn(t, cur.page + (dx < 0 ? 1 : -1)); x0 = null; });
  }
  const lastPage = (t) => t.pages.length + 1;
  function sheet(t, p, cls = '') {
    const n = t.pages.length;
    if (p === 0) return `<article class="sheet cover ${cls}"><div class="inner"><div class="pic">${ART.scene(t.cover, castOf(t))}</div>
      <div><p class="eyebrow">Ngày ${t.id} · ${esc(t.genre)}</p><h2>${esc(t.title)}</h2>${trau('reading', 'Các bạn ngồi thật ngoan nhé, mình bắt đầu kể đây!', 'Get comfy — the story is starting!')}<div class="row" style="margin-top:14px"><button class="btn primary" data-act="next">Mở sách ${ICON.right}</button></div></div></div></article>`;
    if (p > n) return `<article class="sheet cover end ${cls}"><div class="inner"><img src="${IMG('cheer')}" alt="Trâu Con vui mừng">
      <div><h2>Hết truyện rồi!</h2><p style="margin-top:8px;font-size:var(--step-1)">Các bạn đã đọc xong <b>${esc(t.title)}</b>. Các bạn nhớ được bao nhiêu từ tô vàng nào?</p>
      <div class="word-chips" style="margin-top:12px">${Object.keys(t.words).map((w) => chip(t, w)).join('')}</div>
      <div class="row" style="margin-top:16px"><button class="btn" data-act="goto-page" data-p="1">${ICON.redo} Đọc lại</button><a class="btn primary" href="#t${pad(t.id)}-td">Thông điệp ${ICON.right}</a></div></div></div></article>`;
    const [cap, sc, text, aside] = t.pages[p - 1];
    const ws = pageWords(t, text);
    return `<article class="sheet ${cls}"><div class="pic">${ART.scene(sc, castOf(t))}</div>
      <div class="txt"><h3 class="cap">${esc(cap)}</h3><p class="story-text">${marked(t, text)}</p>
        ${aside ? `<div class="aside"><img src="${IMG('peeking')}" alt=""><p class="bub">${esc(aside)}</p></div>` : ''}
        ${ws.length ? `<div class="word-chips"><span class="lbl">Từ cần nhớ:</span>${ws.map((w) => chip(t, w)).join('')}</div>` : ''}
        <div class="pno"><span>Trang ${p}/${n}</span></div></div>
      ${p < n + 1 ? '<button class="corner" data-act="next" aria-label="Lật trang"></button>' : ''}</article>`;
  }
  const chip = (t, w) => `<button type="button" class="wchip w-open${S.words[t.id + '|' + w] ? ' got' : ''}" data-w="${esc(w)}">${S.words[t.id + '|' + w] ? ICON.check : ''}${esc(w)}</button>`;
  function drawDots(t) {
    const d = document.getElementById('dots'); if (!d) return;
    const seen = (S.prog[t.id] && S.prog[t.id].seen) || 0;
    d.innerHTML = Array.from({ length: lastPage(t) + 1 }, (_, i) => `<button data-act="goto-page" data-p="${i}" aria-label="${i === 0 ? 'Bìa' : i > t.pages.length ? 'Trang cuối' : 'Trang ' + i}" ${i === cur.page ? 'aria-current="true"' : ''} class="${i <= seen ? 'seen' : ''}"></button>`).join('');
    const prev = document.querySelector('[data-act="prev"]'), next = document.querySelector('.book-ctrl [data-act="next"]');
    if (prev) prev.disabled = cur.page === 0; if (next) next.disabled = cur.page >= lastPage(t);
  }
  let turning = false;
  function turn(t, to) {
    to = Math.max(0, Math.min(lastPage(t), to));
    if (turning || to === cur.page) return;
    const book = document.getElementById('book'); if (!book) return;
    closePop(); stopSpeak(); sfx.flip();
    const from = cur.page, dir = to > from ? 1 : -1; cur.page = to;
    const p = S.prog[t.id] = S.prog[t.id] || {};
    if ((p.seen || 0) < to) { p.seen = to; save(); }
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { book.innerHTML = sheet(t, to); }
    else {
      turning = true;
      if (dir > 0) { book.innerHTML = sheet(t, to) + sheet(t, from, 'leave'); }
      else { book.innerHTML = sheet(t, from) + sheet(t, to, 'enter'); }
      const ov = book.querySelector('.leave, .enter');
      const done = () => { turning = false; book.innerHTML = sheet(t, to); };
      ov.addEventListener('animationend', done, { once: true }); setTimeout(() => { if (turning) done(); }, 900);
    }
    drawDots(t);
    if (to === t.pages.length) award(t, 'doc');
    const top = book.getBoundingClientRect().top; if (top < 70) window.scrollBy({ top: top - 80, behavior: reduce ? 'auto' : 'smooth' });
  }

  /* 3 · thông điệp */
  function pMessage(t, el) {
    el.innerHTML = `${head('Thông điệp của câu chuyện', 'What the story teaches us')}
      <div class="message"><img src="${IMG('thumbs-up')}" alt="Trâu Con giơ ngón tay cái">
        <div><p class="eyebrow">Câu chuyện muốn nói với chúng mình</p><p class="big">${esc(t.msg)}</p>${t.msgEn ? `<p class="en">${esc(t.msgEn)}</p>` : ''}
          ${t.saying ? `<div class="saying"><p class="muted" style="font-weight:800">Ông bà ta có câu:</p><b>${esc(t.saying[0])}</b><p>${esc(t.saying[1] || '')}</p></div>` : ''}
          <div class="row" style="margin-top:14px"><button class="btn small" data-act="say-msg">${ICON.sound} Nghe đọc</button></div></div></div>
      <div style="margin-top:18px">${trau('thinking', 'Các bạn có đồng ý với lời nhắn này không? Hãy kể cho bố mẹ nghe một lần các bạn đã làm giống như vậy nhé!', 'Do you agree? Tell your family about a time you did something like this.')}</div>`;
  }

  /* 4 · xếp tranh rồi kể lại */
  function orderIdx(t) {
    if (t.order) return t.order.map((i) => i - 1);
    const n = t.pages.length, k = n >= 8 ? 5 : 4;
    return Array.from({ length: k }, (_, i) => Math.round((i * (n - 1)) / (k - 1)));
  }
  function pOrder(t, el) {
    const idx = orderIdx(t), n = idx.length;
    const st = { slots: Array(n).fill(null), tray: shuffle(idx.map((_, i) => i)) };
    if (st.tray.every((v, i) => v === i)) st.tray.reverse();
    const pc = (i, extra = '') => { const pg = t.pages[idx[i]]; return `<button type="button" class="pcard" data-i="${i}" ${extra}><span class="pic">${ART.scene(pg[1], castOf(t))}</span><span class="c">${esc(pg[0])}</span></button>`; };
    function draw(msg) {
      el.innerHTML = `${head('Xếp tranh theo thứ tự', 'Tap the pictures in the order they happen in the story.')}
        ${trau('thinking', msg || 'Chuyện gì xảy ra trước? Các bạn chạm vào tranh theo đúng thứ tự câu chuyện nhé. Chạm vào tranh đã xếp để lấy ra.', 'What happened first? Tap the pictures in order. Tap a placed picture to take it back.')}
        <div class="slots n${n}" style="--n:${n};margin-top:16px">${st.slots.map((v, s) => `<div class="slot" data-s="${s}"><span class="num">${s + 1}</span>${v == null ? '' : pc(v, `data-from="${s}"`)}</div>`).join('')}</div>
        <div class="tray n${n}" style="--n:${n}">${st.tray.map((v) => (v == null ? '<span></span>' : pc(v))).join('')}</div>`;
    }
    draw();
    el.onclick = (e) => {
      const b = e.target.closest('.pcard'); if (!b) return;
      const i = +b.dataset.i;
      if (b.dataset.from != null) { const s = +b.dataset.from; st.slots[s] = null; st.tray[st.tray.indexOf(null)] = i; sfx.pop(); draw(); return; }
      const s = st.slots.indexOf(null); if (s < 0) return;
      st.slots[s] = i; st.tray[st.tray.indexOf(i)] = null; sfx.pop(); draw();
      if (st.slots.every((v) => v != null)) check();
    };
    function check() {
      const wrong = st.slots.map((v, s) => (v === s ? -1 : s)).filter((s) => s >= 0);
      el.querySelectorAll('.slot').forEach((sl, s) => sl.classList.add(wrong.includes(s) ? 'no' : 'ok'));
      if (!wrong.length) { sfx.ok(); setTimeout(() => retell(), 700); return; }
      sfx.bad();
      setTimeout(() => { wrong.forEach((s) => { const v = st.slots[s]; st.slots[s] = null; st.tray[st.tray.indexOf(null)] = v; }); draw(`Có ${wrong.length} tranh chưa đúng chỗ, mình đã lấy ra rồi. Các bạn thử lại nhé!`); }, 1100);
    }
    function retell() {
      award(t, 'xep');
      el.onclick = null;
      el.innerHTML = `${head('Bây giờ, các bạn kể lại nhé!', 'Now retell the story using the pictures.')}
        ${trau('cheer', 'Đúng hết rồi! Bây giờ các bạn nhìn tranh và kể lại câu chuyện bằng lời của mình cho bố mẹ hoặc bạn bè nghe nhé. Quên thì chạm vào tranh để xem gợi ý!', 'All correct! Look at the pictures and tell the story in your own words. Tap a picture for a hint.')}
        <div class="retell" style="margin-top:16px">${idx.map((pi, i) => `<button type="button" class="pcard" data-act="hint"><span class="pic">${ART.scene(t.pages[pi][1], castOf(t))}</span><span class="c">${i + 1}. ${esc(t.pages[pi][0])}</span><span class="hint">${esc(sentences(plain(t.pages[pi][2]))[0])}</span></button>`).join('')}</div>
        <div class="row" style="margin-top:16px"><button class="btn" data-act="redo-order">${ICON.redo} Xếp lại</button></div>`;
    }
  }

  /* trò chơi chọn đáp án dùng chung (đúng mới đi tiếp, có đếm lần đúng ngay) */
  function runQuiz(el, rounds, o) {
    let r = 0, first = 0, tried = false;
    function draw() {
      if (r >= rounds.length) { o.onDone(first, rounds.length); return; }
      const R = rounds[r]; tried = false;
      el.innerHTML = `${o.head}<div class="quiz"><div class="top-line"><span>Câu ${r + 1}/${rounds.length}</span><span class="pips">${rounds.map((_, i) => `<i class="${i < r ? 'done' : i === r ? 'now' : ''}"></i>`).join('')}</span></div>
        <div class="q">${R.q}</div>${R.qen ? `<p class="en" style="margin-top:6px">${R.qen}</p>` : ''}
        <div class="opts${o.words ? ' words' : ''}">${R.opts.map((x, i) => `<button type="button" class="opt" data-i="${i}">${esc(x)}</button>`).join('')}</div>
        <div id="qfb" aria-live="polite"></div></div>`;
      el.querySelectorAll('.opt').forEach((b) => b.addEventListener('click', () => pick(b)));
    }
    function pick(b) {
      const R = rounds[r], i = +b.dataset.i, fb = el.querySelector('#qfb');
      if (b.classList.contains('ok') || el.querySelector('.opt.ok')) return;
      if (i === R.ans) {
        b.classList.add('ok'); sfx.ok(); if (!tried) first++;
        if (R.fill) { const bl = el.querySelector('.blank'); if (bl) bl.textContent = R.fill; }
        fb.innerHTML = `<div class="explain">${trau('cheer', `${rand(SAY.ok)}${R.why ? ' ' + esc(R.why) : ''}`, R.whyEn || '')}<div class="row end" style="margin-top:8px">${R.say ? `<button class="btn small" data-act="speak" data-text="${esc(R.say)}">${ICON.sound} Nghe</button>` : ''}<button class="btn primary small" id="qnext">${r + 1 < rounds.length ? 'Câu tiếp' : 'Xong'} ${ICON.right}</button></div></div>`;
        el.querySelector('#qnext').addEventListener('click', () => { r++; draw(); });
      } else {
        b.classList.add('no'); sfx.bad(); tried = true;
        fb.innerHTML = `<div style="margin-top:14px">${trau('thinking', rand(SAY.bad) + (R.hint ? ` <span class="muted">Gợi ý: ${esc(R.hint)}</span>` : ''))}</div>`;
      }
    }
    draw();
  }
  function doneBox(t, k, first, total, vi) {
    return `<div class="done-box"><img src="${IMG('cheer')}" alt="Trâu Con vui mừng"><h2>${vi}</h2><p class="muted" style="margin-top:6px">Đúng ngay lần đầu: <b>${first}/${total}</b></p>
      <div class="row"><button class="btn" data-act="redo" data-k="${k}">${ICON.redo} Chơi lại</button>${nextLink(t, k)}</div></div>`;
  }
  const nextLink = (t, k) => { const i = STEPS.findIndex((s) => s[0] === k); return i < STEPS.length - 1 ? `<a class="btn primary" href="#t${pad(t.id)}-${STEPS[i + 1][0]}">${STEPS[i + 1][1]} ${ICON.right}</a>` : ''; };
  function otherWords(t, not, n) {
    let pool = Object.keys(t.words).filter((w) => w !== not);
    if (pool.length < n) pool = pool.concat(shuffle(ALL.filter((x) => x !== t).flatMap((x) => Object.keys(x.words))).filter((w) => w !== not && !pool.includes(w)).slice(0, n - pool.length));
    return shuffle(pool).slice(0, n);
  }

  /* 5 · đố từ (ôn thẻ từ trước, rồi đố) */
  function pWordQuiz(t, el, skipCards) {
    const keys = Object.keys(t.words);
    if (!skipCards) {
      el.innerHTML = `${head('Đố từ', 'Word quiz — first, review the word cards.')}
        ${trau('peeking', 'Trước khi đố, các bạn ôn lại các từ cần nhớ nhé. Chạm vào thẻ để lật xem nghĩa!', 'Tap each card to flip it and see the meaning.')}
        <div class="flash" style="margin-top:16px">${keys.map((w) => `<button type="button" class="fcard" data-act="flipcard"><span class="in"><span class="f">${esc(w)}</span><span class="b">${esc(t.words[w][0])}<br><i class="muted">${esc(t.words[w][1])}</i></span></span></button>`).join('')}</div>
        <div class="row"><button class="btn primary" data-act="start-wq">Bắt đầu đố từ ${ICON.right}</button></div>`;
      return;
    }
    const rounds = shuffle(keys).slice(0, Math.min(6, keys.length)).map((w) => {
      const opts = shuffle([w, ...otherWords(t, w, 3)]);
      return { q: `Từ nào có nghĩa là: <span style="color:var(--wood-d)">“${esc(t.words[w][0])}”</span>?`, qen: '', hint: t.words[w][1], opts, ans: opts.indexOf(w), say: w };
    });
    runQuiz(el, rounds, { words: true, head: head('Đố từ', 'Which word matches the meaning? Tap “EN” for an English hint.') + trau('thinking', 'Mình đọc nghĩa, các bạn tìm từ đúng nhé!', 'I read the meaning — you find the word!'), onDone: (f, n) => { award(t, 'do'); el.innerHTML = doneBox(t, 'do', f, n, 'Các bạn nhớ từ giỏi quá!'); } });
  }

  /* 6 · điền từ: câu lấy từ chính trang truyện, chỗ trống là từ cần nhớ */
  function fillRounds(t) {
    const cands = {};
    t.pages.forEach((pg) => sentences(pg[2]).forEach((s) => {
      const ms = [...s.matchAll(MARK)];
      const words = plain(s).split(/\s+/).length;
      const score = ms.length * 10 + (words < 6 ? 5 : 0);
      ms.forEach((m) => { const k = keyOf(t, m[1], m[2]); if (!cands[k] || score < cands[k].score) cands[k] = { s, m, score }; });
    }));
    return shuffle(Object.keys(cands)).slice(0, 5).map((k) => {
      const { s, m } = cands[k];
      let before = plain(s.slice(0, m.index)), after = plain(s.slice(m.index + m[0].length));
      const full = before + m[1] + after, op = (full.match(/“/g) || []).length, cl = (full.match(/”/g) || []).length;
      if (cl > op) after = after.replace(/”(?=[^”]*$)/, '');
      if (op > cl) { if (before.includes('“')) before = before.replace('“', ''); else after = after.replace('“', ''); }
      const opts = shuffle([k, ...otherWords(t, k, 3)]);
      return { q: `${esc(before)}<span class="blank">______</span>${esc(after)}`, opts, ans: opts.indexOf(k), fill: m[1], hint: t.words[k] ? t.words[k][0] : '', say: before + m[1] + after };
    });
  }
  function pFill(t, el) {
    runQuiz(el, fillRounds(t), { words: true, head: head('Điền từ vào chỗ trống', 'Choose the missing word.') + trau('listening', 'Câu này đang thiếu một từ. Các bạn chọn từ đúng để điền vào chỗ trống nhé!', 'One word is missing. Choose the right one!'), onDone: (f, n) => { award(t, 'dien'); el.innerHTML = doneBox(t, 'dien', f, n, 'Điền đúng hết rồi!'); } });
  }

  /* 7 · tình huống */
  function pSituation(t, el) {
    const rounds = t.quiz.map(([q, opts, ans, why]) => { const order = shuffle(opts.map((_, i) => i)); return { q: esc(q), opts: order.map((i) => opts[i]), ans: order.indexOf(ans), why }; });
    runQuiz(el, rounds, { head: head('Câu đố tình huống', 'What happens in the story — and what would you do?') + trau('thinking', 'Các bạn đọc kỹ rồi chọn câu trả lời nhé. Không có gì phải vội!', 'Read carefully and choose. No need to hurry!'), onDone: (f, n) => { award(t, 'th'); el.innerHTML = doneBox(t, 'th', f, n, 'Các bạn suy nghĩ thật giỏi!'); } });
  }

  /* 8 · suy ngẫm */
  const FEEL = [['😊', 'Vui'], ['😮', 'Bất ngờ'], ['😢', 'Buồn'], ['🤔', 'Suy nghĩ'], ['🥰', 'Xúc động']];
  const STARTERS = ['Mình nghĩ rằng…', 'Mình thích nhất là…, vì…', 'Nếu mình là…, mình sẽ…', 'Câu chuyện dạy mình…'];
  function pReflect(t, el) {
    const nt = S.notes[t.id] = S.notes[t.id] || { feel: null, a: t.think.map(() => '') };
    el.innerHTML = `${head('Suy ngẫm', 'Think and write a few sentences.')}
      ${trau('reading', 'Các bạn viết vài câu về điều mình nghĩ nhé. Viết ngắn thôi cũng được, mình rất muốn đọc! Bố mẹ có thể viết giúp khi các bạn kể.', 'Write a few sentences. Short is fine! A parent can write while you speak.')}
      <div class="card" style="margin-top:16px"><p style="font-weight:900;font-size:1.15rem">Câu chuyện làm các bạn thấy thế nào?</p>
        <div class="feel" style="margin-top:10px">${FEEL.map(([e, l]) => `<button type="button" data-act="feel" data-f="${l}" aria-pressed="${nt.feel === l}"><span>${e}</span>${l}</button>`).join('')}</div>
        <div class="think">${t.think.map((q, i) => `<div><label for="tk${i}">${i + 1}. ${esc(q)}</label><textarea id="tk${i}" data-i="${i}" placeholder="Các bạn viết ở đây…">${esc(nt.a[i] || '')}</textarea>
          <div class="starters">${STARTERS.map((s) => `<button type="button" data-act="starter" data-i="${i}">${esc(s)}</button>`).join('')}</div></div>`).join('')}</div>
        <div class="row" style="margin-top:18px"><button class="btn primary" data-act="save-think">${ICON.check} Mình viết xong rồi!</button><button class="btn" data-act="copy-think">Sao chép để gửi thầy cô</button></div>
        <div id="sn-fb" aria-live="polite"></div></div>`;
    el.querySelectorAll('textarea').forEach((ta) => ta.addEventListener('input', () => { nt.a[+ta.dataset.i] = ta.value; save(); }));
  }
  function thinkText(t) {
    const nt = S.notes[t.id] || { a: [] };
    return `Trâu Con Kể Chuyện · Ngày ${t.id}: ${t.title}\nCảm xúc: ${nt.feel || '…'}\n` + t.think.map((q, i) => `${i + 1}. ${q}\n${(nt.a[i] || '').trim() || '…'}`).join('\n');
  }

  /* ── bong bóng nghĩa của từ ── */
  const pop = document.getElementById('pop');
  let popFor = null;
  function openPop(btn, t, w) {
    const d = t.words[w]; if (!d) return;
    closePop(); popFor = btn; btn.setAttribute('aria-expanded', 'true');
    const got = S.words[t.id + '|' + w];
    pop.innerHTML = `<button class="x" data-act="close-pop" aria-label="Đóng">×</button><p class="w-big">${esc(w)}</p><p class="mean">${esc(d[0])}</p><p class="en">${esc(d[1])}</p>
      <div class="row"><button class="btn small" data-act="say-word" data-t="${t.id}" data-w="${esc(w)}">${ICON.sound} Nghe</button><button class="btn small ${got ? 'green' : 'primary'}" data-act="keep-word" data-t="${t.id}" data-w="${esc(w)}">${got ? ICON.check + ' Đã nhớ' : ICON.heart + ' Mình nhớ rồi'}</button></div>`;
    pop.hidden = false;
    const r = btn.getBoundingClientRect(), pw = pop.offsetWidth, ph = pop.offsetHeight;
    let left = Math.min(Math.max(12, r.left + r.width / 2 - pw / 2), innerWidth - pw - 12);
    let top = r.bottom + 10; if (top + ph > innerHeight - 12) top = Math.max(12, r.top - ph - 10);
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
    sfx.pop();
  }
  function closePop() { pop.hidden = true; if (popFor) popFor.setAttribute('aria-expanded', 'false'); popFor = null; }
  window.addEventListener('scroll', () => { if (!pop.hidden) closePop(); }, { passive: true });

  /* ── bấm ── */
  document.addEventListener('click', (e) => {
    const w = e.target.closest('.w, .w-open');
    if (w && cur) { e.preventDefault(); if (popFor === w) closePop(); else openPop(w, cur.t, w.dataset.w); return; }
    if (!pop.hidden && !e.target.closest('#pop')) closePop();
    const b = e.target.closest('[data-act]'); if (!b) return;
    const act = b.dataset.act, t = cur && cur.t;
    switch (act) {
      case 'sound': S.sound = !S.sound; save(); if (!S.sound) stopSpeak(); break;
      case 'en': S.en = !S.en; save(); break;
      case 'filter': filter = b.dataset.k; viewHome(); document.getElementById('luoi').scrollIntoView(); break;
      case 'next': if (t) turn(t, cur.page + 1); break;
      case 'prev': if (t) turn(t, cur.page - 1); break;
      case 'goto-page': if (t) turn(t, +b.dataset.p); break;
      case 'read-page': if (t) { const p = cur.page; if (p >= 1 && p <= t.pages.length) speak(plain(t.pages[p - 1][2]), audioFile(t, p)); else if (p === 0) speak(t.title, `audio/t${pad(t.id)}-p00.mp3`); } break;
      case 'say-msg': if (t) speak(t.msg, `audio/t${pad(t.id)}-thong-diep.mp3`); break;
      case 'speak': speak(b.dataset.text); break;
      case 'say-word': speak(b.dataset.w); break;
      case 'keep-word': { const k = b.dataset.t + '|' + b.dataset.w; S.words[k] = S.words[k] ? 0 : 1; if (!S.words[k]) delete S.words[k]; save(); sfx.ok();
        b.className = 'btn small ' + (S.words[k] ? 'green' : 'primary'); b.innerHTML = S.words[k] ? ICON.check + ' Đã nhớ' : ICON.heart + ' Mình nhớ rồi';
        document.querySelectorAll(`.wchip[data-w="${CSS.escape(b.dataset.w)}"]`).forEach((c) => { c.classList.toggle('got', !!S.words[k]); c.innerHTML = (S.words[k] ? ICON.check : '') + esc(b.dataset.w); });
        if (S.words[k]) toast('Đã cất vào Sổ từ của em!'); break; }
      case 'close-pop': closePop(); break;
      case 'hint': b.classList.toggle('open'); break;
      case 'redo-order': pOrder(t, document.getElementById('panel')); break;
      case 'flipcard': b.classList.toggle('flip'); sfx.flip(); break;
      case 'start-wq': pWordQuiz(t, document.getElementById('panel'), true); break;
      case 'redo': { const k = b.dataset.k, el = document.getElementById('panel'); if (k === 'do') pWordQuiz(t, el, true); if (k === 'dien') pFill(t, el); if (k === 'th') pSituation(t, el); break; }
      case 'feel': { const nt = S.notes[t.id]; nt.feel = b.dataset.f; save(); b.parentNode.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', x === b ? 'true' : 'false')); sfx.pop(); break; }
      case 'starter': { const ta = document.getElementById('tk' + b.dataset.i); const s = b.textContent.replace('…', ' '); ta.value = (ta.value.trim() ? ta.value.trim() + ' ' : '') + s; ta.focus(); ta.dispatchEvent(new Event('input')); break; }
      case 'save-think': {
        const nt = S.notes[t.id], fb = document.getElementById('sn-fb');
        const ok = nt.a.filter((x) => (x || '').trim().split(/\s+/).filter(Boolean).length >= 3).length;
        if (!nt.feel || ok < t.think.length) { sfx.bad(); fb.innerHTML = `<div style="margin-top:14px">${trau('thinking', !nt.feel ? 'Các bạn chọn một cảm xúc trước nhé!' : 'Các bạn viết mỗi câu ít nhất vài chữ nhé. Bấm vào câu gợi ý để bắt đầu dễ hơn!', 'Pick a feeling and write at least a few words for each question.')}</div>`; break; }
        award(t, 'sn');
        fb.innerHTML = `<div class="done-box" style="margin-top:16px"><img src="${IMG('wave')}" alt="Trâu Con vẫy tay"><h2>Cảm ơn các bạn đã chia sẻ!</h2><p class="muted" style="margin-top:6px">${isDone(t.id) ? `Các bạn đã hoàn thành Ngày ${t.id}. Hẹn gặp lại các bạn ở câu chuyện ngày mai nhé!` : 'Các bạn xem lại các phần còn thiếu sao nhé.'}</p><div class="row">${t.id < ALL.length ? `<a class="btn primary" href="#t${pad(t.id + 1)}">Ngày ${t.id + 1}: ${esc(byId[t.id + 1].title)} ${ICON.right}</a>` : '<a class="btn primary" href="#ba-muoi-ngay">Về 30 ngày kể chuyện</a>'}</div></div>`;
        break; }
      case 'copy-think': { const txt = thinkText(t); try { navigator.clipboard.writeText(txt).then(() => toast('Đã sao chép! Các bạn dán vào tin nhắn gửi thầy cô nhé.'), () => toast('Máy chưa cho sao chép. Bố mẹ chụp màn hình gửi thầy cô nhé.')); } catch (err) { toast('Máy chưa cho sao chép. Bố mẹ chụp màn hình gửi thầy cô nhé.'); } break; }
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePop();
    if (!cur || cur.step !== 'doc' || /TEXTAREA|INPUT/.test(document.activeElement.tagName)) return;
    if (e.key === 'ArrowRight') turn(cur.t, cur.page + 1);
    if (e.key === 'ArrowLeft') turn(cur.t, cur.page - 1);
  });

  /* ── chỉ xem: hạn chế lưu ảnh, kéo thả, lưu trang và in trang ── */
  const guarded = 'img, svg, .pic, .face, .pcard, .story-card, .sheet, .fcard';
  document.addEventListener('contextmenu', (e) => { if (e.target.closest && e.target.closest(guarded)) e.preventDefault(); });
  document.addEventListener('dragstart', (e) => { if (e.target.closest && e.target.closest(guarded)) e.preventDefault(); });
  const noDrag = () => document.querySelectorAll('img:not([draggable])').forEach((i) => i.setAttribute('draggable', 'false'));
  new MutationObserver(noDrag).observe(document.body, { childList: true, subtree: true });
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && ['s', 'p'].includes((e.key || '').toLowerCase())) { e.preventDefault(); toast('Trang này chỉ để xem trực tuyến.'); }
  });

  /* ── điều hướng ── */
  function route() {
    closePop(); stopSpeak();
    const h = location.hash.replace('#', '');
    const m = h.match(/^t(\d{2})(?:-([a-z]+))?$/);
    document.querySelectorAll('.nav a').forEach((a) => a.removeAttribute('aria-current'));
    const mark = (r) => { const a = document.querySelector(`.nav a[data-r="${r}"]`); if (a) a.setAttribute('aria-current', 'page'); };
    if (m && byId[+m[1]]) { mark('ba-muoi-ngay'); viewStory(byId[+m[1]], m[2] || 'nv'); window.scrollTo(0, 0); return; }
    cur = null;
    if (h === 'so-tu') { mark('so-tu'); viewNotebook(); }
    else if (h === 'huong-dan') { mark('huong-dan'); viewGuide(); }
    else if (h === 'ba-muoi-ngay') { mark('ba-muoi-ngay'); viewHome(true); return; }
    else if (h === 'dieu-khoan') { mark('trang-dau'); viewHome(); document.getElementById('dieu-khoan').scrollIntoView(); return; }
    else { mark('trang-dau'); viewHome(); }
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  updateTop();
  route();
})();
