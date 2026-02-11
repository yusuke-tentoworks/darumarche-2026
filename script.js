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
                img.src = `images/gallery-2025-${imgNum}.png`; // png or jpg depending on actual files. Assuming png from renaming script.
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
        "honuart": {
            name: "HONUART",
            detail: "ディンプルアート体験",
            description: "車のフロントガラスのリサイクルから生まれた絵の具を使って塗るディンプルアート！原料が廃材からできているので、描けば描く程、ゴミが減らせる地球に優しい新アートが体験できます。\n塗り絵のように塗ったり、色を混ぜてみたり、新感覚で面白いアート！乾くと自然と現れる凸凹模様も何とも不思議。\n見本通りだっていい‼見本と違ったっていい‼自分で決めて作るから、世界に一つの自分だけの宝物が出来上がりますよ✨是非是非体験しに来てください🌈",
            chuzania: "画家さん体験　50チュ",
            image: "images/shop-honuart.jpg",
            instagram: "https://www.instagram.com/dimpleart_honuart/"
        },
        "ohumyapple": {
            name: "Oh!UMyAPPLE",
            detail: "りんご飴、りんごグミ",
            description: "青森、北海道の農家さん厳選の今1番美味しいりんごを使用した華やかなりんご飴。季節に応じた限定のメニューも揃えています。パリッとジューシーなりんご飴ぜひご賞味ください。",
            chuzania: "",
            image: "images/shop-ohumyapple.jpg",
            instagram: "https://www.instagram.com/ohumyapple/"
        },
        "yururi": {
            name: "yururi (ユルリ)",
            detail: "パーツ使い放題ワークショップ、アクセサリー販売",
            description: "世界で1つのオリジナルアクセサリーが作れるパーツ使い放題のワークショップを開催します♡\nパーツを選んだらあとはお手伝いしますので、自分だけの”かわいい”を詰め込んだアクセサリーが簡単に作れます！\nかわいいパーツやプラスで付けられるモコモコ&キーホルダーは毎回人気なので欲しい色やデザインが無くなってしまうことも！\n気になる方はお早めにお越しくださいね♪\nアクセサリー販売もしますのでお子さまもmama達もぜひ遊びに来てください♡",
            chuzania: "世界で1つのオリジナルアクセサリー作り\nヘアピン10チュ、イヤリング&キーホルダー30チュ",
            image: "images/shop-yururi.jpg",
            instagram: "https://www.instagram.com/yururi06_f/"
        }
    };

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
                modalInstagram.href = data.instagram;

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
});
