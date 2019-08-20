const express = require('express');
const router = express.Router();


let carList = [];


router.post("/", function (request, response) {
    if(!request.body) return response.sendStatus(400);
    carList.push(request.body);
    console.log(request.body);
    response.json(request.body); // отправляем пришедший ответ обратно
});
router.get("/", function (request, response) {
    console.log(carList);
    response.render('cars', { table: carList})
});



module.exports = router;


//{ title: 'Express' }
//,{ title: request.body }

// Compile a function

// Render the function

// => '<string>of pug</string>'
// console.log(pug);
// carList.forEach((item,i,arr)=>{
// response.render('cars', { carName: () => arr[i]['car'] })
// response.render('cars',{ carName: arr[i]['car'], carModel: arr[i]['model'], carUrl: arr[i]['price'] }); // отправляем пришедший ответ обратно
// });