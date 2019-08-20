console.log("Alive!");


document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    //получаем данные полей ввода
    let car = document.querySelector("#car").value;
    let model = document.querySelector("#model").value;
    let img = document.querySelector("#img").value;
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
        console.log(receivedUser);
        // console.log(xhr.response);
    });
    //отправляем на сервер данные из инпутов
    xhr.send(user);
});