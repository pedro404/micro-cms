//!------------------: ClassName list elems no [preventDefault()]
const arrClassName = ["in-img"];

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

//!-------------------------------------------------------------------------: clickwrite-new-post
document.addEventListener("click", (e) => {
  let elem = elemTarget(e);

  //!--------------: Button Reset
  if (elem.classList.contains("reset-post")) {
    //document.querySelector(".my-form").reset();
    window.location.reload();
  }
  //!--------------: Button Send
  if (elem.classList.contains("write-new-post")) {
    createJson();
  }
});

function createJson() {
  let elements = document.querySelectorAll(".in-elem");
  let Q = {};
  Q.data = [];

  [...elements].forEach((elem) => {
    let str = elem.value;
    str = str.replace(new RegExp("\r\n|\r|\n", "g"), "<br>");

    Q.data.push(str);
  });
  console.log(JSON.stringify(Q));
  fetchSaveJSON(JSON.stringify(Q));
}

//!-------------------------------------------------------:  Upload JSON

async function fetchSaveJSON(txtData) {
  let file = "./upload-json.php";
  var formData = new FormData();
  formData.append("x", txtData);

  fetch(file, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log("resolved", response);
      return response.text();
    })
    .then((data) => {
      console.log(data);
      if (data != "") {
        //!--------------------------: Upload Image
        fetchSaveImg(document.querySelector(".in-img").files[0]);
      }
    })
    .catch((err) => {
      console.log("rejected", err);
    });
}

//!-------------------------------------------------------: Upload Image

async function fetchSaveImg(txtData) {
  let file = "./upload-img.php";
  var formData = new FormData();

  formData.append("fileToUpload", txtData);

  fetch(file, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log("resolved", response);
      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("rejected", err);
    });
}

//!-------------------------------: auto-height-textarea
var tx = document.querySelectorAll(".moka");

[...tx].forEach((elem) => {
  elem.style.height = `${elem.style.scrollHeight}px`;
  elem.addEventListener("input", OnInput, false);
});

function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}
//!-------------------------------: auto-height-textarea

//!-------------------------------: onload
const date = new Date(Date());
let prnDt = new Intl.DateTimeFormat("cs-CZ", {
  dateStyle: "long",
}).format(date);

document.querySelector(".title-data").value = prnDt;

//!-------------------------------: onload
