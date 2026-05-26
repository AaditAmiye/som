

document.addEventListener("click", function startScrollOnce() {
  // document.body.style.overflow="visible";
    // Smooth scroll to bottom (or far enough to trigger pixelstop = -3)
    $("html, body").animate(
        { scrollTop: $(document).height() }, // you can change target
        6000 // duration in ms
    );

    // Remove listener so it only happens once
    document.removeEventListener("click", startScrollOnce);
});

$(document).ready(function () {
  let zooming = false;

  $(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    var pixelstop = 1 - scrollTop / $(window).height();
console.log(pixelstop)
    if (!zooming) {
      // Stage 1: Brightness decrease
      if (pixelstop <= 0.2) {
        pixelstop = 0.2;
        zooming = true; // switch to zoom mode
      }
      $(".myimage").css("filter", "brightness(" + pixelstop + ")");
    } else {
      // Stage 2: Zoom in

 
      
     
      
     let zoomAmount = 1 + (scrollTop - $(window).height() * 0.8) / 200; // adjust speed
      $(".myimage").css("transform", "scale(" + zoomAmount + ")");
    }

 if (pixelstop <= -3) {
    pixelstop = -3;

    document.body.style.overflow = "hidden";

    document.querySelector('.theater').classList.add('open-curtains');
    document.querySelector('.myvdo').classList.add('myvdo-visible');
    document.querySelector('.wall').classList.add('wall-visible');

    // Play the video
    const video = document.getElementById("vdo");
    if (video.paused) {
        video.play().catch(err => {
            console.log("Autoplay failed:", err);
        });
    }
}

      
  });
});

// Reset scroll to top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
 
};
// Example: open after 2 seconds
