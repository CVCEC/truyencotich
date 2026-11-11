# Trâu Con Kể Chuyện

Kho truyện cổ tích Việt Nam của **Trường Tiếng Việt Của Em** (CVCEC). Giai đoạn thí điểm: **30 ngày, 30 câu chuyện**, mỗi ngày một truyện, Trâu Con dẫn dắt từ đầu đến cuối.

Mỗi truyện có 8 phần:

1. **Nhân vật**: tranh bìa, lời mở đầu của Trâu Con, thẻ giới thiệu từng nhân vật.
2. **Đọc truyện**: sách lật từng trang (vuốt, bấm mũi tên hoặc chạm góc trang). Từ cần nhớ được tô vàng; chạm vào để xem nghĩa tiếng Việt, nghĩa tiếng Anh, nghe đọc và cất vào **Sổ từ của em**.
3. **Thông điệp**: lời nhắn nhủ của truyện và câu tục ngữ, ca dao liên quan.
4. **Xếp tranh**: xếp tranh đúng thứ tự, sau đó nhìn tranh kể lại truyện (chạm tranh để xem gợi ý).
5. **Đố từ**: lật thẻ ôn từ, rồi đọc nghĩa chọn từ đúng.
6. **Điền từ**: câu lấy từ chính trang truyện, chọn từ cần nhớ điền vào chỗ trống.
7. **Tình huống**: câu hỏi trắc nghiệm về truyện và “nếu là em, em sẽ làm gì?”.
8. **Suy ngẫm**: chọn cảm xúc, viết câu trả lời (có câu gợi ý để bắt đầu), nút sao chép để gửi thầy cô.

Nút **EN** ở góc trên hiện lời giải thích tiếng Anh ngắn ở mọi phần.

## Các file

| File | Dùng để |
|---|---|
| `index.html` | Trang chính |
| `truyen-01-10.js`, `truyen-11-20.js`, `truyen-21-30.js` | **Nội dung 30 truyện**. Sửa lời truyện, từ vựng, câu hỏi ở đây (cách viết có ghi ở đầu file `truyen-01-10.js`) |
| `art.js` | Tranh minh họa SVG theo màu thương hiệu (cùng bộ hình với Kho Báu Lời Ông Bà) và “câu tả cảnh” để vẽ tranh từng trang |
| `app.js` | Phần chạy trang, sách lật và trò chơi |
| `style.css` | Màu sắc, phông chữ |
| `assets/` | Logo và hình Trâu Con chính thức (không vẽ lại, không kéo giãn) |
| `audio/` | File ghi âm giọng Elio (thêm sau) |
| `AM-THANH.md` | Danh sách câu cần ghi âm và tên file tương ứng |
| `tools/am-thanh.mjs` | Tạo lại `AM-THANH.md` sau khi sửa truyện: `node tools/am-thanh.mjs` |

## Đưa lên GitHub Pages

1. Tạo repo mới trong tổ chức CVCEC trên GitHub `truyencotich`.
2. Tải **toàn bộ** các file và thư mục `assets`, `audio`, `tools` lên nhánh `main`.
3. Vào **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main`, thư mục `/ (root)`.
4. Ở mục **Custom domain**, điền tên miền phụ `truyencotich.cvcec.org` (file `CNAME` đã có sẵn tên này), bấm Save, rồi bật **Enforce HTTPS**.
5. Tại nơi quản lý tên miền cvcec.org (Nhân Hòa), thêm bản ghi **CNAME**: `truyencotich` → `cvcec.github.io`.
6. Nhờ bên làm web trường thêm một nút trên trang học tập dẫn tới tên miền mới.

## Thêm giọng đọc thật (giọng Elio)

Hiện nút “Nghe đọc” dùng giọng tiếng Việt có sẵn trên máy (nếu máy có).
Khi có file ghi âm, chỉ cần đặt file `.mp3` vào thư mục `audio/`, đặt tên đúng như trong `AM-THANH.md` (ví dụ `audio/t01-p03.mp3` là trang 3 của Ngày 1). Không cần sửa code: trang nào có file sẽ tự phát file đó.

## Thêm truyện mới

Chép một khối `T({ … })` trong file truyện, đổi `id`, rồi sửa nội dung. Trong lời truyện, viết từ cần nhớ trong ngoặc kép vuông: `[[từ]]`, và thêm nghĩa của từ đó vào `words`. Phần Điền từ và Đố từ tự lấy từ đó ra, không cần viết thêm câu hỏi.

## Tiến độ của học sinh

Ngôi sao, Sổ từ và bài suy ngẫm được lưu trên trình duyệt của từng máy (không cần đăng nhập). Đổi máy hoặc xóa dữ liệu trình duyệt thì bắt đầu lại.

## Về nội dung

Các truyện cổ tích, truyền thuyết và ngụ ngôn dân gian Việt Nam được Trường Tiếng Việt Của Em kể lại bằng lời mới, ngắn gọn cho trẻ 5–12 tuổi. Một số chi tiết đáng sợ trong bản gốc được kể nhẹ nhàng hơn (ví dụ: kết truyện Tấm Cám, Cây khế, Thạch Sanh, Chú Cuội).

Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026
