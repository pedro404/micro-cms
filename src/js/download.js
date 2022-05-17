(function () {
  //!------------------: START

  function goPrint(str) {
    console.log(str);
    let strArray = str.split(",");
    [...strArray].forEach((elem) => {
      goFetchJson(`${elem}`);
    });
  }

  async function goFetchJson(file) {
    fetch(file)
      .then((response) => {
        console.log("resolved", response);
        return response.json();
      })
      .then((data) => {
        result(data, file);
      })
      .catch((err) => {
        console.log("rejected", err);
      });
  }

  function result(data, file) {
    if (data != "") {
      Object.entries(data).forEach(([firstName, surname]) => {
        console.log(`${firstName} ${surname}`); // data a,b,
        console.log(surname[0]); // a

        let urlImg = `./htm/res/img/${breakString(file)}.jpg`;
        let dataTitle = surname[0];
        let dataTitleDescription = surname[1];

        const arr = Object.keys(surname).map((key) => [surname[key]]);
        let jsonData = JSON.stringify(arr).replaceAll(`"`, `'`);

        const code = `<li class="w3-padding-16 obj-data-view" data-url="${urlImg}" data-contents="${jsonData}">
              <div class="block w3-left w3-margin-right">
                <div class="block__inner">
                  <img src="${urlImg}" class="image" alt="${dataTitle}">
                </div>
              </div>
              <span class="w3-large">${dataTitle}</span>
              <br>
              <span>${dataTitleDescription}</span>
            </li>`;

        document.querySelector(".posts-box").innerHTML += code;
      });
    }
  }

  function breakString(file) {
    let name = file.split("/").pop(); // 638519.json
    console.log(name);
    let ext = name.split(".").slice(0, -1).join("."); // 638519
    console.log(ext);
    return ext;
  }

  async function goFetchText(file) {
    fetch(file, {
      method: "get",
      credentials: "include",
    })
      .then((response) => response.text())
      .then((data) => {
        goPrint(data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  goFetchText("./php/file-list.php");
  //!------------------: STOP
})();
