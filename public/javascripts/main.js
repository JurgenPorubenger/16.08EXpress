console.log("Alive!");


document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    //получаем данные формы
    let registerForm = document.forms["registerForm"];
    let userName = registerForm.elements["login"].value;
    let userAge = registerForm.elements["pwd"].value;
    // сериализуем данные в json
    let user = JSON.stringify({Name: userName, Password: userAge});
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
    });
    xhr.send(user);
});