// Create a CartService in Angular. Give it a getAllItems() method that uses $http to
// make a GET request to your /cart-items API.

// angular service here 

// const http = require("http");
// let k = require("cartConnect.js");
// console.log(k.ks(0));

// http.createServer(onRequest).listen(3005);

// function onRequest(request, response){
//     response.write(k.ks(0));
//     response.end();
// }

app.get("/cart", (req, res) => {
    res.send("Hello Shoppers!");
    });

