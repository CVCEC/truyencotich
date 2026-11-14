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
| `style.css` | Giao diện riêng của trang. Màu và phông trỏ sang biến `--ttv-*` của bộ mẫu chung |
| `CLAUDE.md` | Nội quy chung của các trang Trường Tiếng Việt Của Em (chép từ CVCEC/mau-chung) |
| `assets/` | Hình Trâu Con chính thức (không vẽ lại, không kéo giãn) |
| `audio/` | File ghi âm giọng Elio (thêm sau) |
| `robots.txt` | Chặn công cụ AI thu thập dữ liệu và chặn Google đưa ảnh lên kết quả tìm kiếm |
| `AM-THANH.md` | Danh sách câu cần ghi âm và tên file tương ứng |
| `tools/am-thanh.mjs` | Tạo lại `AM-THANH.md` sau khi sửa truyện: `node tools/am-thanh.mjs` |

## Đưa lên GitHub Pages

1. Tạo repo mới trong tổ chức CVCEC trên GitHub `truyencotich`.
2. Tải **toàn bộ** các file và thư mục `assets`, `audio`, `tools` lên nhánh `main`.
3. Vào **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main`, thư mục `/ (root)`.
4. Ở mục **Custom domain**, điền tên miền phụ `truyencotich.cvcec.org` (file `CNAME` đã có sẵn tên này), bấm Save, rồi bật **Enforce HTTPS**.
5. Tại nơi quản lý tên miền cvcec.org (Nhân Hòa), thêm bản ghi **CNAME**: `truyencotich` → `cvcec.github.io`.
6. Trang được nhúng trong cổng https://vietclass.cvcec.org (góc học `cotich`).

## Bộ mẫu chung "Làng Trâu Con"

`index.html` nạp bộ mẫu chung của trường:

```html
<link rel="stylesheet" href="https://mau.cvcec.org/v1/cvcec-chung.css">
<script src="https://mau.cvcec.org/v1/cvcec-chung.js" defer></script>
```

- Bộ mẫu tự chèn thanh trên cùng (logo, các góc học, nút VI/EN) khi mở trang riêng, và dòng bản quyền “Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026” ở cuối trang. Khi nằm trong khung của cổng vietclass.cvcec.org thì không có thanh trên cùng.
- Màu nhấn của trang là màu góc học `cotich` (tím: gốc / đậm / nhạt) lấy từ `TTV_DANH_SACH` trong bộ mẫu. Biến màu cũ trong `style.css` (`--ink`, `--straw`, `--wood-d`…) trỏ sang biến `--ttv-*`.
- Màn chào dùng cảnh trời – mây – ruộng (`.ttv-canh`); màn đọc truyện và màn chơi dùng nền kem trơn (`data-ttv-nen="don-gian"`).
- Lời truyện và chữ tập đọc dùng phông Andika (`--ttv-phong-tap-doc`).

## Thêm giọng đọc thật (giọng Elio)

### Ngoại lệ tạm thời: vẫn giữ giọng máy (speechSynthesis)

Nội quy chung (`CLAUDE.md`, quy tắc 7) yêu cầu chỉ dùng tệp giọng chuẩn của trường, không dùng giọng máy của thiết bị. Riêng trang này **tạm thời** vẫn giữ giọng máy làm phương án dự phòng, vì:

- Đọc to là phần chính của truyện: các bạn nhỏ đang tập đọc cần nghe lời truyện. Bỏ giọng máy khi chưa có đủ tệp ghi âm thì nút “Nghe đọc” sẽ không đọc được gì.
- Hiện thư mục `audio/` chưa có tệp ghi âm nào (30 truyện cần hơn 300 tệp).

Cách nút đọc to đang chạy (trong `app.js`, hàm `speak`):

1. Ưu tiên phát tệp giọng Elio trong `audio/` (ví dụ `audio/t01-p03.mp3`).
2. Chưa có tệp đó thì dùng giọng tiếng Việt có sẵn trên máy (speechSynthesis). Máy không có giọng tiếng Việt thì hiện lời nhắc “đọc to cùng bố mẹ”.

Đây là **ngoại lệ tạm thời** (khác với Kho Báu, nơi đã bỏ giọng máy). Khi đã ghi âm đủ các câu trong `AM-THANH.md`, sẽ bỏ phần giọng máy cho đúng nội quy.

### Cách thêm tệp ghi âm

1. Mở `AM-THANH.md`: mỗi dòng là một tệp cần ghi, cột đầu là **tên tệp**, cột sau là **lời đọc**. Ví dụ `t01-p03.mp3` là trang 3 của Ngày 1, `t01-p00.mp3` là tên truyện, `t01-thong-diep.mp3` là thông điệp.
2. Ghi âm, lưu thành `.mp3` (mỗi tệp dưới 25 MB), đặt tên **đúng** như trong `AM-THANH.md`.
3. Đặt tệp vào thư mục `audio/` rồi đưa lên GitHub. Không cần sửa code: trang nào có tệp sẽ tự phát tệp đó.
4. Sửa lời truyện xong thì chạy lại `node tools/am-thanh.mjs` để cập nhật `AM-THANH.md`.

## Thêm truyện mới

Chép một khối `T({ … })` trong file truyện, đổi `id`, rồi sửa nội dung. Trong lời truyện, viết từ cần nhớ trong ngoặc kép vuông: `[[từ]]`, và thêm nghĩa của từ đó vào `words`. Phần Điền từ và Đố từ tự lấy từ đó ra, không cần viết thêm câu hỏi.

## Tiến độ của học sinh

Ngôi sao, Sổ từ và bài suy ngẫm được lưu trên trình duyệt của từng máy (không cần đăng nhập). Đổi máy hoặc xóa dữ liệu trình duyệt thì bắt đầu lại.

## Chỉ xem trực tuyến (bảo vệ nội dung)

Giống trang Triển lãm Em học tiếng Việt:

- Mọi tranh truyện đều có dòng chữ chìm “© CVCEC · Trường Tiếng Việt Của Em · Chỉ xem, không sao chép”.
- Chặn nhấn chuột phải và nhấn giữ để lưu ảnh trên tranh, chặn kéo thả ảnh, chặn phím Ctrl/Cmd+S và Ctrl/Cmd+P. Nếu in, trang chỉ ra một dòng báo “chỉ để xem trực tuyến”.
- Không có nút tải về. (Nút “Sao chép để gửi thầy cô” chỉ sao chép bài suy ngẫm do chính học sinh viết.)
- `robots.txt` và thẻ `meta robots`: yêu cầu Google không đưa ảnh lên kết quả tìm kiếm hình ảnh, chặn các công cụ AI thu thập dữ liệu.
- Khung “Lưu ý về sử dụng tài liệu · Terms of use” (tiếng Việt và tiếng Anh) ở cuối mọi trang, đường dẫn thẳng: `#dieu-khoan`.

Các biện pháp này làm việc sao chép khó hơn với người dùng thông thường, nhưng không thể chặn tuyệt đối (ví dụ chụp màn hình). Chữ chìm giúp tranh luôn mang tên CVCEC nếu bị chụp lại.

## Về nội dung

Các truyện cổ tích, truyền thuyết và ngụ ngôn dân gian Việt Nam được Trường Tiếng Việt Của Em kể lại bằng lời mới, ngắn gọn cho trẻ 5–12 tuổi. Một số chi tiết đáng sợ trong bản gốc được kể nhẹ nhàng hơn (ví dụ: kết truyện Tấm Cám, Cây khế, Thạch Sanh, Chú Cuội).

Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026
