//Connect to DB:
var mysql = require("mysql");
var columnify = require('columnify');
var inquirer = require("inquirer");
var columns = columnify(data, options);
var options = "";
var data = "";

//connect to my workbench with my info
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

//actually display in node.js
function displayItems() {
    connection.query("SELECT * FROM products", function(err, rows, fields) {
        if (err) throw err;
        var columns = columnify(rows, {
            minWidth: 20,
            config: {
                description: { maxWidth: 20 }
            }
        })
        console.log(columns)
        buyProducts();
    });
}
//run the function that actually displays products
displayItems();

//function that allows you to buy products and will update the workbench as things are purchased
function buyProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
//display list of all the products from products table
        inquirer.prompt({
            name: "products",
            type: "list",
            choices: function(value) {
                var productsArray = [];
                for (var i = 0; i < res.length; i++) {
                    productsArray.push(res[i].product_name);
                }
                return productsArray;
            },
            //select that product you want to buy
            message: "Which product do you want to buy??"
        }).then(function(answer) {
            // console.log(answer.products);
            //product selected, user inputs quantity
            for (var i = 0; i < res.length; i++) {
                if (res[i].product_name === answer.products) {
                    var chosenItem = res[i];
                    inquirer.prompt({
                        name: "quantity",
                        type: "input",
                        message: "How many units would you like to buy?"
                        //user enters how many units he wants to buy
                    }).then(function(answer) {
                        // console.log(answer.quantity)
                        //if insufficient stock,user goes back to start of functoin
                        // console.log("line 65");
                        if (chosenItem.stock_quantity < parseInt(answer.quantity)) {
                            console.log("insufficient quantity");
                            buyProducts();
                            //if sufficient, then he buys and update table
                        } else {
                            var total = chosenItem.price * parseInt(answer.quantity);
                            var inventoryLeft = parseInt(chosenItem.stock_quantity) - parseInt(answer.quantity);
                            // console.log(total)
                            connection.query("UPDATE products SET ? WHERE ?", [{
                                "stock_quantity": parseInt(chosenItem.stock_quantity) - parseInt(answer.quantity)
                            },{  "item_id": chosenItem.item_id}], 
                            function(err, res) {
                                    console.log("Successful purchase! The total was $"+ total + " and there are " + inventoryLeft + " left!")
                            });
                        }
                    })
                }

            }
        })
    })
}