var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  loop: true,
  rotate: true,
  mousewheel: {
    invert: true,
  },
});
   const root = document.documentElement;

      function zoomin() {
        document.body.style.transform = 'scale(2.1)';
      }

      function three() {
        root.style.setProperty('--initial_img', 'url("img-vdo/cartp.jpeg")');
        root.style.setProperty('--final_img', 'url("img-vdo/ligthbg.png")');
        document.getElementById("three").style.animation = "img1chge 3s forwards";
        setTimeout(function () {
          window.location.href = "../cart/index.html"
               
        }, 3000);
      }

      function two() {
        root.style.setProperty('--initial_img', 'url("img-vdo/thr.jpeg")');
        root.style.setProperty('--final_img', 'url("img-vdo/tr.png")');
        document.getElementById("two").style.animation = "img1chge 3s forwards";
        setTimeout(function () {
          window.location.href = "../thr/thr.html"
               
        }, 3000);
      }

      function one() {
        root.style.setProperty('--initial_img', 'url("img-vdo/old.png")');
        root.style.setProperty('--final_img', 'url("img-vdo/white.png")');
        document.getElementById("one").style.animation = "img1chge 3s forwards";
        setTimeout(function () {
          window.location.href = "../old/indexbike.html"
               
        }, 3000);
      }

     