console.log("Alive!");


document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    //получаем данные формы
    let registerForm = document.forms["registerForm"];
    let car = registerForm.elements["car"].value;
    let model = registerForm.elements["model"].value;
    let price = registerForm.elements["price"].value;
    // сериализуем данные в json
    let user = JSON.stringify({car: car, model: model, price: price});
    console.log(user);

    let xhr = new XMLHttpRequest();
    // посылаем запрос на адрес "/api"
    xhr.open("POST", "/api", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("load", function () {
        //получаем и парсим ответ сервера
        let receivedUser = JSON.parse(xhr.response);
        // console.log("receivedUser.userName, "-", receivedUser.userAge");   // смотрим ответ сервера
        console.log(receivedUser);
        console.log(xhr);
    });
    xhr.send(user);
});