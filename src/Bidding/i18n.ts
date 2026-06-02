// Mykonos Five Days — i18n (en / zh).
// Minimal text by design; visual storytelling.

type Locale = 'zh' | 'en';

const STORAGE_KEY = 'mykonos_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    // ─── Prologue ──────────────────────────────────────────────────────────
    'prologue.p1': 'Athens. A Tuesday afternoon in June.',
    'prologue.p2': "Lena Wei, 28, an architect from New York, has finished a four-day work trip and is at the airport bar waiting for her flight home.",
    'prologue.p3': "Sam Chen, 28, a photographer she thinks she remembers from Yale four years ago, is at the next stool — between Europe trips, on a three-month solo project.",
    'prologue.p4': "They have not seen each other since 2018, or at least she thinks they have not. They are both single. Neither was planning to fall into anything.",
    'prologue.p5': "By the time their drinks are gone, the flight home is rebooked. The ferry to Mykonos leaves at 7. She will think later that she should have checked.",
    'prologue.cta': 'board the ferry',

    // ─── Day titles ────────────────────────────────────────────────────────
    'title.day1.primary':   'Day One · Arrival',
    'title.day1.secondary': "The Airbnb has one bedroom. One bed. He is at the bedroom door with two wine glasses.",
    'title.day1.meta':      'Mykonos · Chora · 6 PM',

    'title.day2.primary':   'Day Two · Beach',
    'title.day2.secondary': "Paraga Beach, golden hour. He has just come out of the water. He is standing in your sun.",
    'title.day2.meta':      'Paraga · 6 PM',

    'title.day3.primary':   'Day Three · Taverna',
    'title.day3.secondary': "A hillside table above Little Venice. He lifts a bite on his fork. Behind him the other tables have turned to watch. None of them are eating. A small bird has fallen onto your tiles.",
    'title.day3.meta':      'Little Venice · 5 PM · the cicadas have stopped',

    'title.day4.primary':   'Day Four · Windmill',
    'title.day4.secondary': "Midnight at Kato Mili. The wind is up. There are markings on the windmill behind you that you have not let yourself see. On the next hill, three figures in pale robes have not moved.",
    'title.day4.meta':      'Kato Mili · midnight · they are watching',

    'title.day5.primary':   'Day Five · Harbor',
    'title.day5.secondary': "The old port at 8 AM. The ferry is in 20 minutes. There is a small dark stain on his collar that wasn't there last night. The dock has fewer travelers than it should.",
    'title.day5.meta':      'Old Port · 8 AM · the morning is too bright',

    // ─── Hints ─────────────────────────────────────────────────────────────
    'hint.act1': '› two ways to receive him',
    'hint.act2': '› two ways to share your sun',
    'hint.act3': '› two ways to take a bite',
    'hint.act4': '› two ways to close the distance',
    'hint.act5': '› two ways to say goodbye',

    // ─── Hotspot labels ────────────────────────────────────────────────────
    'hot.d1.a1': "I'll take the couch",
    'hot.d1.a2': 'small price for a free trip',

    'hot.d2.b1': 'hand him the towel',
    'hot.d2.b2': 'pull him onto your towel',

    'hot.d3.c1': 'take the bite he offers',
    'hot.d3.c2': 'take the fork from his hand',

    'hot.d4.d1': 'close the distance',
    'hot.d4.d2': 'turn to the sea',

    'hot.d5.e1': "ask him to come to New York",
    'hot.d5.e2': '"thank you for this week"',

    // ─── Spoken-line subtitles (Day 5 only) ────────────────────────────────
    'sub.d5.e1': 'Come to New York.',
    'sub.d5.e2': 'Thank you for this week.',

    // ─── Endings ───────────────────────────────────────────────────────────
    'end.A.title':    'he came',
    'end.A.tagline':  "Two months later he was on her West Village stoop. His eyes had not changed since Mykonos.",
    'epi.a1': "He pressed the buzzer at 4F. He did not look up at the camera.",
    'epi.a2': "She knew who it was before the buzzer finished. She opened the door anyway.",
    'epi.a3': "Three weeks in, his Leica sat on her counter. She had not taken a single photograph since he arrived.",
    'end.A.final': "He said all the right things. He drank his coffee with the same hand. He had not asked once about anyone she had loved before him. She could not say what was wrong, only that something was.",

    'end.B.title':    'the letters',
    'end.B.tagline':  "They wrote every day for a year. By the ninth month his messages began to come from places no map confirmed.",
    'epi.b1': "They never named it. They kept writing.",
    'epi.b2': "By month nine he sent her sunlit photographs of a town she could not find online.",
    'epi.b3': "She kept replying. She was no longer sure what she was answering.",
    'end.B.final': "He never said the word. Neither did she. There was nothing to prove. There was only the open thread that did not stop, and the small thing in her chest that listened for him after midnight.",

    'end.C.title':    'the photograph',
    'end.C.tagline':  "Six weeks later a print arrived. It was the taverna terrace. The chair across from him was empty.",
    'epi.c1': "She recognized his hand on the envelope before she opened it.",
    'epi.c2': "The chair where she had sat is empty in the photograph. He is alone at the table. He had taken it of someone who was not there.",
    'epi.c3': "She propped it against the pencil jar on her desk. She did not write back. She did not throw it away.",
    'end.C.final': "She had been there. She remembered the food, the wine, the laugh. The photograph said otherwise. Both things were true and neither one was, and she did not know how to live with that for very long.",

    'end.D.title':    'the silence',
    'end.D.tagline':  "She tried to find him. Yale had no Sam Chen between 2014 and 2018.",
    'epi.d1': "Three weeks home she ran his name on the alumni site. Nothing. No graduate, no record, no shared seminar.",
    'epi.d2': "December. SoHo. A back like his that turned and was someone else's father.",
    'epi.d3': "Some nights she could feel him watching her apartment from the building across the street. She never went to check.",
    'end.D.final': "Mykonos had happened. She remembered every hour of it. There was just no proof anywhere that he had. The silence after the week was longer than the week itself, and it has not yet ended.",

    // ─── UI ────────────────────────────────────────────────────────────────
    'btn.continue': '› continue',
    'btn.examine':  'examine',
    'btn.close':    'close',
    'ui.docs':              'docs',
    'ui.tap_continue':      '› tap to continue',
    'ui.tap_begin_again':   'tap to begin again',
    'ui.pivot_remembers':   '— she remembers —',
    'ui.pivot_understands': '— she understands —',
    'ui.ending_label':      '— ending —',
    'ui.brand_sig':         '— MYKONOS · FIVE DAYS —',
  },

  zh: {
    'prologue.p1': '雅典. 六月一个周二的下午.',
    'prologue.p2': 'Lena Wei, 28 岁, 来自纽约的建筑师. 刚结束 4 天出差, 在机场酒吧等飞回纽约的航班.',
    'prologue.p3': 'Sam Chen, 28 岁, 摄影师. 她以为她记得大学时见过他, 此刻他坐在隔壁吧凳上 — 他正在欧洲三个月的个人拍摄项目里.',
    'prologue.p4': '上一次见面是 2018 年的毕业典礼, 或者说她以为是. 两人都单身. 都没打算掉进去什么.',
    'prologue.p5': '酒喝完时, 回纽约的机票已经改签. 去 Mykonos 的渡轮 7 点开. 她之后会想到, 当时应该核对一下的.',
    'prologue.cta': '上船',

    'title.day1.primary':   '第一天 · 抵达',
    'title.day1.secondary': '民宿只有一间卧室. 一张床. 他端着两个酒杯站在卧室门口.',
    'title.day1.meta':      'Mykonos · Chora · 晚 6 点',

    'title.day2.primary':   '第二天 · 沙滩',
    'title.day2.secondary': 'Paraga Beach, 黄金时刻. 他刚从水里上来. 他站在你的阳光里.',
    'title.day2.meta':      'Paraga · 晚 6 点',

    'title.day3.primary':   '第三天 · 餐厅',
    'title.day3.secondary': '俯瞰 Little Venice 的山腰小桌. 他叉起一块鱼伸过来. 后面几桌的客人都转过头看你们. 没人在吃饭. 你脚边瓷砖上落了一只小鸟.',
    'title.day3.meta':      'Little Venice · 下午 5 点 · 蝉声停了',

    'title.day4.primary':   '第四天 · 风车',
    'title.day4.secondary': '午夜的 Kato Mili. 风很大. 风车身上有些你不让自己看见的刻痕. 远处那座山头上, 三个穿浅色长袍的人一动不动.',
    'title.day4.meta':      'Kato Mili · 午夜 · 他们在看',

    'title.day5.primary':   '第五天 · 码头',
    'title.day5.secondary': '老港早上 8 点. 渡轮 20 分钟后开. 他领子上有一小块昨晚还没有的暗色渍. 码头上等船的人比这个时段该有的少.',
    'title.day5.meta':      '老港 · 早 8 点 · 晨光过亮',

    'hint.act1': '› 两种接他的方式',
    'hint.act2': '› 两种分享阳光的方式',
    'hint.act3': '› 两种接受这一口的方式',
    'hint.act4': '› 两种处理这段距离的方式',
    'hint.act5': '› 两种告别的方式',

    'hot.d1.a1': '"我去客厅睡"',
    'hot.d1.a2': '"算给免费旅行的小代价"',

    'hot.d2.b1': '把毛巾递给他',
    'hot.d2.b2': '把他拉到你的毛巾上',

    'hot.d3.c1': '接住他递来的这一口',
    'hot.d3.c2': '从他手里拿过叉子',

    'hot.d4.d1': '吻他',
    'hot.d4.d2': '转头看海',

    'hot.d5.e1': '请他来纽约',
    'hot.d5.e2': '"谢谢你这一周"',

    'sub.d5.e1': '来纽约.',
    'sub.d5.e2': '谢谢你这一周.',

    'end.A.title':    '他来了',
    'end.A.tagline':  '两个月后他出现在她西村公寓楼下. 他的眼神跟 Mykonos 时一样, 一点没变过.',
    'epi.a1': '他按了 4F 的门铃. 没抬头看门廊摄像头.',
    'epi.a2': '门铃响完之前她就知道是谁. 她还是开了门.',
    'epi.a3': '三周后, 他的 Leica 摆在她的台面上. 自他来后她一张照片都没拍.',
    'end.A.final': '他说的话都对. 他用同一只手喝咖啡. 他没问过她以前爱过谁. 她说不出哪里不对, 只觉得有什么不对.',

    'end.B.title':    '一年的信',
    'end.B.tagline':  '他们每天写信, 写了一年. 第九个月起, 他发的消息开始来自地图查不到的地方.',
    'epi.b1': '他们没给它命名. 他们一直在写.',
    'epi.b2': '第九个月起, 他寄来的照片是阳光下查不到的小镇.',
    'epi.b3': '她还是在回. 她已经不太清楚自己在回应的是什么了.',
    'end.B.final': '他没说过那个词. 她也没说. 不需要证明什么. 只是那条不断的对话在那里, 还有半夜里她胸口那个等他的小东西.',

    'end.C.title':    '那张照片',
    'end.C.tagline':  '六周后一张照片寄到. 是 Mykonos 餐厅那张桌子. 他对面的椅子空着.',
    'epi.c1': '她在拆开之前就认得他的字.',
    'epi.c2': '她坐的那把椅子在照片里是空的. 桌子对面就他一个人. 他拍了一个不在那里的人.',
    'epi.c3': '她把它靠在铅笔罐边. 没回信. 也没扔掉.',
    'end.C.final': '她在那里. 她记得菜, 记得酒, 记得笑. 照片说她不在. 两件事都是真的同时也都不是, 这种状态她活不了太久.',

    'end.D.title':    '沉默',
    'end.D.tagline':  '她试着找过他. Yale 2014-2018 没有 Sam Chen 这个学生.',
    'epi.d1': '回纽约三周, 她在校友网搜他名字. 什么都没有. 没毕业生, 没记录, 没同选过的课.',
    'epi.d2': '12 月. SoHo. 一个像他的背影 — 转过来是别人的爸爸.',
    'epi.d3': '有些夜里她感觉他在街对面的楼上看她公寓. 她从来没过去查.',
    'end.D.final': 'Mykonos 真的发生过. 她记得每一个小时. 只是任何地方都查不到他也曾在那里. 那之后的沉默比那一周长很多, 而且还没结束.',

    'btn.continue': '› 继续',
    'btn.examine':  '细看',
    'btn.close':    '关闭',
    'ui.docs':              '文档',
    'ui.tap_continue':      '› 点击继续',
    'ui.tap_begin_again':   '点击重新开始',
    'ui.pivot_remembers':   '— 她记起来了 —',
    'ui.pivot_understands': '— 她明白了 —',
    'ui.ending_label':      '— 结局 —',
    'ui.brand_sig':         '— MYKONOS · FIVE DAYS —',
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE]?.[key] ?? STRINGS.en[key] ?? key;
}

export function getLocale(): Locale { return LOCALE; }
