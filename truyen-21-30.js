/* Trâu Con Kể Chuyện — nội dung Ngày 21 đến Ngày 30 (cách viết xem đầu file truyen-01-10.js) */
(function () {
  const T = (o) => (window.TRUYEN = window.TRUYEN || []).push(o);

  T({
    id: 21, title: 'Đẽo cày giữa đường', genre: 'Ngụ ngôn',
    cover: 'duong anh@110:hold=axe:wow log@210,186,1:chips ong@290,186,0.9:point',
    hook: 'Có một anh chàng ai bảo gì cũng nghe theo, kết quả thế nào nhỉ? Các bạn cùng mình nghe chuyện “Đẽo cày giữa đường” nhé!',
    en: 'A man carving ploughs by the road changes his work every time a passer-by gives advice, until all his wood is ruined.',
    cast: { anh: 'p:hair=boy,shirt=leaf,pants=ink' },
    chars: [
      ['Anh thợ đẽo cày', 'anh', 'Dốc hết vốn mua gỗ về đẽo cày để bán.', 'thiếu chủ kiến'],
      ['Những người qua đường', 'ong', 'Mỗi người góp một ý khác nhau.', 'hay góp ý']
    ],
    pages: [
      ['Mua gỗ đẽo cày', 'duong anh@100:hold=axe log@210,186,1.1', 'Ngày xưa có một anh chàng dốc hết [[vốn liếng]] mua gỗ về [[đẽo]] cày để bán. Chỗ anh ngồi làm ngay bên [[vệ đường]].'],
      ['Ông cụ góp ý', 'duong ong@230:point anh@90:hold=axe log@160,186,0.8:chips say@180,30=Đẽo_cao_to_vào!', 'Một ông cụ đi qua, [[góp ý]]: “Phải đẽo cho cao, cho to thì mới dễ cày.” Anh cho là phải, liền đẽo cao to.'],
      ['Bác nông dân góp ý', 'duong nd@230:point anh@90:hold=axe plow@160,186,0.8 say@170,30=Nhỏ_thấp_thôi!', 'Một bác nông dân đi qua lại bảo: “Đẽo thế này thì cày sao được! Phải đẽo nhỏ hơn, thấp hơn.” Anh lại nghe theo.'],
      ['Người thứ ba', 'duong phu@240:point anh@90:wow elephant@170,186,0.6 say@140,24=Đẽo_cho_voi_cày!', 'Một người khác bảo: “Ở miền núi người ta cày bằng voi. Anh đẽo thật to, thật cao mới bán được nhiều.” Anh mừng quá, đẽo cày to gấp đôi.'],
      ['Không ai mua', 'duong anh@120:sad log@200,186,0.9:chips log@260,190,0.7:chips', 'Cày đẽo ra, chẳng ai mua. Cái thì quá to, cái thì quá nhỏ. Bao nhiêu gỗ đều bị đẽo [[hỏng]] cả.'],
      ['Hối hận', 'duong anh@150:sit:cry log@240,190,0.8:chips', 'Vốn liếng mất sạch, anh ngồi buồn rầu. Anh hiểu ra: nghe [[lời khuyên]] cũng cần suy nghĩ, phải có [[chủ kiến]] của mình.', 'Nghe góp ý là tốt, nhưng mình cũng phải tự suy nghĩ nữa các bạn nhé!']
    ],
    words: {
      'vốn liếng': ['số tiền, của cải mình có để làm ăn', 'savings, capital'],
      'đẽo': ['dùng dao, rìu gọt gỗ cho thành hình', 'to carve, whittle'],
      'vệ đường': ['mép đường, bên lề đường', 'roadside'],
      'góp ý': ['nói ý kiến của mình để giúp người khác', 'to give an opinion'],
      'hỏng': ['bị hư, không dùng được nữa', 'ruined, broken'],
      'lời khuyên': ['điều người khác bảo để mình làm cho tốt', 'advice'],
      'chủ kiến': ['ý kiến riêng mà mình đã suy nghĩ kỹ', 'one\'s own judgement']
    },
    msg: 'Hãy lắng nghe góp ý của mọi người, nhưng phải suy nghĩ kỹ và có chủ kiến của mình. Đừng ai nói gì cũng làm theo.',
    msgEn: 'Listen to advice, but think for yourself. Don\'t just do whatever anyone says.',
    saying: ['Đẽo cày giữa đường.', 'Thành ngữ chỉ người không có chủ kiến, ai nói gì cũng nghe theo.'],
    quiz: [
      ['Anh chàng mua gỗ về để làm gì?', ['Đẽo cày để bán', 'Làm nhà', 'Đóng thuyền'], 0, 'Anh dốc hết vốn để đẽo cày đem bán.'],
      ['Vì sao anh mất hết vốn liếng?', ['Ai nói gì cũng làm theo, không suy nghĩ', 'Bị trộm lấy gỗ', 'Gỗ bị mục'], 0, 'Anh đổi ý theo từng người qua đường.'],
      ['Ba bạn góp ý ba kiểu khác nhau về bức tranh em vẽ. Em làm gì?', ['Nghe hết, suy nghĩ rồi tự chọn cách hợp lý', 'Sửa theo cả ba bạn', 'Xé tranh đi'], 0, 'Lắng nghe và tự quyết định là có chủ kiến.']
    ],
    think: ['Theo các bạn, anh chàng nên làm gì khi nghe nhiều lời khuyên khác nhau?', 'Kể về một lần các bạn phải tự quyết định một việc.']
  });

  T({
    id: 22, title: 'Mèo dạy hổ', genre: 'Ngụ ngôn',
    cover: 'rung tree@210,186,1.1 cat@214,108,0.8 tiger@110,186,1.1:angry',
    hook: 'Mèo và hổ trông giống nhau lắm, đúng không các bạn? Nhưng vì sao mèo trèo cây giỏi còn hổ thì không? Nghe mình kể nhé!',
    en: 'Cat teaches Tiger how to hunt. Ungrateful Tiger then tries to catch Cat — but Cat never taught him one thing: how to climb trees.',
    chars: [
      ['Mèo', 'cat', 'Nhanh nhẹn, khéo léo, bắt chuột rất giỏi.', 'khôn ngoan'],
      ['Hổ', 'tiger', 'To khỏe nhưng vụng về, sau lại vô ơn.', 'vô ơn']
    ],
    pages: [
      ['Hổ vụng về', 'rung tiger@210,186,1:f cat@100,186,1.1 mouse@40,186,0.9', 'Ngày xưa, hổ to khỏe nhưng [[vụng về]], [[săn mồi]] rất kém. Hổ thấy mèo [[nhanh nhẹn]], bắt chuột giỏi, thèm lắm.'],
      ['Xin học võ', 'rung tiger@210,186,1:f cat@100,186,1.1:happy say@130,30=Mèo_dạy_ta_với!', 'Hổ đến xin mèo dạy cho mình cách săn mồi. Mèo vui vẻ nhận lời.'],
      ['Học rình, học vồ', 'meadow cat@90,186,1.1 tiger@220,186,1:f sparkle@150,70 grass@160,186', 'Mèo dạy hổ cách [[rình]] mồi, cách [[vồ]] mồi, cách nhảy thật xa. Hổ học rất nhanh, ngày càng giỏi.'],
      ['Hổ vô ơn', 'rung tiger@190,186,1.2:f:angry cat@80,186,1:wow', 'Học xong, hổ nghĩ: “Giờ ta giỏi bằng mèo rồi. Ăn thịt mèo đi là ta giỏi nhất!” Thế là hổ [[vô ơn]] lao đến vồ mèo.'],
      ['Mèo trèo cây', 'rung tree@200,186,1.1 cat@204,108,0.8 tiger@120,186,1.1:angry', 'Nhanh như cắt, mèo [[trèo]] tót lên ngọn cây cao. Hổ đứng dưới gốc gầm gừ, cố mấy cũng không trèo lên được.'],
      ['Chưa dạy trèo cây!', 'rung tree@200,186,1.1 cat@204,108,0.8 tiger@110,186,1:f say@26,30=Ta_chưa_dạy_trèo_cây!', 'Mèo nói vọng xuống: “Ta chưa dạy ngươi trèo cây đâu!” Hổ xấu hổ, lủi thủi bỏ đi.'],
      ['Từ đó đến nay', 'rung tiger@90,186,0.9:f tree@220,186,1 cat@224,108,0.7 sun@290,30', 'Vì thế mà đến bây giờ, hổ vẫn không trèo cây giỏi như mèo.', 'Bạn mèo thông minh thật, các bạn nhỉ!']
    ],
    words: {
      'vụng về': ['làm không khéo, hay hỏng việc', 'clumsy'],
      'săn mồi': ['đuổi bắt con vật khác để ăn', 'to hunt for prey'],
      'nhanh nhẹn': ['làm gì cũng nhanh và khéo', 'nimble, quick'],
      'rình': ['nấp kín và chờ thời cơ', 'to lie in wait'],
      'vồ': ['lao tới chụp lấy thật nhanh', 'to pounce'],
      'vô ơn': ['quên công ơn của người đã giúp mình', 'ungrateful'],
      'trèo': ['bám tay chân để leo lên cao', 'to climb']
    },
    msg: 'Hãy biết ơn những người đã dạy dỗ, giúp đỡ mình. Kẻ vô ơn sẽ bị mọi người xa lánh.',
    msgEn: 'Be grateful to those who teach and help you. Ungrateful people end up alone.',
    saying: ['Ăn quả nhớ kẻ trồng cây.', 'Nhận được điều tốt thì phải nhớ ơn người đã giúp mình.'],
    quiz: [
      ['Mèo đã dạy hổ những gì?', ['Rình mồi, vồ mồi, nhảy xa', 'Trèo cây', 'Bơi lội'], 0, 'Mèo dạy nhiều điều nhưng chưa dạy trèo cây.'],
      ['Mèo thoát khỏi hổ bằng cách nào?', ['Trèo lên cây cao', 'Bơi qua sông', 'Chui vào hang'], 0, 'Hổ không biết trèo cây nên đành đứng dưới gốc.'],
      ['Anh chị kiên nhẫn dạy em đi xe đạp. Em nên làm gì?', ['Cảm ơn và quý trọng anh chị', 'Khoe là tự mình biết', 'Chê anh chị dạy chậm'], 0, 'Nhớ ơn người dạy mình là việc làm đẹp.']
    ],
    think: ['Vì sao mèo không dạy hổ trèo cây?', 'Hãy viết vài câu cảm ơn một người đã dạy các bạn điều gì đó.']
  });

  T({
    id: 23, title: 'Sự tích cây lúa', genre: 'Cổ tích',
    cover: 'luachin grain@120,186,1.3 grain@210,186,1 sun@280,36 sheaf@60,186,0.8',
    hook: 'Ngày xưa, hạt lúa to tròn và tự lăn về nhà đấy các bạn ạ! Vì sao bây giờ hạt lúa lại bé xíu? Mình kể cho các bạn nghe nhé.',
    en: 'Long ago, giant rice grains rolled into people\'s homes by themselves — until a lazy woman hit one with her broom.',
    cast: { vo: 'p:hair=bun,shirt=peach,pants=ink' },
    chars: [
      ['Hạt lúa thần', 'grain', 'Hạt lúa to tròn, biết tự lăn về nhà.', 'tốt bụng'],
      ['Người phụ nữ lười', 'vo', 'Không chịu dọn nhà, lại nóng nảy.', 'lười biếng'],
      ['Bà con nông dân', 'nd', 'Ngày nay phải cấy, gặt rất vất vả.', 'chăm chỉ']
    ],
    pages: [
      ['Hạt lúa ngày xưa', 'luachin grain@100,186,1.2 grain@180,186,1 grain@250,186,1.1 sun@280,36', 'Ngày xửa ngày xưa, hạt lúa to tròn như quả bóng. Đến mùa lúa chín, hạt lúa tự lăn về từng nhà.'],
      ['Đón lúa về', 'lang house@220,170,0.9 grain@120,186,1 nd@60:happy', 'Mọi người chỉ cần [[quét nhà]] sạch sẽ, mở rộng cửa là đón được lúa vào nhà.'],
      ['Người phụ nữ lười', 'room vo@150:sleepy:sit', 'Có một người phụ nữ rất [[lười biếng]]. Mùa lúa đến rồi mà nhà vẫn bừa bộn, chưa quét dọn gì.'],
      ['Cái chổi bực mình', 'room vo@100:angry:hold=broom grain@220,186,1.1', 'Hạt lúa lăn đến cửa. Chị ta [[cuống quýt]] quét nhà, bực mình vung chổi đập mạnh vào hạt lúa.'],
      ['Hạt lúa vỡ tan', 'room vo@90:wow grain@180,186,0.4:small grain@210,190,0.4:small grain@240,184,0.4:small grain@200,176,0.4:small grain@260,192,0.4:small', 'Hạt lúa [[vỡ]] tan thành muôn mảnh nhỏ. Hạt lúa buồn bã nói: “Từ nay muốn có lúa ăn, các người phải ra tận đồng mà [[gặt]].”'],
      ['Ra đồng gặt lúa', 'luachin nd@90:hold=sheaf ndn@200 sheaf@270,186,0.9 sun@280,36', 'Từ đó, hạt lúa bé nhỏ, không tự lăn về nữa. Người nông dân phải cấy, phải gặt, phải phơi rất [[vất vả]].'],
      ['Quý từng hạt cơm', 'room trai@100:happy:hold=bowl gai@200:happy:hold=bowl', 'Vì vậy, mỗi hạt cơm đều rất quý. Chúng mình phải biết [[trân trọng]], ăn hết phần cơm của mình.', 'Các bạn ăn hết cơm trong bát nhé, mỗi hạt gạo đều có công sức của bác nông dân đấy!']
    ],
    words: {
      'quét nhà': ['dùng chổi làm sạch nền nhà', 'to sweep the house'],
      'lười biếng': ['không chịu làm việc', 'lazy'],
      'cuống quýt': ['vội vàng, rối rít vì lo', 'flustered, in a panic'],
      'vỡ': ['bị tách ra thành nhiều mảnh', 'to break, shatter'],
      'gặt': ['cắt lúa chín ở ngoài đồng', 'to harvest (rice)'],
      'vất vả': ['phải làm nhiều, rất mệt nhọc', 'hard, tiring'],
      'trân trọng': ['quý và giữ gìn cẩn thận', 'to value, cherish']
    },
    msg: 'Hãy chăm chỉ, gọn gàng và biết quý trọng hạt gạo, quý công sức của người nông dân.',
    msgEn: 'Be hard-working and tidy, and value every grain of rice and the farmers who grow it.',
    saying: ['Ai ơi bưng bát cơm đầy, dẻo thơm một hạt, đắng cay muôn phần.', 'Mỗi hạt cơm có biết bao công sức của người nông dân.'],
    quiz: [
      ['Ngày xưa hạt lúa về nhà bằng cách nào?', ['Tự lăn về', 'Được chim chở về', 'Người ta khiêng về'], 0, 'Hạt lúa to tròn tự lăn về từng nhà.'],
      ['Vì sao hạt lúa vỡ thành hạt nhỏ?', ['Người phụ nữ lười lấy chổi đập vào', 'Trời mưa to', 'Chuột cắn'], 0, 'Chị ta bực mình vung chổi đập hạt lúa.'],
      ['Ăn xong, bát của em còn nhiều cơm. Em nên làm gì?', ['Ăn hết, lần sau lấy vừa đủ', 'Đổ đi', 'Giấu bát'], 0, 'Quý hạt cơm là quý công sức của bác nông dân.']
    ],
    think: ['Vì sao chúng mình phải quý từng hạt cơm?', 'Ở nhà, các bạn giúp bố mẹ việc gì để nhà cửa sạch sẽ?']
  });

  T({
    id: 24, title: 'Tích Chu', genre: 'Cổ tích',
    cover: 'nui tichchu@120:hold=gourd bird@220,80,1.3:c=peach cloud@60,40',
    hook: 'Có một cậu bé mải chơi đến nỗi quên cả bà. Rồi một ngày, bà hóa thành chim bay đi mất! Các bạn cùng mình nghe chuyện Tích Chu nhé.',
    en: 'Tích Chu is too busy playing to bring his thirsty grandmother water, and she turns into a bird. He travels far to bring back magic water.',
    cast: { tichchu: 'p:hair=boy,shirt=blue,s=0.95', tienco: 'p:hair=long,shirt=white,robe,belt=pink,wings,glow' },
    chars: [
      ['Tích Chu', 'tichchu', 'Cậu bé được bà thương nhất, nhưng mải chơi.', 'biết sửa lỗi'],
      ['Bà của Tích Chu', 'ba', 'Thương cháu, có gì ngon cũng để dành cho cháu.', 'thương cháu'],
      ['Bà tiên', 'tienco', 'Chỉ cho Tích Chu cách đưa bà trở về.', 'tốt bụng']
    ],
    pages: [
      ['Bà thương cháu', 'room ba@120:happy tichchu@210:happy bowl@170,186', 'Ngày xưa có cậu bé Tích Chu mồ côi cha mẹ, sống với bà. Bà rất thương Tích Chu, có gì ngon cũng [[để dành]] cho cháu.'],
      ['Mải chơi', 'lang ba@80:sad tichchu@200:run trai@270,186,0.9:run', 'Lớn lên, Tích Chu [[mải chơi]] với bạn bè, chẳng quan tâm đến bà nữa.'],
      ['Bà khát nước', 'room ba@140:sad say@76,30=Tích_Chu_ơi,_bà_khát_nước!', 'Một hôm, bà bị ốm, [[khát nước]] quá. Bà gọi mãi, gọi mãi mà Tích Chu vẫn mải chơi ngoài đồng.'],
      ['Bà hóa thành chim', 'sky bird@160,110,1.6:c=peach cloud@60,60 cloud@270,50', 'Bà khát quá, [[hóa thành]] một con chim, bay ra khỏi nhà, bay đi rất xa.'],
      ['Tích Chu hối hận', 'lang tichchu@110:cry bird@230,70,1:c=peach', 'Tích Chu về nhà, không thấy bà đâu, chỉ thấy một con chim bay đi. Cậu òa khóc: “Bà ơi, cháu sai rồi! Bà về với cháu đi!”'],
      ['Bà tiên chỉ đường', 'rung tienco@210 tichchu@100:wow', 'Một bà tiên hiện ra, bảo: “Muốn bà trở lại, cháu phải đi lấy nước [[suối tiên]] ở nơi rất xa cho bà uống.”'],
      ['Đường xa', 'nui tichchu@150:hold=gourd:run cloud@60,40 sun@280,36', 'Tích Chu [[vượt qua]] bao nhiêu núi cao, rừng sâu, cuối cùng cũng lấy được nước suối tiên.'],
      ['Bà trở về', 'room ba@120:happy tichchu@210:happy heart@166,60', 'Chim uống nước suối tiên rồi hóa lại thành bà. Tích Chu ôm chầm lấy bà, hứa từ nay sẽ luôn yêu thương, [[chăm sóc]] bà.', 'Các bạn nhớ hỏi han ông bà thật nhiều nhé!']
    ],
    words: {
      'để dành': ['giữ lại để sau này dùng hoặc cho ai', 'to save (for someone)'],
      'mải chơi': ['chơi say mê, quên hết việc khác', 'too busy playing'],
      'khát nước': ['rất muốn uống nước', 'thirsty'],
      'hóa thành': ['biến thành một thứ khác', 'to turn into'],
      'suối tiên': ['dòng suối có nước thần kỳ', 'a magic fairy spring'],
      'vượt qua': ['đi qua được nơi khó khăn', 'to get past, overcome'],
      'chăm sóc': ['trông nom, lo lắng cho người khác', 'to take care of']
    },
    msg: 'Hãy yêu thương và quan tâm ông bà, cha mẹ. Đừng mải chơi mà quên những người luôn thương mình.',
    msgEn: 'Love and care for your grandparents and parents. Don\'t let play make you forget them.',
    saying: ['Kính già, già để tuổi cho.', 'Biết kính trọng người già thì mình cũng được sống vui, sống lâu.'],
    quiz: [
      ['Vì sao bà hóa thành chim?', ['Bà khát nước mà Tích Chu mải chơi', 'Bà muốn đi chơi xa', 'Bà tiên biến bà thành chim'], 0, 'Bà gọi mãi mà Tích Chu không về.'],
      ['Tích Chu làm gì để bà trở lại?', ['Đi lấy nước suối tiên cho bà uống', 'Khóc thật to', 'Bắt con chim lại'], 0, 'Cậu vượt núi, băng rừng để lấy nước.'],
      ['Ông nhờ em lấy cốc nước khi em đang chơi trò chơi. Em làm gì?', ['Dừng chơi, lấy nước cho ông ngay', 'Chơi xong đã', 'Giả vờ không nghe'], 0, 'Quan tâm người thân quan trọng hơn trò chơi.']
    ],
    think: ['Các bạn thường làm gì để giúp ông bà?', 'Nếu là Tích Chu, các bạn sẽ nói gì với bà khi bà trở về?']
  });

  T({
    id: 25, title: 'Nàng tiên Ốc', genre: 'Cổ tích',
    cover: 'room ba@100:happy nangtien@200:happy snail@270,186,0.8:glow',
    hook: 'Một bà lão nghèo bắt được con ốc xinh xắn. Từ hôm đó, nhà bà xảy ra những chuyện rất lạ! Các bạn nghe mình kể nhé.',
    en: 'A kind old woman keeps a pretty snail instead of selling it. Every day her house is tidied by someone — a fairy who comes out of the shell.',
    cast: { nangtien: 'p:hair=long,shirt=peach,robe,belt=pink,glow' },
    chars: [
      ['Bà lão', 'ba', 'Nghèo, sống một mình, sống bằng nghề mò cua bắt ốc.', 'nhân hậu'],
      ['Nàng tiên Ốc', 'nangtien', 'Nàng tiên sống trong vỏ ốc, chăm chỉ giúp bà.', 'chăm chỉ, biết ơn'],
      ['Con ốc xinh', 'snail:glow', 'Vỏ biêng biếc, bà lão thương không nỡ bán.', 'xinh xắn']
    ],
    pages: [
      ['Bà lão nghèo', 'water ba@110 basket@200,186', 'Ngày xưa có một bà lão nghèo, sống một mình. Hằng ngày, bà [[mò cua bắt ốc]] để kiếm sống.'],
      ['Con ốc xinh xắn', 'water ba@100:happy snail@210,186,1:glow', 'Một hôm, bà bắt được một con ốc [[xinh xắn]], vỏ [[biêng biếc]]. Bà thương, không nỡ bán, mang về thả vào [[chum]] nước.'],
      ['Chuyện lạ', 'room ba@100:wow pot@200,186,0.8:steam bowl@250,186', 'Từ hôm ấy, đi làm về, bà thấy nhà cửa sạch sẽ, cơm nước [[tinh tươm]], vườn rau sạch cỏ. Bà lấy làm lạ lắm.'],
      ['Bà rình xem', 'room nangtien@200:hold=broom snail@260,186,0.7 ba@60:wow', 'Một hôm, bà giả vờ ra đồng rồi quay về [[rình]] xem. Bà thấy một nàng tiên bước ra từ vỏ ốc, quét dọn nhà cửa.'],
      ['Cất vỏ ốc', 'room nangtien@200:wow ba@100:happy snail@150,186,0.6', 'Bà lão [[bí mật]] nhẹ nhàng cất vỏ ốc đi. Nàng tiên không chui vào vỏ được nữa.'],
      ['Ở lại với bà', 'room ba@120:happy nangtien@200:happy heart@160,60', 'Bà ôm lấy nàng tiên, nói: “Con hãy ở lại đây với bà.” Nàng tiên vui vẻ nhận lời.'],
      ['Hai mẹ con', 'vuon ba@110:happy nangtien@190:happy house@280,176,0.7 sun@60,36', 'Từ đó, bà lão và nàng tiên Ốc sống bên nhau, [[yêu thương]] nhau như hai mẹ con.', 'Lòng tốt của bà đã mang lại hạnh phúc, các bạn thấy không?']
    ],
    words: {
      'mò cua bắt ốc': ['lội xuống nước tìm bắt cua, ốc', 'to catch crabs and snails in the water'],
      'xinh xắn': ['nhỏ nhắn, đẹp đẽ, dễ thương', 'pretty, cute'],
      'biêng biếc': ['xanh tươi và óng ánh', 'shimmering blue-green'],
      'chum': ['đồ đựng nước to bằng sành, miệng tròn', 'a large earthenware jar'],
      'tinh tươm': ['sạch sẽ, gọn gàng, đầy đủ', 'neat and tidy'],
      'rình': ['nấp kín để xem lén', 'to secretly watch'],
      'bí mật': ['không để người khác biết', 'secretly'],
      'yêu thương': ['quý mến, thương nhau', 'to love, cherish']
    },
    msg: 'Lòng tốt sẽ được đáp lại bằng lòng tốt. Tình thương giữa người với người mang lại hạnh phúc.',
    msgEn: 'Kindness is returned with kindness. Caring for each other brings happiness.',
    saying: ['Thương người như thể thương thân.', 'Hãy thương người khác như thương chính mình.'],
    quiz: [
      ['Vì sao bà lão không bán con ốc?', ['Vì bà thương ốc', 'Vì ốc quá nhỏ', 'Vì không ai mua'], 0, 'Bà thấy ốc xinh xắn nên không nỡ bán.'],
      ['Ai đã dọn dẹp nhà cửa cho bà lão?', ['Nàng tiên Ốc', 'Hàng xóm', 'Một con mèo'], 0, 'Nàng tiên bước ra từ vỏ ốc giúp bà.'],
      ['Em thấy một chú chim non rơi khỏi tổ. Em nên làm gì?', ['Nhờ người lớn giúp đưa chim về tổ', 'Mang về nhốt để chơi', 'Mặc kệ'], 0, 'Thương con vật nhỏ, như bà lão thương con ốc.']
    ],
    think: ['Nếu có nàng tiên Ốc ở nhà, các bạn muốn cùng nàng làm gì?', 'Các bạn đã từng giúp đỡ ai mà không cần được cảm ơn chưa?']
  });

  T({
    id: 26, title: 'Con Công và con Quạ', genre: 'Cổ tích',
    cover: 'meadow peacock@110,186,1.3 crow@230,186,1.6 paints@170,190,0.9',
    hook: 'Vì sao chim công có bộ lông sặc sỡ, còn quạ thì đen sì? Hai bạn ấy đã tô màu cho nhau đấy! Các bạn nghe mình kể nhé.',
    en: 'Crow paints Peacock beautifully. When it\'s Peacock\'s turn, he is in such a hurry to show off that he spills black ink all over Crow.',
    chars: [
      ['Quạ', 'crow', 'Tô màu rất tỉ mỉ, cẩn thận cho bạn.', 'chu đáo'],
      ['Công', 'peacock', 'Có bộ lông đẹp nhưng nóng vội, thích khoe.', 'nóng vội']
    ],
    pages: [
      ['Lông trắng xám', 'meadow crow@110,186,1.6:white peacock@220,186,1.2:plain', 'Ngày xưa, Công và Quạ đều có bộ lông trắng xám, trông chẳng có gì đẹp.'],
      ['Tô màu cho nhau', 'meadow crow@90,186,1.5:white paints@160,190,1 peacock@240,186,1.2:plain', 'Hai bạn rủ nhau [[tô màu]] cho nhau. Quạ tô cho Công trước.'],
      ['Quạ tô thật tỉ mỉ', 'meadow crow@80,186,1.5:white peacock@200,186,1.4 sparkle@140,50 sparkle@260,60', 'Quạ tô rất [[tỉ mỉ]]: xanh, vàng, đỏ, mỗi chiếc lông một vòng tròn [[óng ánh]]. Công trở nên đẹp [[lộng lẫy]].'],
      ['Đến lượt Công', 'meadow peacock@210,186,1.3 crow@90,186,1.5:white say@140,30=Nhanh_lên_nào!', 'Đến lượt Công tô cho Quạ. Nhưng Công [[nóng vội]], chỉ muốn nhanh nhanh đi [[khoe]] bộ lông mới.'],
      ['Đổ cả lọ mực', 'meadow ink@90,186,1.2:spill crow@170,186,1.6 peacock@270,186,1:f', 'Công đổ ào cả lọ mực đen lên người Quạ, rồi chạy đi khoe với mọi người.'],
      ['Quạ đen sì', 'meadow crow@160,186,2', 'Quạ [[đen sì]] từ đầu đến chân, buồn lắm. Từ đó, quạ chỉ có bộ lông đen.'],
      ['Hãy chu đáo', 'meadow peacock@100,186,1.2 crow@230,186,1.6 sun@280,36', 'Công thì đẹp, nhưng ai cũng nhắc chuyện Công vô tâm với bạn. Làm việc gì cũng nên [[chu đáo]] như Quạ các bạn nhé.']
    ],
    words: {
      'tô màu': ['dùng màu để tô lên hình vẽ', 'to colour in'],
      'tỉ mỉ': ['làm cẩn thận từng chi tiết nhỏ', 'meticulous'],
      'óng ánh': ['lấp lánh, phản chiếu ánh sáng', 'shimmering'],
      'lộng lẫy': ['đẹp rực rỡ', 'splendid, dazzling'],
      'nóng vội': ['muốn làm thật nhanh, không chờ được', 'impatient, hasty'],
      'khoe': ['cho người khác xem để được khen', 'to show off'],
      'đen sì': ['đen hết cả, rất đen', 'pitch black'],
      'chu đáo': ['cẩn thận, nghĩ đến mọi điều cho người khác', 'thoughtful, thorough']
    },
    msg: 'Hãy làm việc cẩn thận, chu đáo, và đối xử tốt với bạn như bạn đã đối xử tốt với mình.',
    msgEn: 'Do things carefully, and treat your friends as well as they treat you.',
    saying: ['Dục tốc bất đạt.', 'Làm vội vàng thì không đạt được kết quả tốt.'],
    quiz: [
      ['Ai đã tô màu cho Công?', ['Quạ', 'Công tự tô', 'Một bạn chim khác'], 0, 'Quạ tô cho Công rất tỉ mỉ.'],
      ['Vì sao Quạ có bộ lông đen?', ['Công nóng vội đổ cả lọ mực lên Quạ', 'Quạ thích màu đen', 'Quạ ngã xuống bùn'], 0, 'Công vội đi khoe nên làm ẩu.'],
      ['Bạn đã giúp em làm bài rất cẩn thận. Khi bạn nhờ em giúp lại, em làm gì?', ['Giúp bạn thật chu đáo', 'Làm qua loa cho xong', 'Từ chối'], 0, 'Bạn tốt với mình, mình cũng tốt với bạn.']
    ],
    think: ['Nếu là Công, các bạn sẽ tô màu cho Quạ như thế nào?', 'Hãy tả bộ lông thật đẹp mà các bạn muốn tô cho Quạ.']
  });

  T({
    id: 27, title: 'Sự tích hồ Ba Bể', genre: 'Cổ tích',
    cover: 'ho mountain@60,130,0.8 mountain@270,130,0.9 boat@150,170,1 me@146,158,0.55 trai@176,160,0.5',
    hook: 'Ở vùng núi phía Bắc Việt Nam có một cái hồ rất đẹp tên là hồ Ba Bể. Người xưa kể rằng hồ có được là nhờ một bà cụ ăn xin. Các bạn nghe mình kể nhé!',
    en: 'At a village festival, everyone turns away a poor old beggar — except a widow and her son. That night a flood comes, and only their kindness saves them.',
    cast: { bacu: 'p:hair=bunw,shirt=mud,robe,belt=woodD,patch,hold=stick,armR=30', bacu2: 'p:hair=bunw,shirt=white,robe,belt=straw,glow' },
    chars: [
      ['Bà cụ ăn xin', 'bacu', 'Một vị thần hóa thành bà cụ để thử lòng người.', 'bí ẩn'],
      ['Mẹ con bà góa', 'me', 'Nghèo nhưng tốt bụng, giúp đỡ bà cụ.', 'nhân hậu'],
      ['Dân làng', 'phu', 'Chỉ lo ăn chơi, xua đuổi bà cụ.', 'ích kỷ']
    ],
    pages: [
      ['Ngày hội', 'lang nd@80:happy phu@160:happy ndn@240:happy lantern@120,90 lantern@200,80', 'Ngày xưa, ở một vùng núi phía Bắc, dân làng mở hội lớn. Ai cũng ăn uống, vui chơi.'],
      ['Bà cụ ăn xin', 'lang bacu@100:sad phu@220:angry:point', 'Có một bà cụ [[ăn xin]], quần áo [[rách rưới]], đến xin ăn. Không ai cho bà, người ta còn [[xua đuổi]] bà đi.'],
      ['Mẹ con bà góa', 'room me@90 trai@150:happy bacu@240 bowl@200,186', 'Chỉ có mẹ con bà [[góa]] nghèo đưa bà cụ về nhà, mời cơm, cho ngủ nhờ.'],
      ['Ánh sáng lạ', 'night bacu2@160 sparkle@110,60 sparkle@210,50 sparkle@160,30', 'Đêm ấy, chỗ bà cụ nằm bỗng sáng rực lên. Mẹ con bà góa biết bà cụ không phải người thường.'],
      ['Lời dặn của bà cụ', 'room bacu2@210:point me@100 grain@150,186,0.5:small', 'Sáng ra, bà cụ đưa cho mẹ con một gói [[tro]] và hai mảnh [[vỏ trấu]]: “Sắp có [[lụt]] lớn. Rắc tro quanh nhà, còn vỏ trấu sẽ thành thuyền.”'],
      ['Nước dâng lên', 'bao house@220,150,0.9 boat@100,160,1 me@96,148,0.55 trai@126,150,0.5', 'Đêm đó, nước phun lên từ lòng đất, ngập cả làng. Nhà mẹ con bà góa không bị ngập. Hai mảnh vỏ trấu biến thành hai chiếc thuyền.'],
      ['Cứu người', 'bao boat@150,160,1.2 trai@140,146,0.55 nd@220,176,0.7:wow', 'Mẹ con bà góa chèo thuyền đi [[cứu]] những người bị nạn, không phân biệt ai đã từng xua đuổi bà cụ.'],
      ['Hồ Ba Bể', 'ho mountain@60,130,0.8 mountain@270,130,0.9 rock@160,170,1.2 grass@150,160 boat@240,170,0.7', 'Chỗ đất sụt xuống thành một hồ nước rộng, gọi là hồ Ba Bể. Nền nhà mẹ con bà góa thành một hòn đảo nhỏ giữa hồ.', 'Hồ Ba Bể là một trong những hồ nước ngọt tự nhiên lớn nhất Việt Nam đấy các bạn ạ!']
    ],
    words: {
      'ăn xin': ['xin người khác cho ăn, cho tiền', 'to beg'],
      'rách rưới': ['quần áo rách nhiều chỗ', 'ragged, in tatters'],
      'xua đuổi': ['đuổi đi, không cho ở gần', 'to chase away'],
      'góa': ['có chồng hoặc vợ đã mất', 'widowed'],
      'tro': ['phần bột còn lại sau khi đốt cháy', 'ash'],
      'vỏ trấu': ['vỏ bọc ngoài hạt thóc', 'rice husk'],
      'lụt': ['nước dâng lên ngập khắp nơi', 'flood'],
      'cứu': ['giúp người thoát khỏi nguy hiểm', 'to rescue']
    },
    msg: 'Hãy giúp đỡ người gặp khó khăn, đừng xua đuổi ai vì vẻ bề ngoài. Lòng tốt sẽ được đền đáp.',
    msgEn: 'Help people in need and never turn anyone away for how they look. Kindness is rewarded.',
    saying: ['Lá lành đùm lá rách.', 'Người có nhiều giúp đỡ người thiếu thốn.'],
    quiz: [
      ['Ai đã giúp bà cụ ăn xin?', ['Mẹ con bà góa', 'Cả làng', 'Không ai cả'], 0, 'Chỉ mẹ con bà góa đưa bà về nhà.'],
      ['Hai mảnh vỏ trấu biến thành gì?', ['Hai chiếc thuyền', 'Hai con chim', 'Hai cái bánh'], 0, 'Thuyền giúp mẹ con đi cứu người.'],
      ['Ở cổng trường, một bạn bị ướt mưa vì không có áo mưa. Em làm gì?', ['Rủ bạn đi chung hoặc báo cô giáo', 'Cười bạn', 'Đi thẳng'], 0, 'Giúp người khi họ cần là lá lành đùm lá rách.']
    ],
    think: ['Vì sao dân làng không giúp bà cụ? Họ đã sai ở đâu?', 'Kể về một lần các bạn giúp đỡ một người đang gặp khó khăn.']
  });

  T({
    id: 28, title: 'Đeo nhạc cho mèo', genre: 'Ngụ ngôn',
    cover: 'room mouse@60,186,1.4 mouse@120,186,1.2 bell@170,170,1.4 cat@250,186,1.3:f',
    hook: 'Họ hàng nhà chuột nghĩ ra một kế hoạch rất hay để thoát khỏi mèo. Nhưng có một vấn đề… Các bạn nghe xem là vấn đề gì nhé!',
    en: 'The mice agree it\'s a brilliant idea to put a bell on the cat. But who will actually do it?',
    chars: [
      ['Bầy chuột', 'mouse', 'Sợ mèo, họp nhau tìm cách đối phó.', 'nhút nhát'],
      ['Con mèo', 'cat', 'Bắt chuột rất giỏi.', 'nhanh nhẹn']
    ],
    pages: [
      ['Con mèo giỏi', 'room cat@210,186,1.4:f mouse@70,186,1.1 mouse@110,186,0.9', 'Trong một ngôi nhà có con mèo bắt chuột rất giỏi. Họ hàng nhà chuột sợ lắm, chẳng dám ra khỏi hang.'],
      ['Họp bàn', 'room mouse@60,186,1.2 mouse@120,186,1.1 mouse@180,186,1.2:f mouse@240,186,1.1:f', 'Bầy chuột [[họp]] nhau lại để bàn cách [[đối phó]] với mèo.'],
      ['Ý kiến hay', 'room mouse@80,186,1.1 bell@160,176,1.5 mouse@240,186,1.2:f say@100,40=Đeo_nhạc_cho_mèo!', 'Một chú chuột nhắt nói: “Ta đeo [[nhạc]] vào cổ mèo. Mèo đi đâu, nhạc kêu [[leng keng]], chúng ta biết mà chạy trốn.” Cả bọn [[reo hò]]: “Hay quá!”'],
      ['Ai đi đeo?', 'room mouse@60,186,1.1:f mouse@140,186,1.2 mouse@220,186,1.1:f bell@280,176,1.2 say@90,40=Ai_đi_đeo_đây?', 'Nhưng ai sẽ đi đeo nhạc cho mèo? Con nào cũng sợ, cứ [[đùn đẩy]] cho nhau.'],
      ['Chuột nhắt run rẩy', 'room mouse@110,186,1.6:f mouse@210,186,0.9 bell@270,176,1.1', 'Chuột cống già bảo: “Ý của chú thì chú đi đi!” Chuột nhắt run rẩy: “Cháu… cháu bé lắm, cháu không [[dám]] đâu!”'],
      ['Mèo vẫn ở đó', 'room cat@200,186,1.4:f bell@90,180,1 mouse@40,186,0.7', 'Cuối cùng, chẳng con nào dám đi. [[Kế hoạch]] hay mấy cũng bỏ đó, và mèo vẫn rình bắt chuột như xưa.', 'Có ý hay rồi, còn phải có người dám làm nữa các bạn nhỉ!']
    ],
    words: {
      'họp': ['nhiều người cùng ngồi lại bàn bạc', 'to have a meeting'],
      'đối phó': ['tìm cách chống lại điều khó khăn', 'to deal with'],
      'nhạc': ['cái chuông nhỏ đeo ở cổ con vật', 'a small bell'],
      'leng keng': ['tiếng kêu trong của chuông nhỏ', 'jingle'],
      'reo hò': ['kêu to lên vì vui mừng', 'to cheer'],
      'đùn đẩy': ['đẩy việc cho người khác làm', 'to pass the job to someone else'],
      'dám': ['không sợ, có gan làm', 'to dare'],
      'kế hoạch': ['những việc định làm và cách làm', 'plan']
    },
    msg: 'Nói thì dễ, làm mới khó. Một ý kiến hay chỉ thành công khi có người dám nhận việc và bắt tay vào làm.',
    msgEn: 'Saying is easy, doing is hard. A good idea only works when someone is brave enough to do it.',
    saying: ['Nói thì dễ, làm thì khó.', 'Có ý hay chưa đủ, còn phải dám bắt tay vào làm.'],
    quiz: [
      ['Bầy chuột muốn đeo gì cho mèo?', ['Một cái nhạc (chuông nhỏ)', 'Một cái mũ', 'Một sợi dây'], 0, 'Nhạc kêu leng keng báo mèo đang đến.'],
      ['Vì sao kế hoạch không thành?', ['Không con chuột nào dám đi đeo nhạc', 'Mèo đi vắng', 'Nhạc bị hỏng'], 0, 'Con nào cũng đùn đẩy cho nhau.'],
      ['Lớp em muốn làm báo tường, nhưng chưa ai nhận việc. Em làm gì?', ['Xung phong nhận một phần việc', 'Đợi bạn khác làm', 'Bảo đó là ý dở'], 0, 'Dám nhận việc thì ý hay mới thành.']
    ],
    think: ['Nếu là một chú chuột, các bạn có dám đi đeo nhạc không? Các bạn có cách nào hay hơn không?', 'Kể về một việc các bạn đã dám xung phong làm.']
  });

  T({
    id: 29, title: 'Chân, Tay, Tai, Mắt, Miệng', genre: 'Ngụ ngôn',
    cover: 'day mat@50,186,0.9:happy tay@110,186,0.9:happy chan@170,186,0.9:happy tai@230,186,0.9:happy mieng@285,186,0.9:happy',
    hook: 'Trong cơ thể chúng mình, Chân, Tay, Tai, Mắt và Miệng có một lần giận nhau đấy! Các bạn thử đoán xem vì sao nhé.',
    en: 'Eyes, Hands, Feet and Ears think Mouth is lazy and stop feeding him — until they all feel weak and realise everyone matters.',
    chars: [
      ['Cô Mắt', 'mat', 'Nhìn mọi thứ xung quanh.', 'tinh nhanh'],
      ['Cậu Chân, cậu Tay', 'tay', 'Đi lại, cầm nắm, làm lụng.', 'chăm chỉ'],
      ['Bác Tai', 'tai', 'Lắng nghe mọi chuyện, hiểu ra trước tiên.', 'sáng suốt'],
      ['Lão Miệng', 'mieng', 'Ăn để nuôi cả cơ thể.', 'hiền lành']
    ],
    pages: [
      ['Năm người bạn', 'day mat@50,186,0.9 tay@110,186,0.9 chan@170,186,0.9 tai@230,186,0.9 mieng@285,186,0.9 sun@280,30', 'Ngày xưa, Chân, Tay, Tai, Mắt và Miệng sống [[thân thiết]] với nhau trong một cơ thể. Ai cũng có việc của mình.'],
      ['Cô Mắt phàn nàn', 'day mat@80,186,1.1:angry mieng@240,186,1 say@40,30=Lão_Miệng_chỉ_ăn_không!', 'Một hôm, cô Mắt nói: “Chúng ta [[làm lụng]] vất vả, còn lão Miệng chẳng làm gì, chỉ [[ăn không]]!”'],
      ['Không nuôi lão Miệng', 'day tay@60,186,1:angry chan@130,186,1:angry mat@200,186,0.9:angry mieng@280,186,1:sad', 'Cậu Chân, cậu Tay đồng ý ngay. Cả bọn kéo đến nhà lão Miệng: “Từ nay chúng tôi không làm để nuôi lão nữa!”'],
      ['Mệt rã rời', 'day mat@50,186,0.9:sleepy tay@110,186,0.9:sleepy chan@170,186,0.9:sleepy tai@230,186,0.9:sleepy mieng@285,186,0.9:sleepy', 'Mấy ngày sau, cả bọn thấy [[rã rời]]. Chân không muốn đi, Tay không muốn cầm, Mắt [[lờ đờ]], Tai cứ ù ù.'],
      ['Bác Tai hiểu ra', 'day tai@120,186,1.2:happy mat@220,186,0.9:sad say@150,30=Chúng_ta_sai_rồi!', 'Bác Tai nói: “Lão Miệng có ăn thì chúng ta mới có sức. Chúng ta sai rồi!”'],
      ['Xin lỗi lão Miệng', 'day mat@50,186,0.9 tay@110,186,0.9 chan@170,186,0.9 mieng@240,186,1:happy bowl@290,186', 'Cả bọn đến xin lỗi lão Miệng, lại cùng nhau [[hợp sức]] làm việc. Lão Miệng được ăn, ai cũng khỏe lại.'],
      ['Mỗi người một việc', 'day mat@50,186,0.9:happy tay@110,186,0.9:happy chan@170,186,0.9:happy tai@230,186,0.9:happy mieng@285,186,0.9:happy heart@160,60', 'Từ đó, cả năm bạn sống vui vẻ, mỗi người một việc, không ai [[tị nạnh]] ai nữa.', 'Bộ phận nào trên cơ thể cũng quan trọng các bạn ạ!']
    ],
    words: {
      'thân thiết': ['gần gũi, quý mến nhau', 'close (friends)'],
      'làm lụng': ['làm việc chân tay vất vả', 'to toil, labour'],
      'ăn không': ['chỉ ăn mà không làm gì', 'to eat without working'],
      'rã rời': ['mệt mỏi, không còn sức', 'exhausted'],
      'lờ đờ': ['chậm chạp, không tỉnh táo', 'sluggish, drowsy'],
      'hợp sức': ['cùng góp sức làm chung', 'to join forces'],
      'tị nạnh': ['so bì, ghen tị xem ai làm ít, làm nhiều', 'to begrudge, compare unfairly']
    },
    msg: 'Mỗi người một việc, ai cũng quan trọng. Hãy đoàn kết, giúp đỡ nhau, đừng so bì, tị nạnh.',
    msgEn: 'Everyone has a role and everyone matters. Work together and don\'t compare who does more.',
    saying: ['Một con ngựa đau, cả tàu bỏ cỏ.', 'Một người gặp khó, cả tập thể cùng lo.'],
    quiz: [
      ['Vì sao Mắt, Chân, Tay giận lão Miệng?', ['Vì nghĩ Miệng chỉ ăn mà không làm', 'Vì Miệng nói xấu', 'Vì Miệng hát to'], 0, 'Họ chưa hiểu Miệng ăn là để nuôi cả cơ thể.'],
      ['Khi không cho Miệng ăn, chuyện gì xảy ra?', ['Cả bọn đều mệt mỏi, rã rời', 'Cả bọn khỏe hơn', 'Không có gì xảy ra'], 0, 'Không ai có sức nữa.'],
      ['Trong nhóm, bạn ghi chép có vẻ nhàn hơn em. Em nghĩ sao?', ['Việc nào cũng cần, mỗi người làm tốt phần mình', 'Bắt bạn làm thêm', 'Bỏ phần việc của mình'], 0, 'Mỗi người một việc, ai cũng quan trọng.']
    ],
    think: ['Bộ phận nào trên cơ thể các bạn thấy quan trọng nhất? Vì sao?', 'Trong gia đình các bạn, mỗi người làm việc gì để cả nhà vui khỏe?']
  });

  T({
    id: 30, title: 'Sự tích cây nêu ngày Tết', genre: 'Cổ tích',
    cover: 'tet tet@170,190,1 house@70,186,0.8 trai@240:happy gai@290,186,0.9:happy',
    hook: 'Ngày Tết ở làng quê Việt Nam, người ta dựng một cây tre cao trước nhà gọi là cây nêu. Vì sao lại thế? Đây là câu chuyện cuối cùng trong 30 ngày của chúng mình!',
    en: 'Bụt helps people outsmart greedy demons who took their land. That\'s why families put up a tall Tết pole (cây nêu) at New Year.',
    chars: [
      ['Ông Bụt', 'but', 'Giúp con người dùng trí khôn lấy lại đất.', 'thông minh, tốt bụng'],
      ['Ma quỷ', 'devil', 'Chiếm đất, bắt người làm thuê, rất tham lam.', 'tham lam'],
      ['Người nông dân', 'nd', 'Chăm chỉ làm ruộng, nghe lời Bụt dạy.', 'chăm chỉ']
    ],
    pages: [
      ['Ma quỷ chiếm đất', 'lua devil@210,186,1.2 nd@90:sad', 'Ngày xưa, [[ma quỷ]] [[chiếm]] hết đất đai. Con người phải làm thuê cho quỷ, làm được bao nhiêu lúa quỷ lấy gần hết.'],
      ['Ăn ngọn hay ăn gốc?', 'lua devil@220,186,1.1:wow khoai@140,186,1.1 nd@70:happy but@290,186,0.9', 'Quỷ đòi lấy phần ngọn, Bụt bảo người trồng khoai, củ ở dưới đất. Quỷ đòi lấy phần gốc, Bụt bảo trồng lúa, hạt ở trên ngọn. Quỷ chẳng được gì.'],
      ['Xin một chỗ đất', 'lang but@90 devil@220,186,1.1:sly nd@150', 'Quỷ tức giận, đòi lại đất. Bụt bảo người xin quỷ một chỗ đất nhỏ, chỉ bằng [[bóng]] chiếc [[áo cà sa]]. Quỷ nghĩ áo bé tí nên đồng ý ngay.'],
      ['Bóng áo che khắp nơi', 'lang tet@140,190,1 but@60:up devil@260,186,0.9:wow sparkle@200,50', 'Người dựng một cây tre thật cao, treo áo cà sa lên ngọn. Bụt [[làm phép]], áo rộng ra, bóng áo che kín khắp nơi. Quỷ phải lùi ra tận biển.'],
      ['Quỷ xin về ăn Tết', 'bien devil@200,186,1:sad but@90', 'Quỷ xin Bụt cho về thăm đất cũ mấy ngày Tết. Bụt cho phép, nhưng dặn người dựng cây nêu, treo chuông khánh để quỷ không dám lại gần.'],
      ['Dựng cây nêu', 'lang tet@180,190,1 nd@90:happy house@270,186,0.7', 'Từ đó, mỗi dịp Tết, người ta dựng [[cây nêu]] trước nhà để [[xua]] điều xấu, đón [[điều lành]].'],
      ['Tết đến rồi!', 'tet tet@200,190,1 tray@110,184,1 banhchung@90,180,0.8 banhgiay@132,180,0.8 trai@260,186,0.9:happy', 'Ngày nay, nhiều nơi vẫn giữ phong tục dựng cây nêu ngày Tết, cùng gói bánh chưng, chúc Tết ông bà.', 'Ba mươi ngày rồi! Các bạn giỏi quá. Hẹn gặp lại các bạn ở những câu chuyện mới nhé!']
    ],
    words: {
      'ma quỷ': ['những nhân vật xấu, hay hại người trong truyện', 'demons, evil spirits'],
      'chiếm': ['lấy làm của mình, không cho người khác', 'to seize, take over'],
      'bóng': ['hình tối in xuống đất khi vật che ánh sáng', 'shadow'],
      'áo cà sa': ['chiếc áo choàng của nhà sư', 'a monk\'s robe'],
      'làm phép': ['dùng phép thần kỳ', 'to cast a spell'],
      'cây nêu': ['cây tre cao dựng trước nhà ngày Tết', 'the Tết bamboo pole'],
      'xua': ['đuổi đi', 'to drive away'],
      'điều lành': ['những điều tốt đẹp, may mắn', 'good things, good luck']
    },
    msg: 'Biết dùng trí khôn và đoàn kết thì sẽ vượt qua cái xấu. Hãy cùng gia đình giữ gìn những phong tục đẹp của ngày Tết.',
    msgEn: 'Cleverness and unity overcome what is bad. Keep Tết traditions alive with your family.',
    saying: ['Thịt mỡ, dưa hành, câu đối đỏ; cây nêu, tràng pháo, bánh chưng xanh.', 'Câu đối kể những thứ quen thuộc của ngày Tết xưa.'],
    quiz: [
      ['Quỷ đòi lấy phần ngọn, Bụt bảo người trồng gì?', ['Khoai, vì củ ở dưới đất', 'Lúa', 'Hoa'], 0, 'Quỷ lấy ngọn khoai thì chẳng được gì.'],
      ['Vì sao người ta dựng cây nêu ngày Tết?', ['Để xua điều xấu, đón điều lành', 'Để phơi quần áo', 'Để trèo chơi'], 0, 'Cây nêu nhắc lại chuyện Bụt giúp người.'],
      ['Nhà em ở xa Việt Nam nhưng muốn giữ phong tục ngày Tết. Em có thể làm gì?', ['Cùng bố mẹ gói bánh, chúc Tết ông bà', 'Không làm gì cả', 'Quên Tết đi'], 0, 'Ở đâu chúng mình cũng có thể giữ phong tục đẹp.']
    ],
    think: ['Vì sao Bụt bảo người trồng khoai khi quỷ đòi lấy phần ngọn?', 'Tết ở nhà các bạn có những phong tục nào? Kể cho mình nghe nhé!']
  });
})();
