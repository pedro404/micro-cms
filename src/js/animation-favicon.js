(function () {
  //!------------------: START

  let counter = 1;
  let NumberOfPics = 8 + 1;
  let pause = 500;
  let nodeFavicon = document.querySelector('[type="image/svg"]');

  function animateFavicon() {
    console.log(counter);

    nodeFavicon.setAttribute("href", "/img/favicon/" + counter + ".svg");

    if (counter < NumberOfPics) {
      setTimeout(function () {
        animateFavicon();
      }, pause);
      counter++;
      if (counter == NumberOfPics) {
        counter = 1;
      }
    }
  }

  animateFavicon();

  //!------------------: STOP
})();
