<!DOCTYPE html>
<html>

<body>

        <form action="./upload-img.php" method="post" enctype="multipart/form-data">
                Select image to upload:
                <input class="in-file" type="file" name="fileToUpload" id="fileToUpload">
                <input type="submit" value="Upload Image" name="submit">
        </form>
        <button class="btn-send">Send</button>

        <script>
                //!------------------: ClassName list elems no [preventDefault()]
                const arrClassName = ["in-file"];

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

                document.addEventListener('click', (e) => {
                        let elem = elemTarget(e);

                        if (elem.classList.contains('btn-send')) {
                                let input = document.querySelector(".in-file");

                                FetchSaveFile(input.files[0]);
                        }
                });
        </script>
        <script>
                async function FetchSaveFile(txtData) {
                        let file = './upload-img.php';
                        var formData = new FormData();

                        formData.append('fileToUpload', txtData);

                        fetch(file, {
                                method: "POST",
                                body: formData
                        }).then((response) => {
                                console.log('resolved', response);
                                return response.text();
                        }).then(data => {
                                console.log(data);
                        }).catch((err) => {
                                console.log('rejected', err);
                        });
                }
        </script>
</body>

</html>