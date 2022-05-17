(function () {
  //!------------------: START

  //!------------------: ClassName list elems no [preventDefault()]
  const arrClassName = ["a-a"];

  function elemTarget(e) {
    e = e || window.event;

    let num = -1;
    [...arrClassName].forEach((elem, index) => {
      if (e.srcElement.classList.contains(elem)) {
        num = index;
      }
    });

    if (num < 0) {
      e.preventDefault();
    }
    return e.target;
  }

  //!-----------------------------------------------------------: Click ${}
  document.addEventListener("click", (e) => {
    let elem = elemTarget(e);

    if (elem.closest(".obj-data-view")) {
      elem = elem.closest(".obj-data-view");
      myFunction(elem);
    }
  });

  function myFunction(elem) {
    let data = elem.getAttribute("data-contents");
    let url = elem.getAttribute("data-url");

    let xArr = JSON.parse(data.replaceAll(`'`, `"`));
    let str = xArr[5];
    const myArray = str[0].split(", ");
    console.log(str[0]);

    let newStr = "";

    [...myArray].forEach((elem) => {
      newStr += `<span class="w3-tag w3-light-grey w3-small w3-margin-bottom">${elem}</span>`;
    });

    let code = `<div class="w3-card-4 w3-margin w3-white">
  <img class="img-pic" src="${url}" alt="${xArr[0]}" style="width: 100%">
  <div class="w3-container">
    <h3>
${xArr[0]}
    </h3>
    <h5>${xArr[1]} &nbsp;
      <span class="w3-opacity"><time>${xArr[2]}</time></span>
    </h5>
  </div>
  <div class="w3-container">
    <p>${xArr[3]}</p>
    <div class="w3-row">
      <div class="w3-col m8 s12">
        <p>
        <a href="${xArr[4]}" class="a-a a-btn">
        <button class="w3-button w3-padding-large w3-white w3-border a-a"><b class="a-a">DEMO</b></button>
        </a><span class="hash-tags">${newStr}</span>
        </p>
      </div>
      <div class="w3-col m4 w3-hide-small">
        <p> <span class="w3-padding-large w3-right">
            </b><a href="${xArr[6]}" class="a-a">GitHub</a></b> &nbsp;
            <span class="git-ico">&nbsp;</span>
          </span>
        </p>
      </div>
    </div>
  </div>
</div>`;

    document.querySelector(".home-view").innerHTML = code;
  }

  //!------------------: STOP
})();
