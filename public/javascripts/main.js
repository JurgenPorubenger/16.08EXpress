console.log("Alive!");


document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    //получаем данные формы
    // let registerForm = document.forms["registerForm"];
    // let car = registerForm.elements["car"].value;
    // let model = registerForm.elements["model"].value;
    // let img = registerForm.elements["img"].value;
    let car = document.querySelector(".car").value;
    let model = document.querySelector(".model").value;
    let img = document.querySelector(".img").value;
    // сериализуем данные в json
    let user = JSON.stringify({car: car, model: model, img: img});
    console.log(user);

    let xhr = new XMLHttpRequest();
    // посылаем запрос на адрес "/api"
    xhr.open("POST", "/addCars", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("load", function () {
        let receivedUser = JSON.parse(xhr.response);

        //получаем и парсим ответ сервера
        // console.log("receivedUser.userName, "-", receivedUser.userAge");   // смотрим ответ сервера
        console.log(receivedUser);
        // console.log(xhr.response);
    });
    xhr.send(user);
});