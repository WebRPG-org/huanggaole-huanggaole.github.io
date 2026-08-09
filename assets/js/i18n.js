// 多语言配置
const translations = {
  // 简体中文
  'zh-CN': {
    'home': '首页',
    'hero': '首页',
    'about': '关于我',
    'edu & jobs': '教育与工作',
    'portfolio': '作品集',
    'contact': '联系我',
    'hero_greeting': '你好！ 我是',
    'hero_name': '黄高乐',
    'hero_title': '我是 {{elements}}',
    'about_intro': '让我介绍一下自己：',
    'about_hello': '你好！我是黄高乐。',
    'about_description': '我是一名独立游戏开发者。目前经营自己的独立游戏工作室。我热爱游戏文化，希望将探索广袤无际的游戏空间作为自己的事业与追求，为拓展游戏趣味与价值的边界贡献自己的力量。',
    'name': '姓名',
    'personality_type': '人格类型',
    'game_motivation': '游戏动机',
    'birthday': '生日',
    'belief': '信仰',
    'morality': '道德观',
    'political_views': '政治立场',
    'reformist': '改良派',
    'scientific_socialism': '科学社会主义',
    'separation_of_powers': '分权',
    'ecologism': '生态主义',
    'progressivism': '进步主义',
    'belbin_team_role': '贝尔宾团队角色',
    'name_value': '黄高乐',
    'personality_type_value': 'INTP（内向/直觉/理性/理解）',
    'game_motivation_value': '冷静,分析,社交,沉浸式和实用',
    'birthday_value': '1991年6月17日 ♊',
    'belief_value': '理神论/自然法',
    'morality_value': '推己及人/人道主义',
    'belbin_team_role_value': '外交家（24）智多星（19）协调者（10）',
    'edu_jobs_title': '想要更了解我？',
    'edu_jobs_subtitle': '我的教育与工作',
    'education': '教育经历',
    'awards': '获奖情况',
    'skills': '掌握技能',
    'work_experience': '工作经历',
    'education_detail': '<span class="badge bg-secondary">2014</span> 北京大学 计算机应用技术<span class="badge bg-secondary">博士肄业</span><br/><span class="badge bg-secondary">2010</span> 中南大学 计算机科学与技术<span class="badge bg-secondary">本科</span><br/><span class="badge bg-secondary">2007</span> 莱阳一中<br/><span class="badge bg-secondary">2003</span> 莱阳实验中学<br/><span class="badge bg-secondary">1998</span> 莱阳绢纺厂职工子弟小学',
    'awards_detail': '<span class="badge bg-secondary">2015</span> 北京大学“学习优秀奖”称号<br/><span class="badge bg-secondary">2015</span> 北京大学博士专项奖学金<br/><span class="badge bg-secondary">2014</span> 2014届省优秀毕业生<br/><span class="badge bg-secondary">2014</span> 中南大学第八届ACM校赛一等奖<br/><span class="badge bg-secondary">2013</span> 中南大学第七届ACM校赛二等奖<br/><span class="badge bg-secondary">2013</span> 中南大学优秀学生<br/><span class="badge bg-secondary">2012</span> “中国电信天翼飞YOUNG”奖学金<br/><span class="badge bg-secondary">2012</span> 中南大学一等奖学金<br/><span class="badge bg-secondary">2012</span> 中南大学第六届ACM校赛三等奖<br/><span class="badge bg-secondary">2012</span> 中南大学优秀学生<br/><span class="badge bg-secondary">2011</span> 国家奖学金<br/><span class="badge bg-secondary">2011</span> 中南大学特等奖学金<br/><span class="badge bg-secondary">2011</span> 中南大学优秀学生',
    'skill_english': '英语',
    'skill_programming': '编程与科学计算',
    'skill_frontend': '前端技术(HTML/CSS/js/ts)',
    'skill_engines': '游戏引擎（Unity/Laya/橙光游戏制作工具）',
    'skill_graphics': '计算机图形学',
    'skill_writing': '策划/文案/编剧',
    'work_experience': '工作经历',
    'work_experience_detail': '<span class="badge bg-secondary">2025</span> 北京蜉蝣一粟科技有限公司 创始人<br/><span class="badge bg-secondary">2024</span> 黄高乐游戏工作室 主理人<br/><span class="badge bg-secondary">2019</span> 字节跳动科技有限公司 创意游戏研发工程师<br/><span class="badge bg-secondary">2015</span> 六趣网络科技有限公司 橙光游戏签约作者<br/><span class="badge bg-secondary">2011</span> 中南大学信息院2010级年级会科研学习部干事<br/><span class="badge bg-secondary">2011</span> 中南大学异次元动漫社副社长<br/><span class="badge bg-secondary">2010</span> 中南大学异次元动漫社文件部干部<br/><span class="badge bg-secondary">2010</span> 中南大学异次元动漫社外联部干事<br/><span class="badge bg-secondary">2010</span> 中南大学升华学生公寓1CM书吧服务生',
    'portfolio_title': '欢迎了解我的作品集',
    'portfolio_subtitle': '我的作品',
    'portfolio_item1_meta': '2014  橙光游戏',
    'portfolio_item1_title': '非橙勿扰',
    'portfolio_item2_meta': '2018  橙光游戏',
    'portfolio_item2_title': 'A Gay\'s Life',
    'portfolio_item3_meta': 'GGJ2020（修理）  RMMV',
    'portfolio_item3_title': '报废的世界',
    'portfolio_item4_meta': 'Project1 第四届剧情大挑战  RMMV',
    'portfolio_item4_title': '透小明历险记',
    'portfolio_item5_meta': '2022  Cocos Creator',
    'portfolio_item5_title': '五子棋俄罗斯方块',
    'portfolio_item6_meta': '2022  Cocos Creator',
    'portfolio_item6_title': '沙漠小镇',
    'portfolio_item7_meta': '2025  Unity',
    'portfolio_item7_title': '本草归元录',
    'portfolio_item8_meta': '2026  橙光游戏',
    'portfolio_item8_title': '契约爱情',
    'contact_title': '欢迎你来联系我~',
    'contact_subtitle': '联系我',
    'contact_gamers': '游戏的人',
    'contact_description': '希望认识更多游戏爱好者，与更多在游戏方面有热情的游戏人交朋友。',
    'address': '地址',
    'postal_code': '邮政编码',
    'email': '电子邮箱',
    'website': '个人主页',
    'address_value': '北京市大兴区北京密码东区1号楼1单元',
    'postal_code_value': '102611',
    'email_value': 'huangcola@hotmail.com',
    'website_value': 'www.huanggaole.com',
    'game_designer': '游戏设计师。',
    'game_producer': '游戏制作人。',
    'game_developer': '游戏开发者。',
    'publish': '发表文章',
    'publish_title': '发表文章集锦',
    'publish_subtitle': '我的发表成果',
    'publish_intro': '这里展示了我到目前为止发表的学术论文与相关研究材料。点击第1、2篇论文链接可直接预览PDF，第3篇论文包含独立的研究材料专页（含采访笔记、主题分析编码表等）。',
    'paper1_title': '说服设计在科普游戏中的应用',
    'paper1_authors': '黄高乐',
    'paper1_venue': '《科学与博物馆》2021年第3期 (Vol. 7, No. 3, pp. 190-202)',
    'paper1_abstract': '探讨了说服设计（Persuasive Design）在科普游戏中的应用机制与实证思考，解析如何通过游戏机制与系统设计有效传递科学知识与引导认知转变。',
    'paper2_title': '生成式人工智能技术赋能科普内容创作',
    'paper2_authors': '黄高乐',
    'paper2_venue': '《科学与博物馆》2024年第1期 (Vol. 10, No. 1, pp. 22-27)',
    'paper2_abstract': '分析生成式人工智能（GenAI / AIGC）在科普内容创作中的应用前景、潜在挑战与人机协同机制，提出了面向未来科普创作的实践框架。',
    'paper3_title': 'Agency and Creativity in GenAI-based Game Development and Design Education',
    'paper3_authors': 'Gaole Huang, Jian Tan, Max Chen',
    'paper3_venue': 'IEEE Conference on Games (CoG) 2026 (WIP)',
    'paper3_abstract': '生成式人工智能（GenAI）的快速发展正在重塑游戏设计与开发教育。本文对研究生课程《AIGC游戏开发》中的30个项目与反思报告进行了定性研究，深入探讨了GenAI如何在教学实践中影响游戏开发者的创造性能动性（Creative Agency）。',
    'btn_preview_pdf': '预览 PDF',
    'btn_download_pdf': '下载 PDF',
    'btn_paper3_materials': '查看研究材料与专页',
    'paper3_page_title': 'GenAI游戏开发中的能动性与创造力 — 研究材料专页',
    'paper3_materials_title': '研究材料与主题分析表',
    'paper3_materials_desc': '以下为本研究使用的数据集与编码表，您可以下载查看完整的主题分析表格。',
    'paper3_excel_cn': '主题分析编码表（中文版 .xlsx）',
    'paper3_excel_en': '主题分析编码表（英文版 .xlsx）',
    'paper3_notes_title': '30位受访者采访笔记 (Interview Transcripts)',
    'paper3_notes_desc': '收录了30位参与生成式AI游戏开发项目的受访者完整采访记录与反思笔记，支持中英文双语切换与关键词检索。',
    'notes_lang_scn': '简体中文笔记 (notes_SCN)',
    'notes_lang_en': 'English Notes (notes_EN)',
    'paper3_search_placeholder': '搜索受访者编号或关键词 (如 Balatro, Roguelike, AI...)...',
    'view_transcript': '查看笔记内容',
    'back_to_publish': '返回文章集锦',
    'close': '关闭',
    'paper3_video_title': '原始课程答辩录像',
    'paper3_video_note': '原始课程答辩语言采用的是中文，文字版本参见最末的Interview Transcripts'
  },
  // 繁体中文
  'zh-TW': {
    'home': '首頁',
    'hero': '首頁',
    'about': '關於我',
    'edu & jobs': '教育與工作',
    'portfolio': '作品集',
    'contact': '聯繫我',
    'hero_greeting': '你好！ 我是',
    'hero_name': '黃高樂',
    'hero_title': '我是 {{elements}}',
    'about_intro': '讓我介紹一下自己：',
    'about_hello': '你好！我是黃高樂。',
    'about_description': '我是一名獨立遊戲開發者。目前經營自己的獨立遊戲工作室。我熱愛遊戲文化，希望將探索廣袤無際的遊戲空間作為自己的事業與追求，為拓展遊戲趣味與價值的邊界貢獻自己的力量。',
    'name': '姓名',
    'personality_type': '人格類型',
    'game_motivation': '遊戲動機',
    'birthday': '生日',
    'belief': '信仰',
    'morality': '道德觀',
    'political_views': '政治立場',
    'reformist': '改良派',
    'scientific_socialism': '科學社會主義',
    'separation_of_powers': '分權',
    'ecologism': '生態主義',
    'progressivism': '進步主義',
    'belbin_team_role': '貝爾賓團隊角色',
    'name_value': '黃高樂',
    'personality_type_value': 'INTP（內向／直覺／理性／理解）',
    'game_motivation_value': '冷靜、分析、社交、沉浸式和實用',
    'birthday_value': '1991年6月17日 ♊',
    'belief_value': '理神論／自然法',
    'morality_value': '推己及人／人道主義',
    'belbin_team_role_value': '外交家（24）智多星（19）協調者（10）',
    'edu_jobs_title': '想要更了解我？',
    'edu_jobs_subtitle': '我的教育與工作',
    'education': '教育經歷',
    'awards': '獲獎情況',
    'skills': '掌握技能',
    'work_experience': '工作經歷',
    'education_detail': '<span class="badge bg-secondary">2014</span> 北京大學 電腦應用技術<span class="badge bg-secondary">博士肄業</span><br/><span class="badge bg-secondary">2010</span> 中南大學 電腦科學與技術<span class="badge bg-secondary">學士</span><br/><span class="badge bg-secondary">2007</span> 萊陽一中<br/><span class="badge bg-secondary">2003</span> 萊陽實驗中學<br/><span class="badge bg-secondary">1998</span> 萊陽絹紡廠職工子弟小學',
    'awards_detail': '<span class="badge bg-secondary">2015</span> 北京大學「學習優秀獎」稱號<br/><span class="badge bg-secondary">2015</span> 北京大學博士專項獎學金<br/><span class="badge bg-secondary">2014</span> 2014 屆省優秀畢業生<br/><span class="badge bg-secondary">2014</span> 中南大學第八屆 ACM 校賽一等獎<br/><span class="badge bg-secondary">2013</span> 中南大學第七屆 ACM 校賽二等獎<br/><span class="badge bg-secondary">2013</span> 中南大學優秀學生<br/><span class="badge bg-secondary">2012</span> 「中國電信天翼飛 YOUNG」獎學金<br/><span class="badge bg-secondary">2012</span> 中南大學一等獎學金<br/><span class="badge bg-secondary">2012</span> 中南大學第六屆 ACM 校賽三等獎<br/><span class="badge bg-secondary">2012</span> 中南大學優秀學生<br/><span class="badge bg-secondary">2011</span> 國家獎學金<br/><span class="badge bg-secondary">2011</span> 中南大學特等獎學金<br/><span class="badge bg-secondary">2011</span> 中南大學優秀學生',
    'skill_english': '英語',
    'skill_programming': '程式設計與科學計算',
    'skill_frontend': '前端技術(HTML/CSS/JS/TS)',
    'skill_engines': '遊戲引擎（Unity／Laya／橙光遊戲製作工具）',
    'skill_graphics': '電腦圖形學',
    'skill_writing': '企劃／文案／編劇',
    'work_experience_detail': '<span class="badge bg-secondary">2025</span> 北京蜉蝣一粟科技有限公司 創辦人<br/><span class="badge bg-secondary">2024</span> 黃高樂遊戲工作室 主理人<br/><span class="badge bg-secondary">2019</span> 字節跳動科技有限公司 創意遊戲研發工程師<br/><span class="badge bg-secondary">2015</span> 六趣網路科技有限公司 橙光遊戲簽約作者<br/><span class="badge bg-secondary">2011</span> 中南大學資訊院 2010 級年級會科研學習部幹事<br/><span class="badge bg-secondary">2011</span> 中南大學異次元動漫社副社長<br/><span class="badge bg-secondary">2010</span> 中南大學異次元動漫社文件部幹部<br/><span class="badge bg-secondary">2010</span> 中南大學異次元動漫社外聯部幹事<br/><span class="badge bg-secondary">2010</span> 中南大學昇華學生公寓 1CM 書吧服務生',
    'portfolio_title': '歡迎了解我的作品集',
    'portfolio_subtitle': '我的作品',
    'portfolio_item1_meta': '2014  橙光遊戲',
    'portfolio_item1_title': '非橙勿擾',
    'portfolio_item2_meta': '2018  橙光遊戲',
    'portfolio_item2_title': 'A Gay\'s Life',
    'portfolio_item3_meta': 'GGJ2020（repair） RMMV',
    'portfolio_item3_title': '報廢的世界',
    'portfolio_item4_meta': 'Project1 第四屆劇情大挑戰  RMMV',
    'portfolio_item4_title': '透小明歷險記',
    'portfolio_item5_meta': '2022  Cocos Creator',
    'portfolio_item5_title': '五子棋俄羅斯方塊',
    'portfolio_item6_meta': '2022  Cocos Creator',
    'portfolio_item6_title': '沙漠小鎮',
    'portfolio_item7_meta': '2025  Unity',
    'portfolio_item7_title': '本草歸元錄',
    'portfolio_item8_meta': '2026  橙光遊戲',
    'portfolio_item8_title': '契約愛情',
    'contact_title': '歡迎你來聯繫我~',
    'contact_subtitle': '聯繫我',
    'contact_gamers': '遊戲的人',
    'contact_description': '希望認識更多遊戲愛好者，與更多在遊戲方面有熱情的遊戲人交朋友。',
    'address': '地址',
    'postal_code': '郵政編碼',
    'email': '電子郵箱',
    'website': '個人主頁',
    'address_value': '北京市大興區北京密碼東區1號樓1單元',
    'postal_code_value': '102611',
    'email_value': 'huangcola@hotmail.com',
    'website_value': 'www.huanggaole.com',
    'game_designer': '遊戲設計師。',
    'game_producer': '遊戲製作人。',
    'game_developer': '遊戲開發者。',
    'publish': '發表文章',
    'publish_title': '發表文章集錦',
    'publish_subtitle': '我的發表成果',
    'publish_intro': '這裡展示了我到目前為止發表的學術論文與相關研究材料。點擊第1、2篇論文連結可直接預覽PDF，第3篇論文包含独立的研究材料專頁（含採訪筆記、主題分析編碼表等）。',
    'paper1_title': '說服設計在科普遊戲中的應用',
    'paper1_authors': '黃高樂',
    'paper1_venue': '《科學與博物館》2021年第3期 (Vol. 7, No. 3, pp. 190-202)',
    'paper1_abstract': '探討了說服設計（Persuasive Design）在科普遊戲中的應用機制與實證思考，解析如何通過遊戲機制與系統設計有效傳遞科學知識與引導認知轉變。',
    'paper2_title': '生成式人工知能技術賦能科普內容創作',
    'paper2_authors': '黃高樂',
    'paper2_venue': '《科學與博物館》2024年第1期 (Vol. 10, No. 1, pp. 22-27)',
    'paper2_abstract': '分析生成式人工知能（GenAI / AIGC）在科普內容創作中的應用前景、潛在挑戰與人機協同機制，提出了面向未來科普創作的實踐框架。',
    'paper3_title': 'Agency and Creativity in GenAI-based Game Development and Design Education',
    'paper3_authors': 'Gaole Huang, Jian Tan, Max Chen',
    'paper3_venue': 'IEEE Conference on Games (CoG) 2026 (WIP)',
    'paper3_abstract': '生成式人工知能（GenAI）的快速發展正在重塑遊戲設計與開發教育。本文對研究生課程《AIGC遊戲開發》中的30個項目與反思報告進行了定性研究，深入探討了GenAI如何在教學實踐中影響遊戲開發者的創造性能動性（Creative Agency）。',
    'btn_preview_pdf': '預覽 PDF',
    'btn_download_pdf': '下載 PDF',
    'btn_paper3_materials': '觀看研究材料與專頁',
    'paper3_page_title': 'GenAI遊戲開發中的能動性與創造力 — 研究材料專頁',
    'paper3_materials_title': '研究材料與主題分析表',
    'paper3_materials_desc': '以下為本研究使用之數據集與編碼表，您可以下載觀看完整的主題分析表格。',
    'paper3_excel_cn': '主題分析編碼表（中文版 .xlsx）',
    'paper3_excel_en': '主題分析編碼表（英文版 .xlsx）',
    'paper3_notes_title': '30位受訪者採訪筆記 (Interview Transcripts)',
    'paper3_notes_desc': '收錄了30位參與生成式AI遊戲開發項目受訪者之完整採訪記錄與反思筆記，支持中英文雙語切換與關鍵字檢索。',
    'notes_lang_scn': '簡體中文筆記 (notes_SCN)',
    'notes_lang_en': 'English Notes (notes_EN)',
    'paper3_search_placeholder': '搜尋受訪者編號或關鍵字 (如 Balatro, Roguelike, AI...)...',
    'view_transcript': '觀看筆記內容',
    'back_to_publish': '返回文章集錦',
    'close': '關閉',
    'paper3_video_title': '原始課程答辯錄像',
    'paper3_video_note': '原始課程答辯語言採用的是中文，文字版本參見最末的Interview Transcripts'
  },
  // 英文
  'en': {
    'home': 'Home',
    'hero': 'Home',
    'about': 'About',
    'edu & jobs': 'Education & Work',
    'portfolio': 'Portfolio',
    'contact': 'Contact',
    'hero_greeting': 'Hello! I am',
    'hero_name': 'Huang Gaole',
    'hero_title': 'I am {{elements}}',
    'about_intro': 'Let me introduce myself:',
    'about_hello': 'Hello! I am Huang Gaole.',
    'about_description': 'I am an independent game developer. Currently running my own independent game studio. I love game culture and hope to explore the vast gaming space as my career and pursuit, contributing to expanding the boundaries of game fun and value.',
    'name': 'Name',
    'personality_type': 'Personality Type',
    'game_motivation': 'Game Motivation',
    'birthday': 'Birthday',
    'belief': 'Belief',
    'morality': 'Morality',
    'political_views': 'Political Views',
    'reformist': 'Reformist',
    'scientific_socialism': 'Scientific Socialism',
    'separation_of_powers': 'Separation of Powers',
    'ecologism': 'Ecologism',
    'progressivism': 'Progressivism',
    'belbin_team_role': 'Belbin Team Role',
    'name_value': 'Huang Gaole',
    'personality_type_value': 'INTP (Introverted / Intuitive / Thinking / Perceiving)',
    'game_motivation_value': 'Calm, analytical, social, immersive and practical',
    'birthday_value': '17 June 1991 ♊',
    'belief_value': 'Deism / Natural Law',
    'morality_value': 'Golden Rule / Humanitarianism',
    'belbin_team_role_value': 'Diplomat (24), Plant (19), Co-ordinator (10)',
    'edu_jobs_title': 'Want to know more about me?',
    'edu_jobs_subtitle': 'My Education & Work',
    'education': 'Education',
    'awards': 'Awards',
    'skills': 'Skills',
    'work_experience': 'Work Experience',
    'education_detail': '<span class="badge bg-secondary">2014</span> Peking University, Computer Application Technology<span class="badge bg-secondary">Doctoral program (not completed)</span><br/><span class="badge bg-secondary">2010</span> Central South University, Computer Science and Technology<span class="badge bg-secondary">Bachelor</span><br/><span class="badge bg-secondary">2007</span> Laiyang No.1 High School<br/><span class="badge bg-secondary">2003</span> Laiyang Experimental Middle School<br/><span class="badge bg-secondary">1998</span> Primary School for Children of Workers, Laiyang Silk Mill',
    'awards_detail': '<span class="badge bg-secondary">2015</span> Peking University “Outstanding Study Award”<br/><span class="badge bg-secondary">2015</span> Peking University Doctoral Special Scholarship<br/><span class="badge bg-secondary">2014</span> Provincial Outstanding Graduate (2014 cohort)<br/><span class="badge bg-secondary">2014</span> First Prize, 8th ACM Contest of Central South University<br/><span class="badge bg-secondary">2013</span> Second Prize, 7th ACM Contest of Central South University<br/><span class="badge bg-secondary">2013</span> Outstanding Student of Central South University<br/><span class="badge bg-secondary">2012</span> “China Telecom Tianyi Fly YOUNG” Scholarship<br/><span class="badge bg-secondary">2012</span> First-class Scholarship of Central South University<br/><span class="badge bg-secondary">2012</span> Third Prize, 6th ACM Contest of Central South University<br/><span class="badge bg-secondary">2012</span> Outstanding Student of Central South University<br/><span class="badge bg-secondary">2011</span> National Scholarship<br/><span class="badge bg-secondary">2011</span> Special-class Scholarship of Central South University<br/><span class="badge bg-secondary">2011</span> Outstanding Student of Central South University',
    'skill_english': 'English',
    'skill_programming': 'Programming and Scientific Computing',
    'skill_frontend': 'Frontend (HTML/CSS/JS/TS)',
    'skill_engines': 'Game Engines (Unity/Laya/Orange Game Maker)',
    'skill_graphics': 'Computer Graphics',
    'skill_writing': 'Game design / Writing / Scriptwriting',
    'work_experience_detail': '<span class="badge bg-secondary">2025</span> Founder, Beijing Mayfly & Grain Tech Co., Ltd. (Mayfly & Grain means Ephemeral & Tiny)<br/><span class="badge bg-secondary">2024</span> Founder, Huang Gaole Game Studio<br/><span class="badge bg-secondary">2019</span> Creative Game R&D Engineer, ByteDance<br/><span class="badge bg-secondary">2015</span> Signed Author, Orange Game Studio (Liuqu Network Technology Co., Ltd.)<br/><span class="badge bg-secondary">2011</span> Academic Affairs Officer, 2010 Class Student Union, School of Information Science and Engineering, Central South University<br/><span class="badge bg-secondary">2011</span> Vice President, Dimension Anime Club, Central South University<br/><span class="badge bg-secondary">2010</span> Staff, Documentation Department, Dimension Anime Club, Central South University<br/><span class="badge bg-secondary">2010</span> Officer, External Relations Department, Dimension Anime Club, Central South University<br/><span class="badge bg-secondary">2010</span> Clerk, 1CM Book Bar, Shenghua Student Apartment, Central South University',
    'portfolio_title': 'Welcome to my portfolio',
    'portfolio_subtitle': 'My Works',
    'portfolio_item1_meta': '2014  Orange Game',
    'portfolio_item1_title': 'Not Orange, No Play',
    'portfolio_item2_meta': '2018  Orange Game',
    'portfolio_item2_title': 'A Gay\'s Life',
    'portfolio_item3_meta': 'GGJ2020 (Repair)  RMMV',
    'portfolio_item3_title': 'Disabled World',
    'portfolio_item4_meta': 'Project1  4th Story Challenge  RMMV',
    'portfolio_item4_title': 'The Adventures of Tou Xiaoming',
    'portfolio_item5_meta': '2022  Cocos Creator',
    'portfolio_item5_title': 'Gomoku Tetris',
    'portfolio_item6_meta': '2022  Cocos Creator',
    'portfolio_item6_title': 'Desert Town',
    'portfolio_item7_meta': '2025  Unity',
    'portfolio_item7_title': 'Materia Herbarium',
    'portfolio_item8_meta': '2026  Orange Game',
    'portfolio_item8_title': 'Contractual Love',
    'contact_title': 'Welcome to contact me~',
    'contact_subtitle': 'Contact Me',
    'contact_gamers': 'Gamers',
    'contact_description': 'I hope to meet more game enthusiasts and make friends with people who share a passion for games.',
    'address': 'Address',
    'postal_code': 'Postal Code',
    'email': 'Email',
    'website': 'Website',
    'address_value': 'Building 1, Unit 1, Beijing Mima East District, Daxing District, Beijing',
    'postal_code_value': '102611',
    'email_value': 'huangcola@hotmail.com',
    'website_value': 'www.huanggaole.com',
    'game_designer': 'Game Designer.',
    'game_producer': 'Game Producer.',
    'game_developer': 'Game Developer.',
    'publish': 'Publications',
    'publish_title': 'Selected Publications',
    'publish_subtitle': 'My Academic Research & Publications',
    'publish_intro': 'Here is a showcase of my published academic papers and related research materials. Papers 1 & 2 can be directly previewed as PDF, while Paper 3 features a dedicated research page with interview transcripts and coding tables.',
    'paper1_title': 'Application of Persuasive Design in Science Popularization Games',
    'paper1_authors': 'Gaole Huang',
    'paper1_venue': 'Science Education and Museums, Vol. 7, No. 3, 2021 (pp. 190-202)',
    'paper1_abstract': 'Explores the application mechanisms and empirical reflections of Persuasive Design in educational science games, analyzing how game mechanics and system design can effectively transfer scientific knowledge and guide cognitive transformation.',
    'paper2_title': 'Generative Artificial Intelligence Technology Empowers Science Popularization Content Creation',
    'paper2_authors': 'Gaole Huang',
    'paper2_venue': 'Science Education and Museums, Vol. 10, No. 1, 2024 (pp. 22-27)',
    'paper2_abstract': 'Analyzes the application prospects, potential challenges, and human-AI collaboration mechanisms of Generative AI (GenAI / AIGC) in science communication content creation, proposing a practical framework for future content creators.',
    'paper3_title': 'Agency and Creativity in GenAI-based Game Development and Design Education',
    'paper3_authors': 'Gaole Huang, Jian Tan, Max Chen',
    'paper3_venue': 'IEEE Conference on Games (CoG) 2026 (WIP)',
    'paper3_abstract': 'The rapid development of generative artificial intelligence (GenAI) is reshaping game design and development education. This paper presents a qualitative study on 30 projects and reflection reports from a graduate course, examining how GenAI influences game developers\' creative agency during training.',
    'btn_preview_pdf': 'Preview PDF',
    'btn_download_pdf': 'Download PDF',
    'btn_paper3_materials': 'Explore Dedicated Research Page',
    'paper3_page_title': 'Agency & Creativity in GenAI Game Dev — Research Materials Page',
    'paper3_materials_title': 'Research Materials & Coding Tables',
    'paper3_materials_desc': 'Below are the datasets and thematic coding analysis spreadsheets used in this study. You can download and inspect the complete analysis files.',
    'paper3_excel_cn': 'Thematic Analysis Table (Chinese .xlsx)',
    'paper3_excel_en': 'Thematic Analysis Table (English .xlsx)',
    'paper3_notes_title': '30 Participant Interview Transcripts',
    'paper3_notes_desc': 'Contains complete interview transcripts and reflection notes from 30 students participating in GenAI game projects, with bilingual switching and keyword search.',
    'notes_lang_scn': 'Simplified Chinese Notes (notes_SCN)',
    'notes_lang_en': 'English Notes (notes_EN)',
    'paper3_search_placeholder': 'Search participant ID or keywords (e.g. Balatro, Roguelike, AI...)...',
    'view_transcript': 'View Transcript',
    'back_to_publish': 'Back to Publications',
    'close': 'Close',
    'paper3_video_title': 'Original Course Defense Video',
    'paper3_video_note': 'The original course defense language is Chinese; for text versions, please refer to the Interview Transcripts at the end.'
  },
  // 日文
  'ja': {
    'home': 'ホーム',
    'hero': 'ホーム',
    'about': '私について',
    'edu & jobs': '教育と仕事',
    'portfolio': 'ポートフォリオ',
    'contact': 'お問い合わせ',
    'hero_greeting': 'こんにちは！私は',
    'hero_name': '黄高楽',
    'hero_title': '私は {{elements}}',
    'about_intro': '自己紹介：',
    'about_hello': 'こんにちは！黄高楽です。',
    'about_description': '独立系ゲーム開発者です。現在は自分の独立ゲームスタジオを運営しています。ゲーム文化が大好きで、広大なゲーム空間を探索することを自分の事業と追求として、ゲームの楽しみと価値の境界を広げるために貢献したいと思っています。',
    'name': '名前',
    'personality_type': '性格タイプ',
    'game_motivation': 'ゲームの動機',
    'birthday': '誕生日',
    'belief': '信念',
    'morality': '道徳観',
    'political_views': '政治的見解',
    'reformist': '改革派',
    'scientific_socialism': '科学的社会主義',
    'separation_of_powers': '権力分立',
    'ecologism': 'エコロジズム',
    'progressivism': '進歩主義',
    'belbin_team_role': 'ベルビンチームロール',
    'name_value': '黄高楽',
    'personality_type_value': 'INTP（内向／直観／思考／認知）',
    'game_motivation_value': '冷静・分析・社交・没入型・実用志向',
    'birthday_value': '1991年6月17日 ♊',
    'belief_value': '自然神論／自然法',
    'morality_value': '自分にしてほしいことを他人にも／ヒューマニズム',
    'belbin_team_role_value': 'ディプロマット（24）・プラント（19）・コーディネーター（10）',
    'edu_jobs_title': 'もっと私のことを知りたいですか？',
    'edu_jobs_subtitle': '私の教育と仕事',
    'education': '学歴',
    'awards': '受賞歴',
    'skills': 'スキル',
    'work_experience': '職歴',
    'education_detail': '<span class="badge bg-secondary">2014</span> 北京大学 コンピュータ応用技術<span class="badge bg-secondary">博士課程中退</span><br/><span class="badge bg-secondary">2010</span> 中南大学 コンピュータサイエンス＆テクノロジー<span class="badge bg-secondary">学士</span><br/><span class="badge bg-secondary">2007</span> 萊陽第一高校<br/><span class="badge bg-secondary">2003</span> 萊陽実験中学校<br/><span class="badge bg-secondary">1998</span> 萊陽絹紡工場 職員子弟小学校',
    'awards_detail': '<span class="badge bg-secondary">2015</span> 北京大学「学習優秀賞」<br/><span class="badge bg-secondary">2015</span> 北京大学 博士特別奨学金<br/><span class="badge bg-secondary">2014</span> 2014 年度 省優秀卒業生<br/><span class="badge bg-secondary">2014</span> 中南大学 第8回 ACM 校内コンテスト 一等賞<br/><span class="badge bg-secondary">2013</span> 中南大学 第7回 ACM 校内コンテスト 二等賞<br/><span class="badge bg-secondary">2013</span> 中南大学 優秀学生<br/><span class="badge bg-secondary">2012</span> 「中国電信 天翼飛 YOUNG」奨学金<br/><span class="badge bg-secondary">2012</span> 中南大学 一等奨学金<br/><span class="badge bg-secondary">2012</span> 中南大学 第6回 ACM 校内コンテスト 三等賞<br/><span class="badge bg-secondary">2012</span> 中南大学 優秀学生<br/><span class="badge bg-secondary">2011</span> 国家奨学金<br/><span class="badge bg-secondary">2011</span> 中南大学 特等奨学金<br/><span class="badge bg-secondary">2011</span> 中南大学 優秀学生',
    'skill_english': '英語',
    'skill_programming': 'プログラミングと科学計算',
    'skill_frontend': 'フロントエンド (HTML/CSS/JS/TS)',
    'skill_engines': 'ゲームエンジン（Unity／Laya／橙光ゲーム制作ツール）',
    'skill_graphics': 'コンピュータグラフィックス',
    'skill_writing': '企画／シナリオ／ライティング',
    'work_experience_detail': '<span class="badge bg-secondary">2025</span> 北京蜉蝣一粟科技有限公司 創業者<br/><span class="badge bg-secondary">2024</span> 黄高楽ゲームスタジオ 主宰<br/><span class="badge bg-secondary">2019</span> ByteDance 創造的ゲーム開発エンジニア<br/><span class="badge bg-secondary">2015</span> 六趣ネットワーク科技有限公司 橙光ゲーム契約作者<br/><span class="badge bg-secondary">2011</span> 中南大学 情報学部 2010級 学生会 科研学習部 幹事<br/><span class="badge bg-secondary">2011</span> 中南大学 異次元アニメクラブ 副会長<br/><span class="badge bg-secondary">2010</span> 中南大学 異次元アニメクラブ 文書部 幹部<br/><span class="badge bg-secondary">2010</span> 中南大学 異次元アニメクラブ 渉外部 幹事<br/><span class="badge bg-secondary">2010</span> 中南大学 昇華学生アパート 1CM ブックバー 店員',
    'portfolio_title': '私のポートフォリオへようこそ',
    'portfolio_subtitle': '私の作品',
    'portfolio_item1_meta': '2014  橙光ゲーム',
    'portfolio_item1_title': '非橙勿擾',
    'portfolio_item2_meta': '2018  橙光ゲーム',
    'portfolio_item2_title': 'A Gay\'s Life',
    'portfolio_item3_meta': 'GGJ2020（Repair） RMMV',
    'portfolio_item3_title': 'スクラップド・ワールド',
    'portfolio_item4_meta': 'Project1 第4回ストーリーチャレンジ  RMMV',
    'portfolio_item4_title': 'トウ・シャオミンの冒険記',
    'portfolio_item5_meta': '2022  Cocos Creator',
    'portfolio_item5_title': '五目テトリス',
    'portfolio_item6_meta': '2022  Cocos Creator',
    'portfolio_item6_title': '砂漠の小さな町',
    'portfolio_item7_meta': '2025  Unity',
    'portfolio_item7_title': '本草帰元録',
    'portfolio_item8_meta': '2026  橙光ゲーム',
    'portfolio_item8_title': '契約の愛',
    'contact_title': 'お問い合わせ歓迎~',
    'contact_subtitle': 'お問い合わせ',
    'contact_gamers': 'ゲーマーの方々',
    'contact_description': 'より多くのゲーム愛好家と知り合い、ゲームに情熱を持つ人々と友達になりたいと思っています。',
    'address': '住所',
    'postal_code': '郵便番号',
    'email': 'メール',
    'website': 'ウェブサイト',
    'address_value': '北京市大興区 北京密码東区 1号楼 1単元',
    'postal_code_value': '102611',
    'email_value': 'huangcola@hotmail.com',
    'website_value': 'www.huanggaole.com',
    'game_designer': 'ゲームデザイナーです。',
    'game_producer': 'ゲームプロデューサーです。',
    'game_developer': 'ゲーム開発者です。',
    'publish': '論文集',
    'publish_title': '発表論文集',
    'publish_subtitle': '学術研究と発表成果',
    'publish_intro': 'これまで発表した学術論文および関連研究材料を掲載しています。論文1・2はPDFを直接プレビューでき、論文3にはインタビューノートや主題分析コーディング表を含む専用研究ページが用意されています。',
    'paper1_title': '科学普及ゲームにおける説得デザインの応用',
    'paper1_authors': '黄高楽',
    'paper1_venue': '『科学と博物館』2021年第3号 (Vol. 7, No. 3, pp. 190-202)',
    'paper1_abstract': '教育用科学普及ゲームにおける説得デザイン（Persuasive Design）の応用メカニズムと実証的考察を検討し、ゲームシステムとメカニクスを通じて科学知識を効果的に伝え、認知変容を促す方法を分析します。',
    'paper2_title': '生成AI技術による科学普及コンテンツ制作の支援',
    'paper2_authors': '黄高楽',
    'paper2_venue': '『科学と博物館』2024年第1号 (Vol. 10, No. 1, pp. 22-27)',
    'paper2_abstract': '科学普及コンテンツ制作における生成AI（GenAI / AIGC）の応用可能性、潜在的課題、および人間とAIの協調メカニズムを分析し、将来の制作に向けた実践的フレームワークを提案します。',
    'paper3_title': 'Agency and Creativity in GenAI-based Game Development and Design Education',
    'paper3_authors': 'Gaole Huang, Jian Tan, Max Chen',
    'paper3_venue': 'IEEE Conference on Games (CoG) 2026 (WIP)',
    'paper3_abstract': '生成AI（GenAI）の急速な発展は、ゲームデザイン・開発教育を再定義しています。本研究では、大学院科目「AIGCゲーム開発」の30プロジェクトと振り返りレポートを定性分析し、GenAIが開発者の創造的主体性（Creative Agency）に与える影響を検討します。',
    'btn_preview_pdf': 'PDF プレビュー',
    'btn_download_pdf': 'PDF ダウンロード',
    'btn_paper3_materials': '研究材料と専用ページを見る',
    'paper3_page_title': 'GenAIゲーム開発における主体性と創造性 — 研究材料専用ページ',
    'paper3_materials_title': '研究材料と主題分析表',
    'paper3_materials_desc': '本研究で使用したデータセットおよびコーディング分析スプレッドシートです。完全な分析ファイルをダウンロードして閲覧できます。',
    'paper3_excel_cn': '主題分析コーディング表（中国語版 .xlsx）',
    'paper3_excel_en': '主題分析コーディング表（英語版 .xlsx）',
    'paper3_notes_title': '30名の対象者インタビューノート (Interview Transcripts)',
    'paper3_notes_desc': '生成AIゲームプロジェクトに参加した30名の学生のインタビュー文字起こしと振り返りノートを収録。日英言語切替およびキーワード検索が可能です。',
    'notes_lang_scn': '簡体字中国語ノート (notes_SCN)',
    'notes_lang_en': '英語ノート (notes_EN)',
    'paper3_search_placeholder': '対象者IDまたはキーワード（例：Balatro, Roguelike, AI...）で検索...',
    'view_transcript': 'ノートを見る',
    'back_to_publish': '論文集に戻る',
    'close': '閉じる',
    'paper3_video_title': '元の発表録画',
    'paper3_video_note': '原始课程答辩语言采用的是中文，文字版本参见最末的Interview Transcripts'
  }
};

