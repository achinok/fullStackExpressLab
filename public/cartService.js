"use strict"
{
// Create a CartService in Angular. Give it a getAllItems() method that uses $http to
// make a GET request to your /cart-items API.
function cartService() {
    this.getAllItems = () => {
        app.get("/cart", (req, res) => {
            res.send("Hello Shoppers!");
            });  
        }
    }   
    angular
    .module("app")
    .service("cartService",cartService);
    }