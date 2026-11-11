/* Trâu Con Kể Chuyện — nội dung Ngày 1 đến Ngày 10
   Cách viết một truyện:
   - pages: [tiêu đề trang, câu tả tranh, lời truyện, (lời Trâu Con chen vào – không bắt buộc)]
   - Trong lời truyện, [[từ]] là từ cần nhớ (phải có trong words). Viết [[Chữ|chữ]] khi chữ đứng đầu câu.
   - words: { từ: [nghĩa tiếng Việt, nghĩa tiếng Anh] }
   - chars: [tên, hình nhân vật, mô tả, đức tính]
   - quiz: [câu hỏi, [các lựa chọn], số thứ tự đáp án đúng (đếm từ 0), lời giải thích]
   Truyện dân gian được Trường Tiếng Việt Của Em kể lại cho trẻ 5–12 tuổi. */
(function () {
  const T = (o) => (window.TRUYEN = window.TRUYEN || []).push(o);

  T({
    id: 1, title: 'Sự tích con trâu', genre: 'Cổ tích',
    cover: 'lua sun@272,36 cloud@60,40 nd@96:happy buffalo@210,182,1.15',
    hook: 'Chào các bạn! Hôm nay mình kể chuyện về chính họ hàng nhà trâu chúng mình. Vì sao trâu thích ăn cỏ và chăm chỉ cày ruộng? Các bạn cùng nghe nhé!',
    en: 'Why do buffaloes eat grass and help farmers? A hasty god mixed up the Jade Emperor\'s instructions and grass grew everywhere.',
    cast: { than: 'p:hair=top,shirt=leaf,robe,belt=gold,glow', vuatroi: 'p:hair=grandpa,beard=long,crown,shirt=yellow,robe,belt=red,glow' },
    chars: [
      ['Ngọc Hoàng', 'vuatroi', 'Vị vua trên trời, thương người dưới trần gian.', 'thương người'],
      ['Vị thần gieo hạt', 'than', 'Được giao mang hạt giống xuống trần gian nhưng làm việc vội vàng.', 'vội vàng, hay quên'],
      ['Bác nông dân', 'nd', 'Người trồng lúa, rất quý con trâu.', 'chăm chỉ'],
      ['Con trâu', 'buffalo', 'To khỏe, hiền lành, giúp người cày ruộng.', 'chăm chỉ']
    ],
    pages: [
      ['Ngày xửa ngày xưa', 'troi vuatroi@160 cloud@60,60 cloud@262,64', 'Ngày xửa ngày xưa, người dưới [[trần gian]] chưa có nhiều lúa gạo để ăn. Ngọc Hoàng ở trên trời nhìn xuống, thấy thương lắm.'],
      ['Lời dặn của Ngọc Hoàng', 'troi vuatroi@100:point than@220 bag@262', 'Ngọc Hoàng gọi một vị thần đến, trao cho một túi [[hạt giống]] lúa và hạt cỏ. Ngài dặn: “Cứ ba bước thì [[gieo]] một nắm cỏ nhé!”'],
      ['Xuống trần gian', 'lang cloud@70,40 cloud@240,30 than@160:happy bag@206', 'Vị thần nhận túi hạt rồi bay xuống trần gian. Thần đi rất nhanh và làm mọi việc rất [[vội vàng]].'],
      ['Gieo nhầm rồi!', 'field than@110:hold=bag seeds@190,176 seeds@230,184 grass@260,184 say@150,34=Một_bước_ba_nắm!', 'Vì vội, thần nhớ nhầm lời dặn. Thần cứ một bước lại gieo ba nắm cỏ. Chẳng mấy chốc, hạt cỏ rơi khắp nơi.'],
      ['Cỏ mọc khắp nơi', 'meadow nd@110:sad grass@40,176,2 grass@180,180,2.2 grass@226,168,1.8 grass@276,186,2.4 grass@70,194,2 grass@150,196,1.8', 'Cỏ mọc um tùm, lấn cả vào ruộng lúa. Người [[nông dân]] nhổ cỏ suốt ngày mà nhổ mãi không hết.'],
      ['Ngọc Hoàng nổi giận', 'troi vuatroi@100:angry than@220:sad', 'Ngọc Hoàng biết chuyện, rất giận. Ngài [[trừng phạt]] vị thần: “Ngươi phải xuống trần gian ăn hết chỗ cỏ đã gieo nhầm!”'],
      ['Thần hóa thành trâu', 'meadow buffalo@160,180,1.3:eat sparkle@110,90 sparkle@220,80 grass@80 grass@250', 'Thế là vị thần hóa thành một con trâu to khỏe. Trâu xuống trần gian, ngày ngày gặm cỏ.', 'Họ hàng nhà mình bắt đầu từ đây đấy các bạn ạ!'],
      ['Người bạn của nhà nông', 'lua sun@270,40 nd@80:happy buffalo@190,182,1.1 plow@262,184,0.8', 'Từ đó, trâu vừa ăn cỏ vừa giúp bác nông dân [[cày ruộng]]. Ai cũng quý trâu vì trâu hiền lành và [[chăm chỉ]].']
    ],
    words: {
      'trần gian': ['thế giới nơi con người sống, khác với trên trời', 'the human world, the earth'],
      'hạt giống': ['hạt dùng để gieo, mọc thành cây', 'seed'],
      'gieo': ['rắc hạt giống xuống đất cho mọc thành cây', 'to sow'],
      'vội vàng': ['làm quá nhanh, không cẩn thận', 'hasty, in a rush'],
      'nông dân': ['người làm ruộng, trồng trọt', 'farmer'],
      'trừng phạt': ['bắt người có lỗi phải chịu phạt', 'to punish'],
      'cày ruộng': ['lật đất trên ruộng để chuẩn bị trồng lúa', 'to plough the field'],
      'chăm chỉ': ['siêng năng, làm việc đều đặn, không lười', 'hard-working']
    },
    msg: 'Làm việc gì cũng cần cẩn thận và nghe kỹ lời dặn. Khi lỡ mắc lỗi, mình hãy chăm chỉ sửa lỗi.',
    msgEn: 'Listen carefully and do things with care. If you make a mistake, work hard to fix it.',
    saying: ['Con trâu là đầu cơ nghiệp.', 'Ngày xưa, con trâu là tài sản quý nhất của nhà nông.'],
    quiz: [
      ['Ngọc Hoàng dặn vị thần gieo cỏ thế nào?', ['Ba bước gieo một nắm cỏ', 'Một bước gieo ba nắm cỏ', 'Không gieo cỏ'], 0, 'Ngọc Hoàng dặn ba bước mới gieo một nắm cỏ.'],
      ['Vì sao cỏ mọc khắp nơi?', ['Vì vị thần vội vàng nên gieo nhầm', 'Vì trời mưa quá nhiều', 'Vì nông dân trồng cỏ'], 0, 'Thần vội vàng, nhớ nhầm lời dặn.'],
      ['Cô giáo dặn một việc mà em quên mất. Em nên làm gì?', ['Hỏi lại cô cho rõ', 'Đoán đại rồi làm', 'Bỏ qua, không làm'], 0, 'Hỏi lại cho rõ thì sẽ không làm nhầm.']
    ],
    think: ['Nếu là vị thần, các bạn sẽ làm gì để không quên lời dặn?', 'Con trâu giúp bác nông dân những việc gì? Các bạn biết con vật nào khác giúp con người không?']
  });

  T({
    id: 2, title: 'Cây tre trăm đốt', genre: 'Cổ tích',
    cover: 'rung bamboo@60,182,1 khoai@140:happy:hold=bamboo but@236',
    hook: 'Các bạn có biết câu thần chú “khắc nhập, khắc xuất” không? Hôm nay mình kể chuyện anh Khoai hiền lành và cây tre trăm đốt kỳ lạ nhé!',
    en: 'Hard-working Khoai is tricked by a greedy rich man, but a magic spell helps him make a bamboo tree with one hundred sections.',
    cast: { khoai: 'p:hair=boy,shirt=blue,pants=ink', congai: 'p:hair=long,shirt=pink,robe,belt=gold' },
    chars: [
      ['Anh Khoai', 'khoai', 'Chàng trai nghèo, làm thuê cho nhà phú ông.', 'hiền lành, chăm chỉ'],
      ['Phú ông', 'phu', 'Người giàu có trong làng nhưng hay lừa người.', 'tham lam, lật lọng'],
      ['Ông Bụt', 'but', 'Ông tiên tốt bụng, hay giúp người hiền.', 'tốt bụng'],
      ['Con gái phú ông', 'congai', 'Cô gái xinh đẹp, sau này lấy anh Khoai.', 'hiền hậu']
    ],
    pages: [
      ['Lời hứa của phú ông', 'lang khoai@90 phu@220:point', 'Ngày xưa, có anh Khoai nghèo đi [[làm thuê]] cho nhà [[phú ông]]. Phú ông [[hứa]]: “Con chịu khó làm cho ta ba năm, ta sẽ gả con gái cho.”'],
      ['Ba năm vất vả', 'lua sun@270,36 khoai@80:hat buffalo@190,182,1.05 plow@262,184,0.8', 'Anh Khoai làm việc từ sáng sớm đến tối mịt. Nhờ anh, nhà phú ông càng ngày càng giàu.'],
      ['Phú ông lật lọng', 'lang phu@200:sly khoai@90:wow say@150,36=Tìm_cây_tre_trăm_đốt!', 'Hết ba năm, phú ông [[lật lọng]]. Lão bảo: “Con vào rừng tìm cho ta một cây tre trăm đốt thì ta mới gả con gái.”'],
      ['Ông Bụt hiện lên', 'rung bamboo@40 khoai@110:sit:cry but@230', 'Anh Khoai vào rừng tìm mãi mà không có cây tre nào đủ trăm đốt. Anh ngồi khóc. Bỗng ông Bụt [[hiện lên]] hỏi: “Vì sao con khóc?”'],
      ['Khắc nhập, khắc nhập!', 'rung segs@160,180,1.2 khoai@70 but@256 say@96,30=Khắc_nhập,_khắc_nhập!', 'Bụt bảo anh chặt đủ một trăm đốt tre rồi đọc: “Khắc nhập, khắc nhập!” Lạ thay, các đốt tre liền nhau thành cây tre trăm đốt.'],
      ['Khắc xuất, khắc xuất!', 'rung khoai@160:happy:hold=bamboo segs@80,186,0.7 but@256', 'Cây tre dài quá, không vác về được. Bụt dạy anh đọc: “Khắc xuất, khắc xuất!” Các đốt tre rời ra, anh bó lại vác về nhà.'],
      ['Phú ông bị dính chặt', 'lang pole@150,186:n=10:h=16 phu@176:wow khoai@80:point say@196,40=Cứu_tôi_với!', 'Về đến nhà, anh đọc “khắc nhập”, cây tre lại liền như cũ. Phú ông tò mò chạm vào thì bị [[dính chặt]] vào cây tre, gỡ mãi không ra.'],
      ['Sống hạnh phúc', 'lang khoai@120:happy congai@200:happy heart@160,70 sun@270,36', 'Phú ông sợ quá, xin lỗi và hứa gả con gái cho anh. Anh Khoai đọc “khắc xuất” để thả phú ông ra. Anh Khoai [[thật thà]] được sống hạnh phúc bên vợ hiền.']
    ],
    words: {
      'làm thuê': ['làm việc cho người khác để được trả công', 'to work for someone for pay'],
      'phú ông': ['người đàn ông giàu có ở làng quê ngày xưa', 'a rich man in old villages'],
      'hứa': ['nói chắc chắn sẽ làm một việc', 'to promise'],
      'lật lọng': ['đã hứa rồi lại nói khác đi, không giữ lời', 'to go back on one\'s word'],
      'hiện lên': ['bỗng xuất hiện ra trước mắt', 'to suddenly appear'],
      'dính chặt': ['bám vào nhau, không gỡ ra được', 'stuck tight'],
      'thật thà': ['ngay thẳng, không nói dối', 'honest']
    },
    msg: 'Đã hứa thì phải giữ lời. Người thật thà, chăm chỉ sẽ được giúp đỡ, còn người tham lam, lật lọng sẽ phải xấu hổ.',
    msgEn: 'Keep your promises. Honest, hard-working people get help; people who cheat end up ashamed.',
    saying: ['Một lần bất tín, vạn lần bất tin.', 'Thất hứa một lần thì người khác khó tin mình nữa.'],
    quiz: [
      ['Phú ông hứa gì với anh Khoai?', ['Làm ba năm sẽ gả con gái', 'Cho anh một con trâu', 'Cho anh nhiều vàng'], 0, 'Phú ông hứa gả con gái nếu anh làm đủ ba năm.'],
      ['Câu thần chú nào làm các đốt tre liền lại với nhau?', ['Khắc nhập', 'Khắc xuất', 'Biến đi'], 0, '“Khắc nhập” làm các đốt liền lại, “khắc xuất” làm chúng rời ra.'],
      ['Em hứa cho bạn mượn truyện nhưng giờ lại tiếc. Em nên làm gì?', ['Giữ lời hứa, hoặc nói thật với bạn', 'Lờ đi, coi như chưa hứa', 'Bắt bạn làm việc khó rồi mới cho'], 0, 'Giữ lời hứa thì bạn bè mới tin mình.']
    ],
    think: ['Các bạn nghĩ gì về việc phú ông không giữ lời hứa?', 'Nếu có phép “khắc nhập, khắc xuất”, các bạn muốn dùng để làm việc tốt gì?']
  });

  T({
    id: 3, title: 'Cây khế', genre: 'Cổ tích',
    cover: 'vuon khe@200,184,1.25 eagle@96,80,0.8 em@70:wow',
    hook: '“Ăn một quả, trả cục vàng, may túi ba gang, mang đi mà đựng.” Các bạn đã nghe câu này chưa? Đó là lời của chú chim thần trong truyện Cây khế đấy!',
    en: 'A kind younger brother gets only a star-fruit tree, but a magic bird pays him in gold. His greedy older brother wants more and more.',
    cast: { anh: 'p:hair=boy,khan,mus,shirt=red,robe,belt=gold', em: 'p:hair=boy,shirt=mud,pants=woodD,patch' },
    chars: [
      ['Người anh', 'anh', 'Lấy hết của cải cha mẹ để lại, chỉ cho em một cây khế.', 'tham lam'],
      ['Người em', 'em', 'Nghèo nhưng chăm chỉ, chăm sóc cây khế rất chu đáo.', 'hiền lành, biết đủ'],
      ['Chim thần', 'eagle', 'Con chim lạ đến ăn khế và trả ơn bằng vàng.', 'giữ lời hứa']
    ],
    pages: [
      ['Chia gia tài', 'lang anh@80:sly em@150:sad house@232,170,0.9:rich khe@296,184,0.7', 'Ngày xưa có hai anh em. Cha mẹ mất đi, người anh [[tham lam]] lấy hết nhà cửa, ruộng vườn. Người em chỉ được [[chia]] một cây khế.'],
      ['Cây khế sai quả', 'vuon khe@190,184,1.3 em@80:happy:hold=gourd sun@280,36', 'Người em ngày ngày [[chăm sóc]] cây khế. Đến mùa, cây khế sai trĩu quả, quả nào cũng to và ngọt.'],
      ['Chim lạ đến ăn khế', 'vuon khe@200,184,1.3 eagle@200,70,0.6 em@80:sad', 'Một hôm có con chim lạ bay đến ăn khế. Người em buồn rầu nói: “Chim ơi, chim ăn hết khế thì nhà tôi lấy gì mà sống?”'],
      ['Lời chim thần', 'vuon eagle@210,96,0.8 em@80:wow say@96,22=Ăn_một_quả,_trả_cục_vàng', 'Chim đáp: “Ăn một quả, trả cục vàng, may [[túi ba gang]], mang đi mà đựng.”'],
      ['Ra đảo vàng', 'dao gold@140,170 em@220:happy:hold=bag eagle@80,70,0.55 sun@280,36', 'Chim chở người em bay qua biển rộng, đến một [[hòn đảo]] đầy vàng bạc. Người em chỉ nhặt vừa đủ túi ba gang rồi về.'],
      ['Người anh đòi đổi', 'lang anh@100:point em@196 khe@276,184,0.8', 'Người em trở nên [[khá giả]] và hay giúp đỡ hàng xóm. Người anh biết chuyện liền đòi đổi hết nhà cửa lấy cây khế.'],
      ['Túi mười hai gang', 'dao gold@110,170 anh@200:happy:hold=bag bag@262,178:big', 'Chim lại đến ăn khế. Người anh may hẳn túi mười hai gang. Ra đến đảo, anh nhét vàng đầy túi, đầy cả túi áo.'],
      ['Rơi xuống biển', 'bien eagle@160,70,0.8 anh@120,190,0.75:wow waves@160,196 bag@220,190,0.8:gold', 'Túi vàng nặng quá, chim mỏi cánh. Người anh cùng túi vàng rơi tõm xuống biển. Vàng chìm mất, anh bám được tấm ván trôi vào bờ và mới biết [[hối hận]].']
    ],
    words: {
      'tham lam': ['muốn có thật nhiều cho riêng mình', 'greedy'],
      'chia': ['phân ra thành nhiều phần cho nhiều người', 'to share out, divide'],
      'chăm sóc': ['trông nom, lo lắng cho cây hay người được tốt', 'to take care of'],
      'túi ba gang': ['cái túi rộng bằng ba lần gang tay', 'a bag three hand-spans wide'],
      'hòn đảo': ['vùng đất có nước bao quanh', 'island'],
      'khá giả': ['có đủ của cải, sống đầy đủ', 'well-off'],
      'hối hận': ['buồn và tiếc vì việc sai mình đã làm', 'to regret']
    },
    msg: 'Đừng tham lam. Biết đủ, biết chia sẻ thì sẽ sống vui vẻ và được mọi người quý mến.',
    msgEn: 'Don\'t be greedy. Knowing when you have enough, and sharing, brings happiness.',
    saying: ['Tham thì thâm.', 'Người tham lam thường bị thiệt hại.'],
    quiz: [
      ['Người em được chia gì?', ['Một cây khế', 'Một ngôi nhà to', 'Một đàn trâu'], 0, 'Người anh lấy hết, chỉ để lại cho em một cây khế.'],
      ['Vì sao người anh rơi xuống biển?', ['Vì lấy quá nhiều vàng, chim không bay nổi', 'Vì trời có bão', 'Vì chim muốn lấy vàng'], 0, 'Túi mười hai gang nặng quá, chim mỏi cánh.'],
      ['Ở bữa tiệc, mỗi bạn được một chiếc bánh. Em sẽ làm gì?', ['Lấy một chiếc và để phần cho bạn khác', 'Lấy thật nhiều cho đầy túi', 'Giấu bánh đi'], 0, 'Biết đủ và nghĩ đến bạn là việc làm đẹp.']
    ],
    think: ['Vì sao người em chỉ may túi ba gang?', 'Nếu chim thần trả vàng cho các bạn, các bạn sẽ dùng số vàng ấy để làm gì?']
  });

  T({
    id: 4, title: 'Bánh chưng, bánh giầy', genre: 'Truyền thuyết',
    cover: 'tet tray@160,170,1.3 banhchung@136,166 banhgiay@190,166 langlieu@60',
    hook: 'Tết đến các bạn có ăn bánh chưng không? Vì sao bánh chưng lại vuông? Hôm nay mình kể chuyện chàng Lang Liêu nhé!',
    en: 'King Hùng asks his sons for a special offering. Humble Lang Liêu makes a square cake for the Earth and a round cake for the Sky.',
    cast: { langlieu: 'p:hair=top,shirt=wood,pants=ink', lang: 'p:hair=top,crown,shirt=red,robe,belt=gold' },
    chars: [
      ['Vua Hùng', 'vuagia', 'Nhà vua đã già, muốn chọn người nối ngôi.', 'sáng suốt'],
      ['Lang Liêu', 'langlieu', 'Người con thứ mười tám của vua, sống giản dị, chăm trồng lúa.', 'hiếu thảo, chăm chỉ'],
      ['Các lang', 'lang', 'Những người anh của Lang Liêu, chỉ lo tìm của ngon vật lạ.', 'thích khoe của'],
      ['Vị thần', 'but', 'Hiện ra trong giấc mơ, chỉ cho Lang Liêu điều quý nhất.', 'tốt bụng']
    ],
    pages: [
      ['Vua Hùng chọn người', 'cung vuagia@160 lang@60 lang@262', 'Vua Hùng đã già, muốn chọn người [[nối ngôi]]. Vua nói với các con: “Ai tìm được [[lễ vật]] ý nghĩa nhất dâng lên tổ tiên, ta sẽ truyền ngôi cho người đó.”'],
      ['Của ngon vật lạ', 'sancung lang@60 fish@140,186,1.1 lang@230 gold@290,186,0.7', 'Các lang đua nhau đi tìm của ngon vật lạ, nào cá quý dưới biển, nào vàng bạc trên núi.'],
      ['Lang Liêu lo lắng', 'lua langlieu@150:sad sheaf@240,184', 'Lang Liêu là con thứ mười tám. Chàng sống giản dị, chỉ biết trồng lúa nên lo lắm: “Mình chẳng có gì quý để dâng vua cha.”'],
      ['Giấc mơ kỳ lạ', 'trang langlieu@100:sit:sleepy but@226 moon@282,40', 'Một đêm, Lang Liêu mơ thấy một vị thần nói: “Trong trời đất, không gì quý bằng hạt gạo. Con hãy lấy gạo làm bánh.”'],
      ['Bánh vuông', 'room langlieu@96:happy banhchung@200,182,1.3 sheaf@270,184,0.8', 'Lang Liêu chọn [[gạo nếp]] thật ngon, gói với đậu xanh, thịt lợn trong [[lá dong]]. Bánh vuông [[tượng trưng]] cho Đất. Chàng gọi là bánh chưng.'],
      ['Bánh tròn', 'room langlieu@96:happy banhgiay@200,182,1.4', 'Chàng đồ xôi, giã nhuyễn, nặn thành bánh tròn, trắng mịn. Bánh tròn tượng trưng cho Trời. Chàng gọi là bánh giầy.'],
      ['Vua nếm bánh', 'cung vuagia@210:happy tray@110,182,1 banhchung@90,178,0.8 banhgiay@130,178,0.8 langlieu@40', 'Đến ngày lễ, vua nếm bánh của Lang Liêu, thấy ngon lại có ý nghĩa sâu xa: bánh làm từ hạt gạo, thứ nuôi sống mọi người.'],
      ['Tết có bánh chưng', 'tet langlieu@80:happy:crown tray@196,176,1.2 banhchung@176,172 banhgiay@222,172', 'Vua [[truyền ngôi]] cho Lang Liêu. Từ đó, mỗi dịp Tết, người Việt gói bánh chưng, bánh giầy để nhớ ơn [[tổ tiên]].', 'Tết này các bạn thử phụ bố mẹ xếp lá dong gói bánh nhé!']
    ],
    words: {
      'nối ngôi': ['lên làm vua thay cho vua cũ', 'to succeed to the throne'],
      'lễ vật': ['đồ dâng lên để tỏ lòng kính trọng', 'an offering'],
      'gạo nếp': ['loại gạo dẻo, dùng làm xôi và bánh', 'sticky rice'],
      'lá dong': ['loại lá to, xanh, dùng để gói bánh chưng', 'dong leaves used to wrap bánh chưng'],
      'tượng trưng': ['dùng một vật để nói về một điều khác', 'to symbolize'],
      'truyền ngôi': ['vua trao lại ngôi vua cho người khác', 'to pass the throne on'],
      'tổ tiên': ['ông bà, cụ kỵ đời trước của gia đình', 'ancestors']
    },
    msg: 'Những thứ giản dị do bàn tay mình làm ra, như hạt gạo, lại là quý nhất. Hãy luôn nhớ ơn ông bà, tổ tiên.',
    msgEn: 'Simple things we make with our own hands, like rice, are the most precious. Remember our ancestors.',
    saying: ['Uống nước nhớ nguồn.', 'Khi được hưởng điều tốt, hãy nhớ đến người đã làm ra nó.'],
    quiz: [
      ['Bánh chưng hình vuông tượng trưng cho gì?', ['Đất', 'Trời', 'Mặt Trăng'], 0, 'Bánh vuông là Đất, bánh tròn là Trời.'],
      ['Vì sao vua chọn Lang Liêu?', ['Vì lễ vật giản dị mà ý nghĩa', 'Vì chàng mang nhiều vàng nhất', 'Vì chàng là con cả'], 0, 'Bánh làm từ hạt gạo nuôi sống mọi người.'],
      ['Tết này nhà em gói bánh chưng. Em có thể làm gì?', ['Rửa lá, phụ bố mẹ gói bánh', 'Chỉ chờ đến lúc ăn', 'Chơi điện thoại một mình'], 0, 'Cùng làm bánh với gia đình là cách giữ phong tục đẹp.']
    ],
    think: ['Vì sao hạt gạo lại quý?', 'Nhà các bạn đón Tết như thế nào? Các bạn thích món ăn Tết nào nhất?']
  });

  T({
    id: 5, title: 'Thánh Gióng', genre: 'Truyền thuyết',
    cover: 'nui ironhorse@150,176,1.25:fire giong2@154,128,0.62:sit:hold=bamboo bamboo@40,182,0.8',
    hook: 'Có một cậu bé lên ba tuổi vẫn chưa biết nói, vậy mà sau này trở thành người anh hùng cưỡi ngựa sắt đánh giặc. Các bạn cùng mình nghe chuyện Thánh Gióng nhé!',
    en: 'A boy who never spoke grows into a giant hero, rides an iron horse, and saves the country. Everyone in the village helped feed him.',
    cast: { giong: 'p:hair=boy,shirt=red,s=0.8', giong2: 'p:hair=top,helmet,armor,shirt=red,pants=ink', sugia: 'p:hair=top,khan,shirt=blue,robe,belt=gold' },
    chars: [
      ['Gióng', 'giong', 'Cậu bé làng Gióng, lớn lên thành tráng sĩ đánh giặc.', 'yêu nước, dũng cảm'],
      ['Mẹ Gióng', 'ba', 'Bà mẹ nghèo, thương con hết lòng.', 'thương con'],
      ['Sứ giả', 'sugia', 'Người được vua sai đi tìm người tài đánh giặc.', 'chăm việc'],
      ['Ngựa sắt', 'ironhorse', 'Con ngựa bằng sắt, biết phun lửa.', 'dũng mãnh']
    ],
    pages: [
      ['Cậu bé lạ lùng', 'lang ba@110 giong@200:sit', 'Ngày xưa, ở làng Gióng có một bà mẹ sinh được cậu con trai. Lạ thay, cậu lên ba tuổi vẫn không biết nói, không biết cười.'],
      ['Giặc đến', 'lang sugia@150:point scroll@226,182 house@60,170,0.7', 'Bấy giờ có giặc Ân đến [[xâm lược]]. Nhà vua sai [[sứ giả]] đi khắp nơi tìm người tài giỏi giúp nước.'],
      ['Cậu bé cất tiếng nói', 'room giong@100:sit:open ba@180:wow sugia@262 say@40,30=Mẹ_ơi,_mời_sứ_giả_vào!', 'Nghe tiếng sứ giả, cậu bé bỗng cất tiếng nói: “Mẹ ơi, mời sứ giả vào đây! Xin vua cho con ngựa sắt, roi sắt và [[áo giáp]] sắt, con sẽ đánh tan giặc.”'],
      ['Lớn nhanh như thổi', 'lang giong@160,186,1.45:happy nd@64:hold=bowl ndn@256:hold=bowl pot@110,186,0.7', 'Từ đó Gióng [[lớn nhanh như thổi]]. Cơm ăn mấy cũng không no. Bà con hàng xóm vui lòng góp gạo, góp cơm nuôi Gióng.'],
      ['Tráng sĩ ra trận', 'lang ironhorse@150,176,1.25 giong2@154,128,0.62:sit:hold=sword', 'Ngựa sắt được mang đến. Gióng vươn vai thành [[tráng sĩ]] cao lớn, mặc áo giáp, cầm roi, nhảy lên ngựa ra trận.'],
      ['Nhổ tre đánh giặc', 'nui bamboo@44,182,0.9 ironhorse@170,176,1.25:fire giong2@174,128,0.62:sit:hold=bamboo', 'Ngựa phun lửa, Gióng đánh giặc tơi bời. Roi sắt gãy, Gióng nhổ những bụi tre bên đường quật vào giặc. Giặc tan tác bỏ chạy.'],
      ['Bay về trời', 'nui cloud@70,40 cloud@250,30 ironhorse@180,96,0.9 giong2@183,62,0.45:sit', 'Thắng giặc, Gióng cởi áo giáp để lại, rồi cùng ngựa sắt bay lên đỉnh núi Sóc và bay thẳng về trời.'],
      ['Nhân dân nhớ ơn', 'sancung nd@60:pray ndn@262:pray', 'Nhân dân [[nhớ ơn]], gọi Gióng là Thánh Gióng và lập [[đền thờ]]. Hằng năm, làng Gióng mở hội để tưởng nhớ người anh hùng.', 'Hội Gióng bây giờ vẫn được mở mỗi mùa xuân đấy các bạn ạ!']
    ],
    words: {
      'xâm lược': ['mang quân đến đánh chiếm đất nước khác', 'to invade'],
      'sứ giả': ['người được vua sai đi làm một việc quan trọng', 'royal messenger'],
      'áo giáp': ['áo bằng kim loại che chở người lính khi đánh trận', 'armour'],
      'lớn nhanh như thổi': ['lớn lên rất nhanh', 'to grow up incredibly fast'],
      'tráng sĩ': ['người đàn ông khỏe mạnh, dũng cảm', 'a brave warrior'],
      'nhớ ơn': ['luôn nhớ đến người đã giúp mình', 'to be grateful'],
      'đền thờ': ['nơi thờ cúng người có công', 'temple, shrine']
    },
    msg: 'Khi quê hương cần, mọi người cùng góp sức thì sẽ làm nên việc lớn. Ai cũng có thể góp một phần, dù nhỏ.',
    msgEn: 'When everyone helps, great things happen. Even a small contribution matters.',
    saying: ['Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.', 'Đoàn kết thì làm được việc lớn.'],
    quiz: [
      ['Câu nói đầu tiên của Gióng là gì?', ['Mời sứ giả vào đây', 'Con đói quá', 'Con muốn đi chơi'], 0, 'Gióng muốn xin đi đánh giặc giúp nước.'],
      ['Khi roi sắt gãy, Gióng làm gì?', ['Nhổ bụi tre bên đường đánh giặc', 'Bỏ chạy về nhà', 'Ngồi khóc'], 0, 'Gióng không bỏ cuộc, dùng tre làm vũ khí.'],
      ['Lớp em cần dọn sạch sân trường. Em làm gì?', ['Cùng các bạn góp sức dọn', 'Để bạn khác làm', 'Đứng xem'], 0, 'Giống như dân làng góp gạo nuôi Gióng, mỗi người góp một tay.']
    ],
    think: ['Vì sao bà con trong làng ai cũng góp gạo nuôi Gióng?', 'Các bạn muốn làm gì để giúp gia đình, lớp học hay cộng đồng của mình?']
  });

  T({
    id: 6, title: 'Trí khôn của ta đây', genre: 'Cổ tích',
    cover: 'lua tree@250,182,0.9 tiger@240,182,0.95:plain:rope nd@80:point buffalo@160,184,0.8',
    hook: 'Ơ, truyện này có bạn trâu đấy! Vì sao hổ có vằn đen, còn trâu chúng mình không có răng hàm trên? Các bạn nghe mình kể nhé, buồn cười lắm!',
    en: 'A tiger wants to see a farmer\'s "cleverness". The farmer tricks him — and that\'s how the tiger got stripes and the buffalo lost its upper teeth.',
    chars: [
      ['Con hổ', 'tiger:plain', 'Con vật to khỏe nhưng chưa hiểu trí khôn là gì.', 'tò mò, cậy khỏe'],
      ['Bác nông dân', 'nd', 'Người cày ruộng, nhỏ bé nhưng rất thông minh.', 'nhanh trí'],
      ['Con trâu', 'buffalo', 'Bạn của bác nông dân, hay cười.', 'thật thà']
    ],
    pages: [
      ['Hổ thấy lạ', 'lua nd@80 buffalo@170,182,1 plow@240,184,0.7 tiger@290,182,0.7:plain:f', 'Một bác nông dân đang [[cày ruộng]] với con trâu. Một con hổ đi qua, thấy lạ: trâu to khỏe thế mà lại để con người nhỏ bé sai bảo.'],
      ['Hổ hỏi trâu', 'lua buffalo@110,182,1.1 tiger@230,182,1:plain:f', 'Hổ hỏi: “Này trâu, anh to lớn thế, sao lại chịu để người sai khiến?” Trâu đáp: “Người tuy nhỏ nhưng có [[trí khôn]].”'],
      ['Cho ta xem trí khôn', 'lua nd@100:wow tiger@220,182,1:plain:f say@120,30=Trí_khôn_là_gì?', 'Hổ [[tò mò]] lắm, đến gặp bác nông dân: “Trí khôn là gì? Cho ta xem với!” Bác nông dân nghĩ một lát rồi bảo: “Trí khôn tôi để ở nhà.”'],
      ['Trói hổ vào cây', 'lua tree@220,182,1 tiger@214,182,1:plain:rope nd@90:sly', 'Bác nói thêm: “Tôi về lấy, nhưng sợ anh ăn mất trâu. Để tôi [[trói]] anh vào cây đã.” Hổ muốn xem trí khôn quá nên đồng ý ngay.'],
      ['Trí khôn của ta đây!', 'lua tree@220,182,1 tiger@214,182,1:plain:rope:angry fire@182,186 fire@252,186 nd@80:point say@36,26=Trí_khôn_của_ta_đây!', 'Bác nông dân ôm rơm chất quanh gốc cây rồi châm lửa: “Trí khôn của ta đây!”'],
      ['Hổ có vằn', 'rung tiger@170,182,1.15:angry', 'Lửa cháy, hổ [[vùng vẫy]] mãi mới đứt dây, chạy thục mạng vào rừng. Bộ lông vàng óng bị lửa cháy sém thành những [[vằn]] đen.'],
      ['Trâu cười', 'lua buffalo@150,182,1.2 rock@238,186 say@170,30=Ha_ha_ha!', 'Trâu thấy thế [[cười ngặt nghẽo]], cười mãi, cười đến nỗi đập hàm vào tảng đá, gãy mất hàm răng trên.'],
      ['Từ đó đến nay', 'lang sun@272,36 tiger@80,182,0.8:f buffalo@220,182,1.1:eat', 'Vì thế mà đến bây giờ, hổ có bộ lông vằn đen, còn trâu thì không có răng ở hàm trên.', 'Thật đấy các bạn ạ! Trâu chúng mình không có răng cửa hàm trên, mình nhai cỏ bằng răng hàm phía trong.']
    ],
    words: {
      'cày ruộng': ['lật đất trên ruộng để chuẩn bị trồng lúa', 'to plough the field'],
      'trí khôn': ['sự thông minh, biết suy nghĩ để tìm cách làm', 'cleverness, wit'],
      'tò mò': ['rất muốn biết điều mình chưa biết', 'curious'],
      'trói': ['dùng dây buộc chặt lại', 'to tie up'],
      'vùng vẫy': ['cựa quậy thật mạnh để thoát ra', 'to struggle to get free'],
      'vằn': ['những đường sọc trên lông con vật', 'stripes'],
      'cười ngặt nghẽo': ['cười rất to, cười mãi không dừng', 'to laugh one\'s head off']
    },
    msg: 'Trí khôn giúp con người làm được việc lớn hơn sức mình. Và đừng cười chê khi người khác gặp chuyện không may.',
    msgEn: 'Cleverness can beat strength. And don\'t laugh when someone else is in trouble.',
    saying: ['Cười người hôm trước, hôm sau người cười.', 'Đừng chế giễu người khác, có khi mình cũng gặp chuyện như thế.'],
    quiz: [
      ['Hổ muốn xem cái gì?', ['Trí khôn của con người', 'Cái cày', 'Bó rơm'], 0, 'Hổ tò mò muốn biết trí khôn là gì.'],
      ['Vì sao trâu bị gãy răng?', ['Cười quá trớn, đập hàm vào đá', 'Ăn cỏ cứng quá', 'Bị hổ cắn'], 0, 'Trâu cười hổ mãi nên mới bị gãy răng.'],
      ['Bạn em bị ngã trong giờ ra chơi. Em sẽ làm gì?', ['Đỡ bạn dậy, hỏi bạn có đau không', 'Cười thật to', 'Chạy đi chỗ khác'], 0, 'Giúp bạn khi bạn gặp chuyện không may mới là bạn tốt.']
    ],
    think: ['Theo các bạn, “trí khôn” là gì? Các bạn đã từng nghĩ ra cách hay để giải quyết việc gì chưa?', 'Con trâu có nên cười hổ không? Vì sao?']
  });

  T({
    id: 7, title: 'Sự tích dưa hấu', genre: 'Cổ tích',
    cover: 'dao palm@50,182,0.9 antiem@130:happy watermelon@200,180 watermelon@250,184,0.8:slice',
    hook: 'Quả dưa hấu vỏ xanh, ruột đỏ, ăn ngọt mát. Các bạn có biết ai là người đầu tiên trồng dưa hấu không? Mình kể chuyện Mai An Tiêm nhé!',
    en: 'Mai An Tiêm is sent to a deserted island. He never gives up, plants seeds the birds drop, and grows the first watermelons.',
    cast: { antiem: 'p:hair=top,shirt=leaf,pants=ink', vo: 'p:hair=bun,shirt=peach,robe,belt=wood' },
    chars: [
      ['Mai An Tiêm', 'antiem', 'Con nuôi của vua Hùng, thông minh và chăm chỉ.', 'không nản lòng'],
      ['Vợ An Tiêm', 'vo', 'Luôn ở bên chồng, cùng chồng vượt khó.', 'chịu thương chịu khó'],
      ['Vua Hùng', 'vua', 'Nhà vua nóng giận nhưng biết nhận ra điều đúng.', 'biết sửa sai'],
      ['Đàn chim', 'bird', 'Mang hạt giống lạ đến hòn đảo.', 'vô tình giúp đỡ']
    ],
    pages: [
      ['Người con nuôi tài giỏi', 'cung vua@110 antiem@210', 'Ngày xưa, Mai An Tiêm là [[con nuôi]] của vua Hùng. Chàng thông minh, chăm chỉ nên được vua rất yêu quý.'],
      ['Bị đày ra đảo', 'cung vua@100:angry antiem@200:sad vo@262:sad', 'Một lần, An Tiêm nói: “Của cải con có là do con tự làm ra.” Vua cho là chàng [[kiêu ngạo]], liền [[đày]] cả nhà chàng ra một hòn [[đảo hoang]].'],
      ['Không nản lòng', 'dao palm@60,182,0.9 antiem@140:hold=axe house@236,176,0.8:poor', 'Trên đảo chỉ có cát, đá và cây dại. An Tiêm không [[nản lòng]]. Chàng dựng nhà, bắt cá, tìm rau để sống qua ngày.'],
      ['Đàn chim lạ', 'dao bird@120,80 bird@170,60,1:c=leaf bird@210,84,0.9:c=yellow seeds@160,178 antiem@262:wow', 'Một hôm, đàn chim bay đến, ăn một loại quả lạ rồi nhả những hạt đen nhánh xuống bãi cát.'],
      ['Gieo hạt', 'dao antiem@100:hold=gourd seeds@170,182 grass@200,184 grass@240,182 vo@280', 'An Tiêm nghĩ: “Chim ăn được thì người cũng ăn được.” Chàng nhặt hạt đem [[gieo trồng]], ngày ngày chăm tưới.'],
      ['Quả dưa hấu', 'dao watermelon@100,182 watermelon@170,184:slice antiem@250:happy', 'Dây leo xanh tốt, ra những quả to tròn, vỏ xanh, ruột đỏ, hạt đen. Ăn vào ngọt mát. Chàng đặt tên là dưa hấu.'],
      ['Gửi dưa về đất liền', 'bien watermelon@160,150,0.8 watermelon@220,140,0.6 antiem@60,190:happy', 'An Tiêm khắc tên mình lên vỏ dưa rồi thả xuống biển, mong sóng đưa dưa về [[đất liền]].'],
      ['Được đón về', 'cung vua@100:happy antiem@190:happy vo@250 watermelon@150,186,0.7', 'Vua nhận được quả dưa, hiểu ra An Tiêm nói đúng, liền cho đón cả nhà về. Từ đó, dưa hấu được trồng khắp nơi.']
    ],
    words: {
      'con nuôi': ['con của người khác được mình nhận về nuôi như con', 'adopted child'],
      'kiêu ngạo': ['tự cho mình hơn người, coi thường người khác', 'arrogant'],
      'đày': ['bắt phải đi đến sống ở nơi xa, khổ cực', 'to exile, banish'],
      'đảo hoang': ['hòn đảo không có người ở', 'deserted island'],
      'nản lòng': ['mất hết ý muốn cố gắng vì thấy khó', 'to lose heart'],
      'gieo trồng': ['gieo hạt và trồng cây', 'to sow and grow'],
      'đất liền': ['vùng đất rộng, không phải đảo', 'mainland']
    },
    msg: 'Dù gặp khó khăn, nếu kiên trì và chăm chỉ lao động, mình sẽ tạo ra được những điều tốt đẹp.',
    msgEn: 'Even in hard times, patience and hard work create good things.',
    saying: ['Có công mài sắt, có ngày nên kim.', 'Kiên trì làm việc thì việc khó cũng thành.'],
    quiz: [
      ['Ai đã mang hạt dưa đến hòn đảo?', ['Đàn chim', 'Vua Hùng', 'Một chiếc thuyền buôn'], 0, 'Chim ăn quả lạ rồi nhả hạt xuống cát.'],
      ['An Tiêm gửi dưa về đất liền bằng cách nào?', ['Thả dưa xuống biển', 'Nhờ chim mang đi', 'Bơi về'], 0, 'Chàng khắc tên lên vỏ dưa rồi thả xuống biển.'],
      ['Em gieo hạt vào chậu, mấy ngày rồi chưa thấy nảy mầm. Em sẽ làm gì?', ['Tiếp tục tưới và kiên nhẫn chờ', 'Vứt chậu đi', 'Đào hạt lên xem'], 0, 'Cây cần thời gian, giống như An Tiêm kiên nhẫn chăm dưa.']
    ],
    think: ['Nếu phải sống trên một hòn đảo hoang, các bạn sẽ làm gì đầu tiên?', 'Các bạn đã từng cố gắng làm một việc khó đến khi thành công chưa? Kể lại nhé.']
  });

  T({
    id: 8, title: 'Sơn Tinh, Thủy Tinh', genre: 'Truyền thuyết',
    cover: 'nui sontinh@100,150:up waves@160,198 thuytinh@240,190:angry',
    hook: 'Vì sao năm nào cũng có mùa mưa lũ? Người xưa kể rằng đó là do thần nước vẫn còn giận thần núi đấy! Các bạn nghe mình kể nhé.',
    en: 'Two gods — Mountain and Water — want to marry the king\'s daughter. The Water god loses and attacks with floods every year.',
    cast: { minuong: 'p:hair=long,tiara,shirt=pink,robe,belt=gold', sontinh: 'p:hair=top,shirt=leaf,robe,belt=gold,glow', thuytinh: 'p:hair=long,hairC=blue,shirt=blue,robe,belt=white' },
    chars: [
      ['Vua Hùng', 'vua', 'Nhà vua muốn kén cho con gái một người chồng tài giỏi.', 'thương con'],
      ['Mị Nương', 'minuong', 'Công chúa xinh đẹp, hiền dịu.', 'hiền dịu'],
      ['Sơn Tinh', 'sontinh', 'Thần núi, có tài dời non, nâng đồi.', 'kiên cường'],
      ['Thủy Tinh', 'thuytinh', 'Thần nước, có tài gọi mưa, hô gió.', 'nóng giận']
    ],
    pages: [
      ['Kén rể', 'cung vua@100 minuong@210', 'Vua Hùng có người con gái xinh đẹp tên là Mị Nương. Vua muốn [[kén]] cho nàng một người chồng thật tài giỏi.'],
      ['Hai chàng trai', 'sancung sontinh@50 thuytinh@270', 'Có hai chàng trai đến [[cầu hôn]]. Một là Sơn Tinh, thần núi. Một là Thủy Tinh, thần nước. Cả hai đều tài giỏi như nhau.'],
      ['Điều kiện của vua', 'cung vua@160:point elephant@60,186,0.7 rooster@250,186,1.1 horse@300,186,0.6:f', 'Vua nói: “Sáng mai, ai mang [[sính lễ]] đến trước sẽ được cưới Mị Nương. Sính lễ gồm voi chín ngà, gà chín cựa, ngựa chín hồng mao.”'],
      ['Sơn Tinh đến trước', 'nui sontinh@120:happy minuong@190:happy elephant@272,184,0.6:f', 'Sáng sớm, Sơn Tinh mang đủ sính lễ đến trước. Chàng [[rước]] Mị Nương về núi.'],
      ['Thủy Tinh nổi giận', 'bao thuytinh@160,160:angry:up', 'Thủy Tinh đến sau, [[nổi giận]] đùng đùng. Chàng hô mưa, gọi gió, [[dâng nước]] lên đánh Sơn Tinh. Ruộng đồng, nhà cửa ngập chìm trong nước.'],
      ['Nước dâng, núi nâng', 'nui waves@160,194 sontinh@160,100:up', 'Nước dâng cao bao nhiêu, Sơn Tinh lại nâng đồi núi lên cao bấy nhiêu. Hai bên đánh nhau suốt mấy tháng trời.'],
      ['Thủy Tinh rút lui', 'nui sun@270,40 sontinh@100,186:happy minuong@170,186 waves@260,200,0.6', 'Cuối cùng, Thủy Tinh mệt mỏi, đành rút nước về. Sơn Tinh vẫn vững vàng trên núi.'],
      ['Mùa mưa lũ', 'bao house@100,170,0.9 nd@220:hold=bamboo', 'Nhưng Thủy Tinh vẫn chưa nguôi giận. Năm nào cũng vậy, Thủy Tinh lại dâng nước đánh Sơn Tinh. Vì thế, hằng năm có [[mùa mưa lũ]].', 'Người Việt ngày xưa đắp đê để giữ nước, giỏi như Sơn Tinh vậy!']
    ],
    words: {
      'kén': ['chọn lựa rất cẩn thận', 'to choose carefully'],
      'cầu hôn': ['xin được cưới một người làm vợ hay chồng', 'to propose marriage'],
      'sính lễ': ['quà nhà trai mang đến khi cưới vợ', 'wedding gifts from the groom'],
      'rước': ['đón về một cách trang trọng', 'to escort home with ceremony'],
      'nổi giận': ['bỗng rất tức giận', 'to get angry'],
      'dâng nước': ['làm cho nước lên cao', 'to raise the water'],
      'mùa mưa lũ': ['thời gian mưa nhiều, nước sông lên cao', 'flood season']
    },
    msg: 'Người xưa dùng câu chuyện để giải thích mùa mưa lũ. Truyện khen ngợi sự kiên cường trước thiên tai, và nhắc chúng mình: thua thì đừng nổi giận làm hại người khác.',
    msgEn: 'The story explains the flood season and praises courage against nature. When you lose, don\'t take your anger out on others.',
    saying: ['Lửa thử vàng, gian nan thử sức.', 'Khó khăn giúp ta biết mình mạnh đến đâu.'],
    quiz: [
      ['Sính lễ vua Hùng yêu cầu gồm những gì?', ['Voi chín ngà, gà chín cựa, ngựa chín hồng mao', 'Vàng, bạc, ngọc', 'Lúa, gạo, cá'], 0, 'Đó là những sính lễ rất khó tìm.'],
      ['Truyện giải thích hiện tượng tự nhiên nào?', ['Mùa mưa lũ hằng năm', 'Cầu vồng sau mưa', 'Động đất'], 0, 'Thủy Tinh năm nào cũng dâng nước đánh Sơn Tinh.'],
      ['Em chơi trò chơi và bị thua bạn. Em nên làm gì?', ['Chúc mừng bạn và tập luyện thêm', 'Giận dỗi, phá đồ chơi', 'Không chơi với bạn nữa'], 0, 'Biết chấp nhận thua là người dũng cảm.']
    ],
    think: ['Các bạn thích Sơn Tinh hay Thủy Tinh hơn? Vì sao?', 'Ở nơi các bạn đang sống, thời tiết các mùa có gì đặc biệt?']
  });

  T({
    id: 9, title: 'Tấm Cám', genre: 'Cổ tích',
    cover: 'lang tam@110:happy:hold=broom bird@180,90,1:c=yellow tree@250,182,0.9:fruit',
    hook: 'Đây là một trong những truyện cổ tích nổi tiếng nhất Việt Nam. Cô Tấm hiền lành đã gặp rất nhiều chuyện, các bạn cùng mình theo dõi nhé!',
    en: 'Kind Tấm is treated badly by her stepmother and stepsister Cám. With help from Bụt, she meets the king and her kindness wins in the end.',
    cast: { tam: 'p:hair=long,shirt=wood,pants=ink', tam2: 'p:hair=long,shirt=pink,robe,belt=gold', cam: 'p:hair=bun,shirt=pink,pants=ink', dighe: 'p:hair=bun,shirt=plum,robe,belt=plumD', vua: 'p:hair=top,crown,shirt=yellow,robe,belt=red' },
    chars: [
      ['Tấm', 'tam', 'Cô gái mồ côi, hiền lành, chăm chỉ.', 'hiền lành'],
      ['Cám', 'cam', 'Em cùng cha khác mẹ của Tấm, lười biếng và hay ghen tị.', 'lười, ghen tị'],
      ['Dì ghẻ', 'dighe', 'Mẹ của Cám, đối xử tệ với Tấm.', 'độc ác'],
      ['Ông Bụt', 'but', 'Luôn hiện lên giúp Tấm mỗi khi Tấm khóc.', 'tốt bụng'],
      ['Nhà vua', 'vua', 'Nhận ra Tấm nhờ chiếc giày và miếng trầu.', 'tốt bụng']
    ],
    pages: [
      ['Cô Tấm mồ côi', 'lang tam@90:hold=broom dighe@190:angry cam@262:sly', 'Ngày xưa có cô Tấm [[mồ côi]] mẹ, sống với [[dì ghẻ]] và em Cám. Tấm làm lụng vất vả suốt ngày, còn Cám được [[nuông chiều]], chẳng phải làm gì.'],
      ['Giỏ tép bị lấy mất', 'water tam@90:sad basket@140,184 cam@226:sly basket@270,184:fish', 'Dì sai hai chị em đi bắt tép. Tấm chăm chỉ bắt đầy giỏ. Cám mải chơi, lừa chị đi gội đầu rồi trút hết tép của chị vào giỏ mình, chạy về trước.'],
      ['Ông Bụt hiện lên', 'water tam@100:sit:cry but@236 fish@160,186,0.6:c=grey', 'Tấm ngồi khóc. Ông Bụt hiện lên, bảo trong giỏ còn một con cá bống, mang về nuôi. Tấm nuôi cá bống, ngày nào cũng chia cơm cho cá.'],
      ['Cá bống bị bắt mất', 'lang tam@110:cry but@236 fish@172,150,0.55:c=grey', 'Dì ghẻ biết chuyện, bắt mất cá bống. Tấm buồn lắm. Bụt dặn Tấm nhặt xương cá cho vào lọ, chôn dưới chân giường.'],
      ['Chim sẻ nhặt thóc', 'lang tam@100:sit bird@170,170,0.8:c=wood bird@210,176,0.8:c=wood bird@250,168,0.8:c=wood grain@200,186,0.7:small', 'Nhà vua mở [[hội]]. Dì trộn thóc với gạo, bắt Tấm nhặt xong mới được đi. Bụt sai đàn chim sẻ xuống nhặt giúp, chỉ một lát là xong.'],
      ['Đi xem hội', 'duong horse@170,182,1.1 tam2@174,140,0.55:sit sparkle@120,60 sparkle@250,70', 'Đào lọ dưới giường lên, Tấm thấy quần áo đẹp, giày thêu và cả một con ngựa. Tấm đi hội, chẳng may đánh rơi một chiếc giày.'],
      ['Chiếc giày vừa chân', 'sancung vua@110 tam2@210:happy heart@160,70', 'Nhà vua nhặt được chiếc giày, cho các cô gái thử. Chỉ chân Tấm vừa. Vua đón Tấm vào cung, Tấm trở thành [[hoàng hậu]].'],
      ['Hóa thành chim, thành quả', 'lang bird@110,80,1.2:c=yellow tree@220,182,1:fruit cam@60:sly', 'Mẹ con Cám [[ghen tị]], tìm cách hại Tấm. Nhưng Tấm [[hóa thành]] chim vàng anh, rồi lại hóa thành quả thị thơm lừng.'],
      ['Cô Tấm trong quả thị', 'room ba@90:happy tam@200:hold=broom tree@290,190,0.6:fruit', 'Một bà cụ bán nước mang quả thị về nhà. Mỗi khi bà đi vắng, cô Tấm bước ra từ quả thị, quét dọn nhà cửa, nấu cơm giúp bà.'],
      ['Ở hiền gặp lành', 'room vua@90 tam2@180:happy ba@262:happy', 'Nhà vua ghé quán nước, nhận ra miếng trầu têm cánh phượng do Tấm làm, liền đón Tấm về cung. Mẹ con Cám [[xấu hổ]], bỏ đi nơi khác.']
    ],
    words: {
      'mồ côi': ['không còn cha hoặc mẹ', 'orphaned'],
      'dì ghẻ': ['vợ sau của bố, không phải mẹ đẻ', 'stepmother'],
      'nuông chiều': ['chiều theo mọi ý muốn của con', 'to spoil (a child)'],
      'hội': ['ngày vui có nhiều người đến chơi, xem, ăn mừng', 'festival'],
      'hoàng hậu': ['vợ của nhà vua', 'queen'],
      'ghen tị': ['khó chịu khi thấy người khác hơn mình', 'jealous'],
      'hóa thành': ['biến thành một thứ khác', 'to turn into'],
      'xấu hổ': ['thấy ngượng vì mình đã làm sai', 'ashamed']
    },
    msg: 'Ở hiền thì gặp lành. Người hiền lành, chăm chỉ sẽ được giúp đỡ, và điều tốt luôn thắng điều xấu.',
    msgEn: 'Kindness is rewarded. Good, hard-working people get help, and good wins over bad.',
    saying: ['Ở hiền gặp lành.', 'Sống tốt bụng thì sẽ gặp điều tốt.'],
    quiz: [
      ['Ai giúp Tấm nhặt thóc ra khỏi gạo?', ['Đàn chim sẻ', 'Em Cám', 'Nhà vua'], 0, 'Bụt sai đàn chim sẻ xuống giúp Tấm.'],
      ['Lần đầu tiên, nhà vua tìm ra Tấm nhờ vật gì?', ['Chiếc giày vừa chân Tấm', 'Chiếc nón lá', 'Con cá bống'], 0, 'Chỉ chân Tấm vừa chiếc giày thêu.'],
      ['Em gái lấy tranh em vẽ rồi nhận là của mình. Em nên làm gì?', ['Bình tĩnh nói chuyện với em và bố mẹ', 'Xé tranh của em', 'Giấu đồ của em'], 0, 'Nói chuyện bình tĩnh giúp mọi người hiểu nhau.']
    ],
    think: ['Các bạn thích nhân vật nào nhất? Vì sao?', 'Nếu là Cám, các bạn sẽ đối xử với chị Tấm như thế nào?']
  });

  T({
    id: 10, title: 'Sọ Dừa', genre: 'Cổ tích',
    cover: 'meadow tree@250,182,1 coconut@120,182,1.3 cow@200,184,0.8',
    hook: 'Có một cậu bé sinh ra tròn như quả dừa, không có chân tay. Vậy mà cậu lại chăn bò giỏi nhất vùng! Các bạn nghe mình kể chuyện Sọ Dừa nhé.',
    en: 'A boy born looking like a coconut turns out to be a talented young man. Only the kind youngest daughter sees his true worth.',
    cast: { cout: 'p:hair=long,shirt=pink,robe,belt=gold', chi: 'p:hair=bun,shirt=red,robe,belt=gold', chang: 'p:hair=top,shirt=blue,robe,belt=gold', changrua: 'p:hair=top,khan=red,shirt=red,robe,belt=gold' },
    chars: [
      ['Sọ Dừa', 'coconut', 'Cậu bé tròn như quả dừa, thật ra là chàng trai tài giỏi.', 'tài giỏi'],
      ['Bà mẹ', 'ba', 'Người mẹ nghèo, thương con hết lòng.', 'thương con'],
      ['Cô út', 'cout', 'Con gái út nhà phú ông, đối xử tử tế với Sọ Dừa.', 'tốt bụng'],
      ['Hai cô chị', 'chi', 'Coi thường Sọ Dừa, sau lại ghen tị với em.', 'ghen tị']
    ],
    pages: [
      ['Cậu bé lạ', 'lang ba@100:wow coconut@200,182,1.1', 'Ngày xưa có bà mẹ nghèo sinh ra một đứa con không có chân tay, tròn như quả dừa. Bà thương con, đặt tên là Sọ Dừa.'],
      ['Chăn bò giỏi', 'meadow coconut@60 cow@150,184,1 cow@252,184,0.9 sun@280,36', 'Sọ Dừa xin mẹ cho đi [[chăn bò]] cho nhà phú ông. Cậu chăn bò rất giỏi, con nào con nấy béo tròn.'],
      ['Ba cô con gái', 'meadow coconut@70 cout@160:happy:hold=bowl chi@262:sly', 'Ba cô con gái phú ông thay nhau mang cơm cho Sọ Dừa. Hai cô chị [[hắt hủi]] cậu. Chỉ cô út hiền lành, đối xử [[tử tế]].'],
      ['Chàng trai thổi sáo', 'meadow tree@200,182,1.1 chang@200:sit notes@250,90 notes@280,70,0.7 cout@70:wow', 'Một hôm, cô út thấy một chàng trai [[khôi ngô]] ngồi thổi sáo dưới gốc cây. Cô lại gần thì chỉ thấy Sọ Dừa nằm lăn lóc.'],
      ['Hỏi cưới', 'lang phu@100:wow gold@180,186 bag@232,184:gold coconut@282,182', 'Sọ Dừa xin mẹ đi hỏi cưới con gái phú ông. Phú ông [[thách cưới]] thật nhiều vàng bạc. Lạ thay, Sọ Dừa sắm đủ cả. Cô út vui vẻ nhận lời.'],
      ['Ngày cưới', 'lang chang@130:happy cout@200:happy heart@166,60 chi@282:wow', 'Ngày cưới, Sọ Dừa hiện nguyên hình là một chàng trai khôi ngô. Hai cô chị vừa ngạc nhiên vừa ghen tị.'],
      ['Đỗ trạng nguyên', 'lang changrua@150:hold=book cout@240 eggs@80,184,0.6', 'Sọ Dừa học giỏi, đỗ [[trạng nguyên]], được vua cử đi sứ. Trước khi đi, chàng đưa vợ một con dao, hòn đá lửa và hai quả trứng gà để phòng thân.'],
      ['Gặp nạn trên biển', 'bien cout@150,180,0.9:wow fish@230,160,1.6:c=grey waves@160,200', 'Hai cô chị ghen ghét, đẩy em xuống biển. Một con cá to nuốt cô út vào bụng. Nhờ con dao, cô thoát ra và dạt vào một hòn đảo.'],
      ['Đoàn tụ', 'dao cout@90:happy rooster@160,182 boat@260,172,1:sail changrua@250,150,0.55', 'Cô dùng đá lửa nhóm bếp, nuôi gà. Một hôm thuyền quan trạng đi qua, gà gáy vang. Vợ chồng [[đoàn tụ]]. Hai cô chị xấu hổ bỏ đi.']
    ],
    words: {
      'chăn bò': ['dẫn bò đi ăn cỏ và trông nom chúng', 'to herd cows'],
      'hắt hủi': ['đối xử lạnh nhạt, coi thường', 'to treat someone coldly'],
      'tử tế': ['tốt bụng, đối xử đàng hoàng với người khác', 'kind, decent'],
      'khôi ngô': ['khuôn mặt sáng sủa, đẹp đẽ', 'handsome, bright-looking'],
      'thách cưới': ['nhà gái đòi nhiều lễ vật mới cho cưới', 'to demand a big bride price'],
      'trạng nguyên': ['người đỗ đầu trong kỳ thi lớn ngày xưa', 'top scholar of the royal exam'],
      'đoàn tụ': ['được sum họp lại sau thời gian xa cách', 'to be reunited']
    },
    msg: 'Đừng đánh giá người khác qua vẻ bề ngoài. Tấm lòng tốt và tài năng thật mới là điều quý giá.',
    msgEn: 'Don\'t judge people by how they look. A kind heart and real talent matter most.',
    saying: ['Tốt gỗ hơn tốt nước sơn.', 'Tấm lòng bên trong quý hơn vẻ đẹp bên ngoài.'],
    quiz: [
      ['Vì sao cô út được lấy Sọ Dừa?', ['Vì cô tốt bụng, tử tế với Sọ Dừa', 'Vì cô giàu nhất', 'Vì cô là chị cả'], 0, 'Cô út không coi thường Sọ Dừa.'],
      ['Những vật nào giúp cô út sống sót trên đảo?', ['Con dao, hòn đá lửa, quả trứng gà', 'Một chiếc thuyền', 'Một bao gạo'], 0, 'Sọ Dừa đã chuẩn bị cho vợ từ trước.'],
      ['Lớp em có bạn mới trông khác mọi người. Em sẽ làm gì?', ['Làm quen và rủ bạn chơi cùng', 'Trêu chọc bạn', 'Không nói chuyện với bạn'], 0, 'Hãy làm quen để biết bạn tốt thế nào.']
    ],
    think: ['Vì sao chúng mình không nên chê người khác qua vẻ bề ngoài?', 'Các bạn đã từng làm quen với một người bạn mới như thế nào?']
  });
})();
