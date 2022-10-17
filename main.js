$(function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const cover = document.getElementById("cover");
  const coverMenu = document.getElementById("cover-menu");
  const images = document.querySelectorAll(".appear");

  hamburgerMenu.addEventListener("click", () => {
    cover.classList.toggle("disable");
    hamburgerMenu.classList.toggle("active");
    coverMenu.classList.toggle("appear");
  });
  $("#cover").on("click", function () {
    hamburgerMenu.classList.toggle("active");
    $("#cover").addClass("disable");
    $("#cover-menu").removeClass("appear");
  });

  $("#cover-menu a").on("click", function () {
    hamburgerMenu.classList.toggle("active");
    $("#cover").addClass("disable");
    $("#cover-menu").removeClass("appear");
  });

  $('a[href^="#"]').click(function () {
    // リンクを

    let href = $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 600はスクロール速度で単位はミリ秒

    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });

  $(".slick-area").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // console.log(this);
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});
