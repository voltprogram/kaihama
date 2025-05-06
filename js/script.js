// ハンバーガーメニュー開閉
document.querySelector('.hamburger-menu').addEventListener('click', function () {
  this.classList.toggle('open');
  document.querySelector('header').classList.toggle('open');
})

// ファーストヴュー・スライダー
const fvSplide = new Splide("#fv-splide", {
    autoplay: true, // 自動再生
    type: "fade", // フェード
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
    arrows: false, // 矢印ボタンを非表示
    pagination: false, // ページネーションを非表示
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
    interval: 6000, // 自動再生の間隔
    speed: 2000, // スライダーの移動時間
  }).mount();

// イベント・スライダー
const eventSplide = new Splide("#event-splide", {
    autoplay: true, // 自動再生
    type: "loop", // ループ
    perPage: 2,
    perMove: 1,
    arrows: true, // 矢印ボタンを非表示
    pagination: false, // ページネーションを非表示
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
    interval: 6000, // 自動再生の間隔
    speed: 1000, // スライダーの移動時間
    padding: "15%",
    gap: 85,
    breakpoints: {
        768: {
            perPage: 1, //769未満の表示枚数１枚
            padding: "0",
        }
    }
  }).mount();

// アチーブメント・スライダー
new Splide("#achievement-splide", {
    type: "loop", // ループ
    autoScroll: {
        pauseOnHover: false,
        speed: 0.35, // カーソルが乗ってもスクロールを停止させない
      },
    perPage: 3,
    arrows: false, // 矢印ボタンを非表示
    pagination: false, // ページネーションを非表示
    padding: "15%",
    drag: "free",
    gap: 30,
    breakpoints: {
        768: {
            perPage: 1, //769未満の表示枚数１枚
            padding: "10%",
            gap: 25,
        }
    }
  }).mount( window.splide.Extensions );

// aos.js
AOS.init({
  easing: "ease-out-quad",
  duration: 800,
  once: true,
})