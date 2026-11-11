/* Trâu Con Kể Chuyện — nội dung Ngày 11 đến Ngày 20 (cách viết xem đầu file truyen-01-10.js) */
(function () {
  const T = (o) => (window.TRUYEN = window.TRUYEN || []).push(o);

  T({
    id: 11, title: 'Con Rồng cháu Tiên', genre: 'Truyền thuyết',
    cover: 'nui dragon@140,120,0.9 auco@250:happy cloud@60,40',
    hook: 'Các bạn có biết vì sao người Việt mình tự hào là “con Rồng cháu Tiên” không? Dù các bạn đang sống ở đâu, câu chuyện này cũng là chuyện của các bạn đấy!',
    en: 'The Dragon Lord and the Fairy Âu Cơ have one hundred children from one sack of eggs. That is why Vietnamese people call each other "đồng bào" — born from the same sack.',
    cast: { llq: 'p:hair=top,shirt=blue,robe,belt=gold,glow', auco: 'p:hair=long,shirt=white,robe,belt=pink,wings,glow', hung: 'p:hair=top,crown,shirt=yellow,robe,belt=red' },
    chars: [
      ['Lạc Long Quân', 'dragon@160,150', 'Vị thần nòi rồng sống dưới biển, giúp dân diệt yêu quái, dạy dân trồng trọt.', 'mạnh mẽ, thương dân'],
      ['Âu Cơ', 'auco', 'Nàng tiên xinh đẹp sống trên núi cao.', 'dịu dàng'],
      ['Một trăm người con', 'trai', 'Nở ra từ một bọc trăm trứng, khỏe mạnh như thần.', 'đoàn kết'],
      ['Vua Hùng', 'hung', 'Người con trưởng, vị vua đầu tiên của nước Văn Lang.', 'tài giỏi']
    ],
    pages: [
      ['Thần nòi rồng', 'bien dragon@170,130,1 sun@280,36', 'Ngày xưa, ở miền đất Lạc Việt có một vị thần thuộc [[nòi rồng]], tên là Lạc Long Quân. Thần có sức khỏe [[phi thường]], thường giúp dân diệt yêu quái, dạy dân trồng lúa.'],
      ['Nàng tiên trên núi', 'nui auco@160:happy flower@80,186:c=pink flower@240,186:c=yellow flower@270,190:c=white', 'Ở vùng núi cao có nàng tiên Âu Cơ xinh đẹp. Nghe nói miền Lạc Việt có nhiều hoa thơm cỏ lạ, nàng tìm đến thăm.'],
      ['Gặp gỡ', 'nui llq@120:happy auco@200:happy heart@160,64', 'Lạc Long Quân và Âu Cơ gặp nhau, đem lòng yêu thương nhau rồi nên vợ nên chồng.'],
      ['Bọc trăm trứng', 'room auco@80:wow eggs@170,184,1.3:sack llq@262', 'Ít lâu sau, Âu Cơ sinh ra một cái [[bọc]] trăm trứng. Trứng [[nở]] ra một trăm người con trai, đứa nào cũng hồng hào, khỏe mạnh.'],
      ['Phải chia tay', 'bien llq@100:sad auco@210:sad', 'Lạc Long Quân quen sống dưới nước, không ở lâu [[trên cạn]] được. Thần nói: “Ta là nòi rồng ở miền nước thẳm, nàng là dòng tiên ở chốn non cao. Chúng ta đành phải chia tay.”'],
      ['Lên núi, xuống biển', 'nui waves@70,198,0.5 llq@50 trai@100,184,0.9 trai@136,184,0.9 gai@196,184,0.9 trai@232,184,0.9 auco@282', 'Năm mươi người con theo cha xuống biển, năm mươi người con theo mẹ lên núi. Họ hẹn nhau: khi có việc gì thì giúp đỡ lẫn nhau.'],
      ['Nước Văn Lang', 'sancung hung@160:happy nd@60 ndn@262', 'Người con trưởng theo mẹ lên làm vua, lấy hiệu là Hùng Vương, [[đóng đô]] ở Phong Châu, đặt tên nước là Văn Lang.'],
      ['Chúng mình là đồng bào', 'lang trai@60:wave gai@120:happy ong@180 ba@240 trai@290,184,0.85:happy sun@280,36', 'Vì thế, người Việt luôn [[tự hào]] là con Rồng cháu Tiên, và gọi nhau thân thương là [[đồng bào]], nghĩa là cùng một bọc sinh ra.', 'Các bạn ở Canada hay ở bất cứ đâu cũng là con Rồng cháu Tiên đấy!']
    ],
    words: {
      'nòi rồng': ['thuộc dòng giống rồng', 'of dragon descent'],
      'phi thường': ['giỏi hay mạnh hơn hẳn người thường', 'extraordinary'],
      'bọc': ['cái túi tròn bao lấy bên ngoài', 'a sack, a pouch'],
      'nở': ['trứng vỡ ra và con non chui ra ngoài', 'to hatch'],
      'trên cạn': ['trên mặt đất, không phải dưới nước', 'on land'],
      'đóng đô': ['chọn một nơi làm kinh đô của đất nước', 'to set up the capital'],
      'tự hào': ['vui và hãnh diện về điều tốt đẹp của mình', 'proud'],
      'đồng bào': ['người cùng một nước, như anh em cùng một bọc', 'fellow countrymen ("from the same sack")']
    },
    msg: 'Người Việt ở khắp nơi đều chung một cội nguồn, là anh em một nhà. Chúng mình hãy yêu thương và giúp đỡ nhau.',
    msgEn: 'Vietnamese people everywhere share the same roots — we are one family. Let\'s love and help each other.',
    saying: ['Bầu ơi thương lấy bí cùng, tuy rằng khác giống nhưng chung một giàn.', 'Người cùng một nước phải thương yêu, đùm bọc nhau.'],
    quiz: [
      ['Âu Cơ sinh ra cái gì?', ['Một bọc trăm trứng', 'Một con rồng nhỏ', 'Hai người con'], 0, 'Bọc trăm trứng nở ra một trăm người con.'],
      ['“Đồng bào” nghĩa là gì?', ['Cùng một bọc sinh ra', 'Cùng một làng', 'Cùng một trường học'], 0, '“Đồng” là cùng, “bào” là cái bọc.'],
      ['Có một bạn mới từ Việt Nam sang lớp em, chưa quen ai. Em làm gì?', ['Chào hỏi, giúp bạn làm quen', 'Kệ bạn', 'Cười bạn nói tiếng Anh chưa giỏi'], 0, 'Đồng bào thì giúp đỡ nhau.']
    ],
    think: ['Vì sao người Việt gọi nhau là “đồng bào”?', 'Gia đình các bạn đến từ vùng nào của Việt Nam? Các bạn biết gì về nơi ấy?']
  });

  T({
    id: 12, title: 'Ba lưỡi rìu', genre: 'Cổ tích',
    cover: 'rung tieuphu@90:happy axe@170,186:c=gold axe@210,186:c=silver axe@250,186 but@292,186,0.9',
    hook: 'Nếu có người đưa cho các bạn một chiếc rìu bằng vàng và hỏi “Có phải của con không?”, các bạn sẽ trả lời thế nào? Cùng nghe chuyện chàng tiều phu nhé!',
    en: 'A poor woodcutter drops his iron axe in the river. Bụt offers him a gold axe and a silver axe, but he honestly says they are not his.',
    cast: { tieuphu: 'p:hair=boy,shirt=wood,pants=ink' },
    chars: [
      ['Chàng tiều phu', 'tieuphu', 'Chàng trai nghèo, sống bằng nghề đốn củi.', 'thật thà'],
      ['Ông Bụt', 'but', 'Hiện lên giúp đỡ và thử lòng chàng tiều phu.', 'tốt bụng']
    ],
    pages: [
      ['Chàng tiều phu nghèo', 'rung tieuphu@110:hold=axe tree@230,182,1', 'Ngày xưa có một chàng [[tiều phu]] mồ côi, nhà rất nghèo. [[Gia tài]] của chàng chỉ có một chiếc rìu sắt.'],
      ['Rìu rơi xuống sông', 'water tieuphu@90:wow drops@200,140,1.4 tree@40,140,0.6', 'Một hôm, chàng [[đốn củi]] bên sông. Lưỡi rìu [[tuột tay]] văng xuống dòng nước sâu. Chàng hoảng hốt nhìn theo.'],
      ['Bụt hiện lên', 'water tieuphu@100:sit:cry but@230', 'Chàng ngồi khóc: “Mất rìu rồi, mình lấy gì kiếm sống?” Ông Bụt hiện lên hỏi chuyện, rồi lặn xuống sông tìm giúp.'],
      ['Lưỡi rìu vàng', 'water tieuphu@90 but@220:hold=axe:holdC=gold sparkle@262,80', 'Bụt mang lên một lưỡi rìu bằng vàng sáng lóa: “Có phải rìu của con không?” Chàng [[lắc đầu]]: “Không phải của con ạ.”'],
      ['Lưỡi rìu bạc', 'water tieuphu@90 but@220:hold=axe:holdC=silver sparkle@262,80', 'Bụt lại lặn xuống, mang lên một lưỡi rìu bằng bạc. Chàng vẫn lắc đầu: “Cũng không phải của con ạ.”'],
      ['Lưỡi rìu sắt', 'water tieuphu@90:happy:up but@220:hold=axe', 'Lần thứ ba, Bụt mang lên một lưỡi rìu sắt. Chàng [[mừng rỡ]] reo lên: “Đúng rồi! Đây mới là rìu của con!”'],
      ['Phần thưởng', 'rung tieuphu@90:happy axe@160,186:c=gold axe@200,186:c=silver axe@240,186 but@286,186,0.95', 'Bụt khen: “Con thật là người [[thật thà]]!” Rồi Bụt tặng chàng cả ba lưỡi rìu làm [[phần thưởng]].', 'Thật thà lúc nào cũng đáng quý các bạn nhỉ!']
    ],
    words: {
      'tiều phu': ['người làm nghề đốn củi trong rừng', 'woodcutter'],
      'gia tài': ['tất cả của cải mình có', 'all one\'s possessions'],
      'đốn củi': ['chặt cây, cành để làm củi đun bếp', 'to chop firewood'],
      'tuột tay': ['không cầm chắc nên bị rơi ra', 'to slip out of one\'s hand'],
      'lắc đầu': ['quay đầu sang hai bên để nói “không”', 'to shake one\'s head'],
      'mừng rỡ': ['rất vui mừng', 'overjoyed'],
      'thật thà': ['ngay thẳng, không nói dối', 'honest'],
      'phần thưởng': ['món quà tặng cho người làm việc tốt', 'reward']
    },
    msg: 'Thật thà là đức tính quý giá. Người thật thà luôn được mọi người tin yêu và quý trọng.',
    msgEn: 'Honesty is precious. Honest people are trusted and loved.',
    saying: ['Thật thà là cha quỷ quái.', 'Sự thật thà thắng được mọi mưu mẹo.'],
    quiz: [
      ['Lưỡi rìu của chàng tiều phu làm bằng gì?', ['Sắt', 'Vàng', 'Bạc'], 0, 'Gia tài của chàng chỉ có một chiếc rìu sắt.'],
      ['Vì sao Bụt tặng chàng cả ba lưỡi rìu?', ['Vì chàng thật thà', 'Vì chàng khóc to', 'Vì chàng xin Bụt'], 0, 'Chàng không nhận rìu vàng, rìu bạc không phải của mình.'],
      ['Em nhặt được một chiếc bút đẹp không phải của mình trong lớp. Em làm gì?', ['Đưa cô giáo để trả lại bạn', 'Giữ lấy dùng', 'Vứt đi'], 0, 'Trả lại đồ cho người mất là việc làm thật thà.']
    ],
    think: ['Nếu là chàng tiều phu, các bạn có nhận chiếc rìu vàng không? Vì sao?', 'Kể về một lần các bạn đã nói thật dù hơi khó.']
  });

  T({
    id: 13, title: 'Thầy bói xem voi', genre: 'Ngụ ngôn',
    cover: 'meadow elephant@170,186,1.5 thay@60,186,0.9:point thay@280,186,0.9',
    hook: 'Năm ông thầy bói chưa bao giờ nhìn thấy con voi. Mỗi ông sờ một chỗ rồi tả con voi khác hẳn nhau. Các bạn nghe xem ai đúng nhé!',
    en: 'Five blind men each touch a different part of an elephant and argue about what an elephant looks like. None of them sees the whole animal.',
    chars: [
      ['Các ông thầy bói', 'thay', 'Năm ông thầy bói mù, ông nào cũng nghĩ mình hiểu biết nhất.', 'chủ quan'],
      ['Con voi', 'elephant', 'Con vật to lớn, có vòi dài, tai to, chân như cột.', 'hiền lành'],
      ['Người quản voi', 'nd', 'Người chăm sóc con voi.', 'kiên nhẫn']
    ],
    pages: [
      ['Năm ông thầy bói', 'lang thay@50,186,0.85 thay@110,186,0.85 thay@170,186,0.85 thay@230,186,0.85 thay@290,186,0.85', 'Có năm ông [[thầy bói]] mù ngồi nói chuyện với nhau. Các ông chưa bao giờ biết [[hình thù]] con voi ra sao.'],
      ['Được xem voi', 'meadow nd@50 elephant@180,186,1.5 thay@290,186,0.85:wow', 'Nghe nói có voi đi qua, các ông góp tiền nhờ người quản voi cho xem. Vì không nhìn thấy, mỗi ông [[sờ]] một [[bộ phận]] của con voi.'],
      ['Sờ vòi, sờ ngà', 'meadow elephant@150,186,1.5 thay@250,186,0.85:point say@112,26=Sun_sun_như_con_đỉa!', 'Ông sờ vòi nói: “Con voi sun sun như con đỉa.” Ông sờ ngà nói: “Không phải! Nó chần chẫn như cái đòn càn.”'],
      ['Sờ tai', 'meadow elephant@150,186,1.5 thay@60,186,0.85:point say@20,26=Bè_bè_như_cái_quạt!', 'Ông sờ tai cãi: “Đâu có! Nó bè bè như cái quạt thóc.”'],
      ['Sờ chân, sờ đuôi', 'meadow elephant@170,186,1.5 thay@80,186,0.85 thay@280,186,0.85 say@14,26=Như_cái_cột_đình!', 'Ông sờ chân bảo: “Nó sừng sững như cái [[cột đình]].” Ông sờ đuôi lại nói: “Nó tun tủn như cái chổi sể cùn.”'],
      ['Cãi nhau ầm ĩ', 'lang thay@60,186,0.9:angry thay@130,186,0.9:angry thay@200,186,0.9:angry thay@270,186,0.9:angry', 'Ông nào cũng cho là mình đúng, không ai chịu nghe ai. Năm ông [[cãi nhau]] ầm ĩ cả một góc chợ.'],
      ['Nhìn cả con voi', 'meadow elephant@200,186,1.4 nd@80:happy thay@290,186,0.8:wow', 'Người quản voi cười bảo: “Các ông ai cũng chỉ sờ một phần. Muốn biết con voi, phải xem [[toàn bộ]] cả con!”', 'Mỗi ông đúng một chút, nhưng chưa ai đúng hết các bạn ạ!']
    ],
    words: {
      'thầy bói': ['người ngày xưa làm nghề đoán chuyện tương lai', 'fortune teller'],
      'hình thù': ['dáng vẻ, hình dạng bên ngoài', 'shape, form'],
      'sờ': ['dùng tay chạm vào để biết', 'to touch, to feel'],
      'bộ phận': ['một phần của cả một vật', 'a part'],
      'cột đình': ['cây cột to, chắc chắn ở ngôi đình làng', 'a big pillar of the village temple'],
      'cãi nhau': ['nói to, tranh nhau cho mình là đúng', 'to argue'],
      'toàn bộ': ['tất cả, cả cái', 'the whole']
    },
    msg: 'Muốn hiểu đúng một việc, phải xem xét toàn bộ, đừng chỉ nhìn một phần. Hãy lắng nghe ý kiến của người khác.',
    msgEn: 'To understand something, look at the whole picture, not just one part — and listen to others.',
    saying: ['Trăm nghe không bằng một thấy.', 'Tự mình nhìn tận mắt thì hiểu rõ hơn nghe kể nhiều lần.'],
    quiz: [
      ['Ông sờ vòi nói con voi giống gì?', ['Con đỉa', 'Cái quạt thóc', 'Cái cột đình'], 0, 'Vòi voi mềm và dài, sun sun như con đỉa.'],
      ['Vì sao năm ông thầy bói cãi nhau?', ['Vì ai cũng chỉ sờ một phần mà cho mình đúng', 'Vì con voi chạy mất', 'Vì trời mưa'], 0, 'Không ai biết toàn bộ con voi.'],
      ['Em và bạn tranh luận về một bức tranh, mỗi người chỉ nhìn thấy một nửa. Em nên làm gì?', ['Cùng xem cả bức tranh và nghe nhau nói', 'Cãi đến khi bạn chịu thua', 'Bỏ về'], 0, 'Xem toàn bộ và lắng nghe sẽ hiểu đúng.']
    ],
    think: ['Vì sao ông thầy bói nào cũng nghĩ mình đúng?', 'Có khi nào các bạn hiểu lầm một chuyện vì chỉ biết một phần chưa? Kể lại nhé.']
  });

  T({
    id: 14, title: 'Ếch ngồi đáy giếng', genre: 'Ngụ ngôn',
    cover: 'gieng frog@160,186,1.6 crab@250,190,0.8 snail@70,190,0.9',
    hook: 'Có một bạn ếch sống trong giếng lâu đến nỗi tưởng bầu trời chỉ bé bằng cái vung. Ở cuối truyện có một bạn trâu xuất hiện đấy, các bạn chú ý nhé!',
    en: 'A frog living at the bottom of a well thinks the sky is as small as a pot lid and that he is the king of everything.',
    chars: [
      ['Con ếch', 'frog', 'Sống lâu ngày trong giếng, tưởng mình là chúa tể.', 'kiêu ngạo'],
      ['Cua, ốc, nhái', 'crab', 'Những con vật nhỏ bé sống trong giếng.', 'nhút nhát'],
      ['Chú trâu', 'buffalo', 'Đi ngang qua cánh đồng.', 'to khỏe']
    ],
    pages: [
      ['Trong giếng sâu', 'gieng frog@160,186,1.5 crab@250,190,0.8 snail@70,190,0.9', 'Có một con ếch sống lâu ngày trong một cái giếng. Xung quanh ếch chỉ có vài con nhái, con cua, con ốc bé nhỏ.'],
      ['Ếch kêu ồm ộp', 'gieng frog@160,186,1.5 crab@250,190,0.8 snail@70,190,0.9 say@178,70=Ồm_ộp!', 'Hằng ngày ếch cất tiếng kêu “ồm ộp” làm vang động cả giếng. Các con vật kia sợ lắm. Ếch tưởng mình là [[chúa tể]].'],
      ['Bầu trời bằng cái vung', 'gieng frog@160,186,1.5 say@200,30=Trời_bé_tí!', 'Ếch nhìn lên miệng giếng, thấy bầu trời tròn tròn, bé tí. Ếch nghĩ: “Bầu trời chỉ to bằng cái [[vung]] thôi.”'],
      ['Mưa to', 'bao frog@160,150,1.3 rain@160,30', 'Một năm, trời mưa to. Nước trong giếng [[dềnh lên]], tràn ra ngoài, đưa ếch lên khỏi miệng giếng.'],
      ['Ra ngoài giếng', 'meadow frog@120,186,1.4 sun@270,36 cloud@60,40 flower@240,186:c=yellow', 'Ra ngoài, ếch vẫn quen thói cũ. Ếch đi lại [[nghênh ngang]], mắt nhìn lên trời, chẳng thèm để ý đến xung quanh.'],
      ['Suýt bị giẫm phải', 'meadow frog@110,186,1.2 buffalo@220,184,1.3:f say@40,40=Ối,_sợ_quá!', 'Một chú trâu đi qua. Ếch không chịu tránh. May mà chú trâu dừng chân kịp, ếch suýt nữa bị giẫm bẹp. Ếch sợ hết hồn!', 'May quá, bạn trâu đã kịp dừng chân!'],
      ['Thế giới rộng lớn', 'nui frog@100,186,1.2 bird@200,80 bird@240,60,0.8:c=yellow sun@280,36 buffalo@250,184,0.8:eat', 'Từ hôm ấy, ếch hiểu rằng thế giới rộng lớn lắm. Mình còn nhỏ bé, còn phải [[học hỏi]] nhiều để thêm [[hiểu biết]].']
    ],
    words: {
      'chúa tể': ['kẻ đứng đầu, có quyền nhất', 'ruler, the boss'],
      'vung': ['cái nắp đậy nồi', 'pot lid'],
      'dềnh lên': ['nước dâng cao lên', '(water) to rise up'],
      'nghênh ngang': ['đi lại ra vẻ ta đây, không nhường ai', 'to swagger'],
      'học hỏi': ['tìm hiểu, học thêm từ người khác', 'to learn from others'],
      'hiểu biết': ['những điều mình biết và hiểu', 'knowledge']
    },
    msg: 'Thế giới rất rộng lớn. Đừng vội cho mình là giỏi nhất, hãy luôn khiêm tốn và học hỏi thêm.',
    msgEn: 'The world is huge. Don\'t think you know everything — stay humble and keep learning.',
    saying: ['Biết thì thưa thốt, không biết thì dựa cột mà nghe.', 'Biết thì nói, chưa biết thì lắng nghe để học.'],
    quiz: [
      ['Ếch nghĩ bầu trời to bằng cái gì?', ['Cái vung', 'Cả cánh đồng', 'Một ngọn núi'], 0, 'Ở dưới đáy giếng, ếch chỉ thấy một khoảng trời nhỏ.'],
      ['Vì sao ếch ra được khỏi giếng?', ['Mưa to, nước dềnh lên', 'Ếch nhảy thật cao', 'Có người bế ra'], 0, 'Nước mưa tràn lên đưa ếch ra ngoài.'],
      ['Em vừa giải được bài toán khó và nghĩ mình giỏi nhất lớp. Em nên nghĩ thế nào?', ['Vui, nhưng vẫn tiếp tục học hỏi', 'Không cần học nữa', 'Chê các bạn kém'], 0, 'Luôn còn nhiều điều để học.']
    ],
    think: ['Cái giếng của ếch giống với điều gì trong cuộc sống của chúng mình?', 'Các bạn muốn đi đến đâu hay học điều gì để biết thêm về thế giới?']
  });

  T({
    id: 15, title: 'Sự tích chú Cuội cung trăng', genre: 'Cổ tích',
    cover: 'trang bigmoon@170,92,1.3 trai@60:hold=torch gai@280:happy lantern@230,120',
    hook: 'Đêm Trung thu, nhìn lên Mặt Trăng các bạn thấy bóng cây đa và chú Cuội không? Mình kể cho các bạn nghe vì sao chú Cuội lại ở trên đó nhé!',
    en: 'Cuội finds a magic banyan tree whose leaves heal the sick. When the tree is watered with dirty water, it flies up to the moon — with Cuội holding on.',
    cast: { cuoi: 'p:hair=boy,shirt=leaf,pants=ink', vo: 'p:hair=bun,shirt=peach,robe,belt=wood' },
    chars: [
      ['Chú Cuội', 'cuoi', 'Người tiều phu tốt bụng, dùng lá cây đa thần cứu người.', 'tốt bụng'],
      ['Vợ chú Cuội', 'vo', 'Hay quên, lỡ quên mất lời chồng dặn.', 'đãng trí'],
      ['Cây đa thần', 'banyan:glow', 'Cây đa có lá chữa được bệnh.', 'kỳ diệu']
    ],
    pages: [
      ['Hổ con bị thương', 'rung banyan@220,186,0.9 tiger@120,186,0.55:sad cuoi@40', 'Ngày xưa, chú Cuội làm nghề đốn củi. Một hôm vào rừng, Cuội thấy một chú hổ con [[bị thương]] nằm dưới gốc [[cây đa]].'],
      ['Lá cây thần', 'rung banyan@220,186,0.9 tiger@140,186,0.9 tiger@80,186,0.55 cuoi@290,186,0.9:wow', 'Hổ mẹ chạy đến, hái lá cây đa nhai rồi đắp cho con. Lạ thay, hổ con khỏe lại ngay. Cuội nấp sau bụi cây, ngạc nhiên lắm.'],
      ['Cứu người', 'vuon banyan@210,186,0.9:glow cuoi@90:happy ong@140:happy', 'Chờ hổ đi xa, Cuội đào cây đa mang về trồng ở góc vườn. Chú dùng lá cây [[chữa bệnh]] cứu được rất nhiều người.'],
      ['Lời dặn', 'vuon banyan@220,186,0.9:glow cuoi@80:point vo@150', 'Cuội dặn vợ: “Nàng nhớ chỉ tưới cây bằng nước sạch. Nếu tưới nước bẩn, cây sẽ bay lên trời đấy!”'],
      ['Quên lời dặn', 'vuon banyan@200,150,0.9:glow vo@80:wow sparkle@120,60', 'Một hôm, vợ Cuội quên mất [[lời dặn]], đổ nước bẩn vào gốc cây. Cây đa bỗng rung rinh, [[bật gốc]] rồi từ từ bay lên.'],
      ['Níu cây lại', 'sky cloud@60,170 cloud@260,160 banyan@170,110,0.8:glow cuoi@168,196,0.75:up', 'Cuội về vừa kịp, nhảy lên túm lấy rễ cây, cố kéo xuống. Nhưng cây cứ bay lên, bay lên mãi.'],
      ['Lên cung trăng', 'trang bigmoon@160,96,1.4', 'Cây đa bay lên tận [[cung trăng]], mang theo cả chú Cuội. Từ đó, chú Cuội ngồi dưới gốc đa trên Mặt Trăng.'],
      ['Đêm Trung thu', 'trang bigmoon@240,70,0.8 trai@70:hold=torch gai@150:happy lantern@200,140', 'Mỗi dịp Tết Trung thu, các bạn nhỏ [[rước đèn]], ngắm trăng. Nhìn lên Mặt Trăng, ai cũng thấy bóng cây đa và chú Cuội.', 'Trung thu này các bạn nhìn kỹ Mặt Trăng xem có thấy chú Cuội không nhé!']
    ],
    words: {
      'bị thương': ['bị đau, bị chảy máu ở trên người', 'injured'],
      'cây đa': ['cây to, nhiều rễ phụ, hay trồng ở đầu làng', 'banyan tree'],
      'chữa bệnh': ['làm cho người ốm khỏe lại', 'to cure illness'],
      'lời dặn': ['điều người khác nhắc mình nhớ làm', 'instructions, advice'],
      'bật gốc': ['cả gốc rễ bị nhổ lên khỏi đất', 'uprooted'],
      'cung trăng': ['Mặt Trăng, theo cách gọi trong truyện', 'the Moon palace'],
      'rước đèn': ['cầm đèn lồng đi thành hàng vào đêm Trung thu', 'to parade with lanterns']
    },
    msg: 'Hãy nhớ và làm theo lời dặn của người thân. Giúp đỡ người ốm đau là việc làm rất đáng quý.',
    msgEn: 'Remember what your family asks you to do. Helping people who are sick is a wonderful thing.',
    saying: ['Thằng Cuội ngồi gốc cây đa, để trâu ăn lúa, gọi cha ời ời.', 'Câu ca dao vui về chú Cuội trên cung trăng, có cả bạn trâu nữa!'],
    quiz: [
      ['Chú Cuội dùng lá cây đa để làm gì?', ['Chữa bệnh cứu người', 'Gói bánh', 'Làm quạt'], 0, 'Lá cây đa thần chữa được bệnh.'],
      ['Vì sao cây đa bay lên trời?', ['Vợ Cuội quên lời dặn, tưới nước bẩn', 'Gió to thổi bay', 'Cuội muốn lên trăng chơi'], 0, 'Cây đa thần chỉ được tưới nước sạch.'],
      ['Mẹ dặn em tắt bếp khi nước sôi, nhưng em đang mải xem phim. Em làm gì?', ['Nhớ lời mẹ, tắt bếp ngay', 'Xem hết phim đã', 'Quên luôn'], 0, 'Nhớ lời dặn giúp cả nhà an toàn.']
    ],
    think: ['Nếu có cây đa thần, các bạn sẽ dùng lá cây để giúp ai?', 'Gia đình các bạn đón Tết Trung thu như thế nào?']
  });

  T({
    id: 16, title: 'Cóc kiện Trời', genre: 'Cổ tích',
    cover: 'troi toad@70,186,1.2 crab@130,188,0.8 bear@190,186,0.8 tiger@262,186,0.7 bee@300,90',
    hook: 'Một bạn cóc bé xíu dám lên tận nhà Trời để kiện! Các bạn đoán xem cóc có thắng không nhé?',
    en: 'During a long drought, a little toad leads a team of animals to Heaven to ask the Jade Emperor for rain — and wins!',
    cast: { vuatroi: 'p:hair=grandpa,beard=long,crown,shirt=yellow,robe,belt=red,glow', thansam: 'p:hair=top,helmet,shirt=plum,robe,belt=gold,face=angry' },
    chars: [
      ['Cóc', 'toad', 'Nhỏ bé nhưng gan dạ và thông minh.', 'dũng cảm, nhanh trí'],
      ['Các bạn của Cóc', 'bear', 'Cua, Gấu, Cọp, Ong và Cáo cùng đi với Cóc.', 'đoàn kết'],
      ['Ngọc Hoàng', 'vuatroi', 'Vua trên trời, lo việc mưa nắng.', 'biết lắng nghe'],
      ['Thần Sét', 'thansam', 'Vị thần giữ việc làm sấm sét.', 'nóng nảy']
    ],
    pages: [
      ['Trời hạn hán', 'han sun@160,40,1.6 toad@100,186,1.1 grass@220,186 grass@260,176', 'Có một năm, trời [[hạn hán]] rất lâu. Ruộng đồng [[nứt nẻ]], cây cỏ héo khô, [[muôn loài]] khát nước.'],
      ['Lên đường', 'duong toad@60,186,1 crab@110,188,0.7 bear@170,186,0.75 tiger@250,186,0.65 bee@290,90 fox@300,186,0.6:f', 'Cóc quyết định lên thiên đình [[kiện]] Trời. Dọc đường, Cua, Gấu, Cọp, Ong và Cáo xin đi cùng.'],
      ['Kế hoạch của Cóc', 'troi toad@160,186,1.2 bee@240,80 crab@80,190,0.8 say@150,40=Tùng!_Tùng!_Tùng!', 'Đến cửa nhà Trời, Cóc bảo Cua [[nấp]] trong chum nước, Ong nấp sau cánh cửa, Cáo, Gấu, Cọp nấp hai bên. Rồi Cóc đánh ba hồi trống thật to.'],
      ['Gà và Chó', 'troi rooster@90,186,1.1:f fox@150,186,0.9 dog@230,186,1:f bear@290,186,0.8', 'Trời sai Gà ra mổ Cóc, Cáo nhảy ra đuổi Gà. Trời sai Chó ra, Gấu chặn Chó lại.'],
      ['Thần Sét', 'troi thansam@160 bee@210,80 bee@120,60,0.8 crab@70,190,0.8', 'Trời sai Thần Sét ra. Ong bay ra đốt, Thần Sét nhảy vào chum nước thì bị Cua kẹp, vừa chạy ra lại gặp Cọp. Thần Sét đành chịu thua.'],
      ['Cóc gặp Trời', 'troi vuatroi@210 toad@100,186,1.2', 'Trời phải mời Cóc vào hỏi chuyện. Cóc thưa: “Đã lâu trời không mưa, muôn loài khổ lắm. Xin Trời làm mưa ngay cho.”'],
      ['Lời hứa của Trời', 'troi vuatroi@210:happy toad@100,186,1.2:happy say@150,30=Cứ_nghiến_răng_nhé!', 'Trời hứa làm mưa ngay, lại dặn: “Lần sau muốn mưa, cậu Cóc chỉ cần [[nghiến răng]] là ta cho mưa xuống.”'],
      ['Mưa xuống rồi!', 'lua cloudd@80,40 cloudd@240,36 rain@160,60 toad@90,186,1.2:happy nd@220:happy', 'Cóc về đến nơi thì mưa đã xuống ào ào. Ruộng đồng lại xanh tươi. Ai cũng cảm ơn Cóc. Muôn loài [[đoàn kết]] thì việc khó mấy cũng làm được.']
    ],
    words: {
      'hạn hán': ['trời lâu ngày không mưa, thiếu nước', 'drought'],
      'nứt nẻ': ['đất khô quá nên bị nứt ra thành đường', 'cracked (dry ground)'],
      'muôn loài': ['tất cả các loài vật, cây cỏ', 'all creatures'],
      'kiện': ['đến nơi có quyền để xin phân xử đúng sai', 'to file a complaint'],
      'nấp': ['trốn vào chỗ kín để người khác không thấy', 'to hide'],
      'nghiến răng': ['cắn chặt răng, cọ hai hàm răng vào nhau', 'to grind one\'s teeth'],
      'đoàn kết': ['cùng nhau một lòng làm việc chung', 'to unite, stand together']
    },
    msg: 'Nhỏ bé nhưng dũng cảm, biết đoàn kết và có kế hoạch thì làm được việc lớn. Hãy dám lên tiếng vì điều tốt cho mọi người.',
    msgEn: 'Even small ones can do big things with courage, teamwork and a good plan. Speak up for the good of everyone.',
    saying: ['Con cóc là cậu ông Trời, hễ ai đánh nó thì Trời đánh cho.', 'Người xưa quý con cóc vì cóc nghiến răng là trời sắp mưa.'],
    quiz: [
      ['Vì sao Cóc lên kiện Trời?', ['Vì trời hạn hán lâu ngày', 'Vì Cóc muốn làm vua', 'Vì Cóc buồn chán'], 0, 'Muôn loài khát nước nên Cóc đi xin mưa.'],
      ['Ai đuổi Gà khi Trời sai Gà ra mổ Cóc?', ['Cáo', 'Cua', 'Ong'], 0, 'Cóc đã chia việc cho từng bạn.'],
      ['Lớp em muốn nhà trường lắp thêm vòi nước uống. Cách nào tốt nhất?', ['Cả lớp cùng bàn, nhờ cô giáo giúp viết thư đề nghị', 'Một mình la hét', 'Không làm gì'], 0, 'Cùng nhau lên tiếng đúng cách sẽ được lắng nghe.']
    ],
    think: ['Cóc nhỏ bé mà vẫn thắng. Theo các bạn, nhờ đâu?', 'Các bạn muốn lên tiếng giúp điều gì cho trường học hay khu phố của mình?']
  });

  T({
    id: 17, title: 'Sự tích Hồ Gươm', genre: 'Truyền thuyết',
    cover: 'ho tower@170,160,0.9 goldturtle@90,176,1.4 sword@250,170,0.7:glow:r=10',
    hook: 'Giữa Thủ đô Hà Nội có một cái hồ rất đẹp tên là Hồ Gươm. Vì sao hồ lại có tên như vậy? Các bạn cùng mình nghe chuyện thanh gươm thần nhé!',
    en: 'The Dragon King lends hero Lê Lợi a magic sword to free the country. After the victory, a Golden Turtle comes to take the sword back in a Hà Nội lake.',
    cast: { leloi: 'p:hair=top,helmet,armor,shirt=red,pants=ink', vualeloi: 'p:hair=top,crown,beard=short,beardC=ink,shirt=yellow,robe,belt=red', lethan: 'p:hair=boy,hat,shirt=wood,pants=ink' },
    chars: [
      ['Lê Lợi', 'leloi', 'Người lãnh đạo nghĩa quân Lam Sơn, sau làm vua.', 'yêu nước'],
      ['Lê Thận', 'lethan', 'Người đánh cá, kéo lưới được lưỡi gươm thần.', 'thật thà'],
      ['Long Quân', 'dragon@160,150', 'Vị thần cho nghĩa quân mượn gươm thần.', 'giúp dân'],
      ['Rùa Vàng', 'goldturtle', 'Sứ giả của Long Quân, đến đòi lại gươm.', 'hiền hòa']
    ],
    pages: [
      ['Đất nước khổ cực', 'nui leloi@120 linh@200 linh@262', 'Ngày xưa, giặc Minh [[đô hộ]] nước ta, dân chúng khổ cực. Ở Lam Sơn, Lê Lợi dựng cờ [[khởi nghĩa]], nhưng lúc đầu [[nghĩa quân]] còn yếu.'],
      ['Long Quân giúp sức', 'under dragon@170,130,1 sword@270,170,0.8:glow', 'Thấy vậy, Đức Long Quân dưới thủy cung quyết định cho nghĩa quân mượn thanh [[gươm]] thần để đánh giặc.'],
      ['Ba lần kéo lưới', 'water lethan@100:hold=net sword@220,170,0.8:glow:r=70', 'Ở vùng biển, người đánh cá Lê Thận ba lần kéo lưới đều được cùng một thanh sắt. Nhìn kỹ, đó là một lưỡi gươm có hai chữ “Thuận Thiên”.'],
      ['Lưỡi gươm sáng rực', 'room lethan@90 leloi@180:wow sword@262,186,0.7:glow', 'Lê Thận vào nghĩa quân. Một hôm Lê Lợi đến nhà Lê Thận, thấy lưỡi gươm trong góc nhà bỗng sáng rực lên.'],
      ['Chuôi gươm trên cây đa', 'rung banyan@200,186,0.9:glow leloi@80:wow', 'Ít lâu sau, Lê Lợi đi qua khu rừng, thấy ánh sáng trên ngọn cây đa. Đó là một [[chuôi gươm]] nạm ngọc. Tra vào lưỡi gươm, vừa như in.'],
      ['Đánh tan giặc', 'nui horse@150,180,1.2 leloi@154,134,0.6:sit:hold=sword linh@260', 'Có gươm thần, nghĩa quân đánh đâu thắng đó. Cuối cùng, giặc Minh bị đuổi sạch khỏi bờ cõi. Lê Lợi lên làm vua.'],
      ['Rùa Vàng nổi lên', 'ho boat@130,168,1.1 vualeloi@130,156,0.55 goldturtle@240,170,1.3', 'Một năm sau, vua đi thuyền dạo chơi trên hồ Tả Vọng. Bỗng một con Rùa Vàng nổi lên: “Bệ hạ hãy [[hoàn]] gươm lại cho Long Quân!”'],
      ['Hồ Hoàn Kiếm', 'ho tower@170,160,0.9 goldturtle@80,176,1.2 sword@96,150,0.5:glow:r=80', 'Vua trao gươm, Rùa Vàng ngậm gươm [[lặn]] xuống nước. Từ đó, hồ được gọi là Hồ Hoàn Kiếm, hay Hồ Gươm.', 'Các bạn về Hà Nội nhớ ghé thăm Hồ Gươm và Tháp Rùa nhé!']
    ],
    words: {
      'đô hộ': ['nước khác sang chiếm và cai trị nước mình', 'to rule over (a conquered country)'],
      'khởi nghĩa': ['nhân dân đứng lên chống lại kẻ đô hộ', 'uprising'],
      'nghĩa quân': ['quân đội của cuộc khởi nghĩa', 'rebel army'],
      'gươm': ['vũ khí dài, sắc, ngày xưa dùng để đánh trận', 'sword'],
      'chuôi gươm': ['chỗ cầm tay của thanh gươm', 'sword hilt'],
      'hoàn': ['trả lại', 'to return, give back'],
      'lặn': ['đi xuống dưới mặt nước', 'to dive']
    },
    msg: 'Lòng yêu nước và sự đồng lòng của nhân dân giúp đất nước chiến thắng. Mượn của ai thì phải trả lại.',
    msgEn: 'Love for the country and people working together bring victory. What you borrow, you must give back.',
    saying: ['Có vay có trả.', 'Mượn của ai thì phải trả lại đầy đủ.'],
    quiz: [
      ['Lê Thận tìm được lưỡi gươm ở đâu?', ['Trong lưới đánh cá', 'Trên ngọn cây đa', 'Trong hang núi'], 0, 'Ba lần kéo lưới đều được lưỡi gươm.'],
      ['Vì sao hồ có tên là Hồ Hoàn Kiếm?', ['Vì vua trả gươm thần cho Rùa Vàng ở đây', 'Vì có nhiều gươm dưới hồ', 'Vì hồ có hình thanh gươm'], 0, '“Hoàn kiếm” nghĩa là trả lại gươm.'],
      ['Em mượn bút màu của bạn. Dùng xong em làm gì?', ['Trả lại bạn và cảm ơn', 'Giữ luôn', 'Cho người khác'], 0, 'Mượn thì phải trả, như vua Lê Lợi trả gươm.']
    ],
    think: ['Vì sao Long Quân cho nghĩa quân mượn gươm thần?', 'Nếu được đến Hồ Gươm, các bạn muốn xem gì nhất?']
  });

  T({
    id: 18, title: 'Sự tích cây vú sữa', genre: 'Cổ tích',
    cover: 'vuon vusua@180,186,1.3 trai@100:happy heart@240,60',
    hook: 'Câu chuyện hôm nay hơi buồn một chút nhưng rất ấm áp, về một cậu bé và người mẹ luôn chờ con về. Các bạn nghe thật chậm nhé.',
    en: 'A boy runs away after being scolded. His mother waits and waits. When he returns, he finds a tree whose fruit tastes like mother\'s milk.',
    chars: [
      ['Cậu bé', 'trai', 'Ham chơi, bỏ nhà đi khi bị mẹ mắng.', 'ham chơi, biết hối hận'],
      ['Người mẹ', 'me', 'Thương con, ngày ngày ngóng con về.', 'thương con'],
      ['Cây vú sữa', 'vusua', 'Cây có quả ngọt như sữa mẹ.', 'ấm áp']
    ],
    pages: [
      ['Cậu bé ham chơi', 'lang me@100:sad trai@210:angry:run', 'Ngày xưa có một cậu bé rất [[ham chơi]]. Một lần bị mẹ mắng, cậu [[vùng vằng]] bỏ đi.'],
      ['Mẹ ngóng con', 'duong me@200:sad tree@70,182,0.8', 'Cậu [[la cà]] khắp nơi, mãi không chịu về. Ở nhà, ngày nào mẹ cũng ra đầu ngõ [[ngóng]] con.'],
      ['Mẹ chờ mãi', 'vuon vusua@170,186,1 sparkle@120,60 sparkle@230,70', 'Mẹ chờ con mãi, chờ mãi. Rồi một ngày, ngay ở chỗ mẹ hay đứng chờ, mọc lên một cây xanh lạ.'],
      ['Cậu bé nhớ nhà', 'duong trai@150:cry rain@160,20 cloudd@160,30', 'Cậu bé đi mãi, vừa đói vừa rét, lại bị các bạn lớn hơn bắt nạt. Cậu nhớ mẹ quá, liền tìm đường về nhà.'],
      ['Gọi mẹ', 'vuon vusua@200,186,1.1 trai@110:cry', 'Về đến nhà, cậu không thấy mẹ đâu. Cậu gọi mẹ đến [[khản tiếng]], rồi ôm lấy cây xanh trong vườn mà khóc.'],
      ['Cây trổ hoa', 'vuon vusua@190,186,1.1 sparkle@150,50 sparkle@240,60 flower@120,186:c=white trai@70:wow', 'Kỳ lạ thay, cây xanh run rẩy. Những đài hoa bé tí [[trổ]] ra, nở trắng như mây. Hoa rụng, quả xuất hiện, lớn dần.'],
      ['Dòng sữa ngọt', 'vuon vusua@200,186,1.1 trai@110:happy drops@150,120,0.8', 'Một quả rơi vào tay cậu. Cậu cắn một miếng, dòng sữa trắng ngọt thơm trào ra, như sữa của mẹ.'],
      ['Cây vú sữa', 'vuon vusua@160,186,1.4 trai@160:pray heart@250,60', 'Lá cây một mặt xanh, một mặt đỏ hoe như mắt mẹ khóc chờ con. Cậu bé òa khóc, [[hối hận]]. Cây xòa cành ôm cậu, [[âu yếm]] như tay mẹ. Người ta gọi đó là cây vú sữa.', 'Các bạn nhớ ôm bố mẹ thật chặt hôm nay nhé!']
    ],
    words: {
      'ham chơi': ['chỉ thích chơi, quên cả việc khác', 'too fond of playing'],
      'vùng vằng': ['giận dỗi, tỏ ra không bằng lòng', 'sulky, in a huff'],
      'la cà': ['đi chỗ này chỗ kia, không về', 'to wander around'],
      'ngóng': ['mong và nhìn về phía người mình chờ', 'to wait and watch for someone'],
      'khản tiếng': ['giọng bị khàn vì gọi quá nhiều', 'hoarse from shouting'],
      'trổ': ['mọc ra, nở ra (hoa, lá, quả)', 'to sprout, bloom'],
      'hối hận': ['buồn và tiếc vì việc sai mình đã làm', 'to regret'],
      'âu yếm': ['dịu dàng, đầy yêu thương', 'tenderly, lovingly']
    },
    msg: 'Cha mẹ luôn thương yêu và chờ đợi chúng mình. Hãy biết vâng lời và đừng để cha mẹ phải buồn, phải lo.',
    msgEn: 'Our parents always love us and wait for us. Listen to them and don\'t make them worry.',
    saying: ['Công cha như núi Thái Sơn, nghĩa mẹ như nước trong nguồn chảy ra.', 'Công ơn cha mẹ to lớn như núi, như nguồn nước không bao giờ cạn.'],
    quiz: [
      ['Vì sao cậu bé bỏ nhà đi?', ['Bị mẹ mắng vì ham chơi', 'Muốn đi học xa', 'Đi tìm bạn'], 0, 'Cậu vùng vằng bỏ đi khi bị mắng.'],
      ['Lá cây vú sữa giống điều gì?', ['Đôi mắt mẹ khóc chờ con', 'Bàn tay của cậu bé', 'Bầu trời xanh'], 0, 'Mặt lá đỏ hoe như mắt mẹ.'],
      ['Mẹ nhắc em đi ngủ sớm, em đang muốn chơi thêm. Em làm gì?', ['Nghe lời mẹ, mai chơi tiếp', 'Giận dỗi, đóng sập cửa', 'Bỏ ra ngoài'], 0, 'Vâng lời mẹ là cách thể hiện tình thương.']
    ],
    think: ['Các bạn sẽ nói gì với mẹ nếu lỡ làm mẹ buồn?', 'Hãy viết một điều các bạn muốn cảm ơn bố mẹ.']
  });

  T({
    id: 19, title: 'Sự tích hoa cúc trắng', genre: 'Cổ tích',
    cover: 'vuon daisy@80,186,1.2:many daisy@150,186,1:many gai@230:happy:hold=flower',
    hook: 'Các bạn có biết vì sao hoa cúc trắng có rất nhiều cánh nhỏ không? Đó là nhờ một cô bé rất thương mẹ đấy!',
    en: 'A girl learns that her sick mother will live one year for each petal of a white flower. She cleverly splits every petal into many tiny ones.',
    cast: { me: 'p:hair=bun,shirt=peach,robe,belt=wood,face=sad', ongcu: 'p:hair=grandpa,beard=long,shirt=white,robe,belt=straw,hold=stick,glow' },
    chars: [
      ['Cô bé', 'gai', 'Rất thương mẹ, thông minh, can đảm.', 'hiếu thảo'],
      ['Người mẹ', 'me', 'Bị ốm nặng, được con gái hết lòng chăm sóc.', 'hiền hậu'],
      ['Ông cụ', 'ongcu', 'Ông Bụt hóa thành ông cụ, chỉ đường cho cô bé.', 'tốt bụng']
    ],
    pages: [
      ['Mẹ bị ốm', 'room me@210:sit gai@100:sad', 'Ngày xưa có một cô bé sống cùng mẹ. Một hôm, mẹ bị [[ốm nặng]]. Cô bé lo lắng lắm.'],
      ['Gặp ông cụ', 'duong gai@100 ongcu@220', 'Cô bé vội đi tìm [[thầy thuốc]]. Trên đường, cô gặp một ông cụ râu tóc [[bạc phơ]].'],
      ['Lời ông cụ', 'duong ongcu@210:point gai@100:wow', 'Ông cụ bảo: “Con hãy vào rừng tìm một bông hoa trắng. Bông hoa có bao nhiêu [[cánh hoa]], mẹ con sẽ sống thêm bấy nhiêu năm.”'],
      ['Chỉ có năm cánh', 'rung gai@100:sad daisy@210,186,1.3:five', 'Cô bé vào rừng, tìm được bông hoa trắng. Cô đếm: chỉ có năm cánh. “Mẹ chỉ sống thêm được năm năm thôi sao?”'],
      ['Nghĩ ra cách', 'rung gai@100:happy daisy@210,186,1.3:many sparkle@250,60', 'Cô bé nghĩ ra một cách. Cô nhẹ nhàng xé mỗi cánh hoa thành thật nhiều cánh nhỏ, nhiều đến mức không [[đếm xuể]].'],
      ['Mẹ khỏe lại', 'room me@210:happy:sit gai@110:happy:hold=flower heart@160,60', 'Cô bé chạy về nhà. Mẹ đã [[khỏe dần]] lên. Ông cụ hiện ra, khen cô bé là người con [[hiếu thảo]].'],
      ['Hoa cúc trắng', 'vuon daisy@60,186:many daisy@120,186,1.2:many daisy@200,186:many daisy@270,186,1.1:many sun@280,36', 'Bông hoa ấy về sau được gọi là hoa cúc trắng. Hoa có rất nhiều cánh nhỏ, như tấm lòng thương mẹ của cô bé.', 'Lần sau thấy hoa cúc trắng, các bạn thử đếm cánh xem nhé, khó lắm đấy!']
    ],
    words: {
      'ốm nặng': ['bị bệnh rất nặng', 'seriously ill'],
      'thầy thuốc': ['người chữa bệnh, bác sĩ', 'doctor, healer'],
      'bạc phơ': ['trắng hết cả (tóc, râu)', 'completely white (hair)'],
      'cánh hoa': ['từng mảnh nhỏ tạo thành bông hoa', 'petal'],
      'đếm xuể': ['đếm cho hết được (“không đếm xuể” là rất nhiều)', 'to count them all ("countless")'],
      'khỏe dần': ['từ từ khỏe lại', 'to slowly get better'],
      'hiếu thảo': ['thương yêu, kính trọng và chăm sóc cha mẹ', 'devoted to one\'s parents']
    },
    msg: 'Hãy hiếu thảo, yêu thương cha mẹ. Khi gặp khó khăn, hãy bình tĩnh nghĩ cách giải quyết.',
    msgEn: 'Love and care for your parents. When things are hard, stay calm and think of a way.',
    saying: ['Một lòng thờ mẹ kính cha, cho tròn chữ hiếu mới là đạo con.', 'Làm con phải yêu thương, kính trọng cha mẹ.'],
    quiz: [
      ['Bông hoa lúc đầu có mấy cánh?', ['Năm cánh', 'Mười cánh', 'Một trăm cánh'], 0, 'Cô bé đếm được năm cánh.'],
      ['Cô bé làm gì để mẹ sống lâu hơn?', ['Xé mỗi cánh hoa thành nhiều cánh nhỏ', 'Tìm thêm nhiều bông hoa', 'Giấu bông hoa đi'], 0, 'Càng nhiều cánh, mẹ càng sống lâu.'],
      ['Bà bị mệt đang nằm nghỉ. Em có thể làm gì?', ['Rót nước, nói nhỏ nhẹ, hỏi thăm bà', 'Bật nhạc thật to', 'Đòi bà chơi cùng'], 0, 'Chăm sóc người thân khi ốm là hiếu thảo.']
    ],
    think: ['Các bạn đã làm gì khi người thân bị ốm?', 'Vì sao người ta gọi cô bé là người con hiếu thảo?']
  });

  T({
    id: 20, title: 'Thạch Sanh', genre: 'Cổ tích',
    cover: 'rung banyan@240,186,0.9 ts@110:hold=lute notes@170,80 notes@200,60,0.7',
    hook: 'Thạch Sanh là chàng dũng sĩ hiền lành, có cây đàn thần và niêu cơm ăn mãi không hết. Truyện này dài một chút, các bạn cùng mình đọc từ từ nhé!',
    en: 'Brave, kind Thạch Sanh defeats a monster and rescues a princess, but cunning Lý Thông steals the credit — until a magic lute reveals the truth.',
    cast: { ts: 'p:hair=boy,shirt=wood,pants=ink', lt: 'p:hair=top,khan,mus,shirt=yellow,robe,belt=wood' },
    chars: [
      ['Thạch Sanh', 'ts', 'Chàng trai mồ côi, sống dưới gốc đa, có tài võ nghệ.', 'dũng cảm, thật thà, bao dung'],
      ['Lý Thông', 'lt', 'Kẻ bán rượu, kết nghĩa với Thạch Sanh để lợi dụng.', 'gian xảo'],
      ['Công chúa', 'cchua', 'Con gái nhà vua, được Thạch Sanh cứu.', 'hiền dịu'],
      ['Chằn tinh', 'python', 'Con trăn khổng lồ hung dữ trong vùng.', 'hung ác']
    ],
    pages: [
      ['Chàng trai dưới gốc đa', 'rung banyan@220,186,0.9 ts@100:hold=axe', 'Thạch Sanh [[mồ côi]] cha mẹ, sống một mình trong túp lều dưới gốc đa, ngày ngày đốn củi. Chàng được thiên thần dạy cho võ nghệ.'],
      ['Kết nghĩa anh em', 'lang lt@210:sly ts@100:happy', 'Lý Thông là kẻ bán rượu [[gian xảo]]. Thấy Thạch Sanh khỏe mạnh, hắn [[kết nghĩa]] anh em để lợi dụng chàng.'],
      ['Đi thay Lý Thông', 'lang lt@210:sly ts@100:wow', 'Trong vùng có con chằn tinh [[hung dữ]]. Đến lượt Lý Thông phải nộp mình cho nó, hắn lừa Thạch Sanh đi canh miếu thay.'],
      ['Đánh thắng chằn tinh', 'hang python@210,186,1.1 ts@90:hold=axe:angry', 'Nửa đêm, chằn tinh hiện ra. Thạch Sanh dũng cảm đánh nhau với nó và chiến thắng. Nhưng Lý Thông lại [[cướp công]], nhận là mình giết chằn tinh, được vua cho làm quan.'],
      ['Bắn đại bàng', 'rung eagle@200,96,1 cchua@204,96,0.35 ts@80:hold=bow', 'Một hôm, công chúa bị đại bàng khổng lồ quắp đi. Thạch Sanh giương cung bắn trúng cánh đại bàng, lần theo dấu tìm đến hang.'],
      ['Bị lấp cửa hang', 'hang ts@120 cchua@200:happy rock@60,190,1.4', 'Thạch Sanh xuống hang cứu công chúa. Nhưng Lý Thông lấp cửa hang, nhốt chàng lại, rồi đưa công chúa về cung nhận công.'],
      ['Cây đàn thần', 'under ts@120:hold=lute fish@230,120,0.8:c=yellow sparkle@200,60', 'Thạch Sanh tìm đường ra, còn cứu được thái tử con vua Thủy Tề. Chàng được tặng cây đàn thần. Về sau, chàng còn bị [[vu oan]], bị giam vào ngục.'],
      ['Tiếng đàn kể chuyện', 'cung vua@80 cchua@160:happy ts@250:hold=lute notes@210,60', 'Trong ngục, chàng gảy đàn. Công chúa nghe tiếng đàn liền khỏi bệnh câm. Vua cho gọi chàng lên, mọi chuyện được [[sáng tỏ]]. Thạch Sanh còn tha tội cho Lý Thông.'],
      ['Niêu cơm thần', 'sancung pot@160,186,0.8:steam ts@80:happy linh@240:happy linh@290,186,0.9:happy', 'Thạch Sanh cưới công chúa. Quân mười tám nước kéo sang đánh. Chàng gảy đàn, quân giặc xin hàng. Chàng nấu [[niêu cơm]] thần, ăn mãi không hết, đãi họ rồi cho về nước. Ai cũng phục tấm lòng [[bao dung]] của chàng.', 'Thạch Sanh vừa dũng cảm vừa tốt bụng các bạn nhỉ!']
    ],
    words: {
      'mồ côi': ['không còn cha hoặc mẹ', 'orphaned'],
      'gian xảo': ['hay lừa lọc, mưu mẹo xấu', 'cunning, deceitful'],
      'kết nghĩa': ['nhận nhau làm anh em dù không cùng gia đình', 'to become sworn brothers'],
      'hung dữ': ['dữ tợn, hay làm hại người khác', 'fierce'],
      'cướp công': ['nhận việc tốt của người khác là của mình', 'to steal the credit'],
      'vu oan': ['đổ lỗi cho người không có lỗi', 'to falsely accuse'],
      'sáng tỏ': ['trở nên rõ ràng, ai cũng hiểu', 'to become clear'],
      'niêu cơm': ['nồi đất nhỏ để nấu cơm', 'a small clay rice pot'],
      'bao dung': ['rộng lòng tha thứ cho người khác', 'forgiving, generous']
    },
    msg: 'Người thật thà, dũng cảm, tốt bụng sẽ được đền đáp. Kẻ gian dối sớm muộn cũng bị lộ. Hãy sống bao dung và yêu hòa bình.',
    msgEn: 'Honest, brave and kind people are rewarded; liars are found out sooner or later. Be forgiving and love peace.',
    saying: ['Gieo gió gặt bão.', 'Làm việc xấu thì sẽ phải nhận hậu quả xấu hơn.'],
    quiz: [
      ['Ai đã thật sự đánh thắng chằn tinh?', ['Thạch Sanh', 'Lý Thông', 'Nhà vua'], 0, 'Lý Thông chỉ cướp công của Thạch Sanh.'],
      ['Tiếng đàn thần đã giúp được gì?', ['Công chúa nói được, sự thật sáng tỏ', 'Gọi mưa xuống', 'Gọi đại bàng về'], 0, 'Nghe tiếng đàn, công chúa khỏi bệnh câm.'],
      ['Bạn trong nhóm nhận hết phần việc em đã làm. Em nên làm gì?', ['Bình tĩnh nói rõ với cô và bạn', 'Đánh bạn', 'Bỏ nhóm'], 0, 'Nói rõ ràng, bình tĩnh thì sự thật sẽ sáng tỏ.']
    ],
    think: ['Vì sao Thạch Sanh tha tội cho Lý Thông? Các bạn có đồng ý không?', 'Niêu cơm thần ăn mãi không hết dạy chúng mình điều gì về sự chia sẻ và hòa bình?']
  });
})();