// 当前语言
let currentLang = 'zh-CN';

// 语言切换函数
function changeLanguage(lang) {
  currentLang = lang;
  updatePageContent();
  // 保存用户语言偏好
  localStorage.setItem('preferredLanguage', lang);
}

// 更新页面内容
function updatePageContent() {
  const langData = translations[currentLang];
  
  // 更新所有带有data-i18n属性的元素
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (langData[key]) {
      // 处理带有变量的翻译
      if (langData[key].includes('{{elements}}')) {
        const elements = element.getAttribute('data-elements')?.split(',') || [];
        const translatedElements = elements.map(el => langData[el.trim()]).join(',');
        element.innerHTML = langData[key].replace('{{elements}}', `<span class="element font-weight-bold" data-elements="${translatedElements}"></span>`);
        // 重新初始化typed.js
        if (typeof typed !== 'undefined') {
          typed.destroy();
        }
        typedJS();
      } else if (element.getAttribute('data-i18n-html') === 'true') {
        element.innerHTML = langData[key];
      } else {
        element.textContent = langData[key];
      }
    }
  });
  
  // 更新导航菜单中的文本
  document.querySelectorAll('#myMenu a').forEach(link => {
    let href = link.getAttribute('href');
    if (href) {
      if (href.startsWith('#')) href = href.substring(1);
      if (href.endsWith('.html')) href = href.replace('.html', '');
      if (langData[href]) {
        const nm = link.querySelector('.nm');
        const nmText = nm ? nm.textContent : '';
        link.innerHTML = nmText ? `<span class="nm">${nmText}</span>${langData[href]}` : langData[href];
      }
    }
  });
  
  const motivationImg = document.querySelector('.motivation-img');
  if (motivationImg) {
    if (currentLang === 'en') {
      motivationImg.src = 'assets/img/motivation_en.png';
    } else {
      motivationImg.src = 'assets/img/motivation.png';
    }
  }

  const portfolioItem3Link = document.getElementById('portfolio-item3-link');
  if (portfolioItem3Link) {
    if (currentLang === 'en' || currentLang === 'ja') {
      portfolioItem3Link.href = 'https://huanggaole.github.io/disabledworld/';
    } else {
      portfolioItem3Link.href = 'https://huanggaole.github.io/baofei/';
    }
  }

  document.querySelectorAll('.lang-btn').forEach(button => {
    const buttonLang = button.getAttribute('data-lang');
    if (buttonLang) {
      button.classList.toggle('active', buttonLang === currentLang);
    }
  });

  // 更新页面语言属性
  document.documentElement.lang = currentLang;
}

// 初始化多语言功能
function initI18n() {
  // 从localStorage加载用户语言偏好
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  } else {
    // 检测浏览器语言
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      currentLang = browserLang;
    }
  }
  
  updatePageContent();
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
