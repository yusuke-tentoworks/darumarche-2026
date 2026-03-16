document.addEventListener('DOMContentLoaded', () => {
    console.log('Daruma Marche 2026 LP Loaded');

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 一度表示されたら監視を終了
            }
        });
    }, observerOptions);

    // Hero Background Animation (Falling Sakura Petals)
    function initHeroAnimation() {
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        function createPetal() {
            const petal = document.createElement('div');
            petal.classList.add('hero-petal');

            // Randomize properties
            const startLeft = Math.random() * 100; // 0% to 100%
            const duration = 5 + Math.random() * 5; // 5s to 10s falling time
            const size = 10 + Math.random() * 15; // 10px to 25px
            const delay = Math.random() * 5; // Start delay

            petal.style.left = `${startLeft}%`;
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`; // Shape handled in CSS
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `-${delay}s`; // Negative delay to start mid-animation if needed, or 0

            heroSection.appendChild(petal);

            // Remove after animation
            setTimeout(() => {
                petal.remove();
            }, duration * 1000);
        }

        // Create initial batch
        for (let i = 0; i < 20; i++) {
            createPetal();
        }

        // Continuous generation
        setInterval(() => {
            createPetal();
        }, 300); // New petal every 300ms
    }

    initHeroAnimation();

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const spNav = document.querySelector('.sp-nav');
    const spNavLinks = document.querySelectorAll('.sp-nav a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        spNav.classList.toggle('active');
    });

    spNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            spNav.classList.remove('active');
        });
    });

    // Schedule Dropdown
    const dropdownItems = document.querySelectorAll('.schedule-item.has-dropdown');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Gallery Load More
    const galleryGrid = document.getElementById('gallery-grid');
    const loadMoreBtn = document.getElementById('load-more-gallery');

    if (galleryGrid && loadMoreBtn) {
        const totalImages = 39;
        const itemsPerPage = 12;
        let currentPage = 1;

        function loadImages(page) {
            const start = (page - 1) * itemsPerPage + 1;
            const end = Math.min(page * itemsPerPage, totalImages);

            for (let i = start; i <= end; i++) {
                const imgNum = String(i).padStart(2, '0');
                const imgContainer = document.createElement('div');
                imgContainer.className = 'gallery-item';

                const img = document.createElement('img');
                img.src = `images/gallery-2025-${imgNum}.webp`; // Optimized JPG
                img.alt = `Gallery Image 2025-${imgNum}`;
                img.loading = 'lazy';

                imgContainer.appendChild(img);
                galleryGrid.appendChild(imgContainer);
            }

            if (end >= totalImages) {
                loadMoreBtn.classList.add('hidden');
            }
        }

        // Initial Load
        loadImages(currentPage);

        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            loadImages(currentPage);
        });
    }

    // Shop Detail Modal
    const shopData = {
        "nicofarm": {
            name: "にこふぁーむ",
            detail: "いちご",
            description: "",
            chuzania: "",
            image: "images/nico-farm.webp",
            instagram: ""
        },
        "medakasuku1": {
            name: "めだかすくい",
            detail: "めだかすくい",
            description: "",
            chuzania: "",
            image: "images/shop-medaka.webp",
            instagram: ""
        },
        "alkukkailo": {
            name: "alkukka.ilo(アルクッカイロ)",
            detail: "感覚感じるアクセサリー",
            description: "持ってる人が軽くなり、ラッキーがやってるくる！そんなアクセサリーを作っています♪\nお久しぶりの出店になります、みなさんにお会いできるのを楽しみにしています！",
            chuzania: "お買い上げアイテムを袋詰めしてお渡ししよう体験：50チュ",
            image: "images/shop-alkukka.ilo.webp",
            instagram: "https://www.instagram.com/alkukka.ilo_saori/"
        },
        "honuart": {
            name: "HONUART",
            detail: "ディンプルアート体験",
            description: "車のフロントガラスのリサイクルから生まれた絵の具を使って塗るディンプルアート！原料が廃材からできているので、描けば描く程、ゴミが減らせる地球に優しい新アートが体験できます。\n塗り絵のように塗ったり、色を混ぜてみたり、新感覚で面白いアート！乾くと自然と現れる凸凹模様も何とも不思議。\n見本通りだっていい‼見本と違ったっていい‼自分で決めて作るから、世界に一つの自分だけの宝物が出来上がりますよ✨是非是非体験しに来てください🌈",
            chuzania: "画家さん体験：50チュ",
            image: "images/shop-honuart.webp",
            instagram: "https://www.instagram.com/dimpleart_honuart/"
        },
        "ohumyapple": {
            name: "Oh!UMyAPPLE",
            detail: "りんご飴、りんごグミ",
            description: "青森、北海道の農家さん厳選の今1番美味しいりんごを使用した華やかなりんご飴。季節に応じた限定のメニューも揃えています。パリッとジューシーなりんご飴ぜひご賞味ください。",
            chuzania: "",
            image: "images/shop-ohumyapple.webp",
            instagram: "https://www.instagram.com/ohumyapple/"
        },
        "yururi": {
            name: "yururi (ユルリ)",
            detail: "パーツ使い放題ワークショップ、アクセサリー販売",
            description: "世界で1つのオリジナルアクセサリーが作れるパーツ使い放題のワークショップを開催します♡\nパーツを選んだらあとはお手伝いしますので、自分だけの”かわいい”を詰め込んだアクセサリーが簡単に作れます！\nかわいいパーツやプラスで付けられるモコモコ&キーホルダーは毎回人気なので欲しい色やデザインが無くなってしまうことも！\n気になる方はお早めにお越しくださいね♪\nアクセサリー販売もしますのでお子さまもmama達もぜひ遊びに来てください♡",
            chuzania: "世界で1つのオリジナルアクセサリー作り\nヘアピン：10チュ\nイヤリング&キーホルダー：30チュ",
            image: "images/shop-yururi.webp",
            instagram: "https://www.instagram.com/yururi06_f/"
        },
        "minitoyohashi": {
            name: "MINI 豊橋",
            detail: "車両展示",
            description: "輸入車ブランドMINIの正規ディーラーです。フルモデルチェンジで進化した新型MINI。ＥＶモデルや新しいSUVモデルのカントリーマンも展示するのでお気軽にお立ち寄りください。",
            chuzania: "",
            image: "images/shop-mini-toyohashi.webp",
            instagram: "https://www.instagram.com/mini_toyohashi/"
        },
        "besoa": {
            name: "株式会社 BE-SOA",
            detail: "キックターゲット",
            description: "狙え❗️蹴れ❗️抜け❗️⚽️キックターゲット‼️\n子どもも大人も挑戦OK🙆\nイベント名物！キックターゲット登場✨",
            chuzania: "",
            image: "images/shop-be-soa.webp",
            instagram: ""
        },
        "suzuhiro": {
            name: "唐揚げのスズヒロ",
            detail: "唐揚げ、ロングポテト、綿飴",
            description: "ザクッ！ジュワ！ウマ！\n大きい唐揚げです。",
            chuzania: "",
            image: "images/shop-suzuhiro.webp",
            instagram: "https://www.instagram.com/suzuhiro_aozorahanbai/"
        },
        "minoaka": {
            name: "mino'aka",
            detail: "パラコードグッズ",
            description: "パラコードで編んだわんこグッズ、スマホショルダーなどを作っています。\n毎日に彩りを添えるアイテムを見て頂けたら嬉しいです😊\n〜ミノアカ〜 \n人とわんこのパラコード屋さん",
            chuzania: "",
            image: "images/shop-minoaka.webp",
            instagram: "https://www.instagram.com/minoaka_paracord/"
        },
        "ayakanmuri": {
            name: "ayakanmuri | melty me（あやかんむり　めるてぃーみー）",
            detail: "子供服、アクセサリー、ワークショップ",
            description: "ayakanmuri：自分で選んで、楽しく作れるキーホルダーと新感覚のキラジャラヘアアクセのワークショップ屋さんです\nmeltyme ：小物や子供のお洋服を作っております。ワンピースは夏でも冬でも中のお洋服次第で調節できます。",
            chuzania: "わたあめカップキーホルダー 950円：100チュ\nキラじゃらヘアアクセ 850円：50チュ\nayakanmuriのアクセサリーを購入してその場で身につけてくれた子にモデル料：50チュ\nmeltymeで購入したお洋服を袋につめるお手伝い：50チュ",
            image: "images/ayakanmuri-melty me.webp",
            instagram: "https://www.instagram.com/ayakanmuri/\nhttps://www.instagram.com/melty_me_22/"
        },
        "natur": {
            name: "natur | Lily.twinkle（ナチュール　リリートゥインクル）",
            detail: "カスタムクレヨン、子供服、小物",
            description: "カラフルでどこから描いても色とりどり可愛いクレヨンを販売してます🖍️",
            chuzania: "lily.twinkleで購入した商品を袋に詰めるお手伝い：50チュ",
            image: "images/shop-natur-Lily.twinkle.webp",
            instagram: "https://www.instagram.com/natur_52/\nhttps://www.instagram.com/____lily.twinkle/"
        },
        "kidorico": {
            name: "kidorico",
            detail: "こども服、大人服、小物など",
            description: "肌触りの良いコットンやリネンの天然素材を使用し、こども服、おとな服など製作販売しています。\n日常着にも、特別なときにも…。\nシンプルな中にもこだわった、どこかかわいいItemをお届けできたらなと思っています。",
            chuzania: "",
            image: "images/shop-kidorico.webp",
            instagram: "https://www.instagram.com/kidorico/"
        },
        "cocomei": {
            name: "cocomei",
            detail: "ウッドバーニング名入れ、韓国スライムws",
            description: "【ウッドバーニング】\n愛知県岡崎市でウッドバーニング作家として活動しておりますcocomeiです。木製カトラリーや木製お皿や器、おもちゃなどへの絵や名前の焼き入れをします！\n赤ちゃんから大人、そしてペットと家族みんなに喜んでいただける商品を扱っております。\nその場で絵や名前を焼き入れています！\n\n【韓国スライムワークショップ】\n子どもたちに大人気のスライムデコレーション！あらかじめケースに入っているかためのクリアなスライムに、色付けやパーツやラメを好きに入れてオリジナルスライムが作れます！パーツは入れ放題！",
            chuzania: "",
            image: "images/shop-cocomei.webp",
            instagram: "https://www.instagram.com/cocomei8/"
        },
        "magocorobase": {
            name: "magocoro base",
            detail: "防災ワークショップ",
            description: "#防災をカジュアルに\n\nワークショップを通じて、\n防災を身近で楽しいものに\nチェンジしてみませんか？  \n\n---\n\n🪄リメイク缶バッジワークショップ\n\nお菓子の袋やペットボトルのラベル、\n包装紙などを再利用して、\nオリジナル缶バッジを作りましょう！  \nリサイクルを通じて、\n環境への配慮や防災について考えるきっかけに💫\n意外におしゃれな仕上がりになるので\n子どもにも大人にも大人気！\n\n⭐素材のお持ち込みOK！\nお気に入りのラベルや紙袋がありましたら\nぜひお持ちください😊\n\n対象素材：プラスチック\n(お菓子の袋、ペットボトルのラベルなど)、\n紙（新聞紙・チラシ・包装紙など）  \n使用不可：シワが強いもの、厚手の箱素材",
            chuzania: "",
            image: "images/shop-magocoro-base.webp",
            instagram: "https://www.instagram.com/magocorobase71/"
        },
        "littlemixer": {
            name: "Little Mixer",
            detail: "ポーセラーツ作品の販売、ワークショップ",
            description: "ポーセラーツサロンLittle Mixerです♡\n大人可愛い食器、またお子様用の食器を販売しています☻\n当日はワークショップも開催します！\n100種類以上ある転写紙(シール)の中から、お好みの柄を選んで、オリジナルの食器をお作り頂けます♡\n小さなお子様でも簡単にお作り頂けますので、ぜひご参加下さい♩",
            chuzania: "ポーセラーツワークショップ：50チュ",
            image: "images/shop-little-mixer.webp",
            instagram: "https://www.instagram.com/little_mixer.12/"
        },
        "gluckbagel": {
            name: "gluck bagel",
            detail: "ベーグル専門店",
            description: "柔らかいもちもち、メニューは日替わりで\n四季折々旬のも果物や野菜など使用\n一度た食べたら幸せいっぱいになります",
            chuzania: "",
            image: "images/shop-gluckbagel.webp",
            instagram: "https://www.instagram.com/pankosaeko/"
        },
        "belltree": {
            name: "BELL TREE",
            detail: "手形足形アートのワークショップ",
            description: "手形足形アートのワークショップ\n\nお子さまの『今』しかない大きさの手形、足形をかわいくアートにして残しませんか？\n家族みんなで作れるファミリーアートも大人気‼\nプレゼントにも大変喜ばれます。\n家族みんなでぜひぜひ遊びにきてください♡",
            chuzania: "ワークショップで出来上がった作品の袋詰め体験\n手形、足形１つ：50チュ\nファミリーアート：100チュ",
            image: "images/shop-belltree.webp",
            instagram: "https://www.instagram.com/bell_tree.222/"
        },
        "halmeoni": {
            name: "halmeoni (はるもに)",
            detail: "シフォンケーキ販売",
            description: "シフォンケーキ販売\n\n年に数回のマルシェとご予約注文のみの店舗のないシフォンケーキ屋。豊橋市駒形町「渚ギャラリー」併設喫茶のシフォンも担当しています。小麦粉・米粉どちらもあり。だるまルシェでは春限定のさくらシフォンを準備してお待ちしています。",
            chuzania: "",
            image: "images/shop-halmeoni.webp",
            instagram: "https://www.instagram.com/halmeoni_mai/"
        },
        "napogyaru": {
            name: "なぽぎゃるまるしぇ.ism",
            detail: "こども向けワークショップ（大人も可(OK)）",
            description: "初めて〘だるまルシェさん〙に出店させていただきます、ワークショップのなぽぎゃるまるしぇ.ismです🐣\nデコパーツやホイップクリームを使って世界に1つだけのオリジナル商品を作っていただけます。\nキャンディバックをはじめ色々な雑貨・文具・ヘアアクセなど用意、たくさんのパーツからお気に入りを選んで可愛くデコってオリジナルアイテムを作りましょう♡遊びに来て下さいね♡",
            chuzania: "ホイップデコ商品作り体験：50チュ",
            image: "images/shop-napogyaru.webp",
            instagram: "https://www.instagram.com/napogyaru_marche.tb127/"
        },
        "tadano": {
            name: "TADANO artisanal goldfish",
            detail: "きんぎょすくい",
            description: "丈夫でかわいい金魚たちをペットにしてみませんか？珍しい品種、かわいい柄、他ではなかなかお目にかかれない金魚たちをぜひ見に来てください！\n飼えないけどすくってみたい、も大歓迎です！\n優しくすくうとたくさんすくえますよ♪",
            chuzania: "",
            image: "images/shop-tadano.webp",
            instagram: "https://www.instagram.com/tadanoartisanalgoldfish/"
        },
        "raglankitchen": {
            name: "ラグラン キッチン",
            detail: "Fish＆CHIP、ポテト",
            description: "ホクホクなポテトをお楽しみ頂けます。\n看板メニューのFish＆CHIPも、ぜひご賞味ください！",
            chuzania: "",
            image: "images/shop-raglankitchen.webp",
            instagram: "https://www.instagram.com/raglan.kitchen/"
        },
        "calmtto": {
            name: "calmtto (カルムット)",
            detail: "キャンドル販売、ワークショップ",
            description: "せわしなく進んでいく日常に、ほっとできるひと時を感じて頂きたい。素敵な空間作りのお手伝いができたらうれしいです。\n当日は、お子様も楽しめるワークショップを予定しております。ぜひ遊びにきてください。",
            chuzania: "キャンドル作りワークショップ：20チュ",
            image: "images/shop-calmtto.webp",
            instagram: "https://www.instagram.com/calmtto/"
        },
        "paki": {
            name: "paki（パキ）",
            detail: "豚汁・フランクフルト・植物販売",
            description: "コウモリランや苔玉などの植物販売と、\nトレーラーで豚汁などを販売します！！\nよろしくお願いします♪",
            chuzania: "",
            image: "images/shop-paki.webp",
            instagram: "https://www.instagram.com/paki0619/"
        },
        "droomcafe": {
            name: "DROOM CAFE (ドロームカフェ)",
            detail: "ドリンク各種、アパレル雑貨",
            description: "こだわりのコーヒー、各種ドリンクを飲みながらアパレル雑貨をご覧になれるキッチンカーです、よろしくお願い致します",
            chuzania: "",
            image: "images/shop-droomcafe.webp",
            instagram: "https://www.instagram.com/droom_cafe0.4/"
        },
        "mamafleamarket": {
            name: "MAMA fleamarket (ママフリーマーケット)",
            detail: "子ども服を中心としたフリーマーケット",
            description: "豊橋豊川を中心に子育てママ達によるフリーマーケットを運営しております！物を大切に繋げていきませんか？🧺♡\n運営の皆さま、出店者様、今年度も参加することができ光栄です🌸よろしくお願いいたします☺️",
            chuzania: "",
            image: "images/shop-mamafleamarket.webp",
            instagram: "https://www.instagram.com/__mama__fleamarket/"
        },
        "pastelart": {
            name: "パステル×筆文字はうす (パステルフデモジハウス)",
            detail: "パステルアート体験",
            description: "パステルという画材を使ったアート体験ができます。削って粉にして指でくるくる。誰でも簡単に優しい色合いの絵が描く事ができます。お子さんも大人の方もお選びいただけるモチーフをご用意しています。",
            chuzania: "パステルアートワークショップ：50チュ",
            image: "images/shop-pastelart.webp",
            instagram: "https://www.instagram.com/pastel3art/"
        },
        "tentocoffee": {
            name: "てんとコーヒー",
            detail: "ドリップコーヒーの販売",
            description: "自家焙煎コーヒーで、しあわせをおとどけ。",
            chuzania: "コーヒー豆焙煎体験：50チュ",
            image: "images/shop-tentocoffee.webp",
            instagram: "https://www.instagram.com/tentocoffee_2021/"
        },
        "ange": {
            name: "ange (アンジュ)",
            detail: "ワークショップ、手染めビーズアクセサリー販売",
            description: "ホイップクリームみたいに可愛いホイップデコアートとめじるアクセサリー付きハーバリウムボトルのワークショップ🤍\nパーツを選んで、自分だけの「可愛い」を詰め込んだオリジナル作品をお作りいただけます✨\nお子さまから大人の方まで初めての方も安心してお作り頂けます🤍",
            chuzania: "インテリア小物づくりワークショップ：50チュ",
            image: "images/shop-ange.webp",
            instagram: "https://www.instagram.com/ange7ka/"
        },
        "spicecurrydamp": {
            name: "SPICE CURRY だんぷ",
            detail: "スパイスカレー、ラッシー等のドリンク販売",
            description: "あいちのかおり米に合うもったり感のあるグルテンフリーのスパイスカレーをお届けします。",
            chuzania: "",
            image: "images/shop-spicecurrydamp.webp",
            instagram: "https://www.instagram.com/spicecurry_damp/"
        },
        "uncreme": {
            name: "un crème (アンクレーム)",
            detail: "クレープ各種",
            description: "『シンプルに美味しいモノ』をコンセプトに焼き立てにこだわり、季節の食材とクリームを合わせた手作りクレープを提供致します。",
            chuzania: "",
            image: "images/shop-uncreme.webp",
            instagram: "https://www.instagram.com/un.creme/"
        },
        "bebemignon": {
            name: "bebe mignon (ベベミニョン)",
            detail: "ベビー、キッズ、ママアイテム",
            description: "bebe mignonです。\n母娘でベビー用品を販売していますベビースタイ、ベビーリュックなどのべビー商品からヘアピン、つけ襟などキッズ商品更にマザーズバック、ポーチなど大人が使えるアイテム、お祝いにもおすすめですので是非お待ちしています。",
            chuzania: "",
            image: "images/shop-bebemignon.webp",
            instagram: "https://www.instagram.com/bebe.mignon1012/"
        },
        "nicoron": {
            name: "nicoron (ニコロン)",
            detail: "ファーストアート&フィンガーアート",
            description: "生まれて初めて作るファーストアート！初めてじゃなくても、手先を使い世界にひとつしかないアートを作るフィンガーアート🎨手が汚れずお好きな色でアートを作ります。babyだけでなくkidsや大人の方も楽しめる、心にも形にも残る素敵なアートです♪\n(※アクリル絵の具をしようします。キャンバスに出す際など汚れることがあるため、汚れても良い服をおすすめしております。)",
            chuzania: "ファーストアートワークショップ：50チュ",
            image: "images/shop-nicoron.webp",
            instagram: "https://www.instagram.com/nicoron_babylesson/"
        },
        "patisseriem": {
            name: "PATISSERIE M. (パティスリーエムドット)",
            detail: "焼き菓子（クッキー、ケーキ）",
            description: "PATISSERIE M.では厳選した、\n◎北海道産の小麦粉\n◎きび砂糖\n◎よつ葉バター\n◎北海道産発酵バター\n◎オーガニックオートミール\n◎オーガニックプレッツェル\nを使用しています。（お菓子によっては粉砂糖やグラニュー糖を使用する場合もございます）\nなるべく身体に優しい材料で美味しいおやつを𓂃.◌𓈒𖡼𓂂𓏲𓆸܀\nおいしい焼き菓子で小さな幸せをお届けします𓂃𓋪◌",
            chuzania: "",
            image: "images/shop-patisseriem.webp",
            instagram: "https://www.instagram.com/patisserie__m.__/"
        },
        "sunfishkino": {
            name: "サンフィッシュキノ",
            detail: "マグロのメンチカツ、イカ焼き",
            description: "浜松で魚屋さんをやっています。久しぶりに出店させてもらうのでワクワクしてます。よろしくお願いしまーす",
            chuzania: "",
            image: "images/shop-sunfishkino.webp",
            instagram: "https://www.instagram.com/sunfishkino/"
        },
        "toyohashiuzura": {
            name: "豊橋養鶉農業協同組合",
            detail: "うずら卵、うずら水煮、うずら味つけ水煮販売",
            description: "愛知県豊橋市は、うずら卵の生産量日本一。\nうずら卵、うずら水煮の販売はもちろん、うずら味つけ水煮21種類あるのは、豊橋養鶉農業協同組合だけ！うずら卵のピクルスも販売します！",
            chuzania: "",
            image: "images/shop-toyohashiuzura.webp",
            instagram: "https://www.instagram.com/toyohashi_uzura/"
        },
        "fukufukumuffins": {
            name: "fuku fuku muffins (フクフクマフィンズ)",
            detail: "からだにやさしいマフィン、焼き菓子",
            description: "国産小麦・粗製糖・米油・有機豆乳を使った、からだにやさしいマフィンを販売します。\n季節の素材を使ったマフィンを中心に、クッキー・スコーン・グラノーラ等も並びます。\n\n季節の素材やフルーツの香りを大切に、しっとりやさしいマフィンを焼いています。\nほっとする“ふくふくマフィン”をぜひお楽しみください☺🍀",
            chuzania: "",
            image: "images/shop-fukufukumuffins.webp",
            instagram: "https://www.instagram.com/fuku_fuku_muffins/"
        },
        "ruggine": {
            name: "ルッジネ",
            detail: "薪窯ピッツァ",
            description: "2023年イタリアのナポリで開催された、ナポリピッツァ世界大会出場\n食材や小麦粉を厳選して生地作りの工程や製法を日々追求しています\n是非 焼きたてのピッツァをご堪能ください",
            chuzania: "",
            image: "images/shop-ruggine.webp",
            instagram: "https://www.instagram.com/ruggine_jp/"
        },
        "cotucotu385": {
            name: "cotucotu385(コツコツミヤコ)",
            detail: "羊毛フェルト雑貨",
            description: "羊毛フェルト雑貨\n見るたびにホッとするような、クスッと笑えるような作品作りを楽しんでいます。日々の生活の中の癒しになっていただけたらうれしいです。",
            chuzania: "",
            image: "images/shop-cotucotu385.webp",
            instagram: "https://www.instagram.com/cotucotu385/"
        },
        "19banhole": {
            name: "19番ホール",
            detail: "出来立てアツアツの唐揚げ",
            description: "19番ホールでは出来立てアツアツを提供する為に注文を受けてから揚げています！が最近は冷えても美味しいと好評です！",
            chuzania: "",
            image: "images/shop-19banhole.webp",
            instagram: "https://www.instagram.com/19banholeeee/"
        },
        "aromafamdog": {
            name: "Aroma_famdog NikoMiMi",
            detail: "耳つぼジュエリー、デコミラー/キーホルダー/デコヘアピンWS",
            description: "初めましてAroma_famdogです🐶🐾໊\n飼い主様わんちゃんも癒されるわんちゃん好みの香りで肉球クリームが作れます。\n万能クリーム リップクリームも作れます🌿\n耳つぼジュエリーもマルシェ価格で出店させて頂いております👂🎀*. ﾟ",
            chuzania: "",
            image: "images/shop-aromafamdog.webp",
            instagram: "https://www.instagram.com/aroma_famdog/"
        },
        "kosukitchen": {
            name: "コスキッチん",
            detail: "日本縦断カレー、自家製タンドリーチキン",
            description: "日本で初めてキッチンカーで日本縦断したカレー屋\nもとフランス料理シェフが作るレアな欧風カレー",
            chuzania: "",
            image: "images/shop-kosukitchen.webp",
            instagram: "https://www.instagram.com/kosukitchen/"
        },
        "mkbanana": {
            name: "MK banana（エムケーバナナ）",
            detail: "アクセサリー、kids item",
            description: "#耳元を華やかに　をテーマに普段から特別な日にも楽しんで頂けるような、大ぶりのピアスを製作しています。\n個性的なモノからトレンドモノまで、たくさん用意していきますので、ぜひ！手にとって、見て頂けたら嬉しいです！\nよろしくお願いします🙇🌼",
            chuzania: "",
            image: "images/shop-mkbanana.webp",
            instagram: "https://www.instagram.com/mk_banana33/"
        },
        "danoncafe": {
            name: "Danon Cafe (ダノンカフェ)",
            detail: "クロッフル各種、ドリンク各種",
            description: "東三河を中心にトレーラータイプのキッチンカーでクロッフル&ドリンクを販売しています\nご来店お待ちしております",
            chuzania: "",
            image: "images/shop-danoncafe.webp",
            instagram: "https://www.instagram.com/danoncafe/"
        },
        "superrico": {
            name: "SUPER RICO",
            detail: "タコス",
            description: "ローカライズしないタコスと言えばSUPER RICO！",
            chuzania: "",
            image: "images/shop-superrico.webp",
            instagram: "https://www.instagram.com/super8rico/"
        },
        "wildboar": {
            name: "wild boar(ワイルドボア)",
            detail: "布小物、アクセサリー等",
            description: "キッズもママもhappyに!!!\nたくさんの笑顔がみたい!!!\nそんな思いを込めて一つーつ丁寧に製作しております。\nぜひ、お立ち寄り下さい。",
            chuzania: "スライムバック作り 50chu",
            image: "images/shop-wildboar.webp",
            instagram: "https://www.instagram.com/wildboar00/"
        },
        "bamboojockey": {
            name: "BAMBOO JOCKEY",
            detail: "ガーリックシュリンプ",
            description: "バンブージョッキーです\nハワイ料理のガーリックシュリンプをアメリカンスクールバスでご提供してます\n味はガーリックがベースでアメリカ南部地域のスパイスのケイジャンとチーズがほのかに香るイタリアンのバジルの3種類ございます\nスクールバスは運転席を開放してるので是非遊んで行ってください",
            chuzania: "",
            image: "images/shop-bamboojockey.webp",
            instagram: "https://www.instagram.com/bamboojockey/"
        },
        "churushe": {
            name: "ちゅる〜しぇ",
            detail: "占い、美容、物販",
            description: "占い、美容、物販",
            chuzania: "",
            image: "images/shop-churushe.webp",
            instagram: "https://www.instagram.com/churu_she/"
        },
        "haguri": {
            name: "はぐり",
            detail: "ドライフラワー、かんなくずディフューザー、小物",
            description: "初めまして、はぐりです🕊️\nドライフラワーアレンジや、かんなくずを使ったディフューザースティックなどを制作しています🪵✨\n子ども向けカスタムキーホルダーWSも開催中。\nカスタムキーホルダーWS 500〜1000円",
            chuzania: "",
            image: "images/shop-haguri.webp",
            instagram: "https://www.instagram.com/ha.gu.ri/"
        },
        "kashohiyori": {
            name: "菓匠hiyori(カショウヒヨリ)",
            detail: "和風洋菓子(生菓子、焼き菓子)日本茶葉の販売",
            description: "愛知県蒲郡市で完全予約制、無店舗の和風洋菓子屋をしてます\n日本の素材や伝統を洋菓子と組み合わせ、安心して食べられる\nどんな『日』でも『和』む様なお菓子をお作り致します。",
            chuzania: "",
            image: "images/shop-hiyori.webp",
            instagram: "https://www.instagram.com/kasho_hiyori/"
        },
        "dddddd": {
            name: "ディーストア(ディーストア)",
            detail: "ハンドメイド雑貨",
            description: "色！イロ！いろ！な雑貨屋さんです✌️\n一度来てみてっ！ディーストア！",
            chuzania: "",
            image: "images/shop-dddddd.webp",
            instagram: "https://www.instagram.com/dddddd_store/"
        },
        "koganehoshiimo": {
            name: "黄金干し芋",
            detail: "各種干し芋の販売",
            description: "愛知県豊橋市にあるお芋工場。\n自社工場でじっくり熟成させた\n自然の甘さの干し芋は離乳食後期のお子様から\nわんちゃんまで家族みんなで楽しめます。\n国産の無添加干し芋をご堪能ください。",
            chuzania: "黄金干し芋販売のお手伝い：50チュ",
            image: "images/shop-koganehoshiimo.webp",
            instagram: "https://www.instagram.com/kogane_hoshiimo/"
        },
        "radlandpicnic": {
            name: "RAD LAND PICNIC",
            detail: "ハンバーガー",
            description: "eat me",
            chuzania: "",
            image: "images/shop-radlandpicnic.webp",
            instagram: "https://www.instagram.com/rad_land_picnic/"
        },
        "ndon": {
            name: "ンドン",
            detail: "うどん、天ぷら",
            description: "甘めのつゆにモチモチのうどんと揚げたての天ぷら。\n移動式うどん屋台でしか味わえない一杯がここに。",
            chuzania: "",
            image: "images/shop-ndon.webp",
            instagram: "https://www.instagram.com/ndon_yu/"
        }
    };

    // Add 'is-chuzania' class to list items
    Object.keys(shopData).forEach(key => {
        if (shopData[key].chuzania) {
            const item = document.querySelector(`.shop-item-modal[data-shop-id="${key}"]`);
            if (item) {
                item.classList.add('is-chuzania');
            }
        }
    });



    const modal = document.getElementById('shop-modal');
    const modalShopName = document.querySelector('.modal-shop-name');
    const modalShopDetail = document.querySelector('.modal-shop-detail');
    const modalDescription = document.querySelector('.modal-description');
    const modalChuzania = document.querySelector('.modal-chuzania');
    const modalImage = document.querySelector('.modal-image img');
    const modalInstagram = document.querySelector('.modal-instagram-btn');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    const items = document.querySelectorAll('.shop-item-modal');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const shopId = item.getAttribute('data-shop-id');
            const data = shopData[shopId];

            if (data && modal) {
                modalShopName.textContent = data.name;
                modalShopDetail.textContent = data.detail;
                modalDescription.textContent = data.description;

                // チュッザニア情報があれば表示、なければ非表示
                if (data.chuzania) {
                    modalChuzania.textContent = data.chuzania;
                    modalChuzania.style.display = 'block';
                } else {
                    modalChuzania.style.display = 'none';
                }

                modalImage.src = data.image;

                // Instagramリンクがあれば表示、なければ非表示
                if (data.instagram) {
                    modalInstagram.href = data.instagram;
                    modalInstagram.style.display = 'inline-flex'; // flexで表示崩れを防ぐ
                } else {
                    modalInstagram.style.display = 'none';
                }

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // 背景スクロール固定
            }
        });
    });

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // Lazy Load Google Map
    const accessSection = document.getElementById('access');
    const mapIframe = document.querySelector('.map-wrapper iframe');

    if (accessSection && mapIframe) {
        // Store the src and remove it initially to prevent loading
        const mapSrc = mapIframe.getAttribute('src');
        if (mapSrc) {
            mapIframe.setAttribute('data-src', mapSrc);
            mapIframe.removeAttribute('src');
        }

        const mapObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target.querySelector('iframe');
                    if (iframe && iframe.getAttribute('data-src')) {
                        iframe.src = iframe.getAttribute('data-src');
                        iframe.removeAttribute('data-src');
                        obs.unobserve(entry.target);
                    }
                }
            });
        }, {
            rootMargin: '200px'
        });

        mapObserver.observe(accessSection);
    }
});
