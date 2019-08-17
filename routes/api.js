const express = require('express');
const router = express.Router();

const jsonParser = express.json();

router.get("/", function (request, response) {
    response.render('cars');
});

router.post("/", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
    response.json(request.body); // отправляем пришедший ответ обратно
});

module.exports = router;
