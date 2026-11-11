// Tạo AM-THANH.md: danh sách câu cần ghi âm (giọng Elio) cho từng trang truyện.
// Chạy: node tools/am-thanh.mjs
import fs from 'node:fs';
import vm from 'node:vm';
const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ['truyen-01-10.js', 'truyen-11-20.js', 'truyen-21-30.js']) vm.runInContext(fs.readFileSync(new URL('../' + f, import.meta.url), 'utf8'), ctx);
const plain = (s) => s.replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, '$1');
const pad = (n) => String(n).padStart(2, '0');
let out = '# Danh sách ghi âm — Trâu Con Kể Chuyện\n\nĐặt file .mp3 vào thư mục `audio/`, đúng tên ở cột đầu. Trang sẽ tự dùng file ghi âm; trang nào chưa có file thì dùng giọng đọc có sẵn của máy.\n\n';
for (const t of ctx.window.TRUYEN.sort((a, b) => a.id - b.id)) {
  out += `## Ngày ${t.id}: ${t.title}\n\n| File | Lời đọc |\n|---|---|\n`;
  out += `| t${pad(t.id)}-p00.mp3 | ${t.title} |\n`;
  t.pages.forEach((p, i) => { out += `| t${pad(t.id)}-p${pad(i + 1)}.mp3 | ${plain(p[2]).replace(/\|/g, '/')} |\n`; });
  out += `| t${pad(t.id)}-thong-diep.mp3 | ${t.msg} |\n\n`;
}
fs.writeFileSync(new URL('../AM-THANH.md', import.meta.url), out);
console.log('Đã tạo AM-THANH.md');
